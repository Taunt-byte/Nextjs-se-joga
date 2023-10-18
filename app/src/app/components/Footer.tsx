import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-red-600 to-red-800 text-white p-4 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Se Joga! - Todos os direitos reservados</p>
        <nav className="mt-2">
          <Link href="/about">
            <p className="text-blue-500 hover:underline mx-2">Sobre Nós</p>
          </Link>
          <Link href="/work">
            <p className="text-blue-500 hover:underline mx-2">Trabalhos Realizados</p>
          </Link>
          <Link href="/contact">
            <p className="text-blue-500 hover:underline mx-2">Contato</p>
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
