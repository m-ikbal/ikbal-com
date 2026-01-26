'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Terminal, Network, ShieldCheck, Activity } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Mouse parallax effect for the visual side
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Ekranın ortasına göre normalize et (-1 ile 1 arası)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x * 20); // Hareket hassasiyeti
      mouseY.set(y * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const rotateX = useSpring(mouseY, { stiffness: 100, damping: 30 });
  const rotateY = useSpring(mouseX, { stiffness: 100, damping: 30 });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-10 md:pt-20 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 text-center md:text-left relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 text-xs md:text-sm font-medium backdrop-blur-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
            </span>
            System Architect & Security Specialist
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-none text-white"
            >
              Muhammed <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">İkbal Laç</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
            >
              <span className="text-gradient">Full Stack Engineer & Network Specialist</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-slate-400 max-w-lg mx-auto md:mx-0 font-medium leading-relaxed"
          >
            The Master Wizard of Software and Networking World
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4"
          >
            <Link 
              href="#projects"
              className="group relative px-8 py-4 bg-white text-slate-950 rounded-2xl font-bold transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center gap-2 text-sm md:text-base w-full sm:w-auto justify-center overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity" />
            </Link>
            <Link 
              href="#contact"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 text-sm md:text-base w-full sm:w-auto justify-center backdrop-blur-sm"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Visual Element with 3D Tilt Effect */}
        <div className="relative h-[300px] md:h-[600px] w-full flex items-center justify-center perspective-1000 mt-10 md:mt-0">
          <motion.div
            style={{ 
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d"
            }}
            className="relative w-full max-w-lg aspect-square scale-75 md:scale-100"
          >
            {/* Center Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full blur-2xl opacity-40 animate-pulse" />
            
            {/* Floating Cards - Mobile Optimized Positions */}
            <motion.div 
              style={{ translateZ: 50 }}
              className="absolute top-0 left-10 md:left-10 glass p-3 md:p-5 rounded-3xl border-t border-l border-white/20 shadow-2xl shadow-purple-500/10 w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center gap-2 md:gap-3 backdrop-blur-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="p-2 md:p-3 bg-purple-500/10 rounded-xl text-purple-400">
                <Terminal size={24} className="md:w-8 md:h-8" />
              </div>
              <span className="font-bold text-white text-xs md:text-sm">Full Stack Dev</span>
            </motion.div>

            <motion.div 
              style={{ translateZ: 80 }}
              className="absolute bottom-10 right-10 md:right-10 glass p-3 md:p-5 rounded-3xl border-t border-l border-white/20 shadow-2xl shadow-blue-500/10 w-36 h-36 md:w-44 md:h-44 flex flex-col items-center justify-center gap-2 md:gap-3 backdrop-blur-md"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="p-2 md:p-3 bg-blue-500/10 rounded-xl text-blue-400">
                <Network size={28} className="md:w-9 md:h-9" />
              </div>
              <span className="font-bold text-white text-xs md:text-sm">Network Specialist</span>
            </motion.div>

            <motion.div 
              style={{ translateZ: 30 }}
              className="absolute top-20 right-0 glass p-2 md:p-4 rounded-2xl border-t border-l border-white/20 w-28 md:w-36 flex items-center gap-2 md:gap-3 backdrop-blur-md"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-bold text-slate-300">System Secure</span>
            </motion.div>

            <motion.div 
              style={{ translateZ: 60 }}
              className="absolute bottom-32 left-0 glass p-2 md:p-4 rounded-2xl border-t border-l border-white/20 w-24 md:w-32 flex flex-col items-center gap-1 backdrop-blur-md"
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <span className="text-lg md:text-2xl font-bold text-white">99.9%</span>
              <span className="text-[8px] md:text-[10px] text-slate-400 uppercase tracking-widest">Uptime</span>
            </motion.div>

            {/* Connecting Lines (Decorative) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ transform: "translateZ(-20px)" }}>
              <line x1="30%" y1="20%" x2="70%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="70%" y1="20%" x2="30%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
