
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const PriceList = () => {
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
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">1 Ay</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">3 Ay</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">6 Ay</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">12 Ay</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">400 TL</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,100 TL</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2,000 TL</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3,800 TL</td>
                      </tr>
                    </tbody>
                  </table>
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
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">1 Ay</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">3 Ay</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">6 Ay</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">12 Ay</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">500 TL</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,350 TL</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2,500 TL</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4,800 TL</td>
                      </tr>
                    </tbody>
                  </table>
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
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">1 Ay</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">3 Ay</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">6 Ay</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">12 Ay</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">450 TL</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,200 TL</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2,200 TL</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4,200 TL</td>
                      </tr>
                    </tbody>
                  </table>
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
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">1 Ay</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">3 Ay</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">6 Ay</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">12 Ay</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">600 TL</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,600 TL</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3,000 TL</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5,500 TL</td>
                      </tr>
                    </tbody>
                  </table>
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
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">1 Ay</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">3 Ay</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">6 Ay</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">12 Ay</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">450 TL</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,200 TL</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2,300 TL</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4,400 TL</td>
                      </tr>
                    </tbody>
                  </table>
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
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">1 Ay</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">3 Ay</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">6 Ay</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">12 Ay</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">800 TL</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2,200 TL</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4,000 TL</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7,500 TL</td>
                      </tr>
                    </tbody>
                  </table>
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
    </div>
  );
};

export default PriceList;
