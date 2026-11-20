'use client';

import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Contributions
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            3+ years managing production cloud infrastructure, troubleshooting high-availability workloads, and streamlining CI/CD releases.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300"></div>

              {/* Date Marker for Larger Screens */}
              <div className="md:absolute md:-left-36 md:top-1 font-mono text-xs text-cyan-400 font-semibold mb-2 md:mb-0">
                {exp.period.split('–')[0].trim()}
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-sm shadow-xl">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-800">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-base font-semibold text-cyan-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 mb-4 font-normal leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-5">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-normal">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-slate-500 mr-1">Stack:</span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/80 text-cyan-300 border border-slate-700/60"
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
