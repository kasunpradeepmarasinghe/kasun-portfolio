'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, RefreshCw, CheckCircle2, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function DevOpsTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'neofetch --devops',
      output: (
        <div className="text-xs sm:text-sm font-mono space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">OS: Linux (Ubuntu / RedHat) DevOps Cloud Kernel</p>
          <p>Host: AWS Cloud Infrastructure (EC2, ECS, VPC, EKS)</p>
          <p>Orchestration: Kubernetes (CKA Certified)</p>
          <p>CI/CD: Jenkins, GitLab CI/CD, AWS CodePipeline</p>
          <p>Monitoring: Prometheus, Grafana, CloudWatch</p>
          <p className="text-emerald-400">Status: System Operational • Open to Senior/Associate DevOps roles</p>
          <p className="text-slate-400 mt-2">💡 Type <span className="text-cyan-300">help</span> to view available interactive commands.</p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1 text-xs sm:text-sm">
            <p className="text-cyan-300 font-semibold">Available Shell Commands:</p>
            <p><span className="text-emerald-400">whoami</span> - Display professional summary & current title</p>
            <p><span className="text-emerald-400">skills</span> - Display cloud, automation & monitoring skill matrix</p>
            <p><span className="text-emerald-400">certs</span> - List official credentials (CKA, AWS SAA-C03, Aviatrix)</p>
            <p><span className="text-emerald-400">experience</span> - View career history & companies</p>
            <p><span className="text-emerald-400">projects</span> - View production architectural case studies</p>
            <p><span className="text-emerald-400">contact</span> - Show email, phone & direct contact options</p>
            <p><span className="text-emerald-400">uptime</span> - Display target availability & cluster health</p>
            <p><span className="text-emerald-400">sudo hire-kasun</span> - Fast-track recruitment access</p>
            <p><span className="text-emerald-400">clear</span> - Clear terminal screen</p>
          </div>
        );
        break;

      case 'whoami':
        response = (
          <div className="text-xs sm:text-sm space-y-1">
            <p className="text-white font-bold">{portfolioData.personal.name}</p>
            <p className="text-cyan-400">{portfolioData.personal.tagline}</p>
            <p className="text-slate-300">{portfolioData.personal.bio}</p>
            <p className="text-emerald-400 mt-1">📍 {portfolioData.personal.location}</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="text-xs sm:text-sm space-y-2">
            <p className="text-cyan-400 font-bold">Key DevOps Skill Matrix:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li><strong className="text-white">Cloud:</strong> AWS (EC2, ECS, RDS, Lambda, SQS, SNS, Kafka, VPC, CloudWatch), Linode</li>
              <li><strong className="text-white">Containers:</strong> Kubernetes (CKA), Docker, Microservices, Helm</li>
              <li><strong className="text-white">CI/CD:</strong> Jenkins, GitLab CI/CD, AWS CodePipeline, Terraform, Ansible</li>
              <li><strong className="text-white">Monitoring:</strong> Prometheus, Grafana, CloudWatch, Incident Management</li>
              <li><strong className="text-white">OS & Scripting:</strong> Linux Server Admin (Ubuntu/RedHat), Bash, Git</li>
            </ul>
          </div>
        );
        break;

      case 'certs':
        response = (
          <div className="text-xs sm:text-sm space-y-1">
            <p className="text-cyan-400 font-bold">Professional Certifications:</p>
            {portfolioData.certifications.map((c, i) => (
              <p key={i} className="text-slate-200">
                • <strong className="text-white">{c.title}</strong> — {c.issuer} ({c.validity})
              </p>
            ))}
          </div>
        );
        break;

      case 'experience':
        response = (
          <div className="text-xs sm:text-sm space-y-2">
            <p className="text-cyan-400 font-bold">Career Timeline:</p>
            {portfolioData.experiences.map((exp, i) => (
              <div key={i} className="border-l-2 border-cyan-500/40 pl-3">
                <p className="text-white font-semibold">{exp.role} @ {exp.company}</p>
                <p className="text-slate-400 text-xs">{exp.period}</p>
                <p className="text-slate-300 text-xs mt-0.5">{exp.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="text-xs sm:text-sm space-y-2">
            <p className="text-cyan-400 font-bold">DevOps Architecture Projects:</p>
            {portfolioData.projects.map((p, i) => (
              <div key={i} className="bg-slate-900/60 p-2 rounded border border-slate-800">
                <p className="text-cyan-300 font-medium">{p.title} <span className="text-xs text-slate-400">({p.category})</span></p>
                <p className="text-xs text-slate-300">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="text-xs sm:text-sm space-y-1">
            <p className="text-cyan-400 font-bold">Contact Channels:</p>
            <p>📧 Email: <a href={`mailto:${portfolioData.personal.email}`} className="text-cyan-300 underline">{portfolioData.personal.email}</a></p>
            <p>📞 Phone: <span className="text-emerald-400">{portfolioData.personal.phone}</span></p>
            <p>🔗 LinkedIn: <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{portfolioData.personal.linkedin}</a></p>
          </div>
        );
        break;

      case 'uptime':
        response = (
          <div className="text-xs sm:text-sm font-mono text-emerald-400">
            [OK] Cluster Health: 100% | Target SLA: 99.99% Availability | Active Pods: 48/48 Healthy
          </div>
        );
        break;

      case 'sudo hire-kasun':
        response = (
          <div className="text-xs sm:text-sm font-mono text-emerald-400 bg-emerald-950/40 p-2 rounded border border-emerald-500/40">
            🎉 ACCESS GRANTED! Kasun Pradeep Marasinghe is ready to accelerate your cloud infrastructure. Contact: {portfolioData.personal.email}
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case '':
        response = null;
        break;

      default:
        response = (
          <p className="text-red-400 text-xs sm:text-sm">
            Command not recognized: "{trimmed}". Type <span className="text-cyan-300 underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for list.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: response }]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput('');
  };

  const presetCommands = ['help', 'skills', 'certs', 'experience', 'sudo hire-kasun', 'clear'];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl bg-black/90 border border-slate-800 shadow-2xl overflow-hidden font-mono">
          
          {/* Header Bar */}
          <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs text-slate-400 font-bold flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-cyan-400" />
                kasun@devops-node-01: ~ (interactive shell)
              </span>
            </div>

            {/* Quick Presets */}
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="text-[10px] text-slate-500 mr-1">Quick Run:</span>
              {presetCommands.map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="px-2 py-0.5 rounded text-[11px] bg-slate-800 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500 transition-colors"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Screen Body */}
          <div className="p-4 sm:p-6 min-h-[280px] max-h-[460px] overflow-y-auto space-y-4">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-cyan-400">
                  <span className="text-emerald-400 font-bold">kasun@aws-cloud:~$</span>
                  <span className="text-slate-100 font-bold">{item.command}</span>
                </div>
                {item.output && <div className="pl-4 border-l border-slate-800">{item.output}</div>}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Bar */}
          <form onSubmit={onSubmit} className="bg-slate-950 px-4 py-3 border-t border-slate-800 flex items-center gap-2">
            <span className="text-emerald-400 text-xs sm:text-sm font-bold whitespace-nowrap">
              kasun@aws-cloud:~$
            </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'help', 'skills', 'certs' or 'sudo hire-kasun'..."
              className="flex-1 bg-transparent border-none text-slate-100 text-xs sm:text-sm focus:outline-none placeholder-slate-600 font-mono"
            />
            <button
              type="submit"
              className="p-1.5 rounded-md bg-cyan-600/30 hover:bg-cyan-600 text-cyan-300 hover:text-white transition-colors"
              title="Execute"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
