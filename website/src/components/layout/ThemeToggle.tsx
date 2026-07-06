"use client";

import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "day" ? "night" : "day"} mode`}
      className="glass-panel fixed right-5 top-5 z-50 flex h-9 w-16 items-center rounded-full p-1 shadow-[0_4px_20px_var(--shadow-soft)] transition md:right-8 md:top-6"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent-glow)] text-sm text-[#171717] transition-transform duration-300 ${
          theme === "day" ? "translate-x-0" : "translate-x-7"
        }`}
      >
        {theme === "day" ? "☀" : "☾"}
      </span>
    </button>
  );
}
