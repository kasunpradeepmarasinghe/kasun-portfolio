'use client';

import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { portfolioData, Certification } from '../data/portfolioData';
import { 
  CKABadgeLogo, 
  AWSSolutionsArchitectBadge, 
  AWSCloudPractitionerBadge, 
  AviatrixBadge, 
  CiscoLinuxBadge 
} from './Icons';
import ThreeDCard from './ThreeDCard';

export default function Certifications() {
  const [filter, setFilter] = useState<'all' | 'featured' | 'cloud' | 'k8s' | 'linux'>('all');

  const getOfficialBadge = (title: string) => {
    if (title.includes('Kubernetes Administrator') || title.includes('CKA')) {
      return <CKABadgeLogo className="w-14 h-14 shrink-0 hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(50,108,229,0.6)]" />;
    }
    if (title.includes('Solutions Architect')) {
      return <AWSSolutionsArchitectBadge className="w-14 h-14 shrink-0 hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,153,0,0.6)]" />;
    }
    if (title.includes('Cloud Practitioner')) {
      return <AWSCloudPractitionerBadge className="w-14 h-14 shrink-0 hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(255,153,0,0.4)]" />;
    }
    if (title.includes('Aviatrix') || title.includes('Multicloud Network')) {
      return <AviatrixBadge className="w-14 h-14 shrink-0 hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,85,0,0.5)]" />;
    }
    if (title.includes('Cisco') || title.includes('NDG Linux')) {
      return <CiscoLinuxBadge className="w-14 h-14 shrink-0 hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(4,150,255,0.4)]" />;
    }
    return (
      <div className="w-14 h-14 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
        <ShieldCheck className="w-8 h-8 text-cyan-400" />
      </div>
    );
  };

  const filteredCerts = portfolioData.certifications.filter((cert) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return cert.featured;
    return cert.category === filter;
  });

  return (
    <section id="certifications" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>AUTHENTIC CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified DevOps &amp; Cloud Certifications
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Official certifications validated by CNCF/Linux Foundation, Amazon Web Services, Aviatrix, and Cisco.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Certifications' },
            { id: 'featured', label: '⭐ Major Credentials' },
            { id: 'cloud', label: 'AWS & Cloud' },
            { id: 'k8s', label: 'Kubernetes (CKA)' },
            { id: 'linux', label: 'Linux & Systems' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all ${
                filter === tab.id
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <ThreeDCard key={index} depth={18}>
              <div
                className={`relative p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border transition-all duration-300 backdrop-blur-sm group shadow-xl flex flex-col justify-between h-full ${
                  cert.featured
                    ? 'border-cyan-500/40 shadow-cyan-500/10 hover:border-cyan-400'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {cert.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-mono font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full z-20">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>TOP CREDENTIAL</span>
                  </div>
                )}

                <div>
                  <div className="flex items-start gap-4 mb-4">
                    {getOfficialBadge(cert.title)}
                    <div>
                      <h3 className="font-bold text-white text-base leading-snug group-hover:text-cyan-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 font-mono">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Credential</span>
                  </span>
                  {cert.validity && (
                    <span className="text-slate-400 bg-slate-800/60 px-2.5 py-0.5 rounded">
                      {cert.validity}
                    </span>
                  )}
                </div>
              </div>
            </ThreeDCard>
          ))}
        </div>

      </div>
    </section>
  );
}
