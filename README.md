# Paraliya Web Solution - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS for Paraliya Web Solution - a web development agency based in Ahmedabad, Gujarat, India.

## 🚀 Features

- **Modern Design**: Clean, professional design with brand-consistent colors and typography
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and structured data
- **Performance Focused**: Fast loading times with optimized images and code
- **Contact Form Integration**: Google Sheets integration for lead management
- **Blog System**: Dynamic blog with SEO-friendly URLs
- **Animations**: Smooth animations using Framer Motion
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)
- **Form Handling**: Google Sheets API integration
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing and dynamic posts
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio showcase
│   ├── privacy/           # Privacy policy
│   ├── services/          # Services page
│   ├── terms/             # Terms of service
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap
├── components/
│   ├── layout/            # Layout components (Header, Footer, etc.)
│   ├── sections/          # Page sections (Hero, Services, etc.)
│   └── ui/                # Reusable UI components
└── public/                # Static assets
```

## 🎨 Design System

### Brand Colors
- **Primary**: Dark charcoal (#2D2D2D) - from PWS logo
- **Accent**: Purple to Blue gradient (#6366F1 to #3B82F6)
- **Background**: White (#FFFFFF)
- **Text**: Gray scale (#1F2937 to #F9FAFB)

### Typography
- **Display Font**: Poppins (headings)
- **Body Font**: Inter (body text)
- **Font Sizes**: Responsive scale from 12px to 96px

### Components
- Reusable Button, Card, Badge components
- Consistent spacing and shadows
- Hover effects and animations

## 📄 Pages

1. **Homepage** (`/`)
   - Hero section with CTA
   - Services preview
   - Process timeline
   - Client testimonials
   - Trust indicators

2. **Services** (`/services`)
   - Detailed service descriptions
   - Pricing information
   - Feature comparisons

3. **Portfolio** (`/portfolio`)
   - Project showcase
   - Case studies
   - Technology stack highlights

4. **About** (`/about`)
   - Company story
   - Team information
   - Why choose us

5. **Contact** (`/contact`)
   - Contact form with Google Sheets integration
   - Business information
   - Multiple contact methods

6. **Blog** (`/blog`)
   - Blog listing page
   - Dynamic blog posts (`/blog/[slug]`)
   - Categories and tags

## 🔧 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pws-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📝 Content Management

### Blog Posts
Blog posts are currently stored in the component files. For production, consider integrating with:
- Sanity CMS
- Contentful
- Strapi
- Markdown files with frontmatter

### Contact Form
The contact form is integrated with Google Sheets using Apps Script. The form data is sent to:
```
https://script.google.com/macros/s/AKfycbzs-8WKPOaCmJhbZ497Y4CTm-ndpXvHriwXQfBR5OGf4myVyTvppmfbz27s-BILM7bx/exec
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📊 SEO Features

- Meta tags for all pages
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- Sitemap.xml
- Robots.txt
- Optimized images
- Fast loading times

## 🎯 Performance Optimizations

- Next.js Image component for optimized images
- Code splitting and lazy loading
- Efficient CSS with Tailwind
- Minimal JavaScript bundle
- CDN delivery via Vercel

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly interface
- Optimized mobile navigation
- Fast mobile loading
- Mobile-specific features (call buttons)

## 🔒 Security Features

- HTTPS enforcement
- Secure form handling
- Input validation
- XSS protection
- CSRF protection

## 📞 Contact Information

- **Email**: paraliyaravi80@gmail.com
- **Phone**: +91 9898463251
- **WhatsApp**: +91 9898463251
- **Location**: Ahmedabad, Gujarat, India

## 📄 License

This project is proprietary and belongs to Paraliya Web Solution. All rights reserved.

## 🤝 Contributing

This is a private project for Paraliya Web Solution. For any modifications or updates, please contact the development team.

---

Built with ❤️ by Paraliya Web Solution