import Image from "next/image";
import Link from "next/link";

export default function NewsCard() {
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
        <div>
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
        </div>
    );
}