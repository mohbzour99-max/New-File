import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Shield, Users, FileText, AlertTriangle, CheckCircle, ExternalLink, Target, Eye, Activity, Clipboard, Phone, Globe } from 'lucide-react';

interface SafetyFirstProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const SafetyFirst: React.FC<SafetyFirstProps> = ({ isArabic, onNavigate }) => {
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

  const safetyPrinciples = [
    {
      icon: Shield,
      title: { en: 'Safety Comes First', ar: 'السلامة تأتي أولاً' },
      description: { en: 'For our people, contractors and communities', ar: 'لموظفينا ومقاولينا ومجتمعاتنا' }
    },
    {
      icon: Users,
      title: { en: 'Safe Work Environment', ar: 'بيئة عمل آمنة' },
      description: { en: 'All work activities conducted safely', ar: 'جميع أنشطة العمل تتم بأمان' }
    },
    {
      icon: Target,
      title: { en: 'Zero Incidents Goal', ar: 'هدف صفر حوادث' },
      description: { en: 'Striving for incident-free operations', ar: 'السعي لعمليات خالية من الحوادث' }
    },
    {
      icon: Activity,
      title: { en: 'Continuous Improvement', ar: 'التحسين المستمر' },
      description: { en: 'Regular safety training and updates', ar: 'تدريب وتحديثات السلامة المنتظمة' }
    }
  ];

  const managementSystemComponents = [
    { en: 'Health and Safety Policy/Environmental Policy', ar: 'سياسة الصحة والسلامة/السياسة البيئية' },
    { en: 'Compliance with Environmental and Health and Safety Regulations', ar: 'الامتثال للوائح البيئية والصحة والسلامة' },
    { en: 'Environmental Aspects and Impacts', ar: 'الجوانب والتأثيرات البيئية' },
    { en: 'Risk Evaluation and Operational Control', ar: 'تقييم المخاطر والتحكم التشغيلي' },
    { en: 'Occupational Health and Environmental Health', ar: 'الصحة المهنية والصحة البيئية' },
    { en: 'Health, Safety and Environmental Procedures', ar: 'إجراءات الصحة والسلامة والبيئة' },
    { en: 'Contractors Management', ar: 'إدارة المقاولين' },
    { en: 'Training and Competence', ar: 'التدريب والكفاءة' },
    { en: 'Health, Safety and Environmental Management Meetings', ar: 'اجتماعات إدارة الصحة والسلامة والبيئة' },
    { en: 'Reporting and Investigation of Incidents', ar: 'الإبلاغ عن الحوادث والتحقيق فيها' },
    { en: 'Results Monitoring', ar: 'مراقبة النتائج' },
    { en: 'Corrective and Preventive Measures', ar: 'الإجراءات التصحيحية والوقائية' },
    { en: 'Emergency Preparedness and Response', ar: 'الاستعداد والاستجابة للطوارئ' },
    { en: 'Safety Rules', ar: 'قواعد السلامة' },
    { en: 'Document Management System', ar: 'نظام إدارة الوثائق' }
  ];

  const policyProcedures = [
    { en: 'Analysis of Work Safety/Analysis of task\'s risks', ar: 'تحليل سلامة العمل/تحليل مخاطر المهام' },
    { en: 'Permit-to-work System', ar: 'نظام تصريح العمل' },
    { en: 'Accident Investigation and Reporting of Accidents', ar: 'التحقيق في الحوادث والإبلاغ عنها' },
    { en: 'Selection, Appointment and Management of Contractors', ar: 'اختيار وتعيين وإدارة المقاولين' },
    { en: 'Internal Audits Conduction', ar: 'إجراء التدقيق الداخلي' },
    { en: 'Emergency Preparedness and Response Plan', ar: 'خطة الاستعداد والاستجابة للطوارئ' },
    { en: 'Rescue and Emergency Repair Works Conduction Plan', ar: 'خطة إجراء أعمال الإنقاذ والإصلاح الطارئ' },
    { en: 'Proactive Safety Management', ar: 'إدارة السلامة الاستباقية' }
  ];

  const relevantAuthorities = [
    { en: 'WAJ – Water Authority of Jordan', ar: 'سلطة المياه الأردنية' },
    { en: 'NEPCO – National Electrical Power Company', ar: 'الشركة الوطنية للكهرباء' },
    { en: 'MOL – Ministry of Labour', ar: 'وزارة العمل' },
    { en: 'CDD – Civil Defense Department', ar: 'إدارة الدفاع المدني' }
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
              {isArabic ? 'السلامة أولاً' : 'Safety First'}
            </span>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isArabic ? 'السلامة أولاً' : 'Safety First'}
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
              {isArabic 
                ? 'نضع أعلى الأولوية على جعل السلامة طريقة حياتنا'
                : 'AES places the highest priority on making safety our way of life'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Safety Principles */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {safetyPrinciples.map((principle, index) => {
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
                  <Shield className="w-8 h-8 text-[#005670] mr-3" />
                  {isArabic ? 'نهجنا في السلامة' : 'Our Safety Approach'}
                </h2>
                
                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    AES places the highest priority on making safety our way of life. It is the top priority for all AES people, contractors and communities, and is our most important value across our culture, businesses and daily operations. We believe that all incidents are preventable and that everyone has the right to go home safely.
                  </p>
                  
                  <div className="bg-[#005670] bg-opacity-5 border-l-4 border-[#005670] p-6 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed font-medium">
                      The main goal of AES Jordan is to improve lives by providing safe, reliable and sustainable energy. We aim to achieve 100% commitment of every staff member and contractor to comply with our safety procedures and this is the way towards creating World Class Safety Culture.
                    </p>
                  </div>
                </div>
              </div>

              {/* AES Safety Beliefs */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#231f20] mb-6 flex items-center">
                  <Eye className="w-6 h-6 text-[#005670] mr-3" />
                  {isArabic ? 'معتقدات السلامة في AES' : 'AES Safety Beliefs'}
                </h3>
                
                <div className="space-y-4">
                  {[
                    'Safety comes first for our people, our contractors and the individuals in our communities, and all work activities and methods need to be conducted in a safe manner that promotes personal health, safety and well-being.',
                    'All occupational incidents can be prevented.',
                    'Each individual and each work group is responsible for their own safety as well as the safety of their teammates and the people in the communities in which we work.',
                    'All AES people and contractors have the right and obligation to stop work as soon as they identify a potentially unsafe condition or practice.'
                  ].map((belief, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#005670] mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{belief}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Management System */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#231f20] mb-6 flex items-center">
                  <Clipboard className="w-6 h-6 text-[#005670] mr-3" />
                  {isArabic ? 'نظام الإدارة' : 'Management System'}
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Occupational Health, Safety and Environmental Management System ensures the maintenance of health, safety and the environmental conditions in the enterprises. It is in compliance with ISO 14 EN 14001: 2004 Environmental Management Systems Specification and Guidance for Use and OHSAS 18001: 2007 Occupational Health and Safety Management Systems Specifications of the International Organization for Standardization.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {managementSystemComponents.map((component, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#005670] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {isArabic ? component.ar : component.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policy and Procedures */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#231f20] mb-6 flex items-center">
                  <FileText className="w-6 h-6 text-[#005670] mr-3" />
                  {isArabic ? 'السياسات والإجراءات' : 'Policy and Procedures'}
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  AES Jordan has an integrated Occupational Health, Safety and Environmental Policy. It is applied to all business activities, operational and maintenance aspects of AES Jordan PSC, Amman East Power Plant (IPP1) and AES Levant Holdings BV – Levant Power Plant (IPP4).
                </p>

                <div className="space-y-3">
                  {policyProcedures.map((procedure, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#005670] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">
                        {isArabic ? procedure.ar : procedure.en}
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
                    href="http://www.moi.gov.jo/default.aspx?tabid=775"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#005670] hover:text-[#004558] transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="text-sm">Ministry of Labour</span>
                  </a>
                  
                  <a 
                    href="http://www.cdd.gov.jo/default.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#005670] hover:text-[#004558] transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="text-sm">Civil Defense Department</span>
                  </a>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  {isArabic ? 'الطوارئ' : 'Emergency'}
                </h4>
                
                <p className="text-white text-opacity-90 mb-4 text-sm">
                  {isArabic 
                    ? 'يمكنك العثور على خطة الاستجابة للطوارئ لمحطة الطاقة أدناه:'
                    : 'You can find below the Emergency Response Plan of the Power Plant:'
                  }
                </p>
                
                <a 
                  href="#"
                  className="inline-flex items-center bg-white text-red-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200"
                >
                  {isArabic ? 'خطة الاستجابة للطوارئ' : 'Emergency Response Plan'}
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

export default SafetyFirst;