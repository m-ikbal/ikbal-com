'use client';

import { motion } from 'framer-motion';
import { User, MapPin, Globe, Award } from 'lucide-react';

const aboutItems = [
  {
    label: "Who Am I?",
    text: "Tech enthusiast, problem solver, and lifelong learner engineer.",
    icon: User,
    colSpan: "md:col-span-2",
    color: "from-purple-500/20 to-indigo-500/20",
    borderColor: "group-hover:border-purple-500/50",
    iconColor: "text-purple-400",
    shadow: "group-hover:shadow-purple-500/20"
  },
  {
    label: "Location",
    text: "Van, Turkey",
    icon: MapPin,
    colSpan: "md:col-span-1",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "group-hover:border-blue-500/50",
    iconColor: "text-blue-400",
    shadow: "group-hover:shadow-blue-500/20"
  },
  {
    label: "Work Style",
    text: "Remote / Hybrid",
    icon: Globe,
    colSpan: "md:col-span-1",
    color: "from-emerald-500/20 to-green-500/20",
    borderColor: "group-hover:border-emerald-500/50",
    iconColor: "text-emerald-400",
    shadow: "group-hover:shadow-emerald-500/20"
  },
  {
    label: "My Goal",
    text: "To leave a mark in the digital world by building secure, fast, and scalable systems.",
    icon: Award,
    colSpan: "md:col-span-2",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "group-hover:border-amber-500/50",
    iconColor: "text-amber-400",
    shadow: "group-hover:shadow-amber-500/20"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            An approach combining the logic of code with the power of networks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 ${item.colSpan} ${item.borderColor} ${item.shadow} hover:shadow-xl`}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 p-6 flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${item.iconColor}`}>
                  <item.icon size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
