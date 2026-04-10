"use client";

export default function PitchSVG() {
  return (
    <svg
      viewBox="0 0 500 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Soccer pitch tactical diagram"
    >
      {/* Pitch background */}
      <rect width="500" height="320" rx="8" fill="#1B5E20" />

      {/* Pitch stripes */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect
          key={i}
          x={i * 72}
          y="0"
          width="36"
          height="320"
          fill="rgba(0,0,0,0.05)"
        />
      ))}

      {/* Outer boundary */}
      <rect
        x="20"
        y="20"
        width="460"
        height="280"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="2"
        fill="none"
        className="pitch-line"
      />

      {/* Center line */}
      <line
        x1="250"
        y1="20"
        x2="250"
        y2="300"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="2"
        className="pitch-line pitch-line-delay-1"
      />

      {/* Center circle */}
      <circle
        cx="250"
        cy="160"
        r="50"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="2"
        fill="none"
        className="pitch-line pitch-line-delay-1"
      />

      {/* Center dot */}
      <circle cx="250" cy="160" r="4" fill="rgba(255,255,255,0.8)" />

      {/* Left penalty area */}
      <rect
        x="20"
        y="90"
        width="80"
        height="140"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="2"
        fill="none"
        className="pitch-line pitch-line-delay-2"
      />

      {/* Right penalty area */}
      <rect
        x="400"
        y="90"
        width="80"
        height="140"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="2"
        fill="none"
        className="pitch-line pitch-line-delay-2"
      />

      {/* Left goal area */}
      <rect
        x="20"
        y="125"
        width="35"
        height="70"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="1.5"
        fill="none"
        className="pitch-line pitch-line-delay-3"
      />

      {/* Right goal area */}
      <rect
        x="445"
        y="125"
        width="35"
        height="70"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="1.5"
        fill="none"
        className="pitch-line pitch-line-delay-3"
      />

      {/* Left goal */}
      <rect
        x="10"
        y="140"
        width="15"
        height="40"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="2"
        fill="rgba(255,255,255,0.1)"
        className="pitch-line pitch-line-delay-4"
      />

      {/* Right goal */}
      <rect
        x="475"
        y="140"
        width="15"
        height="40"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="2"
        fill="rgba(255,255,255,0.1)"
        className="pitch-line pitch-line-delay-4"
      />

      {/* Left penalty spot */}
      <circle
        cx="80"
        cy="160"
        r="3"
        fill="rgba(255,255,255,0.7)"
        className="pitch-line pitch-line-delay-3"
      />

      {/* Right penalty spot */}
      <circle
        cx="420"
        cy="160"
        r="3"
        fill="rgba(255,255,255,0.7)"
        className="pitch-line pitch-line-delay-3"
      />

      {/* === 4-4-2 Formation Players (Blue team) === */}
      {/* Goalkeeper */}
      <circle
        cx="50"
        cy="160"
        r="10"
        fill="#1565C0"
        stroke="white"
        strokeWidth="2"
        className="player-dot player-dot-delay-1"
      />
      <text
        x="50"
        y="164"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
        className="player-dot player-dot-delay-1"
      >
        GK
      </text>

      {/* Defenders (4) */}
      {[105, 135, 185, 215].map((y, i) => (
        <g key={`def-${i}`}>
          <circle
            cx="140"
            cy={y}
            r="10"
            fill="#1565C0"
            stroke="white"
            strokeWidth="2"
            className={`player-dot player-dot-delay-${i + 2}`}
          />
          <text
            x="140"
            y={y + 4}
            textAnchor="middle"
            fill="white"
            fontSize="7"
            fontWeight="bold"
            className={`player-dot player-dot-delay-${i + 2}`}
          >
            {["LB", "CB", "CB", "RB"][i]}
          </text>
        </g>
      ))}

      {/* Midfielders (4) */}
      {[105, 135, 185, 215].map((y, i) => (
        <g key={`mid-${i}`}>
          <circle
            cx="210"
            cy={y}
            r="10"
            fill="#1976D2"
            stroke="white"
            strokeWidth="2"
            className={`player-dot player-dot-delay-${i + 6}`}
          />
          <text
            x="210"
            y={y + 4}
            textAnchor="middle"
            fill="white"
            fontSize="7"
            fontWeight="bold"
            className={`player-dot player-dot-delay-${i + 6}`}
          >
            {["LM", "CM", "CM", "RM"][i]}
          </text>
        </g>
      ))}

      {/* Forwards (2) */}
      {[135, 185].map((y, i) => (
        <g key={`fwd-${i}`}>
          <circle
            cx="280"
            cy={y}
            r="10"
            fill="#0D47A1"
            stroke="#64B5F6"
            strokeWidth="2"
            className={`player-dot player-dot-delay-${i + 10}`}
          />
          <text
            x="280"
            y={y + 4}
            textAnchor="middle"
            fill="white"
            fontSize="7"
            fontWeight="bold"
            className={`player-dot player-dot-delay-${i + 10}`}
          >
            {["ST", "ST"][i]}
          </text>
        </g>
      ))}

      {/* === Tactical Arrows === */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="6"
          refX="8"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 8 3, 0 6" fill="rgba(100, 181, 246, 0.9)" />
        </marker>
        <marker
          id="arrowhead-yellow"
          markerWidth="8"
          markerHeight="6"
          refX="8"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 8 3, 0 6" fill="rgba(255, 213, 79, 0.9)" />
        </marker>
      </defs>

      {/* Movement arrow for ST */}
      <path
        d="M280 185 Q320 165 350 155"
        stroke="rgba(100, 181, 246, 0.9)"
        strokeWidth="2"
        strokeDasharray="6 3"
        fill="none"
        markerEnd="url(#arrowhead)"
        className="tactic-arrow"
      />

      {/* Movement arrow for other ST */}
      <path
        d="M280 135 Q300 120 330 115"
        stroke="rgba(255, 213, 79, 0.9)"
        strokeWidth="2"
        strokeDasharray="6 3"
        fill="none"
        markerEnd="url(#arrowhead-yellow)"
        className="tactic-arrow"
      />

      {/* Overlap run from RM */}
      <path
        d="M210 215 Q245 230 280 210"
        stroke="rgba(100, 181, 246, 0.7)"
        strokeWidth="2"
        strokeDasharray="4 3"
        fill="none"
        markerEnd="url(#arrowhead)"
        className="tactic-arrow"
      />
    </svg>
  );
}
