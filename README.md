# Boundless Travelogues - Professional Travel Agency Website

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Optimized**: Comprehensive meta tags and semantic HTML
- **Fast Performance**: Built with Astro for optimal loading speeds
- **Interactive Components**: React components with GSAP animations
- **Complete Pages**:
  - Home page with hero section and featured packages
  - About page with company information
  - Packages page with all tour offerings
  - Gallery with filterable images
  - Contact page with form and WhatsApp integration
  - Terms & Conditions
  - Privacy Policy

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```
Then edit `.env` with your EmailJS credentials:
```
PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
PUBLIC_EMAILJS_SERVICE_ID=your_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:4321`

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header with mobile menu
│   │   ├── Footer.jsx          # Footer with links and contact info
│   │   ├── PackageCard.jsx     # Reusable package card component
│   │   ├── WhatsAppButton.jsx  # Floating WhatsApp button
│   │   └── InstructionsModal.jsx # Trip guidelines modal
│   ├── layouts/
│   │   └── Layout.astro        # Main layout with SEO meta tags
│   ├── pages/
│   │   ├── index.astro         # Home page
│   │   ├── about.astro         # About page
│   │   ├── packages.astro      # All packages listing
│   │   ├── gallery.astro       # Image gallery with filters
│   │   ├── contact.astro       # Contact form
│   │   ├── terms.astro         # Terms & Conditions
│   │   └── privacy.astro       # Privacy Policy
│   └── styles/
│       └── global.css          # Global styles and utilities
├── astro.config.mjs
├── package.json
└── README.md
```

## 🔧 Technologies Used

- **Astro 5.15.8** - Static site generator
- **React 19.2.0** - UI components
- **GSAP 3.13.0** - Animations
- **CSS3** - Styling
- **JavaScript/TypeScript** - Interactivity

## 📞 Contact Information

- **Phone**: +91 8078107622
- **Email**: boundlesstravelogues@gmail.com
- **Instagram**: @boundless_travelogues
- **Location**: Kerala, India

## 📄 License

© 2025 Boundless Travelogues. All rights reserved.

## 🤝 Support

For support or inquiries, please contact us through:
- Email: boundlesstravelogues@gmail.com
