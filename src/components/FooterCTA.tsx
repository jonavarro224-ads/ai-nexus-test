import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function FooterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const documentVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
    },
    float: {
      y: [0, -10, 0],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  return (
    <section id="footer-cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Text & Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Not ready for an audit?
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Download the 15-Point AI Readiness Checklist.
              </span>
            </h2>

            <p className="text-lg text-slate-400 mb-8">
              Get clarity on where your team stands with AI adoption. A quick self-assessment to identify gaps and opportunities.
            </p>

            {/* Apple-style Inline Form */}
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter work email"
                  required
                  className="w-full px-5 py-3 bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
                {email && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.div>
                )}
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-r-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-cyan-500/50"
              >
                {submitted ? (
                  <>
                    <span className="text-sm">Sent!</span>
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline text-sm">Send</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>

            {/* Success Message */}
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 text-sm text-cyan-400 font-semibold"
              >
                ✓ Check your email for the checklist!
              </motion.p>
            )}
          </div>

          {/* Right Side - CSS Document Visualization */}
          <motion.div
            variants={documentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            animate="float"
            className="flex justify-center items-center"
          >
            {/* Floating Document */}
            <div className="relative w-64 h-80">
              {/* Shadow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg blur-2xl" />

              {/* Document Card */}
              <div className="relative bg-white rounded-lg shadow-2xl shadow-cyan-500/20 overflow-hidden">
                {/* Document Header */}
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-20 flex flex-col justify-center px-6">
                  <p className="text-white font-bold text-lg">AI Readiness</p>
                  <p className="text-cyan-100 text-xs">15-Point Checklist</p>
                </div>

                {/* Document Content - Simulated text lines */}
                <div className="p-6 space-y-3">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="space-y-1">
                      <div className="h-2 bg-slate-300 rounded w-full" />
                      <div className="h-2 bg-slate-200 rounded w-5/6" />
                    </div>
                  ))}
                </div>

                {/* Document Corner fold effect */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-slate-100 clip-triangle" style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
                }} />
              </div>

              {/* Floating animation indicator */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-20 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6"
      >
        <p className="text-sm text-slate-500">
          © 2026 AI Direct Support. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="/legal#privacy"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="/legal#terms"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
          >
            Terms of Service
          </a>
          <a
            href="/#contact"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}
