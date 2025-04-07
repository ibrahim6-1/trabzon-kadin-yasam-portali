
import React from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink } from "lucide-react";

const CourseRegistration = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <div className="rounded-lg overflow-hidden border border-muted mb-6">
          <AspectRatio ratio={16 / 9}>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
              alt="Kadın yaşam merkezi kurs başvurusu" 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
      </div>
      <div className="text-center md:text-left py-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Kurs Başvurusu</h2>
        <p className="text-lg text-gray-600 mb-8">
          Kurs başvurusu için aşağıdaki bağlantıya tıklayarak Trabzon Belediyesi Etkinlikler sayfasına gidebilirsiniz.
        </p>
        <Button 
          onClick={() => window.open("https://kurumsal.trabzon.bel.tr/Etkinlikler", "_blank")}
          className="flex items-center gap-2 text-lg"
        >
          Kurs Başvurusu Yap
          <ExternalLink size={20} />
        </Button>
      </div>
    </div>
  );
};

export default CourseRegistration;
