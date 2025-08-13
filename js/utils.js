// Utility functions for the application

// Language management
export class LanguageManager {
    constructor() {
        this.isArabic = false;
        this.translations = {};
    }

    toggle() {
        this.isArabic = !this.isArabic;
        this.updateDOM();
        this.updateDirection();
        this.savePreference();
    }

    updateDOM() {
        const textElements = document.querySelectorAll('.nav-text');
        textElements.forEach(element => {
            const enText = element.getAttribute('data-en');
            const arText = element.getAttribute('data-ar');
            
            if (enText && arText) {
                element.textContent = this.isArabic ? arText : enText;
            }
        });

        // Update language toggle button text
        const languageText = document.getElementById('languageText');
        if (languageText) {
            languageText.textContent = this.isArabic ? 'English' : 'العربية';
        }

        // Update mobile language toggle
        const mobileLanguageToggle = document.querySelector('#mobileLanguageToggle .nav-text');
        if (mobileLanguageToggle) {
            mobileLanguageToggle.textContent = this.isArabic ? 'English' : 'العربية';
        }
    }

    updateDirection() {
        const body = document.body;
        const html = document.documentElement;
        
        if (this.isArabic) {
            body.classList.add('rtl');
            html.setAttribute('dir', 'rtl');
            html.setAttribute('lang', 'ar');
        } else {
            body.classList.remove('rtl');
            html.setAttribute('dir', 'ltr');
            html.setAttribute('lang', 'en');
        }
    }

    savePreference() {
        localStorage.setItem('language', this.isArabic ? 'ar' : 'en');
    }

    loadPreference() {
        const saved = localStorage.getItem('language');
        if (saved) {
            this.isArabic = saved === 'ar';
            this.updateDOM();
            this.updateDirection();
        }
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return this.isArabic 
            ? date.toLocaleDateString('ar-QA')
            : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
}

// Animation utilities
export class AnimationManager {
    constructor() {
        this.observers = new Map();
        this.setupIntersectionObserver();
    }

    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Add staggered animation delays for child elements
                    const children = entry.target.querySelectorAll('.stagger-child');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, index * 100);
                    });
                }
            });
        }, options);

        this.observers.set('fadeIn', observer);
    }

    observeElement(element, type = 'fadeIn') {
        const observer = this.observers.get(type);
        if (observer && element) {
            observer.observe(element);
        }
    }

    observeElements(selector, type = 'fadeIn') {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            this.observeElement(element, type);
        });
    }

    // Smooth scroll to element
    scrollToElement(selector, offset = 0) {
        const element = document.querySelector(selector);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Page transition effects
    fadeOutPage(callback) {
        document.body.style.opacity = '0';
        document.body.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            if (callback) callback();
            this.fadeInPage();
        }, 300);
    }

    fadeInPage() {
        document.body.style.opacity = '1';
        document.body.style.transform = 'translateY(0)';
    }
}

// Performance utilities
export class PerformanceManager {
    constructor() {
        this.lazyImages = [];
        this.setupLazyLoading();
    }

    setupLazyLoading() {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('loading');
                    imageObserver.unobserve(img);
                }
            });
        });

        // Observe all images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Debounce function for performance optimization
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Throttle function for scroll events
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Preload critical resources
    preloadResources(resources) {
        resources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource.url;
            link.as = resource.type;
            document.head.appendChild(link);
        });
    }
}

// Form utilities
export class FormManager {
    constructor() {
        this.validators = {
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            phone: /^[\+]?[1-9][\d]{0,15}$/,
            required: (value) => value && value.trim().length > 0
        };
    }

    validateField(field, rules) {
        const value = field.value;
        const errors = [];

        rules.forEach(rule => {
            if (rule === 'required' && !this.validators.required(value)) {
                errors.push('This field is required');
            } else if (rule === 'email' && value && !this.validators.email.test(value)) {
                errors.push('Please enter a valid email address');
            } else if (rule === 'phone' && value && !this.validators.phone.test(value)) {
                errors.push('Please enter a valid phone number');
            }
        });

        return errors;
    }

    showFieldError(field, errors) {
        // Remove existing error messages
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }

        if (errors.length > 0) {
            field.classList.add('border-red-500');
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'field-error text-red-500 text-sm mt-1';
            errorDiv.textContent = errors[0];
            field.parentNode.appendChild(errorDiv);
        } else {
            field.classList.remove('border-red-500');
        }
    }

    validateForm(form, rules) {
        let isValid = true;
        
        Object.keys(rules).forEach(fieldName => {
            const field = form.querySelector(`[name="${fieldName}"]`);
            if (field) {
                const errors = this.validateField(field, rules[fieldName]);
                this.showFieldError(field, errors);
                if (errors.length > 0) {
                    isValid = false;
                }
            }
        });

        return isValid;
    }
}

// Storage utilities
export class StorageManager {
    constructor() {
        this.prefix = 'nibras_';
    }

    set(key, value) {
        try {
            localStorage.setItem(this.prefix + key, JSON.stringify(value));
        } catch (e) {
            console.warn('Failed to save to localStorage:', e);
        }
    }

    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(this.prefix + key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.warn('Failed to read from localStorage:', e);
            return defaultValue;
        }
    }

    remove(key) {
        try {
            localStorage.removeItem(this.prefix + key);
        } catch (e) {
            console.warn('Failed to remove from localStorage:', e);
        }
    }

    clear() {
        try {
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith(this.prefix)) {
                    localStorage.removeItem(key);
                }
            });
        } catch (e) {
            console.warn('Failed to clear localStorage:', e);
        }
    }
}

// Utility functions
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}