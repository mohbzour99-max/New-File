import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Shield, Leaf, Users, Handshake, Building2, Truck, CheckCircle, Zap, Heart, Star, Smile, ChevronLeft, Target, Globe } from 'lucide-react';

interface SustainabilityMainProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const SustainabilityMain: React.FC<SustainabilityMainProps> = ({ isArabic, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  // Static data - no need for memoization
  const coreValues = [
    {
      icon: Shield,
      title: { en: 'PUT SAFETY FIRST', ar: 'السلامة أولاً' },
      description: { 
        en: 'We always put safety first—for our people, contractors and communities.',
        ar: 'نضع السلامة دائماً في المقدمة - لموظفينا ومقاولينا ومجتمعاتنا.'
      }
    },
    {
      icon: CheckCircle,
      title: { en: 'ACT WITH INTEGRITY', ar: 'التصرف بنزاهة' },
      description: { 
        en: 'Integrity is at the core of everything we do—how we conduct ourselves and how we interact with our stakeholders.',
        ar: 'النزاهة هي جوهر كل ما نقوم به - كيف نتصرف وكيف نتفاعل مع أصحاب المصلحة.'
      }
    },
    {
      icon: Handshake,
      title: { en: 'HONOR COMMITMENTS', ar: 'الوفاء بالالتزامات' },
      description: { 
        en: 'We honor our commitments to our customers, teammates, communities, owners, suppliers and partners, and we encourage our businesses to make positive contributions to society.',
        ar: 'نحن نفي بالتزاماتنا تجاه عملائنا وزملائنا ومجتمعاتنا والملاك والموردين والشركاء، ونشجع أعمالنا على تقديم مساهمات إيجابية للمجتمع.'
      }
    },
    {
      icon: Star,
      title: { en: 'STRIVE FOR EXCELLENCE', ar: 'السعي للتميز' },
      description: { 
        en: 'We strive to be the best in all that we do and to perform at world-class levels.',
        ar: 'نسعى لأن نكون الأفضل في كل ما نقوم به وأن نؤدي على مستويات عالمية.'
      }
    },
    {
      icon: Smile,
      title: { en: 'HAVE FUN THROUGH WORK', ar: 'الاستمتاع من خلال العمل' },
      description: { 
        en: 'Work can be fun, fulfilling and exciting. We appreciate being part of a team that is making a difference and we will work to grow and strengthen our operations.',
        ar: 'يمكن أن يكون العمل ممتعاً ومُرضياً ومثيراً. نحن نقدر كوننا جزءاً من فريق يحدث فرقاً وسنعمل على تنمية وتقوية عملياتنا.'
      }
    }
  ];

  const sustainabilityFeatures = [
    {
      id: 'sustainability-safety',
      icon: Shield,
      title: { en: 'Safety First', ar: 'السلامة أولاً' },
      description: { 
        en: 'Prioritizing safety for our people, contractors, and communities',
        ar: 'إعطاء الأولوية للسلامة لموظفينا ومقاولينا ومجتمعاتنا'
      }
    },
    {
      id: 'sustainability-environment',
      icon: Leaf,
      title: { en: 'Environmental Protection', ar: 'حماية البيئة' },
      description: { 
        en: 'Protecting the environment through sustainable practices',
        ar: 'حماية البيئة من خلال الممارسات المستدامة'
      }
    },
    {
      id: 'sustainability-social',
      icon: Users,
      title: { en: 'Social Responsibility', ar: 'المسؤولية الاجتماعية' },
      description: { 
        en: 'Contributing to community development and social welfare',
        ar: 'المساهمة في التنمية المجتمعية والرفاه الاجتماعي'
      }
    },
    {
      id: 'sustainability-stakeholder',
      icon: Handshake,
      title: { en: 'Stakeholder Relations', ar: 'علاقات أصحاب المصلحة' },
      description: { 
        en: 'Building strong relationships with all stakeholders',
        ar: 'بناء علاقات قوية مع جميع أصحاب المصلحة'
      }
    },
    {
      id: 'sustainability-assets',
      icon: Building2,
      title: { en: 'Asset Management', ar: 'إدارة الأصول' },
      description: { 
        en: 'Optimizing asset performance and lifecycle management',
        ar: 'تحسين أداء الأصول وإدارة دورة الحياة'
      }
    },
    {
      id: 'sustainability-supply',
      icon: Truck,
      title: { en: 'Supply Chain Management', ar: 'إدارة سلسلة التوريد' },
      description: { 
        en: 'Ensuring sustainable and responsible supply chain practices',
        ar: 'ضمان ممارسات سلسلة التوريد المستدامة والمسؤولة'
      }
    }
  ];

  // Simplified carousel logic
  const valuesPerSlide = 3;
  const totalSlides = Math.ceil(coreValues.length / valuesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const getCurrentSlideValues = () => {
    const startIndex = currentSlide * valuesPerSlide;
    return coreValues.slice(startIndex, startIndex + valuesPerSlide);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#005670] via-[#004558] to-[#003445] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <div className="flex items-center text-white text-opacity-80 mb-8 text-sm">
            <button 
              onClick={() => onNavigate?.('home')}
              className="hover:text-white transition-colors cursor-pointer flex items-center"
            >
              {isArabic ? 'الرئيسية' : 'Home'}
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">
              {isArabic ? 'الاستدامة' : 'Sustainability'}
            </span>
          </div>

          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {isArabic ? 'الاستدامة' : 'Sustainability'}
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              {isArabic 
                ? 'كشركة طاقة مستدامة رائدة، يوفر مزيجنا المتنوع من مصادر التوليد القوة والمرونة للتكيف مع احتياجات السوق المحلية والإقليمية'
                : 'As a leading sustainable power company, our diverse mix of generation sources provides us the strength and flexibility to adapt to local and regional market needs'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="inline-flex items-center px-6 py-3 bg-[#005670] bg-opacity-10 rounded-full mb-6">
                <Leaf className="w-5 h-5 text-[#005670] mr-2" />
                <span className="text-[#005670] font-semibold text-sm tracking-wide uppercase">
                  {isArabic ? 'التزامنا' : 'Our Commitment'}
                </span>
              </div>
              
              <h2 className="text-4xl font-bold text-[#231f20] mb-8 leading-tight">
                {isArabic ? 'أكثر من مجرد توفير الطاقة' : 'More Than Just Providing Power'}
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {isArabic
                    ? 'كشركة طاقة مستدامة رائدة، يوفر مزيجنا المتنوع من مصادر التوليد القوة والمرونة للتكيف مع احتياجات السوق المحلية والإقليمية، وتعظيم كفاءة المحطة وتوفير كهرباء موثوقة وبأسعار معقولة.'
                    : 'As a leading sustainable power company, our diverse mix of generation sources provides us the strength and flexibility to adapt to local and regional market needs, maximize plant efficiency and deliver reliable, affordable electricity.'
                  }
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  {isArabic
                    ? 'نؤمن أن أعمالنا تفعل أكثر بكثير من مجرد توفير الطاقة. تحسين الحياة وإحداث فرق دائم في المجتمعات التي تعمل فيها أعمالنا كان دائماً جزءاً من قيمنا ومهمتنا.'
                    : 'We believe that our businesses do much more than just provide power. Improving lives and making a lasting difference in the communities in which our businesses operate has always been part of our values and mission.'
                  }
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  {isArabic
                    ? 'تركز أنشطة الاستدامة لدينا على مجالات محددة، أو جوانب مادية، في سياق خمس مبادرات استراتيجية واسعة: التميز المالي، التميز التشغيلي، الأداء البيئي، إشراك أصحاب المصلحة وموظفو AES.'
                    : 'Our sustainability activities focus on specific areas, or material aspects, within the context of five broad strategic initiatives: Financial Excellence, Operational Excellence, Environmental Performance, Stakeholder Engagement and AES People.'
                  }
                </p>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <img
                src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt={isArabic ? 'الاستدامة' : 'Sustainability'}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#231f20] mb-6">
              {isArabic ? 'شركة مبنية على القيم، مستدامة بالقيم' : 'A Company Built on Values, Sustained by Values'}
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              {isArabic
                ? 'قيمنا هي في قلب عملياتنا ونؤمن أن هذه القيم تميزنا عن الآخرين في صناعتنا. كل يوم، يسترشد موظفونا وأعمالنا حول العالم بالقيم الأساسية التالية:'
                : 'Our values are at the heart of our operations and we believe these values set us apart from others in our industry. Every day, our people and businesses around the world are guided by the following core values:'
              }
            </p>
          </div>

          {/* Values Carousel */}
          <div className="relative mb-16">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg transition-all duration-300 z-20 ${
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
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg transition-all duration-300 z-20 ${
                currentSlide === totalSlides - 1 
                  ? 'text-gray-300 cursor-not-allowed' 
                  : 'text-[#005670] hover:bg-[#005670] hover:text-white'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden mx-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getCurrentSlideValues().map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div
                      key={`${currentSlide}-${index}`}
                      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 min-h-[320px]"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#005670] rounded-full mb-6">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#005670] mb-4">
                        {isArabic ? value.title.ar : value.title.en}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {isArabic ? value.description.ar : value.description.en}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-[#005670] shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Advantage Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#231f20] mb-6">
              {isArabic ? 'ميزة مستدامة' : 'A Sustainable Advantage'}
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Our Business Model */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#005670] rounded-full mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#231f20] mb-4">
                {isArabic ? 'نموذج أعمالنا' : 'Our Business Model'}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {isArabic
                  ? 'نموذج أعمالنا هو أن نكون شركة الطاقة المستدامة الرائدة في العالم التي توفر بأمان طاقة موثوقة وبأسعار معقولة.'
                  : 'Our business model is to be the world\'s leading sustainable power company that safely provides reliable, affordable energy.'
                }
              </p>
            </div>

            {/* Our Footprint */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#005670] rounded-full mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#231f20] mb-4">
                {isArabic ? 'بصمتنا' : 'Our Footprint'}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {isArabic
                  ? 'نركز على تقديم خدمات ومنتجات تنافسية في أسواقنا الأساسية، مع السعي أيضاً لفرص تطوير الأعمال المناسبة في أسواق إضافية.'
                  : 'We focus on delivering competitive services and products in our core markets, while also pursuing appropriate business development opportunities in additional markets.'
                }
              </p>
            </div>

            {/* Our People */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#005670] rounded-full mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#231f20] mb-4">
                {isArabic ? 'موظفونا' : 'Our People'}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {isArabic
                  ? 'في كل مشروع تجاري، يتشارك موظفونا شغفاً لمساعدة تلبية احتياجات الطاقة الحالية والمتزايدة في العالم.'
                  : 'On every business venture, our people share a passion to help meet the world\'s current and increasing energy needs.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Areas */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#231f20] mb-6">
              {isArabic ? 'مجالات الاستدامة' : 'Sustainability Areas'}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {isArabic
                ? 'استكشف مجالات التركيز الرئيسية لجهود الاستدامة لدينا'
                : 'Explore the key focus areas of our sustainability efforts'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sustainabilityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.id}
                  className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer border-2 border-transparent hover:border-[#005670] hover:border-opacity-20 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => onNavigate?.(feature.id)}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#005670] group-hover:bg-[#004558] rounded-full mb-6 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#231f20] group-hover:text-[#005670] mb-4 transition-colors duration-300">
                    {isArabic ? feature.title.ar : feature.title.en}
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed mb-6 transition-colors duration-300">
                    {isArabic ? feature.description.ar : feature.description.en}
                  </p>
                  
                  <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#005670] font-semibold text-sm mr-2">
                      {isArabic ? 'اقرأ المزيد' : 'Learn More'}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#005670] transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#005670] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              {isArabic ? 'انضم إلى رحلة الاستدامة' : 'Join Our Sustainability Journey'}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              {isArabic
                ? 'تعرف على كيفية مساهمتك في مستقبل طاقة مستدام في الأردن'
                : 'Learn how you can contribute to a sustainable energy future in Jordan'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => onNavigate?.('careers')}
                className="inline-flex items-center bg-white text-[#005670] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isArabic ? 'انضم إلى فريقنا' : 'Join Our Team'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button 
                onClick={() => onNavigate?.('contact')}
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-[#005670] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
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

export default SustainabilityMain;