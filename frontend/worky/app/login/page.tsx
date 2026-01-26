'use client';
import React from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const Login = () => {
    return (
        <main className='w-full h-full flex items-center justify-center'>
            <AnimatePresence mode="wait">
                <motion.div
                    key="login"
                    initial={{ opacity: 0, x: -50 }}
                    exit={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full grid grid-cols-12 p-4"
                >
                    <div className="h-full hidden lg:flex lg:col-span-7 items-center justify-center p-4">
                        <h2 className="absolute text-9xl text-center font-heading custom-text-style custom-text-style-purple">Worky</h2>

                        <div className="w-auto h-auto flex items-center justify-center z-10">
                            <Image
                                src="/images/login-img.svg"
                                alt="login-image"
                                width={400}
                                height={400}
                                className='object-cover aspect-square'
                                priority
                            />
                        </div>
                    </div>

                    <div className='w-full col-span-12 lg:col-span-5 items-center justify-center p-4'>

                    </div>
                </motion.div>
            </AnimatePresence>
        </main>
    );
}

export default Login;