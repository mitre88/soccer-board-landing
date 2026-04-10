const languages = [
  {
    code: "EN",
    name: "English",
    flag: (
      <svg viewBox="0 0 60 40" className="w-full h-full">
        <rect width="60" height="40" fill="#012169" />
        <path d="M0 0 L60 40 M60 0 L0 40" stroke="white" strokeWidth="8" />
        <path d="M0 0 L60 40 M60 0 L0 40" stroke="#C8102E" strokeWidth="5" />
        <path d="M30 0 L30 40 M0 20 L60 20" stroke="white" strokeWidth="12" />
        <path d="M30 0 L30 40 M0 20 L60 20" stroke="#C8102E" strokeWidth="8" />
      </svg>
    ),
  },
  {
    code: "ES",
    name: "Español",
    flag: (
      <svg viewBox="0 0 60 40" className="w-full h-full">
        <rect width="60" height="40" fill="#AA151B" />
        <rect y="10" width="60" height="20" fill="#F1BF00" />
      </svg>
    ),
  },
  {
    code: "FR",
    name: "Français",
    flag: (
      <svg viewBox="0 0 60 40" className="w-full h-full">
        <rect width="20" height="40" fill="#0055A4" />
        <rect x="20" width="20" height="40" fill="white" />
        <rect x="40" width="20" height="40" fill="#EF4135" />
      </svg>
    ),
  },
  {
    code: "ZH",
    name: "中文",
    flag: (
      <svg viewBox="0 0 60 40" className="w-full h-full">
        <rect width="60" height="40" fill="#DE2910" />
        <polygon points="10,8 11.5,13 16,13 12.5,16 14,21 10,18 6,21 7.5,16 4,13 8.5,13" fill="#FFDE00" />
        <polygon points="22,5 23,8 26,8 23.5,10 24.5,13 22,11.5 19.5,13 20.5,10 18,8 21,8" fill="#FFDE00" />
        <polygon points="28,11 29,14 32,14 29.5,16 30.5,19 28,17.5 25.5,19 26.5,16 24,14 27,14" fill="#FFDE00" />
        <polygon points="28,20 29,23 32,23 29.5,25 30.5,28 28,26.5 25.5,28 26.5,25 24,23 27,23" fill="#FFDE00" />
        <polygon points="22,26 23,29 26,29 23.5,31 24.5,34 22,32.5 19.5,34 20.5,31 18,29 21,29" fill="#FFDE00" />
      </svg>
    ),
  },
  {
    code: "AR",
    name: "العربية",
    flag: (
      <svg viewBox="0 0 60 40" className="w-full h-full">
        <rect width="60" height="40" fill="white" />
        <rect width="60" height="13.3" fill="#006C35" />
        <rect y="26.7" width="60" height="13.3" fill="#006C35" />
        <polygon points="0,0 20,20 0,40" fill="#CE1126" />
        <polygon points="0,0 20,20 0,40" fill="#CE1126" />
        <path d="M5,10 Q18,20 5,30" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
];

export default function LanguageSupport() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        {/* Globe icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-electric/10 border border-electric/20 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-electric-light" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
            <path d="M2 12h20" />
            <path d="M4 7h16M4 17h16" />
          </svg>
        </div>

        <span className="text-electric-light text-sm font-semibold uppercase tracking-widest">
          Multilingual
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4 tracking-tight">
          Speaks Your Language
        </h2>
        <p className="text-white/50 text-lg mb-16 max-w-xl mx-auto">
          Soccer is universal. Soccer Board is available in 5 languages so
          coaches everywhere can plan their winning tactics.
        </p>

        {/* Language cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="group bg-surface-card hover:bg-surface-elevated border border-white/5 hover:border-white/15 rounded-2xl p-5 flex flex-col items-center gap-3 transition-all duration-200 hover:-translate-y-1 cursor-pointer min-w-[100px]"
            >
              {/* Flag */}
              <div className="w-12 h-8 rounded-md overflow-hidden shadow-md">
                {lang.flag}
              </div>
              {/* Language code */}
              <span className="text-white font-black text-sm">{lang.code}</span>
              {/* Language name */}
              <span className="text-white/40 text-xs">{lang.name}</span>
            </div>
          ))}
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: "🌍",
              title: "Instant Translation",
              text: "Switch languages in settings. All UI, prompts, and Kicko's tips adapt instantly.",
            },
            {
              icon: "🗣️",
              title: "RTL Support",
              text: "Full right-to-left layout support for Arabic. Everything mirrors correctly.",
            },
            {
              icon: "📱",
              title: "System Integration",
              text: "Respects your iPhone's language setting. Just set it once and forget it.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-surface-card border border-white/5 rounded-2xl p-6 text-left"
            >
              <span className="text-3xl">{item.icon}</span>
              <h3 className="text-white font-bold mt-3 mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
