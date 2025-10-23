import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Star, MapPin, Phone, Mail, Search, Filter } from "lucide-react";
import Header from "@/components/Header";
import ProfessionalCard from "@/components/ProfessionalCard";
import FilterSidebar from "@/components/FilterSidebar";

interface Professional {
  id: number;
  name: string;
  specialty: string;
  area: string;
  rating: number;
  reviews: number;
  location: string;
  phone: string;
  email: string;
  image: string;
  description: string;
  experience: number;
}

const mockProfessionals: Professional[] = [
  {
    id: 1,
    name: "Dr. Carlos Silva",
    specialty: "Cardiologia",
    area: "Saúde",
    rating: 4.8,
    reviews: 127,
    location: "São Paulo, SP",
    phone: "(11) 98765-4321",
    email: "carlos.silva@email.com",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    description: "Médico cardiologista com 15 anos de experiência",
    experience: 15,
  },
  {
    id: 2,
    name: "Arq. Marina Costa",
    specialty: "Arquitetura Residencial",
    area: "Arquitetura",
    rating: 4.9,
    reviews: 89,
    location: "Rio de Janeiro, RJ",
    phone: "(21) 99876-5432",
    email: "marina.costa@email.com",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marina",
    description: "Arquiteta especializada em projetos residenciais modernos",
    experience: 12,
  },
  {
    id: 3,
    name: "Adv. João Pereira",
    specialty: "Direito Civil",
    area: "Direito",
    rating: 4.7,
    reviews: 156,
    location: "Belo Horizonte, MG",
    phone: "(31) 98765-4321",
    email: "joao.pereira@email.com",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao",
    description: "Advogado especialista em direito civil e contratos",
    experience: 18,
  },
  {
    id: 4,
    name: "Eng. Ana Santos",
    specialty: "Engenharia Civil",
    area: "Engenharia",
    rating: 4.6,
    reviews: 102,
    location: "Curitiba, PR",
    phone: "(41) 99876-5432",
    email: "ana.santos@email.com",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
    description: "Engenheira civil com experiência em grandes projetos",
    experience: 14,
  },
  {
    id: 5,
    name: "Psic. Beatriz Lima",
    specialty: "Psicologia Clínica",
    area: "Saúde Mental",
    rating: 4.9,
    reviews: 78,
    location: "Brasília, DF",
    phone: "(61) 98765-4321",
    email: "beatriz.lima@email.com",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Beatriz",
    description: "Psicóloga clínica com abordagem humanista",
    experience: 10,
  },
  {
    id: 6,
    name: "Des. Pedro Oliveira",
    specialty: "Desenvolvimento Web",
    area: "Tecnologia",
    rating: 4.8,
    reviews: 145,
    location: "São Paulo, SP",
    phone: "(11) 99876-5432",
    email: "pedro.oliveira@email.com",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro",
    description: "Desenvolvedor web full-stack com 8 anos de experiência",
    experience: 8,
  },
];

const areas = [
  "Saúde",
  "Arquitetura",
  "Direito",
  "Engenharia",
  "Saúde Mental",
  "Tecnologia",
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProfessionals = mockProfessionals.filter((prof) => {
    const matchesSearch =
      prof.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prof.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = !selectedArea || prof.area === selectedArea;
    const matchesRating = prof.rating >= minRating;

    return matchesSearch && matchesArea && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Encontre o Profissional Ideal</h1>
          <p className="text-lg text-blue-100 mb-8">
            Conecte-se com profissionais qualificados de todas as áreas
          </p>

          {/* Search Bar */}
          <div className="flex gap-2 flex-col sm:flex-row">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Buscar por nome, especialidade..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="h-12 bg-white text-blue-600 hover:bg-blue-50"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filtros
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <FilterSidebar
            areas={areas}
            selectedArea={selectedArea}
            onAreaChange={setSelectedArea}
            minRating={minRating}
            onRatingChange={setMinRating}
            showFilters={showFilters}
          />

          {/* Professionals Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-gray-600">
                {filteredProfessionals.length} profissional(is) encontrado(s)
              </p>
            </div>

            {filteredProfessionals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProfessionals.map((professional) => (
                  <ProfessionalCard
                    key={professional.id}
                    professional={professional}
                  />
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <p className="text-gray-500 text-lg">
                  Nenhum profissional encontrado com os critérios selecionados.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedArea(null);
                    setMinRating(0);
                  }}
                  variant="outline"
                  className="mt-4"
                >
                  Limpar Filtros
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

