import React from 'react';
import { social_medias } from '@/constants/social_medias';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className='max-w-7xl mx-auto h-auto flex items-center justify-center p-5'>
            <div className='w-full h-full flex flex-col bg-custom-light-black border-2 border-custom-light-black rounded-lg p-10 gap-8'>
                <h2 className="text-2xl md:text-3xl text-white text-left font-heading">Worky</h2>

                <div className="w-full h-0.5 bg-white opacity-10" />

                <div className="w-full h-auto grid grid-cols-12 items-start justify-center gap-4">
                    <div className="col-span-12 sm:col-span-3 flex flex-col items-start justify-center gap-4">
                        <h2 className="text-lg text-white text-left font-body font-semibold">Company</h2>

                        <ul className="text-sm text-white text-left font-body space-y-1">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-span-12 sm:col-span-3 flex flex-col items-start justify-center gap-4">
                        <h2 className="text-lg text-white text-left font-body font-semibold">Company</h2>

                        <ul className="text-sm text-white text-left font-body space-y-1">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-span-12 sm:col-span-3 flex flex-col items-start justify-center gap-4">
                        <h2 className="text-lg text-white text-left font-body font-semibold">Company</h2>

                        <ul className="text-sm text-white text-left font-body space-y-1">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-span-12 sm:col-span-3 flex flex-col items-start justify-center gap-4">
                        <h2 className="text-lg text-white text-left font-body font-semibold">Company</h2>

                        <ul className="text-sm text-white text-left font-body space-y-1">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="w-full h-0.5 bg-white opacity-10" />

                <div className="w-full h-auto grid grid-cols-12 items-start justify-center gap-4">
                    <div className="col-span-12 sm:col-span-6 flex flex-col sm:flex-row items-start justify-center sm:justify-start gap-4">
                        <p className="text-left text-white font-body font-semibold">Follow us</p>

                        <div className="flex flex-wrap justify-start gap-4">
                            {social_medias.map((social_media) => (
                                <FontAwesomeIcon key={social_media.id} icon={social_media.icon} href={social_media.href} className="text-2xl text-white cursor-pointer hover:-rotate-12 hover:scale-105 transition-all duration-300 ease-in-out" />
                            ))}
                        </div>
                    </div>
                    <div className="mt-4 sm:mt-0 col-span-12 sm:col-span-6 flex flex-col sm:flex-row items-start sm:items-end justify-center sm:justify-end gap-4">
                        <p className="text-left sm:text-right text-white font-body font-semibold">Mobile App</p>

                        <div className="flex flex-wrap justify-start sm:justify-end gap-4">
                            <FontAwesomeIcon icon={faGooglePlay} className="text-2xl text-white cursor-pointer hover:-rotate-12 hover:scale-105 transition-all duration-300 ease-in-out" />
                            <FontAwesomeIcon icon={faApple} className="text-2xl text-white cursor-pointer hover:-rotate-12 hover:scale-105 transition-all duration-300 ease-in-out" />
                        </div>
                    </div>
                </div>

                <div className="w-full h-0.5 bg-white opacity-10" />

                <p className="text-xl text-white text-center font-heading">Copyright © 2026 Worky All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;