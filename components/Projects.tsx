'use client';

import { motion } from 'framer-motion';
import { Lock, Hammer, Github, Terminal } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function Projects() {
  const [terminalLines, setTerminalLines] = useState<(string | React.ReactNode)[]>([
    "> System initializing...",
  ]);

  useEffect(() => {
    let isMounted = true;

    const logs: (string | React.ReactNode)[] = [
      "> Connecting to secure server... [OK]",
      "> Fetching classified projects... [LOCKED]",
      "> Decryption failed: AUTHORIZATION REQUIRED",
      "> Initiating failsafe protocol...",
      "> Alternative access point found:",
      // Clickable GitHub Link
      <div key="gh-link" className="mt-2 group">
        <a 
          href="https://github.com/m-ikbal" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-2 bg-purple-500/10 border border-purple-500/30 rounded text-purple-300 hover:bg-purple-500/20 hover:text-white hover:border-purple-400 transition-all cursor-pointer font-bold"
        >
          <Github size={16} />
          <span>CLICK_TO_ACCESS_GITHUB_REPO_&gt;&gt;</span>
        </a>
      </div>
    ];

    const runSimulation = async () => {
      while (isMounted) {
        // Loop Start - Reset
        setTerminalLines(["> System initializing..."]);
        await new Promise(r => setTimeout(r, 1000));
        
        if (!isMounted) break;

        // Add logs sequentially
        for (const log of logs) {
          setTerminalLines(prev => [...prev, log].slice(-7));
          await new Promise(r => setTimeout(r, 800));
          if (!isMounted) break;
        }

        if (!isMounted) break;
        
        // Wait 3 seconds after link appears
        await new Promise(r => setTimeout(r, 3000));
      }
    };

    runSimulation();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
             This section is currently closed to the outside world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileTap={{ scale: 0.98 }}
          className="relative group"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-40 md:opacity-25 md:group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-slate-950 border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden">
            
            {/* Background Grid inside card */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="relative z-10 flex flex-col items-center gap-8">
              
              {/* Icon Container - Hammer & Lock */}
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full animate-pulse"></div>
                <div className="relative w-24 h-24 bg-slate-900 rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
                  <Hammer size={40} className="text-purple-400" />
                  <div className="absolute -bottom-2 -right-2 bg-slate-800 p-2 rounded-lg border border-slate-700 shadow-lg">
                    <Lock size={16} className="text-red-400" />
                  </div>
                </div>
              </div>

              {/* Text Content */}


              {/* Terminal Simulation */}
              <div className="w-full max-w-md bg-slate-900/90 rounded-lg p-4 font-mono text-xs md:text-sm text-left border border-white/10 shadow-inner backdrop-blur-sm shadow-purple-500/5">
                <div className="flex justify-between items-center mb-3 border-b border-white/5 pb-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-[10px] text-slate-500 flex items-center gap-1">
                    <Terminal size={10} />
                    <span>root@ikbal-server:~</span>
                  </div>
                </div>
                <div className="space-y-2 text-green-400/90 min-h-[160px] flex flex-col justify-end">
                  {terminalLines.map((line, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="break-all"
                    >
                      {typeof line === 'string' ? (
                        <>
                          <span className="text-blue-400 mr-2">$</span>
                          {line}
                        </>
                      ) : (
                        line
                      )}
                    </motion.div>
                  ))}
                  <motion.div 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="h-4 w-2 bg-green-500 inline-block"
                  />
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
