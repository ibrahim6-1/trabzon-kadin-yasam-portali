
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type CourseDetails = {
  id: string;
  name: string;
  days: string;
  price: string;
}

const courseCategories = {
  "fitness": [
    { id: "f1", name: "Genel Fitness", days: "Pazartesi, Çarşamba, Cuma", price: "400 TL" },
    { id: "f2", name: "Özel Fitness", days: "Salı, Perşembe", price: "600 TL" },
  ],
  "havuz": [
    { id: "h1", name: "Yüzme Dersi", days: "Pazartesi, Çarşamba", price: "500 TL" },
    { id: "h2", name: "Su Jimnastiği", days: "Salı, Perşembe", price: "550 TL" },
  ],
  "pilates": [
    { id: "p1", name: "Mat Pilates", days: "Pazartesi, Çarşamba, Cuma", price: "450 TL" },
    { id: "p2", name: "Grup Pilates", days: "Salı, Perşembe", price: "500 TL" },
  ],
  "reformer": [
    { id: "r1", name: "Reformer Temel", days: "Pazartesi, Çarşamba", price: "600 TL" },
    { id: "r2", name: "Reformer İleri", days: "Salı, Perşembe", price: "700 TL" },
  ],
  "zumba": [
    { id: "z1", name: "Zumba Basic", days: "Pazartesi, Çarşamba", price: "450 TL" },
    { id: "z2", name: "Zumba Gold", days: "Salı, Perşembe", price: "500 TL" },
  ],
  "combo": [
    { id: "c1", name: "Fitness + Havuz", days: "Her Gün", price: "800 TL" },
    { id: "c2", name: "VIP Kombo", days: "Her Gün", price: "1000 TL" },
  ]
};

const SportsMembership = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [courseList, setCourseList] = useState<CourseDetails[]>([]);

  const handleCourseClick = (category: string) => {
    setSelectedCategory(category);
    setCourseList(courseCategories[category as keyof typeof courseCategories] || []);
    setIsDialogOpen(true);
  };

  return (
    <>
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
            
            <div className="text-lg font-medium mt-8 mb-4">Kurs kategorilerini incelemek için tıklayın:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button variant="outline" onClick={() => handleCourseClick("fitness")}>Fitness</Button>
              <Button variant="outline" onClick={() => handleCourseClick("havuz")}>Havuz</Button>
              <Button variant="outline" onClick={() => handleCourseClick("pilates")}>Aerobik/Pilates</Button>
              <Button variant="outline" onClick={() => handleCourseClick("reformer")}>Reformer Pilates</Button>
              <Button variant="outline" onClick={() => handleCourseClick("zumba")}>Zumba</Button>
              <Button variant="outline" onClick={() => handleCourseClick("combo")}>Fitness + Havuz</Button>
            </div>
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedCategory ? `${getCategoryName(selectedCategory)} Kurs Detayları` : "Kurs Detayları"}</DialogTitle>
          </DialogHeader>
          <div className="mt-4 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Üye</TableHead>
                  <TableHead>Kurs Adı</TableHead>
                  <TableHead>Gün</TableHead>
                  <TableHead>Ücret</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courseList.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell>Bireysel</TableCell>
                    <TableCell>{course.name}</TableCell>
                    <TableCell>{course.days}</TableCell>
                    <TableCell>{course.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

// Helper function to get display name for categories
function getCategoryName(category: string): string {
  const categoryNames: Record<string, string> = {
    "fitness": "Fitness",
    "havuz": "Havuz",
    "pilates": "Aerobik/Pilates",
    "reformer": "Reformer Pilates",
    "zumba": "Zumba",
    "combo": "Yüzme Havuzu + Fitness Üyeliği"
  };
  
  return categoryNames[category] || category;
}

export default SportsMembership;
