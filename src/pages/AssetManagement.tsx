import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Building2, Settings, BarChart3, Phone, Globe, Cog, CheckCircle, ExternalLink, Target, Eye, Activity, Clipboard, Wrench, TrendingUp, Shield } from 'lucide-react';

interface AssetManagementProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const AssetManagement: React.FC<AssetManagementProps> = ({ isArabic, onNavigate }) => {
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

  const assetPrinciples = [
    {
      icon: Building2,
      title: { en: 'Asset Optimization', ar: 'تحسين الأصول' },
      description: { en: 'Maximizing asset performance and lifecycle value', ar: 'تعظيم أداء الأصول وقيمة دورة الحياة' }
    },
    {
      icon: Settings,
      title: { en: 'Preventive Maintenance', ar: 'الصيانة الوقائية' },
      description: { en: 'Proactive maintenance strategies to prevent failures', ar: 'استراتيجيات الصيانة الاستباقية لمنع الأعطال' }
    },
    {
      icon: BarChart3,
      title: { en: 'Performance Monitoring', ar: 'مراقبة الأداء' },
      description: { en: 'Continuous monitoring and performance analysis', ar: 'المراقبة المستمرة وتحليل الأداء' }
    },
    {
      icon: Shield,
      title: { en: 'Risk Management', ar: 'إدارة المخاطر' },
      description: { en: 'Identifying and mitigating operational risks', ar: 'تحديد وتخفيف المخاطر التشغيلية' }
    }
  ];

  const assetManagementComponents = [
    { en: 'Asset Lifecycle Management and Planning', ar: 'إدارة وتخطيط دورة حياة الأصول' },
    { en: 'Preventive and Predictive Maintenance Programs', ar: 'برامج الصيانة الوقائية والتنبؤية' },
    { en: 'Condition Monitoring and Diagnostics', ar: 'مراقبة الحالة والتشخيص' },
    { en: 'Performance Optimization and Efficiency Improvement', ar: 'تحسين الأداء وتحسين الكفاءة' },
    { en: 'Asset Reliability and Availability Management', ar: 'إدارة موثوقية وتوفر الأصول' },
    { en: 'Spare Parts and Inventory Management', ar: 'إدارة قطع الغيار والمخزون' },
    { en: 'Work Order Management and Scheduling', ar: 'إدارة وجدولة أوامر العمل' },
    { en: 'Asset Performance Monitoring and Reporting', ar: 'مراقبة وتقارير أداء الأصول' },
    { en: 'Risk Assessment and Mitigation Strategies', ar: 'تقييم المخاطر واستراتيجيات التخفيف' },
    { en: 'Technology Integration and Digital Solutions', ar: 'تكامل التكنولوجيا والحلول الرقمية' },
    { en: 'Compliance and Regulatory Management', ar: 'إدارة الامتثال والتنظيم' },
    { en: 'Asset Documentation and Record Keeping', ar: 'توثيق الأصول وحفظ السجلات' }
  ];

  const maintenanceStrategies = [
    { en: 'Condition-Based Maintenance (CBM)', ar: 'الصيانة القائمة على الحالة' },
    { en: 'Predictive Maintenance Using Advanced Analytics', ar: 'الصيانة التنبؤية باستخدام التحليلات المتقدمة' },
    { en: 'Reliability-Centered Maintenance (RCM)', ar: 'الصيانة المتمركزة حول الموثوقية' },
    { en: 'Risk-Based Inspection and Maintenance', ar: 'التفتيش والصيانة القائمة على المخاطر' },
    { en: 'Total Productive Maintenance (TPM)', ar: 'الصيانة الإنتاجية الشاملة' },
    { en: 'Planned Preventive Maintenance Schedules', ar: 'جداول الصيانة الوقائية المخططة' }
  ];

  const performanceMetrics = [
    { en: 'Overall Equipment Effectiveness (OEE)', ar: 'الفعالية الإجمالية للمعدات' },
    { en: 'Mean Time Between Failures (MTBF)', ar: 'متوسط الوقت بين الأعطال' },
    { en: 'Mean Time to Repair (MTTR)', ar: 'متوسط وقت الإصلاح' },
    { en: 'Asset Availability and Reliability Rates', ar: 'معدلات توفر وموثوقية الأصول' }
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
              {isArabic ? 'إدارة الأصول' : 'Asset Management'}
            </span>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isArabic ? 'إدارة الأصول' : 'Asset Management'}
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
              {isArabic 
                ? 'تحسين أداء الأصول وضمان التشغيل الموثوق والفعال لمحطات الطاقة'
                : 'Optimizing asset performance and ensuring reliable, efficient operation of our power plants'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Asset Principles */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {assetPrinciples.map((principle, index) => {
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
                  <Building2 className="w-8 h-8 text-[#005670] mr-3" />
                  {isArabic ? 'نهجنا في إدارة الأصول' : 'Our Asset Management Approach'}
                </h2>
                
                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    AES Jordan employs a comprehensive asset management strategy that focuses on maximizing the performance, reliability, and lifecycle value of our power generation assets. Our approach integrates advanced technologies, best practices, and continuous improvement methodologies to ensure optimal asset performance.
                  </p>
                  
                  <div className="bg-[#005670] bg-opacity-5 border-l-4 border-[#005670] p-6 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed font-medium">
                      Our asset management philosophy is built on the foundation of proactive maintenance, data-driven decision making, and continuous optimization to deliver reliable and efficient power generation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Asset Management Components */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#231f20] mb-6 flex items-center">
                  <Cog className="w-6 h-6 text-[#005670] mr-3" />
                  {isArabic ? 'مكونات إدارة الأصول' : 'Asset Management Components'}
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our comprehensive asset management system encompasses all aspects of asset lifecycle management, from planning and acquisition to operation, maintenance, and eventual replacement.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {assetManagementComponents.map((component, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#005670] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {isArabic ? component.ar : component.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Maintenance Strategies */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#231f20] mb-6 flex items-center">
                  <Wrench className="w-6 h-6 text-[#005670] mr-3" />
                  {isArabic ? 'استراتيجيات الصيانة' : 'Maintenance Strategies'}
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  We employ various maintenance strategies and methodologies to ensure optimal asset performance and minimize unplanned downtime:
                </p>

                <div className="space-y-3">
                  {maintenanceStrategies.map((strategy, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#005670] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">
                        {isArabic ? strategy.ar : strategy.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Performance Metrics */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#231f20] mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 text-[#005670] mr-2" />
                  {isArabic ? 'مقاييس الأداء' : 'Performance Metrics'}
                </h4>
                
                <div className="space-y-3">
                  {performanceMetrics.map((metric, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#005670] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {isArabic ? metric.ar : metric.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Asset Performance */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  {isArabic ? 'أداء الأصول' : 'Asset Performance'}
                </h4>
                
                <p className="text-white text-opacity-90 mb-4 text-sm">
                  {isArabic 
                    ? 'نحقق معدلات موثوقية عالية وأداء متميز عبر جميع أصولنا'
                    : 'We achieve high reliability rates and excellent performance across all our assets'
                  }
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">99.8%</div>
                    <div className="text-xs opacity-90">{isArabic ? 'الموثوقية' : 'Reliability'}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">95%+</div>
                    <div className="text-xs opacity-90">{isArabic ? 'الكفاءة' : 'Efficiency'}</div>
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
                    href="https://www.iso.org/iso-55000-asset-management.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#005670] hover:text-[#004558] transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="text-sm">ISO 55000 Standards</span>
                  </a>
                  
                  <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#005670] hover:text-[#004558] transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="text-sm">Asset Management Plan</span>
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
                onClick={() => onNavigate?.('sustainability-supply')}
                className="inline-flex items-center bg-white text-[#005670] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isArabic ? 'إدارة سلسلة التوريد' : 'Supply Chain Management'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button 
                onClick={() => onNavigate?.('sustainability-safety')}
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-[#005670] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {isArabic ? 'السلامة أولاً' : 'Safety First'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssetManagement;