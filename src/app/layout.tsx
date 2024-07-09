import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import TopNav from "~/app/_components/topnav/topnav";

import "~/styles/globals.css";

export const metadata = {
  title: "Chaotic Cats",
  description:
    "Cats and chaos are the best of friends and the worst of enemies",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <main className="flex h-[100dvh] flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            <TopNav />
            <div className="h-full w-full px-2">{children}</div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
