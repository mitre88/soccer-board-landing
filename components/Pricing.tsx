import Image from "next/image";

const freeTier = [
  "Unlimited tactical boards",
  "10 preset formations",
  "Basic drawing tools",
  "Photo overlay (3/month)",
  "1 team roster",
  "Export as screenshot",
];

const proTier = [
  "Everything in Free",
  "Unlimited formations",
  "AI tactical suggestions (Kicko)",
  "Unlimited photo overlays",
  "Multiple team rosters",
  "Player performance profiles",
  "Formation animation export",
  "Priority support",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 bg-surface relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-electric-light text-sm font-semibold uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 tracking-tight">
            Free to start.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-electric-light">
              Pro to dominate.
            </span>
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-lg mx-auto">
            Start coaching smarter today — no credit card required.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Free tier */}
          <div className="bg-surface-card border border-white/10 rounded-3xl p-8">
            <div className="mb-6">
              <span className="text-white/40 text-sm font-semibold uppercase tracking-widest">
                Free
              </span>
              <div className="flex items-end gap-2 mt-2">
                <span className="text-5xl font-black text-white">$0</span>
                <span className="text-white/40 text-sm mb-2">forever</span>
              </div>
              <p className="text-white/50 text-sm mt-2">
                Everything you need to start coaching better.
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {freeTier.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white/50"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.5 2L6 9.5 2.5 6 1 7.5l5 5 9-9z" />
                    </svg>
                  </div>
                  <span className="text-white/60 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Download Free
            </a>
          </div>

          {/* Pro tier */}
          <div className="relative bg-gradient-to-br from-electric/20 to-surface-card border border-electric/30 rounded-3xl p-8 shadow-2xl shadow-electric/10">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-electric text-white text-xs font-black px-4 py-1.5 rounded-full">
              MOST POPULAR
            </div>

            <div className="mb-6">
              <span className="text-electric-light text-sm font-semibold uppercase tracking-widest">
                Pro
              </span>
              <div className="flex items-end gap-2 mt-2">
                <span className="text-5xl font-black text-white">$4.99</span>
                <span className="text-white/40 text-sm mb-2">/month</span>
              </div>
              <p className="text-white/50 text-sm mt-2">
                Unlock the full tactical arsenal. Win more games.
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {proTier.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-electric/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-electric-light"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.5 2L6 9.5 2.5 6 1 7.5l5 5 9-9z" />
                    </svg>
                  </div>
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-electric hover:bg-electric-bright text-white font-bold py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-electric/30"
            >
              Start Pro Free Trial
            </a>

            <p className="text-white/30 text-xs text-center mt-3">
              7-day free trial. Cancel anytime.
            </p>
          </div>
        </div>

        {/* Download CTA */}
        <div className="text-center">
          <p className="text-white/40 text-sm mb-6">
            Available exclusively on iPhone and iPad
          </p>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-90 transition-all duration-200 hover:-translate-y-1"
            aria-label="Download Soccer Board on the App Store"
          >
            <Image
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
              alt="Download on the App Store"
              width={160}
              height={53}
              className="h-14 w-auto mx-auto"
              unoptimized
            />
          </a>

          <div className="flex flex-wrap gap-6 justify-center mt-8 text-white/30 text-xs">
            {[
              "No subscription required for Free tier",
              "Secure payments via App Store",
              "Cancel Pro anytime in Settings",
            ].map((note) => (
              <span key={note} className="flex items-center gap-1.5">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.5 2L6 9.5 2.5 6 1 7.5l5 5 9-9z" />
                </svg>
                {note}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
