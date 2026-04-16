import React from 'react';
import Link from 'next/link';
import { social_medias } from '@/constants/social_medias';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
    return (
        <footer className='mx-auto max-w-7xl w-full h-auto flex items-center justify-center p-5'>
            <div className='w-full h-full flex flex-col bg-on-background border-2 border-on-background rounded-lg p-5 sm:p-10 gap-8'>
                <Link href="/">
                    <h2 className="text-2xl md:text-3xl text-background text-left font-heading">Worky</h2>
                </Link>

                <div className="w-full h-0.5 bg-outline" />

                <div className="w-full h-auto grid grid-cols-12 items-start justify-center gap-4">
                    <div className="col-span-12 sm:col-span-3 flex flex-col items-start justify-center gap-4">
                        <h2 className="text-lg text-background text-left font-base font-semibold">Company</h2>

                        <ul className="text-sm text-background text-left font-base space-y-1">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-span-12 sm:col-span-3 flex flex-col items-start justify-center gap-4">
                        <h2 className="text-lg text-background text-left font-base font-semibold">Services</h2>

                        <ul className="text-sm text-background text-left font-base space-y-1">
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">API</a></li>
                            <li><a href="#">Integrations</a></li>
                        </ul>
                    </div>

                    <div className="col-span-12 sm:col-span-3 flex flex-col items-start justify-center gap-4">
                        <h2 className="text-lg text-background text-left font-base font-semibold">Resources</h2>

                        <ul className="text-sm text-background text-left font-base space-y-1">
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Tutorials</a></li>
                            <li><a href="#">Webinars</a></li>
                        </ul>
                    </div>

                    <div className="col-span-12 sm:col-span-3 flex flex-col items-start justify-center gap-4">
                        <h2 className="text-lg text-background text-left font-base font-semibold">Legal</h2>

                        <ul className="text-sm text-background text-left font-base space-y-1">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                            <li><a href="#">GDPR</a></li>
                            <li><a href="#">Compliance</a></li>
                        </ul>
                    </div>
                </div>

                <div className="w-full h-0.5 bg-outline" />

                <div className="w-full h-auto grid grid-cols-12 items-start justify-center gap-4">
                    <div className="col-span-12 sm:col-span-6 flex flex-col sm:flex-row items-start justify-center sm:justify-start gap-4">
                        <p className="text-background text-left font-base font-semibold">Follow Us</p>

                        <div className="flex flex-wrap justify-start gap-4">
                            {social_medias.map((social_media) => (
                                <a key={social_media.id} href={social_media.href} aria-label={`Visit Our ${social_media.name} Page`} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={social_media.icon} className="text-2xl text-background cursor-pointer hover:-rotate-12 hover:scale-105 transition-all duration-300 ease-in-out" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4 sm:mt-0 col-span-12 sm:col-span-6 flex flex-col sm:flex-row items-start sm:items-end justify-center sm:justify-end gap-4">
                        <p className="text-background text-left sm:text-right font-base font-semibold">Mobile App</p>

                        <div className="flex flex-wrap justify-start sm:justify-end gap-4">
                            <a href="#" aria-label="Download on Google Play" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGooglePlay} className="text-2xl text-background cursor-pointer hover:-rotate-12 hover:scale-105 transition-all duration-300 ease-in-out" />
                            </a>

                            <a href="#" aria-label="Download on App Store" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faApple} className="text-2xl text-background cursor-pointer hover:-rotate-12 hover:scale-105 transition-all duration-300 ease-in-out" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full h-0.5 bg-outline" />

                <p className="text-xl text-background text-center font-heading">Copyright © 2026 Worky All Rights Reserved.</p>
            </div>
        </footer>
    );
}