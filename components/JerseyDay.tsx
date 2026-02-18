
import React from 'react';

export const JerseyDay: React.FC = () => {
  return (
    <section id="jersey-day" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative jersey pattern background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full flex flex-wrap gap-4 rotate-12 scale-150">
          {[...Array(20)].map((_, i) => (
             <div key={i} className="w-64 h-80 border-4 border-white rounded-3xl" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-[48px] p-8 md:p-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <span className="text-orange-500 text-[10px] font-bold tracking-widest uppercase">Signature Experience</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
                JERSEY DAY <br />
                <span className="text-green-500">— REP YOUR CLUB</span>
              </h2>
              
              <p className="text-xl text-white/70 leading-relaxed mb-10 font-light">
                Jersey Day allows fans to wear, scan, and digitally verify their club loyalty. It’s the ultimate bridge between the physical stands and the digital pitch.
              </p>
              
              <div className="flex flex-wrap gap-4">
                 <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm font-medium text-white/60">
                   Verified Identity
                 </div>
                 <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm font-medium text-white/60">
                   On-Chain History
                 </div>
                 <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm font-medium text-white/60">
                   Rarity Unlocks
                 </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* At Launch Card */}
              <div className="group p-8 rounded-3xl bg-[#050505]/60 border border-green-500/20 hover:border-green-500 transition-all duration-500 shadow-2xl">
                <div className="flex justify-between items-start mb-4">
                   <h3 className="font-display text-lg font-bold text-green-500 uppercase tracking-wider">At Launch</h3>
                   <span className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 text-xs">01</span>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Fans upload jersey snaps to earn rewards. Turn your matchday fit into ecosystem points and community status.
                </p>
              </div>

              {/* Over Time Card */}
              <div className="group p-8 rounded-3xl bg-[#050505]/60 border border-white/5 hover:border-orange-500/50 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <svg className="w-24 h-24 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                </div>
                <div className="flex justify-between items-start mb-4">
                   <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">Over Time</h3>
                   <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/40 text-xs">02</span>
                </div>
                <ul className="space-y-4 text-white/50 text-sm">
                  <li className="flex gap-3">
                    <span className="text-orange-500">•</span>
                    Physical jerseys are paired with digital jerseys on-chain.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500">•</span>
                    Jerseys carry player highlights, club history, and verified digital signatures.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500">•</span>
                    Limited editions unlock higher value and rarity.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
