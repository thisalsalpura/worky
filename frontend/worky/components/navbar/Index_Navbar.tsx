'use client';
import { useState } from 'react';
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
            <div className="w-full flex flex-col gap-8 p-5 sm:p-10">
                <Button name='Register' href='/login' btn_class='w-full' front_classes='h-10 border-2 border-black' back_classes='h-10 bg-custom-pink' />
                <Button name='Login' href='/login' btn_class='w-full' front_classes='h-10 border-2 border-black' back_classes='h-10 bg-custom-purple' />
            </div>
        );
    };

    return (
        <nav className="top-0 left-0 right-0 sticky pt-2 px-2 z-50">
            <div className="max-w-7xl mx-auto h-auto flex items-center justify-between bg-custom-white-transparent border border-white backdrop:blur-2xl rounded-2xl px-5 py-2.5">
                <Link href="/">
                    <Image
                        src="/icons/logo-black.svg"
                        alt="worky-logo"
                        width={100}
                        height={50}
                        priority
                    />
                </Link>

                <div className="hidden md:flex flex-row items-center gap-8">
                    <Button name='Register' href='/login' btn_class='w-40' front_classes='h-10 border-2 border-black' back_classes='h-10 bg-custom-pink' />
                    <Button name='Login' href='/login' btn_class='w-40' front_classes='h-10 border-2 border-black' back_classes='h-10 bg-custom-purple' />
                </div>

                <button className="flex md:hidden transition-all duration-300 ease-in-out" onClick={toggleMenu} type="button" aria-label="Toggle menu">
                    <Image
                        src={`/icons/${isOpen ? 'close' : 'menu'}.svg`}
                        alt={`${isOpen ? 'close' : 'menu'}-icon`}
                        width={50}
                        height={50}
                        priority
                    />
                </button>
            </div>

            <div className={`${isOpen ? "flex md:hidden right-0 left-0" : "hidden -right-full"} absolute mt-2 w-11/12 mx-auto h-auto items-center justify-center bg-custom-white-transparent border border-white backdrop:blur-2xl rounded-lg transition-all duration-300 ease-in-out`}>
                {navItems()}
            </div>
        </nav>
    );
}

export default Index_Navbar;