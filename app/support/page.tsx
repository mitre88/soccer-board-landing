import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — Soccer Board",
  description: "Get help with Soccer Board. FAQ, contact support, and troubleshooting.",
};

const faqs = [
  {
    q: "How do I draw movement arrows on the pitch?",
    a: "Tap the arrow tool in the bottom toolbar, then drag from any player dot to draw a tactical arrow. You can adjust the curve by dragging the midpoint of the arrow.",
  },
  {
    q: "How do I switch formations?",
    a: "Tap the formation button (grid icon) in the toolbar and select from 18+ presets. Players will animate to their new positions. You can also drag players manually.",
  },
  {
    q: "How do Kicko's AI suggestions work?",
    a: "Kicko uses Apple Intelligence running entirely on your device. He analyzes your formation, recent draws, and patterns to suggest tactical adjustments. No internet required for AI features.",
  },
  {
    q: "Can I use Soccer Board offline?",
    a: "Yes. All core features including tactical board, formations, and AI suggestions work completely offline. Internet is only needed for iCloud sync.",
  },
  {
    q: "How do I share a tactical board with my players?",
    a: "Tap the share icon (top right) and choose to export as image or share via AirDrop, Messages, WhatsApp, etc. Pro users can also export formation animations as video.",
  },
  {
    q: "How do I cancel my Pro subscription?",
    a: "Go to iPhone Settings > [Your Name] > Subscriptions > Soccer Board Pro > Cancel Subscription. Your Pro features remain until the end of the current billing period.",
  },
  {
    q: "My data disappeared after updating. What do I do?",
    a: "Your data is stored locally and in iCloud. Go to Settings > Soccer Board > iCloud Sync and ensure it's enabled. If the issue persists, contact us immediately at support@soccerboard.app.",
  },
  {
    q: "Is Soccer Board available on iPad?",
    a: "Yes! Soccer Board is fully optimized for iPad with a larger pitch canvas. Perfect for presentations in the locker room or on the sideline.",
  },
];

export default function Support() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Soccer Board
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-electric/10 border border-electric/20 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-electric-light" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="text-4xl font-black text-white mb-4">How can we help?</h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Find answers to common questions or get in touch with our support team.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              title: "Email Support",
              description: "Get a response within 24 hours",
              action: "support@soccerboard.app",
              href: "mailto:support@soccerboard.app",
              color: "from-blue-900/40 to-blue-950/20 border-blue-600/30",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              title: "App Store Review",
              description: "Rate us and leave feedback",
              action: "Leave a Review",
              href: "https://apps.apple.com",
              color: "from-pitch-dark/40 to-pitch-dark/20 border-pitch/30",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              title: "Community",
              description: "Join coaches on Twitter/X",
              action: "@SoccerBoardApp",
              href: "https://twitter.com",
              color: "from-purple-900/40 to-purple-950/20 border-purple-600/30",
            },
          ].map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 border hover:-translate-y-1 transition-all duration-200`}
            >
              <div className="text-white/70 mb-3">{card.icon}</div>
              <h3 className="text-white font-bold mb-1">{card.title}</h3>
              <p className="text-white/40 text-xs mb-3">{card.description}</p>
              <span className="text-electric-light text-sm font-semibold">{card.action}</span>
            </a>
          ))}
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-black text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-surface-card border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors"
              >
                <h3 className="text-white font-semibold mb-3 flex items-start gap-3">
                  <span className="text-pitch-bright text-sm font-black mt-0.5 flex-shrink-0">
                    Q
                  </span>
                  {faq.q}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed ml-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-surface-card rounded-2xl border border-white/5 p-10">
          <p className="text-white/50 mb-2">Still need help?</p>
          <h3 className="text-2xl font-black text-white mb-4">
            Our team is ready to help
          </h3>
          <a
            href="mailto:support@soccerboard.app"
            className="inline-flex items-center gap-2 bg-electric hover:bg-electric-bright text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-electric/30"
          >
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Email Support
          </a>
          <p className="text-white/25 text-xs mt-4">
            Average response time: under 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}
