import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [chaosParticles, setChaosParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [orderParticles, setOrderParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  // Generate initial particles
  useEffect(() => {
    // Chaos particles - random positions
    const chaos = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setChaosParticles(chaos);

    // Order particles - vertical line
    const order = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: 50,
      y: (i + 1) * (100 / 9),
    }));
    setOrderParticles(order);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const chaosVariants = {
    animate: {
      x: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0],
      y: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const orderVariants = {
    animate: {
      y: ['-100%', '100%'],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen bg-slate-900 pt-32 pb-12 overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-180px)]">
          {/* Left Column - Content (55% on desktop) */}
          <motion.div
            className="lg:col-span-7 z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
                System Architecture Audit
              </div>
            </motion.div>

            {/* H1 - Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              We Audit, Rebuild, and{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Automate
              </span>{' '}
              Your Business Architecture.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-400 mb-8 max-w-xl leading-relaxed"
            >
              Stop patching leaks. We build self-regulating AI systems that cut operational drag by 40%.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Primary CTA - Orange */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/50 flex items-center justify-center gap-2"
              >
                Get Structural Audit
              </motion.button>

              {/* Secondary CTA - Transparent with border */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white/20 hover:border-cyan-500/50 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:bg-white/5"
              >
                View System Architecture
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual (45% on desktop) */}
          <motion.div
            className="lg:col-span-5"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="glass-panel p-8 h-96 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full h-full p-6">
                  {/* Zone 1: Manual Input (Chaos) */}
                  <div className="relative bg-slate-900/50 border border-red-500/20 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-semibold text-red-400 text-center px-2">
                        Manual Input
                      </span>
                    </div>

                    {/* Chaotic red dots */}
                    <div className="absolute inset-0">
                      {chaosParticles.map((particle) => (
                        <motion.div
                          key={`chaos-${particle.id}`}
                          className="absolute w-2 h-2 bg-red-500 rounded-full"
                          style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                          }}
                          variants={chaosVariants}
                          animate="animate"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Zone 2: AI Process (Order) */}
                  <div className="relative bg-slate-900/50 border border-blue-500/20 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-semibold text-blue-400 text-center px-2">
                        AI Process
                      </span>
                    </div>

                    {/* Ordered blue dots moving vertically */}
                    <div className="absolute inset-0">
                      {orderParticles.map((particle) => (
                        <motion.div
                          key={`order-${particle.id}`}
                          className="absolute w-2 h-2 bg-blue-500 rounded-full"
                          style={{
                            left: `${particle.x}%`,
                          }}
                          variants={orderVariants}
                          animate="animate"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Optional: Center divider line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
            </div>

            {/* Caption */}
            <p className="text-center text-sm text-slate-400 mt-4">
              Order from Chaos — AI transforms unstructured input into systematic processes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
