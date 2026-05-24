"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import NewsCard from "@/components/NewsCard";

const gamesList = [
  "All",
  "League of Legends",
  "Valorant",
  "Counter-Strike 2",
  "Fortnite",
  "Minecraft",
];

export default function Home() {
  const [streams, setStreams] = useState<any[]>([]);
  const [game, setGame] = useState("All");
  const [loading, setLoading] = useState(false);

  async function loadStreams(selectedGame: string) {
    setLoading(true);

    const res = await fetch(
      `/api/female-streams?game=${encodeURIComponent(selectedGame)}`
    );

    const data = await res.json();
    setStreams(data);
    setLoading(false);
  }

  useEffect(() => {
    loadStreams(game);
  }, [game]);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Hero />
      <NewsCard />

      {/* FILTER */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4 text-red-500">
          Streamers ao vivo
        </h2>

        <div className="flex gap-3 flex-wrap mb-6">
          {gamesList.map((g) => (
            <button
              key={g}
              onClick={() => setGame(g)}
              className={`px-4 py-2 rounded-full transition ${
                game === g
                  ? "bg-red-600"
                  : "bg-zinc-800 hover:bg-zinc-700"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {loading && (
          <p className="text-zinc-400">Carregando streams...</p>
        )}

        {/* STREAMS */}
        <div className="grid md:grid-cols-3 gap-6">
          {streams.map((stream: any) => (
            <div
              key={stream.id}
              className="bg-zinc-900 rounded-xl overflow-hidden"
            >
              <img
                src={stream.thumbnail_url
                  .replace("{width}", "320")
                  .replace("{height}", "180")}
                className="w-full"
              />

              <div className="p-4">
                <h3 className="font-bold">{stream.user_name}</h3>
                <p className="text-sm text-zinc-400">
                  {stream.title}
                </p>
                <p className="text-red-500 mt-2">
                  🎮 {stream.game_name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}