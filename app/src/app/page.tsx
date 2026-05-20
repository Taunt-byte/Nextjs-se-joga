"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const noticias = [
    {
      id: 1,
      titulo: "Campeonato de LoL movimenta cenário gamer",
      descricao:
        "Evento reúne equipes universitárias e streamers em disputas ao vivo.",
      data: "20 Maio 2026",
      imagem:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20",
    },
    {
      id: 2,
      titulo: "Tecnologia e eSports crescem no Brasil",
      descricao:
        "Mercado gamer continua expandindo oportunidades profissionais.",
      data: "19 Maio 2026",
      imagem:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    },
    {
      id: 3,
      titulo: "Novos streamers ganham destaque na Twitch",
      descricao:
        "Criadores independentes aumentam audiência em transmissões ao vivo.",
      data: "18 Maio 2026",
      imagem:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      
      {/* NAVBAR */}
      <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          
          <div>
            <h1 className="text-3xl font-bold text-red-500">
              Se Joga!
            </h1>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-red-400 transition">
              Home
            </Link>

            <Link href="/news" className="hover:text-red-400 transition">
              Notícias
            </Link>

            <Link href="/games" className="hover:text-red-400 transition">
              Games
            </Link>

            <Link href="/esports" className="hover:text-red-400 transition">
              eSports
            </Link>

            <Link href="/contact" className="hover:text-red-400 transition">
              Contato
            </Link>
          </nav>

          <button className="bg-red-600 px-4 py-2 rounded-xl hover:bg-red-700 transition">
            Entrar
          </button>
        </div>
      </header>

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

      {/* NOTÍCIAS */}
      <section className="container mx-auto py-16 px-4">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-3xl font-bold">
            Últimas Notícias
          </h3>

          <Link
            href="/news"
            className="text-red-400 hover:underline"
          >
            Ver Todas
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {noticias.map((noticia) => (
            <div
              key={noticia.id}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-500 hover:-translate-y-2 transition duration-300 shadow-lg"
            >
              <div className="relative h-56">
                <Image
                  src={noticia.imagem}
                  alt={noticia.titulo}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <span className="text-sm text-red-400">
                  {noticia.data}
                </span>

                <h4 className="text-xl font-bold mt-2 mb-3">
                  {noticia.titulo}
                </h4>

                <p className="text-zinc-400 mb-4">
                  {noticia.descricao}
                </p>

                <button className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition">
                  Ler Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRENDING */}
      <section className="bg-zinc-900 py-14">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8">
            Trending Topics
          </h3>

          <div className="flex flex-wrap gap-4">
            {[
              "League of Legends",
              "Valorant",
              "CS2",
              "Twitch",
              "Streamers",
              "React",
              "Next.js",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-zinc-800 px-4 py-2 rounded-full hover:bg-red-600 transition cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-b from-red-700 to-red-900 text-white mt-10">
        <div className="container mx-auto px-4 py-10">

          <div className="grid md:grid-cols-3 gap-10">
            
            <div>
              <h4 className="text-2xl font-bold mb-4">
                Se Joga!
              </h4>

              <p className="text-zinc-200">
                Portal focado em notícias gamer, eSports,
                streamers e tecnologia.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">
                Navegação
              </h4>

              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-zinc-300">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/about" className="hover:text-zinc-300">
                    Sobre Nós
                  </Link>
                </li>

                <li>
                  <Link href="/work" className="hover:text-zinc-300">
                    Trabalhos
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="hover:text-zinc-300">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">
                Redes Sociais
              </h4>

              <div className="flex gap-4">
                <button className="bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700">
                  Instagram
                </button>

                <button className="bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700">
                  Twitch
                </button>

                <button className="bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700">
                  YouTube
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-red-500 mt-10 pt-6 text-center text-zinc-300">
            <p>
              © {new Date().getFullYear()} Se Joga! - Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}