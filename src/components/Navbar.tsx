import { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-cyan-500" />
            <span className="text-2xl font-display font-bold text-white">
              AI Direct Support
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-cyan-500 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('methodology')}
              className="text-gray-300 hover:text-cyan-500 transition-colors font-medium"
            >
              Methodology
            </button>
            <button
              onClick={() => scrollToSection('training')}
              className="text-gray-300 hover:text-cyan-500 transition-colors font-medium"
            >
              Training
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-cyan-500 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Book Your Audit
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-slate-800"
          >
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-300 hover:text-cyan-500 transition-colors font-medium py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('methodology')}
                className="block w-full text-left text-gray-300 hover:text-cyan-500 transition-colors font-medium py-2"
              >
                Methodology
              </button>
              <button
                onClick={() => scrollToSection('training')}
                className="block w-full text-left text-gray-300 hover:text-cyan-500 transition-colors font-medium py-2"
              >
                Training
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-300 hover:text-cyan-500 transition-colors font-medium py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Book Your Audit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
