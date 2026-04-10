import FormationDots from "./ui/FormationDots";

export default function FormationShowcase() {
  return (
    <section
      id="formations"
      className="py-24 bg-gradient-to-b from-surface-card to-surface relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pitch/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-pitch-bright text-sm font-semibold uppercase tracking-widest">
            Formations
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 tracking-tight">
            Every system at your fingertips
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-lg mx-auto">
            Switch between formations instantly. Watch your players transition
            to their new positions in real time.
          </p>
        </div>

        {/* Interactive formation showcase */}
        <div className="bg-surface-card rounded-3xl border border-white/5 p-8 shadow-2xl">
          <FormationDots />
        </div>

        {/* Formation cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {[
            {
              formation: "4-4-2",
              style: "Classic & Balanced",
              description:
                "Two banks of four with two strikers. Excellent defensive shape and wide coverage.",
              color: "from-blue-900/40 to-blue-950/20 border-blue-600/30",
              badge: "Most Used",
            },
            {
              formation: "4-3-3",
              style: "Attack-Minded",
              description:
                "Three forwards create width and overload. Ideal for high-possession teams.",
              color: "from-purple-900/40 to-purple-950/20 border-purple-600/30",
              badge: "Popular",
            },
            {
              formation: "3-5-2",
              style: "Dominant Midfield",
              description:
                "Five midfielders control the center. Wing-backs provide attacking width.",
              color: "from-red-900/40 to-red-950/20 border-red-600/30",
              badge: "Tactical",
            },
          ].map((card) => (
            <div
              key={card.formation}
              className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 border`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl font-black text-white">
                  {card.formation}
                </span>
                <span className="text-xs font-semibold bg-white/10 rounded-full px-2.5 py-1 text-white/60">
                  {card.badge}
                </span>
              </div>
              <p className="text-white/50 text-xs uppercase tracking-wider mb-2">
                {card.style}
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* More formations note */}
        <div className="text-center mt-8">
          <p className="text-white/30 text-sm">
            + 15 more formations including 4-2-3-1, 5-3-2, 3-4-3 and more
          </p>
        </div>
      </div>
    </section>
  );
}
