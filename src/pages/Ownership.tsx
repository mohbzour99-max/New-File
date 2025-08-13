import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Globe, Building, Factory, Zap, Users, ChevronRight, ExternalLink } from 'lucide-react';

interface OwnershipProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const Ownership: React.FC<OwnershipProps> = ({ isArabic, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#005670] via-[#004558] to-[#003445] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <div className="flex items-center text-white text-opacity-80 mb-8 text-sm">
            <button 
              onClick={() => onNavigate?.('home')}
              className="hover:text-white transition-colors duration-200"
            >
              {isArabic ? 'الرئيسية' : 'Home'}
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <button 
              onClick={() => onNavigate?.('about')}
              className="hover:text-white transition-colors duration-200"
            >
              {isArabic ? 'من نحن' : 'About Us'}
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">
              {isArabic ? 'الملكية' : 'Ownership'}
            </span>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isArabic ? 'الملكية' : 'Ownership'}
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
              {isArabic 
                ? 'نبراس الأردن مملوكة من قبل شركة AES وميتسوي ونبراس باور'
                : 'AES Jordan is owned by AES Corporation, Mitsui, and Nebras Power'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={sectionRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center px-6 py-3 bg-[#005670] bg-opacity-10 rounded-full mb-6">
              <Users className="w-5 h-5 text-[#005670] mr-2" />
              <span className="text-[#005670] font-semibold text-sm tracking-wide uppercase">
                {isArabic ? 'شركاؤنا' : 'Our Partners'}
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-[#231f20] mb-6">
              {isArabic ? 'شراكة عالمية قوية' : 'Strong Global Partnership'}
            </h2>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {isArabic
                ? 'نبراس الأردن مدعومة بشراكة استراتيجية مع ثلاث شركات عالمية رائدة في مجال الطاقة والاستثمار'
                : 'AES Jordan is backed by a strategic partnership with three leading global companies in energy and investment'
              }
            </p>
          </div>

          {/* Company Cards Grid */}
          <div className={`grid lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            {/* The AES Corporation */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              {/* Logo Section */}
              <div className="p-8 pb-6 text-center border-b border-gray-100">
                <div className="w-full h-24 flex items-center justify-center mb-4">
                  <img
                    src="/Logo-.png"
                    alt="AES Corporation Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#231f20] mb-6 text-center">
                  {isArabic ? 'شركة AES' : 'The AES Corporation'}
                </h3>
                
                <div className="text-base text-gray-700 leading-relaxed mb-8 text-justify flex-grow">
                  <p className="mb-4">
                    {isArabic
                      ? 'شركة AES (NYSE: AES) هي شركة طاقة عالمية من فورتشن 200. نوفر طاقة مستدامة وبأسعار معقولة لـ 15 دولة من خلال محفظتنا المتنوعة من أعمال التوزيع ومرافق التوليد الحرارية والمتجددة.'
                      : 'The AES Corporation (NYSE: AES) is a Fortune 200 global power company. We provide affordable, sustainable energy to 15 countries through our diverse portfolio of distribution businesses as well as thermal and renewable generation facilities.'
                    }
                  </p>
                  <p className="mb-4">
                    {isArabic
                      ? 'بلغت إيراداتنا في 2017 حوالي 11 مليار دولار، ونملك وندير 33 مليار دولار من إجمالي الأصول. قوتنا العاملة ملتزمة بالتميز التشغيلي وتلبية احتياجات الطاقة المتغيرة في العالم.'
                      : 'Our 2017 revenues were $11 billion, and we own and manage $33 billion in total assets. Our workforce is committed to operational excellence and meeting the world\'s changing power needs.'
                    }
                  </p>
                  <p className="mb-4">
                    {isArabic
                      ? 'لمعرفة المزيد، قم بزيارة: www.aes.com'
                      : 'To learn more, visit: www.aes.com'
                    }
                  </p>
                  <p>
                    {isArabic
                      ? 'تابع AES على تويتر @TheAESCorp'
                      : 'Follow AES on Twitter @TheAESCorp'
                    }
                  </p>
                </div>

                {/* Visit Site Button */}
                <div className="mt-auto">
                  <a
                    href="https://www.aes.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#2c3e50] hover:bg-[#34495e] text-white text-center py-3 rounded font-semibold transition-colors duration-300"
                  >
                    {isArabic ? 'زيارة الموقع' : 'Visit Site'}
                  </a>
                </div>
              </div>
            </div>

            {/* Mitsui & Co., Ltd. */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              {/* Logo Section */}
              <div className="p-8 pb-6 text-center border-b border-gray-100">
                <div className="w-full h-24 flex items-center justify-center mb-4">
                  <img
                    src="/Logo-.png"
                    alt="Mitsui & Co., Ltd. Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#231f20] mb-6 text-center">
                  {isArabic ? 'شركة ميتسوي المحدودة' : 'Mitsui & Co., Ltd.'}
                </h3>
                
                <div className="text-base text-gray-700 leading-relaxed mb-8 text-justify flex-grow">
                  <p className="mb-4">
                    {isArabic
                      ? 'باستخدام المواقع التشغيلية العالمية والشبكة وموارد المعلومات، تتابع ميتسوي الأعمال متعددة الأطراف التي تتراوح من مبيعات المنتجات واللوجستيات في جميع أنحاء العالم والتمويل، من خلال تطوير مشاريع البنية التحتية الدولية الرئيسية ومشاريع أخرى في المجالات التالية:'
                      : 'Utilizing the global operating locations, network and information resources, Mitsui is multilaterally pursuing business that ranges from product sales, worldwide logistics and financing, through to the development of major international infrastructure and other projects in the following fields:'
                    }
                  </p>
                  <p className="mb-4">
                    {isArabic
                      ? 'منتجات الحديد والصلب، الموارد المعدنية والمعادن، مشاريع البنية التحتية، أنظمة النقل المتكاملة، الكيماويات، الطاقة، الغذاء، الطعام والتجزئة، الرعاية الصحية والخدمة، الأعمال الاستهلاكية، تقنية المعلومات والاتصالات، أعمال تطوير الشركات.'
                      : 'Iron & Steel Products, Mineral & Metal Resources, Infrastructure Projects, Integrated Transportation Systems, Chemicals, Energy, Food, Food & Retail Management, Healthcare & Service, Consumer Business, IT & Communication Business, Corporate Development Business.'
                    }
                  </p>
                </div>

                {/* Visit Site Button */}
                <div className="mt-auto">
                  <a
                    href="https://www.mitsui.com/jp/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#2c3e50] hover:bg-[#34495e] text-white text-center py-3 rounded font-semibold transition-colors duration-300"
                  >
                    {isArabic ? 'زيارة الموقع' : 'Visit Site'}
                  </a>
                </div>
              </div>
            </div>

            {/* Nebras Power */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              {/* Logo Section */}
              <div className="p-8 pb-6 text-center border-b border-gray-100">
                <div className="w-full h-24 flex items-center justify-center mb-4">
                  <img
                    src="/Logo-.png"
                    alt="Nebras Power Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#231f20] mb-6 text-center">
                  {isArabic ? 'نبراس باور' : 'Nebras Power'}
                </h3>
                
                <div className="text-base text-gray-700 leading-relaxed mb-8 text-justify flex-grow">
                  <p className="mb-4">
                    {isArabic
                      ? 'نبراس باور هي شركة طاقة ديناميكية مقرها الدوحة، قطر. مدعومة من شركاء قطريين كبار، تستثمر نبراس في مشاريع طاقة ومياه واسعة النطاق ومربحة عالمياً. تركز الشركة على مصادر طاقة متنوعة وتقدم حلولاً في مرافق الغاز الطبيعي المسال ومعالجة المياه وإمداد الوقود - موسعة حضورها عبر منطقة الشرق الأوسط وشمال أفريقيا وجنوب شرق آسيا وأوروبا وما وراءها.'
                      : 'Nebras Power is a dynamic energy company based in Doha, Qatar. Backed by major Qatari partners, Nebras invests in large-scale, profitable power and water projects globally. The company focuses on diverse energy sources and offers solutions in LNG facilities, water treatment, and fuel supply—expanding its presence across the MENA region, Southeast Asia, Europe, and beyond.'
                    }
                  </p>
                </div>

                {/* Visit Site Button */}
                <div className="mt-auto">
                  <a
                    href="https://www.nebras-power.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#2c3e50] hover:bg-[#34495e] text-white text-center py-3 rounded font-semibold transition-colors duration-300"
                  >
                    {isArabic ? 'زيارة الموقع' : 'Visit Site'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#005670] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              {isArabic ? 'تعرف على المزيد عن نبراس الأردن' : 'Learn More About AES Jordan'}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              {isArabic
                ? 'اكتشف كيف تساهم شراكتنا العالمية في تعزيز قطاع الطاقة في الأردن'
                : 'Discover how our global partnership strengthens Jordan\'s energy sector'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => onNavigate?.('about-mission-vision-values')}
                className="inline-flex items-center bg-white text-[#005670] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isArabic ? 'مهمتنا ورؤيتنا' : 'Our Mission & Vision'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button 
                onClick={() => onNavigate?.('about-leadership')}
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-[#005670] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {isArabic ? 'قيادتنا' : 'Our Leadership'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ownership;