import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, X } from "lucide-react";

interface FilterSidebarProps {
  areas: string[];
  selectedArea: string | null;
  onAreaChange: (area: string | null) => void;
  minRating: number;
  onRatingChange: (rating: number) => void;
  showFilters: boolean;
}

export default function FilterSidebar({
  areas,
  selectedArea,
  onAreaChange,
  minRating,
  onRatingChange,
  showFilters,
}: FilterSidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40" />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 h-full md:h-auto w-64 bg-white shadow-lg md:shadow-none md:bg-transparent z-50 transform transition-transform duration-300 md:transform-none overflow-y-auto ${
          showFilters ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6 space-y-6">
          {/* Close Button (Mobile) */}
          <div className="md:hidden flex justify-between items-center">
            <h2 className="text-lg font-bold">Filtros</h2>
            <button
              onClick={() => onAreaChange(selectedArea)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Areas Filter */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Áreas</h3>
            <div className="space-y-2">
              <button
                onClick={() => onAreaChange(null)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedArea === null
                    ? "bg-indigo-100 text-indigo-700 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Todas as áreas
              </button>
              {areas.map((area) => (
                <button
                  key={area}
                  onClick={() => onAreaChange(area)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedArea === area
                      ? "bg-indigo-100 text-indigo-700 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          {/* Rating Filter */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Avaliação Mínima</h3>
            <div className="space-y-2">
              {[0, 3, 3.5, 4, 4.5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => onRatingChange(rating)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                    minRating === rating
                      ? "bg-indigo-100 text-indigo-700 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {rating === 0 ? (
                    "Qualquer avaliação"
                  ) : (
                    <>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : i < rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span>e acima</span>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {(selectedArea !== null || minRating > 0) && (
            <Button
              onClick={() => {
                onAreaChange(null);
                onRatingChange(0);
              }}
              variant="outline"
              className="w-full"
            >
              Limpar Filtros
            </Button>
          )}
        </div>
      </aside>
    </>
  );
}

