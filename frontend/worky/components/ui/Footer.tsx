'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { social_medias } from '@/constants/social_medias';
import { Heading, Text } from '@/components/ui/Typography';

export function Footer() {
    return (
        <footer className='mx-auto max-w-7xl w-full h-auto flex items-center justify-center p-4'>
            <div className='w-full h-full flex flex-col bg-on-background border-2 border-on-background rounded-lg p-4 md:p-8 gap-y-8'>
                <Link href='/'>
                    <Heading level='h3' as='h2' className='text-background text-left'>Worky</Heading>
                </Link>

                <div className='w-full h-0.5 bg-outline opacity-20' />

                <div className='w-full h-auto grid grid-cols-12 items-start justify-center gap-y-4 md:gap-x-4'>
                    <div className='col-span-12 md:col-span-3 flex flex-col items-start justify-center gap-y-4'>
                        <Heading level='h6' as='h2' className='text-background text-left'>Company</Heading>

                        <ul className='space-y-1'>
                            <li><Text as='a' href='#' variant='body' className='text-background opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'>About Us</Text></li>
                            <li><Text as='a' href='#' variant='body' className='text-background opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'>Careers</Text></li>
                            <li><Text as='a' href='#' variant='body' className='text-background opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'>Press</Text></li>
                            <li><Text as='a' href='#' variant='body' className='text-background opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'>Blog</Text></li>
                            <li><Text as='a' href='#' variant='body' className='text-background opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'>Contact</Text></li>
                        </ul>
                    </div>

                    <div className='col-span-12 md:col-span-3 flex flex-col items-start justify-center gap-y-4'>
                        <Heading level='h6' as='h2' className='text-background text-left'>Services</Heading>

                        <ul className='space-y-1'>
                            <li><Text as='a' href='#' variant='body' className='text-background opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'>Features</Text></li>
                            <li><Text as='a' href='#' variant='body' className='text-background opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'>Pricing</Text></li>
                            <li><Text as='a' href='#' variant='body' className='text-background opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'>Support</Text></li>
                            <li><Text as='a' href='#' variant='body' className='text-background opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'>API</Text></li>
                            <li><Text as='a' href='#' variant='body' className='text-background opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'>Integrations</Text></li>
                        </ul>
                    </div>

                    <div className='col-span-12 md:col-span-3 flex flex-col items-start justify-center gap-y-4'>
                        <Heading level='h6' as='h2' className='text-background text-left'>Resources</Heading>

                        <ul className='space-y-1'>
                            <li><Text as='a' href='#' variant='body' className='text-background opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'>Documentation</Text></li>
                            <li><Text as='a' href='#' variant='body' className='text-background opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'>Help Center</Text></li>
                            <li><Text as='a' href='#' variant='body' className='text-background opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'>Community</Text></li>
                            <li><Text as='a' href='#' variant='body' className='text-background opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'>Tutorials</Text></li>
                            <li><Text as='a' href='#' variant='body' className='text-background opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'>Webinars</Text></li>
                        </ul>
                    </div>

                    <div className='col-span-12 md:col-span-3 flex flex-col items-start justify-center gap-y-4'>
                        <Heading level='h6' as='h2' className='text-background text-left'>Legal</Heading>

                        <ul className='space-y-1'>
                            <li><Text as='a' href='#' variant='body' className='text-background opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'>Privacy Policy</Text></li>
                            <li><Text as='a' href='#' variant='body' className='text-background opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'>Terms of Service</Text></li>
                            <li><Text as='a' href='#' variant='body' className='text-background opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'>Cookie Policy</Text></li>
                            <li><Text as='a' href='#' variant='body' className='text-background opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'>GDPR</Text></li>
                            <li><Text as='a' href='#' variant='body' className='text-background opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out'>Compliance</Text></li>
                        </ul>
                    </div>
                </div>

                <div className='w-full h-0.5 bg-outline opacity-20' />

                <div className='w-full h-auto grid grid-cols-12 items-start justify-center gap-y-4 md:gap-x-4'>
                    <div className='col-span-12 md:col-span-6 flex flex-col md:flex-row items-start justify-center md:justify-start gap-y-4 md:gap-x-4'>
                        <Text variant='body' className='text-background text-left'>
                            <span className='font-semibold'>Follow Us</span>
                        </Text>

                        <div className='flex flex-wrap justify-start gap-4'>
                            {social_medias.map((social_media) => (
                                <a key={social_media.id} href={social_media.href} aria-label={`Visit Our ${social_media.name} Page`} target='_blank' rel='noopener noreferrer'>
                                    <FontAwesomeIcon icon={social_media.icon} className='text-2xl text-background hover:-rotate-12 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer' />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className='mt-4 md:mt-0 col-span-12 md:col-span-6 flex flex-col md:flex-row items-start md:items-end justify-center md:justify-end gap-y-4 md:gap-x-4'>
                        <Text variant='body' className='text-background text-left md:text-right'>
                            <span className='font-semibold'>Mobile App</span>
                        </Text>

                        <div className='flex flex-wrap justify-start md:justify-end gap-4'>
                            <a href='#' aria-label='Download on Google Play' target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={faGooglePlay} className='text-2xl text-background hover:-rotate-12 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer' />
                            </a>

                            <a href='#' aria-label='Download on App Store' target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={faApple} className='text-2xl text-background hover:-rotate-12 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='w-full h-0.5 bg-outline opacity-20' />

                <Heading level='h4' as='p' className='text-background text-center'>Copyright © 2026 Worky All Rights Reserved.</Heading>
            </div>
        </footer>
    );
}