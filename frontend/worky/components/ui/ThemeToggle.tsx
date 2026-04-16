"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export function ThemeToggle() {

    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    if (!mounted) {
        return;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-12 h-12 flex items-center justify-center bg-primary hover:bg-on-primary rounded-full transition-colors duration-300 cursor-pointer group"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <FontAwesomeIcon icon={faSun} className="text-lg text-on-primary group-hover:text-primary" />
            ) : (
                <FontAwesomeIcon icon={faMoon} className="text-lg text-on-primary group-hover:text-primary" />
            )}
        </button>
    );
}