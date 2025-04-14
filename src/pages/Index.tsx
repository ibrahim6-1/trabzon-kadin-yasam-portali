import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-dark py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trabzon Kadın Yaşam Merkezi'ne Hoş Geldiniz
            </h1>
            <p className="text-lg mb-8 text-white/90">
              Kadınların sosyal, kültürel, ekonomik ve sportif açıdan 
              gelişimlerini destekleyen, güvenli ve güçlendirici bir topluluk.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/online-islemler"
                className="bg-white text-primary hover:bg-gray-100 font-medium rounded-lg px-6 py-3 inline-flex items-center transition-colors"
              >
                Online İşlemler
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/iletisim"
                className="bg-transparent text-white hover:bg-white/10 border border-white font-medium rounded-lg px-6 py-3 inline-flex items-center transition-colors"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <img
              src="/placeholder.svg"
              alt="Trabzon Kadın Yaşam Merkezi"
              className="rounded-lg shadow-lg max-h-96 w-auto animate-fade-in"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Merkezimizden Görüntüler
          </h2>
          <div className="max-w-4xl mx-auto">
            <AspectRatio ratio={16 / 9} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-gray-500 text-center p-6">
                  <p className="mb-4">YouTube video buraya eklenecek</p>
                  <p className="text-sm">YouTube video ID'sini buraya yerleştirin</p>
                </div>
                {/* 
                  YouTube embed kodu buraya eklenecek.
                  Örnek:
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/VIDEO_ID_HERE" 
                    title="YouTube video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                */}
              </div>
            </AspectRatio>
            <p className="text-gray-600 text-center mt-4">
              Trabzon Kadın Yaşam Merkezi'nin etkinliklerini ve hizmetlerini yakından tanıyın.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Hizmetlerimiz
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Kadın Danışma Card */}
            <Link to="/kadin-danisma" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-primary/20 flex items-center justify-center">
                <img src="/placeholder.svg" alt="Kadın Danışma Merkezi" className="h-32 w-auto" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary transition-colors">
                  Kadın Danışma Merkezi
                </h3>
                <p className="text-gray-600">
                  Psikolojik, beslenme ve hukuki alanlarda danışmanlık hizmetlerimizle yanınızdayız.
                </p>
              </div>
            </Link>

            {/* Spor Merkezi Card */}
            <Link to="/spor-merkezi" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-secondary/20 flex items-center justify-center">
                <img src="/placeholder.svg" alt="Spor Merkezi" className="h-32 w-auto" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary transition-colors">
                  Spor Merkezi
                </h3>
                <p className="text-gray-600">
                  Havuz, fitness, pilates, sauna ve buhar odası ile sağlıklı yaşam için hizmetinizdeyiz.
                </p>
              </div>
            </Link>

            {/* İstihdam Merkezi Card */}
            <Link to="/istihdam-merkezi" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-primary/20 flex items-center justify-center">
                <img src="/placeholder.svg" alt="İstihdam Merkezi" className="h-32 w-auto" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary transition-colors">
                  İstihdam Merkezi
                </h3>
                <p className="text-gray-600">
                  İş hayatına hazırlık ve hobi kurslarımızla yeni beceriler kazandırıyoruz.
                </p>
              </div>
            </Link>

            {/* Kültür Sanat Card */}
            <Link to="/kultur-sanat" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-secondary/20 flex items-center justify-center">
                <img src="/placeholder.svg" alt="Kültür Sanat Merkezi" className="h-32 w-auto" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary transition-colors">
                  Kültür Sanat Merkezi
                </h3>
                <p className="text-gray-600">
                  Sergiler ve etkinliklerle sanatsal faaliyetleri destekliyor ve sunuyoruz.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Announcements Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Son Duyurular
            </h2>
            <Link
              to="/duyurular"
              className="text-primary hover:text-primary-dark font-medium flex items-center"
            >
              Tüm Duyurular
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Announcement Cards */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt={`Duyuru ${item}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1">
                    Etkinlik
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">
                    Örnek Duyuru Başlığı {item}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">7 Nisan 2025</p>
                  <p className="text-gray-700 mb-4">
                    Bu bir örnek duyuru içeriğidir. Gerçek içerikler ve güncel etkinlikler için web sitemizi takip edebilirsiniz.
                  </p>
                  <Link
                    to={`/duyurular/${item}`}
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
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Trabzon Kadın Yaşam Merkezi'ne Üye Olun
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Siz de merkezimizin sunduğu hizmetlerden faydalanmak, etkinliklerimize katılmak ve 
            sosyal ağımızın bir parçası olmak için hemen üye olun.
          </p>
          <Link
            to="/online-islemler"
            className="bg-white text-primary hover:bg-gray-100 font-medium rounded-lg px-8 py-3 inline-flex items-center transition-colors"
          >
            Şimdi Üye Ol
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
