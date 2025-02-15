export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full flex-grow flex-row flex-wrap items-center justify-center">
      {children}
    </div>
  );
}
