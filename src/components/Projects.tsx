'use client';

import React from 'react';
import { 
  Cloud, 
  GitBranch, 
  Activity, 
  Boxes, 
  CheckCircle2, 
  TrendingUp, 
  ExternalLink,
  Layers,
  Terminal
} from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  const getProjectIcon = (name: string) => {
    switch (name) {
      case 'Cloud': return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-emerald-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-amber-400" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-indigo-400" />;
      default: return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>ARCHITECTURE SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured DevOps Projects & Architectures
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Real-world cloud architectures, automated CI/CD pipelines, and observability solutions engineered for enterprise reliability.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-sm shadow-xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80 group-hover:scale-110 transition-transform">
                      {getProjectIcon(proj.iconName)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                        {proj.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {proj.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {proj.description}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-2 mb-6 bg-slate-950/70 p-4 rounded-xl border border-slate-800/90">
                  <span className="text-[11px] font-mono text-slate-400 font-bold block mb-2 uppercase">
                    Architecture Highlights:
                  </span>
                  {proj.architecture.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metrics & Tech Stack */}
              <div>
                {proj.metrics && (
                  <div className="mb-4 flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-500/30 px-3 py-2 rounded-lg">
                    <TrendingUp className="w-4 h-4 shrink-0" />
                    <span><strong>Impact:</strong> {proj.metrics}</span>
                  </div>
                )}

                <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {proj.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
