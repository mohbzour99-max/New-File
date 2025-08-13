import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Calendar, Eye, Share2, Facebook, Twitter, Linkedin, Mail, ChevronRight } from 'lucide-react';

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

interface NewsDetailPageProps {
  isArabic: boolean;
  articleId: number;
  newsArticles: NewsArticle[];
  onBack: () => void;
  onNavigate?: (page: string) => void;
}

const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ isArabic, articleId, newsArticles, onBack, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  const article = newsArticles.find(a => a.id === articleId);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {isArabic ? 'المقال غير موجود' : 'Article Not Found'}
          </h1>
          <button
            onClick={onBack}
            className="inline-flex items-center bg-[#005670] hover:bg-[#004558] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {isArabic ? 'العودة إلى الأخبار' : 'Back to News'}
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return isArabic 
      ? date.toLocaleDateString('ar-QA')
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const categories = [
    { value: 'company', label: { en: 'Company', ar: 'الشركة' } },
    { value: 'performance', label: { en: 'Performance', ar: 'الأداء' } },
    { value: 'sustainability', label: { en: 'Sustainability', ar: 'الاستدامة' } },
    { value: 'finance', label: { en: 'Finance', ar: 'المالية' } },
    { value: 'technology', label: { en: 'Technology', ar: 'التكنولوجيا' } },
    { value: 'community', label: { en: 'Community', ar: 'المجتمع' } },
    { value: 'awards', label: { en: 'Awards', ar: 'الجوائز' } },
    { value: 'innovation', label: { en: 'Innovation', ar: 'الابتكار' } }
  ];

  const getCategoryLabel = (categoryValue: string) => {
    const category = categories.find(c => c.value === categoryValue);
    return category ? (isArabic ? category.label.ar : category.label.en) : categoryValue;
  };

  const relatedArticles = newsArticles
    .filter(a => a.id !== articleId && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Breadcrumb */}
          <div className="flex items-center text-gray-600 mb-4 text-sm">
            <button 
              onClick={() => onNavigate?.('home')}
              className="hover:text-[#005670] transition-colors duration-200 cursor-pointer"
            >
              {isArabic ? 'الرئيسية' : 'Home'}
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <button 
              onClick={() => onNavigate?.('news')}
              className="hover:text-[#005670] transition-colors duration-200 cursor-pointer"
            >
              {isArabic ? 'الأخبار' : 'News'}
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-800">
              {isArabic ? 'تفاصيل المقال' : 'Article Details'}
            </span>
          </div>

          <button
            onClick={onBack}
            className="inline-flex items-center text-[#005670] hover:text-[#004558] font-semibold transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {isArabic ? 'العودة إلى الأخبار' : 'Back to News'}
          </button>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Article Header */}
            <header className="mb-8">
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-[#005670] text-white rounded-full text-sm font-semibold">
                  {getCategoryLabel(article.category)}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-[#231f20] mb-6 leading-tight">
                {isArabic ? article.title.ar : article.title.en}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{formatDate(article.date)}</span>
                </div>
                <div className="flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  <span>{article.views} {isArabic ? 'مشاهدة' : 'views'}</span>
                </div>
                <div className="flex items-center">
                  <Share2 className="w-5 h-5 mr-2" />
                  <span>{article.shares} {isArabic ? 'مشاركة' : 'shares'}</span>
                </div>
              </div>

              {/* Excerpt */}
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                {isArabic ? article.excerpt.ar : article.excerpt.en}
              </p>
            </header>

            {/* Featured Image */}
            <div className="mb-8">
              <img
                src={article.image}
                alt={isArabic ? article.title.ar : article.title.en}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <div className="text-lg text-gray-800 leading-relaxed space-y-6">
                {(isArabic ? article.content.ar : article.content.en)
                  .split('\n')
                  .map((paragraph, index) => (
                    <p key={index} className="mb-6">
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>

            {/* Social Sharing */}
            <div className="border-t border-gray-200 pt-8 mb-12">
              <h3 className="text-lg font-semibold text-[#231f20] mb-4">
                {isArabic ? 'شارك هذا المقال' : 'Share this article'}
              </h3>
              <div className="flex space-x-4">
                <button className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center w-12 h-12 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center w-12 h-12 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center w-12 h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-full transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="border-t border-gray-200 pt-12">
                <h3 className="text-2xl font-bold text-[#231f20] mb-8">
                  {isArabic ? 'مقالات ذات صلة' : 'Related Articles'}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <div
                      key={relatedArticle.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                      onClick={() => window.location.reload()} // Simple reload for demo
                    >
                      <img
                        src={relatedArticle.image}
                        alt={isArabic ? relatedArticle.title.ar : relatedArticle.title.en}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-semibold text-[#231f20] mb-2 line-clamp-2">
                          {isArabic ? relatedArticle.title.ar : relatedArticle.title.en}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {isArabic ? relatedArticle.excerpt.ar : relatedArticle.excerpt.en}
                        </p>
                        <div className="flex items-center text-xs text-gray-500 mt-2">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(relatedArticle.date)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsDetailPage;