import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Shield, Handshake, Zap, Smile, Trophy, ChevronRight, Target, Eye, Heart } from 'lucide-react';

interface MissionVisionValuesProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const MissionVisionValues: React.FC<MissionVisionValuesProps> = ({ isArabic, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState<number | null>(null);
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

  const values = [
    {
      icon: Shield,
      title: { en: 'Safety', ar: 'السلامة' },
      description: { 
        en: 'We always put safety first—for our people, contractors, and communities.',
        ar: 'نضع السلامة دائماً في المقدمة - لموظفينا ومقاولينا ومجتمعاتنا.'
      },
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Handshake,
      title: { en: 'Integrity', ar: 'النزاهة' },
      description: { 
        en: 'We are honest, trustworthy, and dependable.',
        ar: 'نحن صادقون وجديرون بالثقة ويمكن الاعتماد علينا.'
      },
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: { en: 'Agility', ar: 'الرشاقة' },
      description: { 
        en: 'We move with vision, speed, and flexibility.',
        ar: 'نتحرك بالرؤية والسرعة والمرونة.'
      },
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Smile,
      title: { en: 'Fun', ar: 'المتعة' },
      description: { 
        en: 'We enjoy our work and believe in creating a positive, respectful, and diverse workplace.',
        ar: 'نستمتع بعملنا ونؤمن بخلق بيئة عمل إيجابية ومحترمة ومتنوعة.'
      },
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Trophy,
      title: { en: 'Excellence', ar: 'التميز' },
      description: { 
        en: 'We strive for world-class performance and continuous improvement.',
        ar: 'نسعى للأداء عالمي المستوى والتحسين المستمر.'
      },
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
              {isArabic ? 'المهمة والرؤية والقيم' : 'Mission, Vision & Values'}
            </span>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isArabic ? 'مهمتنا ورؤيتنا وقيمنا' : 'Our Mission, Vision & Values'}
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
              {isArabic 
                ? 'نحن ملتزمون بريادة طاقة المستقبل على نطاق عالمي'
                : 'We are committed to pioneering the energy of the future on a global scale'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={sectionRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div>
              <div className="inline-flex items-center px-6 py-3 bg-[#005670] bg-opacity-10 rounded-full mb-6">
                <Target className="w-5 h-5 text-[#005670] mr-2" />
                <span className="text-[#005670] font-semibold text-sm tracking-wide uppercase">
                  {isArabic ? 'مهمتنا' : 'Our Mission'}
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#231f20] mb-8 leading-tight">
                {isArabic ? 'مهمتنا' : 'Our Mission'}
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {isArabic
                    ? 'تحسين الحياة وإحداث فرق دائم في المجتمعات التي نعمل فيها هو جزء أساسي من قيمنا ومهمتنا. نحن ملتزمون بمجموعة واسعة من المبادرات الاجتماعية والاقتصادية والبيئية التي تحسن حياة عملائنا ومجتمعاتهم.'
                    : 'Improving lives and making a lasting difference in the communities in which our business operates is a core part of our values and mission. We are committed to a wide range of social, economic and environmental initiatives that improve the lives of our customers and their communities.'
                  }
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {isArabic
                    ? 'نحمي البيئة التي نعمل فيها؛ نمكن موظفينا وأعمالنا؛ ونحسن العائدات طويلة المدى لمستثمرينا.'
                    : 'We protect the environment in which we operate; empower our people and business; and improve long-term returns to our investors.'
                  }
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#005670] to-[#004558] rounded-3xl p-8 text-white shadow-2xl">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white bg-opacity-10 rounded-full blur-xl"></div>
                <div className="relative">
                  <Target className="w-16 h-16 text-white mb-6 opacity-80" />
                  <h3 className="text-2xl font-bold mb-4">
                    {isArabic ? 'التأثير المجتمعي' : 'Community Impact'}
                  </h3>
                  <p className="text-white text-opacity-90 leading-relaxed">
                    {isArabic
                      ? 'نؤمن بأن النجاح الحقيقي يُقاس بالتأثير الإيجابي الذي نحدثه في المجتمعات التي نخدمها.'
                      : 'We believe that true success is measured by the positive impact we make in the communities we serve.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <div className="inline-flex items-center px-6 py-3 bg-[#005670] bg-opacity-10 rounded-full mb-6">
                <Eye className="w-5 h-5 text-[#005670] mr-2" />
                <span className="text-[#005670] font-semibold text-sm tracking-wide uppercase">
                  {isArabic ? 'رؤيتنا' : 'Our Vision'}
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#231f20] mb-8 leading-tight">
                {isArabic ? 'رؤيتنا' : 'Our Vision'}
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {isArabic
                    ? 'رؤية AES الأردن هي أن تكون شركة الطاقة المستدامة الرائدة في البلاد التي توفر بأمان طاقة موثوقة وبأسعار معقولة. نهدف إلى الاستفادة من منصات الكهرباء الفريدة لدينا ومعرفة موظفينا لتوفير حلول الطاقة والبنية التحتية التي يحتاجها عملاؤنا.'
                    : 'AES Jordan\'s vision is to be the country\'s leading sustainable power company that safely provides reliable, affordable energy. We aim to leverage our unique electricity platforms and the knowledge of our people to provide the energy and infrastructure solutions our customers need.'
                  }
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {isArabic
                    ? 'يشارك موظفونا شغفاً لمساعدة تلبية متطلبات الطاقة المتزايدة في العالم مع دعم النمو الاقتصادي والفرص للمجتمعات.'
                    : 'Our people share a passion to help meet the world\'s growing energy demands while supporting economic growth and opportunity for communities.'
                  }
                </p>
              </div>
            </div>
            
            <div className="lg:order-1 relative">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-white bg-opacity-10 rounded-full blur-xl"></div>
                <div className="relative">
                  <Eye className="w-16 h-16 text-white mb-6 opacity-80" />
                  <h3 className="text-2xl font-bold mb-4">
                    {isArabic ? 'الطاقة المستدامة' : 'Sustainable Energy'}
                  </h3>
                  <p className="text-white text-opacity-90 leading-relaxed">
                    {isArabic
                      ? 'نتطلع إلى مستقبل حيث تكون الطاقة النظيفة والمستدامة متاحة للجميع، مما يدعم النمو الاقتصادي والازدهار المجتمعي.'
                      : 'We envision a future where clean, sustainable energy is accessible to all, supporting economic growth and community prosperity.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-[#005670] bg-opacity-10 rounded-full mb-6">
              <Heart className="w-5 h-5 text-[#005670] mr-2" />
              <span className="text-[#005670] font-semibold text-sm tracking-wide uppercase">
                {isArabic ? 'قيمنا' : 'Our Values'}
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-[#231f20] mb-8">
              {isArabic ? 'قيمنا الأساسية' : 'Our Core Values'}
            </h2>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {isArabic
                ? 'هذه القيم توجه كل ما نقوم به وتشكل ثقافة شركتنا'
                : 'These values guide everything we do and shape our company culture'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer ${
                    activeValue === index ? 'ring-4 ring-[#005670] ring-opacity-20' : ''
                  }`}
                  onMouseEnter={() => setActiveValue(index)}
                  onMouseLeave={() => setActiveValue(null)}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  
                  {/* Icon Container */}
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#231f20] mb-4 group-hover:text-[#005670] transition-colors duration-300">
                    {isArabic ? value.title.ar : value.title.en}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {isArabic ? value.description.ar : value.description.en}
                  </p>
                  
                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#005670] group-hover:border-opacity-20 transition-all duration-300 pointer-events-none"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#005670] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              {isArabic ? 'انضم إلى رحلتنا' : 'Join Our Journey'}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              {isArabic
                ? 'كن جزءاً من فريق يشكل مستقبل الطاقة في الأردن والمنطقة'
                : 'Be part of a team that\'s shaping the future of energy in Jordan and the region'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => onNavigate?.('careers')}
                className="inline-flex items-center bg-white text-[#005670] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isArabic ? 'الوظائف المتاحة' : 'View Careers'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button 
                onClick={() => onNavigate?.('contact')}
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-[#005670] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {isArabic ? 'تواصل معنا' : 'Contact Us'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVisionValues;