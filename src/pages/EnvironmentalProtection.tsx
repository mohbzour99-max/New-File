import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Leaf, Users, BookOpen, Phone, Globe, AlertTriangle, CheckCircle, ExternalLink, Target, Eye, Activity, Clipboard, Recycle, TreePine, Droplets, Wind } from 'lucide-react';

interface EnvironmentalProtectionProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const EnvironmentalProtection: React.FC<EnvironmentalProtectionProps> = ({ isArabic, onNavigate }) => {
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

  const environmentalPrinciples = [
    {
      icon: Leaf,
      title: { en: 'Environmental Stewardship', ar: 'الإشراف البيئي' },
      description: { en: 'Protecting our planet for future generations', ar: 'حماية كوكبنا للأجيال القادمة' }
    },
    {
      icon: Recycle,
      title: { en: 'Resource Efficiency', ar: 'كفاءة الموارد' },
      description: { en: 'Optimizing resource use and minimizing waste', ar: 'تحسين استخدام الموارد وتقليل النفايات' }
    },
    {
      icon: TreePine,
      title: { en: 'Biodiversity Conservation', ar: 'حفظ التنوع البيولوجي' },
      description: { en: 'Preserving natural ecosystems and wildlife', ar: 'الحفاظ على النظم البيئية الطبيعية والحياة البرية' }
    },
    {
      icon: Wind,
      title: { en: 'Emission Reduction', ar: 'تقليل الانبعاثات' },
      description: { en: 'Minimizing our carbon footprint', ar: 'تقليل بصمتنا الكربونية' }
    }
  ];

  const environmentalManagement = [
    { en: 'Environmental Impact Assessment and Monitoring', ar: 'تقييم ومراقبة التأثير البيئي' },
    { en: 'Air Quality Management and Emissions Control', ar: 'إدارة جودة الهواء والتحكم في الانبعاثات' },
    { en: 'Water Resource Management and Conservation', ar: 'إدارة الموارد المائية والحفاظ عليها' },
    { en: 'Waste Management and Recycling Programs', ar: 'إدارة النفايات وبرامج إعادة التدوير' },
    { en: 'Soil and Groundwater Protection', ar: 'حماية التربة والمياه الجوفية' },
    { en: 'Noise and Vibration Control', ar: 'التحكم في الضوضاء والاهتزاز' },
    { en: 'Biodiversity and Ecosystem Protection', ar: 'حماية التنوع البيولوجي والنظم البيئية' },
    { en: 'Environmental Training and Awareness', ar: 'التدريب والتوعية البيئية' },
    { en: 'Environmental Compliance and Reporting', ar: 'الامتثال البيئي والتقارير' },
    { en: 'Emergency Response and Spill Prevention', ar: 'الاستجابة للطوارئ ومنع التسرب' },
    { en: 'Environmental Auditing and Monitoring', ar: 'التدقيق والمراقبة البيئية' },
    { en: 'Stakeholder Engagement and Communication', ar: 'إشراك أصحاب المصلحة والتواصل' }
  ];

  const complianceStandards = [
    { en: 'ISO 14001 Environmental Management System', ar: 'نظام الإدارة البيئية ISO 14001' },
    { en: 'World Bank Environmental Guidelines', ar: 'المبادئ التوجيهية البيئية للبنك الدولي' },
    { en: 'JBIC Environmental Standards', ar: 'المعايير البيئية JBIC' },
    { en: 'OPIC Environmental Requirements', ar: 'متطلبات OPIC البيئية' },
    { en: 'Jordan Environmental Protection Law', ar: 'قانون حماية البيئة الأردني' },
    { en: 'International Environmental Protocols', ar: 'البروتوكولات البيئية الدولية' }
  ];

  const relevantAuthorities = [
    { en: 'Ministry of Environment - Jordan', ar: 'وزارة البيئة - الأردن' },
    { en: 'Environmental Protection Agency', ar: 'وكالة حماية البيئة' },
    { en: 'Water Authority of Jordan', ar: 'سلطة المياه الأردنية' },
    { en: 'Jordan Meteorological Department', ar: 'دائرة الأرصاد الجوية الأردنية' }
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
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {isArabic ? 'الرئيسية' : 'Home'}
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <button 
              onClick={() => onNavigate?.('sustainability-main')}
              className="text-white text-opacity-60 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {isArabic ? 'الاستدامة' : 'Sustainability'}
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">
              {isArabic ? 'حماية البيئة' : 'Environmental Protection'}
            </span>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isArabic ? 'حماية البيئة' : 'Environmental Protection'}
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
              {isArabic 
                ? 'نحن ملتزمون بحماية البيئة والحفاظ على الموارد الطبيعية للأجيال القادمة'
                : 'We are committed to protecting the environment and preserving natural resources for future generations'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Principles */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {environmentalPrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div
                  key={index}
                  className={`text-center transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#005670] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#231f20] mb-3">
                    {isArabic ? principle.title.ar : principle.title.en}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isArabic ? principle.description.ar : principle.description.en}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#231f20] mb-6 flex items-center">
                  <Leaf className="w-8 h-8 text-[#005670] mr-3" />
                  {isArabic ? 'التزامنا البيئي' : 'Our Environmental Commitment'}
                </h2>
                
                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    AES Jordan places environmental protection at the forefront of our operations. We recognize that sustainable energy production requires responsible environmental stewardship and are committed to minimizing our environmental impact while delivering reliable power to Jordan.
                  </p>
                  
                  <div className="bg-[#005670] bg-opacity-5 border-l-4 border-[#005670] p-6 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed font-medium">
                      Our environmental management approach is built on the principle of continuous improvement, ensuring that we not only meet but exceed environmental standards while contributing to Jordan's sustainable development goals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Environmental Management System */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#231f20] mb-6 flex items-center">
                  <Clipboard className="w-6 h-6 text-[#005670] mr-3" />
                  {isArabic ? 'نظام الإدارة البيئية' : 'Environmental Management System'}
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our comprehensive Environmental Management System (EMS) is designed to identify, monitor, and control environmental aspects of our operations. The system ensures compliance with all applicable environmental regulations and international standards.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {environmentalManagement.map((component, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#005670] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {isArabic ? component.ar : component.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Standards */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#231f20] mb-6 flex items-center">
                  <Target className="w-6 h-6 text-[#005670] mr-3" />
                  {isArabic ? 'معايير الامتثال' : 'Compliance Standards'}
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  AES Jordan adheres to the highest environmental standards and maintains certifications that demonstrate our commitment to environmental excellence. Our operations comply with both local and international environmental requirements.
                </p>

                <div className="space-y-3">
                  {complianceStandards.map((standard, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#005670] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">
                        {isArabic ? standard.ar : standard.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Links */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#231f20] mb-4 flex items-center">
                  <Globe className="w-5 h-5 text-[#005670] mr-2" />
                  {isArabic ? 'روابط مفيدة' : 'Useful Links'}
                </h4>
                
                <div className="space-y-3">
                  <a 
                    href="http://www.moenv.gov.jo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#005670] hover:text-[#004558] transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="text-sm">Ministry of Environment</span>
                  </a>
                  
                  <a 
                    href="https://www.iso.org/iso-14001-environmental-management.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#005670] hover:text-[#004558] transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="text-sm">ISO 14001 Standards</span>
                  </a>
                </div>
              </div>

              {/* Environmental Monitoring */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  {isArabic ? 'المراقبة البيئية' : 'Environmental Monitoring'}
                </h4>
                
                <p className="text-white text-opacity-90 mb-4 text-sm">
                  {isArabic 
                    ? 'نراقب باستمرار تأثيرنا البيئي ونقدم تقارير شفافة عن أدائنا البيئي'
                    : 'We continuously monitor our environmental impact and provide transparent reporting on our environmental performance'
                  }
                </p>
                
                <a 
                  href="#"
                  className="inline-flex items-center bg-white text-green-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200"
                >
                  {isArabic ? 'التقرير البيئي' : 'Environmental Report'}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>

              {/* Relevant Authorities */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#231f20] mb-4 flex items-center">
                  <Users className="w-5 h-5 text-[#005670] mr-2" />
                  {isArabic ? 'السلطات ذات الصلة' : 'Relevant Authorities'}
                </h4>
                
                <div className="space-y-3">
                  {relevantAuthorities.map((authority, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#005670] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {isArabic ? authority.ar : authority.en}
                      </span>
                    </div>
                  ))}
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
              {isArabic ? 'اكتشف المزيد عن الاستدامة' : 'Discover More About Sustainability'}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              {isArabic
                ? 'تعرف على التزامنا الشامل بالاستدامة والمسؤولية البيئية'
                : 'Learn about our comprehensive commitment to sustainability and environmental responsibility'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => onNavigate?.('sustainability-safety')}
                className="inline-flex items-center bg-white text-[#005670] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isArabic ? 'السلامة أولاً' : 'Safety First'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button 
                onClick={() => onNavigate?.('sustainability-social')}
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-[#005670] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {isArabic ? 'المسؤولية الاجتماعية' : 'Social Responsibility'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentalProtection;