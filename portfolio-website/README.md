# Sushobhan Pal - AI/ML Engineer Portfolio

A professional, modern portfolio website showcasing AI/ML projects, achievements, and skills.

## Features

- 🎨 Modern glassmorphism design with dark theme
- ✨ Smooth animations using Framer Motion
- 🌊 Animated particle background
- 📱 Fully responsive design
- ⚡ Built with React + Vite + Tailwind CSS
- 🎯 SEO optimized
- 🚀 Performance optimized

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Leadership.jsx
│   │   ├── Contact.jsx
│   │   ├── Loader.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── ParticleBackground.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- React Type Animation

## Customization

To customize the portfolio:

1. Update personal information in components
2. Modify colors in `tailwind.config.js`
3. Add/remove sections in `App.jsx`
4. Update project details in `Projects.jsx`

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!
