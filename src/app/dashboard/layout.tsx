export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full flex-col">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div>{children}</div>
    </div>
  );
}
