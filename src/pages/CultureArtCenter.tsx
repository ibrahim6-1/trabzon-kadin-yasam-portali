
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const CultureArtCenter = () => {
  const programs = [
    {
      id: 1,
      title: "İletişim ve Uyum Eğitimi",
      content: "Karadeniz Teknik Üniversitesi Yabancı Diller Yüksekokulu Öğr. Gör. Sinem Çol tarafından merkezimizde çalışan tüm personele iletişim becerilerini arttırmak ve çalışma performanslarını güçlendirmek amacı ile drama tekniğiyle ''İletişim-Uyum'' eğitimleri verildi."
    },
    {
      id: 2,
      title: "Protokol Kuralları Eğitimi",
      content: "Merkezimizde çalışan tüm personele, TBB Eğitmeni Cem Ogün ŞEN tarafından verilen \"Protokol Kuralları Eğitimi\" ile resmi ortamlarda uygun davranış ve iletişim becerileri kazandırıldı. Eğitimde, temsil, hitap, ve resmi ilişkilerde profesyonellik gibi temel konular ele alınarak personelin kurumsal ortamlarda daha yetkin hale gelmesi sağlandı."
    },
    {
      id: 3,
      title: "Halkla İlişkiler ve İletişim Eğitimi",
      content: "Trabzon Üniversitesi İletişim Fakültesi Dekanı Prof. Dr. Erdem TAŞDEMİR tarafından merkezimizde çalışan tüm personeli güçlendirme ve iletişimi arttırma amacıyla ''Halka İlişkiler ve İletişim'' eğitimi verildi."
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Kültür Sanat Merkezi</h1>
      
      <div className="space-y-8">
        {programs.map((program, index) => (
          <React.Fragment key={program.id}>
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">
                  {program.id}. {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{program.content}</p>
              </CardContent>
            </Card>
            {index < programs.length - 1 && (
              <Separator className="my-8" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CultureArtCenter;
