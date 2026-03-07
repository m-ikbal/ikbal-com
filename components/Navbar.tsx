'use client';

import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-4 inset-x-0 mx-auto w-fit z-50 px-1.5 sm:px-2 py-1.5 sm:py-2 rounded-full border transition-all duration-500 max-w-[calc(100vw-1.5rem)] ${
        scrolled
          ? 'border-purple-500/15 bg-[#080c20]/80 backdrop-blur-xl shadow-[0_0_30px_rgba(124,58,237,0.08)]'
          : 'border-white/5 bg-transparent backdrop-blur-sm'
      }`}
    >
      <ul className="flex items-center gap-0.5 sm:gap-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.slice(1);
          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`group relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-purple-500/15'
                    : 'text-white/40 hover:text-white/80 hover:bg-white/5'
                }`}
              >
                <item.icon size={15} className="sm:w-4 sm:h-4" />
                <span className="hidden md:block text-xs tracking-wide">
                  {item.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-full border border-purple-500/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
