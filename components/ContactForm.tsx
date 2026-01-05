'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ContactForm() {
  const { isDark } = useTheme();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formState.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('loading');

    setTimeout(() => {
      console.log('Form submitted:', formState);
      setStatus('success');
      setFormState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });

      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="glassmorphism rounded-2xl p-8 md:p-12 space-y-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg glassmorphism border ${
              errors.name
                ? 'border-red-500'
                : isDark
                ? 'border-neon-teal/20'
                : 'border-blue-500/20'
            } focus:outline-none focus:border-${isDark ? 'neon-teal' : 'blue-500'} transition-colors`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg glassmorphism border ${
              errors.email
                ? 'border-red-500'
                : isDark
                ? 'border-neon-teal/20'
                : 'border-blue-500/20'
            } focus:outline-none focus:border-${isDark ? 'neon-teal' : 'blue-500'} transition-colors`}
            placeholder="john@company.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Med Spa Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formState.company}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg glassmorphism border ${
              errors.company
                ? 'border-red-500'
                : isDark
                ? 'border-neon-teal/20'
                : 'border-blue-500/20'
            } focus:outline-none focus:border-${isDark ? 'neon-teal' : 'blue-500'} transition-colors`}
            placeholder="Vegas Med Spa"
          />
          {errors.company && (
            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.company}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg glassmorphism border ${
              isDark ? 'border-neon-teal/20' : 'border-blue-500/20'
            } focus:outline-none focus:border-${isDark ? 'neon-teal' : 'blue-500'} transition-colors`}
            placeholder="(702) 555-0123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Tell us about your security needs
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          rows={4}
          className={`w-full px-4 py-3 rounded-lg glassmorphism border ${
            isDark ? 'border-neon-teal/20' : 'border-blue-500/20'
          } focus:outline-none focus:border-${isDark ? 'neon-teal' : 'blue-500'} transition-colors resize-none`}
          placeholder="I'm interested in protecting my med spa's client data and capturing after-hours leads..."
        />
      </div>

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-green-500 bg-green-500/10 px-4 py-3 rounded-lg"
        >
          <CheckCircle2 className="w-5 h-5" />
          <span>Thank you! We&apos;ll be in touch within 24 hours.</span>
        </motion.div>
      )}

      <motion.button
        type="submit"
        disabled={status === 'loading'}
        className={`w-full px-8 py-4 rounded-lg text-lg font-semibold ${
          isDark
            ? 'text-neon-teal hover:bg-neon-teal hover:text-neon-dark'
            : 'text-blue-500 hover:bg-blue-500 hover:text-white'
        } glassmorphism neon-glow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
        whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
        whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
      >
        {status === 'loading' ? (
          <>
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Request Security Audit
          </>
        )}
      </motion.button>

      <p className="text-sm opacity-60 text-center">
        * Required fields. We&apos;ll never share your information.
      </p>
    </motion.form>
  );
}
