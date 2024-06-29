import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Chaotic Cats
        </h1>
        <Image
          src="/cats/purple_magic_cat.png"
          alt=""
          className="cat"
          width={200}
          height={200}
        />
      </div>
    </main>
  );
}
