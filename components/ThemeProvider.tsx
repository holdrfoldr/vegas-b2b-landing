'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Read from DOM (matches inline script) instead of localStorage
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.className === 'dark';
    }
    return true; // SSR default
  });

  useEffect(() => {
    // Only sync if there's a mismatch
    const stored = localStorage.getItem('theme');
    if (stored && (stored === 'dark') !== isDark) {
      setIsDark(stored === 'dark');
    }
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const newTheme = !prev;
      const themeString = newTheme ? 'dark' : 'light';

      // Batch DOM updates
      requestAnimationFrame(() => {
        document.documentElement.className = themeString;
        localStorage.setItem('theme', themeString);
      });

      return newTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
