import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  isArabic: boolean;
  toggleLanguage: () => void;
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ isArabic, toggleLanguage, onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const footerLinks = {
    company: {
      title: { en: 'Company', ar: 'الشركة' },
      links: [
        { en: 'About Us', ar: 'من نحن', page: 'about' },
        { en: 'Our Business', ar: 'أعمالنا', page: 'business' },
        { en: 'Leadership', ar: 'القيادة', page: 'about' },
        { en: 'Careers', ar: 'الوظائف', page: 'careers' }
      ]
    },
    services: {
      title: { en: 'Services', ar: 'الخدمات' },
      links: [
        { en: 'Asset Management', ar: 'إدارة الأصول', page: 'business' },
        { en: 'Project Development', ar: 'تطوير المشاريع', page: 'business' },
        { en: 'Operations & Maintenance', ar: 'التشغيل والصيانة', page: 'business' },
        { en: 'Consulting', ar: 'الاستشارات', page: 'business' }
      ]
    },
    sustainability: {
      title: { en: 'Sustainability', ar: 'الاستدامة' },
      links: [
        { en: 'Environmental Impact', ar: 'التأثير البيئي', page: '#sustainability' },
        { en: 'Community Programs', ar: 'البرامج المجتمعية', page: '#sustainability' },
        { en: 'Innovation', ar: 'الابتكار', page: '#sustainability' },
        { en: 'Reports', ar: 'التقارير', page: 'news' }
      ]
    }
  };

  return (
    <footer className="bg-[#231f20] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src="/Logo-.png" 
              alt="Nebras Power" 
              className="h-20 w-auto mb-6 filter brightness-0 invert"
            />
            
            <p className="text-gray-300 leading-relaxed mb-6">
              {isArabic
                ? 'نبراس باور الأردن - توفير توليد طاقة موثوق وفعال لدعم نمو الأردن.'
                : 'Nibras Power Jordan – Delivering reliable, efficient power generation to support Jordan\'s growth.'
              }
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-[#005670]" />
                <span className="text-sm">
                  {isArabic ? 'عمان، الأردن' : 'Amman, Jordan'}
                </span>
              </div>
              
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-[#005670]" />
                <span className="text-sm">+974 4000 0000</span>
              </div>
              
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-[#005670]" />
                <span className="text-sm">info@nibraspower.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-lg font-bold mb-6">
                {isArabic ? section.title.ar : section.title.en}
              </h3>
              
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavigation(link.page)}
                      className="text-gray-300 hover:text-[#005670] transition-colors duration-200 text-sm"
                    >
                      {isArabic ? link.ar : link.en}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Language Toggle */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-gray-300 text-sm">
                {isArabic ? 'تابعنا:' : 'Follow us:'}
              </span>
              
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-[#005670] transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#005670] transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#005670] transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#005670] transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button
                onClick={toggleLanguage}
                className="text-gray-300 hover:text-[#005670] transition-colors duration-200 text-sm font-medium"
              >
                {isArabic ? 'ENGLISH' : 'العربية'}
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © {currentYear} {isArabic ? 'نبراس باور الأردن. جميع الحقوق محفوظة.' : 'Nibras Power Jordan. All rights reserved.'}
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#005670] transition-colors duration-200">
                {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </a>
              <a href="#" className="hover:text-[#005670] transition-colors duration-200">
                {isArabic ? 'الشروط والأحكام' : 'Terms & Conditions'}
              </a>
              <a href="#" className="hover:text-[#005670] transition-colors duration-200">
                {isArabic ? 'خريطة الموقع' : 'Sitemap'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;