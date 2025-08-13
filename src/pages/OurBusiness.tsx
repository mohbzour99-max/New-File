import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Zap, Building2, BarChart3, Globe, Users, Award, TrendingUp, CheckCircle, ChevronRight } from 'lucide-react';

interface OurBusinessProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const OurBusiness: React.FC<OurBusinessProps> = ({ isArabic, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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

  const businessSegments = [
    {
      id: 'power-generation',
      icon: Zap,
      title: { en: 'Power Generation', ar: 'توليد الطاقة' },
      description: { 
        en: 'Reliable baseload and peaking power generation with advanced technology',
        ar: 'توليد طاقة أساسية وذروة موثوقة بتقنية متقدمة'
      },
      capacity: '641 MW',
      plants: 2,
      reliability: '99.8%'
    },
    {
      id: 'asset-management',
      icon: Building2,
      title: { en: 'Asset Management', ar: 'إدارة الأصول' },
      description: { 
        en: 'Comprehensive asset management and optimization services',
        ar: 'خدمات إدارة وتحسين الأصول الشاملة'
      },
      capacity: '$660M',
      plants: 'Assets',
      reliability: '100%'
    },
    {
      id: 'operations-maintenance',
      icon: BarChart3,
      title: { en: 'Operations & Maintenance', ar: 'التشغيل والصيانة' },
      description: { 
        en: 'World-class operations and maintenance services',
        ar: 'خدمات تشغيل وصيانة عالمية المستوى'
      },
      capacity: '24/7',
      plants: 'Monitoring',
      reliability: '365'
    }
  ];

  const projects = [
    {
      name: { en: 'Amman East Power Plant (IPP1)', ar: 'محطة عمان الشرقية للطاقة' },
      capacity: '400 MW',
      technology: { en: 'Combined Cycle Gas Turbine', ar: 'توربين غاز دورة مركبة' },
      investment: '$300M',
      commissioned: '2009',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        { en: 'First IPP in Jordan', ar: 'أول منتج مستقل في الأردن' },
        { en: 'World Bank Standards', ar: 'معايير البنك الدولي' },
        { en: 'High Efficiency Technology', ar: 'تقنية عالية الكفاءة' }
      ]
    },
    {
      name: { en: 'AM Solar', ar: 'AM الطاقة الشمسية' },
      capacity: '50 MW',
      technology: { en: 'Solar Photovoltaic', ar: 'الطاقة الشمسية الكهروضوئية' },
      investment: '$80M',
      commissioned: '2022',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        { en: 'Clean Renewable Energy', ar: 'طاقة متجددة نظيفة' },
        { en: 'Zero Emissions Operation', ar: 'تشغيل بدون انبعاثات' },
        { en: 'Advanced Solar Technology', ar: 'تقنية شمسية متقدمة' }
      ]
    },
    {
      name: { en: 'Levant Power Plant (IPP4)', ar: 'محطة بلاد الشام للطاقة' },
      capacity: '241 MW',
      technology: { en: 'Tri-Fuel Peaking Plant', ar: 'محطة ذروة ثلاثية الوقود' },
      investment: '$360M',
      commissioned: '2015',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        { en: 'Flexible Fuel Options', ar: 'خيارات وقود مرنة' },
        { en: 'Grid Stabilization', ar: 'استقرار الشبكة' },
        { en: 'Fast Response Time', ar: 'وقت استجابة سريع' }
      ]
    }
  ];

  const partnerships = [
    {
      name: 'OPIC',
      type: { en: 'Development Finance', ar: 'التمويل التنموي' },
      description: { en: 'US Development Finance Corporation', ar: 'مؤسسة التمويل التنموي الأمريكية' }
    },
    {
      name: 'JBIC',
      type: { en: 'Export Finance', ar: 'تمويل الصادرات' },
      description: { en: 'Japan Bank for International Cooperation', ar: 'البنك الياباني للتعاون الدولي' }
    },
    {
      name: 'EBRD',
      type: { en: 'Development Bank', ar: 'بنك التنمية' },
      description: { en: 'European Bank for Reconstruction and Development', ar: 'البنك الأوروبي للإنشاء والتعمير' }
    },
    {
      name: 'Commercial Banks',
      type: { en: 'Commercial Finance', ar: 'التمويل التجاري' },
      description: { en: 'Leading international commercial banks', ar: 'البنوك التجارية الدولية الرائدة' }
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
              className="hover:text-white transition-colors cursor-pointer flex items-center"
            >
              {isArabic ? 'الرئيسية' : 'Home'}
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">
              {isArabic ? 'أعمالنا' : 'Our Business'}
            </span>
          </div>

          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {isArabic ? 'أعمالنا' : 'Our Business'}
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              {isArabic 
                ? 'نحن ملتزمون بريادة طاقة المستقبل على نطاق عالمي'
                : 'We are committed to pioneering the energy of the future on a global scale'
              }
            </p>
          </div>
        </div>
      </section>

      {/* AES Corporation Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt={isArabic ? 'شركة AES' : 'AES Corporation'}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
            
            {/* Right Column - Content */}
            <div>
              <div className="inline-flex items-center px-6 py-3 bg-[#005670] bg-opacity-10 rounded-full mb-6">
                <Building2 className="w-5 h-5 text-[#005670] mr-2" />
                <span className="text-[#005670] font-semibold text-sm tracking-wide uppercase">
                  {isArabic ? 'شركة AES' : 'AES Corporation'}
                </span>
              </div>
              
              <h2 className="text-4xl font-bold text-[#231f20] mb-8 leading-tight">
                {isArabic ? 'AES في الأردن' : 'AES in Jordan'}
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {isArabic
                    ? 'AES الأردن جزء من شركة AES، وهي شركة طاقة عالمية من فورتشن 200 تعمل في 17 دولة. مع فريق من 21,000 شخص، تقدم AES طاقة موثوقة وبأسعار معقولة ومستدامة من خلال مزيج متنوع من التقنيات والوقود، بما في ذلك الطاقة المتجددة. تدير الشركة أصولاً بقيمة 37 مليار دولار وملتزمة بتلبية احتياجات الطاقة المتطورة في العالم مع دعم النمو الاقتصادي.'
                    : 'AES Jordan is part of AES Corporation, a Fortune 200 global energy company operating in 17 countries. With a team of 21,000 people, AES delivers reliable, affordable, and sustainable energy through a diverse mix of technologies and fuels, including renewables. The company manages $37 billion in assets and is committed to meeting the world\'s evolving energy needs while supporting economic growth.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Segments */}
      <section ref={sectionRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#231f20] mb-6">
              {isArabic ? 'قطاعات أعمالنا' : 'Our Business Segments'}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {isArabic
                ? 'نقدم خدمات متكاملة عبر سلسلة قيمة الطاقة'
                : 'We provide integrated services across the energy value chain'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {businessSegments.map((segment, index) => {
              const IconComponent = segment.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#005670] rounded-full mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#231f20] mb-4">
                    {isArabic ? segment.title.ar : segment.title.en}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {isArabic ? segment.description.ar : segment.description.en}
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#005670]">{segment.capacity}</div>
                      <div className="text-sm text-gray-500">
                        {segment.id === 'power-generation' ? (isArabic ? 'القدرة' : 'Capacity') :
                         segment.id === 'asset-management' ? (isArabic ? 'الأصول' : 'Assets') :
                         (isArabic ? 'المراقبة' : 'Monitoring')}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#005670]">{segment.plants}</div>
                      <div className="text-sm text-gray-500">
                        {segment.id === 'power-generation' ? (isArabic ? 'المحطات' : 'Plants') :
                         segment.id === 'asset-management' ? (isArabic ? 'الأصول' : 'Assets') :
                         (isArabic ? 'المراقبة' : 'Monitoring')}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#005670]">{segment.reliability}</div>
                      <div className="text-sm text-gray-500">
                        {segment.id === 'power-generation' ? (isArabic ? 'الموثوقية' : 'Reliability') :
                         segment.id === 'asset-management' ? (isArabic ? 'الامتثال' : 'Compliance') :
                         (isArabic ? 'أيام' : 'Days')}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#231f20] mb-6">
              {isArabic ? 'محفظة المشاريع' : 'Project Portfolio'}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {isArabic
                ? 'استثمارات استراتيجية في البنية التحتية للطاقة'
                : 'Strategic investments in energy infrastructure'
              }
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img
                    src={project.image}
                    alt={isArabic ? project.name.ar : project.name.en}
                    className="w-full h-96 object-cover rounded-2xl shadow-xl"
                  />
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gray-50 p-8 rounded-2xl">
                    <button
                      onClick={() => {
                        const pageMap: { [key: string]: string } = {
                          'Amman East Power Plant (IPP1)': 'business-aes-jordan-ipp1',
                          'Levant Power Plant (IPP4)': 'business-aes-levant-ipp4',
                          'AM Solar': 'business-am-solar'
                        };
                        const pageName = pageMap[project.name.en] || 'business';
                        onNavigate?.(pageName);
                      }}
                      className="text-left w-full group"
                    >
                      <h3 className="text-3xl font-bold text-[#231f20] mb-4 group-hover:text-[#005670] transition-colors duration-300 cursor-pointer">
                        {isArabic ? project.name.ar : project.name.en}
                      </h3>
                    </button>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{isArabic ? 'القدرة' : 'Capacity'}</div>
                        <div className="text-xl font-bold text-[#005670]">{project.capacity}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{isArabic ? 'الاستثمار' : 'Investment'}</div>
                        <div className="text-xl font-bold text-[#005670]">{project.investment}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{isArabic ? 'التقنية' : 'Technology'}</div>
                        <div className="text-lg font-semibold text-gray-700">
                          {isArabic ? project.technology.ar : project.technology.en}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{isArabic ? 'التشغيل' : 'Commissioned'}</div>
                        <div className="text-lg font-semibold text-gray-700">{project.commissioned}</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-[#005670] mr-3" />
                          <span className="text-gray-700">
                            {isArabic ? feature.ar : feature.en}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#231f20] mb-6">
              {isArabic ? 'الشراكات الاستراتيجية' : 'Strategic Partnerships'}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {isArabic
                ? 'شراكات قوية مع مؤسسات مالية دولية رائدة'
                : 'Strong partnerships with leading international financial institutions'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#005670] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#231f20] mb-2">{partner.name}</h3>
                <p className="text-[#005670] font-semibold mb-3">
                  {isArabic ? partner.type.ar : partner.type.en}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {isArabic ? partner.description.ar : partner.description.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-[#005670] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              {isArabic ? 'مؤشرات الأداء' : 'Performance Metrics'}
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              {isArabic
                ? 'أرقام تعكس التزامنا بالتميز والموثوقية'
                : 'Numbers that reflect our commitment to excellence and reliability'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">641</div>
              <div className="text-xl opacity-90">MW</div>
              <div className="text-sm opacity-75 mt-2">
                {isArabic ? 'إجمالي القدرة' : 'Total Capacity'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">8%+</div>
              <div className="text-xl opacity-90">{isArabic ? 'من كهرباء الأردن' : 'of Jordan\'s Electricity'}</div>
              <div className="text-sm opacity-75 mt-2">
                {isArabic ? 'حصة السوق' : 'Market Share'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.8%</div>
              <div className="text-xl opacity-90">{isArabic ? 'موثوقية' : 'Reliability'}</div>
              <div className="text-sm opacity-75 mt-2">
                {isArabic ? 'معدل التشغيل' : 'Availability Rate'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$660M</div>
              <div className="text-xl opacity-90">{isArabic ? 'استثمار' : 'Investment'}</div>
              <div className="text-sm opacity-75 mt-2">
                {isArabic ? 'إجمالي الاستثمار' : 'Total Investment'}
              </div>
            </div>
          </div>

          {/* Cross-page Navigation */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#231f20] mb-6">
                {isArabic ? 'اكتشف المزيد' : 'Discover More'}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => onNavigate?.('about')}
                  className="inline-flex items-center bg-[#005670] hover:bg-[#004558] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  {isArabic ? 'من نحن' : 'About Us'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button 
                  onClick={() => onNavigate?.('careers')}
                  className="inline-flex items-center border-2 border-[#005670] text-[#005670] hover:bg-[#005670] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  {isArabic ? 'الوظائف' : 'Join Our Team'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button 
                  onClick={() => onNavigate?.('news')}
                  className="inline-flex items-center border-2 border-[#005670] text-[#005670] hover:bg-[#005670] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  {isArabic ? 'الأخبار' : 'Latest News'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurBusiness;