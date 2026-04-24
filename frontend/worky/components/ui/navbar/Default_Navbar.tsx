'use client';
import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button";
import { ThemeToggle } from "../ThemeToggle";
import { CustomTextField } from "../mui/CustomTextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass, faBell, faUser, faCircleChevronUp, faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

export function Default_Navbar() {

    const { resolvedTheme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    const [isCaretOpen, setIsCaretOpen] = useState(false);

    const [searchText, setSearchText] = useState("");

    const [errors, setErrors] = useState<Record<string, string>>({});

    const isDark = resolvedTheme === 'dark';

    const toggleMenu = () => {
        setIsOpen((previousOpen) => !previousOpen)
    };

    const toggleCaret = () => {
        setIsCaretOpen((previousCaret) => !previousCaret)
    };

    const navItems = () => {
        return (
            <div className="w-full flex flex-col p-5 sm:p-10 gap-y-8">
                <Button name="Switch to Selling" btnContainer="w-full text-on-primary bg-primary hover:text-primary hover:bg-on-primary group" btnPing="bg-on-primary group-hover:bg-primary" btnPingDot="bg-on-primary group-hover:bg-primary" />

                <div className="w-full h-auto flex flex-row items-center justify-center gap-x-4">
                    <button className="w-auto h-12 flex-1 flex flex-row items-center justify-center text-on-primary font-base font-semibold bg-primary border border-outline hover:text-primary hover:bg-on-primary rounded-xl px-2 md:px-5 gap-x-2 md:gap-x-5 cursor-pointer group">
                        <FontAwesomeIcon icon={faBars} className="text-lg text-on-primary group-hover:text-primary" />
                        <span className="text-on-primary group-hover:text-primary">All Categories</span>
                    </button>

                    <button className="w-12 h-12 flex items-center justify-center bg-primary border border-outline hover:bg-on-primary rounded-full transition-colors duration-300 cursor-pointer group">
                        <FontAwesomeIcon icon={faBell} className="text-lg text-on-primary group-hover:text-primary" />
                    </button>

                    <button className="w-12 h-12 flex items-center justify-center bg-primary border border-outline hover:bg-on-primary rounded-full transition-colors duration-300 cursor-pointer group">
                        <FontAwesomeIcon icon={faUser} className="text-lg text-on-primary group-hover:text-primary" />
                    </button>
                </div>

                <div className="w-full flex-1">
                    <CustomTextField
                        label="Search Here"
                        placeholder="Search Services, Freelancers or Projects"
                        type="text"
                        variant="outlined"
                        fullWidth
                        endIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                            setErrors(prev => ({ ...prev, searchText: "" }));
                        }}
                        error={!!errors.searchText}
                        helperText={errors.searchText}
                    />
                </div>
            </div>
        );
    };

    return (
        <nav className="top-0 left-0 right-0 sticky pt-2 px-2 overflow-x-clip z-50">
            <div className="relative mx-auto max-w-7xl">
                <div className="h-auto flex items-center justify-between bg-blur border border-outline backdrop-blur-2xl rounded-2xl px-5 py-2.5">
                    <Link href="/">
                        <Image
                            suppressHydrationWarning
                            src={`/icons/logo-${isDark ? "white" : "black"}.svg`}
                            alt="worky-logo"
                            width={96}
                            height={48}
                            priority
                        />
                    </Link>

                    <div className="flex items-center gap-x-8">
                        <div className="hidden md:flex flex-row items-center gap-x-8">
                            <Button name="Switch to Selling" btnContainer="w-auto text-on-primary bg-primary hover:text-primary hover:bg-on-primary group" btnPing="bg-on-primary group-hover:bg-primary" btnPingDot="bg-on-primary group-hover:bg-primary" />
                        </div>

                        <div className="w-auto h-full flex flex-row items-center justify-center gap-x-4">
                            <ThemeToggle />

                            <button onClick={toggleCaret} className="w-12 h-12 hidden md:flex items-center justify-center bg-primary border border-outline hover:bg-on-primary rounded-full transition-colors duration-300 cursor-pointer group">
                                <FontAwesomeIcon icon={isCaretOpen ? faCircleChevronDown : faCircleChevronUp} className="text-lg text-on-primary group-hover:text-primary" />
                            </button>
                        </div>

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
                    className={`mt-2 absolute left-0 right-0 h-auto hidden md:flex flex-row items-center justify-between bg-on-background border border-outline rounded-2xl p-5 gap-x-8 transition-all duration-300 ease-in-out ${isCaretOpen ? "translate-x-0 opacity-100 visible pointer-events-auto" : "translate-x-full opacity-0 invisible pointer-events-none"} overflow-hidden z-50`}
                    aria-hidden={!isCaretOpen}
                >
                    <button className="w-auto h-12 flex flex-row items-center justify-center text-on-primary font-base font-semibold bg-primary border border-outline hover:text-primary hover:bg-on-primary rounded-xl px-5 gap-x-5 cursor-pointer group">
                        <FontAwesomeIcon icon={faBars} className="text-lg text-on-primary group-hover:text-primary" />
                        <span className="text-on-primary group-hover:text-primary">All Categories</span>
                    </button>

                    <div className="w-auto flex-1">
                        <CustomTextField
                            label="Search Here"
                            placeholder="Search Services, Freelancers or Projects"
                            type="text"
                            variant="outlined"
                            fullWidth
                            endIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value);
                                setErrors(prev => ({ ...prev, searchText: "" }));
                            }}
                            error={!!errors.searchText}
                            helperText={errors.searchText}
                        />
                    </div>

                    <div className="w-auto h-full flex flex-row items-center justify-center gap-x-4">
                        <button className="w-12 h-12 flex items-center justify-center bg-primary border border-outline hover:bg-on-primary rounded-full transition-colors duration-300 cursor-pointer group">
                            <FontAwesomeIcon icon={faBell} className="text-lg text-on-primary group-hover:text-primary" />
                        </button>

                        <button className="w-12 h-12 flex items-center justify-center bg-primary border border-outline hover:bg-on-primary rounded-full transition-colors duration-300 cursor-pointer group">
                            <FontAwesomeIcon icon={faUser} className="text-lg text-on-primary group-hover:text-primary" />
                        </button>
                    </div>
                </div>

                <div
                    className={`mt-2 absolute left-0 right-0 flex md:hidden items-center justify-center bg-on-background border border-outline rounded-2xl transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0 opacity-100 visible pointer-events-auto" : "translate-x-full opacity-0 invisible pointer-events-none"} overflow-hidden z-50`}
                    aria-hidden={!isOpen}
                >
                    {navItems()}
                </div>
            </div>
        </nav>
    );
}