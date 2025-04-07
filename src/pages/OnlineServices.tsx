
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseRegistration from "@/components/online-services/CourseRegistration";
import SportsMembership from "@/components/online-services/SportsMembership";
import PriceList from "@/components/online-services/PriceList";

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
            
            <TabsContent value="course">
              <CourseRegistration />
            </TabsContent>
            
            <TabsContent value="sports">
              <SportsMembership />
            </TabsContent>
            
            <TabsContent value="prices">
              <PriceList />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default OnlineServices;
