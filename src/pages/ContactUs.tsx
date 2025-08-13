import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, ChevronRight } from 'lucide-react';

interface ContactUsProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const ContactUs: React.FC<ContactUsProps> = ({ isArabic, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: { en: 'Head Office', ar: 'المكتب الرئيسي' },
      details: [
        { en: 'Amman, Jordan', ar: 'عمان، الأردن' },
        { en: 'P.O. Box 123456', ar: 'ص.ب 123456' }
      ]
    },
    {
      icon: Phone,
      title: { en: 'Phone Numbers', ar: 'أرقام الهاتف' },
      details: [
        '+962 6 123 4567',
        '+962 6 123 4568'
      ]
    },
    {
      icon: Mail,
      title: { en: 'Email Addresses', ar: 'عناوين البريد الإلكتروني' },
      details: [
        'info@nibraspower.com',
        'contact@nibraspower.com'
      ]
    },
    {
      icon: Clock,
      title: { en: 'Business Hours', ar: 'ساعات العمل' },
      details: [
        { en: 'Sunday - Thursday: 8:00 AM - 5:00 PM', ar: 'الأحد - الخميس: 8:00 ص - 5:00 م' },
        { en: 'Friday - Saturday: Closed', ar: 'الجمعة - السبت: مغلق' }
      ]
    }
  ];

  const departments = [
    { value: 'general', label: { en: 'General Inquiry', ar: 'استفسار عام' } },
    { value: 'business', label: { en: 'Business Development', ar: 'تطوير الأعمال' } },
    { value: 'careers', label: { en: 'Careers', ar: 'الوظائف' } },
    { value: 'media', label: { en: 'Media Relations', ar: 'العلاقات الإعلامية' } },
    { value: 'investor', label: { en: 'Investor Relations', ar: 'علاقات المستثمرين' } },
    { value: 'technical', label: { en: 'Technical Support', ar: 'الدعم التقني' } }
  ];

  return (
    <div className="min-h-screen bg-white">
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
              {isArabic ? 'اتصل بنا' : 'Contact Us'}
            </span>
          </div>

          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {isArabic ? 'اتصل بنا' : 'Contact Us'}
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

      {/* Contact Information */}
      <section ref={sectionRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#231f20] mb-6">
              {isArabic ? 'معلومات الاتصال' : 'Contact Information'}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {isArabic
                ? 'تواصل معنا من خلال القنوات التالية'
                : 'Get in touch with us through the following channels'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#005670] rounded-full mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#231f20] mb-4">
                    {isArabic ? info.title.ar : info.title.en}
                  </h3>
                  
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 leading-relaxed">
                        {typeof detail === 'string' ? detail : (isArabic ? detail.ar : detail.en)}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-[#231f20] mb-4">
                  {isArabic ? 'أرسل لنا رسالة' : 'Send Us a Message'}
                </h2>
                <p className="text-lg text-gray-700">
                  {isArabic
                    ? 'املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن'
                    : 'Fill out the form below and we\'ll get back to you as soon as possible'
                  }
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {isArabic ? 'الاسم الكامل' : 'Full Name'} *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent"
                        placeholder={isArabic ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {isArabic ? 'البريد الإلكتروني' : 'Email Address'} *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent"
                        placeholder={isArabic ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {isArabic ? 'رقم الهاتف' : 'Phone Number'}
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent"
                        placeholder={isArabic ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {isArabic ? 'القسم' : 'Department'} *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">
                        {isArabic ? 'اختر القسم' : 'Select Department'}
                      </option>
                      {departments.map((dept) => (
                        <option key={dept.value} value={dept.value}>
                          {isArabic ? dept.label.ar : dept.label.en}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {isArabic ? 'الرسالة' : 'Message'} *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent resize-none"
                      placeholder={isArabic ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#005670] hover:bg-[#004558] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <Send className="mr-2 w-5 h-5" />
                  {isArabic ? 'إرسال الرسالة' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-[#231f20] mb-4">
                  {isArabic ? 'موقعنا' : 'Our Location'}
                </h2>
                <p className="text-lg text-gray-700">
                  {isArabic
                    ? 'يقع مكتبنا الرئيسي في قلب عمان، الأردن'
                    : 'Our head office is located in the heart of Amman, Jordan'
                  }
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-96 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">
                    {isArabic ? 'خريطة تفاعلية' : 'Interactive Map'}
                  </p>
                  <p className="text-gray-400">
                    {isArabic ? 'عمان، الأردن' : 'Amman, Jordan'}
                  </p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-[#005670] rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  {isArabic ? 'اتصال سريع' : 'Quick Contact'}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3" />
                    <div>
                      <p className="font-semibold">{isArabic ? 'للاستفسارات العامة:' : 'General Inquiries:'}</p>
                      <p>+962 6 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3" />
                    <div>
                      <p className="font-semibold">{isArabic ? 'البريد الإلكتروني:' : 'Email:'}</p>
                      <p>info@nibraspower.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">{isArabic ? 'ساعات العمل:' : 'Business Hours:'}</p>
                      <p className="text-sm opacity-90">
                        {isArabic ? 'الأحد - الخميس: 8:00 ص - 5:00 م' : 'Sunday - Thursday: 8:00 AM - 5:00 PM'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#231f20] mb-6">
              {isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {isArabic
                ? 'إجابات على الأسئلة الأكثر شيوعاً'
                : 'Answers to the most commonly asked questions'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: { 
                  en: 'What is Nibras Jordan\'s role in Jordan\'s energy sector?',
                  ar: 'ما هو دور نبراس الأردن في قطاع الطاقة الأردني؟'
                },
                answer: { 
                  en: 'Nibras Jordan is Jordan\'s first Independent Power Producer, supplying over 8% of the country\'s electricity through our two power plants with a combined capacity of 641 MW.',
                  ar: 'نبراس الأردن هي أول منتج مستقل للطاقة في الأردن، توفر أكثر من 8% من كهرباء البلاد من خلال محطتين للطاقة بقدرة مجمعة تبلغ 641 ميجاواط.'
                }
              },
              {
                question: { 
                  en: 'How can I apply for a job at Nibras Jordan?',
                  ar: 'كيف يمكنني التقدم لوظيفة في نبراس الأردن؟'
                },
                answer: { 
                  en: 'You can view current job openings on our Careers page and submit your application online. We regularly update our job listings with new opportunities.',
                  ar: 'يمكنك عرض الوظائف المتاحة حالياً في صفحة الوظائف وتقديم طلبك عبر الإنترنت. نحدث قوائم الوظائف بانتظام بفرص جديدة.'
                }
              },
              {
                question: { 
                  en: 'What are Nibras Jordan\'s environmental commitments?',
                  ar: 'ما هي التزامات نبراس الأردن البيئية؟'
                },
                answer: { 
                  en: 'We maintain full compliance with World Bank, JBIC, and OPIC environmental guidelines, implementing advanced emission control technologies and sustainable operational practices.',
                  ar: 'نحافظ على الامتثال الكامل للمبادئ التوجيهية البيئية للبنك الدولي وJBIC وOPIC، منفذين تقنيات متقدمة للتحكم في الانبعاثات وممارسات تشغيلية مستدامة.'
                }
              },
              {
                question: { 
                  en: 'How can I contact Nibras Jordan for business inquiries?',
                  ar: 'كيف يمكنني الاتصال بنبراس الأردن للاستفسارات التجارية؟'
                },
                answer: { 
                  en: 'For business inquiries, please use our contact form above selecting "Business Development" or email us directly at info@nibraspower.com.',
                  ar: 'للاستفسارات التجارية، يرجى استخدام نموذج الاتصال أعلاه واختيار "تطوير الأعمال" أو مراسلتنا مباشرة على info@nibraspower.com.'
                }
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-[#231f20] mb-3">
                  {isArabic ? faq.question.ar : faq.question.en}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {isArabic ? faq.answer.ar : faq.answer.en}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Navigation */}
          <div className="mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-[#231f20] mb-6">
                {isArabic ? 'روابط سريعة' : 'Quick Links'}
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                <button 
                  onClick={() => onNavigate?.('about')}
                  className="bg-[#005670] hover:bg-[#004558] text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  {isArabic ? 'من نحن' : 'About Us'}
                </button>
                <button 
                  onClick={() => onNavigate?.('business')}
                  className="border-2 border-[#005670] text-[#005670] hover:bg-[#005670] hover:text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  {isArabic ? 'أعمالنا' : 'Our Business'}
                </button>
                <button 
                  onClick={() => onNavigate?.('careers')}
                  className="border-2 border-[#005670] text-[#005670] hover:bg-[#005670] hover:text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  {isArabic ? 'الوظائف' : 'Careers'}
                </button>
                <button 
                  onClick={() => onNavigate?.('news')}
                  className="border-2 border-[#005670] text-[#005670] hover:bg-[#005670] hover:text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  {isArabic ? 'الأخبار' : 'News'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;