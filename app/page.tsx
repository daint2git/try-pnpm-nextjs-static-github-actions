import Image from "next/image";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center p-20">
      Home
      <div className="aspect-square relative w-[100px] h-[100px]">
        <Image
          src={`${router.basePath}/vercel.svg`}
          alt="Vercel Logo"
          priority
          fill
        />
      </div>
    </main>
  );
}
