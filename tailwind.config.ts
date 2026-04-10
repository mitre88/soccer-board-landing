import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        pitch: {
          dark: "#1B5E20",
          DEFAULT: "#2E7D32",
          light: "#4CAF50",
          bright: "#66BB6A",
        },
        electric: {
          DEFAULT: "#2196F3",
          light: "#64B5F6",
          bright: "#42A5F5",
        },
        surface: {
          DEFAULT: "#0A0A0A",
          elevated: "#111111",
          card: "#1A1A2E",
          border: "#2A2A3E",
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "bounce-slow": "bounceSlow 3s ease-in-out infinite",
        "breathe": "breathe 4s ease-in-out infinite",
        "draw-line": "drawLine 2s ease-in-out forwards",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "blink": "blink 4s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-15px) rotate(3deg)" },
          "66%": { transform: "translateY(-8px) rotate(-2deg)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(33, 150, 243, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(33, 150, 243, 0.8)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        blink: {
          "0%, 90%, 100%": { transform: "scaleY(1)" },
          "95%": { transform: "scaleY(0.1)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "pitch-gradient": "linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 50%, #0A1628 100%)",
        "hero-gradient": "radial-gradient(ellipse at 50% 50%, rgba(46, 125, 50, 0.15) 0%, transparent 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(10, 10, 10, 0.9) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
