import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">BuscaProfissionais</span>
          </a>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/">
            <a className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-600 hover:text-gray-900 transition-colors">Sobre</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-600 hover:text-gray-900 transition-colors">Contato</a>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline">Entrar</Button>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            Cadastre-se
          </Button>
        </div>
      </div>
    </header>
  );
}

