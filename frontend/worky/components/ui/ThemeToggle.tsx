'use client';
import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ThemeToggle() {

    const { resolvedTheme, setTheme } = useTheme();

    const isDark = resolvedTheme === 'dark';

    const mounted = useSyncExternalStore(() => () => { }, () => true, () => false);

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            className='w-12 h-12 flex items-center justify-center bg-primary hover:bg-on-primary border border-outline rounded-full transition-colors duration-300 cursor-pointer group'
        >
            {mounted && <FontAwesomeIcon icon={isDark ? faSun : faMoon} className='text-lg text-on-primary group-hover:text-primary' />}
        </button>
    );
}