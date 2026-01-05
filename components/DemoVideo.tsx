'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from '@/components/icons';
import { useTheme } from './ThemeProvider';

export default function DemoVideo() {
  const { isDark } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glassmorphism rounded-2xl overflow-hidden aspect-video relative group cursor-pointer"
        onClick={() => setIsPlaying(true)}
      >
        {!isPlaying ? (
          <>
            <div
              className="absolute inset-0 bg-gradient-to-br from-neon-dark via-neon-gray to-neon-dark"
              style={{
                backgroundImage: isDark
                  ? 'linear-gradient(135deg, #0a0e17 0%, #1a1f2e 50%, #0a0e17 100%)'
                  : 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #f3f4f6 100%)',
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className={`w-20 h-20 rounded-full glassmorphism flex items-center justify-center group-hover:scale-110 transition-transform ${
                  isDark ? 'neon-glow' : ''
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play
                  className={`w-10 h-10 ${
                    isDark ? 'text-neon-teal' : 'text-blue-500'
                  } ml-1`}
                  fill="currentColor"
                />
              </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-xl font-bold text-white mb-1">
                See Vegas-Tier Protection in Action
              </h3>
              <p className="text-white/80 text-sm">
                Watch how we protect practices and recover leads (2:30)
              </p>
            </div>
          </>
        ) : (
          <div className="relative w-full h-full bg-black">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsPlaying(false);
              }}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Vegas-Tier Protection Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </motion.div>

      <div className="mt-6 text-center">
        <p className="opacity-70 text-sm">
          Watch our 2-minute demo to see the platform in action
        </p>
      </div>
    </div>
  );
}
