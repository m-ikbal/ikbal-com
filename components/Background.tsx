'use client';

import { useEffect, useState, useMemo } from 'react';

function createStarShadows(count: number, spread: number, maxAlpha: number, minAlpha: number): string {
  return Array.from({ length: count }, () => {
    const x = Math.floor(Math.random() * spread);
    const y = Math.floor(Math.random() * spread);
    const a = +(Math.random() * (maxAlpha - minAlpha) + minAlpha).toFixed(2);
    return `${x}px ${y}px 0 0px rgba(255,255,255,${a})`;
  }).join(',');
}

export default function Background() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const layer1 = useMemo(() => mounted ? createStarShadows(400, 2560, 0.6, 0.15) : '', [mounted]);
  const layer2 = useMemo(() => mounted ? createStarShadows(150, 2560, 0.8, 0.3) : '', [mounted]);

  const brightStars = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 94 + 3,
      y: Math.random() * 94 + 3,
      size: Math.random() * 2.5 + 1.5,
      delay: Math.random() * 6,
      duration: Math.random() * 3 + 3,
    }));
  }, [mounted]);

  return (
    <div
      className="fixed inset-0 -z-50 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #020510 0%, #050a1a 25%, #080e28 50%, #060b1e 75%, #030618 100%)',
      }}
    >
      {/* Star layer 1 - distant small stars */}
      {mounted && (
        <div
          className="absolute top-0 left-0"
          style={{ width: '1px', height: '1px', boxShadow: layer1 }}
        />
      )}

      {/* Star layer 2 - medium stars with slow twinkle */}
      {mounted && (
        <div
          className="absolute top-0 left-0"
          style={{
            width: '2px',
            height: '2px',
            borderRadius: '50%',
            boxShadow: layer2,
            animation: 'twinkle-layer 5s ease-in-out infinite',
          }}
        />
      )}

      {/* Bright individual stars with glow */}
      {brightStars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: 'radial-gradient(circle, #fff 0%, rgba(190,200,255,0.5) 40%, transparent 70%)',
            boxShadow: `0 0 ${star.size * 4}px ${star.size}px rgba(190,200,255,0.25)`,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}

      {/* Moon */}
      <div className="absolute top-[6%] right-[6%] sm:right-[10%] md:top-[5%] md:right-[14%]">
        <div
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full relative"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, #f7ecd8 0%, #eddcbd 20%, #dcc8a0 45%, #c4aa80 70%, #a89068 100%)',
            animation: 'moon-glow 8s ease-in-out infinite',
          }}
        >
          <div
            className="absolute w-[18%] h-[18%] rounded-full top-[18%] left-[22%]"
            style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.12), rgba(0,0,0,0.04))' }}
          />
          <div
            className="absolute w-[14%] h-[14%] rounded-full top-[48%] left-[55%]"
            style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.1), rgba(0,0,0,0.03))' }}
          />
          <div
            className="absolute w-[10%] h-[10%] rounded-full top-[32%] right-[18%]"
            style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.09), rgba(0,0,0,0.03))' }}
          />
          <div
            className="absolute w-[16%] h-[16%] rounded-full bottom-[22%] left-[33%]"
            style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.07), rgba(0,0,0,0.02))' }}
          />
          <div
            className="absolute w-[8%] h-[8%] rounded-full top-[62%] left-[16%]"
            style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.08), rgba(0,0,0,0.02))' }}
          />
          <div
            className="absolute w-[6%] h-[6%] rounded-full top-[72%] right-[28%]"
            style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.06), rgba(0,0,0,0.01))' }}
          />
        </div>

        {/* Moon halo */}
        <div
          className="absolute inset-[-100%] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(232,213,183,0.05) 0%, rgba(232,213,183,0.025) 25%, transparent 55%)',
          }}
        />
      </div>

      {/* Moon light rays */}
      <div
        className="absolute top-0 right-0 w-[80%] h-[60%] pointer-events-none"
        style={{
          background:
            'conic-gradient(from 210deg at 85% 15%, transparent 0deg, rgba(232,213,183,0.025) 8deg, transparent 16deg, transparent 60deg, rgba(232,213,183,0.015) 68deg, transparent 76deg, transparent 140deg, rgba(232,213,183,0.03) 148deg, transparent 156deg, transparent 240deg, rgba(232,213,183,0.02) 248deg, transparent 256deg, transparent 320deg, rgba(232,213,183,0.015) 328deg, transparent 336deg)',
          animation: 'moon-ray 10s ease-in-out infinite',
        }}
      />

      {/* Aurora Borealis */}
      <div className="absolute top-0 left-0 right-0 h-[45vh] overflow-hidden pointer-events-none">
        <div
          className="absolute w-[220%] h-full -left-[60%]"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(34,211,238,0.04) 12%, rgba(124,58,237,0.07) 30%, rgba(236,72,153,0.03) 50%, transparent 100%)',
            animation: 'aurora 16s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[200%] h-full -left-[50%]"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.04) 20%, rgba(59,130,246,0.06) 40%, rgba(34,211,238,0.03) 60%, transparent 100%)',
            animation: 'aurora 20s ease-in-out 5s infinite',
          }}
        />
        <div
          className="absolute w-[180%] h-[60%] -left-[40%] top-[10%]"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(236,72,153,0.03) 30%, rgba(124,58,237,0.05) 60%, transparent 100%)',
            animation: 'aurora 24s ease-in-out 10s infinite',
          }}
        />
      </div>

      {/* Shooting stars */}
      <div
        className="absolute top-[8%] left-[12%]"
        style={{
          width: '2px',
          height: '100px',
          background: 'linear-gradient(to bottom, white, rgba(255,255,255,0.4), transparent)',
          animation: 'shooting-star 12s ease-out 2s infinite',
        }}
      />
      <div
        className="absolute top-[15%] left-[50%]"
        style={{
          width: '1.5px',
          height: '80px',
          background: 'linear-gradient(to bottom, rgba(200,220,255,1), rgba(200,220,255,0.3), transparent)',
          animation: 'shooting-star-2 18s ease-out 8s infinite',
        }}
      />
      <div
        className="absolute top-[5%] left-[72%]"
        style={{
          width: '1px',
          height: '60px',
          background: 'linear-gradient(to bottom, rgba(200,240,255,1), rgba(200,240,255,0.2), transparent)',
          animation: 'shooting-star 25s ease-out 0s infinite',
        }}
      />

      {/* Nebula clouds */}
      <div
        className="absolute top-[25%] -left-[5%] w-[500px] h-[500px] rounded-full"
        style={{ background: 'rgba(124,58,237,0.04)', filter: 'blur(120px)' }}
      />
      <div
        className="absolute bottom-[10%] -right-[5%] w-[450px] h-[450px] rounded-full"
        style={{ background: 'rgba(59,130,246,0.04)', filter: 'blur(110px)' }}
      />
      <div
        className="absolute top-[55%] left-[20%] w-[350px] h-[350px] rounded-full"
        style={{ background: 'rgba(34,211,238,0.025)', filter: 'blur(90px)' }}
      />
      <div
        className="absolute top-[75%] right-[15%] w-[300px] h-[300px] rounded-full"
        style={{ background: 'rgba(236,72,153,0.02)', filter: 'blur(80px)' }}
      />
    </div>
  );
}
