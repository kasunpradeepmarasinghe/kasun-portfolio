'use client';

import React, { useState } from 'react';
import { 
  Cloud, 
  Terminal as TerminalIcon, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  Download, 
  MapPin, 
  Mail, 
  Linkedin, 
  ExternalLink,
  Server,
  Activity,
  Layers,
  Globe
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { CKABadgeLogo, AWSSolutionsArchitectBadge } from './Icons';
import ThreeDCard from './ThreeDCard';
import ThreeDCloudScene from './ThreeDCloudScene';

export default function Hero() {
  const { personal, stats } = portfolioData;
  const [activeRightTab, setActiveRightTab] = useState<'3d' | 'telemetry'>('3d');

  return (
    <section id="about" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>All Systems Operational • 99.99% Uptime</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>AWS SAA-C03 &amp; CKA Certified</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Info */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-slate-400 font-mono text-sm mb-2">
                <span className="text-cyan-400">root@kasun-cloud:~$</span>
                <span>whoami</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">{personal.name}</span>
              </h1>
              <p className="mt-3 text-xl sm:text-2xl font-medium text-slate-300">
                {personal.tagline}
              </p>
            </div>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              {personal.bio}
            </p>

            {/* Official Certification Highlights with 3D Tilt Effect */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <ThreeDCard depth={20} className="w-auto">
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-amber-500/40 shadow-xl shadow-amber-500/10 hover:border-amber-400 transition-colors">
                  <AWSSolutionsArchitectBadge className="w-10 h-10" />
                  <div className="font-mono text-xs">
                    <span className="text-amber-400 font-bold block">AWS Certified</span>
                    <span className="text-slate-200 text-[11px]">Solutions Architect (SAA-C03)</span>
                  </div>
                </div>
              </ThreeDCard>

              <ThreeDCard depth={20} className="w-auto">
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-blue-500/40 shadow-xl shadow-blue-500/10 hover:border-blue-400 transition-colors">
                  <CKABadgeLogo className="w-10 h-10" />
                  <div className="font-mono text-xs">
                    <span className="text-blue-400 font-bold block">CKA Certified</span>
                    <span className="text-slate-200 text-[11px]">Kubernetes Administrator</span>
                  </div>
                </div>
              </ThreeDCard>
            </div>

            {/* Quick Details Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300 font-mono">
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {personal.location}
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800">
                <Mail className="w-4 h-4 text-cyan-400" />
                {personal.email}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
              >
                <span>Explore DevOps Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-slate-900/80 text-slate-200 border border-slate-700 hover:border-cyan-400 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-slate-800/70 text-slate-300 hover:text-white border border-slate-700/80 hover:bg-slate-800 transition-all"
              >
                <TerminalIcon className="w-4 h-4 text-emerald-400" />
                <span>Contact Me</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive 3D Mesh & Infrastructure Telemetry with Switcher */}
          <div className="lg:col-span-5 space-y-3">
            
            {/* View Switcher Pill */}
            <div className="flex items-center justify-end gap-1.5 font-mono text-xs">
              <button
                onClick={() => setActiveRightTab('3d')}
                className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
                  activeRightTab === '3d'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                    : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>3D Infrastructure Mesh</span>
              </button>
              <button
                onClick={() => setActiveRightTab('telemetry')}
                className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
                  activeRightTab === 'telemetry'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                    : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800'
                }`}
              >
                <Server className="w-3.5 h-3.5 text-cyan-400" />
                <span>Cluster Status Card</span>
              </button>
            </div>

            {/* View 1: 3D Cloud Mesh */}
            {activeRightTab === '3d' ? (
              <ThreeDCloudScene />
            ) : (
              /* View 2: Telemetry Card with 3D Tilt */
              <ThreeDCard depth={15}>
                <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800 shadow-2xl p-6 backdrop-blur-xl">
                  
                  {/* Terminal Title Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                      <span className="ml-2 text-xs font-mono text-slate-400">aws-prod-cluster: telemetry</span>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50">
                      LIVE STATUS
                    </span>
                  </div>

                  {/* Server / Cloud Stats Matrix */}
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Cloud className="w-4 h-4 text-cyan-400" />
                        <span>Cloud Architecture</span>
                      </div>
                      <span className="text-cyan-400 font-semibold">AWS + Linode Hybrid</span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Server className="w-4 h-4 text-indigo-400" />
                        <span>Container Orchestration</span>
                      </div>
                      <span className="text-emerald-400 font-semibold">Kubernetes (CKA)</span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Activity className="w-4 h-4 text-emerald-400" />
                        <span>Telemetry &amp; Monitoring</span>
                      </div>
                      <span className="text-amber-400 font-semibold">Prometheus + Grafana</span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Award className="w-4 h-4 text-yellow-400" />
                        <span>Key Certifications</span>
                      </div>
                      <span className="text-white font-semibold">SAA-C03 • CKA • Aviatrix</span>
                    </div>
                  </div>

                  {/* Simulated Shell Stream */}
                  <div className="mt-4 p-3 rounded-lg bg-black/60 border border-slate-800/80 font-mono text-[11px] text-slate-400 space-y-1">
                    <p className="text-emerald-400">$ kubectl get nodes -o wide</p>
                    <p className="text-slate-300">STATUS: 5/5 Ready | Roles: control-plane, worker</p>
                    <p className="text-cyan-400">$ jenkins-pipeline --run --env=production</p>
                    <p className="text-slate-300">Build #148: SUCCESS | Automated tests passed [0m 42s]</p>
                  </div>

                </div>
              </ThreeDCard>
            )}

          </div>

        </div>

        {/* Global Statistics Counter Bar with 3D Tilt */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <ThreeDCard key={i} depth={12}>
              <div 
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors backdrop-blur-sm group h-full shadow-lg"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            </ThreeDCard>
          ))}
        </div>

      </div>
    </section>
  );
}
