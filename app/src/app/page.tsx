import Work from "@/Work";
import About from "@/About";
import NewsPage from "@/News";
import StreamersPage from "@/Stremers";
import Footer from "./components/Footer";

export default function Home() {
return (
  <div className="bg-gradient-to-b from-red-600 to-red-800">
    <header className="text-center text-white p-4">
      <h1 className="text-4xl font-bold">Se joga!</h1>
      <p className="text-lg">
        Juntamos mulheres ao universo dos games com segurança, diversão e respeito.
      </p>
    </header>
    <main className="bg-slate-100">
      <Work />
      <About />
      <NewsPage />
      <StreamersPage />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

}
