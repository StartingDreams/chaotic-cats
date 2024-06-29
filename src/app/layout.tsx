import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

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
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
