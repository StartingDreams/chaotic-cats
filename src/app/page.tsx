import { Playground } from "~/app/_components/playground/playground";
import TopNav from "~/app/_components/topnav/topnav";

export function HomePage() {
  return (
    <main className="flex h-[100dvh] flex-col">
      <TopNav />
      <div className="flex flex-grow flex-row flex-wrap items-center justify-center overflow-x-hidden overflow-y-hidden bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <Playground />
      </div>
      <div>Footer</div>
    </main>
  );
}

export default HomePage;
