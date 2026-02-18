
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

export const VisionScout: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse('');

    try {
      // Create new instance to ensure up-to-date API key
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const responseObj = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: query,
        config: {
          systemInstruction: `You are the "Visionary Scout" for the FOOT NFTs project. 
          Your tone is emotional, bold, premium, and football-fan-first. 
          You explain the long-term vision of FOOT NFTs, which focuses on community ownership, preserving football culture, 
          and creating a decentralized ecosystem for fans. 
          Keep answers concise (max 3 sentences) and use football metaphors (stadium, pitch, full-time whistle, golden goal, etc.). 
          Always speak as part of the team. We are not selling; we are inviting fans to own the legacy.`
        }
      });

      setResponse(responseObj.text || "The stadium signal is weak. Try asking about our long-term legacy.");
    } catch (error) {
      console.error(error);
      setResponse("Even the best strikers miss sometimes. The connection to the stands dropped. Let's try that again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="vision" className="py-32 px-6 relative overflow-hidden bg-black/60">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-4xl mx-auto glass rounded-[40px] p-8 md:p-16 relative group transition-all duration-500 hover:border-green-500/20">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-all" />
        
        <div className="text-center mb-12">
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-green-500 mb-4 block">Interactive Oracle</span>
          <h2 className="font-display text-3xl md:text-5xl font-black mb-4 italic tracking-tighter uppercase">
            CONSULT THE <span className="text-green-500">VISION</span>
          </h2>
          <p className="text-white/40 text-sm font-light tracking-wide">Speak to the pitch. Ask about the future of football ownership.</p>
        </div>

        <form onSubmit={handleAsk} className="relative mb-12">
          <div className="relative group">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. How will we support grassroots football in 2030?" 
              className="w-full bg-white/[0.03] border border-white/10 rounded-3xl py-6 px-8 focus:outline-none focus:border-green-500/50 focus:bg-white/[0.05] transition-all text-white placeholder:text-white/10 text-lg font-light"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="absolute right-3 top-3 bottom-3 px-8 bg-green-500 text-black font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-green-400 disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-95 shadow-xl"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  <span>Scouting...</span>
                </div>
              ) : 'Scout'}
            </button>
          </div>
        </form>

        <div className={`relative min-h-[160px] flex items-center justify-center text-center p-10 rounded-3xl bg-black/40 border border-dashed border-white/10 transition-all duration-700 ${response ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}>
          {isLoading && !response && (
             <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-1 bg-white/10 overflow-hidden rounded-full">
                  <div className="h-full bg-green-500 w-1/2 animate-[progress_1.5s_ease-in-out_infinite]" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">Analyzing stadium data...</p>
             </div>
          )}
          <p className="text-white/90 text-xl font-light leading-relaxed italic relative z-10 max-w-2xl">
            {response || "The stadium awaits your input. Ask us anything about the path ahead."}
          </p>
          
          <style>{`
            @keyframes progress {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(200%); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};
