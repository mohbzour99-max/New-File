import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, X, Calendar, ArrowRight, ChevronRight } from 'lucide-react';

interface SearchProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
  onBack?: () => void;
}

interface SearchResult {
  id: string;
  type: 'page' | 'news' | 'project' | 'sustainability';
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  url: string;
  category?: string;
  date?: string;
}

const Search: React.FC<SearchProps> = ({ isArabic, onNavigate, onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock search data - in a real app, this would come from an API or search service
  const searchData: SearchResult[] = [
    // Pages
    {
      id: 'about',
      type: 'page',
      title: { en: 'About Us', ar: 'من نحن' },
      description: { en: 'Learn about Nibras Jordan, our history, leadership, and commitment to excellence', ar: 'تعرف على نبراس الأردن وتاريخنا وقيادتنا والتزامنا بالتميز' },
      url: 'about'
    },
    {
      id: 'business',
      type: 'page',
      title: { en: 'Our Business', ar: 'أعمالنا' },
      description: { en: 'Discover our power generation projects and business operations', ar: 'اكتشف مشاريع توليد الطاقة وعملياتنا التجارية' },
      url: 'business'
    },
    {
      id: 'careers',
      type: 'page',
      title: { en: 'Careers', ar: 'الوظائف' },
      description: { en: 'Join our team and explore career opportunities at Nibras Jordan', ar: 'انضم إلى فريقنا واستكشف الفرص الوظيفية في نبراس الأردن' },
      url: 'careers'
    },
    {
      id: 'contact',
      type: 'page',
      title: { en: 'Contact Us', ar: 'اتصل بنا' },
      description: { en: 'Get in touch with us for inquiries and support', ar: 'تواصل معنا للاستفسارات والدعم' },
      url: 'contact'
    },
    {
      id: 'mission-vision',
      type: 'page',
      title: { en: 'Mission, Vision & Values', ar: 'المهمة والرؤية والقيم' },
      description: { en: 'Our mission, vision, and core values that guide our operations', ar: 'مهمتنا ورؤيتنا وقيمنا الأساسية التي توجه عملياتنا' },
      url: 'about-mission-vision-values'
    },
    {
      id: 'leadership',
      type: 'page',
      title: { en: 'Our Leadership', ar: 'قيادتنا' },
      description: { en: 'Meet our experienced leadership team driving excellence', ar: 'تعرف على فريق القيادة ذو الخبرة الذي يقود التميز' },
      url: 'about-leadership'
    },
    // Projects
    {
      id: 'ipp1',
      type: 'project',
      title: { en: 'Amman East Power Plant (IPP1)', ar: 'محطة عمان الشرقية للطاقة' },
      description: { en: '400 MW combined cycle gas plant - Jordan\'s first Independent Power Producer', ar: 'محطة غاز دورة مركبة بقدرة 400 ميجاواط - أول منتج مستقل للطاقة في الأردن' },
      url: 'business-aes-jordan-ipp1',
      category: 'Power Generation'
    },
    {
      id: 'ipp4',
      type: 'project',
      title: { en: 'Levant Power Plant (IPP4)', ar: 'محطة بلاد الشام للطاقة' },
      description: { en: '241 MW tri-fuel peaking plant for grid stabilization', ar: 'محطة ذروة ثلاثية الوقود بقدرة 241 ميجاواط لاستقرار الشبكة' },
      url: 'business-aes-levant-ipp4',
      category: 'Power Generation'
    },
    {
      id: 'solar',
      type: 'project',
      title: { en: 'AM Solar', ar: 'AM الطاقة الشمسية' },
      description: { en: 'Solar energy project - Clean and renewable energy for the future', ar: 'مشروع الطاقة الشمسية - طاقة نظيفة ومتجددة للمستقبل' },
      url: 'business-am-solar',
      category: 'Renewable Energy'
    },
    // Sustainability
    {
      id: 'safety',
      type: 'sustainability',
      title: { en: 'Safety First', ar: 'السلامة أولاً' },
      description: { en: 'Our commitment to safety for people, contractors, and communities', ar: 'التزامنا بالسلامة للأشخاص والمقاولين والمجتمعات' },
      url: 'sustainability-safety',
      category: 'Safety'
    },
    {
      id: 'environment',
      type: 'sustainability',
      title: { en: 'Environmental Protection', ar: 'حماية البيئة' },
      description: { en: 'Protecting the environment through sustainable practices', ar: 'حماية البيئة من خلال الممارسات المستدامة' },
      url: 'sustainability-environment',
      category: 'Environment'
    },
    {
      id: 'social',
      type: 'sustainability',
      title: { en: 'Social Responsibility', ar: 'المسؤولية الاجتماعية' },
      description: { en: 'Contributing to community development and social welfare', ar: 'المساهمة في التنمية المجتمعية والرفاه الاجتماعي' },
      url: 'sustainability-social',
      category: 'Community'
    },
    // News
    {
      id: 'news-1',
      type: 'news',
      title: { en: 'Nibras Jordan Celebrates 10 Years of Reliable Power Generation', ar: 'نبراس الأردن تحتفل بـ 10 سنوات من توليد الطاقة الموثوق' },
      description: { en: 'Amman East and Levant Power Plants continue to provide over 8% of Jordan\'s electricity', ar: 'محطتا عمان الشرقية وبلاد الشام تواصلان توفير أكثر من 8% من كهرباء الأردن' },
      url: 'news',
      category: 'Company News',
      date: '2024-01-15'
    },
    {
      id: 'news-2',
      type: 'news',
      title: { en: 'Record Performance Achievement in 2023', ar: 'تحقيق أداء قياسي في 2023' },
      description: { en: '641 MW combined capacity delivers consistent, efficient power generation', ar: 'القدرة المجمعة البالغة 641 ميجاواط توفر توليد طاقة ثابت وفعال' },
      url: 'news',
      category: 'Performance',
      date: '2024-01-10'
    }
  ];

  // Perform search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    const searchTimeout = setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const filtered = searchData.filter(item => {
        const titleMatch = item.title.en.toLowerCase().includes(query) || 
                          item.title.ar.toLowerCase().includes(query);
        const descMatch = item.description.en.toLowerCase().includes(query) || 
                         item.description.ar.toLowerCase().includes(query);
        const categoryMatch = item.category?.toLowerCase().includes(query);
        
        return titleMatch || descMatch || categoryMatch;
      });
      
      setSearchResults(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [searchQuery]);

  const handleResultClick = (result: SearchResult) => {
    if (onNavigate) {
      onNavigate(result.url);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'page': return '📄';
      case 'project': return '🏭';
      case 'sustainability': return '🌱';
      case 'news': return '📰';
      default: return '📄';
    }
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      page: { en: 'Page', ar: 'صفحة' },
      project: { en: 'Project', ar: 'مشروع' },
      sustainability: { en: 'Sustainability', ar: 'استدامة' },
      news: { en: 'News', ar: 'أخبار' }
    };
    return labels[type as keyof typeof labels] || labels.page;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumb */}
          <div className="flex items-center text-gray-600 mb-4 text-sm">
            <button 
              onClick={() => onNavigate?.('home')}
              className="hover:text-[#005670] transition-colors duration-200 cursor-pointer"
            >
              {isArabic ? 'الرئيسية' : 'Home'}
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-800">
              {isArabic ? 'البحث' : 'Search'}
            </span>
          </div>

          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-[#231f20]">
              {isArabic ? 'البحث' : 'Search'}
            </h1>
            <button
              onClick={onBack}
              className="p-2 text-gray-600 hover:text-[#005670] transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search Input */}
          <div className="relative mb-4">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isArabic ? 'ابحث في الموقع...' : 'Search the website...'}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent text-lg"
              autoFocus
            />
          </div>

        </div>
      </div>

      {/* Search Results */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#005670] mx-auto"></div>
            <p className="mt-4 text-gray-600">
              {isArabic ? 'جاري البحث...' : 'Searching...'}
            </p>
          </div>
        )}

        {!isLoading && searchQuery && searchResults.length === 0 && (
          <div className="text-center py-12">
            <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              {isArabic ? 'لم يتم العثور على نتائج' : 'No results found'}
            </h3>
            <p className="text-gray-500">
              {isArabic 
                ? `لم نتمكن من العثور على أي نتائج لـ "${searchQuery}"`
                : `We couldn't find any results for "${searchQuery}"`
              }
            </p>
          </div>
        )}

        {!isLoading && searchResults.length > 0 && (
          <div>
            <p className="text-gray-600 mb-6">
              {isArabic 
                ? `${searchResults.length} نتيجة لـ "${searchQuery}"`
                : `${searchResults.length} results for "${searchQuery}"`
              }
            </p>

            <div className="space-y-4">
              {searchResults.map((result) => (
                <div
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer border border-gray-200 hover:border-[#005670]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-lg mr-2">{getTypeIcon(result.type)}</span>
                        <span className="text-sm text-[#005670] font-medium">
                          {isArabic ? getTypeLabel(result.type).ar : getTypeLabel(result.type).en}
                        </span>
                        {result.category && (
                          <>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-sm text-gray-500">{result.category}</span>
                          </>
                        )}
                        {result.date && (
                          <>
                            <span className="mx-2 text-gray-300">•</span>
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(result.date).toLocaleDateString(isArabic ? 'ar-QA' : 'en-US')}
                            </div>
                          </>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-[#231f20] mb-2 hover:text-[#005670] transition-colors duration-200">
                        {isArabic ? result.title.ar : result.title.en}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {isArabic ? result.description.ar : result.description.en}
                      </p>
                    </div>
                    
                    <ArrowRight className="w-5 h-5 text-gray-400 ml-4 flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!searchQuery && (
          <div className="text-center py-12">
            <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              {isArabic ? 'ابدأ البحث' : 'Start searching'}
            </h3>
            <p className="text-gray-500">
              {isArabic 
                ? 'أدخل كلمة أو عبارة للبحث في الموقع'
                : 'Enter a word or phrase to search the website'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;