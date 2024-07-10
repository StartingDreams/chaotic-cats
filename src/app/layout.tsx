import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import TopNav from "~/app/_components/nav-bar/top-nav";

import "~/styles/globals.css";

export const metadata = {
  title: "Chaotic Cats",
  description:
    "Cats and chaos are the best of friends and the worst of enemies",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <main className="flex h-[100dvh] flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            <TopNav />
            <div className="h-full w-full">
              {children}
              {modal}
              <div id="modal-root" />
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

export default RootLayout;
