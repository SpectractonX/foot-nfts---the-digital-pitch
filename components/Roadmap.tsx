
import React, { useState } from 'react';

interface Milestone {
  label: string;
  icon: React.ReactNode;
}

interface Phase {
  phase: string;
  title: string;
  description: string;
  detailedDesc: string;
  milestones: Milestone[];
  icon: React.ReactNode;
  color: string;
  shadow: string;
}

const Phases: Phase[] = [
  {
    phase: "Phase 1",
    title: "Community & Fan Engagement",
    description: "Building the foundation of the stands.",
    detailedDesc: "Our journey starts with the pulse of the crowd. We are building the infrastructure for a global decentralized supporters club.",
    milestones: [
      { label: "Social Hubs Launch", icon: "🌐" },
      { label: "Telegram Bot Alpha", icon: "🤖" },
      { label: "Early Supporter Badges", icon: "🎖️" }
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "bg-green-500",
    shadow: "shadow-[0_0_30px_rgba(34,197,94,0.3)]"
  },
  {
    phase: "Phase 2",
    title: "Jersey Day & Fan Sentiment",
    description: "Bridging physical and digital identity.",
    detailedDesc: "Scan your physical kits to unlock digital status. Our Sentiment Engine will begin capturing the raw emotion of matchdays.",
    milestones: [
      { label: "AR Jersey Scanner", icon: "📸" },
      { label: "Sentiment Dashboard", icon: "📊" },
      { label: "Loyalty Tiering", icon: "📈" }
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    color: "bg-orange-500",
    shadow: "shadow-[0_0_30px_rgba(249,115,22,0.3)]"
  },
  {
    phase: "Phase 3",
    title: "NFT Minting & Marketplace",
    description: "Owning the moment officially.",
    detailedDesc: "The debut of verified football artifacts. Own moments that changed history, from last-minute winners to iconic saves.",
    milestones: [
      { label: "Genesis NFT Drop", icon: "💎" },
      { label: "P2P Marketplace", icon: "🏪" },
      { label: "Historical Archives", icon: "📜" }
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "bg-white",
    shadow: "shadow-[0_0_30px_rgba(255,255,255,0.2)]"
  },
  {
    phase: "Phase 4",
    title: "Hope & Global Expansion",
    description: "Playing for the world beyond the pitch.",
    detailedDesc: "Scaling our impact to grassroots football globally. Every interaction helps build a new pitch or support a local team.",
    milestones: [
      { label: "Grassroots DAO", icon: "🏛️" },
      { label: "Global Fan Tour", icon: "✈️" },
      { label: "Hope Fund Launch", icon: "❤️" }
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "bg-green-500",
    shadow: "shadow-[0_0_30px_rgba(34,197,94,0.3)]"
  }
];

export const Roadmap: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  return (
    <section id="roadmap" className="py-32 px-6 relative overflow-hidden bg-black">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-green-500 mb-4 block">Our Path Forward</span>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic">
            OUR <span className="text-green-500">JOURNEY</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/40 text-lg font-light leading-relaxed">
            Hover over each phase to see how we're reshaping football culture through the long game.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative flex flex-col lg:flex-row items-stretch gap-4 min-h-[500px]">
          {/* Horizontal Track Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[148px] left-0 right-0 h-1 bg-white/[0.03] z-0">
             <div className="h-full bg-green-500/20 w-full" />
          </div>

          {Phases.map((p, i) => {
            const isActive = activePhase === i;
            return (
              <div 
                key={i} 
                className={`group relative flex-1 transition-all duration-700 ease-in-out cursor-pointer
                  ${isActive ? 'lg:flex-[2.5]' : 'lg:flex-1'}`}
                onMouseEnter={() => setActivePhase(i)}
                onMouseLeave={() => setActivePhase(null)}
                onClick={() => setActivePhase(activePhase === i ? null : i)}
              >
                {/* Timeline Connector Dot */}
                <div className="hidden lg:flex absolute top-[140px] left-1/2 -translate-x-1/2 z-20">
                  <div className={`w-5 h-5 rounded-full transition-all duration-500 
                    ${p.color} border-4 border-black shadow-xl
                    ${isActive ? 'scale-150 ' + p.shadow : 'scale-100'}`} />
                </div>

                {/* Card Content */}
                <div className={`h-full p-8 rounded-[40px] border transition-all duration-500 flex flex-col
                  ${isActive 
                    ? 'bg-white/[0.05] border-white/20 shadow-2xl scale-[1.02]' 
                    : 'bg-white/[0.02] border-white/5 grayscale-[0.5] opacity-60 hover:opacity-100 hover:grayscale-0'}`}>
                  
                  <div className="flex flex-col gap-6 h-full">
                    {/* Icon and Phase Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${p.color} text-black transition-all duration-500
                        ${isActive ? 'rotate-0' : 'rotate-12 group-hover:rotate-0'}`}>
                        {p.icon}
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-500
                        ${isActive ? 'text-white' : 'text-white/20'}`}>
                        {p.phase}
                      </span>
                    </div>

                    <div className="space-y-4 flex-grow">
                      <h3 className={`font-display text-xl font-bold transition-colors duration-500
                        ${isActive ? 'text-green-500' : 'text-white'}`}>
                        {p.title}
                      </h3>
                      
                      <p className={`text-sm leading-relaxed transition-opacity duration-500
                        ${isActive ? 'text-white/70' : 'text-white/40'}`}>
                        {isActive ? p.detailedDesc : p.description}
                      </p>

                      {/* Expanded Milestones */}
                      <div className={`pt-6 space-y-4 transition-all duration-700 overflow-hidden
                        ${isActive ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="h-[1px] bg-white/10 w-full mb-6" />
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Key Milestones</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {p.milestones.map((m, mi) => (
                            <div key={mi} className="flex items-center gap-4 p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors">
                              <span className="text-lg">{m.icon}</span>
                              <span className="text-xs font-bold text-white/60 tracking-tight">{m.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-24 p-8 rounded-[40px] border border-dashed border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 group hover:bg-white/[0.01] transition-colors">
          <div className="flex items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
               <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
            </div>
            <div>
              <h4 className="font-display text-xl font-bold mb-1 uppercase tracking-tight">Active Governance</h4>
              <p className="text-white/40 text-sm">Every phase transition is decided by the Supporters Council through on-chain voting.</p>
            </div>
          </div>
          <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all hover:border-white/20">
            View Full Litepaper
          </button>
        </div>
      </div>
    </section>
  );
};
