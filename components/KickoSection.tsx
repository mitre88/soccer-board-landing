"use client";

import { useState } from "react";

const tips = [
  "Switch to a high press when opponent goalkeeper is under pressure!",
  "Overload the left flank — your LM has a 78% dribble success rate today.",
  "Consider a double pivot in midfield to contain their quick forwards.",
  "Your striker's movement in the box creates 3x more chances after minute 60.",
  "Set pieces are your secret weapon — you score 40% of goals from corners!",
];

export default function KickoSection() {
  const [tipIndex, setTipIndex] = useState(0);
  const [blinking, setBlinking] = useState(false);

  const nextTip = () => {
    setBlinking(true);
    setTimeout(() => {
      setTipIndex((prev) => (prev + 1) % tips.length);
      setBlinking(false);
    }, 200);
  };

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Kicko mascot */}
          <div className="flex-shrink-0 flex flex-col items-center">
            {/* Kicko SVG - kawaii soccer ball */}
            <div className="relative animate-float">
              {/* Shadow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/30 rounded-full blur-md" />

              <svg
                viewBox="0 0 160 160"
                className="w-48 h-48"
                aria-label="Kicko - Soccer Board's AI mascot"
              >
                {/* Body glow */}
                <circle cx="80" cy="80" r="72" fill="rgba(46,125,50,0.15)" />

                {/* Main ball body */}
                <circle cx="80" cy="80" r="60" fill="white" />

                {/* Soccer ball panels - black pentagons */}
                <path
                  d="M80 30 L95 42 L90 60 L70 60 L65 42 Z"
                  fill="#111"
                  opacity="0.85"
                />
                <path
                  d="M80 130 L95 118 L90 100 L70 100 L65 118 Z"
                  fill="#111"
                  opacity="0.85"
                />
                <path
                  d="M33 60 L45 52 L60 62 L56 80 L40 82 Z"
                  fill="#111"
                  opacity="0.85"
                />
                <path
                  d="M127 60 L115 52 L100 62 L104 80 L120 82 Z"
                  fill="#111"
                  opacity="0.85"
                />
                <path
                  d="M40 105 L52 96 L65 102 L62 120 L46 124 Z"
                  fill="#111"
                  opacity="0.85"
                />
                <path
                  d="M120 105 L108 96 L95 102 L98 120 L114 124 Z"
                  fill="#111"
                  opacity="0.85"
                />

                {/* White outline on ball */}
                <circle
                  cx="80"
                  cy="80"
                  r="60"
                  fill="none"
                  stroke="#e0e0e0"
                  strokeWidth="2"
                />

                {/* Rosy cheeks */}
                <circle cx="54" cy="88" r="10" fill="rgba(255, 100, 100, 0.25)" />
                <circle cx="106" cy="88" r="10" fill="rgba(255, 100, 100, 0.25)" />

                {/* Eyes - left */}
                <ellipse
                  cx="62"
                  cy="75"
                  rx="9"
                  ry={blinking ? "1" : "10"}
                  fill="#1a1a1a"
                  style={{ transition: "ry 0.1s" }}
                />
                <circle cx="65" cy="72" r="3" fill="white" />
                <circle cx="65.5" cy="72" r="1.5" fill="white" fillOpacity="0.9" />

                {/* Eyes - right */}
                <ellipse
                  cx="98"
                  cy="75"
                  rx="9"
                  ry={blinking ? "1" : "10"}
                  fill="#1a1a1a"
                  style={{ transition: "ry 0.1s" }}
                />
                <circle cx="101" cy="72" r="3" fill="white" />
                <circle cx="101.5" cy="72" r="1.5" fill="white" fillOpacity="0.9" />

                {/* Smile */}
                <path
                  d="M68 96 Q80 106 92 96"
                  stroke="#1a1a1a"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Tiny legs */}
                <rect x="68" y="134" width="10" height="18" rx="5" fill="#111" />
                <rect x="82" y="134" width="10" height="18" rx="5" fill="#111" />

                {/* Tiny feet */}
                <ellipse cx="73" cy="152" rx="9" ry="5" fill="#222" />
                <ellipse cx="87" cy="152" rx="9" ry="5" fill="#222" />

                {/* Coach cap */}
                <ellipse cx="80" cy="24" rx="42" ry="8" fill="#1565C0" />
                <rect x="42" y="16" width="76" height="14" rx="4" fill="#1565C0" />
                <rect x="62" y="12" width="36" height="6" rx="3" fill="#0D47A1" />
                {/* Cap brim */}
                <ellipse cx="80" cy="30" rx="44" ry="6" fill="#1565C0" />
                <path d="M40 30 L26 34" stroke="#0D47A1" strokeWidth="3" strokeLinecap="round" />
                {/* Cap logo */}
                <circle cx="80" cy="20" r="8" fill="#0D47A1" />
                <text x="80" y="24" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">SB</text>
              </svg>
            </div>

            {/* Name tag */}
            <div className="mt-4 text-center">
              <span className="text-pitch-bright font-black text-xl">Kicko</span>
              <p className="text-white/40 text-sm">Your AI Tactical Assistant</p>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="text-pitch-bright text-sm font-semibold uppercase tracking-widest">
              Meet Your AI Coach
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-6 tracking-tight leading-tight">
              Meet Kicko,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pitch-bright to-electric-light">
                your AI assistant.
              </span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Kicko is more than a mascot — he&apos;s your intelligent coaching
              partner. Powered by Apple Intelligence, Kicko watches your tactical
              patterns, learns your team&apos;s strengths, and delivers insights
              exactly when you need them.
            </p>

            {/* Personality traits */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { emoji: "🧠", trait: "Analytical" },
                { emoji: "⚡", trait: "Proactive" },
                { emoji: "🔒", trait: "Private" },
              ].map((t) => (
                <div
                  key={t.trait}
                  className="bg-white/5 rounded-xl p-3 text-center border border-white/5"
                >
                  <span className="text-2xl">{t.emoji}</span>
                  <p className="text-white/70 text-sm font-semibold mt-1">{t.trait}</p>
                </div>
              ))}
            </div>

            {/* Tip bubble */}
            <div className="bg-surface-card border border-pitch/30 rounded-2xl p-5 relative">
              {/* Speech bubble arrow */}
              <div className="absolute -top-3 left-8 w-6 h-3 overflow-hidden">
                <div className="w-4 h-4 bg-surface-card border-l border-t border-pitch/30 rotate-45 translate-y-1 ml-1" />
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-pitch/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-pitch-bright text-xs font-black">K</span>
                </div>
                <div className="flex-1">
                  <p className="text-white/50 text-xs mb-1.5 font-semibold">Kicko says:</p>
                  <p
                    className="text-white text-sm leading-relaxed"
                    style={{ minHeight: "2.5rem" }}
                  >
                    &ldquo;{tips[tipIndex]}&rdquo;
                  </p>
                </div>
              </div>

              <button
                onClick={nextTip}
                className="mt-4 text-pitch-bright text-xs font-semibold hover:text-pitch-light transition-colors flex items-center gap-1.5 ml-11"
              >
                Next tip
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5 3l6 5-6 5V3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
