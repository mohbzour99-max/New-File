import React, { useEffect, useRef, useState } from 'react';
import { Leaf, Users, Globe, ArrowRight, Shield, Handshake, Building2, Truck, ChevronLeft, ChevronRight } from 'lucide-react';

interface SustainabilitySectionProps {
  isArabic: boolean;
  onCardClick?: (cardType: string) => void;
}

const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({ isArabic, onCardClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const sustainabilityFeatures = [
    {
      id: 'sustainability-safety',
      icon: Shield,
      title: { en: 'Safety First', ar: 'السلامة أولاً' },
      description: { 
        en: 'Prioritizing safety for our people, contractors, and communities',
        ar: 'إعطاء الأولوية للسلامة لموظفينا ومقاولينا ومجتمعاتنا'
      }
    },
    {
      id: 'sustainability-environment',
      icon: Leaf,
      title: { en: 'Environmental Protection', ar: 'حماية البيئة' },
      description: { 
        en: 'Protecting the environment through sustainable practices',
        ar: 'حماية البيئة من خلال الممارسات المستدامة'
      }
    },
    {
      id: 'sustainability-social',
      icon: Users,
      title: { en: 'Social Responsibility', ar: 'المسؤولية الاجتماعية' },
      description: { 
        en: 'Contributing to community development and social welfare',
        ar: 'المساهمة في التنمية المجتمعية والرفاه الاجتماعي'
      }
    },
    {
      id: 'sustainability-stakeholder',
      icon: Handshake,
      title: { en: 'Stakeholder Relations', ar: 'علاقات أصحاب المصلحة' },
      description: { 
        en: 'Building strong relationships with all stakeholders',
        ar: 'بناء علاقات قوية مع جميع أصحاب المصلحة'
      }
    },
    {
      id: 'sustainability-assets',
      icon: Building2,
      title: { en: 'Asset Management', ar: 'إدارة الأصول' },
      description: { 
        en: 'Optimizing asset performance and lifecycle management',
        ar: 'تحسين أداء الأصول وإدارة دورة الحياة'
      }
    },
    {
      id: 'sustainability-supply',
      icon: Truck,
      title: { en: 'Supply Chain Management', ar: 'إدارة سلسلة التوريد' },
      description: { 
        en: 'Ensuring sustainable and responsible supply chain practices',
        ar: 'ضمان ممارسات سلسلة التوريد المستدامة والمسؤولة'
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Fixed 3 cards per view
  const cardsPerView = 3;
  const totalCards = sustainabilityFeatures.length; // 6 cards
  const totalSlides = totalCards - cardsPerView + 1; // 4 possible positions (0,1,2,3)

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleCardClick = (cardId: string) => {
    if (onCardClick) {
      onCardClick(cardId);
    }
  };

  // Calculate transform based on current slide
  const cardWidth = 100 / cardsPerView; // 33.333% per card
  const transformX = -(currentSlide * cardWidth);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), 
          linear-gradient(rgba(0, 86, 112, 0.2), rgba(0, 86, 112, 0.3)), 
          url('https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Additional shadow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {isArabic ? 'الاستدامة في نبراس الأردن' : 'Sustainability at Nibras Jordan'}
          </h2>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed bg-white bg-opacity-90 p-6 rounded-lg">
            {isArabic
              ? 'نحن نعطي الأولوية للإشراف البيئي والامتثال والكفاءة عبر جميع العمليات.'
              : 'We prioritize environmental stewardship, compliance, and efficiency across all operations.'
            }
          </p>
        </div>

        {/* Carousel Container */}
        <div className={`relative mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300 z-20 text-[#005670] hover:bg-[#005670] hover:text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300 z-20 text-[#005670] hover:bg-[#005670] hover:text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div className="relative overflow-hidden mx-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(${transformX}%)`,
                width: `${(totalCards / cardsPerView) * 100}%` // 200% width for 6 cards in 3-card view
              }}
            >
              {sustainabilityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.id}
                    className="flex-shrink-0 px-3"
                    style={{ width: `${100 / totalCards}%` }} // Each card takes 16.666% of total width
                  >
                    <button
                      onClick={() => handleCardClick(feature.id)}
                      className="group bg-white bg-opacity-95 rounded-xl text-center shadow-lg hover:shadow-2xl cursor-pointer border-2 border-transparent hover:border-[#005670] hover:border-opacity-30 w-full h-full min-h-[320px] flex flex-col transition-all duration-300 hover:scale-105"
                    >
                      <div className="p-6 lg:p-8 flex flex-col justify-between h-full">
                        <div className="flex flex-col items-center">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#005670] group-hover:bg-[#004558] rounded-full mb-6 transition-all duration-300 group-hover:scale-110">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          
                          <h3 className="text-lg lg:text-xl font-bold text-[#231f20] group-hover:text-[#005670] mb-4 transition-colors duration-300 leading-tight">
                            {isArabic ? feature.title.ar : feature.title.en}
                          </h3>
                          
                          <p className="text-sm lg:text-base text-gray-600 group-hover:text-gray-700 leading-relaxed mb-6 transition-colors duration-300 flex-grow">
                            {isArabic ? feature.description.ar : feature.description.en}
                          </p>
                        </div>
                        
                        {/* Click indicator */}
                        <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto">
                          <span className="text-[#005670] font-semibold text-sm mr-2">
                            {isArabic ? 'اقرأ المزيد' : 'Learn More'}
                          </span>
                          <ArrowRight className="w-4 h-4 text-[#005670] transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;