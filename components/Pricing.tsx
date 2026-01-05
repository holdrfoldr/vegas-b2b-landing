'use client';

import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const plans = [
  {
    name: 'Starter',
    price: '$499',
    period: '/month',
    description: 'Perfect for single-location med spas',
    features: [
      'Basic network monitoring',
      'After-hours AI receptionist',
      'Weekly encrypted backups',
      'Email support',
      'HIPAA compliance dashboard',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$1,299',
    period: '/month',
    description: 'For growing multi-location practices',
    features: [
      'Advanced threat detection',
      '24/7 AI receptionist with booking',
      'Daily encrypted backups',
      'Priority phone support',
      'Full compliance reporting',
      'Vulnerability scanning',
      'Multi-location support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'White-glove service for large organizations',
    features: [
      'Dedicated security team',
      'Custom AI training',
      'Real-time backup replication',
      '24/7 premium support',
      'Custom integrations',
      'Penetration testing',
      'Unlimited locations',
      'SLA guarantees',
    ],
    popular: false,
  },
];

export default function Pricing() {
  const { isDark } = useTheme();

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`glassmorphism rounded-2xl p-8 relative ${
            plan.popular
              ? `border-2 ${isDark ? 'border-neon-teal' : 'border-blue-500'}`
              : ''
          }`}
          whileHover={{ y: -5 }}
        >
          {plan.popular && (
            <div
              className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 ${
                isDark
                  ? 'bg-neon-teal text-neon-dark'
                  : 'bg-blue-500 text-white'
              }`}
            >
              <Zap className="w-4 h-4" />
              Most Popular
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="opacity-70 text-sm">{plan.description}</p>
          </div>

          <div className="mb-6">
            <span className="text-5xl font-bold">{plan.price}</span>
            <span className="opacity-70">{plan.period}</span>
          </div>

          <ul className="space-y-3 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <Check
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    isDark ? 'text-neon-teal' : 'text-blue-500'
                  }`}
                />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <motion.button
            className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              plan.popular
                ? `${
                    isDark
                      ? 'bg-neon-teal text-neon-dark hover:bg-neon-teal/90'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  } neon-glow`
                : `glassmorphism ${
                    isDark
                      ? 'text-neon-teal hover:bg-neon-teal hover:text-neon-dark'
                      : 'text-blue-500 hover:bg-blue-500 hover:text-white'
                  }`
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
}
