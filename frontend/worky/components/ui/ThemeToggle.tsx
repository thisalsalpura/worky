"use client";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export function ThemeToggle() {

    const { resolvedTheme, setTheme } = useTheme();

    const isDark = resolvedTheme === 'dark';

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="w-12 h-12 flex items-center justify-center bg-primary hover:bg-on-primary rounded-full transition-colors duration-300 cursor-pointer group"
            aria-label="Toggle Theme"
        >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="text-lg text-on-primary group-hover:text-primary" />
        </button>
    );
}