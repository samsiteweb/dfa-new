# DFA Solicitors Website - Modernized

A modern React 18 law firm website with smooth animations, secure API handling, and professional form validation.

## ✨ Features

- **React 18** with modern hooks
- **Framer Motion** for smooth animations
- **React Router v6** for navigation
- **Contentful CMS** integration for blog/resources
- **EmailJS** for contact form
- **Form Validation** with react-hook-form & Zod
- **Code Splitting** for optimized performance
- **Responsive Design** for all devices

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 2. Set Up Environment Variables

Create a `.env` file in the project root:

```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_CONTENTFUL_SPACE_ID=your_space_id
REACT_APP_CONTENTFUL_ACCESS_TOKEN=your_access_token
```

**Note**: See `.env.example` for the template

### 3. Run Development Server

```bash
npm start
```

Opens at: [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
```

Creates optimized build in `/build` folder

## 📁 Project Structure

```
dfa-new/
├── public/                 # Static assets
│   ├── icons/              # SVG icons
│   └── images/             # Images
├── src/
│   ├── assets/             # Local assets (fonts, images)
│   ├── components/         # React components
│   │   ├── about/          # About page components
│   │   ├── cases/          # Blog/Resources components
│   │   ├── contact/        # Contact page components
│   │   ├── contact-form/   # Contact form with validation
│   │   ├── footer/         # Footer component
│   │   ├── landing/        # Landing page sections
│   │   ├── navbar/         # Navigation component
│   │   ├── practice-area/  # Practice areas components
│   │   ├── pricing/        # Pricing component
│   │   └── button/         # Reusable button
│   ├── pages/              # Page components
│   │   ├── landing.jsx     # Home page
│   │   ├── about.jsx       # About page
│   │   ├── contact.jsx     # Contact page
│   │   └── practice-area.jsx
│   ├── App.js              # Main app with routing
│   ├── index.js            # Entry point (React 18)
│   └── index.css           # Global styles
├── .env                    # Environment variables (not in git)
├── .env.example            # Environment template
└── package.json            # Dependencies
```

## 🎯 Pages

- **Home (/)** - Landing page with hero, services, and featured attorney
- **About (/about)** - Firm overview and founder information
- **Practice Areas (/practice-area)** - Legal services offered
- **Resources (/esg/all-resources)** - Blog posts from Contentful
- **Resource Detail (/esg/all-resources/:postId/resource)** - Individual blog post
- **Contact (/contact)** - Contact form and information

## 🔧 Technologies

### Core
- React 18.2.0
- React Router DOM 6.15.0
- Create React App 5.0.1

### UI & Animations
- Framer Motion (smooth animations)
- Bootstrap 5.3.1
- Custom CSS per component

### Forms & Validation
- React Hook Form (form state management)
- Zod (schema validation)
- @emailjs/browser (email sending)

### Content Management
- Axios (HTTP client)
- Contentful CMS (blog content)

## ⚙️ Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `REACT_APP_EMAILJS_PUBLIC_KEY` | EmailJS public key | Yes |
| `REACT_APP_EMAILJS_SERVICE_ID` | EmailJS service ID | Yes |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | EmailJS template ID | Yes |
| `REACT_APP_CONTENTFUL_SPACE_ID` | Contentful space ID | Yes |
| `REACT_APP_CONTENTFUL_ACCESS_TOKEN` | Contentful API token | Yes |

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### AWS S3
```bash
npm run build
aws s3 sync build/ s3://your-bucket-name
```

**Important**: Add environment variables in your hosting platform's dashboard!

## 🎨 Customization

### Colors
Edit `src/index.css`:
```css
/* Primary brand color */
#310c4b

/* Dark variant */
#331440

/* Accent color */
#c58cdb
```

### Fonts
Custom fonts in `src/assets/font/`:
- Playfair Display (headings)
- Quicksand (body text)
- Poppins (UI elements)

### Content
- Static content: Edit component files
- Blog posts: Manage in Contentful CMS
- Images: Add to `src/assets/img/` or `public/`

## 🧪 Testing

### Run Tests
```bash
npm test
```

### Lint Code
```bash
npm run lint
```

### Check Build
```bash
npm run build
```

## 📊 Performance

### Optimizations Applied
- ✅ Code splitting (lazy loading)
- ✅ Smaller bundle sizes
- ✅ Modern animations
- ✅ Efficient re-renders
- ✅ Optimized builds

### Expected Scores
- Performance: 85+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 85+

## 🐛 Troubleshooting

### "npm install" fails
```bash
npm install --legacy-peer-deps
```

### App won't start
1. Check `.env` file exists
2. Verify all environment variables are set
3. Clear cache: `npm cache clean --force`
4. Reinstall: `rm -rf node_modules && npm install --legacy-peer-deps`

### Contact form not working
- Verify EmailJS environment variables
- Check browser console for errors
- Ensure EmailJS account is active

### Blog posts not loading
- Verify Contentful environment variables
- Check Contentful content is published (not draft)
- Review network tab in browser DevTools

## 📝 Key Changes Made

### src/index.js
- Updated to React 18 createRoot API
- Added React.StrictMode
- Moved EmailJS init to use env var

### src/App.js
- Added lazy loading for all routes
- Added Suspense with loading spinner
- Removed deprecated "exact" prop from routes

### src/components/contact-form/contact-form.js
- Converted from class to functional component
- Added react-hook-form integration
- Added Zod schema validation
- Improved error handling and UX

### All Animation Components
- Replaced react-reveal with framer-motion
- Better performance
- More control over animations
- React 18 compatible

## 📞 Support

**Email**: official@dfasolicitors.com  
**Phone**: (+234) 818 696 3053

## 📄 License

© 2024 DFA Solicitors. All rights reserved.

---

## 🎉 Summary

✅ **Modernization Complete**  
✅ **Build Successful**  
✅ **Production Ready**  
✅ **All Features Working**  

**Status**: Ready to deploy! 🚀

---

*Last Updated: December 6, 2024*
