
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

const SportsCenter = () => {
  const services = [
    {
      title: "Havuz",
      description: "Kadınların sağlıklı yaşamını desteklemek amacıyla düzenli yüzme aktiviteleri sunan modern bir yüzme alanıdır. Havuz, hijyen standartlarına uygun olarak düzenlenmiş olup, yüzme eğitimleri ve su egzersizleri gibi programlarla kadınların fiziksel aktivitelerini artırmalarına olanak sağlar.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80",
    },
    {
      title: "Buhar",
      description: "Buhar odası kasları gevşetir, cildin temizlenmesine yardımcı olur ve genel stresin azaltılmasına katkı sağlar. Sağlık ve bakım hizmetleri kapsamında sunulan bu imkan, kadınların merkeze yapacakları ziyaretlerde sağlıklı yaşam alışkanlıklarını destekler.",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&q=80",
    },
    {
      title: "Pilates",
      description: "Pilates kadınlara esneklik, denge ve vücut farkındalığı kazandırmayı amaçlar. Uzman eğitmenler eşliğinde yapılan bu dersler, kasları güçlendirme, duruşu düzeltme ve genel sağlığı destekleme gibi faydalar sunar.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-primary mb-4">Spor Merkezi</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Kadınlar için özel olarak tasarlanmış spor merkezimizde sağlıklı yaşam ve aktif olmanın keyfini çıkarın.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </AspectRatio>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-700">
                {service.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Link to="/online-islemler" className="w-full">
                <Button variant="default" size="lg" className="w-full">
                  Kayıt Ol
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SportsCenter;
