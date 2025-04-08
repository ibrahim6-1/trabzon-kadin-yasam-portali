
import React from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink } from "lucide-react";

const SportsMembership = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1 text-center md:text-left py-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Spor Merkezi Üyeliği</h2>
        <p className="text-lg text-gray-600 mb-8">
          Spor merkezi üyeliği için aşağıdaki bağlantıya tıklayarak Trabzon Belediyesi Vatandaş Giriş sayfasına gidebilirsiniz.
        </p>
        <div className="space-y-4">
          <Button 
            onClick={() => window.open("https://kurumsal.trabzon.bel.tr/vatandaslogin", "_blank")}
            className="flex items-center gap-2 text-lg w-full md:w-auto"
          >
            Üyelik Başvurusu Yap
            <ExternalLink size={20} />
          </Button>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <div className="rounded-lg overflow-hidden border border-muted mb-6">
          <AspectRatio ratio={16 / 9}>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
              alt="Spor merkezi üyeliği" 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default SportsMembership;
