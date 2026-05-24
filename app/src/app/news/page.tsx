import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function NewsPage() {
  const noticias = [
    {
      id: 1,
      category: "eSports",
      title: "Lisa conquista campeonato internacional de League of Legends",
      image:
        "https://img.freepik.com/fotos-gratis/garota-de-tiro-completo-jogando-videogame_23-2150573858.jpg",
      content:
        "A jogadora Lisa impressionou o cenário competitivo ao vencer um dos maiores torneios internacionais de League of Legends.",
      author: "Equipe Se Joga!",
      date: "23 Maio 2026",
    },
    {
      id: 2,
      category: "Games",
      title: "Novo RPG traz protagonista feminina e gráficos realistas",
      image:
        "https://img.freepik.com/fotos-gratis/parece-uma-jovem-morena-caucasiana-satisfeita-com-fones-de-ouvido_141793-116300.jpg",
      content:
        "O jogo Aventuras Épicas chega com mundo aberto, combate dinâmico e uma protagonista extremamente carismática.",
      author: "Equipe Se Joga!",
      date: "22 Maio 2026",
    },
    {
      id: 3,
      category: "Streaming",
      title: "Streamers femininas dominam rankings da Twitch em 2026",
      image:
        "https://img.freepik.com/fotos-gratis/retrato-de-jogador-online_23-2149813882.jpg",
      content:
        "Cada vez mais criadoras de conteúdo estão alcançando números impressionantes de audiência na Twitch.",
      author: "Equipe Se Joga!",
      date: "21 Maio 2026",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      {/* HERO */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <img
          src="https://img.freepik.com/fotos-gratis/garota-jogando-videogame_23-2150573857.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 bg-black bg-opacity-50">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Notícias Gamer
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Fique por dentro das principais novidades do mundo dos games,
            eSports e streaming feminino.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <main className="max-w-7xl mx-auto px-4 py-10 rounded-3xl mt-10">
        {/* TÍTULO */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Últimas Notícias</h2>

          <button className="bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-full">
            Ver Tudo
          </button>
        </div>

        {/* GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {noticias.map((noticia) => (
            <article
              key={noticia.id}
              className="bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-300"
            >
              {/* IMAGEM */}
              <div className="relative">
                <img
                  src={noticia.image}
                  alt={noticia.title}
                  className="w-full h-64 object-cover"
                />

                <span className="absolute top-4 left-4 bg-red-600 text-white text-sm px-4 py-1 rounded-full font-semibold">
                  {noticia.category}
                </span>
              </div>

              {/* TEXTO */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-300 mb-4">
                  <span>{noticia.author}</span>
                  <span>•</span>
                  <span>{noticia.date}</span>
                </div>

                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  {noticia.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {noticia.content}
                </p>

                <Link href={`/noticia/${noticia.id}`}>
                  <button className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-xl font-semibold">
                    Ler Notícia
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* DESTAQUE */}
        <section className="mt-16 bg-gradient-to-r from-red-700 to-red-900 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://img.freepik.com/fotos-gratis/mulher-jogando-online-em-casa_23-2149829153.jpg"
            alt="Destaque"
            className="w-full md:w-[400px] rounded-2xl object-cover"
          />

          <div>
            <span className="bg-white text-red-700 px-4 py-1 rounded-full text-sm font-bold">
              Destaque da Semana
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-4">
              O crescimento das mulheres nos eSports
            </h2>

            <p className="text-gray-200 leading-relaxed mb-6">
              O cenário competitivo feminino vem crescendo rapidamente,
              trazendo novas organizações, campeonatos e oportunidades para
              jogadoras profissionais em todo o mundo.
            </p>

            <button className="bg-white text-red-700 font-bold px-6 py-3 rounded-xl hover:scale-105 transition">
              Saiba Mais
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}