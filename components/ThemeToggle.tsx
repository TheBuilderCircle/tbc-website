"use client";

import { useTheme } from "@/lib/theme";
import { SunIcon, MoonIcon } from "@/components/icons";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = !mounted || theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="icon-btn"
    >
      {isDark ? <SunIcon size={17} color="currentColor" /> : <MoonIcon size={17} color="currentColor" />}
    </button>
  );
}
