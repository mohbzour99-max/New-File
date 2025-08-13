// News page specific functionality

function populateNewsContent() {
    populateFeaturedArticle();
    populateNewsGrid();
    setupNewsletterSubscription();
}

function populateFeaturedArticle() {
    const featuredArticle = document.getElementById('featuredArticle');
    if (!featuredArticle) return;

    const article = {
        id: 1,
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
        views: 1250,
        shares: 45
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return isArabic 
            ? date.toLocaleDateString('ar-QA')
            : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    featuredArticle.innerHTML = `
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="grid lg:grid-cols-2 gap-0">
                <div class="relative">
                    <img
                        src="${article.image}"
                        alt="${article.title.en}"
                        class="w-full h-96 lg:h-full object-cover"
                    />
                    <div class="absolute top-4 left-4 bg-[#005670] text-white px-4 py-2 rounded-full text-sm font-semibold">
                        <span class="nav-text" data-en="Featured" data-ar="خبر مميز">Featured</span>
                    </div>
                </div>
                
                <div class="p-8 lg:p-12 flex flex-col justify-center">
                    <div class="flex items-center text-sm text-gray-500 mb-4">
                        <i data-lucide="calendar" class="w-4 h-4 mr-2"></i>
                        ${formatDate(article.date)}
                    </div>
                    
                    <h2 class="text-3xl lg:text-4xl font-bold text-[#231f20] mb-6 leading-tight">
                        <span class="nav-text" data-en="${article.title.en}" data-ar="${article.title.ar}">${article.title.en}</span>
                    </h2>
                    
                    <p class="text-lg text-gray-700 leading-relaxed mb-6">
                        <span class="nav-text" data-en="${article.excerpt.en}" data-ar="${article.excerpt.ar}">${article.excerpt.en}</span>
                    </p>
                    
                    <div class="flex items-center justify-between mb-6">
                        <div class="flex items-center space-x-4 text-sm text-gray-500">
                            <div class="flex items-center">
                                <i data-lucide="eye" class="w-4 h-4 mr-1"></i>
                                ${article.views}
                            </div>
                            <div class="flex items-center">
                                <i data-lucide="share-2" class="w-4 h-4 mr-1"></i>
                                ${article.shares}
                            </div>
                        </div>
                    </div>
                    
                    <button class="inline-flex items-center bg-[#005670] hover:bg-[#004558] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg" onclick="readArticle(${article.id})">
                        <span class="nav-text" data-en="Read More" data-ar="اقرأ المزيد">Read More</span>
                        <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
                    </button>
                </div>
            </div>
        </div>
    `;

    // Recreate icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function populateNewsGrid() {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;

    const articles = [
        {
            id: 2,
            image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            date: '2024-01-10',
            category: 'performance',
            title: { 
                en: 'Nibras Jordan Achieves Record Performance in 2023',
                ar: 'نبراس الأردن تحقق أداءً قياسياً في 2023'
            },
            excerpt: { 
                en: '641 MW combined capacity delivers consistent, efficient power generation exceeding operational targets.',
                ar: 'القدرة المجمعة البالغة 641 ميجاواط توفر توليد طاقة ثابت وفعال يتجاوز الأهداف التشغيلية.'
            },
            views: 890,
            shares: 32
        },
        {
            id: 3,
            image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            date: '2024-01-05',
            category: 'sustainability',
            title: { 
                en: 'Environmental Compliance Achievement at Nibras Jordan Facilities',
                ar: 'إنجاز الامتثال البيئي في منشآت نبراس الأردن'
            },
            excerpt: { 
                en: 'Both power plants maintain full compliance with World Bank, JBIC, and OPIC environmental guidelines.',
                ar: 'كلا محطتي الطاقة تحافظان على الامتثال الكامل للمبادئ التوجيهية البيئية للبنك الدولي وJBIC وOPIC.'
            },
            views: 675,
            shares: 28
        },
        {
            id: 4,
            image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            date: '2023-12-28',
            category: 'finance',
            title: { 
                en: 'International Financing Success Supports Nibras Jordan Growth',
                ar: 'نجاح التمويل الدولي يدعم نمو نبراس الأردن'
            },
            excerpt: { 
                en: 'Strong partnerships with OPIC, JBIC, EBRD, and international banks enable continued operational excellence.',
                ar: 'الشراكات القوية مع OPIC وJBIC وEBRD والبنوك الدولية تمكن من استمرار التميز التشغيلي.'
            },
            views: 542,
            shares: 19
        },
        {
            id: 5,
            image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            date: '2023-12-20',
            category: 'technology',
            title: { 
                en: 'Advanced Technology Upgrades Enhance Plant Efficiency',
                ar: 'تحديثات التكنولوجيا المتقدمة تعزز كفاءة المحطة'
            },
            excerpt: { 
                en: 'Latest technological improvements at both facilities result in increased efficiency and reduced environmental impact.',
                ar: 'أحدث التحسينات التكنولوجية في كلا المنشأتين تؤدي إلى زيادة الكفاءة وتقليل التأثير البيئي.'
            },
            views: 423,
            shares: 15
        },
        {
            id: 6,
            image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            date: '2023-12-15',
            category: 'community',
            title: { 
                en: 'Community Development Programs Expand Across Jordan',
                ar: 'برامج التنمية المجتمعية تتوسع عبر الأردن'
            },
            excerpt: { 
                en: 'Nibras Jordan launches new community initiatives focusing on education, skills development, and local economic empowerment.',
                ar: 'نبراس الأردن تطلق مبادرات مجتمعية جديدة تركز على التعليم وتطوير المهارات والتمكين الاقتصادي المحلي.'
            },
            views: 367,
            shares: 22
        }
    ];

    const categories = {
        'performance': { en: 'Performance', ar: 'الأداء' },
        'sustainability': { en: 'Sustainability', ar: 'الاستدامة' },
        'finance': { en: 'Finance', ar: 'المالية' },
        'technology': { en: 'Technology', ar: 'التكنولوجيا' },
        'community': { en: 'Community', ar: 'المجتمع' }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return isArabic 
            ? date.toLocaleDateString('ar-QA')
            : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    newsGrid.innerHTML = articles.map((article, index) => `
        <article class="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div class="relative overflow-hidden">
                <img
                    src="${article.image}"
                    alt="${article.title.en}"
                    class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-[#005670] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                
                <div class="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                    <div class="flex items-center text-sm text-[#005670]">
                        <i data-lucide="calendar" class="w-4 h-4 mr-1"></i>
                        ${formatDate(article.date)}
                    </div>
                </div>

                <div class="absolute top-4 right-4 bg-[#005670] bg-opacity-90 text-white px-3 py-1 rounded-full text-xs font-medium">
                    <span class="nav-text" data-en="${categories[article.category].en}" data-ar="${categories[article.category].ar}">${categories[article.category].en}</span>
                </div>
            </div>
            
            <div class="p-6">
                <h3 class="text-xl font-bold text-[#231f20] mb-3 line-clamp-2 leading-tight group-hover:text-[#005670] transition-colors duration-300">
                    <span class="nav-text" data-en="${article.title.en}" data-ar="${article.title.ar}">${article.title.en}</span>
                </h3>
                
                <p class="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    <span class="nav-text" data-en="${article.excerpt.en}" data-ar="${article.excerpt.ar}">${article.excerpt.en}</span>
                </p>
                
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-4 text-sm text-gray-500">
                        <div class="flex items-center">
                            <i data-lucide="eye" class="w-4 h-4 mr-1"></i>
                            ${article.views}
                        </div>
                        <div class="flex items-center">
                            <i data-lucide="share-2" class="w-4 h-4 mr-1"></i>
                            ${article.shares}
                        </div>
                    </div>
                </div>
                
                <button onclick="readArticle(${article.id})" class="inline-flex items-center text-[#005670] hover:text-[#004558] font-semibold transition-colors duration-200 group">
                    <span class="nav-text" data-en="Read More" data-ar="اقرأ المزيد">Read More</span>
                    <i data-lucide="arrow-right" class="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"></i>
                </button>
            </div>
        </article>
    `).join('');

    // Recreate icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function setupNewsletterSubscription() {
    const subscribeBtn = document.getElementById('subscribeBtn');
    const newsletterEmail = document.getElementById('newsletterEmail');

    if (subscribeBtn && newsletterEmail) {
        subscribeBtn.addEventListener('click', () => {
            const email = newsletterEmail.value.trim();
            if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                const message = isArabic 
                    ? 'تم الاشتراك بنجاح في النشرة الإخبارية!'
                    : 'Successfully subscribed to newsletter!';
                alert(message);
                newsletterEmail.value = '';
            } else {
                const message = isArabic 
                    ? 'يرجى إدخال بريد إلكتروني صحيح'
                    : 'Please enter a valid email address';
                alert(message);
            }
        });

        // Update placeholder based on language
        const updatePlaceholder = () => {
            newsletterEmail.placeholder = isArabic ? 'أدخل بريدك الإلكتروني' : 'Enter your email';
        };

        // Initial placeholder update
        updatePlaceholder();

        // Override language toggle to update placeholder
        const originalToggle = window.toggleLanguage;
        window.toggleLanguage = function() {
            originalToggle();
            updatePlaceholder();
        };
    }
}

function readArticle(articleId) {
    const message = isArabic 
        ? `سيتم توجيهك إلى تفاصيل المقال رقم ${articleId}`
        : `You would be navigated to article ${articleId} details`;
    alert(message);
}