"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

type SyncWindow = Window & { __sbSyncSources?: () => void };

function effectiveDark(): boolean {
  const forced = document.documentElement.getAttribute("data-theme");
  if (forced === "dark") return true;
  if (forced === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

// Switch between day (light) and night (dark). The page follows the system until the visitor
// presses it; the choice is kept in localStorage on this device only.
export function ThemeToggle({ label, className = "" }: { label: string; className?: string }) {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    const read = () => setDark(effectiveDark());
    read();
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", read);
    window.addEventListener("sb-theme", read);
    return () => {
      media.removeEventListener("change", read);
      window.removeEventListener("sb-theme", read);
    };
  }, []);

  function toggle() {
    const next = effectiveDark() ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("sb-theme", next);
    } catch {
      // storage unavailable: the choice lasts for this page view
    }
    (window as SyncWindow).__sbSyncSources?.();
    window.dispatchEvent(new Event("sb-theme"));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark ?? undefined}
      title={label}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-2 transition-colors duration-150 hover:bg-control hover:text-ink ${className}`}
    >
      <MoonIcon className="only-light h-[20px] w-[20px]" />
      <SunIcon className="only-dark h-[20px] w-[20px]" />
      <span className="sr-only">{label}</span>
    </button>
  );
}
