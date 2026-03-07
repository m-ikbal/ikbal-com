'use client';

import { motion } from 'framer-motion';
import { Lock, Hammer, Github, Terminal, Satellite } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function Projects() {
  const [terminalLines, setTerminalLines] = useState<
    (string | React.ReactNode)[]
  >(['> System initializing...']);

  useEffect(() => {
    let isMounted = true;

    const logs: (string | React.ReactNode)[] = [
      '> Connecting to orbital station... [OK]',
      '> Scanning classified archives... [LOCKED]',
      '> Decryption failed: AUTHORIZATION REQUIRED',
      '> Initiating deep space protocol...',
      '> Alternative relay found:',
      <div key="gh-link" className="mt-2">
        <a
          href="https://github.com/m-ikbal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-purple-300 hover:text-white transition-all duration-300 font-bold text-xs sm:text-sm"
          style={{
            background: 'rgba(124,58,237,0.08)',
            border: '1px solid rgba(124,58,237,0.2)',
          }}
        >
          <Github size={14} />
          <span>ACCESS_GITHUB_REPOSITORY_&gt;&gt;</span>
        </a>
      </div>,
    ];

    const runSimulation = async () => {
      while (isMounted) {
        setTerminalLines(['> System initializing...']);
        await new Promise((r) => setTimeout(r, 1200));
        if (!isMounted) break;

        for (const log of logs) {
          setTerminalLines((prev) => [...prev, log].slice(-7));
          await new Promise((r) => setTimeout(r, 900));
          if (!isMounted) break;
        }

        if (!isMounted) break;
        await new Promise((r) => setTimeout(r, 4000));
      }
    };

    runSimulation();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 relative">
      {/* Section ambient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto text-center space-y-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-cosmic">Projects</span>
          </h2>
          <p className="text-white/35 max-w-2xl mx-auto text-sm sm:text-base">
            This section is currently closed to the outside world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          {/* Outer glow */}
          <div
            className="absolute -inset-[1px] rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"
            style={{
              background:
                'linear-gradient(135deg, rgba(124,58,237,0.4), rgba(59,130,246,0.4), rgba(34,211,238,0.3))',
              filter: 'blur(12px)',
            }}
          />

          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(6,8,20,0.9)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Top bar */}
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
            >
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="text-[10px] text-white/20 font-mono hidden sm:block">
                  orbital-command-center
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/20">
                <Satellite size={12} />
                <span className="text-[10px] font-mono">LIVE</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/60 animate-pulse" />
              </div>
            </div>

            <div className="p-6 sm:p-10">
              <div className="flex flex-col items-center gap-8">
                {/* Icon */}
                <div className="relative">
                  <div
                    className="absolute inset-[-50%] rounded-full animate-pulse"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%)',
                    }}
                  />
                  <div
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                    style={{
                      background: 'rgba(10,14,35,0.8)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      boxShadow: '0 0 40px rgba(124,58,237,0.08)',
                    }}
                  >
                    <Hammer size={32} className="text-purple-400/80 sm:w-10 sm:h-10" />
                    <div
                      className="absolute -bottom-2 -right-2 p-1.5 rounded-lg"
                      style={{
                        background: 'rgba(10,14,35,0.9)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <Lock size={12} className="text-red-400/70" />
                    </div>
                  </div>
                </div>

                {/* Terminal */}
                <div
                  className="w-full max-w-lg rounded-xl p-4 sm:p-5 font-mono text-xs sm:text-sm text-left"
                  style={{
                    background: 'rgba(5,7,20,0.8)',
                    border: '1px solid rgba(255,255,255,0.04)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-4 pb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                    <Terminal size={12} className="text-white/20" />
                    <span className="text-[10px] text-white/20">
                      root@ikbal-station:~
                    </span>
                  </div>
                  <div className="h-[180px] overflow-hidden relative">
                    <div className="absolute bottom-0 left-0 right-0 space-y-2 text-green-400/80">
                      {terminalLines.map((line, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          className="break-all"
                        >
                          {typeof line === 'string' ? (
                            <>
                              <span className="text-purple-400/60 mr-2">$</span>
                              {line}
                            </>
                          ) : (
                            line
                          )}
                        </motion.div>
                      ))}
                      <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.9 }}
                        className="h-4 w-1.5 bg-green-500/60 inline-block"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scan line effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.02]">
              <div
                className="w-full h-[2px] bg-white"
                style={{ animation: 'scan-line 8s linear infinite' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
