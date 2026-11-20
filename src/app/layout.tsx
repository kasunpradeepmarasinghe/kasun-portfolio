import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kasun Pradeep Marasinghe | DevOps & Cloud Infrastructure Engineer',
  description: 'AWS Certified Solutions Architect & Certified Kubernetes Administrator. 3+ years optimizing cloud infrastructure, CI/CD automation, and high-availability operations.',
  keywords: ['DevOps Engineer', 'Cloud Engineer', 'AWS Certified Solutions Architect', 'CKA', 'Kubernetes', 'CI/CD', 'Prometheus', 'Grafana', 'Sri Lanka DevOps'],
  authors: [{ name: 'Kasun Pradeep Marasinghe' }],
  openGraph: {
    title: 'Kasun Pradeep Marasinghe | DevOps & Cloud Infrastructure Engineer',
    description: 'Production-ready cloud architecture, Kubernetes orchestration, and automated CI/CD pipelines.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2306b6d4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z'/></svg>" />
      </head>
      <body className="bg-[#080c14] text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 relative min-h-screen">
        {/* Subtle background glow effect */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-grid-pattern bg-[length:32px_32px] opacity-40"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
