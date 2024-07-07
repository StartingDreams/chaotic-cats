import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export async function TopNav() {
  return (
    <nav className="flex h-16 w-full flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-4">
        <div className="text-xl font-bold">
          <Image
            src={`/cats/purple_magic_cat.png`}
            alt="Chaotic Cats Logo"
            width={28}
            height={28}
          />
        </div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <SignedIn>
          <div className="text-xl font-bold">Settings</div>
        </SignedIn>
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
