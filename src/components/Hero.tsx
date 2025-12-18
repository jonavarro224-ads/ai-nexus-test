import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>Transforming Businesses Through Intelligence</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
            Future-Proof Your Business
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Structure with Intelligence
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We audit, educate, and implement AI systems to streamline operations
            and empower your workforce.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Start with a Structural Audit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('training')}
              className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800/80 hover:border-cyan-500/50 transition-all duration-300"
            >
              Explore Training Programs
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="pt-16"
          >
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-500 rounded-full animate-ping"></div>
                  <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-500 rounded-full animate-ping delay-300"></div>
                  <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-700"></div>

                  <svg className="w-full h-full opacity-30" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="currentColor" className="text-cyan-500" strokeWidth="1" fill="none">
                      <line x1="200" y1="100" x2="400" y2="225" strokeDasharray="5,5" />
                      <line x1="400" y1="225" x2="600" y2="100" strokeDasharray="5,5" />
                      <line x1="400" y1="225" x2="400" y2="350" strokeDasharray="5,5" />
                      <line x1="200" y1="100" x2="300" y2="350" strokeDasharray="5,5" />
                      <line x1="600" y1="100" x2="500" y2="350" strokeDasharray="5,5" />
                    </g>
                    <circle cx="200" cy="100" r="8" fill="#06B6D4" opacity="0.8" />
                    <circle cx="400" cy="225" r="12" fill="#06B6D4" opacity="0.8" />
                    <circle cx="600" cy="100" r="8" fill="#3B82F6" opacity="0.8" />
                    <circle cx="300" cy="350" r="8" fill="#3B82F6" opacity="0.8" />
                    <circle cx="500" cy="350" r="8" fill="#06B6D4" opacity="0.8" />
                    <circle cx="400" cy="350" r="10" fill="#3B82F6" opacity="0.8" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cyan-500 rounded-full"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
