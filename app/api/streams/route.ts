import { NextResponse } from "next/server";

const femaleBRStreamers = [
  "nyviestephan",
  "brunapc",
  "babi",
  "lully",
  "fihdia",
];

const femaleInternationalStreamers = [
  "pokimane",
  "valkyrae",
  "fuslie",
  "loeya",
  "nimayyy",
];

async function getToken() {
  const res = await fetch(
    `https://id.twitch.tv/oauth2/to,
    ken?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
    { method: "POST" }
  );

  return res.json();
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const region = searchParams.get("region") || "all"; // br | intl | all
  const game = searchParams.get("game");

  const token = await getToken();

  let streamers: string[] = [];

  // 🌎 filtro por região
  if (region === "br") {
    streamers = femaleBRStreamers;
  } else if (region === "intl") {
    streamers = femaleInternationalStreamers;
  } else {
    streamers = [...femaleBRStreamers, ...femaleInternationalStreamers];
  }

  const query = streamers.map((u) => `user_login=${u}`).join("&");

  const res = await fetch(
    `https://api.twitch.tv/helix/streams?${query}`,
    {
      headers: {
        "Client-ID": process.env.TWITCH_CLIENT_ID!,
        Authorization: `Bearer ${token.access_token}`,
      },
    }
  );

  let data = await res.json();
  let streams = data.data;

  // 🎮 filtro por jogo
  if (game && game !== "All") {
    streams = streams.filter(
      (s: any) => s.game_name === game
    );
  }

  return NextResponse.json(streams);
}