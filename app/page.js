import Image from "next/image";

export default function HomePage() {
  return (
    <section className="relative w-full h-screen">
      {/* Rasm */}
      <Image
        src="/hero.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />

      {/* Matn ustiga chiqishi uchun */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl font-bold">Mening Portfolio Saytim</h1>
        <p className="mt-4 text-lg">Frontend Developer | React & Next.js</p>
      </div>
    </section>
  );
}
