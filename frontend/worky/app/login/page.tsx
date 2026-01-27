'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '@/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [isLogin, setIsLogin] = useState(true);

    return (
        <main className='w-full h-full flex items-center justify-center'>
            <AnimatePresence mode="wait">
                {isLogin ? (
                    <motion.div
                        key="login"
                        initial={{ opacity: 0, x: -50 }}
                        exit={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full grid grid-cols-12"
                    >
                        <div className="h-full hidden lg:flex lg:col-span-6 items-center justify-center p-4">
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

                        <div className='h-full col-span-12 lg:col-span-6 items-center justify-center p-4'>
                            <div className="w-full h-auto flex flex-col bg-custom-light-black border-2 border-custom-light-black rounded-lg p-5 sm:p-10 gap-8">
                                <h3 className="text-2xl text-white text-left font-heading">Login</h3>

                                <div className='w-full h-auto flex flex-col gap-4'>
                                    <div className='w-full h-auto flex flex-col gap-1.5'>
                                        <label htmlFor='login_email' className="text-white text-left font-body font-semibold">Email</label>
                                        <input id="login_email" className="w-full h-10 bg-blur text-white font-body py-0.5 px-2.5 rounded-md" type="email" placeholder="Enter email" required />
                                    </div>

                                    <div className='w-full h-auto flex flex-col gap-1.5'>
                                        <label htmlFor='login_password' className="text-white text-left font-body font-semibold">Password</label>
                                        <div className="relative">
                                            <input id="login_password" className="w-full h-10 bg-blur text-white font-body py-0.5 px-2.5 pr-10 rounded-md" type={showPassword ? "text" : "password"} placeholder="Enter password" required />
                                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-white">
                                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="flex items-center justify-center gap-4">
                                        <input id="remember_me" className="h-4 w-4" type="checkbox" />
                                        <span className="text-white font-body">Remember Me</span>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <span className="text-white font-body"><a className='cursor-pointer'>Forgot Password?</a></span>
                                    </div>
                                </div>

                                <div className='w-full h-auto flex flex-col gap-4'>
                                    <Button name='Login' btn_class='w-full' front_classes='h-10 border-2 border-white' back_classes='h-10 bg-custom-pink' text_color='text-white' />

                                    <p className="text-white text-left font-body">Not Registered?</p>

                                    <Button name='Register' btn_class='w-full' front_classes='h-10 border-2 border-white' back_classes='h-10 bg-custom-purple' text_color='text-white' onClick={() => setIsLogin(false)} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="register"
                        initial={{ opacity: 0, x: 50 }}
                        exit={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full grid grid-cols-12"
                    >
                        <div className='h-full col-span-12 lg:col-span-6 items-center justify-center p-4'>
                            <div className="w-full h-auto flex flex-col bg-custom-light-black border-2 border-custom-light-black rounded-lg p-5 sm:p-10 gap-8">
                                <h3 className="text-2xl text-white text-left font-heading">Register</h3>

                                <div className='w-full h-auto flex flex-col gap-4'>
                                    <div className='w-full h-auto flex flex-col gap-1.5'>
                                        <label htmlFor='register_fname' className="text-white text-left font-body font-semibold">First Name</label>
                                        <input id="register_fname" className="w-full h-10 bg-blur text-white font-body py-0.5 px-2.5 rounded-md" type="text" placeholder="Enter first name" required />
                                    </div>

                                    <div className='w-full h-auto flex flex-col gap-1.5'>
                                        <label htmlFor='register_lname' className="text-white text-left font-body font-semibold">Last Name</label>
                                        <input id="register_lname" className="w-full h-10 bg-blur text-white font-body py-0.5 px-2.5 rounded-md" type="text" placeholder="Enter last name" required />
                                    </div>

                                    <div className='w-full h-auto flex flex-col gap-1.5'>
                                        <label htmlFor='register_email' className="text-white text-left font-body font-semibold">Email</label>
                                        <input id="register_email" className="w-full h-10 bg-blur text-white font-body py-0.5 px-2.5 rounded-md" type="email" placeholder="Enter email" required />
                                    </div>

                                    <div className='w-full h-auto flex flex-col gap-1.5'>
                                        <label htmlFor='register_password' className="text-white text-left font-body font-semibold">Password</label>
                                        <div className="relative">
                                            <input id="register_password" className="w-full h-10 bg-blur text-white font-body py-0.5 px-2.5 pr-10 rounded-md" type={showPassword ? "text" : "password"} placeholder="Enter password" required />
                                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-white">
                                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-full h-auto flex flex-col gap-4'>
                                    <Button name='Register' btn_class='w-full' front_classes='h-10 border-2 border-white' back_classes='h-10 bg-custom-pink' text_color='text-white' />

                                    <p className="text-white text-left font-body">Already Registered?</p>

                                    <Button name='Login' btn_class='w-full' front_classes='h-10 border-2 border-white' back_classes='h-10 bg-custom-purple' text_color='text-white' onClick={() => setIsLogin(true)} />
                                </div>
                            </div>
                        </div>

                        <div className="h-full hidden lg:flex lg:col-span-6 items-center justify-center p-4">
                            <h2 className="absolute text-9xl text-center font-heading custom-text-style custom-text-style-purple">Worky</h2>

                            <div className="w-auto h-auto flex items-center justify-center z-10">
                                <Image
                                    src="/images/register-img.svg"
                                    alt="register-image"
                                    width={400}
                                    height={400}
                                    className='object-cover aspect-square'
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}

export default Login;