
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Storytelling } from './components/Storytelling';
import { CoreExperiences } from './components/CoreExperiences';
import { JerseyDay } from './components/JerseyDay';
import { Manifesto } from './components/Manifesto';
import { Culture } from './components/Culture';
import { VisionScout } from './components/VisionScout';
import { Roadmap } from './components/Roadmap';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] overflow-x-hidden selection:bg-green-500 selection:text-black">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-900/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="relative z-10">
        <Navbar isScrolled={isScrolled} />
        
        <main>
          <Hero />
          <About />
          <Storytelling />
          <CoreExperiences />
          <JerseyDay />
          <Manifesto />
          <Culture />
          <VisionScout />
          <Roadmap />
          <CTASection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
