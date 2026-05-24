import Image from "next/image";

export default function Hero() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420"
          alt="Hero"
          fill
          className="object-cover opacity-40"
        />

        <div className="relative z-10 text-center max-w-3xl px-4">
          <p className="text-red-400 uppercase tracking-widest mb-3">
            Portal Gamer
          </p>

          <h2 className="text-5xl font-extrabold mb-4">
            As principais notícias do mundo gamer e geek
          </h2>

          <p className="text-zinc-300 mb-6">
            Acompanhe novidades sobre eSports, streamers, tecnologia,
            campeonatos e tendências do universo digital.
          </p>

          <button className="bg-red-600 px-6 py-3 rounded-xl text-lg hover:bg-red-700 transition">
            Explorar Notícias
          </button>
        </div>
      </section>
    </div>
  );
}
