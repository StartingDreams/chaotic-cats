import { Webhook } from "svix";
import { headers } from "next/headers";
import type { WebhookEvent } from "@clerk/nextjs/server";
import { env } from "~/env";

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
        error: "Error occured -- no svix headers",
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

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return Response.json(
      { success: false, error: "Error occurred" },
      {
        status: 400,
      },
    );
  }

  // Do something with the payload
  // For this guide, you simply log the payload to the console
  const { id } = evt.data;
  const eventType = evt.type;
  console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  return Response.json({ success: true, test: "test" }, { status: 200 });
}
