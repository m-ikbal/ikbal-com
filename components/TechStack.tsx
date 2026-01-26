'use client';

import { motion } from 'framer-motion';
import { Server, ShieldCheck, Layout } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    description: "Modern interfaces that maximize user experience.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"],
    color: "from-blue-500 via-cyan-400 to-blue-500",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-400/10"
  },
  {
    title: "Backend & Systems",
    icon: Server,
    description: "Robust, secure, and scalable server architectures.",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs", "Docker"],
    color: "from-green-500 via-emerald-400 to-green-500",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/10"
  },
  {
    title: "Network & Security",
    icon: ShieldCheck,
    description: "Uninterrupted communication and cyber security infrastructure.",
    skills: ["Cisco Networking", "Linux Administration", "AWS Cloud", "Wireshark", "Cyber Security", "Nginx"],
    color: "from-purple-500 via-pink-400 to-purple-500",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-400/10"
  }
];

export default function TechStack() {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My expertise in both software development and network management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
              className="group relative rounded-3xl"
            >
              {/* Animated Border Beam - Only visible on Hover */}
              <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              <div 
                className={`absolute -inset-[2px] rounded-3xl bg-gradient-to-r ${category.color} opacity-20 md:opacity-0 md:group-hover:opacity-100 blur-md transition-opacity duration-500 animate-border-spin`} 
                style={{ backgroundSize: '200% 200%' }}
              />
              
              {/* Card Content Container */}
              <div className="relative h-full bg-slate-950 rounded-[22px] p-8 overflow-hidden border border-white/5 z-10 group-hover:border-transparent transition-colors">
                
                <div className="relative z-10 space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${category.iconBg} ${category.iconColor} group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20`}>
                      <category.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold transition-all text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 md:text-white md:bg-none md:group-hover:text-transparent md:group-hover:bg-gradient-to-r md:group-hover:from-white md:group-hover:to-slate-400">
                      {category.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-white/5 pl-4 group-hover:border-white/20 transition-colors">
                    {category.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 rounded-full text-xs font-medium border border-white/5 bg-white/5 text-slate-400 group-hover:border-white/10 group-hover:bg-white/10 group-hover:text-white transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
