'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  trail: { x: number; y: number }[];
  noiseOffsetX: number;
  noiseOffsetY: number;
  autonomousSpeed: number;
}

interface ParticleBackgroundProps {
  isDark?: boolean;
}

export default function ParticleBackground({ isDark = true }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const themeRef = useRef(isDark);
  const timeRef = useRef(0);
  const isMobileRef = useRef(false);

  useEffect(() => {
    themeRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Detect mobile
      isMobileRef.current = window.innerWidth < 768 ||
        ('ontouchstart' in window && navigator.maxTouchPoints > 0);

      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = [];
      // Reduce particles on mobile for performance
      const density = isMobileRef.current ? 15000 : 12000;
      const particleCount = Math.floor((canvas.width * canvas.height) / density);

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;

        particlesRef.current.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2.5 + 1.5,
          opacity: Math.random() * 0.6 + 0.3,
          trail: [],
          noiseOffsetX: Math.random() * 1000,
          noiseOffsetY: Math.random() * 1000,
          autonomousSpeed: Math.random() * 0.2 + 0.1,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Only track mouse on desktop, not on mobile
      if (!isMobileRef.current) {
        mouseRef.current = {
          x: e.clientX,
          y: e.clientY,
        };
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      timeRef.current += 0.01;

      ctx.fillStyle = themeRef.current ? 'rgba(10, 14, 23, 0.1)' : 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const color = themeRef.current ? '0, 240, 255' : '59, 130, 246';

      particlesRef.current.forEach((particle, i) => {
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distanceToMouse = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distanceToMouse;
        const forceDirectionY = dy / distanceToMouse;
        const maxForceDistance = 200;
        const force = (maxForceDistance - distanceToMouse) / maxForceDistance;

        if (distanceToMouse < maxForceDistance) {
          particle.vx -= forceDirectionX * force * 0.8;
          particle.vy -= forceDirectionY * force * 0.8;
        }

        // Autonomous drift using simplified Perlin noise
        const noiseX = Math.sin(particle.noiseOffsetX + timeRef.current) * 0.5 +
                       Math.sin((particle.noiseOffsetX + timeRef.current) * 2.3) * 0.3;
        const noiseY = Math.cos(particle.noiseOffsetY + timeRef.current) * 0.5 +
                       Math.cos((particle.noiseOffsetY + timeRef.current) * 1.7) * 0.3;

        // Apply autonomous drift
        particle.vx += noiseX * particle.autonomousSpeed * 0.05;
        particle.vy += noiseY * particle.autonomousSpeed * 0.05;

        particle.vx += (particle.baseX - particle.x) * 0.01;
        particle.vy += (particle.baseY - particle.y) * 0.01;

        particle.vx *= 0.95;
        particle.vy *= 0.95;

        particle.trail.push({ x: particle.x, y: particle.y });
        if (particle.trail.length > 10) {
          particle.trail.shift();
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        const visibilityRadius = 350;
        const visibilityFactor = Math.max(0, 1 - distanceToMouse / visibilityRadius);

        if (visibilityFactor > 0) {
          for (let j = 0; j < particle.trail.length - 1; j++) {
            const alpha = (j / particle.trail.length) * particle.opacity * 0.3 * visibilityFactor;
            ctx.strokeStyle = `rgba(${color}, ${alpha})`;
            ctx.lineWidth = particle.size * 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.trail[j].x, particle.trail[j].y);
            ctx.lineTo(particle.trail[j + 1].x, particle.trail[j + 1].y);
            ctx.stroke();
          }

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${particle.opacity * visibilityFactor})`;
          ctx.fill();

          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const other = particlesRef.current[j];
            const otherDx = mouseRef.current.x - other.x;
            const otherDy = mouseRef.current.y - other.y;
            const otherDistToMouse = Math.sqrt(otherDx * otherDx + otherDy * otherDy);
            const otherVisibility = Math.max(0, 1 - otherDistToMouse / visibilityRadius);

            if (otherVisibility > 0) {
              const dx = other.x - particle.x;
              const dy = other.y - particle.y;
              const dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < 120) {
                const connectionAlpha = (1 - dist / 120) * 0.15 * Math.min(visibilityFactor, otherVisibility);
                ctx.strokeStyle = `rgba(${color}, ${connectionAlpha})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(other.x, other.y);
                ctx.stroke();
              }
            }
          }
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}
