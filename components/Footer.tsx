
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-[#050505] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-green-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                <span className="text-black font-display font-black text-sm">F</span>
              </div>
              <span className="font-display font-black text-2xl tracking-tighter uppercase italic">Foot NFTs</span>
            </div>
            <p className="text-white/30 text-sm max-w-xs leading-relaxed">
              Decentralizing the pitch. Empowering the stands. The 90th minute is just the beginning of the digital era.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-16">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Connect</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm font-medium text-white/50 hover:text-green-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Telegram
                </a>
                <a href="#" className="text-sm font-medium text-white/50 hover:text-green-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Discord
                </a>
                <a href="#" className="text-sm font-medium text-white/50 hover:text-green-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Twitter
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Legal</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm font-medium text-white/40 hover:text-white transition-colors">Privacy</a>
                <a href="#" className="text-sm font-medium text-white/40 hover:text-white transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest">
              © FOOT NFTs. Built on <span className="text-[#0088CC]">TON</span>. Powered by community.
            </p>
            <p className="text-[9px] text-white/20 uppercase tracking-[0.2em]">Play the Long Game</p>
          </div>

          <div className="flex items-center gap-4 opacity-20">
            <div className="w-6 h-6 border border-white rounded-md flex items-center justify-center text-[8px] font-bold">18+</div>
            <div className="h-4 w-[1px] bg-white" />
            <span className="text-[8px] font-bold tracking-widest uppercase italic">Football Culture First</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
