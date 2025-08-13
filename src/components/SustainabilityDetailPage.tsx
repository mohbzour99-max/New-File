import React from 'react';
import { ArrowLeft, Leaf, Users, Lightbulb, Globe, CheckCircle, Target, Award, TrendingUp } from 'lucide-react';

interface SustainabilityDetailPageProps {
  isArabic: boolean;
  cardType: string;
  onBack: () => void;
}

const SustainabilityDetailPage: React.FC<SustainabilityDetailPageProps> = ({ isArabic, cardType, onBack }) => {
  const getCardContent = (type: string) => {
    switch (type) {
      case 'environmental-stewardship':
        return {
          icon: Leaf,
          title: { en: 'Environmental Stewardship', ar: 'الإشراف البيئي' },
          subtitle: { en: 'Protecting Our Planet Through Responsible Operations', ar: 'حماية كوكبنا من خلال العمليات المسؤولة' },
          description: {
            en: 'At Nibras Jordan, environmental stewardship is at the core of our operations. We are committed to minimizing our environmental footprint while delivering reliable energy solutions.',
            ar: 'في نبراس الأردن، الإشراف البيئي هو جوهر عملياتنا. نحن ملتزمون بتقليل بصمتنا البيئية مع توفير حلول طاقة موثوقة.'
          },
          keyPoints: [
            {
              icon: CheckCircle,
              title: { en: 'Emissions Reduction', ar: 'تقليل الانبعاثات' },
              description: { en: 'Advanced technology to minimize CO2 emissions', ar: 'تقنية متقدمة لتقليل انبعاثات ثاني أكسيد الكربون' }
            },
            {
              icon: Target,
              title: { en: 'Compliance Standards', ar: 'معايير الامتثال' },
              description: { en: 'Full compliance with World Bank environmental guidelines', ar: 'امتثال كامل للمبادئ التوجيهية البيئية للبنك الدولي' }
            },
            {
              icon: Award,
              title: { en: 'Certification', ar: 'الشهادات' },
              description: { en: 'ISO 14001 environmental management certification', ar: 'شهادة إدارة البيئة ISO 14001' }
            }
          ],
          stats: [
            { number: '25%', label: { en: 'Emissions Reduction', ar: 'تقليل الانبعاثات' } },
            { number: '100%', label: { en: 'Compliance Rate', ar: 'معدل الامتثال' } },
            { number: '15+', label: { en: 'Environmental Programs', ar: 'البرامج البيئية' } }
          ]
        };

      case 'economic-development':
        return {
          icon: Users,
          title: { en: 'Economic Development', ar: 'التنمية الاقتصادية' },
          subtitle: { en: 'Driving Growth and Creating Opportunities', ar: 'قيادة النمو وخلق الفرص' },
          description: {
            en: 'Our investments create lasting economic value for Jordan, generating employment opportunities and supporting local communities through sustainable development.',
            ar: 'استثماراتنا تخلق قيمة اقتصادية دائمة للأردن، وتولد فرص عمل وتدعم المجتمعات المحلية من خلال التنمية المستدامة.'
          },
          keyPoints: [
            {
              icon: Users,
              title: { en: 'Job Creation', ar: 'خلق فرص العمل' },
              description: { en: 'Direct and indirect employment opportunities', ar: 'فرص عمل مباشرة وغير مباشرة' }
            },
            {
              icon: TrendingUp,
              title: { en: 'Local Investment', ar: 'الاستثمار المحلي' },
              description: { en: 'Supporting local suppliers and contractors', ar: 'دعم الموردين والمقاولين المحليين' }
            },
            {
              icon: Award,
              title: { en: 'Skills Development', ar: 'تطوير المهارات' },
              description: { en: 'Training programs for technical expertise', ar: 'برامج تدريبية للخبرة التقنية' }
            }
          ],
          stats: [
            { number: '500+', label: { en: 'Jobs Created', ar: 'فرص عمل مُنشأة' } },
            { number: '$660M', label: { en: 'Total Investment', ar: 'إجمالي الاستثمار' } },
            { number: '50+', label: { en: 'Local Partners', ar: 'الشركاء المحليون' } }
          ]
        };

      case 'technology-innovation':
        return {
          icon: Lightbulb,
          title: { en: 'Technology Innovation', ar: 'الابتكار التقني' },
          subtitle: { en: 'Leading the Future of Power Generation', ar: 'قيادة مستقبل توليد الطاقة' },
          description: {
            en: 'We leverage cutting-edge technology and innovative solutions to enhance efficiency, reliability, and environmental performance across our power generation facilities.',
            ar: 'نحن نستفيد من التكنولوجيا المتطورة والحلول المبتكرة لتعزيز الكفاءة والموثوقية والأداء البيئي عبر منشآت توليد الطاقة لدينا.'
          },
          keyPoints: [
            {
              icon: Lightbulb,
              title: { en: 'Combined Cycle Technology', ar: 'تقنية الدورة المركبة' },
              description: { en: 'Advanced gas turbine technology for maximum efficiency', ar: 'تقنية توربين غاز متقدمة لأقصى كفاءة' }
            },
            {
              icon: Target,
              title: { en: 'Smart Grid Integration', ar: 'تكامل الشبكة الذكية' },
              description: { en: 'Modern control systems for optimal performance', ar: 'أنظمة تحكم حديثة للأداء الأمثل' }
            },
            {
              icon: TrendingUp,
              title: { en: 'Continuous Improvement', ar: 'التحسين المستمر' },
              description: { en: 'Regular upgrades and optimization programs', ar: 'برامج تحديث وتحسين منتظمة' }
            }
          ],
          stats: [
            { number: '95%+', label: { en: 'Efficiency Rate', ar: 'معدل الكفاءة' } },
            { number: '99.8%', label: { en: 'Reliability', ar: 'الموثوقية' } },
            { number: '24/7', label: { en: 'Monitoring', ar: 'المراقبة' } }
          ]
        };

      case 'strategic-partnerships':
        return {
          icon: Globe,
          title: { en: 'Strategic Partnerships', ar: 'الشراكات الاستراتيجية' },
          subtitle: { en: 'Building Strong Global Alliances', ar: 'بناء تحالفات عالمية قوية' },
          description: {
            en: 'Our success is built on strong partnerships with international financial institutions, technology providers, and government entities, ensuring sustainable growth and operational excellence.',
            ar: 'نجاحنا مبني على شراكات قوية مع المؤسسات المالية الدولية ومقدمي التكنولوجيا والكيانات الحكومية، مما يضمن النمو المستدام والتميز التشغيلي.'
          },
          keyPoints: [
            {
              icon: Globe,
              title: { en: 'International Financing', ar: 'التمويل الدولي' },
              description: { en: 'Partnerships with OPIC, JBIC, EBRD, and leading banks', ar: 'شراكات مع OPIC وJBIC وEBRD والبنوك الرائدة' }
            },
            {
              icon: Award,
              title: { en: 'Government Relations', ar: 'العلاقات الحكومية' },
              description: { en: 'Strong collaboration with Jordanian authorities', ar: 'تعاون قوي مع السلطات الأردنية' }
            },
            {
              icon: Users,
              title: { en: 'Technology Partners', ar: 'شركاء التكنولوجيا' },
              description: { en: 'Leading global equipment and service providers', ar: 'مقدمو المعدات والخدمات العالميون الرائدون' }
            }
          ],
          stats: [
            { number: '10+', label: { en: 'Key Partners', ar: 'الشركاء الرئيسيون' } },
            { number: '15+', label: { en: 'Countries', ar: 'البلدان' } },
            { number: '20+', label: { en: 'Years Experience', ar: 'سنوات الخبرة' } }
          ]
        };
    }

    onBack();
  };

  const content = getCardContent(cardType);

  if (!content) {
    return <div>Content not found</div>;
  }

  const IconComponent = content.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-[#005670] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="inline-flex items-center text-white hover:text-gray-200 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {isArabic ? 'العودة إلى الاستدامة' : 'Back to Sustainability'}
          </button>

          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-6">
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                {isArabic ? content.title.ar : content.title.en}
              </h1>
              <p className="text-xl text-white text-opacity-90">
                {isArabic ? content.subtitle.ar : content.subtitle.en}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Description */}
        <div className="mb-16">
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
            {isArabic ? content.description.ar : content.description.en}
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {content.stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-[#005670] mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">
                {isArabic ? stat.label.ar : stat.label.en}
              </div>
            </div>
          ))}
        </div>

        {/* Key Points */}
        <div className="grid md:grid-cols-3 gap-8">
          {content.keyPoints.map((point, index) => {
            const PointIcon = point.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#005670] rounded-full flex items-center justify-center mb-6">
                  <PointIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#231f20] mb-4">
                  {isArabic ? point.title.ar : point.title.en}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {isArabic ? point.description.ar : point.description.en}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SustainabilityDetailPage;