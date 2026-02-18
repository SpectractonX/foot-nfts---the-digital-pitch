
import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-green-500/20 rounded-2xl blur-xl group-hover:bg-green-500/30 transition-all duration-500" />
          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200" 
            alt="Stadium atmosphere" 
            className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
            FOOTBALL ISN'T A PRODUCT. <br />
            <span className="text-orange-500">IT'S AN EMOTION.</span>
          </h2>
          
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>
              The roar of the crowd at the 90th minute. The silence before a penalty. The dirt on the kit. These are the things that make us alive. 
            </p>
            <p>
              In the Web3 era, many projects forgot the soul of the game. They focused on price floors and rarity scores. We're refocusing on the pitch. 
            </p>
            <p className="text-white font-medium italic border-l-2 border-green-500 pl-6">
              "We aren't here to build a marketplace. We're here to build a digital stadium where every fan has a seat at the table."
            </p>
            <p>
              FOOT NFTs is about long-term stewardship. It's about preserving the culture of football for the next generation of digital-native supporters.
            </p>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <img key={i} src={`https://picsum.photos/seed/${i}/100/100`} className="w-12 h-12 rounded-full border-2 border-[#050505] grayscale hover:grayscale-0 cursor-pointer transition-all" />
               ))}
               <div className="w-12 h-12 rounded-full border-2 border-[#050505] bg-green-500 flex items-center justify-center font-bold text-black text-xs">
                 +10k
               </div>
             </div>
             <span className="text-sm text-white/40 uppercase tracking-widest font-bold">Supporters Council</span>
          </div>
        </div>
      </div>
    </section>
  );
};
