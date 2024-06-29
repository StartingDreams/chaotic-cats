import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export async function TopNav() {
  return (
    <nav className="flex h-16 w-full flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-4"></div>
      <div className="flex flex-row items-center gap-4">
        <div className="text-xl font-bold">Play</div>
        <div className="text-xl font-bold">Settings</div>
        <div className="text-xl font-bold">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
