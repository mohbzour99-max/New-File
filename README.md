# Nibras Jordan - Native HTML/CSS/JavaScript Website

This is the native HTML/CSS/JavaScript version of the Nibras Jordan website, converted from React.

## Project Structure

```
/
├── index.html              # Main homepage
├── styles/
│   └── main.css           # Main stylesheet with Tailwind CSS and custom styles
├── js/
│   ├── main.js            # Main JavaScript functionality
│   ├── navigation.js      # Navigation and routing
│   ├── utils.js           # Utility functions and classes
│   ├── careers.js         # Careers page specific functionality
│   └── contact.js         # Contact page specific functionality
├── pages/
│   ├── about.html         # About Us page
│   ├── business.html      # Our Business page
│   ├── careers.html       # Careers page
│   └── contact.html       # Contact Us page
└── public/
    └── Logo-.png          # Company logo and other assets
```

## Features

### ✅ Converted Features
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Bilingual Support**: English/Arabic language toggle with RTL support
- **Interactive Navigation**: Header navigation with mobile menu
- **Video Background**: Hero section with video controls
- **Dynamic Content**: JavaScript-powered content population
- **Smooth Animations**: CSS animations and transitions
- **Form Handling**: Contact forms with validation
- **Modern UI**: Clean, professional design matching the original

### 🔧 Technical Implementation
- **Tailwind CSS**: Using CDN for styling (same classes as React version)
- **Lucide Icons**: Icon library for consistent iconography
- **Vanilla JavaScript**: No frameworks, pure JavaScript functionality
- **Modular Code**: Organized into separate JS files for maintainability
- **Performance Optimized**: Lazy loading, debounced events, and efficient DOM manipulation

### 📱 Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Touch-friendly interactions
- Accessibility features

## Usage

### Development
1. Open `index.html` in a web browser
2. For local development, use a simple HTTP server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### Customization
- **Styling**: Modify `styles/main.css` for custom styles
- **Content**: Update HTML files and JavaScript data objects
- **Languages**: Add translations in the `data-en` and `data-ar` attributes
- **Navigation**: Modify the navigation structure in `js/main.js`

### Adding New Pages
1. Create new HTML file in `pages/` directory
2. Add route to `js/navigation.js`
3. Create page-specific JavaScript file if needed
4. Update navigation menus in `js/main.js`

## Key Differences from React Version

### Architecture
- **State Management**: Uses global variables instead of React state
- **Component Logic**: Converted to vanilla JavaScript functions
- **Event Handling**: Direct DOM event listeners instead of React event handlers
- **Routing**: Simple page-based routing instead of React Router

### Functionality
- **Language Toggle**: Implemented with DOM manipulation
- **Dynamic Content**: Populated via JavaScript instead of React components
- **Animations**: CSS-based animations with Intersection Observer API
- **Form Handling**: Native form validation and submission

### Performance
- **Bundle Size**: Smaller footprint without React framework
- **Loading Speed**: Faster initial load with static HTML
- **SEO Friendly**: Better search engine optimization with static content
- **Caching**: Improved caching capabilities for static assets

## Maintenance Notes

### Code Organization
- Keep JavaScript modular and well-commented
- Use consistent naming conventions
- Maintain separation of concerns (HTML structure, CSS styling, JS behavior)
- Follow accessibility best practices

### Performance Optimization
- Optimize images and compress assets
- Minimize HTTP requests
- Use efficient CSS selectors
- Implement proper caching strategies

### Browser Compatibility
- Test across different browsers and devices
- Use progressive enhancement for advanced features
- Provide fallbacks for older browsers
- Ensure graceful degradation

## Future Enhancements

### Potential Improvements
- **Service Worker**: For offline functionality
- **Web Components**: For reusable component architecture
- **Build Process**: Webpack or Vite for asset optimization
- **Testing**: Unit and integration tests
- **Analytics**: Google Analytics or similar tracking
- **Performance Monitoring**: Real User Monitoring (RUM)

### Scalability Considerations
- **Content Management**: Consider headless CMS integration
- **Internationalization**: Expand language support
- **API Integration**: Connect to backend services
- **Progressive Web App**: PWA features for mobile experience