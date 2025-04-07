
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

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
            
            {/* Course Registration Form */}
            <TabsContent value="course">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Kurs Başvuru Formu</h2>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Ad ve soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="tcNumber" className="block text-sm font-medium text-gray-700 mb-1">T.C. Kimlik Numarası</label>
                    <input
                      type="text"
                      id="tcNumber"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="T.C. Kimlik numaranız"
                      maxLength={11}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="E-posta adresiniz"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Telefon numaranız"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="courseType" className="block text-sm font-medium text-gray-700 mb-1">Kurs Tipi</label>
                  <select
                    id="courseType"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="" disabled selected>Lütfen bir kurs seçin</option>
                    <option value="istihdam">İstihdam Kursları</option>
                    <option value="hobi">Hobi Kursları</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="courseSelection" className="block text-sm font-medium text-gray-700 mb-1">Kurs Seçimi</label>
                  <select
                    id="courseSelection"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="" disabled selected>Lütfen önce kurs tipi seçin</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Ek Bilgiler</label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Eklemek istediğiniz bilgiler..."
                  ></textarea>
                </div>

                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="agreement"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="agreement" className="ml-2 block text-sm text-gray-700">
                    Kişisel verilerimin işlenmesine ilişkin <a href="#" className="text-primary hover:underline">aydınlatma metnini</a> okudum ve onaylıyorum.
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Başvuru Yap
                </button>
              </form>
            </TabsContent>
            
            {/* Sports Center Membership Form */}
            <TabsContent value="sports">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Spor Merkezi Üyelik Formu</h2>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Ad ve soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="tcNumber" className="block text-sm font-medium text-gray-700 mb-1">T.C. Kimlik Numarası</label>
                    <input
                      type="text"
                      id="tcNumber"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="T.C. Kimlik numaranız"
                      maxLength={11}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="E-posta adresiniz"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Telefon numaranız"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="membershipType" className="block text-sm font-medium text-gray-700 mb-1">Üyelik Tipi</label>
                  <select
                    id="membershipType"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="" disabled selected>Lütfen üyelik tipi seçin</option>
                    <option value="full">Tam Üyelik (Tüm Hizmetler)</option>
                    <option value="pool">Havuz Üyeliği</option>
                    <option value="fitness">Fitness Üyeliği</option>
                    <option value="pilates">Pilates Üyeliği</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">Başlangıç Tarihi</label>
                    <input
                      type="date"
                      id="startDate"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="membershipDuration" className="block text-sm font-medium text-gray-700 mb-1">Üyelik Süresi</label>
                    <select
                      id="membershipDuration"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="1">1 Ay</option>
                      <option value="3">3 Ay</option>
                      <option value="6">6 Ay</option>
                      <option value="12">12 Ay</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="healthInfo" className="block text-sm font-medium text-gray-700 mb-1">Sağlık Bilgileri</label>
                  <textarea
                    id="healthInfo"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Sağlık durumunuz ile ilgili bilmenizi istediğimiz özel durumlar..."
                  ></textarea>
                </div>

                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="agreement"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="agreement" className="ml-2 block text-sm text-gray-700">
                    Kişisel verilerimin işlenmesine ilişkin <a href="#" className="text-primary hover:underline">aydınlatma metnini</a> okudum ve onaylıyorum.
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Üyelik Başvurusu Yap
                </button>
              </form>
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
