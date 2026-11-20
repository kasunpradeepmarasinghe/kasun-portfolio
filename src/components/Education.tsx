'use client';

import React from 'react';
import { GraduationCap, Calendar, MapPin, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education, languages } = portfolioData;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 border border-purple-500/30 text-purple-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Language Proficiency
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Formal degrees in Computer Networking, Security, and Telecommunications Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Degrees (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 backdrop-blur-sm shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <div className="text-purple-400 font-semibold text-sm mt-0.5">
                      {edu.institution}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded">
                      <Calendar className="w-3 h-3 text-purple-400" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded">
                      <MapPin className="w-3 h-3 text-purple-400" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {edu.description && (
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Languages & References Preview (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Language Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-800">
                <Globe className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold text-white text-base">Language Proficiency</h3>
              </div>

              <div className="space-y-4">
                {languages.map((lang, lIdx) => (
                  <div key={lIdx} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-white font-semibold">{lang.language}</span>
                      <span className="text-cyan-400">{lang.level}</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full"
                        style={{ width: lang.language === 'Sinhala' ? '100%' : '90%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Status / SLA Commitment */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-cyan-950/30 to-slate-950/60 border border-cyan-500/30 shadow-xl font-mono text-xs text-slate-300 space-y-2">
              <span className="text-cyan-400 font-bold block text-sm">💡 DevOps Commitment</span>
              <p className="leading-relaxed">
                Dedicated to continuous delivery, rigorous security audits, and automated self-healing cloud infrastructure.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
