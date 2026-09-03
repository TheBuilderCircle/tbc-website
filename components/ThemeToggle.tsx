"use client";

import { useTheme } from "@/lib/theme";
import { SunIcon, MoonIcon } from "@/components/icons";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title={mounted && theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        background: "rgba(255, 255, 255, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.16)",
        borderRadius: 8,
        width: 36,
        height: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "#ffffff",
        transition: "background-color 0.2s ease, border-color 0.2s ease",
      }}
    >
      {mounted && theme === "dark" ? (
        <SunIcon size={18} color="#24D155" />
      ) : (
        <MoonIcon size={18} color="#ffffff" />
      )}
    </button>
  );
}
