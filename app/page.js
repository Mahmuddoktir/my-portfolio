import Image from "next/image";

export default function Home() {
  return (
    <main className="p-10 text-center">
      <Image
        src="/profile.jpg" // public papkadan oladi
        alt="Mening rasmiym"
        width={150}
        height={150}
        className="mx-auto rounded-full border-4 border-gray-300"
      />
      <h1 className="text-4xl font-bold">Salom, men Mahmud!</h1>
      <p className="mt-4 text-lg text-gray-600">
        Bu mening portfolio saytim. Men frontend developer’mан 🚀
      </p>
    </main>
  );
}
