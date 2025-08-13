import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Users, Handshake, MessageSquare, Phone, Globe, Building2, CheckCircle, ExternalLink, Target, Eye, Activity, Clipboard, UserPlus, FileText, Calendar } from 'lucide-react';

interface StakeholderRelationsProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const StakeholderRelations: React.FC<StakeholderRelationsProps> = ({ isArabic, onNavigate }) => {
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

  const stakeholderPrinciples = [
    {
      icon: Handshake,
      title: { en: 'Transparent Communication', ar: 'التواصل الشفاف' },
      description: { en: 'Open and honest dialogue with all stakeholders', ar: 'حوار مفتوح وصادق مع جميع أصحاب المصلحة' }
    },
    {
      icon: UserPlus,
      title: { en: 'Active Engagement', ar: 'المشاركة الفعالة' },
      description: { en: 'Meaningful participation in decision-making processes', ar: 'مشاركة هادفة في عمليات صنع القرار' }
    },
    {
      icon: MessageSquare,
      title: { en: 'Regular Consultation', ar: 'التشاور المنتظم' },
      description: { en: 'Ongoing dialogue and feedback mechanisms', ar: 'آليات الحوار والتغذية الراجعة المستمرة' }
    },
    {
      icon: FileText,
      title: { en: 'Accountability', ar: 'المساءلة' },
      description: { en: 'Responsible reporting and performance tracking', ar: 'التقارير المسؤولة وتتبع الأداء' }
    }
  ];

  const stakeholderGroups = [
    {
      title: { en: 'Government and Regulatory Bodies', ar: 'الحكومة والهيئات التنظيمية' },
      items: [
        { en: 'Ministry of Energy and Mineral Resources', ar: 'وزارة الطاقة والثروة المعدنية' },
        { en: 'Energy and Minerals Regulatory Commission (EMRC)', ar: 'هيئة تنظيم قطاع الطاقة والمعادن' },
        { en: 'National Electric Power Company (NEPCO)', ar: 'الشركة الوطنية للكهرباء' },
        { en: 'Ministry of Environment', ar: 'وزارة البيئة' }
      ]
    },
    {
      title: { en: 'Financial Partners and Investors', ar: 'الشركاء الماليون والمستثمرون' },
      items: [
        { en: 'OPIC (U.S. International Development Finance Corporation)', ar: 'مؤسسة التمويل التنموي الدولية الأمريكية' },
        { en: 'JBIC (Japan Bank for International Cooperation)', ar: 'البنك الياباني للتعاون الدولي' },
        { en: 'EBRD (European Bank for Reconstruction and Development)', ar: 'البنك الأوروبي للإنشاء والتعمير' },
        { en: 'Commercial Banking Partners', ar: 'شركاء البنوك التجارية' }
      ]
    },
    {
      title: { en: 'Local Communities', ar: 'المجتمعات المحلية' },
      items: [
        { en: 'Surrounding Communities and Residents', ar: 'المجتمعات والسكان المحيطون' },
        { en: 'Local Government Representatives', ar: 'ممثلو الحكومة المحلية' },
        { en: 'Community Leaders and Organizations', ar: 'قادة ومنظمات المجتمع' },
        { en: 'Educational Institutions', ar: 'المؤسسات التعليمية' }
      ]
    }
  ];

  const engagementActivities = [
    { en: 'Regular Stakeholder Meetings and Consultations', ar: 'اجتماعات ومشاورات أصحاب المصلحة المنتظمة' },
    { en: 'Annual Sustainability and Performance Reports', ar: 'تقارير الاستدامة والأداء السنوية' },
    { en: 'Community Advisory Committees', ar: 'لجان استشارية مجتمعية' },
    { en: 'Public Information Sessions and Open Houses', ar: 'جلسات المعلومات العامة والأبواب المفتوحة' },
    { en: 'Environmental and Social Impact Assessments', ar: 'تقييمات التأثير البيئي والاجتماعي' },
    { en: 'Grievance and Feedback Mechanisms', ar: 'آليات الشكاوى والتغذية الراجعة' },
    { en: 'Stakeholder Surveys and Research', ar: 'استطلاعات وأبحاث أصحاب المصلحة' },
    { en: 'Partnership Development Programs', ar: 'برامج تطوير الشراكات' },
    { en: 'Transparency and Disclosure Initiatives', ar: 'مبادرات الشفافية والإفصاح' },
    { en: 'Capacity Building and Training Programs', ar: 'برامج بناء القدرات والتدريب' }
  ];

  const communicationChannels = [
    { en: 'Official Website and Online Portals', ar: 'الموقع الرسمي والبوابات الإلكترونية' },
    { en: 'Social Media Platforms', ar: 'منصات التواصل الاجتماعي' },
    { en: 'Community Liaison Officers', ar: 'ضباط الاتصال المجتمعي' },
    { en: 'Public Meetings and Forums', ar: 'الاجتماعات والمنتديات العامة' },
    { en: 'Print and Digital Publications', ar: 'المنشورات المطبوعة والرقمية' },
    { en: 'Direct Communication Channels', ar: 'قنوات التواصل المباشر' }
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
              {isArabic ? 'علاقات أصحاب المصلحة' : 'Stakeholder Relations'}
            </span>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isArabic ? 'علاقات أصحاب المصلحة' : 'Stakeholder Relations'}
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
              {isArabic 
                ? 'بناء علاقات قوية ومستدامة مع جميع أصحاب المصلحة من خلال التواصل الشفاف والمشاركة الفعالة'
                : 'Building strong and sustainable relationships with all stakeholders through transparent communication and meaningful engagement'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Stakeholder Principles */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stakeholderPrinciples.map((principle, index) => {
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
                  <Handshake className="w-8 h-8 text-[#005670] mr-3" />
                  {isArabic ? 'نهجنا في إشراك أصحاب المصلحة' : 'Our Stakeholder Engagement Approach'}
                </h2>
                
                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    At AES Jordan, we recognize that meaningful stakeholder engagement is essential to our long-term success and sustainability. We are committed to building and maintaining strong relationships with all our stakeholders through transparent communication, active listening, and collaborative decision-making.
                  </p>
                  
                  <div className="bg-[#005670] bg-opacity-5 border-l-4 border-[#005670] p-6 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed font-medium">
                      Our stakeholder engagement strategy is built on the principles of transparency, accountability, and mutual respect, ensuring that all voices are heard and considered in our business decisions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stakeholder Groups */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#231f20] mb-6 flex items-center">
                  <Users className="w-6 h-6 text-[#005670] mr-3" />
                  {isArabic ? 'مجموعات أصحاب المصلحة' : 'Stakeholder Groups'}
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  We engage with a diverse range of stakeholders who have an interest in or are affected by our operations. Our key stakeholder groups include:
                </p>

                <div className="space-y-8">
                  {stakeholderGroups.map((group, groupIndex) => (
                    <div key={groupIndex}>
                      <h4 className="text-lg font-semibold text-[#231f20] mb-4">
                        {isArabic ? group.title.ar : group.title.en}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {group.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-[#005670] mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm leading-relaxed">
                              {isArabic ? item.ar : item.en}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engagement Activities */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#231f20] mb-6 flex items-center">
                  <Activity className="w-6 h-6 text-[#005670] mr-3" />
                  {isArabic ? 'أنشطة المشاركة' : 'Engagement Activities'}
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  We employ various engagement methods and activities to ensure effective communication and collaboration with our stakeholders:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {engagementActivities.map((activity, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#005670] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {isArabic ? activity.ar : activity.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Communication Channels */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#231f20] mb-4 flex items-center">
                  <MessageSquare className="w-5 h-5 text-[#005670] mr-2" />
                  {isArabic ? 'قنوات التواصل' : 'Communication Channels'}
                </h4>
                
                <div className="space-y-3">
                  {communicationChannels.map((channel, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#005670] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {isArabic ? channel.ar : channel.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-[#005670] to-[#004558] rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  {isArabic ? 'تواصل معنا' : 'Contact Us'}
                </h4>
                
                <p className="text-white text-opacity-90 mb-4 text-sm">
                  {isArabic 
                    ? 'نحن نرحب بتعليقاتكم واستفساراتكم. تواصلوا معنا لمناقشة أي مسائل أو اهتمامات'
                    : 'We welcome your feedback and inquiries. Contact us to discuss any issues or concerns'
                  }
                </p>
                
                <button 
                  onClick={() => onNavigate?.('contact')}
                  className="inline-flex items-center bg-white text-[#005670] hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200"
                >
                  {isArabic ? 'اتصل بنا' : 'Contact Us'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              {/* Quick Links */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#231f20] mb-4 flex items-center">
                  <Globe className="w-5 h-5 text-[#005670] mr-2" />
                  {isArabic ? 'روابط مفيدة' : 'Useful Links'}
                </h4>
                
                <div className="space-y-3">
                  <a 
                    href="http://www.memr.gov.jo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#005670] hover:text-[#004558] transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="text-sm">Ministry of Energy</span>
                  </a>
                  
                  <a 
                    href="http://www.emrc.gov.jo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#005670] hover:text-[#004558] transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="text-sm">EMRC</span>
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
                onClick={() => onNavigate?.('sustainability-assets')}
                className="inline-flex items-center bg-white text-[#005670] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isArabic ? 'إدارة الأصول' : 'Asset Management'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button 
                onClick={() => onNavigate?.('sustainability-supply')}
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-[#005670] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {isArabic ? 'إدارة سلسلة التوريد' : 'Supply Chain Management'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StakeholderRelations;