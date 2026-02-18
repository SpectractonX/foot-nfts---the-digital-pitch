
import React from 'react';

const Experiences = [
  {
    title: "Fan Engagement",
    description: "Trivia, voting, and fan sentiment that reward participation.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
      </svg>
    ),
    color: "text-green-500"
  },
  {
    title: "Jersey Day",
    description: "Fans rep their club by wearing and scanning jerseys, linking physical gear to digital identity.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: "text-orange-500"
  },
  {
    title: "Fan Sentiment Engine",
    description: "Real-time fan reactions and emotions shared with clubs and teams.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "text-pink-500"
  },
  {
    title: "NFT Marketplace",
    description: "Historic football moments minted with stories and backstories.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    color: "text-blue-500"
  },
  {
    title: "Hope Campaign",
    description: "NFT auctions that support retired, injured, or struggling players, referees, coaches, and fans.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "text-red-500"
  },
  {
    title: "FTC Token Economy",
    description: "A utility token powering rewards, access, participation, and value exchange.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "text-yellow-500"
  }
];

export const CoreExperiences: React.FC = () => {
  return (
    <section id="experiences" className="py-24 px-6 bg-gradient-to-b from-transparent to-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">
            Core <span className="text-green-500">Experiences</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mb-8" />
          <p className="text-white/40 max-w-2xl text-lg">
            Where the beautiful game meets the future. Explore the pillars of the FOOT NFTs ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Experiences.map((exp, i) => (
            <div 
              key={i} 
              className="group relative p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
              {/* Animated Background Highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className={`mb-8 w-14 h-14 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center ${exp.color} group-hover:scale-110 transition-transform duration-300`}>
                  {exp.icon}
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-4 tracking-tight group-hover:text-green-500 transition-colors duration-300">
                  {exp.title}
                </h3>
                
                <p className="text-white/50 leading-relaxed font-light">
                  {exp.description}
                </p>
                
                <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-500">Learn More</span>
                  <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Decorative corner element */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-tl-[100px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
