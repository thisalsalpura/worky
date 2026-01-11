import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <Image
        src="/logo.svg"
        alt="Worky logo"
        width={240}
        height={134.67}
        priority
      />
    </div>
  );
}
