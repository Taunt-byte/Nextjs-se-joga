import Link from "next/link";

export default function Footer() {
    return (
        <div>
            {/* FOOTER */}
      <footer className="bg-gradient-to-b from-red-700 to-red-900 text-white ">
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
        </div>
    );
}
