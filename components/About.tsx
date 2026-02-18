
import React from 'react';

const Features = [
  {
    title: "Fan Engagement",
    description: "Predict, react, and earn rewards. Your passion translates into real ecosystem status.",
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    accent: "bg-green-500/10"
  },
  {
    title: "Jersey Day",
    description: "Rep your digital colors in the global arena. Customizable kits that evolve with your loyalty.",
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    accent: "bg-orange-500/10"
  },
  {
    title: "Football NFTs",
    description: "Own verified pieces of football history. Digital artifacts that capture the essence of the pitch.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    accent: "bg-white/5"
  },
  {
    title: "Hope Campaign",
    description: "Support real lives. A portion of every interaction funds grassroots football and youth development.",
    icon: (
      <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    accent: "bg-red-500/10"
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-green-500 mb-6 block">The Ecosystem</span>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic">
            DECENTRALIZING <br />
            <span className="text-green-500">THE PITCH</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/50 leading-relaxed font-light">
            FOOT NFTs is a football fan engagement and digital ownership platform built on 
            <span className="text-white font-medium"> Telegram</span> and powered by the 
            <span className="text-[#0088CC] font-medium"> TON blockchain</span>. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Features.map((f, i) => (
            <div 
              key={i} 
              className="group relative p-10 rounded-[40px] glass hover:border-green-500/30 transition-all duration-700 hover:-translate-y-3 overflow-hidden"
            >
              {/* Card Aura */}
              <div className={`absolute -top-12 -right-12 w-48 h-48 ${f.accent} blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="mb-8 p-5 inline-block bg-white/[0.04] rounded-2xl group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-500">
                  {f.icon}
                </div>
                <h3 className="font-display text-lg font-black mb-4 tracking-tight uppercase italic">{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 flex flex-col items-center">
          <div className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />
          <div className="flex items-center gap-8 text-[9px] font-black tracking-[0.5em] uppercase text-white/20">
            <span className="hover:text-green-500 transition-colors cursor-default">Identity</span>
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span className="hover:text-green-500 transition-colors cursor-default">Ownership</span>
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span className="hover:text-green-500 transition-colors cursor-default">Legacy</span>
          </div>
        </div>
      </div>
    </section>
  );
};
