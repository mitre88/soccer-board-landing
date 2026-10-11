import type { Config } from "tailwindcss";

// Colors come from Brand/palette.json (OKLCH). Each token is stored as "L C H" channels in
// app/globals.css so light, dark and increased-contrast values switch without dark: variants.
const token = (name: string) => `oklch(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        canvas: token("canvas"),
        surface: token("surface"),
        control: token("control-fill"),
        hairline: token("hairline"),
        ink: {
          DEFAULT: token("ink"),
          2: token("ink-2"),
          3: token("ink-3"),
        },
        tactic: {
          DEFAULT: token("tactic"),
          on: token("on-tactic"),
          ink: token("tactic-ink"),
        },
        suggestion: {
          ink: token("suggestion-ink"),
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          '"SF Pro Display"',
          "system-ui",
          '"Segoe UI"',
          '"Helvetica Neue"',
          "sans-serif",
        ],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "18px",
        xl: "26px",
      },
      maxWidth: {
        container: "1200px",
        measure: "65ch",
      },
    },
  },
  plugins: [],
};

export default config;
