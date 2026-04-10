import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Soccer Board",
  description: "Soccer Board terms of service and usage agreement.",
};

export default function TermsOfService() {
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
          <span className="text-white/30 text-xs">Last updated: January 1, 2026</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black text-white mb-2">Terms of Service</h1>
        <p className="text-white/50 mb-12">Soccer Board — Nextechia</p>

        <div className="space-y-10">
          {[
            {
              title: "1. Acceptance of Terms",
              content: `By downloading, installing, or using Soccer Board ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.

These Terms constitute a legally binding agreement between you and Nextechia ("Company", "we", "us").`,
            },
            {
              title: "2. Description of Service",
              content: `Soccer Board is an iOS application that provides:
- Tactical whiteboard tools for soccer/football coaching
- AI-powered tactical suggestions via Apple Intelligence
- Team and roster management features
- Photo overlay capabilities for tactical planning
- Formation templates and management

The App is available in Free and Pro (subscription) tiers, as described in the app and on our website.`,
            },
            {
              title: "3. Subscriptions and Payments",
              content: `**Free Tier**: Available at no charge with limited features as described in the app.

**Pro Subscription**:
- Billed monthly or annually through Apple App Store
- Automatically renews unless cancelled at least 24 hours before the renewal date
- Managed through your Apple ID account settings
- No refunds for partial subscription periods unless required by applicable law

To cancel, go to Settings > Apple ID > Subscriptions on your iPhone.`,
            },
            {
              title: "4. User Conduct",
              content: `You agree NOT to:
- Use the App for any unlawful purpose
- Attempt to reverse engineer, decompile, or disassemble the App
- Reproduce, duplicate, or resell any part of the App
- Use the App to transmit harmful, offensive, or inappropriate content
- Impersonate any person or entity
- Interfere with or disrupt the App's operation`,
            },
            {
              title: "5. Intellectual Property",
              content: `The App, including all content, features, and functionality, is owned by Nextechia and protected by intellectual property laws.

You are granted a limited, non-exclusive, non-transferable license to use the App on your personal Apple devices.

User-generated content (your tactical boards, formations, and team data) remains yours. By using the App, you grant us no rights to your content.`,
            },
            {
              title: "6. Apple Intelligence and AI Features",
              content: `Soccer Board's AI features (Kicko's suggestions) are powered by Apple Intelligence and run entirely on-device.

AI suggestions are provided for informational and coaching assistance purposes only. They are not guaranteed to be accurate or suitable for every situation. Nextechia is not responsible for outcomes resulting from following AI-generated tactical suggestions.`,
            },
            {
              title: "7. Disclaimer of Warranties",
              content: `THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.

We do not warrant that:
- The App will be uninterrupted or error-free
- Defects will be corrected
- The App is free of viruses or harmful components
- The results of using the App will meet your requirements`,
            },
            {
              title: "8. Limitation of Liability",
              content: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEXTECHIA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL.

Our total liability shall not exceed the amount you paid for the App in the 12 months preceding the claim.`,
            },
            {
              title: "9. Governing Law",
              content: `These Terms are governed by the laws of Mexico, without regard to its conflict of law provisions.

Any disputes shall be resolved through binding arbitration in Mexico City, Mexico, except where prohibited by applicable law.`,
            },
            {
              title: "10. Changes to Terms",
              content: `We reserve the right to modify these Terms at any time. We will provide notice of material changes through the App or by email. Continued use after changes constitutes acceptance of the new Terms.`,
            },
            {
              title: "11. Contact",
              content: `For questions about these Terms, contact us:

Email: legal@soccerboard.app
Website: https://soccerboard.app
Address: Nextechia, Mexico City, Mexico`,
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
              <div className="text-white/60 leading-relaxed text-sm space-y-2">
                {section.content.split("\n").map((line, i) => {
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return <p key={i} className="font-semibold text-white/80 mt-3">{line.slice(2, -2)}</p>;
                  }
                  if (line.startsWith("**")) {
                    const parts = line.split("**:");
                    if (parts.length > 1) {
                      return <p key={i} className="mt-2"><strong className="text-white/80">{parts[0].slice(2)}</strong>:{parts[1]}</p>;
                    }
                  }
                  if (line.startsWith("- ")) {
                    return <p key={i} className="ml-4">• {line.slice(2)}</p>;
                  }
                  if (line.match(/^[A-Z\s]+$/)) {
                    return <p key={i} className="text-white/80 font-medium">{line}</p>;
                  }
                  return line ? <p key={i}>{line}</p> : <br key={i} />;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
