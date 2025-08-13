import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Zap, Building, Users, Award } from 'lucide-react';

interface AboutSectionProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isArabic, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const stats = [
    {
      icon: Zap,
      number: '641',
      unit: 'MW',
      label: { en: 'Total Capacity', ar: 'إجمالي القدرة' }
    },
    {
      icon: Building,
      number: '8%',
      unit: '',
      label: { en: 'Jordan\'s Electricity', ar: 'كهرباء الأردن' }
    },
    {
      icon: Users,
      number: '2',
      unit: '',
      label: { en: 'Power Plants', ar: 'محطات الطاقة' }
    },
    {
      icon: Award,
      number: '10+',
      unit: '',
      label: { en: 'Years Operating', ar: 'سنوات التشغيل' }
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-pattern"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Stats Bar */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#005670] rounded-full mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#231f20] mb-1">
                  {stat.number}<span className="text-[#005670]">{stat.unit}</span>
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {isArabic ? stat.label.ar : stat.label.en}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Nibras Jordan */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#005670] bg-opacity-10 text-[#005670] rounded-full text-sm font-semibold mb-4">
                {isArabic ? 'من نحن' : 'WHO WE ARE'}
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#231f20] mb-6 leading-tight">
                {isArabic ? 'حول نبراس الأردن' : 'About Nibras Jordan'}
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {isArabic 
                  ? 'نبراس الأردن هي منتج مستقل رائد للطاقة، تلعب دوراً محورياً في توفير أكثر من 8% من كهرباء الأردن.'
                  : 'Nibras Jordan is a leading independent power producer, playing a pivotal role in supplying over 8% of Jordan\'s electricity.'
                }
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {isArabic
                  ? 'تشمل محفظتنا محطة عمان الشرقية للطاقة (400 ميجاواط) ومحطة بلاد الشام للطاقة (241 ميجاواط)، مما يوفر قدرة أساسية وذروة موثوقة.'
                  : 'Our portfolio includes the Amman East Power Plant (400 MW) and Levant Power Plant (241 MW), delivering reliable baseload and peaking capacity.'
                }
              </p>

              <div className="flex items-start space-x-4 p-4 bg-[#005670] bg-opacity-5 rounded-lg">
                <div className="flex-shrink-0 w-2 h-2 bg-[#005670] rounded-full mt-3"></div>
                <p className="text-gray-700 italic">
                  {isArabic
                    ? '"نحن ملتزمون بتوفير طاقة موثوقة وفعالة تدعم نمو الأردن المستدام"'
                    : '"We are committed to delivering reliable, efficient energy that supports Jordan\'s sustainable growth"'
                  }
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => onNavigate?.('about')}
              className="inline-flex items-center mt-8 bg-[#005670] hover:bg-[#004558] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg group"
            >
              {isArabic ? 'اعرف المزيد' : 'Learn More'}
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Right Column - Our Operations */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#005670] bg-opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative">
                <span className="inline-block px-4 py-2 bg-[#005670] bg-opacity-10 text-[#005670] rounded-full text-sm font-semibold mb-4">
                  {isArabic ? 'عملياتنا' : 'OUR OPERATIONS'}
                </span>
                
                <h3 className="text-3xl font-bold text-[#231f20] mb-6">
                  {isArabic ? 'عملياتنا' : 'Our Operations'}
                </h3>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {isArabic
                      ? 'معاً، تساهم هذه المرافق في أمن الطاقة والنمو الاقتصادي. عملياتنا مدعومة بشراكات دولية والتزام بمعايير بيئية عالية.'
                      : 'Together, these facilities contribute to energy security and economic growth. Our operations are supported by international partnerships and a commitment to high environmental standards.'
                    }
                  </p>

                  {/* Key Features */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#005670] rounded-full"></div>
                      <span className="text-gray-700">
                        {isArabic ? 'شراكات دولية قوية' : 'Strong international partnerships'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#005670] rounded-full"></div>
                      <span className="text-gray-700">
                        {isArabic ? 'معايير بيئية عالية' : 'High environmental standards'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#005670] rounded-full"></div>
                      <span className="text-gray-700">
                        {isArabic ? 'تقنيات متقدمة' : 'Advanced technologies'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => onNavigate?.('business')}
                  className="inline-flex items-center mt-6 text-[#005670] hover:text-[#004558] font-semibold text-lg transition-colors duration-200 group"
                >
                  {isArabic ? 'اعرف المزيد' : 'Learn More'}
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;