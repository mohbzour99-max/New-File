// Navigation and routing functionality

export class Router {
    constructor() {
        this.routes = {
            'home': '/',
            'about': '/pages/about.html',
            'business': '/pages/business.html',
            'careers': '/pages/careers.html',
            'contact': '/pages/contact.html',
            'news': '/pages/news.html',
            'sustainability-main': '/pages/sustainability.html',
            'search': '/pages/search.html'
        };
        
        this.currentPage = 'home';
        this.init();
    }

    init() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.page) {
                this.loadPage(e.state.page, false);
            }
        });

        // Set initial state
        history.replaceState({ page: 'home' }, '', '/');
    }

    navigate(page) {
        if (this.routes[page]) {
            this.loadPage(page, true);
        } else {
            console.warn(`Page "${page}" not found in routes`);
        }
    }

    loadPage(page, addToHistory = true) {
        if (page === 'home') {
            // If we're already on the home page, just scroll to top
            if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
                window.scrollTo(0, 0);
                return;
            }
            // Navigate to home page
            window.location.href = '/';
            return;
        }

        // For other pages, navigate to the specific HTML file
        const url = this.routes[page];
        if (url) {
            if (addToHistory) {
                history.pushState({ page }, '', url);
            }
            window.location.href = url;
        }
    }

    getCurrentPage() {
        return this.currentPage;
    }
}

// Global navigation function
export function navigateToPage(page) {
    const router = new Router();
    router.navigate(page);
}