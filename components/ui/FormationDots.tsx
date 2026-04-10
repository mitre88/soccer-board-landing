"use client";

import { useState } from "react";

type Formation = "4-4-2" | "4-3-3" | "3-5-2";

interface PlayerPosition {
  x: number;
  y: number;
  label: string;
}

const formations: Record<Formation, PlayerPosition[]> = {
  "4-4-2": [
    { x: 50, y: 50, label: "GK" },
    // Defenders
    { x: 150, y: 15, label: "LB" },
    { x: 150, y: 33, label: "CB" },
    { x: 150, y: 67, label: "CB" },
    { x: 150, y: 85, label: "RB" },
    // Midfielders
    { x: 230, y: 15, label: "LM" },
    { x: 230, y: 37, label: "CM" },
    { x: 230, y: 63, label: "CM" },
    { x: 230, y: 85, label: "RM" },
    // Forwards
    { x: 310, y: 37, label: "ST" },
    { x: 310, y: 63, label: "ST" },
  ],
  "4-3-3": [
    { x: 50, y: 50, label: "GK" },
    // Defenders
    { x: 150, y: 15, label: "LB" },
    { x: 150, y: 35, label: "CB" },
    { x: 150, y: 65, label: "CB" },
    { x: 150, y: 85, label: "RB" },
    // Midfielders
    { x: 230, y: 25, label: "LM" },
    { x: 230, y: 50, label: "CM" },
    { x: 230, y: 75, label: "RM" },
    // Forwards
    { x: 320, y: 20, label: "LW" },
    { x: 320, y: 50, label: "ST" },
    { x: 320, y: 80, label: "RW" },
  ],
  "3-5-2": [
    { x: 50, y: 50, label: "GK" },
    // Defenders (3)
    { x: 140, y: 25, label: "CB" },
    { x: 140, y: 50, label: "CB" },
    { x: 140, y: 75, label: "CB" },
    // Midfielders (5)
    { x: 220, y: 10, label: "LWB" },
    { x: 215, y: 32, label: "CM" },
    { x: 220, y: 50, label: "DM" },
    { x: 215, y: 68, label: "CM" },
    { x: 220, y: 90, label: "RWB" },
    // Forwards (2)
    { x: 315, y: 38, label: "ST" },
    { x: 315, y: 62, label: "ST" },
  ],
};

const formationColors: Record<Formation, string> = {
  "4-4-2": "#1565C0",
  "4-3-3": "#6A1B9A",
  "3-5-2": "#BF360C",
};

export default function FormationDots() {
  const [active, setActive] = useState<Formation>("4-4-2");
  const [transitioning, setTransitioning] = useState(false);

  const handleChange = (f: Formation) => {
    if (f === active) return;
    setTransitioning(true);
    setTimeout(() => {
      setActive(f);
      setTransitioning(false);
    }, 100);
  };

  const players = formations[active];
  const color = formationColors[active];

  return (
    <div className="w-full">
      {/* Formation selector */}
      <div className="flex gap-3 justify-center mb-8">
        {(["4-4-2", "4-3-3", "3-5-2"] as Formation[]).map((f) => (
          <button
            key={f}
            onClick={() => handleChange(f)}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              active === f
                ? "bg-pitch text-white shadow-lg shadow-pitch/30 scale-105"
                : "bg-white/10 text-white/60 hover:bg-white/15 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Pitch with dots */}
      <div className="relative mx-auto" style={{ maxWidth: 400 }}>
        <svg viewBox="0 0 380 220" className="w-full">
          {/* Pitch background */}
          <rect width="380" height="220" rx="8" fill="#2E7D32" />

          {/* Stripes */}
          {[0, 1, 2, 3, 4].map((i) => (
            <rect
              key={i}
              x={i * 76}
              y="0"
              width="38"
              height="220"
              fill="rgba(0,0,0,0.06)"
            />
          ))}

          {/* Outer boundary */}
          <rect
            x="15"
            y="15"
            width="350"
            height="190"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Center line */}
          <line
            x1="190"
            y1="15"
            x2="190"
            y2="205"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.5"
          />

          {/* Center circle */}
          <circle
            cx="190"
            cy="110"
            r="38"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="190" cy="110" r="3" fill="rgba(255,255,255,0.7)" />

          {/* Left penalty area */}
          <rect
            x="15"
            y="60"
            width="60"
            height="100"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
            fill="none"
          />

          {/* Right penalty area */}
          <rect
            x="305"
            y="60"
            width="60"
            height="100"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
            fill="none"
          />

          {/* Left goal */}
          <rect
            x="8"
            y="88"
            width="12"
            height="44"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="1.5"
            fill="rgba(255,255,255,0.1)"
          />

          {/* Right goal */}
          <rect
            x="360"
            y="88"
            width="12"
            height="44"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="1.5"
            fill="rgba(255,255,255,0.1)"
          />

          {/* Player dots */}
          {players.map((p, i) => {
            const cx = (p.x / 380) * 380;
            const cy = (p.y / 100) * 220;

            return (
              <g
                key={`${active}-${i}`}
                style={{
                  transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  opacity: transitioning ? 0 : 1,
                }}
              >
                {/* Glow */}
                <circle
                  cx={cx}
                  cy={cy}
                  r="14"
                  fill={color}
                  fillOpacity="0.2"
                />
                {/* Player */}
                <circle
                  cx={cx}
                  cy={cy}
                  r="10"
                  fill={color}
                  stroke="white"
                  strokeWidth="1.5"
                />
                <text
                  x={cx}
                  y={cy + 3.5}
                  textAnchor="middle"
                  fill="white"
                  fontSize="6"
                  fontWeight="800"
                >
                  {p.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Formation name */}
      <div className="text-center mt-4">
        <span className="text-white/40 text-sm uppercase tracking-widest">
          Formation
        </span>
        <p className="text-white font-bold text-2xl mt-1">{active}</p>
      </div>
    </div>
  );
}
