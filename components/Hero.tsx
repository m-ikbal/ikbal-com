'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden"
    >
      {/* Orbital rings - decorative */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] md:w-[800px] md:h-[800px] rounded-full border border-white/[0.02]"
          style={{ animation: 'orbit-glow 6s ease-in-out infinite' }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] md:w-[1100px] md:h-[1100px] rounded-full border border-purple-500/[0.03]"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 160, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[900px] h-[900px] md:w-[1400px] md:h-[1400px] rounded-full border border-blue-500/[0.02]"
        />

        {/* Orbiting dots */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] md:w-[800px] md:h-[800px]"
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-400/60"
            style={{ boxShadow: '0 0 8px 3px rgba(124,58,237,0.3)' }}
          />
          <div
            className="absolute bottom-[10%] right-[5%] w-1 h-1 rounded-full bg-cyan-400/50"
            style={{ boxShadow: '0 0 6px 2px rgba(34,211,238,0.3)' }}
          />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] md:w-[1100px] md:h-[1100px]"
        >
          <div
            className="absolute top-[15%] right-0 w-1 h-1 rounded-full bg-blue-400/40"
            style={{ boxShadow: '0 0 6px 2px rgba(59,130,246,0.25)' }}
          />
          <div
            className="absolute bottom-[5%] left-[20%] w-1.5 h-1.5 rounded-full bg-pink-400/30"
            style={{ boxShadow: '0 0 8px 3px rgba(236,72,153,0.2)' }}
          />
        </motion.div>
      </div>

      {/* Ambient glow behind text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(124,58,237,0.06) 0%, rgba(59,130,246,0.03) 40%, transparent 70%)',
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-purple-500/15 bg-purple-500/5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
          </span>
          <span className="text-xs sm:text-sm text-purple-300/90 font-medium tracking-wider uppercase">
            System Architect & Security Specialist
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-bold tracking-[-0.04em] leading-[0.9]">
            <span
              className="block text-white"
              style={{ textShadow: '0 0 100px rgba(124,58,237,0.25), 0 0 40px rgba(124,58,237,0.1)' }}
            >
              Muhammed
            </span>
            <span className="block text-cosmic mt-1 sm:mt-2">İkbal Laç</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400"
        >
          Full Stack Engineer & Network Specialist
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="text-base sm:text-lg text-white/30 max-w-lg mx-auto font-light tracking-wide"
        >
          The Master Wizard of Software and Networking World
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="#projects"
            className="group relative px-8 py-4 rounded-2xl font-semibold text-sm overflow-hidden text-white flex items-center gap-2 w-full sm:w-auto justify-center transition-all duration-500 hover:shadow-[0_0_50px_rgba(124,58,237,0.3)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles size={15} />
              View My Projects
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 rounded-2xl font-semibold text-sm border border-white/10 text-white/60 hover:text-white hover:border-purple-500/25 hover:bg-purple-500/5 transition-all duration-500 backdrop-blur-sm w-full sm:w-auto text-center"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="pt-12 sm:pt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-9 rounded-full border border-white/15 mx-auto flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1.5 bg-purple-400/60 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
