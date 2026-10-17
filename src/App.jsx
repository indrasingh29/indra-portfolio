import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Background from './components/layout/Background';
import Preloader from './components/ui/Preloader';
import CustomCursor from './components/ui/CustomCursor';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Timeline from './components/sections/Timeline';
import GitHubSection from './components/sections/GitHubSection';
import Contact from './components/sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-background text-zinc-100 selection:bg-brand-purple/30 selection:text-white">
      {/* Cinematic Entrance Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Subtle Desktop Custom Cursor */}
      <CustomCursor />

      {/* Dynamic Ambient Background & Canvas Grid */}
      <Background />

      {/* Primary Layout Structure */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Timeline />
          <GitHubSection />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
