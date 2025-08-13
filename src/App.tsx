import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BusinessSection from './components/BusinessSection';
import SustainabilitySection from './components/SustainabilitySection';
import SustainabilityDetailPage from './components/SustainabilityDetailPage';
import MediaSection from './components/MediaSection';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import OurBusiness from './pages/OurBusiness';
import Careers from './pages/Careers';
import News from './pages/News';
import ContactUs from './pages/ContactUs';
import MissionVisionValues from './pages/MissionVisionValues';
import Ownership from './pages/Ownership';
import OurLeadership from './pages/OurLeadership';
import EthicsCompliance from './pages/EthicsCompliance';
import AwardsRecognitions from './pages/AwardsRecognitions';
import SafetyFirst from './pages/SafetyFirst';
import EnvironmentalProtection from './pages/EnvironmentalProtection';
import SocialResponsibility from './pages/SocialResponsibility';
import StakeholderRelations from './pages/StakeholderRelations';
import AssetManagement from './pages/AssetManagement';
import SupplyChainManagement from './pages/SupplyChainManagement';
import AESJordanIPP1 from './pages/AESJordanIPP1';
import AESLevantIPP4 from './pages/AESLevantIPP4';
import AMSolar from './pages/AMSolar';
import SustainabilityMain from './pages/SustainabilityMain';
import NewsDetailPage from './pages/NewsDetailPage';
import JobApplicationForm from './pages/JobApplicationForm';
import Search from './pages/Search';

interface CareersProps {
  isArabic: boolean;
  onNavigate: (page: string, jobId?: number) => void;
}

function App() {
  const [isArabic, setIsArabic] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'business' | 'careers' | 'apply-job' | 'news' | 'news-detail' | 'contact' | 'search' | 'sustainability-main' | 'sustainability-detail' | 'about-mission-vision-values' | 'about-ownership' | 'about-leadership' | 'about-ethics-compliance' | 'about-awards-recognitions' | 'sustainability-safety' | 'sustainability-environment' | 'sustainability-social' | 'sustainability-stakeholder' | 'sustainability-assets' | 'sustainability-supply' | 'business-aes-jordan-ipp1' | 'business-aes-levant-ipp4' | 'business-am-solar'>('home');
  const [selectedSustainabilityCard, setSelectedSustainabilityCard] = useState<string>('');
  const [selectedNewsArticleId, setSelectedNewsArticleId] = useState<number | null>(null);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const [previousPage, setPreviousPage] = useState<string>('home');

  // News articles data
  const newsArticles = [
    {
      id: 1,
      category: 'company',
      featured: true,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      date: '2024-01-15',
      title: { 
        en: 'Nibras Jordan Celebrates 10 Years of Reliable Power Generation',
        ar: 'نبراس الأردن تحتفل بـ 10 سنوات من توليد الطاقة الموثوق'
      },
      excerpt: { 
        en: 'Amman East and Levant Power Plants continue to provide over 8% of Jordan\'s electricity with exceptional reliability, marking a decade of operational excellence.',
        ar: 'محطتا عمان الشرقية وبلاد الشام للطاقة تواصلان توفير أكثر من 8% من كهرباء الأردن بموثوقية استثنائية، مما يمثل عقداً من التميز التشغيلي.'
      },
      content: {
        en: 'Nibras Jordan proudly celebrates a decade of reliable power generation, having consistently supplied over 8% of Jordan\'s electricity needs since 2009. Our Amman East Power Plant (400 MW) and Levant Power Plant (241 MW) have maintained an exceptional reliability rate of 99.8%, demonstrating our commitment to operational excellence and energy security.\n\nThis milestone represents not just a decade of operations, but a decade of trust from the Jordanian people and government. Our facilities have operated with minimal downtime, ensuring that homes, businesses, and critical infrastructure across Jordan have access to reliable electricity.\n\nLooking ahead, we remain committed to maintaining these high standards while exploring opportunities for expansion and modernization to meet Jordan\'s growing energy needs.',
        ar: 'تحتفل نبراس الأردن بفخر بعقد من توليد الطاقة الموثوق، حيث وفرت باستمرار أكثر من 8% من احتياجات الأردن من الكهرباء منذ عام 2009. حافظت محطة عمان الشرقية للطاقة (400 ميجاواط) ومحطة بلاد الشام للطاقة (241 ميجاواط) على معدل موثوقية استثنائي يبلغ 99.8%، مما يدل على التزامنا بالتميز التشغيلي وأمن الطاقة.\n\nهذا الإنجاز لا يمثل فقط عقداً من العمليات، بل عقداً من الثقة من الشعب والحكومة الأردنية. عملت منشآتنا بأقل وقت توقف، مما يضمن أن المنازل والشركات والبنية التحتية الحيوية في جميع أنحاء الأردن لديها إمكانية الوصول إلى الكهرباء الموثوقة.\n\nنتطلع إلى المستقبل، ونبقى ملتزمين بالحفاظ على هذه المعايير العالية مع استكشاف فرص التوسع والتحديث لتلبية احتياجات الطاقة المتزايدة في الأردن.'
      },
      views: 1250,
      shares: 45
    },
    {
      id: 2,
      category: 'performance',
      featured: false,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      date: '2024-01-10',
      title: { 
        en: 'Nibras Jordan Achieves Record Performance in 2023',
        ar: 'نبراس الأردن تحقق أداءً قياسياً في 2023'
      },
      excerpt: { 
        en: '641 MW combined capacity delivers consistent, efficient power generation exceeding operational targets and contributing to Jordan\'s energy security.',
        ar: 'القدرة المجمعة البالغة 641 ميجاواط توفر توليد طاقة ثابت وفعال يتجاوز الأهداف التشغيلية ويساهم في أمن الطاقة في الأردن.'
      },
      content: {
        en: 'Nibras Jordan concluded 2023 with record-breaking performance across all operational metrics. Our combined 641 MW capacity from both power plants exceeded availability targets, achieving 99.8% reliability while maintaining strict environmental compliance standards.\n\nThe exceptional performance was driven by our dedicated team of engineers and technicians who worked tirelessly to optimize plant operations. Through predictive maintenance programs and continuous monitoring, we were able to minimize unplanned outages and maximize efficiency.\n\nThis achievement reinforces our position as a trusted partner in Jordan\'s energy sector and demonstrates our commitment to delivering reliable, clean energy to support the country\'s economic growth.',
        ar: 'اختتمت نبراس الأردن عام 2023 بأداء قياسي عبر جميع المقاييس التشغيلية. تجاوزت قدرتنا المجمعة البالغة 641 ميجاواط من كلا محطتي الطاقة أهداف التوفر، محققة موثوقية 99.8% مع الحفاظ على معايير الامتثال البيئي الصارمة.\n\nكان الأداء الاستثنائي مدفوعاً بفريقنا المتفاني من المهندسين والفنيين الذين عملوا بلا كلل لتحسين عمليات المحطة. من خلال برامج الصيانة التنبؤية والمراقبة المستمرة، تمكنا من تقليل الانقطاعات غير المخططة وتعظيم الكفاءة.\n\nهذا الإنجاز يعزز موقعنا كشريك موثوق في قطاع الطاقة الأردني ويدل على التزامنا بتوفير طاقة موثوقة ونظيفة لدعم النمو الاقتصادي للبلاد.'
      },
      views: 890,
      shares: 32
    },
    {
      id: 3,
      category: 'sustainability',
      featured: false,
      image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      date: '2024-01-05',
      title: { 
        en: 'Environmental Compliance Achievement at Nibras Jordan Facilities',
        ar: 'إنجاز الامتثال البيئي في منشآت نبراس الأردن'
      },
      excerpt: { 
        en: 'Both power plants maintain full compliance with World Bank, JBIC, and OPIC environmental guidelines, demonstrating our commitment to sustainable operations.',
        ar: 'كلا محطتي الطاقة تحافظان على الامتثال الكامل للمبادئ التوجيهية البيئية للبنك الدولي وJBIC وOPIC، مما يدل على التزامنا بالعمليات المستدامة.'
      },
      content: {
        en: 'Nibras Jordan continues to set industry standards for environmental stewardship. Our facilities maintain full compliance with international environmental guidelines from the World Bank, JBIC, and OPIC, while implementing advanced emission control technologies.\n\nOur environmental management system encompasses comprehensive monitoring of air quality, water usage, and waste management. We have invested significantly in state-of-the-art emission control equipment that ensures our operations meet the most stringent international standards.\n\nThis commitment to environmental excellence is not just about compliance – it reflects our responsibility to the communities we serve and our dedication to sustainable energy production for future generations.',
        ar: 'تواصل نبراس الأردن وضع معايير الصناعة للإشراف البيئي. تحافظ منشآتنا على الامتثال الكامل للمبادئ التوجيهية البيئية الدولية من البنك الدولي وJBIC وOPIC، مع تنفيذ تقنيات متقدمة للتحكم في الانبعاثات.\n\nيشمل نظام الإدارة البيئية لدينا مراقبة شاملة لجودة الهواء واستخدام المياه وإدارة النفايات. لقد استثمرنا بشكل كبير في معدات التحكم في الانبعاثات المتطورة التي تضمن أن عملياتنا تلبي أصرم المعايير الدولية.\n\nهذا الالتزام بالتميز البيئي ليس فقط حول الامتثال - إنه يعكس مسؤوليتنا تجاه المجتمعات التي نخدمها وتفانينا في إنتاج الطاقة المستدامة للأجيال القادمة.'
      },
      views: 675,
      shares: 28
    },
    {
      id: 4,
      category: 'finance',
      featured: false,
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      date: '2023-12-28',
      title: { 
        en: 'International Financing Success Supports Nibras Jordan Growth',
        ar: 'نجاح التمويل الدولي يدعم نمو نبراس الأردن'
      },
      excerpt: { 
        en: 'Strong partnerships with OPIC, JBIC, EBRD, and international banks enable continued operational excellence and future expansion opportunities.',
        ar: 'الشراكات القوية مع OPIC وJBIC وEBRD والبنوك الدولية تمكن من استمرار التميز التشغيلي وفرص التوسع المستقبلية.'
      },
      content: {
        en: 'Our strategic partnerships with leading international financial institutions continue to strengthen our position in Jordan\'s energy sector. The successful financing arrangements with OPIC, JBIC, EBRD, and commercial banks provide a solid foundation for sustained growth.\n\nThese partnerships represent more than just financial support – they bring international expertise, best practices, and access to cutting-edge technologies that enhance our operational capabilities. The confidence shown by these prestigious institutions validates our business model and operational excellence.\n\nLooking forward, these strong financial partnerships position us well for future expansion opportunities and continued investment in Jordan\'s energy infrastructure.',
        ar: 'شراكاتنا الاستراتيجية مع المؤسسات المالية الدولية الرائدة تواصل تعزيز موقعنا في قطاع الطاقة الأردني. ترتيبات التمويل الناجحة مع OPIC وJBIC وEBRD والبنوك التجارية توفر أساساً قوياً للنمو المستدام.\n\nهذه الشراكات تمثل أكثر من مجرد دعم مالي - فهي تجلب الخبرة الدولية وأفضل الممارسات والوصول إلى التقنيات المتطورة التي تعزز قدراتنا التشغيلية. الثقة التي أظهرتها هذه المؤسسات المرموقة تؤكد نموذج أعمالنا والتميز التشغيلي.\n\nنتطلع إلى المستقبل، هذه الشراكات المالية القوية تضعنا في موقع جيد لفرص التوسع المستقبلية والاستثمار المستمر في البنية التحتية للطاقة في الأردن.'
      },
      views: 542,
      shares: 19
    },
    {
      id: 5,
      category: 'technology',
      featured: false,
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      date: '2023-12-20',
      title: { 
        en: 'Advanced Technology Upgrades Enhance Plant Efficiency',
        ar: 'تحديثات التكنولوجيا المتقدمة تعزز كفاءة المحطة'
      },
      excerpt: { 
        en: 'Latest technological improvements at both facilities result in increased efficiency and reduced environmental impact while maintaining reliable operations.',
        ar: 'أحدث التحسينات التكنولوجية في كلا المنشأتين تؤدي إلى زيادة الكفاءة وتقليل التأثير البيئي مع الحفاظ على العمليات الموثوقة.'
      },
      content: {
        en: 'Nibras Jordan has completed significant technology upgrades across both power plants, implementing state-of-the-art control systems and efficiency improvements that enhance performance while reducing environmental impact.\n\nThe upgrades include advanced turbine control systems, improved heat recovery mechanisms, and enhanced monitoring capabilities that allow for real-time optimization of plant operations. These improvements have resulted in a 3% increase in overall efficiency and a corresponding reduction in fuel consumption.\n\nOur investment in technology demonstrates our commitment to continuous improvement and our responsibility to operate as efficiently and cleanly as possible while maintaining the reliability that Jordan depends on.',
        ar: 'أكملت نبراس الأردن تحديثات تكنولوجية مهمة عبر كلا محطتي الطاقة، منفذة أنظمة تحكم متطورة وتحسينات كفاءة تعزز الأداء مع تقليل التأثير البيئي.\n\nتشمل التحديثات أنظمة تحكم توربين متقدمة وآليات استرداد حرارة محسنة وقدرات مراقبة معززة تسمح بالتحسين في الوقت الفعلي لعمليات المحطة. أدت هذه التحسينات إلى زيادة 3% في الكفاءة الإجمالية وانخفاض مقابل في استهلاك الوقود.\n\nاستثمارنا في التكنولوجيا يدل على التزامنا بالتحسين المستمر ومسؤوليتنا للعمل بأكبر قدر من الكفاءة والنظافة مع الحفاظ على الموثوقية التي يعتمد عليها الأردن.'
      },
      views: 423,
      shares: 15
    },
    {
      id: 6,
      category: 'community',
      featured: false,
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      date: '2023-12-15',
      title: { 
        en: 'Community Development Programs Expand Across Jordan',
        ar: 'برامج التنمية المجتمعية تتوسع عبر الأردن'
      },
      excerpt: { 
        en: 'Nibras Jordan launches new community initiatives focusing on education, skills development, and local economic empowerment in surrounding areas.',
        ar: 'نبراس الأردن تطلق مبادرات مجتمعية جديدة تركز على التعليم وتطوير المهارات والتمكين الاقتصادي المحلي في المناطق المحيطة.'
      },
      content: {
        en: 'Our commitment to community development continues with the launch of comprehensive programs targeting education, vocational training, and local business support in communities surrounding our facilities.\n\nThe new initiatives include scholarship programs for local students, vocational training centers that provide skills development in technical fields, and microfinance programs to support local entrepreneurs. These programs are designed to create lasting positive impact and contribute to the economic development of the regions where we operate.\n\nWe believe that our success is intrinsically linked to the prosperity of the communities we serve, and these programs reflect our long-term commitment to being a responsible corporate citizen in Jordan.',
        ar: 'يستمر التزامنا بالتنمية المجتمعية مع إطلاق برامج شاملة تستهدف التعليم والتدريب المهني ودعم الأعمال المحلية في المجتمعات المحيطة بمنشآتنا.\n\nتشمل المبادرات الجديدة برامج منح دراسية للطلاب المحليين ومراكز تدريب مهني توفر تطوير المهارات في المجالات التقنية وبرامج التمويل الأصغر لدعم رجال الأعمال المحليين. هذه البرامج مصممة لخلق تأثير إيجابي دائم والمساهمة في التنمية الاقتصادية للمناطق التي نعمل فيها.\n\nنؤمن أن نجاحنا مرتبط جوهرياً بازدهار المجتمعات التي نخدمها، وهذه البرامج تعكس التزامنا طويل المدى بأن نكون مواطناً مؤسسياً مسؤولاً في الأردن.'
      },
      views: 367,
      shares: 22
    },
    {
      id: 7,
      category: 'innovation',
      featured: false,
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      date: '2023-12-10',
      title: { 
        en: 'Digital Innovation Transforms Power Plant Operations',
        ar: 'الابتكار الرقمي يحول عمليات محطات الطاقة'
      },
      excerpt: { 
        en: 'Implementation of advanced digital technologies enhances operational efficiency and predictive maintenance capabilities.',
        ar: 'تنفيذ التقنيات الرقمية المتقدمة يعزز الكفاءة التشغيلية وقدرات الصيانة التنبؤية.'
      },
      content: {
        en: 'Nibras Jordan has successfully implemented cutting-edge digital technologies across our power generation facilities, resulting in improved operational efficiency and enhanced predictive maintenance capabilities.\n\nThe digital transformation includes the deployment of IoT sensors, advanced analytics platforms, and machine learning algorithms that provide real-time insights into plant performance. These technologies enable us to predict potential issues before they occur, optimize maintenance schedules, and maximize plant availability.\n\nThis digital innovation represents a significant step forward in our operational capabilities and positions us at the forefront of the industry\'s technological evolution.',
        ar: 'نجحت نبراس الأردن في تنفيذ التقنيات الرقمية المتطورة عبر منشآت توليد الطاقة لدينا، مما أدى إلى تحسين الكفاءة التشغيلية وتعزيز قدرات الصيانة التنبؤية.\n\nيشمل التحول الرقمي نشر أجهزة استشعار إنترنت الأشياء ومنصات التحليلات المتقدمة وخوارزميات التعلم الآلي التي توفر رؤى في الوقت الفعلي حول أداء المحطة. هذه التقنيات تمكننا من التنبؤ بالمشاكل المحتملة قبل حدوثها وتحسين جداول الصيانة وتعظيم توفر المحطة.\n\nهذا الابتكار الرقمي يمثل خطوة مهمة إلى الأمام في قدراتنا التشغيلية ويضعنا في المقدمة من التطور التكنولوجي للصناعة.'
      },
      views: 298,
      shares: 12
    },
    {
      id: 8,
      category: 'awards',
      featured: false,
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      date: '2023-12-05',
      title: { 
        en: 'Nibras Jordan Receives Excellence Award for Operational Performance',
        ar: 'نبراس الأردن تحصل على جائزة التميز للأداء التشغيلي'
      },
      excerpt: { 
        en: 'Recognition for outstanding operational excellence and contribution to Jordan\'s energy security over the past decade.',
        ar: 'تقدير للتميز التشغيلي المتميز والمساهمة في أمن الطاقة الأردني خلال العقد الماضي.'
      },
      content: {
        en: 'Nibras Jordan has been honored with the Excellence Award for Operational Performance, recognizing our decade-long commitment to reliable power generation and exceptional operational standards.\n\nThe award acknowledges our consistent achievement of industry-leading performance metrics, including our 99.8% reliability rate and our contribution to Jordan\'s energy security. The recognition comes from the Jordan Energy Association and reflects the trust placed in us by the government and people of Jordan.\n\nThis award motivates us to continue our pursuit of excellence and reinforces our commitment to maintaining the highest standards of operational performance while contributing to Jordan\'s sustainable energy future.',
        ar: 'تم تكريم نبراس الأردن بجائزة التميز للأداء التشغيلي، تقديراً لالتزامنا لعقد من الزمن بتوليد الطاقة الموثوق والمعايير التشغيلية الاستثنائية.\n\nتعترف الجائزة بإنجازنا المستمر لمقاييس الأداء الرائدة في الصناعة، بما في ذلك معدل الموثوقية 99.8% ومساهمتنا في أمن الطاقة الأردني. يأتي التقدير من جمعية الطاقة الأردنية ويعكس الثقة الموضوعة فينا من قبل الحكومة وشعب الأردن.\n\nهذه الجائزة تحفزنا لمواصلة سعينا للتميز وتعزز التزامنا بالحفاظ على أعلى معايير الأداء التشغيلي مع المساهمة في مستقبل الطاقة المستدامة في الأردن.'
      },
      views: 445,
      shares: 31
    },
    {
      id: 9,
      category: 'innovation',
      featured: false,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      date: '2023-12-01',
      title: { 
        en: 'Nibras Jordan Strengthens International Partnerships',
        ar: 'نبراس الأردن تعزز الشراكات الدولية'
      },
      excerpt: { 
        en: 'New strategic partnerships with global energy leaders enhance our operational capabilities and support future expansion opportunities.',
        ar: 'شراكات استراتيجية جديدة مع قادة الطاقة العالميين تعزز قدراتنا التشغيلية وتدعم فرص التوسع المستقبلية.'
      },
      content: {
        en: 'Nibras Jordan has successfully established new strategic partnerships with leading global energy companies, strengthening our position in the regional energy market and enhancing our operational capabilities.\n\nThese partnerships bring together decades of combined experience in power generation, renewable energy technologies, and sustainable development practices. Our new collaborations will enable knowledge transfer, technology sharing, and joint development of innovative energy solutions.\n\nThe partnerships also open new avenues for expansion and growth, positioning Nibras Jordan to take advantage of emerging opportunities in Jordan\'s evolving energy landscape while maintaining our commitment to operational excellence and environmental responsibility.',
        ar: 'نجحت نبراس الأردن في إقامة شراكات استراتيجية جديدة مع شركات الطاقة العالمية الرائدة، مما يعزز موقعنا في سوق الطاقة الإقليمي ويحسن قدراتنا التشغيلية.\n\nتجمع هذه الشراكات عقوداً من الخبرة المشتركة في توليد الطاقة وتقنيات الطاقة المتجددة وممارسات التنمية المستدامة. ستمكن تعاوناتنا الجديدة من نقل المعرفة وتبادل التكنولوجيا والتطوير المشترك لحلول الطاقة المبتكرة.\n\nتفتح الشراكات أيضاً طرقاً جديدة للتوسع والنمو، مما يضع نبراس الأردن في موقع يمكنها من الاستفادة من الفرص الناشئة في المشهد الطاقوي المتطور في الأردن مع الحفاظ على التزامنا بالتميز التشغيلي والمسؤولية البيئية.'
      },
      views: 521,
      shares: 28
    }
  ];
  const toggleLanguage = () => {
    setIsArabic(!isArabic);
  };

  const navigateToPage = (page: string, jobId?: number) => {
    // Store current page before navigation (for back functionality)
    if (page === 'search' && currentPage !== 'search') {
      setPreviousPage(currentPage);
    }
    
    // Handle job application navigation
    if (page === 'apply-job' && jobId) {
      setSelectedJobId(jobId);
    }
    
    if (page.startsWith('#')) {
      // Handle anchor links for home page sections
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const element = document.querySelector(page);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(page);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return;
    }
    
    setCurrentPage(page as any);
    window.scrollTo(0, 0);
  };

  const handleBackFromSearch = () => {
    if (previousPage) {
      setCurrentPage(previousPage as any);
    } else {
      setCurrentPage('home');
    }
    window.scrollTo(0, 0);
  };

  const handleReadMoreClick = (articleId: number) => {
    setSelectedNewsArticleId(articleId);
    setCurrentPage('news-detail');
    window.scrollTo(0, 0);
  };

  const handleBackToNews = () => {
    setSelectedNewsArticleId(null);
    setCurrentPage('news');
    window.scrollTo(0, 0);
  };

  const handleSustainabilityCardClick = (cardType: string) => {
    setSelectedSustainabilityCard(cardType);
    setCurrentPage('sustainability-detail');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedSustainabilityCard('');
    window.scrollTo(0, 0);
  };

  if (currentPage === 'sustainability-detail') {
    return (
      <div className={`min-h-screen ${isArabic ? 'rtl' : 'ltr'}`}>
        <Header isArabic={isArabic} toggleLanguage={toggleLanguage} onNavigate={navigateToPage} />
        <SustainabilityDetailPage 
          isArabic={isArabic} 
          cardType={selectedSustainabilityCard}
          onBack={handleBackToHome}
        />
        <Footer isArabic={isArabic} toggleLanguage={toggleLanguage} onNavigate={navigateToPage} />
      </div>
    );
  }

  // Render different pages based on currentPage
  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutUs isArabic={isArabic} onNavigate={navigateToPage} />;
      case 'business':
        return <OurBusiness isArabic={isArabic} onNavigate={navigateToPage} />;
      case 'careers':
        return <Careers isArabic={isArabic} onNavigate={navigateToPage} />;
      case 'apply-job':
        return <JobApplicationForm isArabic={isArabic} onNavigate={navigateToPage} selectedJobId={selectedJobId!} />;
      case 'news':
        return <News isArabic={isArabic} newsArticles={newsArticles} onNavigate={navigateToPage} onReadMore={handleReadMoreClick} />;
      case 'news-detail':
        return (
          <NewsDetailPage 
            isArabic={isArabic} 
            articleId={selectedNewsArticleId!}
            newsArticles={newsArticles}
            onBack={handleBackToNews}
            onNavigate={navigateToPage}
          />
        );
      case 'contact':
        return <ContactUs isArabic={isArabic} onNavigate={navigateToPage} />;
      case 'search':
        return <Search isArabic={isArabic} onNavigate={navigateToPage} onBack={handleBackFromSearch} />;
      case 'sustainability-main':
        return <SustainabilityMain isArabic={isArabic} onNavigate={navigateToPage} />;
      case 'about-mission-vision-values':
        return <MissionVisionValues isArabic={isArabic} onNavigate={navigateToPage} />;
      case 'about-ownership':
        return <Ownership isArabic={isArabic} onNavigate={navigateToPage} />;
      case 'about-leadership':
        return <OurLeadership isArabic={isArabic} onNavigate={navigateToPage} />;
      case 'about-ethics-compliance':
        return <EthicsCompliance isArabic={isArabic} onNavigate={navigateToPage} />;
      case 'about-awards-recognitions':
        return <AwardsRecognitions isArabic={isArabic} onNavigate={navigateToPage} />;
      case 'sustainability-safety':
        return <SafetyFirst isArabic={isArabic} onNavigate={navigateToPage} />;
      case 'sustainability-environment':
        return <EnvironmentalProtection isArabic={isArabic} onNavigate={navigateToPage} />;
      case 'sustainability-social':
        return <SocialResponsibility isArabic={isArabic} onNavigate={navigateToPage} />;
      case 'sustainability-stakeholder':
        return <StakeholderRelations isArabic={isArabic} onNavigate={navigateToPage} />;
      case 'sustainability-assets':
        return <AssetManagement isArabic={isArabic} onNavigate={navigateToPage} />;
      case 'sustainability-supply':
        return <SupplyChainManagement isArabic={isArabic} onNavigate={navigateToPage} />;
      case 'business-aes-jordan-ipp1':
        return <AESJordanIPP1 isArabic={isArabic} onNavigate={navigateToPage} />;
      case 'business-aes-levant-ipp4':
        return <AESLevantIPP4 isArabic={isArabic} onNavigate={navigateToPage} />;
      case 'business-am-solar':
        return <AMSolar isArabic={isArabic} onNavigate={navigateToPage} />;
      default:
        return (
          <main>
            <HeroSection isArabic={isArabic} onNavigate={navigateToPage} />
            <div id="about">
              <AboutSection isArabic={isArabic} onNavigate={navigateToPage} />
            </div>
            <div id="business">
              <BusinessSection isArabic={isArabic} onNavigate={navigateToPage} />
            </div>
            <div id="news">
              <MediaSection isArabic={isArabic} onNavigate={navigateToPage} />
            </div>
            <div id="careers" style={{ minHeight: '50px' }}></div>
          </main>
        );
    }
  };

  return (
    <div className={`min-h-screen ${isArabic ? 'rtl' : 'ltr'}`}>
      <Header isArabic={isArabic} toggleLanguage={toggleLanguage} onNavigate={navigateToPage} currentPage={currentPage} />
      {renderPage()}
      <Footer isArabic={isArabic} toggleLanguage={toggleLanguage} onNavigate={navigateToPage} />
    </div>
  );
}

export default App;