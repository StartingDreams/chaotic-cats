import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default async function TopNav() {
  return (
    <nav className="flex h-16 w-full flex-row items-center justify-between gap-4 bg-gradient-to-b from-[#000000] to-[#1e1e22] px-2 text-white">
      <div className="flex flex-row items-center gap-4">
        <div className="text-xl font-bold">
          <Link href="/">
            <Image
              src={`/cats/purple_magic_cat.png`}
              alt="Chaotic Cats Logo"
              width={28}
              height={28}
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <SignedIn>
          <Link href="/play">Play</Link>
          <Link href="/dashboard">Dashboard</Link>
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
