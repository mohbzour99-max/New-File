import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Award, Calendar, Trophy, Star, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface AwardsRecognitionsProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const AwardsRecognitions: React.FC<AwardsRecognitionsProps> = ({ isArabic, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedYear, setExpandedYear] = useState<string | null>('2016');
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

  const awardsData = [
    {
      year: '2016',
      title: { en: '2016 Key Awards', ar: 'الجوائز الرئيسية 2016' },
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      awards: [
        { en: 'Top Employer by the Top Employers Institute', ar: 'أفضل صاحب عمل من معهد أفضل أصحاب العمل' },
        { en: 'ISO 50001 for Energy Management', ar: 'ISO 50001 لإدارة الطاقة' },
        { en: 'ISO 50001 for Asset Management', ar: 'ISO 50001 لإدارة الأصول' },
        { en: 'Merit Award by the Jordan Electric Institute', ar: 'جائزة الاستحقاق من معهد الكهرباء الأردني' },
        { en: 'British Safety Award by British Safety Council', ar: 'جائزة السلامة البريطانية من مجلس السلامة البريطاني' },
        { en: 'ROSPA Golden Award', ar: 'جائزة ROSPA الذهبية' },
        { en: 'Asset management system for AES Jordan PSC - Amman East', ar: 'نظام إدارة الأصول لشركة AES الأردن - عمان الشرقية' }
      ],
      logos: [
        { name: 'Top Employers', src: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop' },
        { name: 'SGS', src: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop' },
        { name: 'British Safety Council', src: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop' }
      ]
    },
    {
      year: '2015',
      title: { en: '2015 Key Awards', ar: 'الجوائز الرئيسية 2015' },
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      awards: [
        { en: 'Innovation Congress 2nd place', ar: 'المركز الثاني في مؤتمر الابتكار' },
        { en: 'Golden award by ministry of labor', ar: 'الجائزة الذهبية من وزارة العمل' },
        { en: 'British safety award with merits from British safety council', ar: 'جائزة السلامة البريطانية مع مرتبة الشرف من مجلس السلامة البريطاني' },
        { en: 'RoSPA golden safety award', ar: 'جائزة RoSPA الذهبية للسلامة' },
        { en: 'Best practices award combined cycle journal', ar: 'جائزة أفضل الممارسات من مجلة الدورة المركبة' },
        { en: 'Best innovation award in the Middle East by Middle East Electricity', ar: 'جائزة أفضل ابتكار في الشرق الأوسط من معرض كهرباء الشرق الأوسط' }
      ],
      logos: [
        { name: 'Top Employers', src: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop' },
        { name: 'Ministry of Labor', src: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop' }
      ]
    },
    {
      year: '2014',
      title: { en: '2014 Key Awards', ar: 'الجوائز الرئيسية 2014' },
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      awards: [
        { en: 'British safety award with merits from British safety council', ar: 'جائزة السلامة البريطانية مع مرتبة الشرف من مجلس السلامة البريطاني' },
        { en: 'RoSPA golden safety award', ar: 'جائزة RoSPA الذهبية للسلامة' },
        { en: 'Best practices award combined cycle journal', ar: 'جائزة أفضل الممارسات من مجلة الدورة المركبة' }
      ],
      logos: [
        { name: 'British Safety Council', src: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop' },
        { name: 'RoSPA', src: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop' }
      ]
    },
    {
      year: '2013',
      title: { en: '2013 Key Awards', ar: 'الجوائز الرئيسية 2013' },
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      awards: [
        { en: 'Top Gas power plants award by POWER magazine', ar: 'جائزة أفضل محطات الطاقة الغازية من مجلة POWER' },
        { en: 'Top 10 IPP in the Middle East and Africa by IFC', ar: 'ضمن أفضل 10 منتجين مستقلين للطاقة في الشرق الأوسط وأفريقيا من IFC' },
        { en: 'British safety award from British safety council', ar: 'جائزة السلامة البريطانية من مجلس السلامة البريطاني' },
        { en: 'RoSPA golden safety award', ar: 'جائزة RoSPA الذهبية للسلامة' }
      ],
      logos: [
        { name: 'POWER Magazine', src: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop' },
        { name: 'IFC', src: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop' },
        { name: 'SGS', src: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop' }
      ]
    },
    {
      year: '2011',
      title: { en: '2011 Key Awards', ar: 'الجوائز الرئيسية 2011' },
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      awards: [
        { en: 'Social security award for safety', ar: 'جائزة الضمان الاجتماعي للسلامة' },
        { en: 'ISO14001 & OHSAS 18001 certification', ar: 'شهادة ISO14001 و OHSAS 18001' }
      ],
      logos: [
        { name: 'Edison Electric Institute', src: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop' },
        { name: 'British Safety Council', src: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop' }
      ]
    }
  ];

  const toggleYear = (year: string) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

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
              {isArabic ? 'الجوائز والتقديرات' : 'Awards and Recognitions'}
            </span>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isArabic ? 'الجوائز والتقديرات' : 'Awards and Recognitions'}
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed opacity-90">
              {isArabic 
                ? 'تقدير للتميز والالتزام بأعلى معايير الجودة والسلامة'
                : 'Recognition for excellence and commitment to the highest standards of quality and safety'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section ref={sectionRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Content */}
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6">
                  <Trophy className="w-4 h-4 text-[#005670] mr-2" />
                  <span className="text-[#005670] font-medium text-sm uppercase tracking-wide">
                    {isArabic ? 'نحن أكثر من مجرد عمل' : 'WE ARE ABOUT MORE THAN WORK'}
                  </span>
                </div>
                
                <h2 className="text-4xl font-bold text-[#231f20] mb-8 leading-tight">
                  {isArabic ? 'نحن أكثر من مجرد عمل' : 'We Are About More Than Work'}
                </h2>
                
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    {isArabic
                      ? 'من خلال تحسين العمل الذي نقوم به، نسترشد بقيمنا المشتركة لوضع السلامة أولاً، والعمل بنزاهة، وتكريم الالتزامات، والسعي للتميز، والاستمتاع بالعمل.'
                      : 'By improving the work we do, we are guided by our shared values to put safety first, act with integrity, honor commitments, strive for excellence, and have fun through work.'
                    }
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    {isArabic
                      ? 'خلال سنوات عملياتها في الأردن، حصلت AES الأردن على عدد من الجوائز والتقديرات الوطنية والدولية لأول مرة في المملكة. بعضها مدرج أدناه.'
                      : 'During the years of its operations in Jordan, AES Jordan has been granted a number of national and international awards and recognitions for first time in the Kingdom. Some of them are listed below.'
                    }
                  </p>
                </div>
              </div>

              {/* Right Column - Images */}
              <div className="grid grid-cols-1 gap-6">
                {/* Images Side by Side */}
                <div className="grid grid-cols-2 gap-4">
                  {/* First Award Image */}
                  <div className="relative group">
                    <img
                      src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                      alt="Award Ceremony"
                      className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  
                  {/* Second Award Image */}
                  <div className="relative group">
                    <img
                      src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                      alt="IFC President Award Ceremony"
                      className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>
                
                {/* Caption below both images */}
                <div className="mt-3">
                  <p className="text-sm text-gray-600 text-center">
                    {isArabic 
                      ? 'مع رئيس مؤسسة التمويل الدولية جين جان كان في حفل جوائز PPP في واشنطن'
                      : 'With IFC President Jin Jan Can in PPP Award Ceremony in Washington'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards by Year */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {awardsData.map((yearData, index) => (
              <div
                key={yearData.year}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Year Header */}
                <button
                  onClick={() => toggleYear(yearData.year)}
                  className="w-full px-8 py-6 bg-gradient-to-r from-[#005670] to-[#004558] text-white flex items-center justify-between hover:from-[#004558] hover:to-[#003445] transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold">
                        {isArabic ? yearData.title.ar : yearData.title.en}
                      </h3>
                      <p className="text-white text-opacity-80 text-sm">
                        {isArabic ? `${yearData.awards.length} جوائز` : `${yearData.awards.length} Awards`}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="mr-3 text-sm font-medium">
                      {expandedYear === yearData.year 
                        ? (isArabic ? 'إخفاء' : 'Hide') 
                        : (isArabic ? 'عرض' : 'View')
                      }
                    </span>
                    {expandedYear === yearData.year ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Expandable Content */}
                <div className={`transition-all duration-500 overflow-hidden ${
                  expandedYear === yearData.year ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Awards List */}
                      <div className="lg:col-span-2">
                        <h4 className="text-xl font-bold text-[#231f20] mb-6 flex items-center">
                          <Award className="w-5 h-5 text-[#005670] mr-2" />
                          {isArabic ? 'الجوائز المحققة' : 'Achievements'}
                        </h4>
                        
                        <div className="space-y-4">
                          {yearData.awards.map((award, awardIndex) => (
                            <div key={awardIndex} className="flex items-start group">
                              <div className="w-2 h-2 bg-[#005670] rounded-full mt-3 mr-4 group-hover:scale-125 transition-transform duration-200"></div>
                              <p className="text-gray-700 leading-relaxed group-hover:text-[#005670] transition-colors duration-200">
                                {isArabic ? award.ar : award.en}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Image and Logos */}
                      <div className="space-y-6">
                        {/* Award Ceremony Image */}
                        <div>
                          <img
                            src={yearData.image}
                            alt={`${yearData.year} Awards Ceremony`}
                            className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                          />
                        </div>

                        {/* Partner Logos */}
                        <div>
                          <h5 className="text-lg font-semibold text-[#231f20] mb-4">
                            {isArabic ? 'الشركاء المانحون' : 'Awarding Partners'}
                          </h5>
                          <div className="grid grid-cols-2 gap-4">
                            {yearData.logos.map((logo, logoIndex) => (
                              <div
                                key={logoIndex}
                                className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 group cursor-pointer"
                              >
                                <img
                                  src={logo.src}
                                  alt={logo.name}
                                  className="w-full h-16 object-contain group-hover:scale-105 transition-transform duration-200"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#005670] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              {isArabic ? 'تعرف على المزيد عن نبراس الأردن' : 'Learn More About AES Jordan'}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              {isArabic
                ? 'اكتشف كيف نواصل تحقيق التميز في جميع جوانب أعمالنا'
                : 'Discover how we continue to achieve excellence across all aspects of our business'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => onNavigate?.('about-mission-vision-values')}
                className="inline-flex items-center bg-white text-[#005670] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isArabic ? 'مهمتنا وقيمنا' : 'Our Mission & Values'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button 
                onClick={() => onNavigate?.('careers')}
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-[#005670] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {isArabic ? 'انضم إلينا' : 'Join Our Team'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwardsRecognitions;