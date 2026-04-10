"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    id: "tactical-board",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect width="48" height="48" rx="12" fill="#1B5E20" fillOpacity="0.3" />
        <rect x="6" y="6" width="36" height="36" rx="4" stroke="#4CAF50" strokeWidth="1.5" fill="none" />
        <line x1="24" y1="6" x2="24" y2="42" stroke="#4CAF50" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="14" cy="20" r="4" fill="#1565C0" stroke="white" strokeWidth="1" />
        <circle cx="18" cy="32" r="4" fill="#1565C0" stroke="white" strokeWidth="1" />
        <circle cx="30" cy="18" r="4" fill="#C62828" stroke="white" strokeWidth="1" />
        <path d="M22 20 Q26 18 29 18" stroke="#64B5F6" strokeWidth="1.5" fill="none" strokeDasharray="3 2" markerEnd="url(#arrow)" />
      </svg>
    ),
    badge: "Core Feature",
    badgeColor: "bg-pitch/20 text-pitch-bright border-pitch/40",
    title: "Draw. Plan. Win.",
    subtitle: "Tactical Board",
    description:
      "Full-featured drawing toolkit on a virtual pitch. Drag player dots, draw movement arrows, add zones, and annotate plays with precision. Everything syncs in real time.",
    highlights: [
      "Drag-and-drop players",
      "Custom arrow paths",
      "Zone markers",
      "Undo/Redo history",
    ],
    visual: (
      <div className="w-full h-56 rounded-xl overflow-hidden relative bg-pitch-dark">
        <svg viewBox="0 0 320 200" className="w-full h-full">
          <rect width="320" height="200" fill="#1B5E20" />
          {[0,1,2,3].map(i => <rect key={i} x={i*80} y="0" width="40" height="200" fill="rgba(0,0,0,0.06)" />)}
          <rect x="10" y="10" width="300" height="180" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none" />
          <line x1="160" y1="10" x2="160" y2="190" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
          <circle cx="160" cy="100" r="32" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
          {/* Players */}
          {[[35,100],[100,45],[100,80],[100,120],[100,155],[160,65],[160,100],[160,135],[220,55],[220,100],[220,145]].map(([cx,cy],i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="9" fill={i === 0 ? "#F57F17" : i < 5 ? "#1565C0" : i < 9 ? "#1976D2" : "#0D47A1"} stroke="white" strokeWidth="1.5" />
              <text x={cx} y={cy+3.5} textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">{["GK","LB","CB","CB","RB","LM","CM","RM","LW","ST","RW"][i]}</text>
            </g>
          ))}
          {/* Arrows */}
          <path d="M220 55 Q250 45 270 55" stroke="rgba(100,181,246,0.9)" strokeWidth="2" strokeDasharray="5 3" fill="none" markerEnd="url(#a1)" />
          <path d="M220 100 Q240 90 260 85" stroke="rgba(255,213,79,0.9)" strokeWidth="2" strokeDasharray="5 3" fill="none" markerEnd="url(#a2)" />
          <defs>
            <marker id="a1" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0, 6 2.5, 0 5" fill="rgba(100,181,246,0.9)" /></marker>
            <marker id="a2" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0, 6 2.5, 0 5" fill="rgba(255,213,79,0.9)" /></marker>
          </defs>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-card/80 to-transparent" />
      </div>
    ),
    align: "left",
  },
  {
    id: "ai-coach",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect width="48" height="48" rx="12" fill="#1565C0" fillOpacity="0.2" />
        <circle cx="24" cy="24" r="12" stroke="#2196F3" strokeWidth="1.5" fill="none" />
        <circle cx="24" cy="24" r="4" fill="#2196F3" />
        {[0,60,120,180,240,300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 24 + 9 * Math.cos(rad);
          const y1 = 24 + 9 * Math.sin(rad);
          const x2 = 24 + 15 * Math.cos(rad);
          const y2 = 24 + 15 * Math.sin(rad);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#64B5F6" strokeWidth="1.5" />;
        })}
      </svg>
    ),
    badge: "Apple Intelligence",
    badgeColor: "bg-electric/20 text-electric-light border-electric/40",
    title: "Intelligence Meets Instinct",
    subtitle: "AI Coach",
    description:
      "Powered by Apple Intelligence, Soccer Board analyzes your drawing patterns and opponent tendencies to surface tactical suggestions before you even ask.",
    highlights: [
      "Pattern recognition",
      "Proactive suggestions",
      "Learns your style",
      "Runs on-device privately",
    ],
    visual: (
      <div className="w-full h-56 rounded-xl overflow-hidden relative bg-surface-card border border-electric/20">
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          {/* Neural nodes visualization */}
          <svg viewBox="0 0 280 100" className="w-full h-24 opacity-60">
            {/* Layer 1 */}
            {[20, 45, 70].map((y, i) => <circle key={`l1-${i}`} cx="40" cy={y} r="6" fill="#2196F3" />)}
            {/* Layer 2 */}
            {[15, 37, 60, 82].map((y, i) => <circle key={`l2-${i}`} cx="110" cy={y} r="6" fill="#1976D2" />)}
            {/* Layer 3 */}
            {[25, 50, 75].map((y, i) => <circle key={`l3-${i}`} cx="180" cy={y} r="6" fill="#1565C0" />)}
            {/* Output */}
            <circle cx="240" cy="50" r="8" fill="#0D47A1" stroke="#64B5F6" strokeWidth="2" />
            {/* Connections */}
            {[20,45,70].map(y1 => [15,37,60,82].map(y2 => <line key={`${y1}-${y2}`} x1="46" y1={y1} x2="104" y2={y2} stroke="rgba(33,150,243,0.2)" strokeWidth="0.8" />))}
            {[15,37,60,82].map(y1 => [25,50,75].map(y2 => <line key={`${y1}-${y2}`} x1="116" y1={y1} x2="174" y2={y2} stroke="rgba(33,150,243,0.2)" strokeWidth="0.8" />))}
            {[25,50,75].map(y1 => <line key={y1} x1="186" y1={y1} x2="232" y2="50" stroke="rgba(100,181,246,0.3)" strokeWidth="1" />)}
          </svg>

          {/* Suggestion cards */}
          <div className="space-y-2">
            {[
              { text: "Press high in midfield — opponent GK is slow in buildup", conf: 94 },
              { text: "Switch to 4-3-3 when trailing — more attacking width needed", conf: 87 },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-3 bg-electric/10 rounded-lg px-3 py-2 border border-electric/20">
                <div className="w-2 h-2 rounded-full bg-electric-light mt-1.5 flex-shrink-0" />
                <p className="text-white/80 text-xs leading-relaxed flex-1">{s.text}</p>
                <span className="text-electric-light text-xs font-bold ml-2 flex-shrink-0">{s.conf}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    align: "right",
  },
  {
    id: "photo-overlay",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect width="48" height="48" rx="12" fill="#4A148C" fillOpacity="0.2" />
        <rect x="6" y="12" width="36" height="28" rx="4" stroke="#AB47BC" strokeWidth="1.5" fill="none" />
        <circle cx="22" cy="18" r="3" stroke="#AB47BC" strokeWidth="1.5" fill="none" />
        <path d="M6 30 L14 22 L22 28 L30 20 L42 32" stroke="#AB47BC" strokeWidth="1.5" fill="none" />
        <circle cx="34" cy="26" r="5" fill="rgba(33,150,243,0.6)" stroke="#64B5F6" strokeWidth="1.5" />
        <line x1="34" y1="21" x2="34" y2="31" stroke="#64B5F6" strokeWidth="1.5" />
        <line x1="29" y1="26" x2="39" y2="26" stroke="#64B5F6" strokeWidth="1.5" />
      </svg>
    ),
    badge: "Camera Feature",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    title: "See the Real Field. Plan the Real Play.",
    subtitle: "Photo Overlay",
    description:
      "Photograph your training ground or match venue, then draw tactical plays directly on the photo. Your diagrams match the exact dimensions of your field.",
    highlights: [
      "Live camera capture",
      "Draw over real photos",
      "Save & share sessions",
      "Field calibration",
    ],
    visual: (
      <div className="w-full h-56 rounded-xl overflow-hidden relative border border-purple-500/20">
        {/* Photo layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/60 to-green-900/80" />
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 30px, rgba(255,255,255,0.03) 31px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 30px, rgba(255,255,255,0.03) 31px)"
        }} />

        {/* Overlay drawings */}
        <svg viewBox="0 0 320 200" className="absolute inset-0 w-full h-full">
          {/* Field lines overlay */}
          <rect x="20" y="20" width="280" height="160" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
          <line x1="160" y1="20" x2="160" y2="180" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          <circle cx="160" cy="100" r="30" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />

          {/* Tactical player dots */}
          <circle cx="50" cy="100" r="10" fill="#1565C0" stroke="white" strokeWidth="2" fillOpacity="0.9" />
          <circle cx="120" cy="60" r="10" fill="#1565C0" stroke="white" strokeWidth="2" fillOpacity="0.9" />
          <circle cx="120" cy="140" r="10" fill="#1565C0" stroke="white" strokeWidth="2" fillOpacity="0.9" />
          <circle cx="200" cy="80" r="10" fill="#1565C0" stroke="white" strokeWidth="2" fillOpacity="0.9" />
          <circle cx="200" cy="120" r="10" fill="#1565C0" stroke="white" strokeWidth="2" fillOpacity="0.9" />
          <circle cx="260" cy="100" r="10" fill="#C62828" stroke="white" strokeWidth="2" fillOpacity="0.9" />

          {/* Movement arrows */}
          <path d="M200 80 Q230 65 250 75" stroke="rgba(100,181,246,0.9)" strokeWidth="2" strokeDasharray="5 3" fill="none" />
          <path d="M200 120 Q230 135 255 125" stroke="rgba(255,213,79,0.9)" strokeWidth="2" strokeDasharray="5 3" fill="none" />

          {/* Photo tag */}
          <rect x="8" y="8" width="80" height="20" rx="4" fill="rgba(171,71,188,0.8)" />
          <text x="48" y="21" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">PHOTO MODE</text>
        </svg>

        {/* Camera UI overlay */}
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
          <p className="text-white/70 text-xs">Tactical overlay active</p>
        </div>
      </div>
    ),
    align: "left",
  },
  {
    id: "team-management",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect width="48" height="48" rx="12" fill="#E65100" fillOpacity="0.2" />
        <circle cx="16" cy="16" r="6" stroke="#FF9800" strokeWidth="1.5" fill="none" />
        <circle cx="32" cy="16" r="6" stroke="#FF9800" strokeWidth="1.5" fill="none" />
        <circle cx="24" cy="32" r="6" stroke="#FF9800" strokeWidth="1.5" fill="none" />
        <path d="M10 40 C10 34 22 30 22 30 M26 30 C26 30 38 34 38 40" stroke="#FFB74D" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    badge: "Roster Tools",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/40",
    title: "Your Squad, Organized.",
    subtitle: "Team Management",
    description:
      "Build your full roster with player profiles, positions, and stats. Switch between formations in one tap. Get lineup suggestions based on player availability.",
    highlights: [
      "Full roster management",
      "Preset formations",
      "Player profiles",
      "Lineup suggestions",
    ],
    visual: (
      <div className="w-full h-56 rounded-xl overflow-hidden relative bg-surface-card border border-orange-500/20 p-4">
        <div className="grid grid-cols-3 gap-2 h-full">
          {[
            { name: "Marco R.", pos: "GK", num: 1, color: "#F57F17" },
            { name: "Luis P.", pos: "CB", num: 5, color: "#1565C0" },
            { name: "James W.", pos: "CB", num: 4, color: "#1565C0" },
            { name: "Andre K.", pos: "LB", num: 3, color: "#1565C0" },
            { name: "Rafa S.", pos: "CM", num: 8, color: "#1976D2" },
            { name: "Tomas H.", pos: "ST", num: 9, color: "#C62828" },
          ].map((p) => (
            <div
              key={p.name}
              className="bg-white/5 rounded-lg p-2 flex flex-col items-center justify-center border border-white/5 hover:border-orange-400/30 transition-colors"
            >
              <div
                className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center text-white text-xs font-black mb-1"
                style={{ background: p.color }}
              >
                {p.num}
              </div>
              <p className="text-white text-xs font-semibold text-center leading-tight truncate w-full text-center">{p.name.split(" ")[0]}</p>
              <span className="text-white/40 text-xs">{p.pos}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    align: "right",
  },
];

export default function FeatureSection() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-surface to-surface-card"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-pitch-bright text-sm font-semibold uppercase tracking-widest">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 tracking-tight">
            Everything a winning coach needs
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
            Built for the sideline. Refined for the championship.
          </p>
        </div>

        {/* Feature blocks */}
        <div className="space-y-24">
          {features.map((feature, i) => (
            <div
              key={feature.id}
              id={feature.id}
              ref={(el) => { refs.current[i] = el; }}
              className={`section-reveal flex flex-col ${
                feature.align === "right"
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              } gap-12 items-center`}
            >
              {/* Visual side */}
              <div className="flex-1 w-full max-w-lg mx-auto lg:mx-0">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-pitch/10 to-transparent" />
                  {feature.visual}
                </div>
              </div>

              {/* Text side */}
              <div className="flex-1">
                {/* Badge */}
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${feature.badgeColor}`}
                >
                  {feature.icon &&
                    <span className="w-4 h-4 inline-flex">{}</span>}
                  {feature.badge}
                </span>

                <p className="text-white/40 text-sm uppercase tracking-widest mb-2">
                  {feature.subtitle}
                </p>
                <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  {feature.description}
                </p>

                {/* Highlights */}
                <ul className="grid grid-cols-2 gap-3">
                  {feature.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-pitch/30 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-pitch-bright"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.5 2L6 9.5 2.5 6 1 7.5l5 5 9-9z" />
                        </svg>
                      </div>
                      <span className="text-white/70 text-sm">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
