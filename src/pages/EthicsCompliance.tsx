import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Shield, Users, BookOpen, Phone, Globe, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';

interface EthicsComplianceProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const EthicsCompliance: React.FC<EthicsComplianceProps> = ({ isArabic, onNavigate }) => {
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

  const keyFeatures = [
    {
      icon: Shield,
      title: { en: 'Code of Conduct', ar: 'مدونة السلوك' },
      description: { en: '"Words to Action" - Our comprehensive ethical framework', ar: '"من الكلمات إلى الأفعال" - إطارنا الأخلاقي الشامل' }
    },
    {
      icon: Phone,
      title: { en: 'Global Helpline', ar: 'الخط الساخن العالمي' },
      description: { en: '24/7 confidential support and guidance', ar: 'دعم وإرشاد سري على مدار الساعة' }
    },
    {
      icon: BookOpen,
      title: { en: 'Training Programs', ar: 'برامج التدريب' },
      description: { en: 'Regular ethics and compliance training for all employees', ar: 'تدريب منتظم على الأخلاق والامتثال لجميع الموظفين' }
    },
    {
      icon: Users,
      title: { en: 'Stakeholder Empowerment', ar: 'تمكين أصحاب المصلحة' },
      description: { en: 'Encouraging accountability and ethical behavior', ar: 'تشجيع المساءلة والسلوك الأخلاقي' }
    }
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
              onClick={() => onNavigate?.('about')}
              className="hover:text-white transition-colors duration-200"
            >
              {isArabic ? 'من نحن' : 'About Us'}
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">
              {isArabic ? 'الأخلاق والامتثال' : 'Ethics and Compliance'}
            </span>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isArabic ? 'الأخلاق والامتثال' : 'Ethics and Compliance'}
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
              {isArabic 
                ? 'الحفاظ على أعلى معايير النزاهة والسلوك الأخلاقي في جميع عملياتنا'
                : 'Maintaining the highest standards of integrity and ethical conduct across all our operations'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {keyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`text-center transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#005670] rounded-full mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#231f20] mb-3">
                    {isArabic ? feature.title.ar : feature.title.en}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isArabic ? feature.description.ar : feature.description.en}
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
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 lg:p-12 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  The AES Jordan Ethics and Compliance Program is an integral part of our business and culture which is in lined with AES Corp ethics and compliance program, helping to define our business practices and corporate expectations worldwide.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  We are registered under the Jordan legislation and believe it is our duty and responsibility to conduct business with the highest level of integrity, ethics, and compliance in Jordan.
                </p>
                
                <div className="bg-[#005670] bg-opacity-5 border-l-4 border-[#005670] p-6 rounded-r-lg mb-8">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    As evidence of this commitment, we have a Code of Conduct entitled From{' '}
                    <span className="font-semibold text-[#005670]">"Words To Action,"</span>{' '}
                    which represents a well-defined process to encourage internal and external stakeholders to bring matters of concern to the company's attention for prompt resolution. Our people and stakeholders are empowered with a strong sense of ownership and accountability for their work, and we fully expect each person to adhere to our corporate values.
                  </p>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  The AES Corporation has established a global helpline phone and online tool{' '}
                  <a 
                    href="https://www.aeshelpline.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#005670] hover:text-[#004558] font-semibold inline-flex items-center transition-colors duration-200"
                  >
                    www.aeshelpline.com
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>{' '}
                  that serves as a confidential channel for expressing concerns. Our employees are encouraged to use the helpline for guidance regarding legal or regulatory requirements, clarification of AES policies or procedures and for counsel on appropriate behavior.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  The Ethics and Compliance Program conducts regular training on a variety of ethics and compliance issues including AES corporate values, the Foreign Corrupt Practices Act and conflicts of interest. In addition, the AES Ethics Champions Program conducts employee training sessions using actual AES business issues and problems, so that participants can discuss how AES values and policies are applied in real-world situations.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  AES also holds its business partners and contractors to high ethical standards. Each partner undergoes a thorough due diligence process, and strict compliance language is included in contacts, where appropriate. Compliance language may address such issues as corruption, influence peddling, legal and regulatory compliance and reporting requirements. Compliance Officers work closely with business partners, contractors and project development teams to identify potential ethical concerns and resolve issues before agreements or contracts are signed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#231f20] mb-6">
              {isArabic ? 'تعرف على المزيد عن نبراس الأردن' : 'Learn More About AES Jordan'}
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              {isArabic
                ? 'اكتشف كيف نحافظ على أعلى معايير النزاهة في جميع جوانب أعمالنا'
                : 'Discover how we maintain the highest standards of integrity across all aspects of our business'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => onNavigate?.('about-mission-vision-values')}
                className="inline-flex items-center bg-[#005670] hover:bg-[#004558] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isArabic ? 'مهمتنا وقيمنا' : 'Our Mission & Values'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button 
                onClick={() => onNavigate?.('contact')}
                className="inline-flex items-center border-2 border-[#005670] text-[#005670] hover:bg-[#005670] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {isArabic ? 'تواصل معنا' : 'Contact Us'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EthicsCompliance;