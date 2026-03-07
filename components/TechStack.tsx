'use client';

import { motion } from 'framer-motion';
import { Server, ShieldCheck, Layout } from 'lucide-react';
import type { ElementType } from 'react';

type SkillCategory = {
  title: string;
  icon: ElementType<{ size?: number | string; className?: string }>;
  description: string;
  skills: string[];
  color: string;
  ringColor: string;
  dotBg: string;
  barBg: string;
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Layout,
    description: 'Modern interfaces that maximize user experience.',
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML5/CSS3'],
    color: 'rgba(34,211,238,1)',
    ringColor: 'rgba(34,211,238,0.15)',
    dotBg: 'rgba(34,211,238,0.5)',
    barBg: 'rgba(34,211,238,0.08)',
  },
  {
    title: 'Backend & Systems',
    icon: Server,
    description: 'Robust, secure, and scalable server architectures.',
    skills: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis'],
    color: 'rgba(52,211,153,1)',
    ringColor: 'rgba(52,211,153,0.15)',
    dotBg: 'rgba(52,211,153,0.5)',
    barBg: 'rgba(52,211,153,0.08)',
  },
  {
    title: 'Network & Security',
    icon: ShieldCheck,
    description: 'Uninterrupted communication and cyber security infrastructure.',
    skills: ['Cisco Networking', 'Linux Administration', 'AWS Cloud', 'Wireshark', 'Cyber Security', 'Nginx'],
    color: 'rgba(168,85,247,1)',
    ringColor: 'rgba(168,85,247,0.15)',
    dotBg: 'rgba(168,85,247,0.5)',
    barBg: 'rgba(168,85,247,0.08)',
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 relative">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.025) 0%, transparent 70%)',
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
            <span className="text-cosmic">Technical Skills</span>
          </h2>
          <p className="text-white/30 max-w-2xl mx-auto text-sm sm:text-base">
            My expertise in both software development and network management.
          </p>
        </motion.div>

        {/* Skill modules - stacked horizontal cards */}
        <div className="space-y-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group"
            >
              <div
                className="relative rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/[0.08]"
                style={{
                  background: 'rgba(6,8,22,0.75)',
                  border: '1px solid rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                {/* Top accent line */}
                <div
                  className="h-[1px] w-full opacity-20 group-hover:opacity-50 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${category.color}, transparent)`,
                  }}
                />

                <div className="p-5 sm:p-7">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Left: Icon + Meta */}
                    <div className="flex items-center gap-4 md:w-[260px] md:shrink-0">
                      {/* Holographic icon ring */}
                      <div className="relative w-16 h-16 shrink-0">
                        {/* Animated outer ring */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 25 + index * 10, repeat: Infinity, ease: 'linear' }}
                          className="absolute inset-0 rounded-full"
                          style={{ border: `1px solid ${category.ringColor}` }}
                        >
                          <div
                            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                            style={{
                              background: category.dotBg,
                              boxShadow: `0 0 6px 2px ${category.ringColor}`,
                            }}
                          />
                        </motion.div>
                        {/* Inner ring */}
                        <div
                          className="absolute inset-[6px] rounded-full"
                          style={{ border: `1px dashed ${category.ringColor}`, opacity: 0.4 }}
                        />
                        {/* Icon center */}
                        <div
                          className="absolute inset-[10px] rounded-full flex items-center justify-center"
                          style={{
                            background: category.barBg,
                            boxShadow: `inset 0 0 20px ${category.ringColor}`,
                          }}
                        >
                          <category.icon size={20} style={{ color: category.color, opacity: 0.8 }} />
                        </div>
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-bold text-white/85 text-lg tracking-tight">
                          {category.title}
                        </h3>
                        <p className="text-white/25 text-xs mt-1 leading-relaxed hidden sm:block">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Vertical divider (desktop) */}
                    <div
                      className="hidden md:block w-[1px] h-12 self-center shrink-0"
                      style={{ background: 'rgba(255,255,255,0.04)' }}
                    />

                    {/* Right: Skills as status list */}
                    <div className="flex-1">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2.5">
                        {category.skills.map((skill, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.06 }}
                            className="flex items-center gap-2.5 group/item"
                          >
                            {/* Status dot with pulse */}
                            <div className="relative shrink-0">
                              <div
                                className="w-1.5 h-1.5 rounded-full group-hover/item:scale-150 transition-transform duration-300"
                                style={{ background: category.dotBg }}
                              />
                              <div
                                className="absolute inset-0 w-1.5 h-1.5 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 animate-ping"
                                style={{ background: category.dotBg }}
                              />
                            </div>
                            {/* Skill name */}
                            <span className="text-xs sm:text-sm text-white/35 group-hover/item:text-white/70 transition-colors duration-300 font-medium truncate">
                              {skill}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 10% 50%, ${category.barBg}, transparent 60%)`,
                  }}
                />

                {/* Grid overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.02]"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
