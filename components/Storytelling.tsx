
import React from 'react';

export const Storytelling: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#070707]">
      {/* Ambient backgrounds */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual: Atmospheric Image with overlays */}
          <div className="lg:col-span-5 relative group order-2 lg:order-1">
            <div className="absolute -inset-1 bg-gradient-to-tr from-green-500/20 to-orange-500/20 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1510051646651-d8861d6ad4d8?auto=format&fit=crop&q=80&w=800" 
                alt="Emotional fan moment" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              
              {/* Overlay Quote */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="w-12 h-[2px] bg-green-500 mb-4" />
                <p className="font-display text-sm font-bold tracking-widest uppercase text-white/90">The 90th Minute Heartbeat</p>
              </div>
            </div>
          </div>

          {/* Right Content: The "Why" */}
          <div className="lg:col-span-7 space-y-10 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-green-500 block">The Mission</span>
              <h2 className="font-display text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase italic">
                Why <span className="text-white">FOOT NFTs</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-orange-500">Matters</span>
              </h2>
            </div>

            <div className="space-y-8 max-w-2xl">
              <p className="text-2xl md:text-3xl font-light text-white/90 leading-snug">
                Football is <span className="font-bold italic">emotion</span>. <br />
                Football is <span className="font-bold italic text-green-500">memory</span>. <br />
                Football is <span className="font-bold italic text-orange-500">identity</span>.
              </p>
              
              <div className="h-[1px] w-24 bg-white/20" />
              
              <p className="text-xl text-white/60 leading-relaxed">
                FOOT NFTs turns moments into <span className="text-white font-medium underline decoration-green-500/50 underline-offset-4">meaning</span> and passion into 
                <span className="text-white font-medium"> participation</span>.
              </p>

              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-green-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                <p className="text-lg text-white/80 leading-relaxed italic">
                  "Every goal, save, and story can now live forever and support real lives beyond the pitch."
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
               <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                 <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                 </svg>
               </div>
               <p className="text-xs font-bold tracking-widest uppercase text-white/30">Built for the long game</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
