import React, { useState, useEffect } from 'react';
import { Shield, Handshake, Heart, Star, Zap, MapPin, Clock, Users, DollarSign, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface CareersProps {
  isArabic: boolean;
  onNavigate: (page: string, jobId?: number) => void;
}

const Careers: React.FC<CareersProps> = ({ isArabic, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const companyValues = [
    {
      icon: Shield,
      title: {
        en: "PUT SAFETY FIRST",
        ar: "السلامة أولاً"
      },
      description: {
        en: "We always put safety first—for our people, contractors and communities.",
        ar: "نضع السلامة دائماً في المقدمة - لموظفينا ومقاولينا ومجتمعاتنا."
      }
    },
    {
      icon: Handshake,
      title: {
        en: "ACT WITH INTEGRITY",
        ar: "التصرف بنزاهة"
      },
      description: {
        en: "Integrity is at the core of everything we do—how we conduct ourselves and how we interact with our stakeholders.",
        ar: "النزاهة هي جوهر كل ما نقوم به - كيف نتصرف وكيف نتفاعل مع أصحاب المصلحة."
      }
    },
    {
      icon: Heart,
      title: {
        en: "HONOUR COMMITMENTS",
        ar: "الوفاء بالالتزامات"
      },
      description: {
        en: "We honour our commitments to our customers, teammates, communities, owners, suppliers and partners, and we encourage our businesses to make positive contributions to society.",
        ar: "نحن نفي بالتزاماتنا تجاه عملائنا وزملائنا ومجتمعاتنا والملاك والموردين والشركاء، ونشجع أعمالنا على تقديم مساهمات إيجابية للمجتمع."
      }
    },
    {
      icon: Star,
      title: {
        en: "STRIVE FOR EXCELLENCE",
        ar: "السعي للتميز"
      },
      description: {
        en: "We strive to be the best in all that we do and to perform at world-class levels.",
        ar: "نسعى لأن نكون الأفضل في كل ما نقوم به وأن نؤدي على مستويات عالمية."
      }
    },
    {
      icon: Zap,
      title: {
        en: "HAVE FUN THROUGH WORK",
        ar: "الاستمتاع من خلال العمل"
      },
      description: {
        en: "Work can be fun, fulfilling and exciting. We appreciate being part of a team that is making a difference and we will work to grow and strengthen our operations.",
        ar: "يمكن أن يكون العمل ممتعاً ومُرضياً ومثيراً. نحن نقدر كوننا جزءاً من فريق يحدث فرقاً وسنعمل على تنمية وتقوية عملياتنا."
      }
    }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: {
        en: "Senior Electrical Engineer",
        ar: "مهندس كهرباء أول"
      },
      department: "Engineering",
      location: {
        en: "Amman, Jordan",
        ar: "عمان، الأردن"
      },
      type: {
        en: "Full-time",
        ar: "دوام كامل"
      },
      experience: {
        en: "5+ years",
        ar: "5+ سنوات"
      },
      salary: {
        en: "Competitive",
        ar: "راتب تنافسي"
      },
      description: {
        en: "We are seeking a Senior Electrical Engineer to join our dynamic team. The successful candidate will be responsible for designing, developing, and maintaining electrical systems for our power generation facilities.",
        ar: "نحن نبحث عن مهندس كهرباء أول للانضمام إلى فريقنا الديناميكي. سيكون المرشح الناجح مسؤولاً عن تصميم وتطوير وصيانة الأنظمة الكهربائية لمرافق توليد الطاقة لدينا."
      },
      requirements: [
        {
          en: "Bachelor's degree in Electrical Engineering",
          ar: "درجة البكالوريوس في الهندسة الكهربائية"
        },
        {
          en: "Minimum 5 years of experience in power generation",
          ar: "خبرة لا تقل عن 5 سنوات في توليد الطاقة"
        },
        {
          en: "Strong knowledge of electrical systems and safety protocols",
          ar: "معرفة قوية بالأنظمة الكهربائية وبروتوكولات السلامة"
        },
        {
          en: "Excellent communication skills in English and Arabic",
          ar: "مهارات تواصل ممتازة باللغتين الإنجليزية والعربية"
        }
      ]
    },
    {
      id: 2,
      title: {
        en: "Operations Manager",
        ar: "مدير العمليات"
      },
      department: "Operations",
      location: {
        en: "Amman, Jordan",
        ar: "عمان، الأردن"
      },
      type: {
        en: "Full-time",
        ar: "دوام كامل"
      },
      experience: {
        en: "8+ years",
        ar: "8+ سنوات"
      },
      salary: {
        en: "Competitive",
        ar: "راتب تنافسي"
      },
      description: {
        en: "Join our operations team as an Operations Manager. You will oversee daily operations, ensure compliance with safety standards, and lead a team of skilled professionals in our power generation facility.",
        ar: "انضم إلى فريق العمليات لدينا كمدير عمليات. ستشرف على العمليات اليومية وتضمن الامتثال لمعايير السلامة وتقود فريقاً من المهنيين المهرة في منشأة توليد الطاقة لدينا."
      },
      requirements: [
        {
          en: "Bachelor's degree in Engineering or related field",
          ar: "درجة البكالوريوس في الهندسة أو مجال ذي صلة"
        },
        {
          en: "Minimum 8 years of operations management experience",
          ar: "خبرة لا تقل عن 8 سنوات في إدارة العمليات"
        },
        {
          en: "Strong leadership and team management skills",
          ar: "مهارات قيادة وإدارة فريق قوية"
        },
        {
          en: "Knowledge of power plant operations and maintenance",
          ar: "معرفة بعمليات وصيانة محطات الطاقة"
        }
      ]
    },
    {
      id: 3,
      title: {
        en: "Environmental Specialist",
        ar: "أخصائي بيئي"
      },
      department: "Environmental",
      location: {
        en: "Amman, Jordan",
        ar: "عمان، الأردن"
      },
      type: {
        en: "Full-time",
        ar: "دوام كامل"
      },
      experience: {
        en: "3+ years",
        ar: "3+ سنوات"
      },
      salary: {
        en: "Competitive",
        ar: "راتب تنافسي"
      },
      description: {
        en: "We are looking for an Environmental Specialist to ensure our operations comply with environmental regulations and to develop sustainability initiatives that align with our commitment to environmental protection.",
        ar: "نحن نبحث عن أخصائي بيئي لضمان امتثال عملياتنا للوائح البيئية ولتطوير مبادرات الاستدامة التي تتماشى مع التزامنا بحماية البيئة."
      },
      requirements: [
        {
          en: "Bachelor's degree in Environmental Science or related field",
          ar: "درجة البكالوريوس في العلوم البيئية أو مجال ذي صلة"
        },
        {
          en: "Minimum 3 years of environmental compliance experience",
          ar: "خبرة لا تقل عن 3 سنوات في الامتثال البيئي"
        },
        {
          en: "Knowledge of environmental regulations and standards",
          ar: "معرفة باللوائح والمعايير البيئية"
        },
        {
          en: "Strong analytical and problem-solving skills",
          ar: "مهارات تحليلية وحل مشاكل قوية"
        }
      ]
    }
  ];

  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(companyValues.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const getCurrentSlideCards = () => {
    const startIndex = currentSlide * cardsPerSlide;
    return companyValues.slice(startIndex, startIndex + cardsPerSlide);
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
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {isArabic ? 'الرئيسية' : 'Home'}
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">
              {isArabic ? 'الوظائف' : 'Careers'}
            </span>
          </div>

          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {isArabic ? 'الوظائف' : 'Careers'}
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              {isArabic 
                ? 'نحن ملتزمون بريادة طاقة المستقبل على نطاق عالمي'
                : 'We are committed to pioneering the energy of the future on a global scale'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Energise Your Career Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-[#231f20] mb-8">
                {isArabic ? 'انطلق بمسيرتك المهنية' : 'Energise your career'}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {isArabic
                  ? 'قوتنا العاملة المكونة من 170 شخصاً ملتزمة بالتميز التشغيلي وتلبية احتياجات الطاقة المتغيرة في العالم. يتشارك موظفونا هدفاً مشتركاً في توفير طاقة مستدامة وبأسعار معقولة للمجتمع الذي نعمل فيه. قوتنا العاملة تتكون من أفراد من خلفيات وثقافات وتخصصات متنوعة. كل يوم نعمل على تلبية احتياجات الطاقة المتزايدة في المملكة، مع توفير الفرصة للمجتمع للنمو اقتصادياً واجتماعياً من خلال ضمان توفر إمدادات كهرباء موثوقة ومسؤولة بيئياً.'
                  : 'Our workforce of 170 people is committed to operational excellence and meeting the world\'s changing power needs. Our people share a common goal of providing affordable, sustainable energy to the community in which we operate. Our workforce is comprised of individuals from diverse backgrounds, cultures and disciplines. Every day we work to meet the kingdom\'s increasing energy needs, while providing the community the opportunity to grow economically and socially by ensuring the availability of a reliable and environmentally responsible electricity supply.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why To Work with us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-full mx-auto">
            <h2 className="text-4xl font-bold text-[#231f20] mb-8">
              {isArabic ? 'لماذا العمل معنا؟' : 'Why To Work with us?'}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              {isArabic
                ? 'سواء كان موظفونا يعملون داخل توربين غازي أو محرك ديزل، فإنهم يتشاركون تجربة مشتركة محددة بالقيم التالية. قيمنا هي في قلب عملياتنا، ونعتقد أن هذه القيم تميزنا عن الآخرين في صناعتنا. كل يوم، يسترشد موظفونا وأعمالنا حول العالم بالقيم الأساسية التالية:'
                : 'Whether our people work inside of a Gas turbine, Diesel Engine, they share a common experience defined by the following values. Our values are at the heart of our operations, and we believe these values set us apart from others in our industry. Every day, our people and businesses around the world are guided by the following core values:'
              }
            </p>

            {/* Company Values Slider */}
            <div className="relative">
              <div className="overflow-hidden">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getCurrentSlideCards().map((value, index) => {
                    const IconComponent = value.icon;
                    return (
                      <div
                        key={currentSlide * cardsPerSlide + index}
                        className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 text-center h-64 ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                      >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#005670] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-lg font-bold text-[#005670] mb-3 leading-tight">
                          {isArabic ? value.title.ar : value.title.en}
                        </h3>
                        
                        <p className="text-gray-700 leading-relaxed text-sm px-2">
                          {isArabic ? value.description.ar : value.description.en}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg transition-all duration-300 ${
                  currentSlide === 0 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'text-[#005670] hover:bg-[#005670] hover:text-white'
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 1}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg transition-all duration-300 ${
                  currentSlide === totalSlides - 1 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'text-[#005670] hover:bg-[#005670] hover:text-white'
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-[#005670]' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Opportunities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#231f20] mb-6">
              {isArabic ? 'الفرص الوظيفية' : 'Job Opportunities'}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {isArabic
                ? 'اكتشف الفرص المهنية المتاحة وانضم إلى فريقنا المتميز'
                : 'Discover available career opportunities and join our exceptional team'
              }
            </p>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3">
                    <h3 className="text-2xl font-bold text-[#231f20] mb-3">
                      {isArabic ? job.title.ar : job.title.en}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {isArabic ? job.location.ar : job.location.en}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {isArabic ? job.type.ar : job.type.en}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {isArabic ? job.experience.ar : job.experience.en}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {isArabic ? job.salary.ar : job.salary.en}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {isArabic ? job.description.ar : job.description.en}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-[#231f20] mb-2">
                        {isArabic ? 'المتطلبات:' : 'Requirements:'}
                      </h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-gray-600 text-sm flex items-start">
                            <span className="w-2 h-2 bg-[#005670] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {isArabic ? req.ar : req.en}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1 flex flex-col justify-between">
                    <div className="text-center lg:text-right mb-4">
                      <div className="inline-block px-3 py-1 bg-[#005670] bg-opacity-10 text-[#005670] rounded-full text-sm font-medium mb-2">
                        {job.department}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => onNavigate('apply-job', job.id)}
                      className="w-full bg-[#005670] hover:bg-[#004558] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                    >
                      {isArabic ? 'تقدم الآن' : 'Apply Now'}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {jobOpenings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">
                {isArabic ? 'لا توجد وظائف متاحة حالياً' : 'No jobs currently available'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Careers;