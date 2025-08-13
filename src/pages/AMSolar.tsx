import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Sun, Zap, BarChart3, Phone, Globe, Cog, CheckCircle, ExternalLink, Target, Eye, Activity, Clipboard, Wrench, TrendingUp, Shield, Leaf } from 'lucide-react';

interface AMSolarProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const AMSolar: React.FC<AMSolarProps> = ({ isArabic, onNavigate }) => {
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

  const solarPrinciples = [
    {
      icon: Sun,
      title: { en: 'Solar Energy', ar: 'الطاقة الشمسية' },
      description: { en: 'Clean, renewable energy from solar photovoltaic technology', ar: 'طاقة نظيفة ومتجددة من تقنية الخلايا الشمسية' }
    },
    {
      icon: Leaf,
      title: { en: 'Environmental Benefits', ar: 'الفوائد البيئية' },
      description: { en: 'Zero emissions and minimal environmental impact', ar: 'انبعاثات صفرية وتأثير بيئي ضئيل' }
    },
    {
      icon: BarChart3,
      title: { en: 'Grid Integration', ar: 'تكامل الشبكة' },
      description: { en: 'Seamless integration with Jordan\'s electrical grid', ar: 'تكامل سلس مع الشبكة الكهربائية الأردنية' }
    },
    {
      icon: Shield,
      title: { en: 'Energy Security', ar: 'أمن الطاقة' },
      description: { en: 'Contributing to Jordan\'s energy independence', ar: 'المساهمة في استقلالية الطاقة الأردنية' }
    }
  ];

  const projectSpecs = [
    { en: 'Technology: Solar Photovoltaic (PV)', ar: 'التقنية: الخلايا الشمسية الكهروضوئية' },
    { en: 'Project Type: Utility-Scale Solar Farm', ar: 'نوع المشروع: مزرعة شمسية على نطاق المرافق' },
    { en: 'Clean Energy Generation', ar: 'توليد طاقة نظيفة' },
    { en: 'Advanced Solar Panel Technology', ar: 'تقنية ألواح شمسية متقدمة' },
    { en: 'Grid-Connected System', ar: 'نظام متصل بالشبكة' },
    { en: 'Remote Monitoring Capabilities', ar: 'قدرات المراقبة عن بُعد' },
    { en: 'Minimal Water Usage', ar: 'استخدام ضئيل للمياه' },
    { en: 'Low Maintenance Requirements', ar: 'متطلبات صيانة منخفضة' },
    { en: 'Long-Term Performance Warranty', ar: 'ضمان أداء طويل المدى' },
    { en: 'Environmental Impact Assessment Completed', ar: 'تم إكمال تقييم التأثير البيئي' }
  ];

  const sustainabilityBenefits = [
    { en: 'Zero greenhouse gas emissions during operation', ar: 'انبعاثات غازات دفيئة صفرية أثناء التشغيل' },
    { en: 'Reduced dependence on fossil fuel imports', ar: 'تقليل الاعتماد على واردات الوقود الأحفوري' },
    { en: 'Contribution to Jordan\'s renewable energy targets', ar: 'المساهمة في أهداف الطاقة المتجددة الأردنية' },
    { en: 'Job creation in the renewable energy sector', ar: 'خلق فرص عمل في قطاع الطاقة المتجددة' },
    { en: 'Technology transfer and knowledge sharing', ar: 'نقل التكنولوجيا وتبادل المعرفة' }
  ];

  const technicalFeatures = [
    { en: 'High-efficiency solar panels with advanced tracking systems', ar: 'ألواح شمسية عالية الكفاءة مع أنظمة تتبع متقدمة' },
    { en: 'Smart inverters for optimal power conversion', ar: 'محولات ذكية لتحويل الطاقة الأمثل' },
    { en: 'Real-time monitoring and performance optimization', ar: 'مراقبة في الوقت الفعلي وتحسين الأداء' },
    { en: 'Weather-resistant design for Jordan\'s climate', ar: 'تصميم مقاوم للطقس لمناخ الأردن' }
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
              {isArabic ? 'AM الطاقة الشمسية' : 'AM Solar'}
            </span>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isArabic ? 'AM الطاقة الشمسية' : 'AM Solar'}
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
              {isArabic 
                ? 'مشروع الطاقة الشمسية - طاقة نظيفة ومتجددة للمستقبل'
                : 'Solar Energy Project - Clean and Renewable Energy for the Future'
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
                  <Sun className="w-8 h-8 text-[#005670] mr-3" />
                  {isArabic ? 'نظرة عامة على المشروع' : 'Project Overview'}
                </h2>
                
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    {isArabic
                      ? 'يمثل مشروع AM الطاقة الشمسية خطوة مهمة في رحلة AES الأردن نحو تنويع محفظة الطاقة والمساهمة في أهداف الطاقة المتجددة في الأردن. يستفيد هذا المشروع من الموارد الشمسية الوفيرة في الأردن لتوليد طاقة نظيفة ومستدامة.'
                      : 'The AM Solar project represents an important step in AES Jordan\'s journey towards diversifying our energy portfolio and contributing to Jordan\'s renewable energy goals. This project leverages Jordan\'s abundant solar resources to generate clean and sustainable energy.'
                    }
                  </p>
                  
                  <p>
                    {isArabic
                      ? 'يستخدم المشروع أحدث تقنيات الطاقة الشمسية الكهروضوئية لتحويل ضوء الشمس إلى كهرباء، مما يساهم في تقليل الاعتماد على الوقود الأحفوري ودعم أهداف الاستدامة البيئية في الأردن.'
                      : 'The project utilizes state-of-the-art solar photovoltaic technology to convert sunlight into electricity, contributing to reducing dependence on fossil fuels and supporting Jordan\'s environmental sustainability goals.'
                    }
                  </p>
                  
                  <p>
                    {isArabic
                      ? 'كجزء من التزام AES الأردن بالابتكار والاستدامة، يمثل مشروع AM الطاقة الشمسية استثماراً في مستقبل الطاقة النظيفة في الأردن، مما يوفر فوائد بيئية واقتصادية طويلة المدى.'
                      : 'As part of AES Jordan\'s commitment to innovation and sustainability, the AM Solar project represents an investment in Jordan\'s clean energy future, providing long-term environmental and economic benefits.'
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
                onClick={() => onNavigate?.('business-aes-levant-ipp4')}
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-[#005670] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {isArabic ? 'محطة بلاد الشام (IPP4)' : 'Levant Power Plant (IPP4)'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AMSolar;