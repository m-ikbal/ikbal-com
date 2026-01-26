'use client';

import { motion } from 'framer-motion';
import { User, MapPin, Globe, Award, Briefcase, Github, Linkedin, ExternalLink } from 'lucide-react';
import type { ElementType } from 'react';

type AboutLink = {
  icon: ElementType<{ size?: number | string }>;
  url: string;
  label: string;
};

type AboutItem = {
  label: string;
  text?: string;
  icon: ElementType<{ size?: number | string }>;
  colSpan: string;
  color: string;
  borderColor: string;
  iconColor: string;
  shadow: string;
  featured?: boolean;
  links?: AboutLink[];
  roleTitle?: string;
  companyName?: string;
  companyUrl?: string;
  badges?: string[];
};

const aboutItems: AboutItem[] = [
  {
    label: "Who Am I?",
    text: "Tech enthusiast, problem solver, and lifelong learner engineer.",
    icon: User,
    colSpan: "md:col-span-1",
    color: "from-purple-500/20 to-indigo-500/20",
    borderColor: "group-hover:border-purple-500/50",
    iconColor: "text-purple-400",
    shadow: "group-hover:shadow-purple-500/20"
  },
  {
    label: "Current Role",
    roleTitle: "Full Stack Engineer",
    companyName: "Breachion Technology",
    companyUrl: "https://breachion.com",
    icon: Briefcase,
    colSpan: "md:col-span-1 md:order-first",
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "group-hover:border-pink-500/50",
    iconColor: "text-pink-400",
    shadow: "group-hover:shadow-pink-500/20",
    featured: true,
    badges: ["Freelance"],
    links: [
      { icon: ExternalLink, url: "https://breachion.com", label: "Website" },
      { icon: Github, url: "https://github.com/Breachion-Technology", label: "GitHub" },
      { icon: Linkedin, url: "https://www.linkedin.com/company/breachion-technology/", label: "LinkedIn" }
    ]
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
    text: "Remote / Hybrid / Freelance",
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
              whileHover={item.featured ? { y: -6, scale: 1.02 } : { y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 ${item.colSpan} ${item.borderColor} ${item.shadow} hover:shadow-xl ${
                item.featured
                  ? "ring-1 ring-pink-500/25 hover:ring-pink-400/50 hover:shadow-pink-500/20"
                  : ""
              }`}
            >
              {/* Background Gradient on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} ${
                  item.featured
                    ? "opacity-30 md:opacity-40 md:group-hover:opacity-70"
                    : "opacity-20 md:opacity-0 md:group-hover:opacity-100"
                } transition-opacity duration-500`}
              />

              {item.badges?.length ? (
                <div className="absolute right-4 top-4 z-20 flex items-center gap-2">
                  {item.badges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center rounded-full border border-pink-400/25 bg-pink-500/10 px-2.5 py-1 text-xs font-semibold text-pink-200 backdrop-blur-sm transition-colors duration-300 group-hover:bg-pink-500/15"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              ) : null}
              
              <div className="relative z-10 p-5 flex items-start gap-4">
                <div
                  className={`p-2.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${item.iconColor} ${
                    item.featured ? "shadow-pink-500/10" : ""
                  }`}
                >
                  <item.icon size={22} />
                </div>
                <div className="space-y-2 flex-1">
                  <h3
                    className={`font-bold text-white group-hover:text-white transition-colors ${
                      item.featured ? "text-lg tracking-tight" : "text-lg"
                    }`}
                  >
                    {item.label}
                  </h3>
                  <p
                    className={`text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors ${
                      item.featured ? "text-sm" : "text-sm"
                    }`}
                  >
                    {item.featured ? (
                      <>
                        {item.companyName && (
                          <span className="block">
                            {item.companyUrl ? (
                              <a
                                href={item.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base font-semibold text-slate-100 hover:text-white transition-colors"
                                title={item.companyName}
                                onClick={(e) => e.stopPropagation()}
                              >
                                {item.companyName}
                              </a>
                            ) : (
                              <span className="text-base font-semibold text-slate-100">{item.companyName}</span>
                            )}
                          </span>
                        )}
                        {item.roleTitle && (
                          <span className="mt-1 block text-slate-400 group-hover:text-slate-300 transition-colors">
                            {item.roleTitle}
                          </span>
                        )}
                      </>
                    ) : (
                      item.text
                    )}
                  </p>
                  
                  {item.links && (
                    <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/10">
                      {item.links.map((link, i) => (
                        <a 
                          key={i} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-all hover:scale-110 p-1 hover:bg-white/10 rounded-lg"
                          title={link.label}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <link.icon size={16} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
