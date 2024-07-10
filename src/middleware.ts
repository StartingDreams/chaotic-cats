import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/play(.*)",
  "/select-org(.*)",
]);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/(.*)", "/(api|trpc)(.*)"],
};

export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) {
    auth().protect();
  }

  if (isAdminRoute(request)) {
    const { has } = auth();
    if (!has({ permission: "org:db:edit" })) {
      return NextResponse.redirect(new URL("/select-org", request.url));
    }
  }
});
