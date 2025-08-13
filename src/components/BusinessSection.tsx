import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Zap, Building2 } from 'lucide-react';

interface BusinessSectionProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const BusinessSection: React.FC<BusinessSectionProps> = ({ isArabic, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
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

  const projects = [
    {
      id: 1,
      icon: Building2,
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: { en: 'Amman East Power Plant (IPP1)', ar: 'محطة عمان الشرقية للطاقة' },
      capacity: '400 MW',
      investment: '$300M',
      description: { 
        en: 'A 400 MW combined cycle gas plant—Jordan\'s first Independent Power Producer—commissioned with a USD 300 million investment.',
        ar: 'محطة غاز دورة مركبة بقدرة 400 ميجاواط - أول منتج مستقل للطاقة في الأردن - تم تشغيلها باستثمار 300 مليون دولار أمريكي.'
      },
      features: [
        { en: 'Combined Cycle Technology', ar: 'تقنية الدورة المركبة' },
        { en: 'First IPP in Jordan', ar: 'أول منتج مستقل في الأردن' },
        { en: 'World Bank Standards', ar: 'معايير البنك الدولي' }
      ]
    },
    {
      id: 2,
      icon: Zap,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: { en: 'Levant Power Plant (IPP4)', ar: 'محطة بلاد الشام للطاقة' },
      capacity: '241 MW',
      investment: '$360M',
      description: { 
        en: '241 MW tri-fuel peaking plant offering flexible operations to stabilize the national grid.',
        ar: 'محطة ذروة ثلاثية الوقود بقدرة 241 ميجاواط توفر عمليات مرنة لاستقرار الشبكة الوطنية.'
      },
      features: [
        { en: 'Tri-Fuel Flexibility', ar: 'مرونة الوقود الثلاثي' },
        { en: 'Peaking Operations', ar: 'عمليات الذروة' },
        { en: 'Grid Stabilization', ar: 'استقرار الشبكة' }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#005670] bg-opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#005670] bg-opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center px-6 py-3 bg-[#005670] bg-opacity-10 rounded-full mb-6">
            <Building2 className="w-5 h-5 text-[#005670] mr-2" />
            <span className="text-[#005670] font-semibold text-sm tracking-wide uppercase">
              {isArabic ? 'أعمالنا' : 'Our Business'}
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-[#231f20] mb-8 leading-tight">
            {isArabic ? 'محفظة مشاريعنا' : 'Our Project Portfolio'}
          </h2>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {isArabic
              ? 'استثماراتنا تدفع تطوير البنية التحتية الأساسية للطاقة، مما يجمع بين التكنولوجيا المتقدمة والعمليات المنضبطة.'
              : 'Our investments drive the development of essential energy infrastructure, combining advanced technology with disciplined operations.'
            }
          </p>
        </div>

        {/* Video Showcase Section */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative bg-gradient-to-r from-[#005670] to-[#004558] rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-pattern"></div>
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-0 items-center min-h-[500px]">
              {/* Left Content */}
              <div className="p-8 lg:p-12 text-white">
                <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full mb-6">
                  <span className="text-white font-semibold text-sm tracking-wide uppercase">
                    {isArabic ? 'شاهد مشروع الطاقة الشمسية' : 'Watch Our Solar Project'}
                  </span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                  {isArabic 
                    ? 'مشروع AM للطاقة الشمسية'
                    : 'AM Solar Energy Project'
                  }
                </h3>
                
                <p className="text-lg text-white text-opacity-90 mb-8 leading-relaxed">
                  {isArabic
                    ? 'اكتشف كيف نستفيد من الموارد الشمسية الوفيرة في الأردن لتوليد طاقة نظيفة ومستدامة للمستقبل.'
                    : 'Discover how we harness Jordan\'s abundant solar resources to generate clean, sustainable energy for the future.'
                  }
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-white text-opacity-90">
                      {isArabic ? 'توليد طاقة متجددة ونظيفة' : 'Renewable & Clean Energy Generation'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-white text-opacity-90">
                      {isArabic ? 'تأثير مستدام على البيئة' : 'Sustainable Environmental Impact'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-white text-opacity-90">
                      {isArabic ? 'تقنية الألواح الشمسية المتقدمة' : 'Advanced Solar Panel Technology'}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Right Video */}
              <div className="relative p-8 lg:p-12">
                <div className="relative group cursor-pointer">
                  {/* Video Thumbnail */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop"
                      alt={isArabic ? 'مشروع AM للطاقة الشمسية' : 'AM Solar Project'}
                      className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                      <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                        <div className="w-0 h-0 border-l-[16px] border-l-[#005670] border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    
                    {/* Video Duration Badge */}
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
                      3:45
                    </div>
                  </div>
                  
                  {/* Video Title */}
                  <div className="mt-4 text-center">
                    <h4 className="text-white font-semibold text-lg mb-2">
                      {isArabic ? 'جولة في مشروع الطاقة الشمسية' : 'Solar Project Tour'}
                    </h4>
                    <p className="text-white text-opacity-70 text-sm">
                      {isArabic ? 'شاهد تقنياتنا الشمسية المتقدمة' : 'See Our Advanced Solar Technology'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${activeCard === project.id ? 'ring-4 ring-[#005670] ring-opacity-30' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveCard(project.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={isArabic ? project.title.ar : project.title.en}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#005670] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6 flex space-x-3">
                    <div className="bg-white bg-opacity-95 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-[#005670] font-bold text-sm">{project.capacity}</span>
                    </div>
                    <div className="bg-white bg-opacity-95 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-[#005670] font-bold text-sm">{project.investment}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-[#005670]" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#231f20] mb-4 group-hover:text-[#005670] transition-colors duration-300">
                    {isArabic ? project.title.ar : project.title.en}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {isArabic ? project.description.ar : project.description.en}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-[#005670] rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-gray-700 text-sm font-medium">
                          {isArabic ? feature.ar : feature.en}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <button 
                    onClick={() => onNavigate?.(project.id === 1 ? 'business-aes-jordan-ipp1' : 'business-aes-levant-ipp4')}
                    className="inline-flex items-center text-[#005670] hover:text-white bg-transparent hover:bg-[#005670] border-2 border-[#005670] px-6 py-3 rounded-full font-semibold transition-all duration-300 group-hover:scale-105"
                  >
                    {isArabic ? 'اقرأ المزيد' : 'Learn More'}
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#005670] group-hover:border-opacity-20 transition-all duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-[#005670] to-[#004558] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {isArabic ? 'اكتشف المزيد عن مشاريعنا' : 'Discover More About Our Projects'}
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              {isArabic 
                ? 'تعرف على كيفية مساهمة مشاريعنا في تعزيز أمن الطاقة والنمو الاقتصادي في الأردن'
                : 'Learn how our projects contribute to energy security and economic growth in Jordan'
              }
            </p>
            <button 
              onClick={() => onNavigate?.('business')}
              className="inline-flex items-center bg-white text-[#005670] hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {isArabic ? 'عرض جميع المشاريع' : 'View All Projects'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;