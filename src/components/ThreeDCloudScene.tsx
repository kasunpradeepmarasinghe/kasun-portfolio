'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Cloud, Globe, Cpu } from 'lucide-react';

interface Node3D {
  x: number;
  y: number;
  z: number;
  label: string;
  type: 'aws' | 'k8s' | 'db';
  pulse: number;
}

export default function ThreeDCloudScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeLabel, setActiveLabel] = useState<string>('AWS us-east-1 (Primary)');
  const mouseRef = useRef({ x: 0, y: 0, isDown: false, lastX: 0, lastY: 0 });
  const rotRef = useRef({ x: 0.2, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = 340);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 340;
    };
    window.addEventListener('resize', handleResize);

    // Define 3D Nodes (Cloud Infrastructure Topology)
    const nodes: Node3D[] = [
      { x: 0, y: -70, z: 0, label: 'Kubernetes Master Node (CKA)', type: 'k8s', pulse: 0 },
      { x: -90, y: 30, z: -50, label: 'AWS EKS Worker 01 (us-east-1)', type: 'aws', pulse: 1 },
      { x: 90, y: 30, z: -50, label: 'AWS EKS Worker 02 (us-east-1)', type: 'aws', pulse: 2 },
      { x: 0, y: 80, z: 70, label: 'AWS RDS Multi-AZ Postgres', type: 'db', pulse: 3 },
      { x: -80, y: -40, z: 60, label: 'Prometheus Telemetry Agent', type: 'k8s', pulse: 4 },
      { x: 80, y: -40, z: 60, label: 'CloudFront Edge CDN', type: 'aws', pulse: 5 },
      { x: 0, y: 0, z: -100, label: 'Application Load Balancer', type: 'aws', pulse: 2.5 },
      { x: -110, y: 0, z: 10, label: 'Kafka Event Bus Stream', type: 'aws', pulse: 3.5 },
    ];

    // Connections between nodes
    const connections: [number, number][] = [
      [0, 1], [0, 2], [0, 4], [0, 5], [0, 6],
      [1, 3], [2, 3], [1, 7], [4, 0], [5, 6],
      [6, 1], [6, 2], [7, 3]
    ];

    // Orbital particles
    const particles = Array.from({ length: 45 }, () => ({
      theta: Math.random() * Math.PI * 2,
      phi: (Math.random() - 0.5) * Math.PI,
      radius: 120 + Math.random() * 20,
      speed: 0.005 + Math.random() * 0.008,
      size: 1 + Math.random() * 1.5,
    }));

    // Mouse drag controls
    const onMouseDown = (e: MouseEvent) => {
      mouseRef.current.isDown = true;
      mouseRef.current.lastX = e.clientX;
      mouseRef.current.lastY = e.clientY;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (mouseRef.current.isDown) {
        const dx = e.clientX - mouseRef.current.lastX;
        const dy = e.clientY - mouseRef.current.lastY;
        rotRef.current.y += dx * 0.008;
        rotRef.current.x += dy * 0.008;
        mouseRef.current.lastX = e.clientX;
        mouseRef.current.lastY = e.clientY;
      }
    };
    const onMouseUp = () => { mouseRef.current.isDown = false; };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch controls for mobile
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        mouseRef.current.isDown = true;
        mouseRef.current.lastX = e.touches[0].clientX;
        mouseRef.current.lastY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (mouseRef.current.isDown && e.touches.length === 1) {
        const dx = e.touches[0].clientX - mouseRef.current.lastX;
        const dy = e.touches[0].clientY - mouseRef.current.lastY;
        rotRef.current.y += dx * 0.008;
        rotRef.current.x += dy * 0.008;
        mouseRef.current.lastX = e.touches[0].clientX;
        mouseRef.current.lastY = e.touches[0].clientY;
      }
    };
    const onTouchEnd = () => { mouseRef.current.isDown = false; };

    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Render loop
    let time = 0;
    const render = () => {
      time += 0.02;
      if (!mouseRef.current.isDown) {
        rotRef.current.y += 0.004;
      }

      ctx.clearRect(0, 0, width, height);

      const fov = 340;
      const cx = width / 2;
      const cy = height / 2;

      const cosY = Math.cos(rotRef.current.y);
      const sinY = Math.sin(rotRef.current.y);
      const cosX = Math.cos(rotRef.current.x);
      const sinX = Math.sin(rotRef.current.x);

      // Project 3D to 2D function
      const project = (x: number, y: number, z: number) => {
        // Rotate around Y
        const x1 = x * cosY - z * sinY;
        const z1 = z * cosY + x * sinY;
        // Rotate around X
        const y2 = y * cosX - z1 * sinX;
        const z2 = z1 * cosX + y * sinX;

        const scale = fov / (fov + z2 + 150);
        return {
          px: cx + x1 * scale,
          py: cy + y2 * scale,
          scale,
          z2,
        };
      };

      // Draw background 3D globe wireframe latitude rings
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.08)';
      ctx.lineWidth = 1;
      for (let r = 50; r <= 130; r += 40) {
        ctx.beginPath();
        for (let a = 0; a <= Math.PI * 2; a += 0.2) {
          const pt = project(Math.cos(a) * r, 0, Math.sin(a) * r);
          if (a === 0) ctx.moveTo(pt.px, pt.py);
          else ctx.lineTo(pt.px, pt.py);
        }
        ctx.closePath();
        ctx.stroke();
      }

      // Draw orbiting constellation particles
      particles.forEach((p) => {
        p.theta += p.speed;
        const x = p.radius * Math.cos(p.theta) * Math.cos(p.phi);
        const y = p.radius * Math.sin(p.phi);
        const z = p.radius * Math.sin(p.theta) * Math.cos(p.phi);
        const pt = project(x, y, z);

        if (pt.scale > 0) {
          ctx.beginPath();
          ctx.arc(pt.px, pt.py, p.size * pt.scale, 0, Math.PI * 2);
          ctx.fillStyle = pt.z2 > 0 ? 'rgba(34, 211, 238, 0.6)' : 'rgba(148, 163, 184, 0.2)';
          ctx.fill();
        }
      });

      // Project all nodes
      const projectedNodes = nodes.map((n, idx) => {
        const pt = project(n.x, n.y, n.z);
        return { ...n, ...pt, idx };
      });

      // Draw connections with glowing animated pulse packets
      connections.forEach(([fromIdx, toIdx]) => {
        const from = projectedNodes[fromIdx];
        const to = projectedNodes[toIdx];

        ctx.beginPath();
        ctx.moveTo(from.px, from.py);
        ctx.lineTo(to.px, to.py);
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.25)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Traveling data packet
        const t = (Math.sin(time * 2 + fromIdx) + 1) / 2;
        const packetX = from.px + (to.px - from.px) * t;
        const packetY = from.py + (to.py - from.py) * t;

        ctx.beginPath();
        ctx.arc(packetX, packetY, 2.5 * from.scale, 0, Math.PI * 2);
        ctx.fillStyle = '#22d3ee';
        ctx.shadowColor = '#06b6d4';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Sort nodes by depth for correct 3D rendering order
      projectedNodes.sort((a, b) => b.z2 - a.z2);

      // Draw nodes
      projectedNodes.forEach((node) => {
        const radius = (node.type === 'k8s' ? 6 : 5) * node.scale;

        // Outer pulsing ring
        const pulseSize = (Math.sin(time * 3 + node.pulse) + 1) * 4 * node.scale;
        ctx.beginPath();
        ctx.arc(node.px, node.py, radius + pulseSize, 0, Math.PI * 2);
        ctx.strokeStyle = node.type === 'k8s' ? 'rgba(59, 130, 246, 0.4)' : 'rgba(6, 182, 212, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Node center
        ctx.beginPath();
        ctx.arc(node.px, node.py, radius, 0, Math.PI * 2);
        ctx.fillStyle = node.type === 'k8s' ? '#3b82f6' : node.type === 'db' ? '#10b981' : '#06b6d4';
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Node label
        if (node.scale > 0.85) {
          ctx.font = '10px monospace';
          ctx.fillStyle = '#e2e8f0';
          ctx.fillText(node.label.split(' ')[0], node.px + 8, node.py + 3);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-cyan-500/30 p-4 shadow-2xl backdrop-blur-xl overflow-hidden group">
      
      {/* 3D Top Header */}
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
          <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-cyan-400" />
            3D Cloud Infrastructure Mesh
          </span>
        </div>
        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
          INTERACTIVE 3D • DRAG TO ROTATE
        </span>
      </div>

      {/* 3D WebGL Canvas */}
      <div className="relative cursor-grab active:cursor-grabbing">
        <canvas ref={canvasRef} className="w-full block" />
        <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-500 bg-black/60 px-2 py-1 rounded backdrop-blur pointer-events-none">
          Click &amp; drag to rotate 3D nodes
        </div>
      </div>

      {/* Live Node Status Matrix */}
      <div className="pt-3 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center font-mono text-[11px]">
        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
          <span className="text-slate-500 block text-[9px]">ORCHESTRATION</span>
          <span className="text-blue-400 font-bold">Kubernetes 3D</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
          <span className="text-slate-500 block text-[9px]">CLOUD REGION</span>
          <span className="text-cyan-400 font-bold">AWS Multi-AZ</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
          <span className="text-slate-500 block text-[9px]">SLA AVAILABILITY</span>
          <span className="text-emerald-400 font-bold">99.99% OK</span>
        </div>
      </div>

    </div>
  );
}
