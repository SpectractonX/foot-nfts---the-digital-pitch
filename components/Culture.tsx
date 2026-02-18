
import React from 'react';

const Pillars = [
  {
    title: "Fan Governance",
    desc: "Every holder is a member of the Board. Real decisions on community funds, charitable acts, and live events.",
    icon: "⚽"
  },
  {
    title: "The Away End",
    desc: "Exclusive access to physical meetups at the world's biggest matches. Meet your digital community in the real world.",
    icon: "🏟️"
  },
  {
    title: "Digital Legacy",
    desc: "Your NFT isn't just an image. It's a passport to the future of football media, archives, and fan-led content.",
    icon: "💎"
  }
];

export const Culture: React.FC = () => {
  return (
    <section id="culture" className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">BUILT BY FANS, FOR FANS</h2>
        <p className="text-white/50 max-w-2xl mx-auto">We're ditching the corporate playbook. Our roadmap is written in the stands, not the boardroom.</p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {Pillars.map((pillar, idx) => (
          <div key={idx} className="group p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-green-500/30 transition-all duration-300">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{pillar.icon}</div>
            <h3 className="font-display text-xl font-bold mb-4">{pillar.title}</h3>
            <p className="text-white/50 leading-relaxed text-sm">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
