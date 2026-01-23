'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button';

const Index_Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((previousOpen) => !previousOpen)
    };

    const navItems = () => {
        return (
            <div className="w-full flex flex-col items-center gap-8 p-10">
                <Button name='Register' fullWidth front_classes='h-10 w-full border-2 border-black' back_classes='h-10 w-full bg-custom-pink' />
                <Button name='Login' fullWidth front_classes='h-10 w-full border-2 border-black' back_classes='h-10 w-full bg-custom-purple' />
            </div>
        );
    };

    return (
        <nav className="sticky px-2 pt-2 top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto h-auto flex items-center justify-between bg-custom-white-transparent border border-white backdrop:blur-2xl rounded-2xl px-5 py-2.5">
                <Link href="/">
                    <Image
                        src="/icons/logo.svg"
                        alt="worky-logo"
                        width={100}
                        height={50}
                        priority
                    />
                </Link>

                <div className="hidden md:flex flex-row items-center gap-8">
                    <Button name='Register' front_classes='h-10 w-40 border-2 border-black' back_classes='h-10 w-40 bg-custom-pink' />
                    <Button name='Login' front_classes='h-10 w-40 border-2 border-black' back_classes='h-10 w-40 bg-custom-purple' />
                </div>

                <div className="flex md:hidden transition-all duration-300 ease-in-out">
                    <Image
                        onClick={toggleMenu}
                        src={`icons/${isOpen ? 'close' : 'menu'}.svg`}
                        alt={`${isOpen ? 'close' : 'menu'}-icon`}
                        width={50}
                        height={50}
                        priority
                    />
                </div>
            </div>

            <div className={`absolute mt-4 w-11/12 mx-auto h-auto items-center justify-center bg-custom-white-transparent border border-white backdrop:blur-2xl rounded-lg transition-all duration-300 ease-in-out ${isOpen ? "flex md:hidden right-0 left-0" : "hidden -right-full"}`}>
                {navItems()}
            </div>
        </nav>
    );
}

export default Index_Navbar;