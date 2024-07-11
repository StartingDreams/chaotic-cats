import { SignedIn, SignedOut } from "@clerk/nextjs";
import Playground from "~/app/_components/playground";

export default function HomePage() {
  return (
    <>
      <SignedOut>
        <h1 className="text-4xl font-bold">Sign In to Play</h1>
      </SignedOut>
      <SignedIn>
        <Playground />
      </SignedIn>
    </>
  );
}
