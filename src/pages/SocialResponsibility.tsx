import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Users, Heart, BookOpen, Phone, Globe, GraduationCap, CheckCircle, ExternalLink, Target, Eye, Activity, Clipboard, HandHeart, Building, UserCheck } from 'lucide-react';

interface SocialResponsibilityProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const SocialResponsibility: React.FC<SocialResponsibilityProps> = ({ isArabic, onNavigate }) => {
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

  const socialPrinciples = [
    {
      icon: Users,
      title: { en: 'Community Engagement', ar: 'المشاركة المجتمعية' },
      description: { en: 'Building strong relationships with local communities', ar: 'بناء علاقات قوية مع المجتمعات المحلية' }
    },
    {
      icon: GraduationCap,
      title: { en: 'Education & Training', ar: 'التعليم والتدريب' },
      description: { en: 'Investing in education and skills development', ar: 'الاستثمار في التعليم وتطوير المهارات' }
    },
    {
      icon: HandHeart,
      title: { en: 'Community Support', ar: 'دعم المجتمع' },
      description: { en: 'Supporting local initiatives and development', ar: 'دعم المبادرات المحلية والتنمية' }
    },
    {
      icon: UserCheck,
      title: { en: 'Employee Wellbeing', ar: 'رفاهية الموظفين' },
      description: { en: 'Ensuring the health and safety of our workforce', ar: 'ضمان صحة وسلامة قوتنا العاملة' }
    }
  ];

  const communityPrograms = [
    { en: 'Educational Scholarships and Grants', ar: 'المنح الدراسية والمساعدات التعليمية' },
    { en: 'Vocational Training and Skills Development', ar: 'التدريب المهني وتطوير المهارات' },
    { en: 'Healthcare Support and Medical Assistance', ar: 'الدعم الصحي والمساعدة الطبية' },
    { en: 'Infrastructure Development Projects', ar: 'مشاريع تطوير البنية التحتية' },
    { en: 'Environmental Awareness Programs', ar: 'برامج التوعية البيئية' },
    { en: 'Youth Development and Mentorship', ar: 'تنمية الشباب والإرشاد' },
    { en: 'Women Empowerment Initiatives', ar: 'مبادرات تمكين المرأة' },
    { en: 'Local Business Support and Development', ar: 'دعم وتطوير الأعمال المحلية' },
    { en: 'Cultural Heritage Preservation', ar: 'الحفاظ على التراث الثقافي' },
    { en: 'Emergency Relief and Disaster Response', ar: 'الإغاثة الطارئة والاستجابة للكوارث' },
    { en: 'Sports and Recreation Facilities', ar: 'المرافق الرياضية والترفيهية' },
    { en: 'Community Health and Wellness Programs', ar: 'برامج الصحة والعافية المجتمعية' }
  ];

  const employeePrograms = [
    { en: 'Comprehensive Health Insurance Coverage', ar: 'تغطية تأمين صحي شاملة' },
    { en: 'Professional Development and Training', ar: 'التطوير المهني والتدريب' },
    { en: 'Work-Life Balance Initiatives', ar: 'مبادرات التوازن بين العمل والحياة' },
    { en: 'Employee Recognition and Rewards', ar: 'تقدير ومكافآت الموظفين' },
    { en: 'Diversity and Inclusion Programs', ar: 'برامج التنوع والشمول' },
    { en: 'Mental Health and Wellness Support', ar: 'دعم الصحة النفسية والعافية' }
  ];

  const partnerOrganizations = [
    { en: 'Jordan Ministry of Education', ar: 'وزارة التربية والتعليم الأردنية' },
    { en: 'Jordan Ministry of Health', ar: 'وزارة الصحة الأردنية' },
    { en: 'Local NGOs and Community Organizations', ar: 'المنظمات غير الحكومية والمجتمعية المحلية' },
    { en: 'Universities and Educational Institutions', ar: 'الجامعات والمؤسسات التعليمية' }
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
              {isArabic ? 'المسؤولية الاجتماعية' : 'Social Responsibility'}
            </span>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isArabic ? 'المسؤولية الاجتماعية' : 'Social Responsibility'}
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
              {isArabic 
                ? 'نحن ملتزمون بتحسين حياة المجتمعات التي نعمل فيها وإحداث تأثير إيجابي دائم'
                : 'We are committed to improving the lives of communities where we operate and creating lasting positive impact'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Social Principles */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {socialPrinciples.map((principle, index) => {
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
                  <Heart className="w-8 h-8 text-[#005670] mr-3" />
                  {isArabic ? 'التزامنا الاجتماعي' : 'Our Social Commitment'}
                </h2>
                
                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    At AES Jordan, social responsibility is fundamental to our business philosophy. We believe that our success is intrinsically linked to the wellbeing and prosperity of the communities where we operate. Our commitment extends beyond providing reliable energy to actively contributing to social and economic development.
                  </p>
                  
                  <div className="bg-[#005670] bg-opacity-5 border-l-4 border-[#005670] p-6 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed font-medium">
                      We invest in education, healthcare, infrastructure, and community development programs that create lasting positive change and empower local communities to thrive.
                    </p>
                  </div>
                </div>
              </div>

              {/* Community Programs */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#231f20] mb-6 flex items-center">
                  <Users className="w-6 h-6 text-[#005670] mr-3" />
                  {isArabic ? 'برامج المجتمع' : 'Community Programs'}
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our community programs are designed to address local needs and priorities, working closely with community leaders and organizations to ensure our initiatives create meaningful and sustainable impact.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {communityPrograms.map((program, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#005670] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {isArabic ? program.ar : program.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Employee Programs */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#231f20] mb-6 flex items-center">
                  <UserCheck className="w-6 h-6 text-[#005670] mr-3" />
                  {isArabic ? 'برامج الموظفين' : 'Employee Programs'}
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  We believe that taking care of our employees is essential to our success. Our comprehensive employee programs focus on health, wellbeing, professional development, and creating an inclusive workplace culture.
                </p>

                <div className="space-y-3">
                  {employeePrograms.map((program, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#005670] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">
                        {isArabic ? program.ar : program.en}
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
                    href="http://www.moe.gov.jo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#005670] hover:text-[#004558] transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="text-sm">Ministry of Education</span>
                  </a>
                  
                  <a 
                    href="http://www.moh.gov.jo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#005670] hover:text-[#004558] transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="text-sm">Ministry of Health</span>
                  </a>
                </div>
              </div>

              {/* Community Impact */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  {isArabic ? 'التأثير المجتمعي' : 'Community Impact'}
                </h4>
                
                <p className="text-white text-opacity-90 mb-4 text-sm">
                  {isArabic 
                    ? 'نقيس ونقدم تقارير عن تأثيرنا الاجتماعي لضمان فعالية برامجنا المجتمعية'
                    : 'We measure and report on our social impact to ensure the effectiveness of our community programs'
                  }
                </p>
                
                <a 
                  href="#"
                  className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200"
                >
                  {isArabic ? 'تقرير التأثير الاجتماعي' : 'Social Impact Report'}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>

              {/* Partner Organizations */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#231f20] mb-4 flex items-center">
                  <Building className="w-5 h-5 text-[#005670] mr-2" />
                  {isArabic ? 'المنظمات الشريكة' : 'Partner Organizations'}
                </h4>
                
                <div className="space-y-3">
                  {partnerOrganizations.map((partner, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#005670] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {isArabic ? partner.ar : partner.en}
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
                onClick={() => onNavigate?.('sustainability-stakeholder')}
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-[#005670] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {isArabic ? 'علاقات أصحاب المصلحة' : 'Stakeholder Relations'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialResponsibility;