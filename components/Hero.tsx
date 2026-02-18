import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-[0.12] scale-105"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-lights-of-a-football-stadium-at-night-4221-large.mp4"
            type="video/mp4"
          />
          {/* Fallback if video fails to load */}
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay to ensure readability and blend video */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Abstract Background Visuals */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Central Abstract Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10">
          <svg
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-green-500 fill-current blur-[160px]"
          >
            <path d="M500 100 L700 300 L600 800 L300 900 L200 400 Z" />
          </svg>
        </div>

        {/* Digital Jersey Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #22c55e 0, #22c55e 1px, transparent 0, transparent 50%)",
            backgroundSize: "10px 10px",
          }}
        ></div>
      </div>

      {/* Animated Abstract Silhouettes - Moved out of pointer-events-none to be interactive */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Striker Silhouette (Top Left) */}
        <div className="absolute top-[15%] left-[5%] w-64 h-96 opacity-10 animate-float-slow blur-sm transition-all duration-700 hover:scale-110 hover:opacity-40 hover:blur-none hover:drop-shadow-[0_0_30px_rgba(34,197,94,0.6)] cursor-pointer">
          <svg
            viewBox="0 0 200 400"
            className="w-full h-full text-green-500 fill-current"
          >
            <path d="M100 20 C120 20 135 35 135 55 C135 75 120 90 100 90 C80 90 65 75 65 55 C65 35 80 20 100 20 Z M90 100 L110 100 L140 220 L180 340 L160 350 L120 230 L80 230 L40 350 L20 340 L60 220 Z M70 110 L40 180 L55 190 L80 120 Z M130 110 L160 180 L145 190 L120 120 Z" />
          </svg>
        </div>

        {/* Keeper Silhouette (Mid Right) */}
        <div
          className="absolute top-[30%] right-[2%] w-80 h-96 opacity-10 animate-drift-slow blur-[6px] transition-all duration-700 hover:scale-110 hover:opacity-40 hover:blur-none hover:drop-shadow-[0_0_30px_rgba(249,115,22,0.6)] cursor-pointer"
          style={{ animationDelay: "1s" }}
        >
          <svg
            viewBox="0 0 400 300"
            className="w-full h-full text-orange-500 fill-current"
          >
            <path d="M200 50 C220 50 235 65 235 85 C235 105 220 120 200 120 C180 120 165 105 165 85 C165 65 180 50 200 50 Z M190 130 L210 130 L350 110 L360 140 L220 160 L220 250 L380 280 L370 310 L200 280 L30 310 L20 280 L180 250 L180 160 L40 140 L50 110 Z" />
          </svg>
        </div>

        {/* Captain Silhouette (Bottom Center) */}
        <div className="absolute bottom-[-10%] left-[20%] w-72 h-[500px] opacity-10 animate-silhouette-pulse blur-[4px] transition-all duration-700 hover:scale-110 hover:opacity-40 hover:blur-none hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] cursor-pointer">
          <svg
            viewBox="0 0 200 500"
            className="w-full h-full text-white fill-current"
          >
            <path d="M100 50 C120 50 135 65 135 85 C135 105 120 120 100 120 C80 120 65 105 65 85 C65 65 80 50 100 50 Z M90 130 L110 130 L150 400 L50 400 Z" />
          </svg>
        </div>

        {/* NFT Glow Aura - Keeping these as non-interactive backgrounds */}
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[40%] bg-orange-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
        <div
          className="absolute bottom-[20%] left-[10%] w-[40%] h-[30%] bg-green-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Secondary Text / Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-md mb-10 animate-fade-in">
          <div className="w-5 h-5 bg-[#0088CC] rounded-full flex items-center justify-center">
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.41 6.59l-5 5c-.39.39-1.02.39-1.41 0l-2-2a.996.996 0 111.41-1.41L11 11.59l4.29-4.3c.39-.39 1.02-.39 1.41 0 .39.39.39 1.03.01 1.41z" />
            </svg>
          </div>
          <span className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase">
            Powered by TON Blockchain
          </span>
        </div>

        <h1 className="font-display text-7xl md:text-[10rem] font-black mb-2 leading-none tracking-tighter drop-shadow-2xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            FOOT
          </span>
          <span className="text-green-500 drop-shadow-[0_0_25px_rgba(34,197,94,0.4)]">
            {" "}
            NFTs
          </span>
        </h1>

        <h2 className="font-display text-2xl md:text-4xl font-bold mb-10 tracking-tight text-white/90">
          Own the Moment. <span className="text-orange-500">Rep the Club.</span>
        </h2>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/50 mb-14 leading-relaxed font-light">
          A fan-first football platform where passion becomes participation,
          identity becomes ownership, and football history lives forever on the
          blockchain.
        </p>

        <div className="flex flex-col items-center gap-8">
          <button className="group relative px-12 py-6 bg-green-500 text-black font-black text-xl rounded-full hover:bg-green-400 hover:scale-105 transition-all duration-300 shadow-[0_20px_50px_rgba(34,197,94,0.3)] overflow-hidden">
            <span className="relative z-10">
              <a href="https://t.me/footnft_official"> Join Community</a>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>

          <div className="flex items-center gap-6 opacity-30">
            <div className="h-[1px] w-12 bg-white"></div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">
              Est. 2025 • Digital Pitch
            </span>
            <div className="h-[1px] w-12 bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
