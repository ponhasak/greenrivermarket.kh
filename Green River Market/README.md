# FreshCatch - Fish & Vegetable Shop

## Project Structure

This project has been organized with **separated concerns** for better maintainability:

```
├── index.html              # Main HTML file (English version)
├── index_km.html           # Cambodian language version
├── styles.css              # All CSS styles with animations
├── script.js               # All JavaScript functionality
└── README.md               # This file
```

## Files Overview

### 📄 HTML Files
- **index.html** - English version with full content
- **index_km.html** - Cambodian (ខ្មែរ) version with translated content

Both HTML files use the same external CSS and JavaScript files.

### 🎨 styles.css
Contains all styling including:
- Global font family settings
- **Animations:**
  - Slide in/up animations
  - Scale and fade animations
  - Bounce and pulse effects
  - Shimmer effects
  - Staggered animations for product cards
- Hover effects and transitions
- Responsive design
- Hero section effects
- Product card animations
- Button ripple effects and hovers
- Footer and navigation styling

### 📜 script.js
Contains all functionality:
- Mobile menu toggle with animations
- Shopping cart counter
- Add-to-cart notifications with animations
- Smooth scrolling navigation
- Newsletter subscription
- Intersection observer for scroll animations
- Product filtering capabilities
- Number counter animations
- Notification system
- Event listeners for interactive elements

## Features

### ✨ Animations
The site includes multiple types of animations:
1. **Entry Animations** - Elements slide and fade in on page load
2. **Hover Effects** - Cards lift up with shadow, buttons scale
3. **Interactive Animations** - Button clicks trigger ripple effects
4. **Scroll Animations** - Elements animate as they appear on screen
5. **Icon Animations** - Cart icon bounces, badges pulse

### 🛒 Shopping Functionality
- Dynamic cart counter
- Add-to-cart notifications
- Visual feedback on button clicks
- Cart badge animations

### 📱 Responsive Design
- Mobile-first approach
- Mobile menu with smooth toggle
- Tailwind CSS for responsive classes
- Works on all device sizes

### 🌐 Multilingual Support
- English version (index.html)
- Cambodian version (index_km.html)
- Easy to add more languages by duplicating and translating

## How to Use

### Option 1: English Version
Open `index.html` in your browser

### Option 2: Cambodian Version
Open `index_km.html` in your browser

### To Add More Animations
Edit `styles.css`:
- Add new `@keyframes` animations
- Apply them to elements with `animation` property
- Adjust `animation-duration`, `animation-delay`, etc.

### To Modify Functionality
Edit `script.js`:
- Add event listeners
- Modify animations
- Update notifications
- Add new features

### To Update Styling
Edit `styles.css`:
- Change colors, sizes, fonts
- Update layout with Tailwind classes
- Create new animation keyframes

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (ES6+)** - Interactive functionality
- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Icon library
- **Google Fonts** - Poppins font family

## Key Animation Features

| Animation | Purpose | Trigger |
|-----------|---------|---------|
| `slideInDown` | Header entrance | Page load |
| `slideInUp` | Content entrance | Page load, scroll |
| `scaleIn` | Product cards | Page load with stagger |
| `bounce` | Logo icon | Continuous |
| `pulse` | Badge and stats | Continuous/Interaction |
| `shimmer` | Hero overlay | Continuous |
| `rotate` | Circular icons | Animation load |

## Performance Tips

1. **Smooth Scrolling** - Implemented with Intersection Observer
2. **Optimized Animations** - Use CSS for smooth 60fps
3. **Event Delegation** - Reduces number of event listeners
4. **Minimal JavaScript** - Heavy lifting done in CSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Language switcher button
- [ ] Dark mode toggle
- [ ] Product search functionality
- [ ] User authentication
- [ ] Shopping cart checkout
- [ ] Product reviews system
- [ ] Admin dashboard

## License

This project is open for educational and commercial use.

## Notes

- All images are from Unsplash (free to use)
- Khmer font support is built-in with Unicode
- The site is fully responsive and mobile-optimized
- All animations use CSS for better performance
