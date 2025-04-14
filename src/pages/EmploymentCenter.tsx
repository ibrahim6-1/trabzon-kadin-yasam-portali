
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const courses = [
  {
    id: 1,
    title: "Hasır Kursu",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80",
    description: "Geleneksel hasır dokuma tekniklerini öğrenerek, kendi hasır ürünlerinizi tasarlayabileceğiniz kapsamlı bir kurs.",
  },
  {
    id: 2,
    title: "Moda Tasarımı Kursu",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80",
    description: "Moda tasarımının temellerini öğrenerek kendi özgün tasarımlarınızı oluşturabileceğiniz yaratıcı bir eğitim programı.",
  },
  {
    id: 3,
    title: "İngilizce A-2 Temel Eğitim",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    description: "Günlük hayatta kullanılabilecek temel İngilizce becerilerini kazandıran, A2 seviye sertifikalı dil kursu.",
  },
];

const EmploymentCenter = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-12">İstihdam Merkezi Kursları</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="p-0">
              <AspectRatio ratio={16 / 9}>
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Button className="w-full">Kayıt Ol</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EmploymentCenter;
