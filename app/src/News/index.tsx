import Link from "next/link";

export default function NewsPage() {
  // Exemplo de notícias fictícias
  const noticias = [
    {
      id: 1,
      title: "Jogadora Profissional Lisa ganha grande torneio de eSports",
      image:
        "https://img.freepik.com/fotos-gratis/garota-de-tiro-completo-jogando-videogame_23-2150573858.jpg?w=740&t=st=1697596990~exp=1697597590~hmac=4662c6297c629cbdde776f193f6cadd5b13fe4e1efcfcbeff408c024c0597320",
      content:
        "Lisa, uma jogadora profissional renomada, conquistou a vitória em um torneio de eSports altamente competitivo. Ela demonstrou incríveis habilidades e estratégia durante o torneio, consolidando seu lugar no topo dos jogadores de eSports.",
    },
    {
      id: 2,
      title: "Novo jogo 'Aventuras Épicas' apresenta protagonista feminina",
      image:
        "https://img.freepik.com/fotos-gratis/parece-uma-jovem-morena-caucasiana-satisfeita-com-fones-de-ouvido_141793-116300.jpg?w=740&t=st=1697597354~exp=1697597954~hmac=560e43b3f90c5d26a51aacc20f0bd782d44277907d3679dd2bded7f52f671079",
      content:
        "O mais recente lançamento, 'Aventuras Épicas', está atraindo a atenção dos jogadores com sua protagonista feminina forte e carismática. O jogo oferece uma experiência emocionante e envolvente, com enredos envolventes e jogabilidade desafiadora.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-red-600 to-red-800 mx-auto p-4">
      <header>
        <h1 className="text-3xl text-center text-white font-bold">Noticias</h1>
      </header>

      <main className="mt-4">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {noticias.map((noticia) => (
            <div key={noticia.id} className="bg-white p-4 rounded shadow">
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-4">
                  <h2 className="text-black text-xl font-semibold">{noticia.title}</h2>
                  <p className="text-gray-600">{noticia.content}</p>
                  <Link href={`/noticia/${noticia.id}`}>
                    <button className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Veja mais
                    </button>
                  </Link>
                </div>
                <div className="w-full sm:w-1/2">
                  <img
                    src={noticia.image}
                    alt={`Imagem da Notícia ${noticia.id}`}
                    className="w-full rounded"
                  />
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
