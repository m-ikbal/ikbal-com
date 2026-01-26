'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/m-ikbal', color: 'hover:text-white', target: '_blank' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/m-ikb4l/', color: 'hover:text-blue-400', target: '_blank' },
  { name: 'Email', icon: Mail, href: 'mailto:contact@muhammedikballac@gmail.com', color: 'hover:text-purple-400', target: '_blank' },
];

export default function Contact() {
  return (
    <footer id="contact" className="py-20 relative px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Let's Design Your <br />
            <span className="text-gradient">Next Project Together</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            I'm always here to bring your ideas to life or strengthen your systems.
            Say hello!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-8 md:gap-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              whileTap={{ scale: 0.9 }}
              className={`text-slate-500 transition-all duration-300 transform hover:scale-125 ${link.color}`}
              aria-label={link.name}
              target={link.target}
              rel="noopener noreferrer"
            >
              <link.icon size={40} />
            </motion.a>
          ))}
        </motion.div>

        <div className="pt-16 mt-16 border-t border-white/5 w-full">
          <p className="flex items-center justify-center gap-3 text-slate-500 font-mono text-sm">
            <span>© 2020</span>
            <span className="text-purple-500">_</span>
            <span className="text-xl text-blue-400 leading-none">∞</span>
            <span className="text-purple-500">_</span>
            <span className="text-slate-300 tracking-wider font-medium">Muhammed İkbal Laç</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
