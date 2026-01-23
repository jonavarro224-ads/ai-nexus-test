import { Brain, Linkedin, Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Brain className="w-8 h-8 text-cyan-500" />
              <span className="text-2xl font-display font-bold text-white">
                AI Direct Support
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Transforming businesses through intelligent auditing, strategic consulting, and comprehensive corporate education.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="p-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-lg transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-lg transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-lg transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-lg transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-display font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-cyan-500 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('methodology')}
                  className="text-gray-400 hover:text-cyan-500 transition-colors"
                >
                  Methodology
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('training')}
                  className="text-gray-400 hover:text-cyan-500 transition-colors"
                >
                  Training
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-cyan-500 transition-colors"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 AI Direct Support. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with intelligence and care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
