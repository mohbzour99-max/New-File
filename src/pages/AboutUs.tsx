import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Users, Award, Globe, Target, Zap, Building2, Calendar, CheckCircle, ChevronRight } from 'lucide-react';

interface AboutUsProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ isArabic, onNavigate }) => {
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

  const milestones = [
    {
      year: '2007',
      title: { en: 'Company Establishment', ar: 'تأسيس الشركة' },
      description: { en: 'Nibras Jordan was established as Jordan\'s first Independent Power Producer', ar: 'تأسست نبراس الأردن كأول منتج مستقل للطاقة في الأردن' }
    },
    {
      year: '2009',
      title: { en: 'Amman East Power Plant', ar: 'محطة عمان الشرقية للطاقة' },
      description: { en: '400 MW combined cycle power plant commissioned', ar: 'تشغيل محطة طاقة دورة مركبة بقدرة 400 ميجاواط' }
    },
    {
      year: '2015',
      title: { en: 'Levant Power Plant', ar: 'محطة بلاد الشام للطاقة' },
      description: { en: '241 MW tri-fuel peaking plant operational', ar: 'تشغيل محطة ذروة ثلاثية الوقود بقدرة 241 ميجاواط' }
    },
    {
      year: '2024',
      title: { en: 'Continued Excellence', ar: 'التميز المستمر' },
      description: { en: 'Over 8% of Jordan\'s electricity supply with 99.8% reliability', ar: 'أكثر من 8% من إمدادات الكهرباء في الأردن بموثوقية 99.8%' }
    }
  ];

  const leadership = [
    {
      name: 'Ahmed Al-Rashid',
      position: { en: 'Chief Executive Officer', ar: 'الرئيس التنفيذي' },
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: { 
        en: 'Over 20 years of experience in power generation and energy infrastructure development.',
        ar: 'أكثر من 20 عاماً من الخبرة في توليد الطاقة وتطوير البنية التحتية للطاقة.'
      }
    },
    {
      name: 'Sarah Mitchell',
      position: { en: 'Chief Operating Officer', ar: 'مدير العمليات' },
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: { 
        en: 'Expert in power plant operations with extensive experience in international energy markets.',
        ar: 'خبيرة في عمليات محطات الطاقة مع خبرة واسعة في أسواق الطاقة الدولية.'
      }
    },
    {
      name: 'Omar Hassan',
      position: { en: 'Chief Financial Officer', ar: 'المدير المالي' },
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: { 
        en: 'Financial strategist with deep expertise in infrastructure financing and project development.',
        ar: 'استراتيجي مالي مع خبرة عميقة في تمويل البنية التحتية وتطوير المشاريع.'
      }
    }
  ];

  const values = [
    {
      icon: Target,
      title: { en: 'Excellence', ar: 'التميز' },
      description: { en: 'Committed to operational excellence and continuous improvement', ar: 'ملتزمون بالتميز التشغيلي والتحسين المستمر' }
    },
    {
      icon: Users,
      title: { en: 'Integrity', ar: 'النزاهة' },
      description: { en: 'Conducting business with transparency and ethical standards', ar: 'ممارسة الأعمال بشفافية ومعايير أخلاقية' }
    },
    {
      icon: Globe,
      title: { en: 'Sustainability', ar: 'الاستدامة' },
      description: { en: 'Environmental stewardship and sustainable development', ar: 'الإشراف البيئي والتنمية المستدامة' }
    },
    {
      icon: Award,
      title: { en: 'Innovation', ar: 'الابتكار' },
      description: { en: 'Embracing technology and innovative solutions', ar: 'احتضان التكنولوجيا والحلول المبتكرة' }
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
              {isArabic ? 'من نحن' : 'About Us'}
            </span>
          </div>

          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {isArabic ? 'من نحن' : 'About Us'}
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

      {/* AES Jordan Businesses Overview */}
      <section ref={sectionRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-4xl font-bold text-[#231f20] mb-6">
                {isArabic ? 'نظرة عامة على أعمال AES الأردن' : 'AES Jordan Businesses Overview'}
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed">
                <p>
                  {isArabic
                    ? 'شركة AES الأردن هي محطة طاقة بقدرة 400 ميجاواط تعمل بالوقود المزدوج (الغاز الطبيعي والنفط) تقع شرق عمان. كانت المحطة أول منتج مستقل للطاقة (IPP) يبدأ عمليات توليد الطاقة لدعم التنمية الاقتصادية للبلاد. تولد AES الأردن حوالي 8% من كهرباء الأردن وهي واحدة من أكثر محطات الطاقة موثوقية في البلاد. تشمل محفظة AES في الأردن أيضاً محطة طاقة ثلاثية الوقود بقدرة 241 ميجاواط، والتي دخلت في التشغيل التجاري في يوليو 2014. معاً، توفر هذه المشاريع 641 ميجاواط، مما يساهم في استقرار قطاع الطاقة وتعزيز استقلالية الطاقة في البلاد.'
                    : 'AES Jordan PSC is a 400 megawatt (MW) dual fuel natural gas- and oil-fired power plant located east of Amman. The plant was the first Independent Power Producer (IPP) to start power generation operations in order to support the economic development of the country. AES Jordan generates approximately 8% of Jordan\'s electricity and is one of the most reliable power plants in the country. AES\' portfolio in Jordan also includes a 241 MW Tri Fuel power plant, which entered in to commercial operation in July 2014. Together these projects provide 641 MW, contributing to the stabilization of the energy sector and enhancing the energy independence of the country.'
                  }
                </p>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <img
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt={isArabic ? 'محطة الطاقة' : 'Power Plant'}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AES Jordan PSC - Amman East Power Plant */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`lg:order-2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-4xl font-bold text-[#231f20] mb-6">
                {isArabic ? 'شركة AES الأردن - محطة عمان الشرقية للطاقة (IPP1)' : 'AES Jordan PSC- Amman East Power Plant (IPP1)'}
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  {isArabic
                    ? 'محطة عمان الشرقية للطاقة (AEPP) هي محطة طاقة دورة مركبة بقدرة 400 ميجاواط تقع شرق عمان. تم بناء المشروع وهو مملوك ومُشغل من قبل شركة AES الأردن.'
                    : 'The Amman East Power Plant (AEPP) is a 400 MW combined cycle power plant (CCGT) located east of Amman. The project was built and is owned and operated by AES Jordan PSC.'
                  }
                </p>
                <p>
                  {isArabic
                    ? 'باستثمار قدره 300 مليون دولار أمريكي، تمثل محطة عمان الشرقية للطاقة واحدة من أكبر الاستثمارات الأجنبية في قطاع الطاقة في الأردن.'
                    : 'With an investment of 300 million US Dollars, the Amman East power plant represents one of the largest foreign investment in power sector of Jordan.'
                  }
                </p>
                <p>
                  {isArabic
                    ? 'تم دعم تمويل المشروع من قبل المؤسسة الحكومية الأمريكية للاستثمار الخاص في الخارج (OPIC) والبنك الياباني للتعاون الدولي (JBIC) والبنك التجاري سوميتومو ميتسوي المصرفية، بنك المشرق، البنك العربي الأوروبي مع ضمان المخاطر الجزئي للبنك الدولي.'
                    : 'The project financing was supported by the US governmental institution Overseas Private Investment Corporation (OPIC) and the Japan Bank for International Cooperation (JBIC) and commercial bank Sumitomo Mitsui Banking Corporation, Mashreq Bank, Europe Arab Bank with world bank partial risk guarantee.'
                  }
                </p>
              </div>
            </div>
            
            <div className={`lg:order-1 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <img
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt={isArabic ? 'محطة عمان الشرقية للطاقة' : 'Amman East Power Plant'}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AES Levant Holdings BV - Levant Power Plant */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-4xl font-bold text-[#231f20] mb-6">
                {isArabic ? 'شركة AES بلاد الشام - محطة بلاد الشام للطاقة (IPP4)' : 'AES Levant Holdings BV – Levant Power Plant (IPP4)'}
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  {isArabic
                    ? 'تقع محطة AES بلاد الشام للطاقة شرق عمان، في نفس موقع محطة عمان الشرقية للطاقة الحالية. تم بناء المشروع وهو مملوك ومُشغل من قبل AES بلاد الشام. المشروع عبارة عن تقنية محرك ثلاثي الوقود، مصمم في المقام الأول لتشغيل الذروة، مما يسمح بمجموعة عالية من المرونة من حيث استخدام الوقود والإرسال.'
                    : 'The AES Levant power plant is located east of Amman, on the same site of the existing Amman East power plant. The project was built and is owned and operated by AES Levant. The project is a tri-fuel engine technology, designed primarily for peaking operation, allowing a high range of flexibility in terms of fuel usage and dispatch.'
                  }
                </p>
                <p>
                  {isArabic
                    ? 'بلغت التكلفة الإجمالية للمشروع 360 مليون دولار أمريكي. تم دعم تمويل المشروع من قبل المؤسسة الحكومية الأمريكية للاستثمار الخاص في الخارج (OPIC) والبنك الأوروبي للإنشاء والتعمير (EBRD).'
                    : 'The total project cost was 360 million US Dollars. The project financing was supported by the US governmental institution Overseas Private Investment Corporation (OPIC) and the European Bank for Reconstruction and Development (EBRD).'
                  }
                </p>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <img
                src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt={isArabic ? 'محطة بلاد الشام للطاقة' : 'Levant Power Plant'}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#231f20] mb-6">
              {isArabic ? 'رحلتنا عبر الزمن' : 'Our Journey Through Time'}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {isArabic
                ? 'معالم مهمة في تطوير قطاع الطاقة في الأردن'
                : 'Key milestones in Jordan\'s energy sector development'
              }
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#005670] opacity-20"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#005670] rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-3xl font-bold text-[#005670] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-[#231f20] mb-3">
                        {isArabic ? milestone.title.ar : milestone.title.en}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {isArabic ? milestone.description.ar : milestone.description.en}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#231f20] mb-6">
              {isArabic ? 'فريق القيادة' : 'Leadership Team'}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {isArabic
                ? 'قادة ذوو خبرة يقودون نبراس الأردن نحو مستقبل مستدام'
                : 'Experienced leaders driving Nibras Jordan towards a sustainable future'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <React.Fragment key={index}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#231f20] mb-2">{leader.name}</h3>
                    <p className="text-[#005670] font-semibold mb-4">
                      {isArabic ? leader.position.ar : leader.position.en}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {isArabic ? leader.bio.ar : leader.bio.en}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => onNavigate?.('business')}
                className="inline-flex items-center bg-[#005670] hover:bg-[#004558] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                {isArabic ? 'أعمالنا' : 'Our Business'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button 
                onClick={() => onNavigate?.('careers')}
                className="inline-flex items-center border-2 border-[#005670] text-[#005670] hover:bg-[#005670] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                {isArabic ? 'الوظائف' : 'Careers'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#231f20] mb-6">
              {isArabic ? 'قيمنا' : 'Our Values'}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {isArabic
                ? 'المبادئ التي توجه عملنا وتشكل ثقافتنا المؤسسية'
                : 'The principles that guide our work and shape our corporate culture'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#005670] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#231f20] mb-4">
                    {isArabic ? value.title.ar : value.title.en}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isArabic ? value.description.ar : value.description.en}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;