import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Truck, Package, Users, Phone, Globe, Link, CheckCircle, ExternalLink, Target, Eye, Activity, Clipboard, ShoppingCart, Award, FileCheck } from 'lucide-react';

interface SupplyChainManagementProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const SupplyChainManagement: React.FC<SupplyChainManagementProps> = ({ isArabic, onNavigate }) => {
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

  const supplyChainPrinciples = [
    {
      icon: Package,
      title: { en: 'Quality Assurance', ar: 'ضمان الجودة' },
      description: { en: 'Ensuring highest quality standards across all suppliers', ar: 'ضمان أعلى معايير الجودة عبر جميع الموردين' }
    },
    {
      icon: Users,
      title: { en: 'Ethical Sourcing', ar: 'المصادر الأخلاقية' },
      description: { en: 'Responsible and ethical procurement practices', ar: 'ممارسات الشراء المسؤولة والأخلاقية' }
    },
    {
      icon: Link,
      title: { en: 'Partnership Development', ar: 'تطوير الشراكات' },
      description: { en: 'Building long-term strategic partnerships', ar: 'بناء شراكات استراتيجية طويلة المدى' }
    },
    {
      icon: Award,
      title: { en: 'Performance Excellence', ar: 'تميز الأداء' },
      description: { en: 'Continuous improvement and performance optimization', ar: 'التحسين المستمر وتحسين الأداء' }
    }
  ];

  const procurementProcesses = [
    { en: 'Supplier Qualification and Pre-qualification', ar: 'تأهيل الموردين والتأهيل المسبق' },
    { en: 'Competitive Bidding and Tender Management', ar: 'المناقصات التنافسية وإدارة العطاءات' },
    { en: 'Contract Negotiation and Management', ar: 'التفاوض على العقود وإدارتها' },
    { en: 'Purchase Order Processing and Tracking', ar: 'معالجة وتتبع أوامر الشراء' },
    { en: 'Goods Receipt and Quality Inspection', ar: 'استلام البضائع والتفتيش على الجودة' },
    { en: 'Invoice Processing and Payment Management', ar: 'معالجة الفواتير وإدارة المدفوعات' },
    { en: 'Supplier Performance Monitoring and Evaluation', ar: 'مراقبة وتقييم أداء الموردين' },
    { en: 'Risk Assessment and Mitigation Strategies', ar: 'تقييم المخاطر واستراتيجيات التخفيف' },
    { en: 'Compliance and Regulatory Management', ar: 'إدارة الامتثال والتنظيم' },
    { en: 'Inventory Management and Optimization', ar: 'إدارة وتحسين المخزون' },
    { en: 'Logistics and Transportation Coordination', ar: 'تنسيق اللوجستيات والنقل' },
    { en: 'Supplier Development and Training Programs', ar: 'برامج تطوير وتدريب الموردين' }
  ];

  const supplierRequirements = [
    { en: 'Technical Competence and Certification', ar: 'الكفاءة التقنية والشهادات' },
    { en: 'Quality Management System (ISO 9001)', ar: 'نظام إدارة الجودة (ISO 9001)' },
    { en: 'Environmental Management Compliance', ar: 'الامتثال لإدارة البيئة' },
    { en: 'Health and Safety Standards Adherence', ar: 'الالتزام بمعايير الصحة والسلامة' },
    { en: 'Financial Stability and Creditworthiness', ar: 'الاستقرار المالي والجدارة الائتمانية' },
    { en: 'Ethical Business Practices', ar: 'ممارسات الأعمال الأخلاقية' }
  ];

  const keySupplierCategories = [
    { en: 'Original Equipment Manufacturers (OEMs)', ar: 'الشركات المصنعة للمعدات الأصلية' },
    { en: 'Maintenance and Repair Service Providers', ar: 'مقدمو خدمات الصيانة والإصلاح' },
    { en: 'Spare Parts and Components Suppliers', ar: 'موردو قطع الغيار والمكونات' },
    { en: 'Construction and Engineering Contractors', ar: 'مقاولو البناء والهندسة' }
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
              {isArabic ? 'إدارة سلسلة التوريد' : 'Supply Chain Management'}
            </span>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isArabic ? 'إدارة سلسلة التوريد' : 'Supply Chain Management'}
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
              {isArabic 
                ? 'ضمان التوريد الموثوق والمستدام للمواد والخدمات عالية الجودة'
                : 'Ensuring reliable and sustainable supply of high-quality materials and services'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Supply Chain Principles */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {supplyChainPrinciples.map((principle, index) => {
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
                  <Truck className="w-8 h-8 text-[#005670] mr-3" />
                  {isArabic ? 'نهجنا في إدارة سلسلة التوريد' : 'Our Supply Chain Management Approach'}
                </h2>
                
                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    AES Jordan maintains a robust and efficient supply chain management system that ensures the reliable procurement of high-quality materials, equipment, and services necessary for our power generation operations. Our approach emphasizes strategic partnerships, quality assurance, and sustainable procurement practices.
                  </p>
                  
                  <div className="bg-[#005670] bg-opacity-5 border-l-4 border-[#005670] p-6 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed font-medium">
                      We work closely with qualified suppliers and contractors who share our commitment to excellence, safety, and environmental responsibility, ensuring that our supply chain supports our operational goals and sustainability objectives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Procurement Processes */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#231f20] mb-6 flex items-center">
                  <ShoppingCart className="w-6 h-6 text-[#005670] mr-3" />
                  {isArabic ? 'عمليات الشراء' : 'Procurement Processes'}
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our procurement processes are designed to ensure transparency, competitiveness, and compliance with all applicable regulations and standards:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {procurementProcesses.map((process, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#005670] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {isArabic ? process.ar : process.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supplier Requirements */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#231f20] mb-6 flex items-center">
                  <FileCheck className="w-6 h-6 text-[#005670] mr-3" />
                  {isArabic ? 'متطلبات الموردين' : 'Supplier Requirements'}
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  We maintain strict qualification criteria for all our suppliers to ensure they meet our high standards for quality, safety, and performance:
                </p>

                <div className="space-y-3">
                  {supplierRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#005670] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">
                        {isArabic ? requirement.ar : requirement.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Key Supplier Categories */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#231f20] mb-4 flex items-center">
                  <Users className="w-5 h-5 text-[#005670] mr-2" />
                  {isArabic ? 'فئات الموردين الرئيسية' : 'Key Supplier Categories'}
                </h4>
                
                <div className="space-y-3">
                  {keySupplierCategories.map((category, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#005670] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {isArabic ? category.ar : category.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supplier Performance */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  {isArabic ? 'أداء الموردين' : 'Supplier Performance'}
                </h4>
                
                <p className="text-white text-opacity-90 mb-4 text-sm">
                  {isArabic 
                    ? 'نراقب ونقيم أداء موردينا بانتظام لضمان الجودة والموثوقية'
                    : 'We regularly monitor and evaluate our suppliers\' performance to ensure quality and reliability'
                  }
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-xs opacity-90">{isArabic ? 'معدل الجودة' : 'Quality Rate'}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-xs opacity-90">{isArabic ? 'التسليم في الوقت المحدد' : 'On-Time Delivery'}</div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#231f20] mb-4 flex items-center">
                  <Globe className="w-5 h-5 text-[#005670] mr-2" />
                  {isArabic ? 'روابط مفيدة' : 'Useful Links'}
                </h4>
                
                <div className="space-y-3">
                  <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#005670] hover:text-[#004558] transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="text-sm">Supplier Portal</span>
                  </a>
                  
                  <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#005670] hover:text-[#004558] transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="text-sm">Procurement Guidelines</span>
                  </a>
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
                onClick={() => onNavigate?.('sustainability-environment')}
                className="inline-flex items-center bg-white text-[#005670] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isArabic ? 'حماية البيئة' : 'Environmental Protection'}
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

export default SupplyChainManagement;