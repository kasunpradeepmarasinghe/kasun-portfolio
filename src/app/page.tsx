import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DevOpsPipelineAnimation from '@/components/DevOpsPipelineAnimation';
import LiveLogStream from '@/components/LiveLogStream';
import DevOpsTerminal from '@/components/DevOpsTerminal';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import References from '@/components/References';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#080c14] text-slate-100">
      <Navbar />
      <Hero />
      <DevOpsPipelineAnimation />
      <LiveLogStream />
      <DevOpsTerminal />
      <Skills />
      <Certifications />
      <Experience />
      <Projects />
      <Education />
      <References />
      <Contact />
      <Footer />
    </main>
  );
}
