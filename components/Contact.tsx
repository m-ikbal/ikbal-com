'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Radio } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/m-ikbal',
    hoverColor: 'hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/m-ikb4l/',
    hoverColor: 'hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:contact@muhammedikballac@gmail.com',
    hoverColor: 'hover:text-purple-400 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]',
  },
];

export default function Contact() {
  return (
    <footer id="contact" className="py-24 sm:py-32 relative px-4 overflow-hidden">
      {/* Section glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto text-center space-y-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-2 text-white/20 mb-4">
            <Radio size={16} />
            <span className="text-xs font-mono tracking-widest uppercase">
              Open for transmission
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Let&apos;s Design Your <br />
            <span className="text-cosmic">Next Project Together</span>
          </h2>
          <p className="text-white/30 text-base sm:text-lg max-w-xl mx-auto">
            I&apos;m always here to bring your ideas to life or strengthen your
            systems. Say hello!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center gap-6 sm:gap-10"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-4 sm:p-5 rounded-2xl text-white/25 transition-all duration-500 ${link.hoverColor}`}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.04)',
              }}
              aria-label={link.name}
            >
              <link.icon size={28} className="sm:w-8 sm:h-8" />
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="pt-8 sm:pt-12">
          <div
            className="w-full h-[1px] mb-8"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(124,58,237,0.15), rgba(59,130,246,0.1), transparent)',
            }}
          />
          <p className="flex items-center justify-center gap-3 text-white/20 font-mono text-xs sm:text-sm">
            <span>© 2020</span>
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: 'rgba(124,58,237,0.5)' }}
            />
            <span className="text-white/40 tracking-wider font-medium">
              Muhammed İkbal Laç
            </span>
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: 'rgba(59,130,246,0.5)' }}
            />
            <span className="text-xl text-purple-500/40 leading-none">∞</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
