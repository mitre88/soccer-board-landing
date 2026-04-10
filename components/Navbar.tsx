"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
              <circle cx="16" cy="16" r="15" fill="#2E7D32" />
              <circle cx="16" cy="16" r="15" stroke="white" strokeWidth="1" />
              {/* Soccer ball pattern */}
              <path
                d="M16 6 L20 10 L18 15 L14 15 L12 10 Z"
                fill="white"
                fillOpacity="0.9"
              />
              <path
                d="M16 26 L20 22 L18 17 L14 17 L12 22 Z"
                fill="white"
                fillOpacity="0.9"
              />
              <path
                d="M7 13 L10 10 L14 12 L13 17 L8 18 Z"
                fill="white"
                fillOpacity="0.9"
              />
              <path
                d="M25 13 L22 10 L18 12 L19 17 L24 18 Z"
                fill="white"
                fillOpacity="0.9"
              />
              <path
                d="M9 21 L8 18 L13 17 L15 21 L12 24 Z"
                fill="white"
                fillOpacity="0.9"
              />
              <path
                d="M23 21 L24 18 L19 17 L17 21 L20 24 Z"
                fill="white"
                fillOpacity="0.9"
              />
            </svg>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Soccer Board
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Formations", "Pricing", "Support"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#pricing"
            className="bg-electric hover:bg-electric-bright text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-electric/30"
          >
            Download Free
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex flex-col gap-4">
          {["Features", "Formations", "Pricing", "Support"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-white text-base font-medium py-1 transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="bg-electric text-white px-5 py-3 rounded-full text-sm font-semibold text-center mt-2"
          >
            Download Free
          </a>
        </div>
      )}
    </nav>
  );
}
