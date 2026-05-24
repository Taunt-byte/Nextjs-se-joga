const games = [
  {
    id: 1,
    title: "League of Legends",
    category: "MOBA",
    viewers: "120K viewers",
    femaleStreamers: "3.2K streamers",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    description:
      "League of Legends continua sendo um dos jogos mais populares entre streamers femininas na Twitch.",
  },
  {
    id: 2,
    title: "Valorant",
    category: "FPS",
    viewers: "98K viewers",
    femaleStreamers: "2.7K streamers",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    description:
      "Valorant possui uma comunidade feminina extremamente ativa no competitivo e no streaming.",
  },
  {
    id: 3,
    title: "Fortnite",
    category: "Battle Royale",
    viewers: "87K viewers",
    femaleStreamers: "2.1K streamers",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1200&auto=format&fit=crop",
    description:
      "Fortnite continua atraindo grandes criadoras de conteúdo e streamers casuais.",
  },
  {
    id: 4,
    title: "Minecraft",
    category: "Sandbox",
    viewers: "76K viewers",
    femaleStreamers: "2K streamers",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    description:
      "Minecraft domina categorias de criatividade, sobrevivência e roleplay feminino.",
  },
  {
    id: 5,
    title: "The Sims 4",
    category: "Simulação",
    viewers: "45K viewers",
    femaleStreamers: "1.6K streamers",
    image:
      "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=1200&auto=format&fit=crop",
    description:
      "The Sims é um dos jogos mais fortes entre criadoras de conteúdo lifestyle e casual.",
  },
  {
    id: 6,
    title: "GTA RP",
    category: "Roleplay",
    viewers: "140K viewers",
    femaleStreamers: "3.8K streamers",
    image:
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=1200&auto=format&fit=crop",
    description:
      "O cenário de GTA RP cresceu absurdamente entre streamers femininas na Twitch.",
  },
];

export default function Games() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative h-[350px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
          className="w-full h-full object-cover brightness-50"
          alt="Banner Games"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-red-500">
            Jogos em Alta
          </h1>

          <p className="text-gray-300 max-w-2xl">
            Descubra os jogos mais transmitidos por mulheres na Twitch.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-white">
              Jogos Mais Jogados
            </h2>
            <p className="text-gray-400 mt-2">
              Ranking baseado em streamers femininas na Twitch.
            </p>
          </div>

          <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-xl font-semibold">
            Atualizar Ranking
          </button>
        </div>
        {/* GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {games.map((game) => (
            <article
              key={game.id}
              className="bg-[#111] border border-red-900/40 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition"
            >
              <div className="relative">
                <img
                  src={game.image}
                  className="w-full h-64 object-cover"
                  alt={game.title}
                />

                <span className="absolute top-4 left-4 bg-red-600 text-white text-sm px-4 py-1 rounded-full font-semibold">
                  {game.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-2xl font-bold">{game.title}</h2>
                  <span className="text-red-500 text-sm">● LIVE</span>
                </div>

                <p className="text-gray-400 mb-6">{game.description}</p>

                {/* STATS */}
                <div className="bg-black border border-red-900/30 rounded-2xl p-4 flex justify-between mb-6">
                  <div>
                    <p className="text-gray-500 text-sm">Audiência</p>
                    <p className="font-bold">{game.viewers}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-gray-500 text-sm">Streamers</p>
                    <p className="font-bold text-red-500">
                      {game.femaleStreamers}
                    </p>
                  </div>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-xl font-semibold">
                  Ver Categoria
                </button>
              </div>
            </article>
          ))}
        </section>
        {/* DESTAQUE */}{" "}
        <section className="mt-20 bg-gradient-to-r from-red-700 to-red-900 rounded-3xl p-10">
          {" "}
          <div className="max-w-4xl">
            {" "}
            <span className="bg-white text-red-700 px-4 py-1 rounded-full text-sm font-bold">
              {" "}
              Destaque Twitch{" "}
            </span>{" "}
            <h2 className="text-4xl font-bold mt-4 mb-4">
              {" "}
              Mulheres dominam o cenário gamer em 2026{" "}
            </h2>{" "}
            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              {" "}
              O número de criadoras de conteúdo na Twitch continua crescendo,
              especialmente em categorias como FPS, MOBA, RPG e Roleplay.{" "}
            </p>{" "}
            <button className="bg-white text-red-700 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
              {" "}
              Explorar Streamers{" "}
            </button>{" "}
          </div>{" "}
        </section>{" "}
      </main>
    </div>
  );
}
