'use client';

import { motion } from 'framer-motion';
import {
  User,
  MapPin,
  Globe,
  Award,
  Briefcase,
  Github,
  Linkedin,
  ExternalLink,
  Crosshair,
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 relative">
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.035) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-4 mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-cosmic">About Me</span>
          </h2>
          <p className="text-white/30 max-w-xl mx-auto text-sm sm:text-base">
            An approach combining the logic of code with the power of networks.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
          {/* WHO AM I - Large hero card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 group"
          >
            <div
              className="relative h-full rounded-2xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:border-purple-500/15"
              style={{
                background: 'rgba(8,10,28,0.7)',
                border: '1px solid rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-purple-500/15 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-purple-500/15 rounded-br-2xl" />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* Cosmic Avatar Orb */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 overflow-visible">
                  <div className="absolute inset-[-16px] overflow-hidden rounded-full pointer-events-none">
                    {/* Outer rotating ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-[10px] rounded-full"
                      style={{ border: '1px dashed rgba(124,58,237,0.2)' }}
                    />
                    {/* Middle ring */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-[2px] rounded-full"
                      style={{ border: '1px solid rgba(59,130,246,0.08)' }}
                    >
                      <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400/50"
                        style={{ boxShadow: '0 0 6px 2px rgba(59,130,246,0.3)' }}
                      />
                    </motion.div>
                  </div>

                  {/* Glow behind */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
                      filter: 'blur(20px)',
                    }}
                  />

                  {/* Main orb */}
                  <div
                    className="absolute inset-0 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(59,130,246,0.1) 100%)',
                      border: '1px solid rgba(124,58,237,0.2)',
                      boxShadow: 'inset 0 0 30px rgba(124,58,237,0.1)',
                    }}
                  >
                    <span className="text-2xl sm:text-3xl font-bold text-cosmic select-none">
                      MİL
                    </span>
                  </div>
                </div>

                {/* Text content */}
                <div className="space-y-3 text-center sm:text-left flex-1">
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <User size={14} className="text-purple-400/60" />
                    <span className="text-[10px] text-purple-400/60 font-mono uppercase tracking-[0.2em]">
                      Identity
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white/90 tracking-tight">
                    Who Am I?
                  </h3>
                  <p className="text-white/35 text-sm sm:text-base leading-relaxed">
                    Tech enthusiast, problem solver, and lifelong learner engineer.
                    Building at the intersection of software and network infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CURRENT ROLE - Mission briefing */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="md:col-span-5 group"
          >
            <div
              className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:border-pink-500/15"
              style={{
                background: 'rgba(8,10,28,0.7)',
                border: '1px solid rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Active mission indicator */}
              <div
                className="flex items-center justify-between px-6 py-3"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}
              >
                <div className="flex items-center gap-2">
                  <Crosshair size={12} className="text-pink-400/60" />
                  <span className="text-[10px] text-pink-400/60 font-mono uppercase tracking-[0.2em]">
                    Active Mission
                  </span>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-300/70 border border-pink-500/15 uppercase tracking-wider">
                  Freelance
                </span>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div
                    className="p-2.5 rounded-xl text-pink-400/80 shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: 'rgba(236,72,153,0.06)',
                      border: '1px solid rgba(236,72,153,0.1)',
                    }}
                  >
                    <Briefcase size={20} />
                  </div>
                  <div className="space-y-1.5 min-w-0">
                    <a
                      href="https://breachion.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg font-bold text-white/80 hover:text-white transition-colors tracking-tight"
                    >
                      Breachion Technology
                    </a>
                    <p className="text-white/30 text-sm">Full Stack Engineer</p>
                  </div>
                </div>

                <div
                  className="flex items-center gap-4 pt-3"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}
                >
                  {[
                    { icon: ExternalLink, url: 'https://breachion.com', label: 'Website' },
                    { icon: Github, url: 'https://github.com/Breachion-Technology', label: 'GitHub' },
                    { icon: Linkedin, url: 'https://www.linkedin.com/company/breachion-technology/', label: 'LinkedIn' },
                  ].map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/20 hover:text-white/60 transition-all duration-300 hover:scale-110"
                      title={link.label}
                    >
                      <link.icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* LOCATION */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="md:col-span-4 group"
          >
            <div
              className="relative h-full rounded-2xl p-5 sm:p-6 overflow-hidden transition-all duration-500 hover:border-blue-500/15"
              style={{
                background: 'rgba(8,10,28,0.7)',
                border: '1px solid rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Mini star map decoration */}
              <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-40 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <circle cx="10" cy="8" r="1" fill="white" />
                  <circle cx="30" cy="12" r="1.5" fill="white" />
                  <circle cx="18" cy="28" r="1" fill="white" />
                  <circle cx="35" cy="32" r="0.8" fill="white" />
                  <line x1="10" y1="8" x2="30" y2="12" stroke="white" strokeWidth="0.3" strokeDasharray="2,2" />
                  <line x1="30" y1="12" x2="18" y2="28" stroke="white" strokeWidth="0.3" strokeDasharray="2,2" />
                </svg>
              </div>

              <div className="flex items-center gap-3.5">
                <div
                  className="p-2 rounded-lg text-blue-400/70 shrink-0"
                  style={{
                    background: 'rgba(59,130,246,0.06)',
                    border: '1px solid rgba(59,130,246,0.1)',
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-white/20 font-mono uppercase tracking-[0.15em] block mb-1">
                    Coordinates
                  </span>
                  <p className="text-white/80 font-semibold text-sm sm:text-base tracking-tight">
                    Van, Turkey
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* WORK STYLE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="md:col-span-3 group"
          >
            <div
              className="relative h-full rounded-2xl p-5 sm:p-6 overflow-hidden transition-all duration-500 hover:border-cyan-500/15"
              style={{
                background: 'rgba(8,10,28,0.7)',
                border: '1px solid rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="flex flex-col gap-3">
                <div
                  className="p-2 rounded-lg text-cyan-400/70 self-start"
                  style={{
                    background: 'rgba(34,211,238,0.06)',
                    border: '1px solid rgba(34,211,238,0.1)',
                  }}
                >
                  <Globe size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-white/20 font-mono uppercase tracking-[0.15em] block mb-1.5">
                    Work Mode
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Remote', 'Hybrid', 'Freelance'].map((mode) => (
                      <span
                        key={mode}
                        className="text-[11px] font-medium px-2 py-1 rounded-md text-cyan-300/60"
                        style={{
                          background: 'rgba(34,211,238,0.04)',
                          border: '1px solid rgba(34,211,238,0.08)',
                        }}
                      >
                        {mode}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MY GOAL */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="md:col-span-5 group"
          >
            <div
              className="relative h-full rounded-2xl p-5 sm:p-6 overflow-hidden transition-all duration-500 hover:border-amber-500/15"
              style={{
                background: 'rgba(8,10,28,0.7)',
                border: '1px solid rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Subtle gradient corner */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.06), transparent 70%)' }}
              />

              <div className="relative z-10 flex items-start gap-3.5">
                <div
                  className="p-2 rounded-lg text-amber-400/70 shrink-0 mt-0.5"
                  style={{
                    background: 'rgba(245,158,11,0.06)',
                    border: '1px solid rgba(245,158,11,0.1)',
                  }}
                >
                  <Award size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-white/20 font-mono uppercase tracking-[0.15em] block mb-1.5">
                    Mission Objective
                  </span>
                  <p className="text-white/45 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                    To leave a mark in the digital world by building secure, fast,
                    and scalable systems.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
