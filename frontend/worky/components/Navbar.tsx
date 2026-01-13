import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

const Navbar = () => {
    return (
        <nav className="fixed p-2 top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto h-auto flex items-center justify-between bg-white-transparent border border-white backdrop:blur-2xl rounded-2xl px-5 py-2.5">
                <Link href="/">
                    <Image
                        src="/logo.svg"
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
            </div>
        </nav>
    );
}

export default Navbar;