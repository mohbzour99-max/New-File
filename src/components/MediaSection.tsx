import React, { useEffect, useRef, useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface MediaSectionProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const MediaSection: React.FC<MediaSectionProps> = ({ isArabic, onNavigate }) => {
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

  const newsItems = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      date: '2024-01-15',
      title: { 
        en: 'Nibras Jordan Celebrates 10 Years of Reliable Power Generation',
        ar: 'نبراس الأردن تحتفل بـ 10 سنوات من توليد الطاقة الموثوق'
      },
      description: { 
        en: 'Amman East and Levant Power Plants continue to provide over 8% of Jordan\'s electricity with exceptional reliability.',
        ar: 'محطتا عمان الشرقية وبلاد الشام للطاقة تواصلان توفير أكثر من 8% من كهرباء الأردن بموثوقية استثنائية.'
      }
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      date: '2024-01-10',
      title: { 
        en: 'Nibras Jordan Achieves Record Performance in 2023',
        ar: 'نبراس الأردن تحقق أداءً قياسياً في 2023'
      },
      description: { 
        en: '641 MW combined capacity delivers consistent, efficient power generation exceeding operational targets.',
        ar: 'القدرة المجمعة البالغة 641 ميجاواط توفر توليد طاقة ثابت وفعال يتجاوز الأهداف التشغيلية.'
      }
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      date: '2024-01-05',
      title: { 
        en: 'Environmental Compliance Achievement at Nibras Jordan Facilities',
        ar: 'إنجاز الامتثال البيئي في منشآت نبراس الأردن'
      },
      description: { 
        en: 'Both power plants maintain full compliance with World Bank, JBIC, and OPIC environmental guidelines.',
        ar: 'كلا محطتي الطاقة تحافظان على الامتثال الكامل للمبادئ التوجيهية البيئية للبنك الدولي وJBIC وOPIC.'
      }
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      date: '2023-12-28',
      title: { 
        en: 'International Financing Success Supports Nibras Jordan Growth',
        ar: 'نجاح التمويل الدولي يدعم نمو نبراس الأردن'
      },
      description: { 
        en: 'Strong partnerships with OPIC, JBIC, EBRD, and international banks enable continued operational excellence.',
        ar: 'الشراكات القوية مع OPIC وJBIC وEBRD والبنوك الدولية تمكن من استمرار التميز التشغيلي.'
      }
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return isArabic 
      ? date.toLocaleDateString('ar-QA')
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#231f20] mb-6">
            {isArabic ? 'آخر الأخبار والإعلام' : 'Latest News & Media'}
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {isArabic
              ? 'ابق على اطلاع بالمعالم والإنجازات التشغيلية ومبادرات الاستدامة في الأردن'
              : 'Stay informed about milestones, operational achievements, and sustainability initiatives in Jordan'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={isArabic ? item.title.ar : item.title.en}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#005670] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                  <div className="flex items-center text-sm text-[#005670]">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(item.date)}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#231f20] mb-3 line-clamp-2 leading-tight">
                  {isArabic ? item.title.ar : item.title.en}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {isArabic ? item.description.ar : item.description.en}
                </p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#005670] hover:text-[#004558] font-semibold transition-colors duration-200 group"
                >
                  {isArabic ? 'اقرأ المزيد' : 'Read More'}
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            onClick={() => onNavigate?.('news')}
            className="inline-flex items-center bg-[#005670] hover:bg-[#004558] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {isArabic ? 'جميع الأخبار' : 'View All News'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;