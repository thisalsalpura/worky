'use client';
import { useState } from 'react';
import { User } from '@/components/interfaces/User';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { CustomTextField } from '@/components/ui/CustomTextField';
import { CustomCheckbox } from '@/components/ui/CustomCheckbox';
import { Button } from '@/components/ui/Button';

const Login = () => {

    const [isLogin, setIsLogin] = useState<boolean>(true);

    const [loginData, setLoginData] = useState<User>({
        email: "",
        password: ""
    });

    const [registerData, setRegisterData] = useState<User>({
        fname: "",
        lname: "",
        email: "",
        password: "",
        mobile: "",
        role: ""
    });

    const [checked, setChecked] = useState<boolean>(false);

    const [errors, setErrors] = useState<Record<string, string>>({});

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
                            <h2 className="absolute text-9xl text-center font-heading custom-text-style" style={{ WebkitTextStroke: '1px var(--color-on-background)' }}>Worky</h2>

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
                            <div className="w-full h-auto flex flex-col bg-on-background border-2 border-on-background rounded-lg p-10 gap-8">
                                <h3 className="text-2xl text-background text-left font-heading">Login</h3>

                                <div className='w-full h-auto flex flex-col gap-8'>
                                    <CustomTextField
                                        label="Email Address"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                        value={loginData.email}
                                        onChange={(e) => {
                                            setLoginData(prev => ({ ...prev, email: e.target.value }));
                                            setErrors(prev => ({ ...prev, email: "" }));
                                        }}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                    />

                                    <CustomTextField
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        fullWidth
                                        value={loginData.password}
                                        onChange={(e) => {
                                            setLoginData(prev => ({ ...prev, password: e.target.value }));
                                            setErrors(prev => ({ ...prev, password: "" }));
                                        }}
                                        error={!!errors.password}
                                        helperText={errors.password}
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="flex items-center justify-center">
                                        <CustomCheckbox
                                            checked={checked}
                                            onChange={(e) => setChecked(e.target.checked)}
                                            label="Remember Me"
                                            slotProps={{
                                                input: { 'aria-label': 'controlled' },
                                            }}
                                        />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <span className="text-background font-base cursor-pointer border-b-2 border-b-background">Forgot Password?</span>
                                    </div>
                                </div>

                                <div className='w-full h-auto flex flex-col gap-4'>
                                    <Button name="Login" btnContainer="w-full text-on-primary bg-primary hover:text-primary hover:bg-on-primary group" btnPing="bg-on-primary group-hover:bg-primary" btnPingDot="bg-on-primary group-hover:bg-primary" />

                                    <p className="text-background text-left font-base">Not Registered?</p>

                                    <Button name="Register" onClick={() => setIsLogin(false)} btnContainer="w-full text-on-primary bg-primary hover:text-primary hover:bg-on-primary group" btnPing="bg-on-primary group-hover:bg-primary" btnPingDot="bg-on-primary group-hover:bg-primary" />
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
                            <div className="w-full h-auto flex flex-col bg-on-background border-2 border-on-background rounded-lg p-10 gap-8">
                                <h3 className="text-2xl text-background text-left font-heading">Register</h3>

                                <div className='w-full h-auto flex flex-col gap-8'>
                                    <CustomTextField
                                        label="First Name"
                                        type="text"
                                        variant="outlined"
                                        fullWidth
                                        value={registerData.fname}
                                        onChange={(e) => {
                                            setRegisterData(prev => ({ ...prev, fname: e.target.value }));
                                            setErrors(prev => ({ ...prev, fname: "" }));
                                        }}
                                        error={!!errors.fname}
                                        helperText={errors.fname}
                                    />

                                    <CustomTextField
                                        label="Last Name"
                                        type="text"
                                        variant="outlined"
                                        fullWidth
                                        value={registerData.lname}
                                        onChange={(e) => {
                                            setRegisterData(prev => ({ ...prev, lname: e.target.value }));
                                            setErrors(prev => ({ ...prev, lname: "" }));
                                        }}
                                        error={!!errors.lname}
                                        helperText={errors.lname}
                                    />

                                    <CustomTextField
                                        label="Email Address"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                        value={registerData.email}
                                        onChange={(e) => {
                                            setRegisterData(prev => ({ ...prev, email: e.target.value }));
                                            setErrors(prev => ({ ...prev, email: "" }));
                                        }}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                    />

                                    <CustomTextField
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        fullWidth
                                        value={registerData.password}
                                        onChange={(e) => {
                                            setRegisterData(prev => ({ ...prev, password: e.target.value }));
                                            setErrors(prev => ({ ...prev, password: "" }));
                                        }}
                                        error={!!errors.password}
                                        helperText={errors.password}
                                    />

                                    <CustomTextField
                                        prefix='+94'
                                        label="Mobile Number"
                                        type="number"
                                        variant="outlined"
                                        fullWidth
                                        value={registerData.mobile}
                                        onChange={(e) => {
                                            setRegisterData(prev => ({ ...prev, mobile: e.target.value }));
                                            setErrors(prev => ({ ...prev, mobile: "" }));
                                        }}
                                        error={!!errors.mobile}
                                        helperText={errors.mobile}
                                    />
                                </div>

                                <div className='w-full h-auto flex flex-col gap-4'>
                                    <Button name="Register" btnContainer="w-full text-on-primary bg-primary hover:text-primary hover:bg-on-primary group" btnPing="bg-on-primary group-hover:bg-primary" btnPingDot="bg-on-primary group-hover:bg-primary" />

                                    <p className="text-background text-left font-base">Already Registered?</p>

                                    <Button name="Login" onClick={() => setIsLogin(true)} btnContainer="w-full text-on-primary bg-primary hover:text-primary hover:bg-on-primary group" btnPing="bg-on-primary group-hover:bg-primary" btnPingDot="bg-on-primary group-hover:bg-primary" />
                                </div>
                            </div>
                        </div>

                        <div className="h-full hidden lg:flex lg:col-span-6 items-center justify-center p-4">
                            <h2 className="absolute text-9xl text-center font-heading custom-text-style" style={{ WebkitTextStroke: '1px var(--color-on-background)' }}>Worky</h2>

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