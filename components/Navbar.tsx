'use client';

import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full border border-white/10 transition-all duration-300",
        scrolled ? "bg-slate-950/80 backdrop-blur-md shadow-lg shadow-purple-500/10" : "bg-transparent backdrop-blur-sm"
      )}
    >
      <ul className="flex items-center gap-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link 
              href={item.href}
              className="group flex flex-col items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <motion.div 
                whileTap={{ scale: 0.9 }}
                className="relative p-2 rounded-lg group-hover:bg-white/10 transition-colors"
              >
                <item.icon size={20} />
                <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/20 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all"></span>
              </motion.div>
              <span className="hidden md:block text-[10px] font-medium opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all absolute -bottom-4 w-max">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
