"use client";

import { useEffect, useState } from "react";
import PitchSVG from "./ui/PitchSVG";
import Image from "next/image";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 4 + 2}px`,
  duration: `${Math.random() * 15 + 10}s`,
  delay: `${Math.random() * 10}s`,
}));

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-pitch-gradient" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Floating particles */}
      {mounted &&
        particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-pitch/20 border border-pitch/40 rounded-full px-4 py-1.5 mb-6"
            style={{
              animation: mounted ? "fadeInUp 0.6s ease-out forwards" : "none",
              opacity: 0,
            }}
          >
            <span className="w-2 h-2 rounded-full bg-pitch-bright animate-pulse" />
            <span className="text-pitch-bright text-xs font-semibold uppercase tracking-widest">
              Now with Apple Intelligence
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-6"
            style={{
              animation: mounted
                ? "fadeInUp 0.7s ease-out 0.1s forwards"
                : "none",
              opacity: 0,
            }}
          >
            Command
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pitch-light via-electric to-electric-light">
              the Pitch.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg sm:text-xl text-white/60 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            style={{
              animation: mounted
                ? "fadeInUp 0.7s ease-out 0.2s forwards"
                : "none",
              opacity: 0,
            }}
          >
            AI-powered tactical board for coaches who think three moves ahead.
            Draw. Plan. Win.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            style={{
              animation: mounted
                ? "fadeInUp 0.7s ease-out 0.3s forwards"
                : "none",
              opacity: 0,
            }}
          >
            {/* App Store button */}
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-90 transition-opacity hover:-translate-y-0.5 duration-200"
              aria-label="Download Soccer Board on the App Store"
            >
              <Image
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                alt="Download on the App Store"
                width={160}
                height={53}
                className="h-14 w-auto"
                unoptimized
              />
            </a>

            {/* Watch Demo */}
            <a
              href="#features"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-3.5 rounded-full font-semibold text-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <svg
                  className="w-3 h-3 ml-0.5"
                  fill="white"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 3.5v9L13 8 5 3.5z" />
                </svg>
              </span>
              Watch Demo
            </a>
          </div>

          {/* Stats */}
          <div
            className="flex gap-8 justify-center lg:justify-start mt-10 pt-8 border-t border-white/10"
            style={{
              animation: mounted
                ? "fadeInUp 0.7s ease-out 0.4s forwards"
                : "none",
              opacity: 0,
            }}
          >
            {[
              { value: "10K+", label: "Coaches" },
              { value: "4.9★", label: "App Store" },
              { value: "5", label: "Languages" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="text-white/40 text-xs uppercase tracking-wider mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Pitch visual */}
        <div
          className="flex-1 w-full max-w-lg"
          style={{
            animation: mounted ? "fadeIn 1s ease-out 0.4s forwards" : "none",
            opacity: 0,
          }}
        >
          <div className="relative">
            {/* Glow behind pitch */}
            <div className="absolute inset-0 rounded-2xl bg-pitch/30 blur-3xl scale-90" />

            {/* Pitch card */}
            <div className="relative rounded-2xl overflow-hidden border border-pitch/40 shadow-2xl shadow-pitch/20">
              <PitchSVG />

              {/* Overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent" />

              {/* AI badge overlay */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-electric-light animate-pulse" />
                  <span className="text-white/80 text-xs font-semibold">
                    AI Analyzing...
                  </span>
                </div>
              </div>

              {/* Suggestion bubble */}
              <div className="absolute bottom-6 left-4 right-4 bg-electric/20 backdrop-blur-sm rounded-xl px-4 py-3 border border-electric/30">
                <p className="text-electric-light text-xs font-semibold mb-0.5">
                  Kicko suggests:
                </p>
                <p className="text-white text-xs">
                  Push LM forward for overload on the left flank
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-white/30 text-xs uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
