const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Head Coach",
    team: "FC Atletico Juniors",
    initials: "CM",
    color: "#1565C0",
    quote:
      "Soccer Board changed how I prepare for matches. I used to spend hours drawing on whiteboards. Now I set up formations in minutes and share them directly with my players before games. Kicko's AI suggestions have opened my mind to tactics I wouldn't have considered.",
    stars: 5,
    country: "🇲🇽",
  },
  {
    name: "Sophie Laurent",
    role: "Youth Academy Director",
    team: "Paris FC Academy",
    initials: "SL",
    color: "#6A1B9A",
    quote:
      "The photo overlay feature is revolutionary for youth coaching. I photograph our training pitch and draw exactly where I want players to move. The kids understand it instantly — much better than abstract diagrams. The app is beautifully designed too.",
    stars: 5,
    country: "🇫🇷",
  },
  {
    name: "James Okafor",
    role: "Assistant Manager",
    team: "Royal Kings FC",
    initials: "JO",
    color: "#BF360C",
    quote:
      "The AI tactical suggestions caught me off guard the first time. Kicko pointed out that our defensive shape was leaving gaps on transitions — something we'd been struggling with all season. We changed the approach and haven't conceded from a counter since.",
    stars: 5,
    country: "🇳🇬",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-surface-card to-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-pitch-bright text-sm font-semibold uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 tracking-tight">
            Trusted by coaches worldwide
          </h2>
          <p className="text-white/50 text-lg mt-4">
            Join 10,000+ coaches already using Soccer Board.
          </p>
        </div>

        {/* Rating summary */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {[
            { value: "4.9", label: "App Store Rating", sub: "Based on 847 reviews" },
            { value: "10K+", label: "Active Coaches", sub: "Across 60+ countries" },
            { value: "#1", label: "Coaching App", sub: "In Sports category" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-black text-white">{stat.value}</p>
              <p className="text-white/70 font-semibold text-sm mt-1">{stat.label}</p>
              <p className="text-white/30 text-xs">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface-card border border-white/5 hover:border-white/10 rounded-2xl p-7 flex flex-col gap-5 transition-all duration-200 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/70 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-black flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-white font-semibold text-sm truncate">
                      {t.name}
                    </p>
                    <span>{t.country}</span>
                  </div>
                  <p className="text-white/40 text-xs truncate">
                    {t.role} · {t.team}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
