
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

type CourseDetails = {
  id: string;
  name: string;
  days: string;
  price: string;
}

const priceCategories = {
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

const courseCategories = {
  "computer": [
    { id: "co1", name: "Temel Bilgisayar", days: "Pazartesi, Çarşamba", price: "1,200 TL" },
    { id: "co2", name: "MS Office", days: "Salı, Perşembe", price: "1,400 TL" },
  ],
  "web": [
    { id: "w1", name: "HTML/CSS", days: "Pazartesi, Çarşamba, Cuma", price: "2,500 TL" },
    { id: "w2", name: "JavaScript", days: "Salı, Perşembe", price: "2,700 TL" },
  ],
  "painting": [
    { id: "pa1", name: "Temel Resim", days: "Pazartesi, Çarşamba", price: "1,500 TL" },
    { id: "pa2", name: "Yağlı Boya", days: "Salı, Perşembe", price: "1,800 TL" },
  ],
  "crafts": [
    { id: "cr1", name: "Ahşap Boyama", days: "Pazartesi, Çarşamba", price: "1,000 TL" },
    { id: "cr2", name: "Çini", days: "Salı, Perşembe", price: "1,200 TL" },
  ],
  "sewing": [
    { id: "s1", name: "Temel Dikiş", days: "Pazartesi, Çarşamba", price: "1,800 TL" },
    { id: "s2", name: "Nakış", days: "Salı, Perşembe", price: "2,000 TL" },
  ],
};

const PriceList = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [courseList, setCourseList] = useState<CourseDetails[]>([]);
  const [categoryType, setCategoryType] = useState<"sport" | "course">("sport");

  const handleCategoryClick = (category: string, type: "sport" | "course") => {
    setSelectedCategory(category);
    setCategoryType(type);
    if (type === "sport") {
      setCourseList(priceCategories[category as keyof typeof priceCategories] || []);
    } else {
      setCourseList(courseCategories[category as keyof typeof courseCategories] || []);
    }
    setIsDialogOpen(true);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Fiyat Listesi</h2>
      
      <div className="space-y-8">
        {/* Sports Center Prices in Accordion */}
        <div>
          <h3 className="text-xl font-medium text-primary mb-4">Spor Merkezi Üyelik Ücretleri</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="fitness">
              <AccordionTrigger className="text-lg font-medium">Fitness</AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Üye</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kurs Adı</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gün</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ücret</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bireysel</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Genel Fitness</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Pazartesi, Çarşamba, Cuma</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">400 TL</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bireysel</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Özel Fitness</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Salı, Perşembe</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">600 TL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <Button variant="outline" onClick={() => handleCategoryClick("fitness", "sport")} className="w-full">
                    Detaylı Bilgi
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="havuz">
              <AccordionTrigger className="text-lg font-medium">Havuz</AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Üye</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kurs Adı</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gün</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ücret</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bireysel</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Yüzme Dersi</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Pazartesi, Çarşamba</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">500 TL</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bireysel</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Su Jimnastiği</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Salı, Perşembe</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">550 TL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <Button variant="outline" onClick={() => handleCategoryClick("havuz", "sport")} className="w-full">
                    Detaylı Bilgi
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="pilates">
              <AccordionTrigger className="text-lg font-medium">Aerobik/Pilates</AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Üye</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kurs Adı</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gün</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ücret</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bireysel</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mat Pilates</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Pazartesi, Çarşamba, Cuma</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">450 TL</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bireysel</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Grup Pilates</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Salı, Perşembe</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">500 TL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <Button variant="outline" onClick={() => handleCategoryClick("pilates", "sport")} className="w-full">
                    Detaylı Bilgi
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="reformer-pilates">
              <AccordionTrigger className="text-lg font-medium">Reformer Pilates</AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Üye</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kurs Adı</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gün</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ücret</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bireysel</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Reformer Temel</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Pazartesi, Çarşamba</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">600 TL</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bireysel</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Reformer İleri</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Salı, Perşembe</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">700 TL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <Button variant="outline" onClick={() => handleCategoryClick("reformer", "sport")} className="w-full">
                    Detaylı Bilgi
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="zumba">
              <AccordionTrigger className="text-lg font-medium">Zumba</AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Üye</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kurs Adı</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gün</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ücret</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bireysel</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Zumba Basic</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Pazartesi, Çarşamba</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">450 TL</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bireysel</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Zumba Gold</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Salı, Perşembe</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">500 TL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <Button variant="outline" onClick={() => handleCategoryClick("zumba", "sport")} className="w-full">
                    Detaylı Bilgi
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="combo">
              <AccordionTrigger className="text-lg font-medium">Yüzme Havuzu + Fitness Üyeliği</AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Üye</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kurs Adı</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gün</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ücret</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bireysel</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Fitness + Havuz</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Her Gün</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">800 TL</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bireysel</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">VIP Kombo</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Her Gün</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1000 TL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <Button variant="outline" onClick={() => handleCategoryClick("combo", "sport")} className="w-full">
                    Detaylı Bilgi
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Course Prices in Accordion */}
        <div>
          <h3 className="text-xl font-medium text-primary mb-4">Kurs Ücretleri</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="computer">
              <AccordionTrigger className="text-lg font-medium">Bilgisayar Kullanımı</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2">
                  <div className="text-sm font-medium">Süre:</div>
                  <div className="text-sm">2 Ay</div>
                  <div className="text-sm font-medium">Ücret:</div>
                  <div className="text-sm">1,200 TL</div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" onClick={() => handleCategoryClick("computer", "course")} className="w-full">
                    Detaylı Bilgi
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="web">
              <AccordionTrigger className="text-lg font-medium">Web Tasarım</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2">
                  <div className="text-sm font-medium">Süre:</div>
                  <div className="text-sm">3 Ay</div>
                  <div className="text-sm font-medium">Ücret:</div>
                  <div className="text-sm">2,500 TL</div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" onClick={() => handleCategoryClick("web", "course")} className="w-full">
                    Detaylı Bilgi
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="painting">
              <AccordionTrigger className="text-lg font-medium">Resim</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2">
                  <div className="text-sm font-medium">Süre:</div>
                  <div className="text-sm">3 Ay</div>
                  <div className="text-sm font-medium">Ücret:</div>
                  <div className="text-sm">1,500 TL</div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" onClick={() => handleCategoryClick("painting", "course")} className="w-full">
                    Detaylı Bilgi
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="crafts">
              <AccordionTrigger className="text-lg font-medium">El Sanatları</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2">
                  <div className="text-sm font-medium">Süre:</div>
                  <div className="text-sm">2 Ay</div>
                  <div className="text-sm font-medium">Ücret:</div>
                  <div className="text-sm">1,000 TL</div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" onClick={() => handleCategoryClick("crafts", "course")} className="w-full">
                    Detaylı Bilgi
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="sewing">
              <AccordionTrigger className="text-lg font-medium">Dikiş ve Nakış</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2">
                  <div className="text-sm font-medium">Süre:</div>
                  <div className="text-sm">3 Ay</div>
                  <div className="text-sm font-medium">Ücret:</div>
                  <div className="text-sm">1,800 TL</div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" onClick={() => handleCategoryClick("sewing", "course")} className="w-full">
                    Detaylı Bilgi
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600 text-sm">
            Not: Fiyatlar güncel olup, değişiklik gösterebilir. Kesin fiyat bilgisi için lütfen merkezimize başvurun.
          </p>
        </div>
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {selectedCategory ? 
                `${getCategoryName(selectedCategory, categoryType)} Detayları` : 
                "Kurs Detayları"}
            </DialogTitle>
            <DialogDescription>
              Kurs detayları ve programları aşağıda listelenmiştir
            </DialogDescription>
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
    </div>
  );
};

// Helper function to get display name for categories
function getCategoryName(category: string, type: "sport" | "course"): string {
  if (type === "sport") {
    const categoryNames: Record<string, string> = {
      "fitness": "Fitness",
      "havuz": "Havuz",
      "pilates": "Aerobik/Pilates",
      "reformer": "Reformer Pilates",
      "zumba": "Zumba",
      "combo": "Yüzme Havuzu + Fitness Üyeliği"
    };
    
    return categoryNames[category] || category;
  } else {
    const categoryNames: Record<string, string> = {
      "computer": "Bilgisayar Kullanımı",
      "web": "Web Tasarım",
      "painting": "Resim",
      "crafts": "El Sanatları",
      "sewing": "Dikiş ve Nakış"
    };
    
    return categoryNames[category] || category;
  }
}

export default PriceList;
