import Link from "next/link";
const projects = [
  {
    id: 1,
    title: "Campanha de Lançamento do Jogo 'Céu Estrelado'",
    description: "Desenvolvemos uma campanha de lançamento bem-sucedida para o jogo 'Céu Estrelado', incluindo estratégia de marketing e divulgação nas redes sociais.",
    imageUrl: "https://img.freepik.com/fotos-gratis/arvores-da-selva-da-floresta-da-montanha-fundo-dos-desenhos-animados-generativo-ai_191095-1949.jpg?w=740&t=st=1697668542~exp=1697669142~hmac=328c3ffcee080f03d2018aefcde8428dcd95461d3868cb4f8e36f67b6f981e36",
  },
  {
    id: 2,
    title: "Aplicativo de Comunidade para Gamers",
    description: "Criamos um aplicativo de comunidade personalizado para gamers, facilitando a conexão e colaboração entre jogadores de todo o mundo.",
    imageUrl: "https://img.freepik.com/fotos-gratis/as-mulheres-tocam-e-conversando-com-telefone-inteligente_1150-4808.jpg?w=740&t=st=1697668579~exp=1697669179~hmac=abb22562d5b39605d562684a8bed5f0ff087e2ddbde3bff06b603703955b4488",
  },
  {
    id: 3,
    title: "Desenvolvimento de Jogo Multiplataforma",
    description: "Trabalhamos no desenvolvimento de um emocionante jogo multiplataforma, atraindo milhares de jogadores em diversas plataformas.",
    imageUrl: "https://img.freepik.com/fotos-gratis/jovem-apontando-rifle-com-oculos-de-protecao-gerados-por-ia_188544-38038.jpg?w=826&t=st=1697668878~exp=1697669478~hmac=0c6e3d6245a371de8bf45dd25642269337f118770c2049adbf24366717c6a4a0",
  },
  // Adicione mais projetos conforme necessário
];

export default function Work() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-center text-black font-bold mb-4">Trabalhos Realizados</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-4 rounded shadow">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-300 h-auto rounded"
              />
              <h2 className="text-black text-xl font-semibold mt-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
