import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Building2, Zap, BarChart3, Phone, Globe, Cog, CheckCircle, ExternalLink, Target, Eye, Activity, Clipboard, Wrench, TrendingUp, Shield } from 'lucide-react';

interface AESJordanIPP1Props {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const AESJordanIPP1: React.FC<AESJordanIPP1Props> = ({ isArabic, onNavigate }) => {
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

  const plantPrinciples = [
    {
      icon: Building2,
      title: { en: 'First IPP in Jordan', ar: 'أول منتج مستقل في الأردن' },
      description: { en: 'Jordan\'s pioneering independent power producer', ar: 'منتج الطاقة المستقل الرائد في الأردن' }
    },
    {
      icon: Zap,
      title: { en: '400 MW Capacity', ar: 'قدرة 400 ميجاواط' },
      description: { en: 'Combined cycle gas turbine technology', ar: 'تقنية توربين الغاز دورة مركبة' }
    },
    {
      icon: BarChart3,
      title: { en: 'High Efficiency', ar: 'كفاءة عالية' },
      description: { en: 'Advanced technology for optimal performance', ar: 'تقنية متقدمة للأداء الأمثل' }
    },
    {
      icon: Shield,
      title: { en: 'World Bank Standards', ar: 'معايير البنك الدولي' },
      description: { en: 'Compliance with international standards', ar: 'الامتثال للمعايير الدولية' }
    }
  ];

  const technicalSpecs = [
    { en: 'Plant Type: Combined Cycle Gas Turbine (CCGT)', ar: 'نوع المحطة: توربين غاز دورة مركبة' },
    { en: 'Installed Capacity: 400 MW', ar: 'القدرة المركبة: 400 ميجاواط' },
    { en: 'Technology: General Electric Frame 9FA Gas Turbines', ar: 'التقنية: توربينات غاز جنرال إلكتريك Frame 9FA' },
    { en: 'Fuel Type: Natural Gas', ar: 'نوع الوقود: الغاز الطبيعي' },
    { en: 'Commercial Operation Date: 2009', ar: 'تاريخ التشغيل التجاري: 2009' },
    { en: 'Plant Efficiency: >55%', ar: 'كفاءة المحطة: >55%' },
    { en: 'Annual Generation: ~2,800 GWh', ar: 'التوليد السنوي: ~2,800 جيجاواط ساعة' },
    { en: 'Availability Factor: >95%', ar: 'معامل التوفر: >95%' },
    { en: 'Environmental Compliance: World Bank Standards', ar: 'الامتثال البيئي: معايير البنك الدولي' },
    { en: 'Water Source: Treated Wastewater', ar: 'مصدر المياه: مياه الصرف المعالجة' }
  ];

  const projectFinancing = [
    { en: 'Total Project Cost: $300 Million', ar: 'إجمالي تكلفة المشروع: 300 مليون دولار' },
    { en: 'OPIC (US Development Finance Corporation)', ar: 'مؤسسة التمويل التنموي الأمريكية' },
    { en: 'JBIC (Japan Bank for International Cooperation)', ar: 'البنك الياباني للتعاون الدولي' },
    { en: 'Commercial Banks Consortium', ar: 'اتحاد البنوك التجارية' },
    { en: 'Equity Financing from AES Corporation', ar: 'التمويل بالأسهم من شركة AES' }
  ];

  const operationalHighlights = [
    { en: 'Over 15 years of reliable operation', ar: 'أكثر من 15 عاماً من التشغيل الموثوق' },
    { en: 'Consistent power supply to Jordan\'s national grid', ar: 'إمداد طاقة ثابت للشبكة الوطنية الأردنية' },
    { en: 'Excellent safety record with zero major incidents', ar: 'سجل سلامة ممتاز بدون حوادث كبرى' },
    { en: 'Environmental compliance maintained throughout operation', ar: 'الحفاظ على الامتثال البيئي طوال التشغيل' }
  ];

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
              onClick={() => onNavigate?.('business')}
              className="text-white text-opacity-60 hover:text-white transition-colors duration-200"
            >
              {isArabic ? 'أعمالنا' : 'Our Business'}
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">
              {isArabic ? 'شركة AES الأردن (IPP1)' : 'AES Jordan PSC (IPP1)'}
            </span>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isArabic ? 'شركة AES الأردن (IPP1)' : 'AES Jordan PSC (IPP1)'}
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
              {isArabic 
                ? 'محطة عمان الشرقية للطاقة - أول منتج مستقل للطاقة في الأردن'
                : 'Amman East Power Plant - Jordan\'s First Independent Power Producer'
              }
            </p>
          </div>
        </div>
      </section>


      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#231f20] mb-6 flex items-center">
                  <Building2 className="w-8 h-8 text-[#005670] mr-3" />
                  {isArabic ? 'نظرة عامة على المشروع' : 'Project Overview'}
                </h2>
                
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    {isArabic
                      ? 'محطة عمان الشرقية للطاقة هي أول منتج مستقل للطاقة في الأردن، وتقع شرق عمان على نفس موقع محطة عمان الشرقية. تم بناء المشروع وهو مملوك ومُشغل من قبل AES الأردن.'
                      : 'The Amman East power plant is Jordan\'s first Independent Power Producer, located east of Amman on the same site as the Amman East power plant. The project was built and is owned and operated by AES Jordan.'
                    }
                  </p>
                  
                  <p>
                    {isArabic
                      ? 'المشروع عبارة عن تقنية توربين غاز دورة مركبة، مصممة في المقام الأول لتشغيل الحمل الأساسي والذي سيسمح بمجموعة عالية من المرونة من حيث استخدام الوقود والإرسال.'
                      : 'The project is a combined cycle gas turbine technology, designed primarily for base load operation that will allow for a high range of flexibility in terms of fuel usage and dispatch.'
                    }
                  </p>
                  
                  <p>
                    {isArabic
                      ? 'بلغت التكلفة الإجمالية للمشروع 300 مليون دولار أمريكي. تم دعم تمويل المشروع من قبل المؤسسة الحكومية الأمريكية للاستثمار الخاص في الخارج (OPIC) والبنك الياباني للتعاون الدولي (JBIC).'
                      : 'The total project cost was 300 million US Dollars. The project financing was supported by the US governmental institution Overseas Private Investment Corporation (OPIC) and the Japan Bank for International Cooperation (JBIC).'
                    }
                  </p>
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
              {isArabic ? 'اكتشف المزيد عن أعمالنا' : 'Discover More About Our Business'}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              {isArabic
                ? 'تعرف على محفظة مشاريعنا الأخرى ومساهمتنا في قطاع الطاقة الأردني'
                : 'Learn about our other project portfolio and contribution to Jordan\'s energy sector'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => onNavigate?.('business-aes-levant-ipp4')}
                className="inline-flex items-center bg-white text-[#005670] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isArabic ? 'محطة بلاد الشام (IPP4)' : 'Levant Power Plant (IPP4)'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button 
                onClick={() => onNavigate?.('business-am-solar')}
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-[#005670] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {isArabic ? 'AM الطاقة الشمسية' : 'AM Solar'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AESJordanIPP1;