import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone, Mail, MessageCircle } from "lucide-react";

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

interface ProfessionalCardProps {
  professional: Professional;
}

export default function ProfessionalCard({ professional }: ProfessionalCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        {/* Header with Image and Basic Info */}
        <div className="flex gap-4 mb-4">
          <img
            src={professional.image}
            alt={professional.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900">{professional.name}</h3>
            <p className="text-sm text-indigo-600 font-medium">{professional.specialty}</p>
            <p className="text-xs text-gray-500">{professional.area}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(professional.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-900">
            {professional.rating}
          </span>
          <span className="text-xs text-gray-500">
            ({professional.reviews} avaliações)
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">{professional.description}</p>

        {/* Experience */}
        <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
          <span className="font-medium">{professional.experience} anos</span>
          <span>de experiência</span>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 mb-4 py-3 border-y border-gray-200">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-indigo-600" />
            {professional.location}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Phone className="w-4 h-4 text-indigo-600" />
            {professional.phone}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Mail className="w-4 h-4 text-indigo-600" />
            {professional.email}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Mensagem
          </Button>
          <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            Ver Perfil
          </Button>
        </div>
      </div>
    </Card>
  );
}

