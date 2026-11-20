'use client';

import React, { useState } from 'react';
import { 
  Cloud, 
  Boxes, 
  GitBranch, 
  Cpu, 
  Terminal, 
  Database, 
  CheckCircle,
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...portfolioData.skillCategories.map(c => c.name)];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud': return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-indigo-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-sky-400" />;
      case 'Database': return <Database className="w-5 h-5 text-purple-400" />;
      default: return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories = activeCategory === 'All' 
    ? portfolioData.skillCategories 
    : portfolioData.skillCategories.filter(c => c.name === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            DevOps & Cloud Engineering Stack
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Comprehensive hands-on proficiency across cloud infrastructure, container orchestration, CI/CD automation, and observability.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm group hover:-translate-y-1 shadow-lg shadow-black/20"
            >
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800/70">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <h3 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                    {cat.name}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/60">
                  {cat.skills.length} tools
                </span>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-slate-800 transition-colors"
                  >
                    <CheckCircle className="w-3 h-3 text-cyan-400" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
