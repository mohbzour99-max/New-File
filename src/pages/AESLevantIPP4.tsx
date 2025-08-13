import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Building2, Zap, BarChart3, Phone, Globe, Cog, CheckCircle, ExternalLink, Target, Eye, Activity, Clipboard, Wrench, TrendingUp, Shield, Fuel } from 'lucide-react';

interface AESLevantIPP4Props {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const AESLevantIPP4: React.FC<AESLevantIPP4Props> = ({ isArabic, onNavigate }) => {
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
      icon: Fuel,
      title: { en: 'Tri-Fuel Technology', ar: 'تقنية الوقود الثلاثي' },
      description: { en: 'Flexible fuel options for optimal operation', ar: 'خيارات وقود مرنة للتشغيل الأمثل' }
    },
    {
      icon: Zap,
      title: { en: '241 MW Capacity', ar: 'قدرة 241 ميجاواط' },
      description: { en: 'Peaking power plant for grid stability', ar: 'محطة طاقة ذروة لاستقرار الشبكة' }
    },
    {
      icon: BarChart3,
      title: { en: 'Fast Response', ar: 'استجابة سريعة' },
      description: { en: 'Quick start-up for peak demand periods', ar: 'بدء تشغيل سريع لفترات الذروة' }
    },
    {
      icon: Shield,
      title: { en: 'Grid Stabilization', ar: 'استقرار الشبكة' },
      description: { en: 'Supporting Jordan\'s electrical grid reliability', ar: 'دعم موثوقية الشبكة الكهربائية الأردنية' }
    }
  ];

  const technicalSpecs = [
    { en: 'Plant Type: Tri-Fuel Peaking Power Plant', ar: 'نوع المحطة: محطة طاقة ذروة ثلاثية الوقود' },
    { en: 'Installed Capacity: 241 MW', ar: 'القدرة المركبة: 241 ميجاواط' },
    { en: 'Technology: General Electric LM6000 Gas Turbines', ar: 'التقنية: توربينات غاز جنرال إلكتريك LM6000' },
    { en: 'Fuel Types: Natural Gas, Gas Oil, Heavy Fuel Oil', ar: 'أنواع الوقود: الغاز الطبيعي، زيت الغاز، زيت الوقود الثقيل' },
    { en: 'Commercial Operation Date: 2015', ar: 'تاريخ التشغيل التجاري: 2015' },
    { en: 'Start-up Time: <10 minutes', ar: 'وقت البدء: <10 دقائق' },
    { en: 'Number of Units: 10 x 24.1 MW', ar: 'عدد الوحدات: 10 × 24.1 ميجاواط' },
    { en: 'Plant Efficiency: >40%', ar: 'كفاءة المحطة: >40%' },
    { en: 'Availability Factor: >95%', ar: 'معامل التوفر: >95%' },
    { en: 'Environmental Compliance: OPIC/EBRD Standards', ar: 'الامتثال البيئي: معايير OPIC/EBRD' }
  ];

  const projectFinancing = [
    { en: 'Total Project Cost: $360 Million', ar: 'إجمالي تكلفة المشروع: 360 مليون دولار' },
    { en: 'OPIC (US Development Finance Corporation)', ar: 'مؤسسة التمويل التنموي الأمريكية' },
    { en: 'EBRD (European Bank for Reconstruction and Development)', ar: 'البنك الأوروبي للإنشاء والتعمير' },
    { en: 'Commercial Banks Financing', ar: 'تمويل البنوك التجارية' },
    { en: 'Equity from AES Corporation and Partners', ar: 'أسهم من شركة AES والشركاء' }
  ];

  const operationalHighlights = [
    { en: 'Strategic location east of Amman', ar: 'موقع استراتيجي شرق عمان' },
    { en: 'Flexible dispatch capability for peak demand', ar: 'قدرة إرسال مرنة لطلب الذروة' },
    { en: 'Tri-fuel flexibility for fuel security', ar: 'مرونة الوقود الثلاثي لأمن الوقود' },
    { en: 'Compliance with international environmental standards', ar: 'الامتثال للمعايير البيئية الدولية' }
  ];

  const keyFeatures = [
    { en: 'Rapid start-up capability for grid support', ar: 'قدرة بدء تشغيل سريع لدعم الشبكة' },
    { en: 'Multiple fuel options for operational flexibility', ar: 'خيارات وقود متعددة للمرونة التشغيلية' },
    { en: 'Advanced control systems for optimal performance', ar: 'أنظمة تحكم متقدمة للأداء الأمثل' },
    { en: 'Environmental monitoring and compliance systems', ar: 'أنظمة المراقبة والامتثال البيئي' }
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
              {isArabic ? 'شركة AES بلاد الشام (IPP4)' : 'AES Levant Holdings BV (IPP4)'}
            </span>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isArabic ? 'شركة AES بلاد الشام (IPP4)' : 'AES Levant Holdings BV (IPP4)'}
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
              {isArabic 
                ? 'محطة بلاد الشام للطاقة - محطة طاقة ذروة ثلاثية الوقود'
                : 'Levant Power Plant - Tri-Fuel Peaking Power Plant'
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
                      ? 'تقع محطة AES بلاد الشام للطاقة شرق عمان، على نفس موقع محطة عمان الشرقية للطاقة. تم بناء المشروع وهو مملوك ومُشغل من قبل AES بلاد الشام. المشروع عبارة عن تقنية محرك ثلاثي الوقود، مصمم في المقام الأول لتشغيل الذروة والذي سيسمح بمجموعة عالية من المرونة من حيث استخدام الوقود والإرسال.'
                      : 'The AES Levant power plant is located east from Amman, on the same site of the Amman East power plant. The project was built and is owned and operated by AES Levant. The project is a tri-fuel engine technology, designed primarily for peaking operation that will allow for a high range of flexibility in terms of fuel usage and dispatch.'
                    }
                  </p>
                  
                  <p>
                    {isArabic
                      ? 'بلغت التكلفة الإجمالية للمشروع 360 مليون دولار أمريكي. تم دعم تمويل المشروع من قبل المؤسسة الحكومية الأمريكية للاستثمار الخاص في الخارج (OPIC) والبنك الأوروبي للإنشاء والتعمير (EBRD).'
                      : 'The total project cost was 360 million US Dollars. The project financing was supported by the US governmental institution Overseas Private Investment Corporation (OPIC) and the European Bank for Reconstruction and Development (EBRD).'
                    }
                  </p>
                  
                  <p>
                    {isArabic
                      ? 'تلتزم AES الأردن بالقيم المشتركة للسعي للتميز، ووضع السلامة أولاً، والعمل بنزاهة، وتكريم الالتزامات. إن وضع هذه القيم موضع التنفيذ له تأثير مفيد ثلاثي الأبعاد - التنمية الاجتماعية من خلال برنامج المسؤولية الاجتماعية للشركات، وبيئة أفضل من خلال الامتثال لأكثر المعايير البيئية صرامة، والنمو الاقتصادي المستدام من خلال خلق فرص العمل داخل المجتمع المحلي.'
                      : 'AES Jordan adheres to shared values of Striving for Excellence, Putting Safety First, Acting with Integrity, and Honoring Commitments. Putting these values into action has its three-fold beneficial impact – social development through a corporate social responsibility program, better environment through a thorough compliance with most stringent environmental standards, and sustainable economic growth through creation of jobs within the local community.'
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
                onClick={() => onNavigate?.('business-aes-jordan-ipp1')}
                className="inline-flex items-center bg-white text-[#005670] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isArabic ? 'محطة عمان الشرقية (IPP1)' : 'Amman East Power Plant (IPP1)'}
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

export default AESLevantIPP4;