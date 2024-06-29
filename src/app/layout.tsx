import { ClerkProvider } from "@clerk/nextjs";
import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import TopNav from "~/app/_components/topnav/topnav";

export const metadata = {
  title: "Chaotic Cats",
  description:
    "Cats and chaos are the best of friends and the worst of enemies",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

type Props = {
  children: React.ReactNode;
};

export function RootLayout({ children }: Props) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <main className="flex h-[100dvh] flex-col">
            <TopNav />
            <div className="flex flex-grow flex-row flex-wrap items-center justify-center overflow-x-hidden overflow-y-hidden bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
              {children}
            </div>
            <div>Footer</div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

export default RootLayout;
