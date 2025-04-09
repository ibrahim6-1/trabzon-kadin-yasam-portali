import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react";

// Navigation links configuration
const navigationLinks = [
  { name: "Ana Sayfa", href: "/" },
  { 
    name: "Kadın Danışma Merkezi", 
    href: "/kadin-danisma",
    submenu: [
      { name: "Psikolojik Danışmanlık", href: "/kadin-danisma/psikolojik" },
      { name: "Beslenme Danışmanlığı", href: "/kadin-danisma/beslenme" },
    ] 
  },
  { name: "Spor Merkezi", href: "/spor-merkezi" },
  { 
    name: "İstihdam Merkezi", 
    href: "/istihdam-merkezi",
    submenu: [
      { name: "İstihdam Kursları", href: "/istihdam-merkezi/istihdam-kurslari" },
      { name: "Hobi Kursları", href: "/istihdam-merkezi/hobi-kurslari" },
    ]
  },
  { 
    name: "Kültür Sanat Merkezi", 
    href: "/kultur-sanat",
    submenu: [
      { name: "Sergiler", href: "/kultur-sanat/sergiler" },
      { name: "Etkinlikler", href: "/kultur-sanat/etkinlikler" },
    ]
  },
  { name: "Duyurular", href: "/duyurular" },
  { name: "Online İşlemler", href: "/online-islemler" },
  { name: "İletişim", href: "/iletisim" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (name: string) => {
    if (activeSubmenu === name) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(name);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">
                <span className="text-secondary">Trabzon</span> Kadın Yaşam Merkezi
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
                >
                  {link.name}
                </Link>
                
                {link.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        to={sublink.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-primary"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-primary focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md py-2">
          <div className="container mx-auto px-4">
            {navigationLinks.map((link) => (
              <div key={link.name} className="py-2">
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(link.name)}
                      className="w-full flex justify-between items-center text-left text-gray-700 hover:text-primary py-2"
                    >
                      <span>{link.name}</span>
                      <span className="text-xs">
                        {activeSubmenu === link.name ? "▲" : "▼"}
                      </span>
                    </button>
                    
                    {activeSubmenu === link.name && (
                      <div className="pl-4 mt-1 border-l-2 border-primary">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.href}
                            className="block py-2 text-sm text-gray-700 hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className="block text-gray-700 hover:text-primary py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
