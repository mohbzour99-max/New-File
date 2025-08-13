// Search page specific functionality

let searchData = [];

function setupSearch() {
    initializeSearchData();
    setupSearchInput();
    showInitialState();
}

function initializeSearchData() {
    searchData = [
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
            id: 'sustainability',
            type: 'page',
            title: { en: 'Sustainability', ar: 'الاستدامة' },
            description: { en: 'Our commitment to environmental stewardship and sustainable operations', ar: 'التزامنا بالإشراف البيئي والعمليات المستدامة' },
            url: 'sustainability-main'
        },
        // Projects
        {
            id: 'ipp1',
            type: 'project',
            title: { en: 'Amman East Power Plant (IPP1)', ar: 'محطة عمان الشرقية للطاقة' },
            description: { en: '400 MW combined cycle gas plant - Jordan\'s first Independent Power Producer', ar: 'محطة غاز دورة مركبة بقدرة 400 ميجاواط - أول منتج مستقل للطاقة في الأردن' },
            url: 'business',
            category: 'Power Generation'
        },
        {
            id: 'ipp4',
            type: 'project',
            title: { en: 'Levant Power Plant (IPP4)', ar: 'محطة بلاد الشام للطاقة' },
            description: { en: '241 MW tri-fuel peaking plant for grid stabilization', ar: 'محطة ذروة ثلاثية الوقود بقدرة 241 ميجاواط لاستقرار الشبكة' },
            url: 'business',
            category: 'Power Generation'
        },
        {
            id: 'solar',
            type: 'project',
            title: { en: 'AM Solar', ar: 'AM الطاقة الشمسية' },
            description: { en: 'Solar energy project - Clean and renewable energy for the future', ar: 'مشروع الطاقة الشمسية - طاقة نظيفة ومتجددة للمستقبل' },
            url: 'business',
            category: 'Renewable Energy'
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
}

function setupSearchInput() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    let searchTimeout;

    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();

        if (query === '') {
            showInitialState();
            return;
        }

        // Show loading state
        showLoadingState();

        // Debounce search
        searchTimeout = setTimeout(() => {
            performSearch(query);
        }, 300);
    });

    // Update placeholder based on language
    const updatePlaceholder = () => {
        searchInput.placeholder = isArabic ? 'ابحث في الموقع...' : 'Search the website...';
    };

    updatePlaceholder();

    // Override language toggle to update placeholder
    const originalToggle = window.toggleLanguage;
    window.toggleLanguage = function() {
        originalToggle();
        updatePlaceholder();
    };
}

function performSearch(query) {
    const searchResults = document.getElementById('searchResults');
    const noResults = document.getElementById('noResults');

    if (!searchResults || !noResults) return;

    const queryLower = query.toLowerCase();
    const filtered = searchData.filter(item => {
        const titleMatch = item.title.en.toLowerCase().includes(queryLower) || 
                          item.title.ar.toLowerCase().includes(queryLower);
        const descMatch = item.description.en.toLowerCase().includes(queryLower) || 
                         item.description.ar.toLowerCase().includes(queryLower);
        const categoryMatch = item.category?.toLowerCase().includes(queryLower);
        
        return titleMatch || descMatch || categoryMatch;
    });

    if (filtered.length === 0) {
        showNoResults(query);
    } else {
        showSearchResults(filtered, query);
    }
}

function showSearchResults(results, query) {
    const searchResults = document.getElementById('searchResults');
    const noResults = document.getElementById('noResults');

    if (!searchResults || !noResults) return;

    noResults.classList.add('hidden');
    searchResults.classList.remove('hidden');

    const getTypeIcon = (type) => {
        switch (type) {
            case 'page': return '📄';
            case 'project': return '🏭';
            case 'news': return '📰';
            default: return '📄';
        }
    };

    const getTypeLabel = (type) => {
        const labels = {
            page: { en: 'Page', ar: 'صفحة' },
            project: { en: 'Project', ar: 'مشروع' },
            news: { en: 'News', ar: 'أخبار' }
        };
        return labels[type] || labels.page;
    };

    const resultCountText = isArabic 
        ? `${results.length} نتيجة لـ "${query}"`
        : `${results.length} results for "${query}"`;

    searchResults.innerHTML = `
        <p class="text-gray-600 mb-6">${resultCountText}</p>
        <div class="space-y-4">
            ${results.map(result => `
                <div onclick="navigateToSearchResult('${result.url}')" class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer border border-gray-200 hover:border-[#005670]">
                    <div class="flex items-start justify-between">
                        <div class="flex-1">
                            <div class="flex items-center mb-2">
                                <span class="text-lg mr-2">${getTypeIcon(result.type)}</span>
                                <span class="text-sm text-[#005670] font-medium">
                                    <span class="nav-text" data-en="${getTypeLabel(result.type).en}" data-ar="${getTypeLabel(result.type).ar}">${getTypeLabel(result.type).en}</span>
                                </span>
                                ${result.category ? `
                                    <span class="mx-2 text-gray-300">•</span>
                                    <span class="text-sm text-gray-500">${result.category}</span>
                                ` : ''}
                                ${result.date ? `
                                    <span class="mx-2 text-gray-300">•</span>
                                    <div class="flex items-center text-sm text-gray-500">
                                        <i data-lucide="calendar" class="w-3 h-3 mr-1"></i>
                                        ${new Date(result.date).toLocaleDateString(isArabic ? 'ar-QA' : 'en-US')}
                                    </div>
                                ` : ''}
                            </div>
                            
                            <h3 class="text-xl font-semibold text-[#231f20] mb-2 hover:text-[#005670] transition-colors duration-200">
                                <span class="nav-text" data-en="${result.title.en}" data-ar="${result.title.ar}">${result.title.en}</span>
                            </h3>
                            
                            <p class="text-gray-600 leading-relaxed">
                                <span class="nav-text" data-en="${result.description.en}" data-ar="${result.description.ar}">${result.description.en}</span>
                            </p>
                        </div>
                        
                        <i data-lucide="arrow-right" class="w-5 h-5 text-gray-400 ml-4 flex-shrink-0"></i>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Recreate icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function showNoResults(query) {
    const searchResults = document.getElementById('searchResults');
    const noResults = document.getElementById('noResults');

    if (!searchResults || !noResults) return;

    searchResults.classList.add('hidden');
    noResults.classList.remove('hidden');

    const noResultsText = isArabic 
        ? `لم يتم العثور على نتائج لـ "${query}"`
        : `No results found for "${query}"`;

    const noResultsDesc = isArabic 
        ? `لم نتمكن من العثور على أي نتائج لـ "${query}"`
        : `We couldn't find any results for "${query}"`;

    noResults.innerHTML = `
        <i data-lucide="search" class="w-16 h-16 text-gray-300 mx-auto mb-4"></i>
        <h3 class="text-xl font-semibold text-gray-600 mb-2">
            <span class="nav-text" data-en="No results found" data-ar="لم يتم العثور على نتائج">No results found</span>
        </h3>
        <p class="text-gray-500">${noResultsDesc}</p>
    `;

    // Recreate icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function showInitialState() {
    const searchResults = document.getElementById('searchResults');
    const noResults = document.getElementById('noResults');

    if (!searchResults || !noResults) return;

    searchResults.classList.add('hidden');
    noResults.classList.remove('hidden');

    noResults.innerHTML = `
        <i data-lucide="search" class="w-16 h-16 text-gray-300 mx-auto mb-4"></i>
        <h3 class="text-xl font-semibold text-gray-600 mb-2">
            <span class="nav-text" data-en="Start searching" data-ar="ابدأ البحث">Start searching</span>
        </h3>
        <p class="text-gray-500">
            <span class="nav-text" data-en="Enter a word or phrase to search the website" data-ar="أدخل كلمة أو عبارة للبحث في الموقع">
                Enter a word or phrase to search the website
            </span>
        </p>
    `;

    // Recreate icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function showLoadingState() {
    const searchResults = document.getElementById('searchResults');
    const noResults = document.getElementById('noResults');

    if (!searchResults || !noResults) return;

    noResults.classList.add('hidden');
    searchResults.classList.remove('hidden');

    searchResults.innerHTML = `
        <div class="text-center py-12">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#005670] mx-auto"></div>
            <p class="mt-4 text-gray-600">
                <span class="nav-text" data-en="Searching..." data-ar="جاري البحث...">Searching...</span>
            </p>
        </div>
    `;
}

function navigateToSearchResult(url) {
    navigateToPage(url);
}