
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

// Sample announcement data
const announcements = [
  {
    id: 1,
    title: "Yeni El Sanatları Kursumuz Başlıyor",
    date: "10 Nisan 2025",
    category: "Kurs",
    excerpt: "El sanatları kursumuzda geleneksel Trabzon el işçiliğini öğrenmek için son başvuru tarihi yaklaşıyor.",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Ücretsiz Sağlık Taraması Etkinliği",
    date: "15 Nisan 2025",
    category: "Sağlık",
    excerpt: "Merkezimizde düzenlenecek sağlık taraması etkinliğine tüm kadınlar davetlidir. Detaylı bilgi için tıklayınız.",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Kadın Hakları Semineri",
    date: "20 Nisan 2025",
    category: "Seminer",
    excerpt: "Avukat Ayşe Yılmaz eşliğinde kadın hakları ve yasal süreçler hakkında bilgilendirme semineri düzenlenecektir.",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Yaz Spor Programı Kayıtları Açıldı",
    date: "1 Mayıs 2025",
    category: "Spor",
    excerpt: "Yaz döneminde uygulanacak spor programlarına kayıtlar başlamıştır. Kontenjanlar sınırlıdır.",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Fotoğrafçılık Sergisi",
    date: "5 Mayıs 2025",
    category: "Kültür-Sanat",
    excerpt: "Kadın fotoğrafçılarımızın eserlerinin yer alacağı sergi açılışımıza tüm sanatseverler davetlidir.",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "İstihdam Destekleri Bilgilendirme Toplantısı",
    date: "12 Mayıs 2025",
    category: "İstihdam",
    excerpt: "Kadınlar için istihdam teşvikleri ve iş kurma süreçleri hakkında bilgilendirme toplantısı yapılacaktır.",
    image: "/placeholder.svg"
  }
];

const Announcements = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Duyurular</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Merkezimizde gerçekleşecek etkinlikler, programlar ve duyurular hakkında güncel bilgilere buradan ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((announcement) => (
            <div 
              key={announcement.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={announcement.image}
                alt={announcement.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1">
                    {announcement.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {announcement.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {announcement.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {announcement.excerpt}
                </p>
                <Link
                  to={`/duyurular/${announcement.id}`}
                  className="text-primary hover:text-primary-dark font-medium flex items-center"
                >
                  Detaylar
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
