import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soccer Board — AI Tactical Whiteboard for Coaches",
  description:
    "Draw formations, plan plays, and get AI-powered tactical suggestions. The premium iOS tactical board for soccer coaches who think three moves ahead.",
  keywords: [
    "soccer tactics",
    "football coaching",
    "tactical board",
    "formations",
    "coach app",
    "AI coach",
    "soccer whiteboard",
    "football tactics",
    "team management",
    "iOS soccer app",
  ],
  authors: [{ name: "Nextechia" }],
  creator: "Nextechia",
  publisher: "Nextechia",
  openGraph: {
    title: "Soccer Board — AI Tactical Whiteboard for Coaches",
    description:
      "Draw formations, plan plays, and get AI-powered tactical suggestions. The premium iOS app for soccer coaches.",
    url: "https://soccer-board-landing.vercel.app",
    siteName: "Soccer Board",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Soccer Board — AI Tactical Whiteboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soccer Board — AI Tactical Whiteboard for Coaches",
    description:
      "Draw formations, plan plays, and get AI-powered tactical suggestions. Premium iOS app for coaches.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://soccer-board-landing.vercel.app",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Soccer Board",
  description:
    "AI-powered tactical whiteboard for soccer coaches. Draw formations, plan plays, manage teams.",
  operatingSystem: "iOS 17+",
  applicationCategory: "SportsApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "847",
  },
  author: {
    "@type": "Organization",
    name: "Nextechia",
  },
  inLanguage: ["en", "es", "fr", "zh", "ar"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-surface text-white antialiased">{children}</body>
    </html>
  );
}
