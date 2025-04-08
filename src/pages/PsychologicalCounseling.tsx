
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

interface CounselingService {
  id: string;
  title: string;
  description: string;
  services: string[];
}

const counselingServices: CounselingService[] = [
  {
    id: "family",
    title: "Aile Danışmanlığı",
    description: "Aile içi iletişim ve uyum sorunlarında profesyonel destek",
    services: [
      "İletişim ve Uyum Problemleri",
      "Ebeveynliğe Geçiş Sorunları",
      "Tek Ebeveynli Aile Olmak",
      "Çiftler Arası Sorunlar",
      "Beklenti Farklılıkları ve Çözümleri",
      "Boşanma Süreci Danışmanlığı",
      "Aile İçinde Cinsellik ve Cinsel Sorunlar"
    ]
  },
  {
    id: "psychological",
    title: "Psikolojik Danışmanlık",
    description: "Bireysel psikolojik sorunlarda uzman kadromuzla yanınızdayız",
    services: [
      "Travma Sonrası Stres Bozukluğu",
      "Obsesif Kompulsif Bozukluk",
      "Yaygın Anksiyete Bozukluğu",
      "Depresyon",
      "Panik Bozukluğu",
      "Sosyal Fobi ve Özgül Fobi"
    ]
  },
  {
    id: "child-adolescent",
    title: "Çocuk Ergen Danışmanlık",
    description: "Çocuk ve ergen gelişiminde karşılaşılan zorluklarda destek",
    services: [
      "Kaygı Bozuklukları",
      "Stres ve Öfke Yönetimi",
      "Ergenlik Dönemi Sorunları",
      "Travma Sonrası Stres Bozukluğu",
      "Sınav ve Performans Kaygısı",
      "Uyum ve Davranış Sorunları",
      "Yas ve Kayıp Süreci",
      "Ebeveyn Danışmanlığı"
    ]
  }
];

const PsychologicalCounseling = () => {
  const navigate = useNavigate();
  
  const handleRegister = (serviceId: string) => {
    // Navigate to registration page or open registration form
    navigate("/online-islemler?service=" + serviceId);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Psikolojik Danışmanlık Hizmetlerimiz</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Trabzon Kadın Yaşam Merkezi olarak alanında uzman danışmanlarımızla, siz ve aileniz için profesyonel destek sunuyoruz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {counselingServices.map((service) => (
          <Card key={service.id} className="flex flex-col h-full transition-all duration-200 hover:shadow-lg">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc pl-5 space-y-2">
                {service.services.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
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

export default PsychologicalCounseling;
