import React from "react";

export const CTASection: React.FC = () => {
  return (
    <section id="join" className="py-40 px-6 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-500/5 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative group">
        <div className="relative p-12 md:p-32 rounded-[60px] glass overflow-hidden text-center">
          {/* Animated Background Graphics */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white" />
            <div className="absolute top-1/2 left-0 w-full h-px bg-white" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full opacity-50" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="text-[10px] font-black tracking-[0.6em] uppercase text-green-500 mb-8 block">
              Final Whistle
            </span>
            <h2 className="font-display text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase italic">
              BE MORE THAN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                A SPECTATOR.
              </span>
            </h2>

            <p className="text-white/50 mb-16 text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
              The first 10,000 supporters will form our inaugural Council. Join
              the stands today and secure your seat in history.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="group w-full md:w-auto px-12 py-6 bg-green-500 text-black font-black text-sm uppercase tracking-widest rounded-3xl hover:bg-green-400 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_20px_60px_rgba(34,197,94,0.4)] flex items-center justify-center gap-4">
                <span>
                  <a href="https://t.me/footnft_official"> Join the Council</a>
                </span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>

              <div className="flex items-center gap-4 p-2 bg-white/5 rounded-3xl border border-white/5">
                <button
                  className="p-4 hover:bg-white/10 rounded-2xl transition-colors text-white/50 hover:text-white"
                  title="Discord"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.054-.108.001-.23-.106-.271a12.978 12.978 0 0 1-1.883-.895.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.29a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .077.01c.12.098.246.196.373.29a.077.077 0 0 1-.007.127 12.299 12.299 0 0 1-1.884.896.077.077 0 0 0-.105.272c.351.699.764 1.365 1.226 1.994.054.076.084.108.084.028a19.856 19.856 0 0 0 6.023-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.158-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.158-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </button>
                <button
                  className="p-4 hover:bg-white/10 rounded-2xl transition-colors text-white/50 hover:text-white"
                  title="X (Twitter)"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
                <button
                  className="p-4 hover:bg-white/10 rounded-2xl transition-colors text-white/50 hover:text-white"
                  title="Telegram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.13-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .33z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-20 flex flex-col items-center justify-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-black bg-white/[0.05] overflow-hidden grayscale hover:grayscale-0 transition-all cursor-pointer"
                  >
                    <img
                      src={`https://picsum.photos/seed/fan_council_${i}/100/100`}
                      alt="supporter"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-black bg-green-500 flex items-center justify-center text-black text-[10px] font-black">
                  +4K
                </div>
              </div>
              <p className="text-[10px] font-black tracking-[0.4em] uppercase text-white/20 italic">
                Identity. Passion. Participation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
