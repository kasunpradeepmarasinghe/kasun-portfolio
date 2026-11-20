'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending message or open mailto
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'DevOps Opportunity')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>COMMUNICATION CHANNEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Architect Together
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Open for DevOps Engineer, Cloud Architect, or Application Support roles. Reach out directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Status card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/40 shadow-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>AVAILABILITY STATUS</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {personal.status}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                Ready to optimize AWS infrastructure, manage Kubernetes clusters, and build bulletproof CI/CD pipelines.
              </p>
            </div>

            {/* Email Card with Copy button */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 block">Direct Email</span>
                  <a href={`mailto:${personal.email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-500 block">Phone / WhatsApp</span>
                <a href={`tel:${personal.phone}`} className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                  {personal.phone}
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/30">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-500 block">Professional Network</span>
                <a 
                  href={personal.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs sm:text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                >
                  linkedin.com/in/kasunmarasinghe
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/30">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-500 block">Location</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  {personal.location}
                </span>
              </div>
            </div>

          </div>

          {/* Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800 shadow-2xl backdrop-blur-xl">
              
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-800">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold text-white text-lg">Send Direct Message</h3>
              </div>

              {formSubmitted ? (
                <div className="p-8 text-center space-y-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl">
                  <Sparkles className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Opening Your Mail Client...</h4>
                  <p className="text-xs text-slate-300 font-mono">
                    If your email app didn't open automatically, feel free to email directly to <span className="text-cyan-400 font-semibold">{personal.email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe / Tech Recruiter"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiter@company.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="DevOps Opportunity / Interview Invitation"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Kasun, we are looking for a DevOps Engineer with your AWS and Kubernetes skills..."
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Kasun</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
