'use client';

import React, { useState, useEffect } from 'react';
import { 
  GitBranch, 
  ShieldCheck, 
  Container, 
  Server, 
  Activity, 
  Play, 
  CheckCircle2, 
  RefreshCw, 
  Layers,
  ArrowRight
} from 'lucide-react';

interface PipelineStage {
  id: string;
  name: string;
  tool: string;
  status: 'idle' | 'running' | 'success';
  duration: string;
  icon: React.ReactNode;
}

export default function DevOpsPipelineAnimation() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStageIndex, setCurrentStageIndex] = useState(5); // fully deployed initially
  const [deploymentCount, setDeploymentCount] = useState(148);
  const [lastDeployTime, setLastDeployTime] = useState('Just now');

  const initialStages: PipelineStage[] = [
    { id: 'commit', name: 'Source', tool: 'Git Push', status: 'success', duration: '0.8s', icon: <GitBranch className="w-4 h-4" /> },
    { id: 'scan', name: 'Code Quality', tool: 'SonarQube', status: 'success', duration: '2.4s', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'build', name: 'Containerize', tool: 'Docker Build', status: 'success', duration: '14.2s', icon: <Container className="w-4 h-4" /> },
    { id: 'security', name: 'Vulnerability Scan', tool: 'Trivy Audit', status: 'success', duration: '3.1s', icon: <Layers className="w-4 h-4" /> },
    { id: 'deploy', name: 'Orchestration', tool: 'Kubernetes Rolling', status: 'success', duration: '5.8s', icon: <Server className="w-4 h-4" /> },
    { id: 'monitor', name: 'Observability', tool: 'Prometheus SLA', status: 'success', duration: '1.2s', icon: <Activity className="w-4 h-4" /> },
  ];

  const [stages, setStages] = useState<PipelineStage[]>(initialStages);

  const triggerPipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStageIndex(0);

    // Reset stages to idle
    setStages(prev => prev.map(s => ({ ...s, status: 'idle' })));

    let step = 0;
    const interval = setInterval(() => {
      setStages(prev =>
        prev.map((s, idx) => {
          if (idx < step) return { ...s, status: 'success' };
          if (idx === step) return { ...s, status: 'running' };
          return { ...s, status: 'idle' };
        })
      );

      setCurrentStageIndex(step);
      step++;

      if (step > initialStages.length) {
        clearInterval(interval);
        setStages(prev => prev.map(s => ({ ...s, status: 'success' })));
        setIsRunning(false);
        setDeploymentCount(c => c + 1);
        setLastDeployTime('Moments ago');
      }
    }, 900);
  };

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-cyan-500/30 shadow-2xl relative">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Automated CI/CD Pipeline Telemetry
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Zero-Downtime Deployment Lifecycle
              </h3>
            </div>

            {/* Quick stats & Trigger */}
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block font-mono text-xs text-slate-400">
                <p>Deployments: <span className="text-white font-bold">#{deploymentCount}</span></p>
                <p>Status: <span className="text-emerald-400 font-bold">Passing (100%)</span></p>
              </div>

              <button
                onClick={triggerPipeline}
                disabled={isRunning}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  isRunning
                    ? 'bg-cyan-950 text-cyan-400 border border-cyan-800 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 active:scale-95'
                }`}
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Deploying Pipeline...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Trigger Live Deploy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Animated Pipeline Stage Flow */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative">
            {stages.map((stage, idx) => {
              const isCurrent = isRunning && currentStageIndex === idx;
              const isPast = stage.status === 'success';

              return (
                <div
                  key={stage.id}
                  className={`p-4 rounded-xl border transition-all duration-300 relative group ${
                    isCurrent
                      ? 'bg-cyan-950/60 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-105'
                      : isPast
                      ? 'bg-slate-900/80 border-slate-700/80 hover:border-cyan-500/40'
                      : 'bg-slate-950/60 border-slate-800/80 opacity-60'
                  }`}
                >
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-3 text-[10px] font-mono">
                    <span className="text-slate-500">STAGE 0{idx + 1}</span>
                    {isCurrent ? (
                      <span className="text-cyan-400 animate-pulse font-bold">RUNNING</span>
                    ) : isPast ? (
                      <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                        <CheckCircle2 className="w-3 h-3" />
                        PASS
                      </span>
                    ) : (
                      <span className="text-slate-600">WAITING</span>
                    )}
                  </div>

                  {/* Stage Icon & Info */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`p-2 rounded-lg text-xs ${
                      isCurrent
                        ? 'bg-cyan-500/20 text-cyan-300'
                        : isPast
                        ? 'bg-slate-800 text-cyan-400'
                        : 'bg-slate-900 text-slate-500'
                    }`}>
                      {stage.icon}
                    </div>
                    <div className="font-bold text-white text-xs truncate">
                      {stage.name}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="truncate text-slate-300">{stage.tool}</span>
                    <span className="text-slate-500">{stage.duration}</span>
                  </div>

                  {/* Flow Arrow to next stage */}
                  {idx < stages.length - 1 && (
                    <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Real-time telemetry summary footer */}
          <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-3">
              <span className="text-emerald-400">● Docker: node:20-alpine Multi-Stage</span>
              <span className="hidden sm:inline text-slate-600">|</span>
              <span className="text-cyan-400">● Cluster: Production EKS AWS us-east-1</span>
            </div>
            <div>
              <span>Last Deployment: <strong className="text-white">{lastDeployTime}</strong></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
