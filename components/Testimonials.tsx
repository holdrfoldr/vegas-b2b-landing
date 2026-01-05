'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Medical Director',
    company: 'Luxe Aesthetics Vegas',
    content:
      "After a ransomware scare at a neighboring practice, we knew we needed serious protection. Vegas-Tier not only secured our systems but their AI receptionist has captured over $180K in after-hours bookings in just 6 months. It's like having a security team and receptionist that never sleeps.",
    image: '👩‍⚕️',
  },
  {
    name: 'Michael Torres',
    role: 'Owner',
    company: 'Desert Rose Med Spa (3 locations)',
    content:
      'Managing security across three locations was a nightmare. Now everything is centralized and automated. The compliance reporting alone saves our admin team 15 hours a week. Best investment we\'ve made in our practice.',
    image: '👨‍💼',
  },
  {
    name: 'Amanda Rodriguez',
    role: 'Practice Manager',
    company: 'Oasis Wellness & Aesthetics',
    content:
      "We were losing 30-40% of calls that came in after 6pm. The AI receptionist is so good, clients can't tell it's not human. Our booking rate increased by 67% in the first month. Plus, I sleep better knowing our client data is fully protected.",
    image: '👩‍💻',
  },
];

export default function Testimonials() {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prev) =>
        (prev + newDirection + testimonials.length) % testimonials.length
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="glassmorphism rounded-2xl p-8 md:p-12 relative overflow-hidden min-h-[400px] flex items-center">
        <Quote
          className={`absolute top-6 left-6 w-16 h-16 opacity-20 ${
            isDark ? 'text-neon-teal' : 'text-blue-500'
          }`}
        />

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">
                {testimonials[currentIndex].image}
              </div>
              <h4 className="text-xl font-bold mb-1">
                {testimonials[currentIndex].name}
              </h4>
              <p className="opacity-70 text-sm">
                {testimonials[currentIndex].role},{' '}
                {testimonials[currentIndex].company}
              </p>
            </div>

            <p className="text-lg leading-relaxed text-center max-w-2xl mx-auto opacity-90">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </p>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => navigate(-1)}
          className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full glassmorphism hover:scale-110 transition-transform ${
            isDark ? 'text-neon-teal' : 'text-blue-500'
          }`}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => navigate(1)}
          className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full glassmorphism hover:scale-110 transition-transform ${
            isDark ? 'text-neon-teal' : 'text-blue-500'
          }`}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? `w-8 ${isDark ? 'bg-neon-teal' : 'bg-blue-500'}`
                : 'bg-gray-500'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
