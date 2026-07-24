"use client";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      className="flex w-full items-center justify-between rounded-[3px] border px-3 py-2 text-left transition-colors hover:border-[var(--accent)]"
      style={{ borderColor: "var(--line)", background: "var(--surface-2)" }}
    >
      <span className="tag-label">{isDark ? "Dark mode" : "Light mode"}</span>
      <span
        className="relative inline-flex h-5 w-9 items-center rounded-full transition-colors"
        style={{ background: isDark ? "var(--accent)" : "var(--line)" }}
      >
        <span
          className="inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform"
          style={{ transform: isDark ? "translateX(18px)" : "translateX(2px)" }}
        />
      </span>
    </button>
  );
}
