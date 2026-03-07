# ikbal.com

Personal portfolio website built with a cosmic space theme, featuring smooth animations, glassmorphism UI, and a fully responsive design.

**Live:** [ikbal.com](https://ikb4l.com) | **Author:** Muhammed İkbal Laç

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

## Preview

> Dark space-themed portfolio with starfield background, aurora effects, shooting stars, and orbital animations.

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 15 (App Router) |
| **UI** | React 19, TypeScript |
| **Styling** | Tailwind CSS v4, CSS Variables, Glassmorphism |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Font** | Geist Sans & Geist Mono (via `next/font`) |

## Features

- **Cosmic Theme** — Starfield, moon glow, aurora borealis, shooting stars, and nebula effects
- **Smooth Animations** — Scroll-triggered and hover animations powered by Framer Motion
- **Glassmorphism UI** — Translucent panels with backdrop blur
- **Scroll-based Navigation** — Active section detection and smooth scrolling
- **Terminal-style Projects Section** — Simulated boot logs with a classified aesthetic
- **Bento Grid About Section** — Identity, role, location, work style, and goals
- **Fully Responsive** — Optimized for mobile, tablet, and desktop

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Home page composing all sections
│   └── globals.css         # Theme variables, custom animations & styles
├── components/
│   ├── Background.tsx      # Starfield, moon, aurora, shooting stars
│   ├── Navbar.tsx          # Fixed nav with scroll-based active state
│   ├── Hero.tsx            # Hero section with name, title & CTAs
│   ├── About.tsx           # Bento grid layout
│   ├── Projects.tsx        # Terminal-style classified section
│   ├── TechStack.tsx       # Skills grouped by category
│   └── Contact.tsx         # Footer with social links
└── public/                 # Static assets
```

## Getting Started

```bash
# Clone the repository
git clone https://github.com/m-ikbal/ikbal-com.git
cd ikbal-com

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3135](http://localhost:3135) to view the site.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3135 |
| `npm run build` | Create production build |
| `npm run start` | Start production server on port 3135 |
| `npm run lint` | Run ESLint |

## Contact

- **GitHub:** [m-ikbal](https://github.com/m-ikbal)
- **LinkedIn:** [m-ikb4l](https://www.linkedin.com/in/m-ikb4l/)
- **Email:** muhammedikballac@gmail.com

## License

This project is open source and available under the [MIT License](LICENSE).
