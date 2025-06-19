# Sean Winslow Personal Website V2

A modern, animated portfolio website built with React, featuring smooth locomotive scrolling effects and a professional design showcasing AI Product Management expertise.

## 🎨 Features

- **Locomotive Scroll**: Smooth, buttery scrolling effects throughout the site
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern Animations**: Parallax effects and scroll-triggered animations
- **Professional Layout**: Clean, modern design with gradient backgrounds
- **Single Page Application**: All sections accessible through smooth navigation

## 🏗️ Project Structure

```
├── index.html              # Main HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx            # Main application component
│   ├── index.css          # Global styles and locomotive scroll setup
│   └── pages/
│       ├── Home.jsx       # Main page with all sections
│       ├── Home.css       # Styles for all sections
│       └── About.css      # Additional about page styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` to see your website

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📝 Website Sections

### 🏠 Hero Section
- Professional introduction
- AI Product Management focus
- Call-to-action buttons with smooth scrolling
- Placeholder for headshot with animation hooks

### 💼 Projects Section
- 4 project cards with hover effects
- Categories: "How I Think", "Featured Projects", "Prototypes", "Product Deconstructions"
- Staggered scroll animations

### 👨‍💻 About Me Section
- Personal background and creative process
- Placeholder for animated self-portraits
- Side-by-side layout with text and visuals

### 🎥 Testimonials Section
- Placeholder for mockumentary-style video
- Integration ready for Veo 3 generated content
- Professional testimonial layout

### 🤝 Let's Connect Section
- Social media widget placeholders
- Email, LinkedIn, Twitter, and YouTube integration points
- Contact form ready layout

## 🎯 Key Technologies

- **React 18**: Modern React with functional components and hooks
- **Vite**: Fast build tool and development server
- **Locomotive Scroll**: Smooth scrolling library
- **CSS Grid & Flexbox**: Modern responsive layouts
- **CSS Custom Properties**: Dynamic theming support

## 🎨 Design System

### Colors
- **Primary**: `#f72585` (Pink accent)
- **Secondary**: `#7209b7` (Purple)
- **Background**: `#000000` (Black)
- **Surface**: `#111111` (Dark gray)
- **Text**: `#ffffff` (White)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Animations
- **Locomotive Scroll**: Smooth scrolling with parallax effects
- **CSS Transitions**: Hover effects and micro-interactions
- **Transform Effects**: Scroll-triggered animations

## 🔧 Customization

### Adding Content
1. **Update hero text** in `src/pages/Home.jsx`
2. **Add project details** in the projects grid section
3. **Replace placeholders** with actual images and content
4. **Update social links** in the connect section

### Styling
- **Global styles**: Edit `src/index.css`
- **Section-specific styles**: Edit `src/pages/Home.css`
- **Colors and spacing**: Update CSS custom properties

### Locomotive Scroll Configuration
Modify scroll settings in `src/pages/Home.jsx`:
```javascript
const scroll = new LocomotiveScroll({
  el: scrollRef.current,
  smooth: true,
  multiplier: 1, // Adjust scroll speed
  class: 'is-revealed'
});
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

## 🔮 Future Enhancements

- [ ] Add actual project content and images
- [ ] Integrate real testimonial videos
- [ ] Implement contact form functionality
- [ ] Add blog section
- [ ] Integrate CMS for easy content updates
- [ ] Add loading animations
- [ ] Implement dark/light theme toggle
- [ ] Add more interactive animations

## 🐛 Troubleshooting

### Locomotive Scroll Issues
- Ensure all scroll elements have proper `data-scroll` attributes
- Check that the scroll container has `data-scroll-container`
- Verify locomotive-scroll CSS is imported

### Build Issues
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Update dependencies: `npm update`
- Check Node.js version compatibility

## 📄 License

This project is private and proprietary to Sean Winslow.

---

**Built with ❤️ by Sean Winslow**

*AI Product Management | Creative Technology | Innovation*

