'use client';

import React from 'react';
import { Terminal, Shield, ArrowUp, Container, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-black/80 py-12 relative font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">
                Kasun Pradeep Marasinghe
              </div>
              <div className="text-[11px] text-slate-500">
                AWS Certified Solutions Architect & CKA Certified
              </div>
            </div>
          </div>

          {/* Docker & Cloud Architecture Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 text-[11px]">
            <Container className="w-4 h-4 text-blue-400" />
            <span>Dockerized Production Build: Node 20 Alpine Standalone</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500 text-[11px]">
          <p>
            © {new Date().getFullYear()} Kasun Pradeep Marasinghe. All rights reserved.
          </p>
          <p className="flex items-center gap-1 justify-center">
            Engineered with Next.js, TypeScript, Tailwind CSS & Docker
          </p>
        </div>

      </div>
    </footer>
  );
}
