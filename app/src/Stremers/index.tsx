import React from 'react';

// Dados fictícios de streamers (Da pra fazer um banco de dados)
const streamers = [
  {
    id: 1,
    name: "Ana Julia",
    profileImage: "https://img.freepik.com/fotos-gratis/young-redhead-woman-streamer-sitting-on-table-with-serious-expression-at-gaming-room_839833-27024.jpg?t=st=1697669090~exp=1697669690~hmac=c51cf8339b330a54b41a9adac752275f4f78e53caab2439ca82a61f408817b23",
    description: "Ana Julia é apaixonado por jogos e faz transmissões diárias de jogos variados."
  },
  {
    id: 2,
    name: "Marcela Nunes",
    profileImage: "https://img.freepik.com/fotos-gratis/jovem-empresario-adulto-trabalhando-ate-tarde-ouvindo-gerado-por-ia_188544-36670.jpg?w=826&t=st=1697669051~exp=1697669651~hmac=15806cb790305b72353b6b6a5cb34f7abed9fc3bbb83f112d8d8f2b4404910de",
    description: "Marcela Nunes é especializado em jogos de ação e sempre traz um gameplay emocionante."
  },
  {
    id: 3,
    name: "Larissa Teodora",
    profileImage: "https://img.freepik.com/fotos-gratis/confianca-tecnologia-brilhante-de-beleza-e-noites-da-cidade-geradas-por-ia_188544-21851.jpg?w=826&t=st=1697668959~exp=1697669559~hmac=e5699c754f1d38aca127a7f6163fb47acea21a93ab2db46e541c39c471567281",
    description: "Larissa Teodora é um mestre em jogos de estratégia e compartilha dicas valiosas com sua audiência."
  }
];

const StreamersPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Conheça Nossos Streamers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {streamers.map((streamer) => (
          <div key={streamer.id} className="bg-white p-4 rounded shadow">
            <img
              src={streamer.profileImage}
              alt={`${streamer.name}'s Profile`}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{streamer.name}</h2>
            <p className="text-gray-600">{streamer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreamersPage;
