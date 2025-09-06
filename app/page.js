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
        // className="object-cover"
      />

      {/* Matn ustiga chiqishi uchun */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl font-bold">Rino Jarroh Dr Samandar</h1>
        <p className="mt-4 text-lg">Tomoq | Og`iz & Burun</p>
        <div className="bg-cyan-700 mt-50 p-5 rounded-2xl hover:bg-cyan-500">
          <button className="text-2xl text-blue cursor-pointer">
            Doctor Qabuliga yozilish
          </button>
        </div>
      </div>
    </section>
  );
}
