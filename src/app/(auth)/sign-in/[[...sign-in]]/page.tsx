import { SignIn } from "@clerk/nextjs";

export function SignInPage() {
  return <SignIn path="/sign-in" />;
}

export default SignInPage;
