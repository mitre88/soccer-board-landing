import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { APP_NAME, type Locale } from "@/content/site";

// 1200 x 630 social card built from real content: the shipped app icon, the store name and
// subtitle above a section of a real 2.0 board capture (assets/og/board-pitch.png, 894 x 410,
// drawn at its own size). Night-match palette (dark tokens of Brand/palette.json, as sRGB hex).
const SUBTITLE: Record<Locale, string> = {
  en: "AI Tactical Whiteboard",
  es: "Pizarra táctica con IA",
};

const asset = (file: string) => readFile(path.join(process.cwd(), "assets", "og", file));

// The renderer spaces some word pairs unevenly; laying words out with a fixed gap keeps them even.
function Words({ text, gap, style }: { text: string; gap: number; style: React.CSSProperties }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", columnGap: gap, ...style }}>
      {text.split(" ").map((word, index) => (
        <span key={index}>{word}</span>
      ))}
    </div>
  );
}

export async function renderOgImage(locale: Locale) {
  const [bold, regular, icon, pitch] = await Promise.all([
    asset("Geist-Bold.ttf"),
    asset("Geist-Regular.ttf"),
    asset("app-icon.png"),
    asset("board-pitch.png"),
  ]);
  const dataUri = (png: Buffer) => `data:image/png;base64,${png.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0C120F",
          backgroundImage:
            "radial-gradient(circle 760px at 0px 0px, rgba(252, 245, 223, 0.06), rgba(252, 245, 223, 0))",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", width: 894 }}>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={dataUri(icon)} width={96} height={96} style={{ borderRadius: 22 }} />
          <div style={{ display: "flex", flexDirection: "column", marginLeft: 28 }}>
            <Words
              text={APP_NAME}
              gap={11}
              style={{
                fontSize: 56,
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#F0F4F2",
              }}
            />
            <Words
              text={SUBTITLE[locale]}
              gap={6}
              style={{ marginTop: 8, fontSize: 30, fontWeight: 400, color: "#ACB3AF" }}
            />
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img
          src={dataUri(pitch)}
          width={894}
          height={410}
          style={{
            marginTop: 36,
            borderRadius: 12,
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3), 0 18px 36px rgba(0, 2, 0, 0.55)",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Geist", data: bold, weight: 700, style: "normal" },
        { name: "Geist", data: regular, weight: 400, style: "normal" },
      ],
    },
  );
}
