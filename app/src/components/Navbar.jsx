import Link from "next/link";

export default function Navbar() {
  return (
        <div>
          {/* NAVBAR */}
          <header className="bg-zinc-900 text-white border-b border-zinc-800 sticky top-0 z-50">
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
        </div>
    );
}