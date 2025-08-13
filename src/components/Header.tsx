import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Facebook, Twitter, Linkedin, Globe } from 'lucide-react';

interface HeaderProps {
  isArabic: boolean;
  toggleLanguage: () => void;
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

const Header: React.FC<HeaderProps> = ({ isArabic, toggleLanguage, onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);
  const [isOurBusinessDropdownOpen, setIsOurBusinessDropdownOpen] = useState(false);
  const [isSustainabilityDropdownOpen, setIsSustainabilityDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { en: 'ABOUT US', ar: 'من نحن', page: 'about', hasDropdown: true },
    { en: 'SUSTAINABILITY', ar: 'الاستدامة', page: 'sustainability-main', hasDropdown: true },
    { en: 'OUR BUSINESS', ar: 'أعمالنا', page: 'business', hasDropdown: true },
    { en: 'CAREERS', ar: 'الوظائف', page: 'careers' },
    { en: 'NEWS', ar: 'الأخبار', page: 'news' },
    { en: 'CONTACT US', ar: 'اتصل بنا', page: 'contact' }
  ];

  const aboutUsDropdownItems = [
    { en: 'Mission, Vision and Values', ar: 'المهمة والرؤية والقيم', page: 'about-mission-vision-values' },
    { en: 'Ownership', ar: 'الملكية', page: 'about-ownership' },
    { en: 'Our Leadership', ar: 'قيادتنا', page: 'about-leadership' },
    { en: 'Ethics and Compliance', ar: 'الأخلاق والامتثال', page: 'about-ethics-compliance' },
    { en: 'Awards and Recognitions', ar: 'الجوائز والتقديرات', page: 'about-awards-recognitions' }
  ];

  const ourBusinessDropdownItems = [
    { en: 'AES Jordan PSC (IPP1)', ar: 'شركة AES الأردن (IPP1)', page: 'business-aes-jordan-ipp1' },
    { en: 'AES Levant Holdings BV (IPP4)', ar: 'شركة AES بلاد الشام (IPP4)', page: 'business-aes-levant-ipp4' },
    { en: 'AM Solar', ar: 'AM الطاقة الشمسية', page: 'business-am-solar' }
  ];

  const sustainabilityDropdownItems = [
    { en: 'Safety First', ar: 'السلامة أولاً', page: 'sustainability-safety' },
    { en: 'Environmental Protection', ar: 'حماية البيئة', page: 'sustainability-environment' },
    { en: 'Social Responsibility', ar: 'المسؤولية الاجتماعية', page: 'sustainability-social' },
    { en: 'Stakeholder Relations', ar: 'علاقات أصحاب المصلحة', page: 'sustainability-stakeholder' },
    { en: 'Asset Management', ar: 'إدارة الأصول', page: 'sustainability-assets' },
    { en: 'Supply Chain Management', ar: 'إدارة سلسلة التوريد', page: 'sustainability-supply' }
  ];
  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsAboutUsDropdownOpen(false);
    setIsOurBusinessDropdownOpen(false);
    setIsSustainabilityDropdownOpen(false);
  };

  const handleDropdownToggle = (dropdownName: string) => {
    // Close all dropdowns first
    setIsAboutUsDropdownOpen(false);
    setIsOurBusinessDropdownOpen(false);
    setIsSustainabilityDropdownOpen(false);
    
    // Then open the requested one
    if (dropdownName === 'aboutUs') {
      setIsAboutUsDropdownOpen(true);
    } else if (dropdownName === 'ourBusiness') {
      setIsOurBusinessDropdownOpen(true);
    } else if (dropdownName === 'sustainability') {
      setIsSustainabilityDropdownOpen(true);
    }
  };

  const handleDropdownItemClick = (page: string) => {
    handleNavigation(page);
    setIsAboutUsDropdownOpen(false);
    setIsOurBusinessDropdownOpen(false);
    setIsSustainabilityDropdownOpen(false);
  };

  const handleMouseEnter = (dropdownName: string) => {
    if (dropdownName === 'aboutUs') {
      setIsAboutUsDropdownOpen(true);
    } else if (dropdownName === 'ourBusiness') {
      setIsOurBusinessDropdownOpen(true);
    } else if (dropdownName === 'sustainability') {
      setIsSustainabilityDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setIsAboutUsDropdownOpen(false);
    setIsOurBusinessDropdownOpen(false);
    setIsSustainabilityDropdownOpen(false);
  };

  const renderDropdown = (items: any[], isOpen: boolean, viewAllPage: string, viewAllText: { en: string, ar: string }) => (
    <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50 transition-all duration-200 ${
      isOpen 
        ? 'opacity-100 visible transform translate-y-0' 
        : 'opacity-0 invisible transform -translate-y-2'
    }`}>
      <div className="py-2">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => handleDropdownItemClick(item.page)}
            className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#005670] hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
          >
            {isArabic ? item.ar : item.en}
          </button>
        ))}
      </div>
    </div>
  );
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20">
          {/* Logo Section - Left Side */}
          <div className="flex items-center">
            <img
              onClick={() => handleNavigation('home')}
              src="/Logo-.png" 
              alt="Nebras Power" 
              className="h-16 w-auto cursor-pointer hover:opacity-80 transition-opacity duration-200"
            />
          </div>

          {/* Content Section - Right Side */}
          <div className="flex-1 flex flex-col ml-8">
            {/* Top Row - Social Icons and Language Toggle */}
            <div className="flex items-center justify-end h-10 border-b border-gray-200">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="bg-[#005670] hover:bg-[#004558] text-white px-4 py-1.5 rounded text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
              >
                <Globe size={14} />
                <span>{isArabic ? 'English' : 'العربية'}</span>
              </button>
            </div>

            {/* Bottom Row - Navigation and Search */}
            <div className="flex-1 flex items-center justify-between">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {menuItems.map((item, index) => (
                  <div key={index} className="relative">
                    {item.hasDropdown ? (
                      <div 
                        className="relative"
                        onMouseEnter={() => {
                          if (item.en === 'ABOUT US') {
                            handleMouseEnter('aboutUs');
                          } else if (item.en === 'OUR BUSINESS') {
                            handleMouseEnter('ourBusiness');
                          } else if (item.en === 'SUSTAINABILITY') {
                            handleMouseEnter('sustainability');
                          }
                        }}
                        onMouseLeave={handleMouseLeave}
                      >
                        <button
                          onClick={() => handleNavigation(item.page)}
                          className="text-gray-800 hover:text-[#005670] font-medium text-sm uppercase tracking-wide transition-colors duration-200"
                        >
                          {isArabic ? item.ar : item.en}
                        </button>
                        
                        {/* Dropdown Menu */}
                        {item.en === 'ABOUT US' && renderDropdown(
                          aboutUsDropdownItems,
                          isAboutUsDropdownOpen,
                          'about',
                          { en: 'View All About Us', ar: 'عرض جميع من نحن' }
                        )}
                        
                        {item.en === 'OUR BUSINESS' && renderDropdown(
                          ourBusinessDropdownItems,
                          isOurBusinessDropdownOpen,
                          'business',
                          { en: 'View All Business', ar: 'عرض جميع الأعمال' }
                        )}
                        
                        {item.en === 'SUSTAINABILITY' && renderDropdown(
                          sustainabilityDropdownItems,
                          isSustainabilityDropdownOpen,
                          'sustainability',
                          { en: 'View All Sustainability', ar: 'عرض جميع الاستدامة' }
                        )}
                      </div>
                    ) : (
                      <button
                        onClick={() => handleNavigation(item.page)}
                        className="text-gray-800 hover:text-[#005670] font-medium text-sm uppercase tracking-wide transition-colors duration-200"
                      >
                        {isArabic ? item.ar : item.en}
                      </button>
                    )}
                  </div>
                ))}
              </nav>

              {/* Search */}
              <div className="hidden lg:flex items-center">
                <button 
                  onClick={() => {
                    if (currentPage === 'search') {
                      onNavigate?.('home');
                    } else {
                      onNavigate?.('search');
                    }
                  }}
                  className="flex items-center space-x-2 text-gray-600 hover:text-[#005670] transition-colors duration-200"
                >
                  {currentPage === 'search' ? (
                    <>
                      <X size={16} />
                      <span className="text-sm font-medium">{isArabic ? 'خروج' : 'Exit'}</span>
                    </>
                  ) : (
                    <>
                      <Search size={16} />
                      <span className="text-sm font-medium">{isArabic ? 'بحث' : 'Search'}</span>
                    </>
                  )}
                </button>
              </div>
              {/* Mobile Menu Button */}
              <div className="lg:hidden ml-auto">
                <button
                  className="p-2 text-gray-600 hover:text-[#005670] transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Sliding Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-[#005670] to-[#004558]">
            <img 
              src="/Logo-.png" 
              alt="Nebras Power" 
              className="h-12 w-auto filter brightness-0 invert"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-white hover:text-gray-200 transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="py-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  handleNavigation(item.page);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-6 py-4 text-gray-800 hover:text-[#005670] hover:bg-gradient-to-r hover:from-[#005670] hover:from-opacity-5 hover:to-transparent transition-all duration-200 font-medium text-lg border-b border-gray-100 last:border-b-0"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span>{isArabic ? item.ar : item.en}</span>
                  <div className="w-1 h-1 bg-[#005670] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </div>
              </button>
            ))}
          </div>

          {/* Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
            {/* Social Media Icons */}
            <div className="flex items-center justify-center space-x-6 mb-4">
              <a href="#" className="text-gray-600 hover:text-[#005670] transition-colors duration-200 transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#005670] transition-colors duration-200 transform hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#005670] transition-colors duration-200 transform hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
            
            {/* Language Toggle */}
            <div className="flex items-center justify-center mb-4">
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-[#005670] hover:bg-[#004558] text-white px-6 py-2 rounded font-medium text-sm transition-all duration-200 flex items-center space-x-2 transform hover:scale-105"
              >
                <Globe size={16} />
                <span>{isArabic ? 'English' : 'العربية'}</span>
              </button>
            </div>
            
            {/* Search */}
            <div className="flex items-center justify-center">
              <button 
                onClick={() => {
                  if (currentPage === 'search') {
                    onNavigate?.('home');
                  } else {
                    onNavigate?.('search');
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 text-gray-600 hover:text-[#005670] transition-colors duration-200 transform hover:scale-105"
              >
                {currentPage === 'search' ? (
                  <>
                    <X size={16} />
                    <span className="text-sm font-medium">{isArabic ? 'خروج' : 'Exit'}</span>
                  </>
                ) : (
                  <>
                    <Search size={16} />
                    <span className="text-sm font-medium">{isArabic ? 'بحث' : 'Search'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;