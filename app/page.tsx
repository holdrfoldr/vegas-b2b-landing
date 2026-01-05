'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Bot, Lock, AlertTriangle, Award, TrendingUp, Clock } from '@/components/icons';
import ParticleBackground from '@/components/ParticleBackground';
import ThemeToggle from '@/components/ThemeToggle';
import ContactForm from '@/components/ContactForm';
import DemoVideo from '@/components/DemoVideo';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import { useTheme } from '@/components/ThemeProvider';

export default function Home() {
  const { isDark } = useTheme();

  return (
    <main className="min-h-screen relative">
      <ParticleBackground isDark={isDark} />
      <ThemeToggle />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className={`neon-text ${isDark ? 'text-neon-teal' : 'text-blue-500'}`}>Vegas-Tier</span>
              <br />
              <span>Client Protection</span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl opacity-80 mb-12 max-w-3xl mx-auto">
              Automated HIPAA Security & Lead Recovery for High-Volume Med Spas
            </p>

            <motion.button
              className={`glassmorphism px-8 py-4 rounded-lg text-lg font-semibold ${
                isDark ? 'text-neon-teal hover:bg-neon-teal hover:text-neon-dark' : 'text-blue-500 hover:bg-blue-500 hover:text-white'
              } neon-glow transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Secure Your Practice
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className={`w-6 h-10 rounded-full border-2 ${isDark ? 'border-neon-teal' : 'border-blue-500'} flex items-start justify-center p-2`}>
            <motion.div
              className={`w-1 h-2 rounded-full ${isDark ? 'bg-neon-teal' : 'bg-blue-500'}`}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              See It <span className={`neon-text ${isDark ? 'text-neon-teal' : 'text-blue-500'}`}>In Action</span>
            </h2>
            <p className="text-xl opacity-70">
              Watch how we protect your practice and recover lost revenue
            </p>
          </motion.div>

          <DemoVideo />
        </div>
      </section>

      {/* Risk Visualizer Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Pulse Animation */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full blur-3xl opacity-20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                <h2 className="text-3xl md:text-4xl font-bold">Threat Monitor</h2>
                <div className="flex items-center gap-3 glassmorphism px-6 py-3 rounded-full border-2 border-red-500">
                  <AlertTriangle className="w-6 h-6 text-red-500 animate-pulse" />
                  <span className="text-xl font-bold text-red-500">THREAT LEVEL: HIGH</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  className="glassmorphism p-6 rounded-xl border-l-4 border-red-500"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Ransomware Targeting Clinics</h3>
                      <p className="text-gray-400">
                        Healthcare facilities are prime targets. 67% increase in attacks this quarter.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="glassmorphism p-6 rounded-xl border-l-4 border-yellow-500"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <Eye className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Missed After-Hours Leads</h3>
                      <p className="text-gray-400">
                        Average med spa loses $45K/month in missed opportunities during off-hours.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="neon-text text-neon-teal">Solution</span>
            </h2>
            <p className="text-xl text-gray-400">Three-tier protection system built for med spas</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* The Watchdog */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-2xl p-8 hover:border-neon-teal transition-all duration-300 group"
              whileHover={{ y: -10 }}
            >
              <div className="mb-6 flex justify-center">
                <div className={`p-4 rounded-full ${isDark ? 'bg-neon-teal/10 group-hover:bg-neon-teal/20' : 'bg-blue-500/10 group-hover:bg-blue-500/20'} transition-all duration-300`}>
                  <Shield className={`w-12 h-12 ${isDark ? 'text-neon-teal' : 'text-blue-500'}`} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">The Watchdog</h3>
              <p className="text-gray-400 text-center mb-6">
                24/7 network scanning and threat detection. Real-time alerts for suspicious activity.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-neon-teal mt-1">•</span>
                  <span className="text-sm text-gray-400">Continuous vulnerability monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-teal mt-1">•</span>
                  <span className="text-sm text-gray-400">Automated security patches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-teal mt-1">•</span>
                  <span className="text-sm text-gray-400">HIPAA compliance tracking</span>
                </li>
              </ul>
            </motion.div>

            {/* The Concierge */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-2xl p-8 hover:border-neon-teal transition-all duration-300 group"
              whileHover={{ y: -10 }}
            >
              <div className="mb-6 flex justify-center">
                <div className={`p-4 rounded-full ${isDark ? 'bg-neon-teal/10 group-hover:bg-neon-teal/20' : 'bg-blue-500/10 group-hover:bg-blue-500/20'} transition-all duration-300`}>
                  <Bot className={`w-12 h-12 ${isDark ? 'text-neon-teal' : 'text-blue-500'}`} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">The Concierge</h3>
              <p className="text-gray-400 text-center mb-6">
                AI receptionist that books appointments at 2 AM. Never miss a lead again.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-neon-teal mt-1">•</span>
                  <span className="text-sm text-gray-400">24/7 intelligent lead capture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-teal mt-1">•</span>
                  <span className="text-sm text-gray-400">Automated appointment booking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-teal mt-1">•</span>
                  <span className="text-sm text-gray-400">Multi-language support</span>
                </li>
              </ul>
            </motion.div>

            {/* The Vault */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-2xl p-8 hover:border-neon-teal transition-all duration-300 group"
              whileHover={{ y: -10 }}
            >
              <div className="mb-6 flex justify-center">
                <div className={`p-4 rounded-full ${isDark ? 'bg-neon-teal/10 group-hover:bg-neon-teal/20' : 'bg-blue-500/10 group-hover:bg-blue-500/20'} transition-all duration-300`}>
                  <Lock className={`w-12 h-12 ${isDark ? 'text-neon-teal' : 'text-blue-500'}`} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">The Vault</h3>
              <p className="text-gray-400 text-center mb-6">
                Military-grade encrypted backups. Your client data stays secure, always.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-neon-teal mt-1">•</span>
                  <span className="text-sm text-gray-400">AES-256 encryption at rest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-teal mt-1">•</span>
                  <span className="text-sm text-gray-400">Automated daily backups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-teal mt-1">•</span>
                  <span className="text-sm text-gray-400">Instant disaster recovery</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by <span className={`neon-text ${isDark ? 'text-neon-teal' : 'text-blue-500'}`}>Leading</span> Med Spas
            </h2>
            <p className="text-xl opacity-70">Real results from real businesses</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-xl p-8 text-center"
            >
              <TrendingUp className={`w-12 h-12 ${isDark ? 'text-neon-teal' : 'text-blue-500'} mx-auto mb-4`} />
              <div className="text-4xl font-bold mb-2">$127K</div>
              <p className="opacity-70">Average Annual Lead Recovery</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-xl p-8 text-center"
            >
              <Shield className={`w-12 h-12 ${isDark ? 'text-neon-teal' : 'text-blue-500'} mx-auto mb-4`} />
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="opacity-70">HIPAA Compliance Rate</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-xl p-8 text-center"
            >
              <Clock className={`w-12 h-12 ${isDark ? 'text-neon-teal' : 'text-blue-500'} mx-auto mb-4`} />
              <div className="text-4xl font-bold mb-2">&lt;2 min</div>
              <p className="opacity-70">Average Response Time</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What <span className={`neon-text ${isDark ? 'text-neon-teal' : 'text-blue-500'}`}>Clients</span> Say
            </h2>
            <p className="text-xl opacity-70">Real results from real med spas</p>
          </motion.div>

          <Testimonials />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, <span className={`neon-text ${isDark ? 'text-neon-teal' : 'text-blue-500'}`}>Transparent</span> Pricing
            </h2>
            <p className="text-xl opacity-70">
              No setup fees. No contracts. Cancel anytime.
            </p>
          </motion.div>

          <Pricing />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className={`neon-text ${isDark ? 'text-neon-teal' : 'text-blue-500'}`}>Questions?</span> We&apos;ve Got Answers
            </h2>
            <p className="text-xl opacity-70">Everything you need to know</p>
          </motion.div>

          <FAQ />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Your <span className={`neon-text ${isDark ? 'text-neon-teal' : 'text-blue-500'}`}>Free</span> Security Audit
            </h2>
            <p className="text-xl opacity-70">
              See exactly where your practice is vulnerable and how we can help
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </section>

      {/* Trust Footer Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 border-t ${isDark ? 'border-neon-teal/20' : 'border-blue-500/20'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built on <span className="neon-text text-neon-teal">Trust</span>
            </h2>
            <p className="text-xl text-gray-400">Enterprise-grade security you can verify</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-xl p-8 text-center group hover:border-neon-teal transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Award className={`w-16 h-16 ${isDark ? 'text-neon-teal' : 'text-blue-500'} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
              <h3 className="text-xl font-bold mb-2">NIST Compliant</h3>
              <p className="text-gray-400 text-sm">
                Adheres to NIST Cybersecurity Framework standards
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-xl p-8 text-center group hover:border-neon-teal transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Shield className={`w-16 h-16 ${isDark ? 'text-neon-teal' : 'text-blue-500'} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
              <h3 className="text-xl font-bold mb-2">HIPAA Ready</h3>
              <p className="text-gray-400 text-sm">
                Full compliance with HIPAA security and privacy rules
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-xl p-8 text-center group hover:border-neon-teal transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Lock className={`w-16 h-16 ${isDark ? 'text-neon-teal' : 'text-blue-500'} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
              <h3 className="text-xl font-bold mb-2">Nevada Gaming Aligned</h3>
              <p className="text-gray-400 text-sm">
                Security protocols trusted by Vegas casinos
              </p>
            </motion.div>
          </div>

          {/* CTA Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-6">Ready to protect your practice?</p>
            <motion.button
              className={`glassmorphism px-10 py-4 rounded-lg text-lg font-semibold ${
                isDark ? 'text-neon-teal hover:bg-neon-teal hover:text-neon-dark' : 'text-blue-500 hover:bg-blue-500 hover:text-white'
              } neon-glow transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Security Audit
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Final Footer */}
      <footer className={`py-8 px-4 sm:px-6 lg:px-8 border-t ${isDark ? 'border-neon-teal/10' : 'border-blue-500/10'}`}>
        <div className="max-w-6xl mx-auto text-center opacity-60 text-sm">
          <p>&copy; 2026 Vegas-Tier Protection. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
