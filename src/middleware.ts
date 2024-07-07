import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

const isProtectedRoute = createRouteMatcher(["/dashboard"]);

export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) {
    auth().protect();
  }
});
