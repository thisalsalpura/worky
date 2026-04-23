'use client';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../Button';
import { ThemeToggle } from '../ThemeToggle';

export function Index_Navbar() {

    const { resolvedTheme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    const isDark = resolvedTheme === 'dark';

    const toggleMenu = () => {
        setIsOpen((previousOpen) => !previousOpen)
    };

    const navItems = () => {
        return (
            <div className="w-full flex flex-col p-5 sm:p-10 gap-8">
                <Button name="Register" href="/login" btnContainer="w-full text-on-primary bg-primary hover:text-primary hover:bg-on-primary group" btnPing="bg-on-primary group-hover:bg-primary" btnPingDot="bg-on-primary group-hover:bg-primary" />
                <Button name="Login" href="/login" btnContainer="w-full text-on-primary bg-primary hover:text-primary hover:bg-on-primary group" btnPing="bg-on-primary group-hover:bg-primary" btnPingDot="bg-on-primary group-hover:bg-primary" />
            </div>
        );
    };

    return (
        <nav className="top-0 left-0 right-0 sticky pt-2 px-2 overflow-x-clip z-50">
            <div className="relative mx-auto max-w-7xl">
                <div className="h-auto flex items-center justify-between bg-blur border border-outline backdrop-blur-2xl rounded-2xl px-5 py-2.5">
                    <Link href="/">
                        <Image
                            src={`/icons/logo-${isDark ? "white" : "black"}.svg`}
                            alt="worky-logo"
                            width={96}
                            height={48}
                            priority
                        />
                    </Link>

                    <div className="flex items-center gap-8">
                        <div className="hidden md:flex flex-row items-center gap-8">
                            <Button name="Register" href="/login" btnContainer="w-auto text-on-primary bg-primary hover:text-primary hover:bg-on-primary group" btnPing="bg-on-primary group-hover:bg-primary" btnPingDot="bg-on-primary group-hover:bg-primary" />
                            <Button name="Login" href="/login" btnContainer="w-auto text-on-primary bg-primary hover:text-primary hover:bg-on-primary group" btnPing="bg-on-primary group-hover:bg-primary" btnPingDot="bg-on-primary group-hover:bg-primary" />
                        </div>

                        <ThemeToggle />

                        <button onClick={toggleMenu} className="flex md:hidden transition-all duration-300 ease-in-out cursor-pointer" type="button" aria-label="Toggle Menu">
                            <Image
                                src={`/icons/${isOpen ? 'close' : 'menu'}.svg`}
                                alt={`${isOpen ? 'close' : 'menu'}-icon`}
                                width={48}
                                height={48}
                                priority
                            />
                        </button>
                    </div>
                </div>

                <div
                    className={`mt-2 absolute left-0 right-0 flex md:hidden items-center justify-center bg-blur border border-outline backdrop-blur-2xl rounded-2xl transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0 opacity-100 visible pointer-events-auto" : "translate-x-full opacity-0 invisible pointer-events-none"} overflow-hidden z-50`}
                    aria-hidden={!isOpen}
                >
                    {navItems()}
                </div>
            </div>
        </nav>
    );
}