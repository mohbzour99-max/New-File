// Main application file
import { LanguageManager, AnimationManager, PerformanceManager, FormManager, StorageManager, debounce, throttle } from './utils.js';
import { Router, navigateToPage } from './navigation.js';

// Global state
let isArabic = false;
let currentPage = 'home';
let currentPagePath = window.location.pathname;

// Initialize utility classes
const languageManager = new LanguageManager();
const animationManager = new AnimationManager();
const performanceManager = new PerformanceManager();
const formManager = new FormManager();
const storageManager = new StorageManager();
const router = new Router();

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Initialize event listeners
    setupEventListeners();
    
    // Initialize video controls
    setupVideoControls();
    
    // Populate dynamic content
    populateProjects();
    populateNews();
    
    // Initialize intersection observers for animations
    setupIntersectionObservers();
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Load language preference
    loadLanguagePreference();
    
    // Set current page based on URL
    setCurrentPageFromURL();
}

function setupEventListeners() {
    // Language toggle
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }

    // Logo click
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('click', () => navigateToPage('home'));
    }

    // Navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const page = e.currentTarget.getAttribute('data-page');
            if (page) {
                navigateToPage(page);
            }
        });
    });

    // Footer links
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const page = e.currentTarget.getAttribute('data-page');
            if (page) {
                navigateToPage(page);
            }
        });
    });

    // Hero buttons
    const heroBusinessBtn = document.getElementById('heroBusinessBtn');
    if (heroBusinessBtn) {
        heroBusinessBtn.addEventListener('click', () => navigateToPage('business'));
    }

    const aboutLearnMoreBtn = document.getElementById('aboutLearnMoreBtn');
    if (aboutLearnMoreBtn) {
        aboutLearnMoreBtn.addEventListener('click', () => navigateToPage('about'));
    }

    const operationsLearnMoreBtn = document.getElementById('operationsLearnMoreBtn');
    if (operationsLearnMoreBtn) {
        operationsLearnMoreBtn.addEventListener('click', () => navigateToPage('business'));
    }

    const viewAllProjectsBtn = document.getElementById('viewAllProjectsBtn');
    if (viewAllProjectsBtn) {
        viewAllProjectsBtn.addEventListener('click', () => navigateToPage('business'));
    }

    const viewAllNewsBtn = document.getElementById('viewAllNewsBtn');
    if (viewAllNewsBtn) {
        viewAllNewsBtn.addEventListener('click', () => navigateToPage('news'));
    }

    // Search button
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => navigateToPage('search'));
    }

    // Mobile menu
    setupMobileMenu();
}

function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        
        if (mobileMenuBackdrop) {
            mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
        }
    }

    // Populate mobile menu
    populateMobileMenu();
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuPanel = document.getElementById('mobileMenuPanel');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (mobileMenu && mobileMenuPanel && mobileMenuBtn) {
        const isOpen = !mobileMenu.classList.contains('invisible');
        
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
}

function openMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuPanel = document.getElementById('mobileMenuPanel');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (mobileMenu && mobileMenuPanel && mobileMenuBtn) {
        mobileMenu.classList.remove('invisible', 'opacity-0');
        mobileMenu.classList.add('visible', 'opacity-100');
        
        mobileMenuPanel.classList.remove('translate-x-full');
        mobileMenuPanel.classList.add('translate-x-0');
        
        // Change icon to X
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.setAttribute('data-lucide', 'x');
            lucide.createIcons();
        }
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuPanel = document.getElementById('mobileMenuPanel');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (mobileMenu && mobileMenuPanel && mobileMenuBtn) {
        mobileMenu.classList.add('invisible', 'opacity-0');
        mobileMenu.classList.remove('visible', 'opacity-100');
        
        mobileMenuPanel.classList.add('translate-x-full');
        mobileMenuPanel.classList.remove('translate-x-0');
        
        // Change icon back to menu
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    }
}

function populateMobileMenu() {
    const mobileMenuPanel = document.getElementById('mobileMenuPanel');
    if (!mobileMenuPanel) return;

    const menuItems = [
        { en: 'ABOUT US', ar: 'من نحن', page: 'about' },
        { en: 'SUSTAINABILITY', ar: 'الاستدامة', page: 'sustainability-main' },
        { en: 'OUR BUSINESS', ar: 'أعمالنا', page: 'business' },
        { en: 'CAREERS', ar: 'الوظائف', page: 'careers' },
        { en: 'NEWS', ar: 'الأخبار', page: 'news' },
        { en: 'CONTACT US', ar: 'اتصل بنا', page: 'contact' }
    ];

    mobileMenuPanel.innerHTML = `
        <!-- Menu Header -->
        <div class="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-[#005670] to-[#004558]">
            <img 
                src="/Logo-.png" 
                alt="Nebras Power" 
                class="h-12 w-auto filter brightness-0 invert"
            />
            <button id="mobileMenuClose" class="p-2 text-white hover:text-gray-200 transition-colors duration-200">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>
        </div>

        <!-- Menu Items -->
        <div class="py-4">
            ${menuItems.map((item, index) => `
                <button
                    class="mobile-nav-item block w-full text-left px-6 py-4 text-gray-800 hover:text-[#005670] hover:bg-gradient-to-r hover:from-[#005670] hover:from-opacity-5 hover:to-transparent transition-all duration-200 font-medium text-lg border-b border-gray-100 last:border-b-0"
                    data-page="${item.page}"
                    style="transition-delay: ${index * 50}ms"
                >
                    <div class="flex items-center justify-between">
                        <span class="nav-text" data-en="${item.en}" data-ar="${item.ar}">${item.en}</span>
                        <div class="w-1 h-1 bg-[#005670] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </div>
                </button>
            `).join('')}
        </div>

        <!-- Menu Footer -->
        <div class="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
            <!-- Social Media Icons -->
            <div class="flex items-center justify-center space-x-6 mb-4">
                <a href="#" class="text-gray-600 hover:text-[#005670] transition-colors duration-200 transform hover:scale-110">
                    <i data-lucide="facebook" class="w-5 h-5"></i>
                </a>
                <a href="#" class="text-gray-600 hover:text-[#005670] transition-colors duration-200 transform hover:scale-110">
                    <i data-lucide="twitter" class="w-5 h-5"></i>
                </a>
                <a href="#" class="text-gray-600 hover:text-[#005670] transition-colors duration-200 transform hover:scale-110">
                    <i data-lucide="linkedin" class="w-5 h-5"></i>
                </a>
            </div>
            
            <!-- Language Toggle -->
            <div class="flex items-center justify-center mb-4">
                <button id="mobileLanguageToggle" class="bg-[#005670] hover:bg-[#004558] text-white px-6 py-2 rounded font-medium text-sm transition-all duration-200 flex items-center space-x-2 transform hover:scale-105">
                    <i data-lucide="globe" class="w-4 h-4"></i>
                    <span class="nav-text" data-en="العربية" data-ar="English">العربية</span>
                </button>
            </div>
            
            <!-- Search -->
            <div class="flex items-center justify-center">
                <button id="mobileSearchBtn" class="flex items-center space-x-2 text-gray-600 hover:text-[#005670] transition-colors duration-200 transform hover:scale-105">
                    <i data-lucide="search" class="w-4 h-4"></i>
                    <span class="text-sm font-medium nav-text" data-en="Search" data-ar="بحث">Search</span>
                </button>
            </div>
        </div>
    `;

    // Add event listeners for mobile menu items
    const mobileNavItems = mobileMenuPanel.querySelectorAll('.mobile-nav-item');
    mobileNavItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const page = e.currentTarget.getAttribute('data-page');
            if (page) {
                navigateToPage(page);
                closeMobileMenu();
            }
        });
    });

    // Mobile menu close button
    const mobileMenuClose = mobileMenuPanel.querySelector('#mobileMenuClose');
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    // Mobile language toggle
    const mobileLanguageToggle = mobileMenuPanel.querySelector('#mobileLanguageToggle');
    if (mobileLanguageToggle) {
        mobileLanguageToggle.addEventListener('click', () => {
            toggleLanguage();
            closeMobileMenu();
        });
    }

    // Mobile search button
    const mobileSearchBtn = mobileMenuPanel.querySelector('#mobileSearchBtn');
    if (mobileSearchBtn) {
        mobileSearchBtn.addEventListener('click', () => {
            navigateToPage('search');
            closeMobileMenu();
        });
    }

    // Recreate icons for mobile menu
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function setupVideoControls() {
    const video = document.getElementById('heroVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const muteBtn = document.getElementById('muteBtn');

    if (video && playPauseBtn && muteBtn) {
        let isPlaying = true;
        let isMuted = true;

        // Play/Pause functionality
        playPauseBtn.addEventListener('click', () => {
            if (isPlaying) {
                video.pause();
                playPauseBtn.querySelector('i').setAttribute('data-lucide', 'play');
            } else {
                video.play();
                playPauseBtn.querySelector('i').setAttribute('data-lucide', 'pause');
            }
            isPlaying = !isPlaying;
            lucide.createIcons();
        });

        // Mute/Unmute functionality
        muteBtn.addEventListener('click', () => {
            video.muted = !isMuted;
            if (isMuted) {
                muteBtn.querySelector('i').setAttribute('data-lucide', 'volume-2');
            } else {
                muteBtn.querySelector('i').setAttribute('data-lucide', 'volume-x');
            }
            isMuted = !isMuted;
            lucide.createIcons();
        });

        // Video time update for looping
        video.addEventListener('timeupdate', () => {
            if (video.currentTime >= 15) {
                video.currentTime = 0;
            }
        });

        // Handle video load
        video.addEventListener('loadeddata', () => {
            video.play().catch(() => {
                isPlaying = false;
                playPauseBtn.querySelector('i').setAttribute('data-lucide', 'play');
                lucide.createIcons();
            });
        });
    }
}

function toggleLanguage() {
    isArabic = !isArabic;
    languageManager.isArabic = isArabic;
    languageManager.updateDOM();
    languageManager.updateDirection();
    languageManager.savePreference();
}

function setCurrentPageFromURL() {
    const path = window.location.pathname;
    
    if (path.includes('about.html')) {
        currentPage = 'about';
    } else if (path.includes('business.html')) {
        currentPage = 'business';
    } else if (path.includes('careers.html')) {
        currentPage = 'careers';
    } else if (path.includes('contact.html')) {
        currentPage = 'contact';
    } else if (path.includes('news.html')) {
        currentPage = 'news';
    } else if (path.includes('sustainability.html')) {
        currentPage = 'sustainability-main';
    } else if (path.includes('search.html')) {
        currentPage = 'search';
    } else {
        currentPage = 'home';
    }
    
    updateActiveNavigation(currentPage);
}

function loadLanguagePreference() {
    languageManager.loadPreference();
    isArabic = languageManager.isArabic;
}

function updateActiveNavigation(page) {
    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Add active class to current page nav item
    const activeNavItem = document.querySelector(`[data-page="${page}"]`);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }
}

function populateProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    const projects = [
        {
            id: 1,
            icon: 'building-2',
            image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
            title: { en: 'Amman East Power Plant (IPP1)', ar: 'محطة عمان الشرقية للطاقة' },
            capacity: '400 MW',
            investment: '$300M',
            description: { 
                en: 'A 400 MW combined cycle gas plant—Jordan\'s first Independent Power Producer—commissioned with a USD 300 million investment.',
                ar: 'محطة غاز دورة مركبة بقدرة 400 ميجاواط - أول منتج مستقل للطاقة في الأردن - تم تشغيلها باستثمار 300 مليون دولار أمريكي.'
            },
            features: [
                { en: 'Combined Cycle Technology', ar: 'تقنية الدورة المركبة' },
                { en: 'First IPP in Jordan', ar: 'أول منتج مستقل في الأردن' },
                { en: 'World Bank Standards', ar: 'معايير البنك الدولي' }
            ]
        },
        {
            id: 2,
            icon: 'zap',
            image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
            title: { en: 'Levant Power Plant (IPP4)', ar: 'محطة بلاد الشام للطاقة' },
            capacity: '241 MW',
            investment: '$360M',
            description: { 
                en: '241 MW tri-fuel peaking plant offering flexible operations to stabilize the national grid.',
                ar: 'محطة ذروة ثلاثية الوقود بقدرة 241 ميجاواط توفر عمليات مرنة لاستقرار الشبكة الوطنية.'
            },
            features: [
                { en: 'Tri-Fuel Flexibility', ar: 'مرونة الوقود الثلاثي' },
                { en: 'Peaking Operations', ar: 'عمليات الذروة' },
                { en: 'Grid Stabilization', ar: 'استقرار الشبكة' }
            ]
        }
    ];

    projectsGrid.innerHTML = projects.map(project => `
        <div class="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 card-hover">
            <!-- Image Section -->
            <div class="relative h-64 overflow-hidden">
                <img
                    src="${project.image}"
                    alt="${project.title.en}"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#005670] via-transparent to-transparent opacity-60"></div>
                
                <!-- Floating Stats -->
                <div class="absolute top-6 right-6 flex space-x-3">
                    <div class="bg-white bg-opacity-95 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span class="text-[#005670] font-bold text-sm">${project.capacity}</span>
                    </div>
                    <div class="bg-white bg-opacity-95 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span class="text-[#005670] font-bold text-sm">${project.investment}</span>
                    </div>
                </div>

                <!-- Icon -->
                <div class="absolute bottom-6 left-6">
                    <div class="w-14 h-14 bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <i data-lucide="${project.icon}" class="w-7 h-7 text-[#005670]"></i>
                    </div>
                </div>
            </div>

            <!-- Content Section -->
            <div class="p-8">
                <h3 class="text-2xl font-bold text-[#231f20] group-hover:text-[#005670] mb-4 transition-colors duration-300">
                    <span class="nav-text" data-en="${project.title.en}" data-ar="${project.title.ar}">${project.title.en}</span>
                </h3>
                
                <p class="text-gray-600 leading-relaxed mb-6">
                    <span class="nav-text" data-en="${project.description.en}" data-ar="${project.description.ar}">${project.description.en}</span>
                </p>

                <!-- Features List -->
                <div class="space-y-3 mb-6">
                    ${project.features.map(feature => `
                        <div class="flex items-center">
                            <div class="w-2 h-2 bg-[#005670] rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                            <span class="text-gray-700 text-sm font-medium">
                                <span class="nav-text" data-en="${feature.en}" data-ar="${feature.ar}">${feature.en}</span>
                            </span>
                        </div>
                    `).join('')}
                </div>
                
                <!-- CTA Button -->
                <button class="project-learn-more inline-flex items-center text-[#005670] hover:text-white bg-transparent hover:bg-[#005670] border-2 border-[#005670] px-6 py-3 rounded-full font-semibold transition-all duration-300 group-hover:scale-105" data-project-id="${project.id}">
                    <span class="nav-text" data-en="Learn More" data-ar="اقرأ المزيد">Learn More</span>
                    <i data-lucide="arrow-right" class="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"></i>
                </button>
            </div>

            <!-- Hover Effect Border -->
            <div class="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#005670] group-hover:border-opacity-20 transition-all duration-300 pointer-events-none"></div>
        </div>
    `).join('');

    // Add event listeners for project buttons
    const projectButtons = projectsGrid.querySelectorAll('.project-learn-more');
    projectButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const projectId = e.currentTarget.getAttribute('data-project-id');
            navigateToPage('business');
        });
    });

    // Recreate icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function populateNews() {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;

    const newsItems = [
        {
            id: 1,
            image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            date: '2024-01-15',
            title: { 
                en: 'Nibras Jordan Celebrates 10 Years of Reliable Power Generation',
                ar: 'نبراس الأردن تحتفل بـ 10 سنوات من توليد الطاقة الموثوق'
            },
            description: { 
                en: 'Amman East and Levant Power Plants continue to provide over 8% of Jordan\'s electricity with exceptional reliability.',
                ar: 'محطتا عمان الشرقية وبلاد الشام للطاقة تواصلان توفير أكثر من 8% من كهرباء الأردن بموثوقية استثنائية.'
            }
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            date: '2024-01-10',
            title: { 
                en: 'Nibras Jordan Achieves Record Performance in 2023',
                ar: 'نبراس الأردن تحقق أداءً قياسياً في 2023'
            },
            description: { 
                en: '641 MW combined capacity delivers consistent, efficient power generation exceeding operational targets.',
                ar: 'القدرة المجمعة البالغة 641 ميجاواط توفر توليد طاقة ثابت وفعال يتجاوز الأهداف التشغيلية.'
            }
        },
        {
            id: 3,
            image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            date: '2024-01-05',
            title: { 
                en: 'Environmental Compliance Achievement at Nibras Jordan Facilities',
                ar: 'إنجاز الامتثال البيئي في منشآت نبراس الأردن'
            },
            description: { 
                en: 'Both power plants maintain full compliance with World Bank, JBIC, and OPIC environmental guidelines.',
                ar: 'كلا محطتي الطاقة تحافظان على الامتثال الكامل للمبادئ التوجيهية البيئية للبنك الدولي وJBIC وOPIC.'
            }
        },
        {
            id: 4,
            image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
            date: '2023-12-28',
            title: { 
                en: 'International Financing Success Supports Nibras Jordan Growth',
                ar: 'نجاح التمويل الدولي يدعم نمو نبراس الأردن'
            },
            description: { 
                en: 'Strong partnerships with OPIC, JBIC, EBRD, and international banks enable continued operational excellence.',
                ar: 'الشراكات القوية مع OPIC وJBIC وEBRD والبنوك الدولية تمكن من استمرار التميز التشغيلي.'
            }
        }
    ];

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return isArabic 
            ? date.toLocaleDateString('ar-QA')
            : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    newsGrid.innerHTML = newsItems.map((item, index) => `
        <article class="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 fade-in-up" style="transition-delay: ${index * 200}ms">
            <div class="relative overflow-hidden">
                <img
                    src="${item.image}"
                    alt="${item.title.en}"
                    class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-[#005670] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                
                <div class="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                    <div class="flex items-center text-sm text-[#005670]">
                        <i data-lucide="calendar" class="w-4 h-4 mr-1"></i>
                        ${formatDate(item.date)}
                    </div>
                </div>
            </div>
            
            <div class="p-6">
                <h3 class="text-lg font-bold text-[#231f20] mb-3 line-clamp-2 leading-tight">
                    <span class="nav-text" data-en="${item.title.en}" data-ar="${item.title.ar}">${item.title.en}</span>
                </h3>
                
                <p class="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    <span class="nav-text" data-en="${item.description.en}" data-ar="${item.description.ar}">${item.description.en}</span>
                </p>
                
                <button class="news-read-more inline-flex items-center text-[#005670] hover:text-[#004558] font-semibold transition-colors duration-200 group" data-news-id="${item.id}">
                    <span class="nav-text" data-en="Read More" data-ar="اقرأ المزيد">Read More</span>
                    <i data-lucide="arrow-right" class="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"></i>
                </button>
            </div>
        </article>
    `).join('');

    // Add event listeners for news buttons
    const newsButtons = newsGrid.querySelectorAll('.news-read-more');
    newsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const newsId = e.currentTarget.getAttribute('data-news-id');
            navigateToPage('news');
        });
    });

    // Recreate icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function setupIntersectionObservers() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in-up class
    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));
}

// Handle scroll events
window.addEventListener('scroll', throttle(() => {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('bg-white', 'shadow-lg');
        } else {
            header.classList.remove('shadow-lg');
        }
    }
}, 100));

// Handle resize events
window.addEventListener('resize', debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 1024) {
        closeMobileMenu();
    }
}, 250));

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
    const video = document.getElementById('heroVideo');
    if (video) {
        if (document.hidden) {
            video.pause();
        } else {
            video.play().catch(() => {
                // Handle autoplay restrictions
            });
        }
    }
});

// Export functions for global access
window.navigateToPage = navigateToPage;
window.toggleLanguage = toggleLanguage;
window.isArabic = () => isArabic;