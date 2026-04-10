import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Soccer Board",
  description: "Soccer Board privacy policy. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-black text-white mb-2">Privacy Policy</h1>
        <p className="text-white/50 mb-12">Soccer Board — Nextechia</p>

        <div className="prose prose-invert max-w-none space-y-10">
          {[
            {
              title: "1. Introduction",
              content: `Welcome to Soccer Board ("App"), developed by Nextechia ("we", "us", "our"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.

Please read this Privacy Policy carefully. By using Soccer Board, you agree to the practices described in this policy.`,
            },
            {
              title: "2. Information We Collect",
              content: `We may collect the following types of information:

**Information You Provide:**
- Team names, player names, and formation data you create in the app
- Photos you choose to import for tactical overlay
- Support requests and feedback you send us

**Information Collected Automatically:**
- Device type and operating system version
- App usage statistics and crash reports (via Apple's analytics, if enabled)
- In-app purchase history (managed by Apple)

**Information We Do NOT Collect:**
- Your precise location
- Your contacts or address book
- Personal identification information beyond what you voluntarily provide`,
            },
            {
              title: "3. How We Use Your Information",
              content: `We use the collected information to:
- Provide, maintain, and improve the Soccer Board app
- Process in-app purchases and subscriptions (via Apple)
- Send technical notices and support messages
- Analyze usage patterns to improve user experience
- Comply with legal obligations

All AI features (Kicko's tactical suggestions) run entirely on-device using Apple Intelligence. We never transmit your tactical data to our servers for AI processing.`,
            },
            {
              title: "4. Data Storage and Security",
              content: `Your tactical boards, formations, and team data are stored:
- Locally on your device
- In iCloud (if you have iCloud sync enabled in iOS settings)

We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.`,
            },
            {
              title: "5. Third-Party Services",
              content: `Soccer Board uses the following third-party services:

- **Apple App Store**: For app distribution and in-app purchases. Subject to Apple's Privacy Policy.
- **Apple Intelligence**: For on-device AI features. No data leaves your device.
- **Apple iCloud**: For optional data sync between your devices.
- **Firebase Crashlytics** (optional): For crash reporting to improve stability.

We do not sell, trade, or rent your personal information to third parties.`,
            },
            {
              title: "6. Your Rights (GDPR / CCPA)",
              content: `If you are located in the European Economic Area (EEA) or California, you have the following rights:

- **Access**: Request a copy of your personal data
- **Rectification**: Correct inaccurate personal data
- **Erasure**: Request deletion of your personal data
- **Portability**: Receive your data in a structured format
- **Objection**: Object to processing of your personal data

To exercise these rights, contact us at privacy@soccerboard.app`,
            },
            {
              title: "7. Children's Privacy",
              content: `Soccer Board is not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.`,
            },
            {
              title: "8. Changes to This Policy",
              content: `We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last updated" date at the top of this policy and sending an in-app notification for material changes.`,
            },
            {
              title: "9. Contact Us",
              content: `If you have questions about this Privacy Policy, please contact us:

Email: privacy@soccerboard.app
Website: https://soccerboard.app
Address: Nextechia, Mexico City, Mexico`,
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
              <div className="text-white/60 leading-relaxed whitespace-pre-line text-sm">
                {section.content.split("\n").map((line, i) => {
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return <p key={i} className="font-semibold text-white/80 mt-3 mb-1">{line.slice(2, -2)}</p>;
                  }
                  if (line.startsWith("- **")) {
                    const parts = line.slice(4).split("**:");
                    return <p key={i} className="mb-1 ml-4">• <strong className="text-white/80">{parts[0]}</strong>:{parts[1]}</p>;
                  }
                  if (line.startsWith("- ")) {
                    return <p key={i} className="mb-1 ml-4">• {line.slice(2)}</p>;
                  }
                  return line ? <p key={i} className="mb-2">{line}</p> : <br key={i} />;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
