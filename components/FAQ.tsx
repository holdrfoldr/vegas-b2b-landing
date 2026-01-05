'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const faqs = [
  {
    question: 'How quickly can you set up our security system?',
    answer:
      'Most implementations are completed within 48-72 hours. We handle all the technical setup remotely, requiring minimal interruption to your practice.',
  },
  {
    question: 'Do you integrate with existing practice management software?',
    answer:
      'Yes! We integrate with all major practice management systems including ModMed, Nextech, AdvancedMD, and more. Custom integrations are available for Enterprise clients.',
  },
  {
    question: 'What happens if we experience a ransomware attack?',
    answer:
      'Our system detects and blocks ransomware in real-time. If an attack occurs, we immediately isolate affected systems and restore from encrypted backups, typically within 2-4 hours with zero data loss.',
  },
  {
    question: 'How does the AI receptionist handle complex booking scenarios?',
    answer:
      'Our AI is trained specifically for med spa operations. It understands treatment types, pricing, provider availability, and can handle rescheduling, cancellations, and special requests. It escalates complex cases to your team during business hours.',
  },
  {
    question: 'Are we compliant with both HIPAA and Nevada state regulations?',
    answer:
      'Absolutely. We maintain full HIPAA compliance and align with Nevada Gaming Control Board security standards. All data is encrypted at rest and in transit using AES-256 encryption.',
  },
  {
    question: 'Can we cancel or change our plan?',
    answer:
      'Plans are month-to-month with no long-term contracts. You can upgrade, downgrade, or cancel anytime with 30 days notice. All your data is exported in standard formats upon request.',
  },
];

export default function FAQ() {
  const { isDark } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="glassmorphism rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
          >
            <span className="font-semibold pr-4">{faq.question}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown
                className={`w-5 h-5 flex-shrink-0 ${
                  isDark ? 'text-neon-teal' : 'text-blue-500'
                }`}
              />
            </motion.div>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 opacity-80">{faq.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
