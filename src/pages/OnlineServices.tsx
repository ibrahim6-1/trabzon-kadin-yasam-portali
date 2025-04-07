import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const OnlineServices = () => {
  const [activeTab, setActiveTab] = useState("course");

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Online İşlemler</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Merkezimizin kurslarına kayıt, spor merkezi üyeliği ve diğer hizmetlerimiz için online başvuru yapabilirsiniz.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <Tabs defaultValue="course" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="course">Kurs Başvurusu</TabsTrigger>
              <TabsTrigger value="sports">Spor Merkezi Üyeliği</TabsTrigger>
              <TabsTrigger value="prices">Fiyat Listesi</TabsTrigger>
            </TabsList>
            
            {/* Course Registration External Link */}
            <TabsContent value="course">
              <div className="text-center py-10">
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
            </TabsContent>
            
            {/* Sports Center Membership External Link */}
            <TabsContent value="sports">
              <div className="text-center py-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Spor Merkezi Üyeliği</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Spor merkezi üyeliği için aşağıdaki bağlantıya tıklayarak Trabzon Belediyesi Vatandaş Giriş sayfasına gidebilirsiniz.
                </p>
                <Button 
                  onClick={() => window.open("https://kurumsal.trabzon.bel.tr/vatandaslogin", "_blank")}
                  className="flex items-center gap-2 text-lg"
                >
                  Üyelik Başvurusu Yap
                  <ExternalLink size={20} />
                </Button>
              </div>
            </TabsContent>
            
            {/* Price List */}
            <TabsContent value="prices">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Fiyat Listesi</h2>
              
              <div className="space-y-8">
                {/* Sports Center Prices */}
                <div>
                  <h3 className="text-xl font-medium text-primary mb-4">Spor Merkezi Üyelik Ücretleri</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Üyelik Tipi
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            1 Ay
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            3 Ay
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            6 Ay
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            12 Ay
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Tam Üyelik (Tüm Hizmetler)
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            800 TL
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            2,200 TL
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            4,000 TL
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            7,500 TL
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Havuz Üyeliği
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            500 TL
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            1,350 TL
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            2,500 TL
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            4,800 TL
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Fitness Üyeliği
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            400 TL
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            1,100 TL
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            2,000 TL
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            3,800 TL
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Pilates Üyeliği
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            450 TL
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            1,200 TL
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            2,200 TL
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            4,200 TL
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Course Prices */}
                <div>
                  <h3 className="text-xl font-medium text-primary mb-4">Kurs Ücretleri</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Kurs Adı
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Süre
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Ücret
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Bilgisayar Kullanımı
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            2 Ay
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            1,200 TL
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Web Tasarım
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            3 Ay
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            2,500 TL
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Resim
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            3 Ay
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            1,500 TL
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            El Sanatları
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            2 Ay
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            1,000 TL
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Dikiş ve Nakış
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            3 Ay
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            1,800 TL
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">
                    Not: Fiyatlar güncel olup, değişiklik gösterebilir. Kesin fiyat bilgisi için lütfen merkezimize başvurun.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default OnlineServices;
