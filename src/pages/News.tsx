import React, { useEffect, useRef, useState } from 'react';
import { Calendar, ArrowRight, Eye, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsArticle {
  id: number;
  category: string;
  featured: boolean;
  image: string;
  date: string;
  title: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  content: { en: string; ar: string };
  views: number;
  shares: number;
}

interface NewsProps {
  isArabic: boolean;
  newsArticles: NewsArticle[];
  onNavigate?: (page: string) => void;
  onReadMore?: (articleId: number) => void;
}

const News: React.FC<NewsProps> = ({ isArabic, newsArticles, onNavigate, onReadMore }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
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

  const categories = [
    { value: 'company', label: { en: 'Company', ar: 'الشركة' } },
    { value: 'performance', label: { en: 'Performance', ar: 'الأداء' } },
    { value: 'sustainability', label: { en: 'Sustainability', ar: 'الاستدامة' } },
    { value: 'finance', label: { en: 'Finance', ar: 'المالية' } },
    { value: 'technology', label: { en: 'Technology', ar: 'التكنولوجيا' } },
    { value: 'community', label: { en: 'Community', ar: 'المجتمع' } }
  ];

  // Pagination logic
  const articlesPerPage = 6;
  const totalPages = Math.ceil(newsArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = newsArticles.slice(startIndex, endIndex);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return isArabic 
      ? date.toLocaleDateString('ar-QA')
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const featuredArticle = currentArticles.find(article => article.featured);
  const regularArticles = currentArticles.filter(article => !article.featured);

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
              {isArabic ? 'الأخبار' : 'News'}
            </span>
          </div>

          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {isArabic ? 'الأخبار' : 'News'}
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

      {/* Featured Article */}
      {featuredArticle && (
        <section ref={sectionRef} className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={featuredArticle.image}
                      alt={isArabic ? featuredArticle.title.ar : featuredArticle.title.en}
                      className="w-full h-96 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#005670] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {isArabic ? 'خبر مميز' : 'Featured'}
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(featuredArticle.date)}
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#231f20] mb-6 leading-tight">
                      {isArabic ? featuredArticle.title.ar : featuredArticle.title.en}
                    </h2>
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {isArabic ? featuredArticle.excerpt.ar : featuredArticle.excerpt.en}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {featuredArticle.views}
                        </div>
                        <div className="flex items-center">
                          <Share2 className="w-4 h-4 mr-1" />
                          {featuredArticle.shares}
                        </div>
                      </div>
                    </div>
                    
                    <button className="inline-flex items-center bg-[#005670] hover:bg-[#004558] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                      {isArabic ? 'اقرأ المزيد' : 'Read More'}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <article
                key={article.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={isArabic ? article.title.ar : article.title.en}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#005670] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                    <div className="flex items-center text-sm text-[#005670]">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(article.date)}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-[#005670] bg-opacity-90 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {categories.find(c => c.value === article.category)?.label[isArabic ? 'ar' : 'en']}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#231f20] mb-3 line-clamp-2 leading-tight group-hover:text-[#005670] transition-colors duration-300">
                    {isArabic ? article.title.ar : article.title.en}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {isArabic ? article.excerpt.ar : article.excerpt.en}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {article.views}
                      </div>
                      <div className="flex items-center">
                        <Share2 className="w-4 h-4 mr-1" />
                        {article.shares}
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => {
                      onReadMore?.(article.id);
                    }}
                    className="inline-flex items-center text-[#005670] hover:text-[#004558] font-semibold transition-colors duration-200 group"
                  >
                    {isArabic ? 'اقرأ المزيد' : 'Read More'}
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {currentArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">
                {isArabic ? 'لا توجد أخبار متاحة حالياً تطابق معايير البحث' : 'No news currently available matching your search criteria'}
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center space-x-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-[#005670] hover:bg-[#005670] hover:text-white'
                }`}
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                {isArabic ? 'السابق' : 'Previous'}
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                      currentPage === index + 1
                        ? 'bg-[#005670] text-white'
                        : 'text-[#005670] hover:bg-[#005670] hover:text-white'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-[#005670] hover:bg-[#005670] hover:text-white'
                }`}
              >
                {isArabic ? 'التالي' : 'Next'}
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </div>
          )}

          {/* Page Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {isArabic 
                ? `عرض ${startIndex + 1}-${Math.min(endIndex, newsArticles.length)} من ${newsArticles.length} مقال`
                : `Showing ${startIndex + 1}-${Math.min(endIndex, newsArticles.length)} of ${newsArticles.length} articles`
              }
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[#005670] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              {isArabic ? 'اشترك في نشرتنا الإخبارية' : 'Subscribe to Our Newsletter'}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              {isArabic
                ? 'احصل على آخر الأخبار والتحديثات من نبراس الأردن مباشرة في بريدك الإلكتروني'
                : 'Get the latest news and updates from Nibras Jordan delivered directly to your inbox'
              }
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder={isArabic ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-[#005670] px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  {isArabic ? 'اشترك' : 'Subscribe'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;