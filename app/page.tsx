import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-20">
      Home
      <div className="aspect-square relative w-[100px] h-[100px]">
        <Image
          src={`${process.env.BASE_PATH}/vercel.svg`}
          alt="Vercel Logo"
          priority
          fill
        />
      </div>
    </main>
  );
}
