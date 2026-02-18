
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Manifesto', href: '#manifesto' },
    { label: 'Culture', href: '#culture' },
    { label: 'Vision', href: '#vision' },
    { label: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)] group-hover:scale-110 transition-transform duration-300">
            <span className="text-black font-display font-black text-sm">F</span>
          </div>
          <span className="font-display font-black text-xl tracking-tighter uppercase italic">Foot NFTs</span>
        </a>
        
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-[11px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-green-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button className="px-8 py-3 bg-white text-black font-black text-[11px] uppercase tracking-[0.2em] rounded-full hover:bg-green-500 hover:scale-105 active:scale-95 transition-all duration-300">
            Join the Pitch
          </button>
        </div>

        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-[-1] transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-10 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        {navLinks.map((link) => (
          <a 
            key={link.label}
            href={link.href} 
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-display text-2xl font-black uppercase italic tracking-tighter hover:text-green-500 transition-colors"
          >
            {link.label}
          </a>
        ))}
        <button className="px-12 py-5 bg-green-500 text-black font-black text-sm uppercase tracking-widest rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.3)]">
          Join the Pitch
        </button>
      </div>
    </nav>
  );
};
