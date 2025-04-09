
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Dumbbell, Waves, Flame, FlameKindling, MoveHorizontal } from "lucide-react";

const SportsCenter = () => {
  const services = [
    {
      title: "Havuz",
      description: "Kadınların sağlıklı yaşamını desteklemek amacıyla düzenli yüzme aktiviteleri sunan modern bir yüzme alanıdır. Havuz, hijyen standartlarına uygun olarak düzenlenmiş olup, yüzme eğitimleri ve su egzersizleri gibi programlarla kadınların fiziksel aktivitelerini artırmalarına olanak sağlar.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80",
      icon: <Waves className="h-6 w-6 text-white" />
    },
    {
      title: "Buhar",
      description: "Buhar odası kasları gevşetir, cildin temizlenmesine yardımcı olur ve genel stresin azaltılmasına katkı sağlar. Sağlık ve bakım hizmetleri kapsamında sunulan bu imkan, kadınların merkeze yapacakları ziyaretlerde sağlıklı yaşam alışkanlıklarını destekler.",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&q=80",
      icon: <Flame className="h-6 w-6 text-white" />
    },
    {
      title: "Pilates",
      description: "Pilates kadınlara esneklik, denge ve vücut farkındalığı kazandırmayı amaçlar. Uzman eğitmenler eşliğinde yapılan bu dersler, kasları güçlendirme, duruşu düzeltme ve genel sağlığı destekleme gibi faydalar sunar.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      icon: <MoveHorizontal className="h-6 w-6 text-white" />
    },
    {
      title: "Fitness",
      description: "Fitness alanı kadınlara sağlıklı ve aktif bir yaşam tarzı benimsemeleri için profesyonel ekipmanlarla donatılmıştır. Uzman eğitmenler eşliğinde yapılan egzersizler, kas güçlendirme, dayanıklılık geliştirme ve kilo kontrolüne yardımcı olarak genel sağlık ve zindeliği destekler.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
      icon: <Dumbbell className="h-6 w-6 text-white" />
    },
    {
      title: "Sauna",
      description: "Sauna kadınlara stres atma, rahatlama ve toksinlerden arınma imkanı sunar. Saunanın sıcak ortamı, kasların gevşemesine, dolaşımın iyileşmesine ve cildin yenilenmesine yardımcı olarak genel sağlık ve zindelik hissini artırır.",
      image: "https://images.unsplash.com/photo-1554747706-06beb7428e3f?auto=format&fit=crop&q=80",
      icon: <FlameKindling className="h-6 w-6 text-white" />
    },
    {
      title: "Reformer Pilates",
      description: "Reformer Pilates özel makine ve ekipmanlarla gerçekleştirilen, vücut gücünü ve esnekliğini artırmayı hedefleyen bir egzersiz türüdür. Bu pilates yöntemi, kasları daha derinlemesine çalıştırarak postür iyileştirme, denge sağlama ve genel vücut kondisyonunu geliştirme konularında etkilidir.",
      image: "https://images.unsplash.com/photo-1562088287-bde35a1ea917?auto=format&fit=crop&q=80",
      icon: <MoveHorizontal className="h-6 w-6 text-white" />
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Spor Merkezi</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Kadınlar için özel olarak tasarlanmış spor merkezimizde sağlıklı yaşam ve aktif olmanın keyfini çıkarın.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group">
            <Card className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-xl relative h-full flex flex-col bg-gradient-to-br from-white to-purple-50">
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-primary/10 rounded-full" />
              <div className="absolute top-0 right-0 p-3 z-10 bg-primary rounded-bl-lg">
                {service.icon}
              </div>
              <div className="overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </AspectRatio>
              </div>
              <CardHeader>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <CardTitle className="text-xl text-primary cursor-pointer relative inline-block">
                      {service.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </CardTitle>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <div>
                        <h4 className="text-sm font-semibold">{service.title}</h4>
                        <p className="text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-gray-700 line-clamp-4">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-4">
                <Link to="/online-islemler" className="w-full">
                  <Button variant="default" size="lg" className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 group-hover:shadow-md">
                    Kayıt Ol
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsCenter;
