'use client';

import React from 'react';
import { UserCheck, Mail, Phone, Building2, Shield } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function References() {
  const { references } = portfolioData;

  return (
    <section className="py-16 relative bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-teal-500/10 border border-teal-500/30 text-teal-400 mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Professional References
          </h2>
          <p className="mt-2 text-slate-400 text-sm">
            Industry leadership references available to verify work ethic, architecture skills, and operational performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {references.map((ref, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-teal-500/40 transition-all backdrop-blur-sm shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-white text-lg">
                    {ref.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    {ref.designation}
                  </p>
                  <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
                    <Building2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>{ref.company}</span>
                  </p>
                  
                  <div className="pt-3 mt-3 border-t border-slate-800 flex flex-col gap-1.5 font-mono text-xs text-slate-300">
                    <a 
                      href={`mailto:${ref.email}`} 
                      className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{ref.email}</span>
                    </a>
                    <a 
                      href={`tel:${ref.phone}`} 
                      className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{ref.phone}</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
