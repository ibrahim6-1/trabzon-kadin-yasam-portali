
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface NutritionService {
  id: string;
  title: string;
  description: string;
}

const nutritionServices: NutritionService[] = [
  {
    id: "healthy-sustainable",
    title: "Sağlıklı Sürdürülebilir Beslenme",
    description: "Uzun vadede sürdürülebilir ve sağlıklı beslenme alışkanlıkları kazanmanız için özel beslenme programları"
  },
  {
    id: "weight-management",
    title: "Kilo Alma & Kilo Verme",
    description: "Hedeflerinize uygun kişiselleştirilmiş kilo alma ve verme programları"
  },
  {
    id: "disease-specific",
    title: "Hastalıklara Özel Beslenme",
    description: "Diyabet, hipertansiyon, kalp hastalıkları gibi kronik hastalıklara özel beslenme danışmanlığı"
  },
  {
    id: "pregnancy",
    title: "Gebelik Öncesi ve Sürecinde Beslenme",
    description: "Hamilelik öncesi ve hamilelik sürecinde anne ve bebek sağlığı için özel beslenme planları"
  },
  {
    id: "breastfeeding",
    title: "Emzirme Döneminde Beslenme",
    description: "Emziren anneler için süt kalitesini ve bebeğin gelişimini destekleyen beslenme programları"
  }
];

const NutritionCounseling = () => {
  const navigate = useNavigate();
  
  const handleRegister = (serviceId: string) => {
    // Navigate to registration page or open registration form
    navigate("/online-islemler?service=" + serviceId);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Beslenme Danışmanlığı Hizmetlerimiz</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Trabzon Kadın Yaşam Merkezi olarak sağlıklı beslenmek ve yaşam kalitesini artırmak isteyen herkes için bireysel danışmanlık hizmetleri sunuyoruz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {nutritionServices.map((service) => (
          <Card key={service.id} className="flex flex-col h-full transition-all duration-200 hover:shadow-lg">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button 
                onClick={() => handleRegister(service.id)} 
                className="w-full"
              >
                Kayıt Ol
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NutritionCounseling;
