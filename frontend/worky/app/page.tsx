import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-full items-center justify-center">
      <Image
        src="/logo.svg"
        alt="Worky logo"
        width={240}
        height={140}
        style={{ width: "auto" }}
        priority
      />
    </div>
  );
}
