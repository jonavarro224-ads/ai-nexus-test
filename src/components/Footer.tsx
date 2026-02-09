import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Logo & Tagline */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg" />
              <span className="text-lg font-bold text-white">AI Direct Support</span>
            </div>
            <p className="text-sm text-slate-400">
              Operational Intelligence for the Supply Chain Age.
            </p>
          </div>

          {/* Middle: Main Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a 
              href="/" 
              className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Home
            </a>
            <a 
              href="/#audit-types" 
              className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Audit Types
            </a>
            <a 
              href="/#roi" 
              className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
            >
              ROI Engine
            </a>
            <a 
              href="/#about" 
              className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
            >
              About
            </a>
          </nav>

          {/* Right: Contact Link */}
          <div className="flex items-center justify-center md:justify-end">
            <a 
              href="/contact" 
              className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-xs text-slate-500">
              © 2026 AI Direct Support. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
              <a 
                href="/legal#terms" 
                className="hover:text-slate-300 transition-colors"
              >
                Terms of Service
              </a>
              <span className="text-slate-600">|</span>
              <a 
                href="/legal#privacy" 
                className="hover:text-slate-300 transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-slate-600">|</span>
              <a 
                href="/legal#cookies" 
                className="hover:text-slate-300 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
