import { Webhook } from "svix";
import { headers } from "next/headers";
import type { UserJSON, WebhookEvent } from "@clerk/nextjs/server";
import { env } from "~/env";
import { db } from "~/server/db";
import { user } from "~/server/db/schema/user";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  const WEBHOOK_SECRET = env.CLERK_UPDATE_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Missing required environment variable");
  }

  // Get the headers from the request
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return Response.json(
      {
        success: false,
        error: "Error occurred: missing svix headers",
      },
      {
        status: 400,
      },
    );
  }

  // Get the body
  const payload = (await request.json()) as string;
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let event: WebhookEvent;

  // Verify the payload with the headers
  try {
    event = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (error) {
    console.error("Error verifying webhook:", error);
    return Response.json(
      { success: false, error: "Error occurred" },
      {
        status: 400,
      },
    );
  }

  const {
    data: { id },
    type: eventType,
  } = event;

  if (!id) {
    return Response.json(
      { success: false, error: "No user ID found in the payload" },
      { status: 400 },
    );
  }

  let responseCode = 400;
  let success = false;
  let error = `Error processing ${eventType} event`;

  switch (eventType) {
    case "user.deleted":
      if (await deleteUser(id)) {
        success = true;
        responseCode = 200;
        error = "";
      }
      break;
    case "user.created":
      if (await updateUser(event.data)) {
        success = true;
        responseCode = 200;
        error = "";
      }
      break;
    case "user.updated":
      if (await updateUser(event.data)) {
        success = true;
        responseCode = 200;
        error = "";
      }
      break;
    default:
      error = `Unknown event type ${eventType}`;
  }

  return Response.json({ success, error }, { status: responseCode });
}

const fetchUser = async (userId: string) => {
  const queryResult = await db
    .select({
      id: user.id,
      username: user.username,
      preferredName: user.preferredName,
      isAdmin: user.isAdmin,
      deletedAt: user.deletedAt,
    })
    .from(user)
    .where(eq(user.id, userId))
    .limit(1);

  if (queryResult.length > 0) {
    return queryResult[0];
  }

  console.log(`User ${userId} not found`);
  return null;
};

const updateUser = async (currentUserData: UserJSON) => {
  let currentUser = await fetchUser(currentUserData.id);

  if (!currentUser) {
    console.log(`User ${currentUserData.id} not found, creating new user`);
    const createQueryResult = await db
      .insert(user)
      .values({
        id: currentUserData.id,
        username: currentUserData.username ?? "",
        preferredName: currentUserData.username ?? "",
      })
      .returning({
        id: user.id,
        username: user.username,
        preferredName: user.preferredName,
        isAdmin: user.isAdmin,
        deletedAt: user.deletedAt,
      });
    if (createQueryResult.length > 0) {
      currentUser = createQueryResult[0];
    }
  }

  if (!currentUser) {
    console.log(`Error fetching user ${currentUserData.id}`);
    return false;
  }

  if (currentUser.preferredName !== "") {
    return true;
  }

  const updateResults = await db
    .update(user)
    .set({
      username: currentUserData.username ?? "",
      preferredName: currentUserData.username ?? "",
    })
    .where(eq(user.id, currentUserData.id));

  console.log({ updateResults });

  return true;
};

const deleteUser = async (userId: string) => {
  const currentUser = await db.query.user.findFirst({
    columns: {
      id: true,
      deletedAt: true,
    },
    where: eq(user.id, userId),
  });

  if (!currentUser) {
    console.log(`User ${userId} not found`);
    return false;
  }

  if (currentUser?.deletedAt) {
    console.log(`User ${userId} already deleted`);
    return false;
  }

  await db
    .update(user)
    .set({
      deletedAt: new Date(),
    })
    .where(eq(user.id, userId));

  return true;
};
