'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Pause, Play, Trash2, ShieldAlert, Cpu, CheckCircle } from 'lucide-react';

interface LogEntry {
  id: string;
  timestamp: string;
  level: 'INFO' | 'SUCCESS' | 'DEPLOY' | 'METRIC' | 'SECURITY';
  service: string;
  message: string;
}

const SAMPLE_LOGS: Array<Omit<LogEntry, 'id' | 'timestamp'>> = [
  { level: 'INFO', service: 'k8s-ingress', message: 'Inbound route matched [kasun.cloud] -> upstream prod-api:8080 (200 OK - 8ms)' },
  { level: 'SUCCESS', service: 'jenkins-agent-02', message: 'Pipeline #184: Multi-stage Docker build passed (node:20-alpine size: 114MB)' },
  { level: 'METRIC', service: 'prometheus', message: 'Cluster telemetry: CPU 14.8%, Memory 38.2%, Target SLA Uptime: 99.99%' },
  { level: 'SECURITY', service: 'trivy-scanner', message: 'Vulnerability scan complete: 0 Critical, 0 High vulnerabilities detected' },
  { level: 'DEPLOY', service: 'k8s-orchestrator', message: 'Rolling update complete: 3/3 pods updated to kasun-devops:v2.4.1 with zero downtime' },
  { level: 'INFO', service: 'aws-cloudwatch', message: 'Alarm [prod-high-cpu-alarm] state changed to OK (Current value: 18.2%)' },
  { level: 'SUCCESS', service: 'cert-manager', message: 'Let\'s Encrypt SSL automated certificate renewal validated (Expires in 89 days)' },
  { level: 'METRIC', service: 'grafana-agent', message: 'Metrics pushed to Prometheus TSDB: 1,420 metrics/sec across 5 worker nodes' },
  { level: 'INFO', service: 'aws-rds-mysql', message: 'Automated Multi-AZ read-replica replication lag: 0.00s' },
  { level: 'DEPLOY', service: 'gitlab-runner', message: 'Automated sanity tests passed: 48/48 integration test specs verified' },
];

export default function LiveLogStream() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const logContainerRef = useRef<HTMLDivElement>(null);

  // Initialize with first few logs
  useEffect(() => {
    const initialLogs: LogEntry[] = SAMPLE_LOGS.slice(0, 4).map((log, idx) => ({
      ...log,
      id: `init-${idx}`,
      timestamp: new Date(Date.now() - (4 - idx) * 3000).toLocaleTimeString(),
    }));
    setLogs(initialLogs);
  }, []);

  // Interval to stream realistic logs
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const randomLog = SAMPLE_LOGS[Math.floor(Math.random() * SAMPLE_LOGS.length)];
      const newEntry: LogEntry = {
        ...randomLog,
        id: `${Date.now()}-${Math.random()}`,
        timestamp: new Date().toLocaleTimeString(),
      };

      setLogs((prev) => {
        const next = [...prev, newEntry];
        return next.length > 30 ? next.slice(next.length - 30) : next;
      });
    }, 2200);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Autoscroll
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const getLevelBadge = (level: LogEntry['level']) => {
    switch (level) {
      case 'SUCCESS':
        return <span className="text-emerald-400 font-bold bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">SUCCESS</span>;
      case 'DEPLOY':
        return <span className="text-cyan-400 font-bold bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-500/30">DEPLOY</span>;
      case 'METRIC':
        return <span className="text-amber-400 font-bold bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-500/30">METRIC</span>;
      case 'SECURITY':
        return <span className="text-purple-400 font-bold bg-purple-950/60 px-1.5 py-0.5 rounded border border-purple-500/30">AUDIT</span>;
      default:
        return <span className="text-blue-400 font-bold bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-500/30">INFO</span>;
    }
  };

  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Terminal Card */}
        <div className="rounded-2xl bg-black/95 border border-slate-800 shadow-2xl overflow-hidden font-mono">
          
          {/* Header */}
          <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs text-white font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>tail -f /var/log/devops-cluster-telemetry.log</span>
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400 hidden sm:inline mr-2">
                Stream: <strong className={isPaused ? "text-amber-400" : "text-emerald-400"}>{isPaused ? 'PAUSED' : 'LIVE'}</strong>
              </span>

              <button
                onClick={() => setIsPaused(!isPaused)}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                title={isPaused ? "Resume Log Stream" : "Pause Log Stream"}
              >
                {isPaused ? <Play className="w-3 h-3 text-emerald-400 fill-current" /> : <Pause className="w-3 h-3 text-amber-400 fill-current" />}
                <span>{isPaused ? 'Resume' : 'Pause'}</span>
              </button>

              <button
                onClick={() => setLogs([])}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-400 hover:text-white transition-colors"
                title="Clear screen"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Logs Body */}
          <div
            ref={logContainerRef}
            className="p-4 sm:p-5 h-64 overflow-y-auto space-y-2 text-xs scroll-smooth"
          >
            {logs.length === 0 ? (
              <div className="text-slate-500 italic py-8 text-center">
                Log buffer cleared. Incoming streaming telemetry will appear shortly...
              </div>
            ) : (
              logs.map((log) => (
                <div
                  key={log.id}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-2.5 hover:bg-slate-900/40 p-1 rounded transition-colors"
                >
                  <span className="text-slate-500 shrink-0 select-none text-[11px]">
                    [{log.timestamp}]
                  </span>
                  <span className="shrink-0 text-[10px]">
                    {getLevelBadge(log.level)}
                  </span>
                  <span className="text-cyan-300 shrink-0 font-semibold text-[11px]">
                    [{log.service}]
                  </span>
                  <span className="text-slate-300 break-words">
                    {log.message}
                  </span>
                </div>
              ))
            )}
          </div>

          {/* Metrics Status Footer */}
          <div className="bg-slate-950 px-4 py-2 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-400">
            <div className="flex items-center gap-4">
              <span>● Kubernetes Nodes: <strong className="text-emerald-400">5 Ready</strong></span>
              <span>● CPU Load: <strong className="text-cyan-400">14.8%</strong></span>
              <span>● Memory: <strong className="text-cyan-400">38.2%</strong></span>
            </div>
            <div className="text-emerald-400 font-bold">
              ✓ SLA Availability: 99.99%
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
