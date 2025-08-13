// Contact page specific functionality

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', handleContactFormSubmit);
}

function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    // Simulate form submission
    console.log('Contact form submitted:', data);
    
    // Show success message
    const successMessage = isArabic 
        ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.'
        : 'Your message has been sent successfully! We will get back to you soon.';
    
    alert(successMessage);
    
    // Reset form
    e.target.reset();
}

// Update form placeholders based on language
function updateContactFormLanguage() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    if (nameInput) {
        nameInput.placeholder = isArabic ? 'أدخل اسمك الكامل' : 'Enter your full name';
    }
    
    if (emailInput) {
        emailInput.placeholder = isArabic ? 'أدخل بريدك الإلكتروني' : 'Enter your email address';
    }
    
    if (phoneInput) {
        phoneInput.placeholder = isArabic ? 'أدخل رقم هاتفك' : 'Enter your phone number';
    }
    
    if (messageInput) {
        messageInput.placeholder = isArabic ? 'اكتب رسالتك هنا...' : 'Write your message here...';
    }
}

// Override the global language toggle to update form
const originalToggleLanguage = window.toggleLanguage;
window.toggleLanguage = function() {
    originalToggleLanguage();
    updateContactFormLanguage();
};