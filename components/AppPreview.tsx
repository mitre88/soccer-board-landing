"use client";

import { useEffect, useRef } from "react";

const screens = [
  {
    title: "Tactical Board",
    description: "Draw plays on a full-size virtual pitch",
    gradient: "from-green-900 via-green-800 to-green-950",
    content: (
      <svg viewBox="0 0 200 360" className="absolute inset-0 w-full h-full">
        {/* Status bar */}
        <rect width="200" height="40" fill="rgba(0,0,0,0.4)" />
        <text x="100" y="26" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Soccer Board</text>

        {/* Pitch area */}
        <rect x="10" y="50" width="180" height="240" rx="6" fill="#1B5E20" />
        {[0,1,2].map(i => <rect key={i} x={i*60+10} y="50" width="30" height="240" fill="rgba(0,0,0,0.05)" />)}
        <rect x="15" y="55" width="170" height="230" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none" />
        <line x1="100" y1="55" x2="100" y2="285" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        <circle cx="100" cy="170" r="30" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />

        {/* Players */}
        {[[30,170],[65,110],[65,170],[65,230],[100,130],[100,170],[100,210],[140,120],[140,170],[140,220],[170,170]].map(([cx,cy],i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="8" fill={i===0?"#F57F17":"#1565C0"} stroke="white" strokeWidth="1.5" />
            <text x={cx} y={cy+3} textAnchor="middle" fill="white" fontSize="5.5" fontWeight="bold">{["GK","LB","CB","RB","LM","CM","RM","LW","ST","RW","CF"][i]}</text>
          </g>
        ))}

        {/* Toolbar */}
        <rect x="10" y="300" width="180" height="50" rx="8" fill="rgba(0,0,0,0.6)" />
        {["✏️","⬆️","⬡","🔄","📸"].map((icon, i) => (
          <text key={i} x={28 + i * 37} y="331" textAnchor="middle" fontSize="14">{icon}</text>
        ))}
      </svg>
    ),
  },
  {
    title: "AI Suggestions",
    description: "Kicko analyzes and suggests tactics",
    gradient: "from-blue-950 via-blue-900 to-indigo-950",
    content: (
      <svg viewBox="0 0 200 360" className="absolute inset-0 w-full h-full">
        {/* Status bar */}
        <rect width="200" height="40" fill="rgba(0,0,0,0.5)" />
        <text x="100" y="26" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">AI Coach</text>

        {/* Kicko small avatar */}
        <circle cx="40" cy="80" r="24" fill="white" fillOpacity="0.9" />
        <circle cx="35" cy="77" r="4" fill="#111" />
        <circle cx="45" cy="77" r="4" fill="#111" />
        <path d="M33 85 Q40 90 47 85" stroke="#111" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Chat title */}
        <text x="75" y="72" fill="white" fontSize="11" fontWeight="bold">Kicko</text>
        <text x="75" y="86" fill="rgba(255,255,255,0.5)" fontSize="9">AI Tactical Assistant</text>
        <circle cx="160" cy="75" r="5" fill="#4CAF50" />

        {/* Divider */}
        <line x1="10" y1="108" x2="190" y2="108" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />

        {/* Suggestion cards */}
        {[
          { y: 120, text: "Press high — their\nbuildup is slow", conf: "94%" },
          { y: 188, text: "Move LM higher for\noverlapping runs", conf: "88%" },
          { y: 256, text: "Switch to 4-3-3 in\nsecond half", conf: "76%" },
        ].map((card, i) => (
          <g key={i}>
            <rect x="10" y={card.y} width="180" height="56" rx="10" fill="rgba(33,150,243,0.15)" />
            <rect x="10" y={card.y} width="180" height="56" rx="10" stroke="rgba(33,150,243,0.3)" strokeWidth="0.5" />
            <circle cx="22" cy={card.y + 12} r="4" fill="#2196F3" />
            {card.text.split("\n").map((line, j) => (
              <text key={j} x="32" y={card.y + 14 + j * 14} fill="white" fontSize="9" fontWeight={j===0?"600":"400"} fill-opacity={j===0?1:0.7}>{line}</text>
            ))}
            <rect x="145" y={card.y + 36} width="40" height="14" rx="7" fill="rgba(33,150,243,0.3)" />
            <text x="165" y={card.y + 46} textAnchor="middle" fill="rgba(100,181,246,1)" fontSize="8" fontWeight="bold">{card.conf}</text>
          </g>
        ))}
      </svg>
    ),
  },
  {
    title: "Team Roster",
    description: "Manage your full squad lineup",
    gradient: "from-orange-950 via-orange-900 to-red-950",
    content: (
      <svg viewBox="0 0 200 360" className="absolute inset-0 w-full h-full">
        {/* Status bar */}
        <rect width="200" height="40" fill="rgba(0,0,0,0.4)" />
        <text x="100" y="26" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Team Roster</text>

        {/* Formation label */}
        <rect x="10" y="48" width="180" height="28" rx="8" fill="rgba(255,255,255,0.07)" />
        <text x="100" y="66" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">4-4-2 Formation</text>

        {/* Player list */}
        {[
          { name: "Marco Rodriguez", pos: "GK", num: 1, color: "#F57F17" },
          { name: "Luis Pereira", pos: "CB", num: 5, color: "#1565C0" },
          { name: "James Wilson", pos: "CB", num: 4, color: "#1565C0" },
          { name: "Andre Klein", pos: "LB", num: 3, color: "#1565C0" },
          { name: "Rafa Santos", pos: "CM", num: 8, color: "#1976D2" },
          { name: "Tomas Hernandez", pos: "ST", num: 9, color: "#C62828" },
        ].map((p, i) => (
          <g key={i}>
            <rect x="10" y={88 + i * 44} width="180" height="36" rx="8" fill="rgba(255,255,255,0.05)" />
            <circle cx="30" cy={106 + i * 44} r="12" fill={p.color} />
            <text x="30" y={110 + i * 44} textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">{p.num}</text>
            <text x="52" y={104 + i * 44} fill="white" fontSize="10" fontWeight="600">{p.name}</text>
            <rect x="148" y={98 + i * 44} width="32" height="16" rx="8" fill="rgba(255,255,255,0.1)" />
            <text x="164" y={109 + i * 44} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8" fontWeight="600">{p.pos}</text>
          </g>
        ))}
      </svg>
    ),
  },
];

export default function AppPreview() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-surface to-surface-card overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 section-reveal">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-pitch-bright text-sm font-semibold uppercase tracking-widest">
            App Preview
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 tracking-tight">
            Designed for the pitch
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-lg mx-auto">
            Dark, immersive, and built for fast decisions on the sideline.
          </p>
        </div>

        {/* Phone mockups */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-10">
          {screens.map((screen, i) => (
            <div
              key={screen.title}
              className={`relative transition-all duration-700 ${
                i === 1
                  ? "sm:scale-110 sm:-mt-6 z-10"
                  : "sm:scale-95 opacity-80 hover:opacity-100"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 rounded-[44px] blur-2xl opacity-30 bg-gradient-to-b ${screen.gradient}`}
              />

              {/* iPhone frame */}
              <div
                className="iphone-frame relative"
                style={{ width: 200, height: 420 }}
              >
                {/* Dynamic island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20" />

                {/* Screen content */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${screen.gradient} rounded-[44px] overflow-hidden`}
                >
                  {screen.content}
                </div>

                {/* Side buttons */}
                <div className="absolute -left-1 top-20 w-1 h-8 bg-white/20 rounded-l-full" />
                <div className="absolute -left-1 top-32 w-1 h-12 bg-white/20 rounded-l-full" />
                <div className="absolute -left-1 top-48 w-1 h-12 bg-white/20 rounded-l-full" />
                <div className="absolute -right-1 top-28 w-1 h-16 bg-white/20 rounded-r-full" />
              </div>

              {/* Screen label */}
              <div className="text-center mt-4">
                <p className="text-white font-semibold text-sm">{screen.title}</p>
                <p className="text-white/40 text-xs mt-0.5">{screen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
