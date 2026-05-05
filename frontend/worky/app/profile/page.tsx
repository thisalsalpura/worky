'use client';
import { useState } from "react";
import { Country, User } from "@/components/interfaces/User";
import { COUNTRIES } from "@/constants/countries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { CustomTextField } from "@/components/ui/mui/CustomTextField";
import { CustomCountrySelector } from "@/components/ui/mui/CustomCountrySelector";
import Image from "next/image";

const Profile = () => {

    const DEFAULT_COUNTRY = COUNTRIES.find(c => c.code === 'LK') || { code: '', name: '', dial: '', flagCode: '' };

    const [country, setCountry] = useState<Country>(DEFAULT_COUNTRY);

    const [profileData, setProfileData] = useState<User>({
        fname: "",
        lname: "",
        email: "",
        password: "",
        mobileCountryCode: {
            code: "",
            name: "",
            dial: "",
            flagCode: ""
        },
        mobileNum: "",
        dob: undefined,
        createdAt: undefined,
        updatedAt: undefined,
        isEmailVerified: undefined,
        status: "",
        address: {
            addressLine1: "",
            addressLine2: "",
            city: "",
            postalCode: "",
            country: {
                code: "",
                name: "",
                dial: "",
                flagCode: ""
            }
        },
        role: ""
    });

    const [newPassword, setNewPassword] = useState<string>("");

    const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");

    const [errors, setErrors] = useState<Record<string, string>>({});

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-y-12">
            <div className="w-full h-auto flex items-center justify-start">
                <p className="text-sm text-primary font-base">
                    <span className="opacity-40 cursor-pointer">Home</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                    <span className="cursor-pointer">Profile</span>
                </p>
            </div>

            <div className="w-full h-auto p-4">
                <div className="w-full h-auto grid grid-cols-12 gap-y-8 md:gap-x-8">
                    <div className="md:top-22 col-span-12 md:col-span-5 h-auto md:h-fit flex flex-col items-center justify-center md:sticky bg-background dark:bg-on-background border border-outline-variant rounded-lg shadow-lg p-10 gap-y-8">
                        <div className="w-32 h-32 flex items-center justify-center border border-outline rounded-full cursor-pointer">
                            <div className="w-30 h-30 flex items-center justify-center bg-surface-variant dark:bg-on-surface-variant rounded-full overflow-hidden">
                                <Image
                                    src="/images/user-img.svg"
                                    alt="user-image"
                                    width={120}
                                    height={120}
                                    className='object-cover'
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-7 h-auto flex flex-col items-center justify-center gap-y-8">
                        <div className="w-full h-auto flex flex-col bg-on-background border-2 border-on-background rounded-lg p-10 gap-y-8">
                            <h3 className="text-2xl text-background text-left font-heading">Personal Informations</h3>

                            <div className='w-full h-auto flex flex-col gap-y-8'>
                                <CustomTextField
                                    label="First Name"
                                    type="text"
                                    variant="outlined"
                                    fullWidth
                                    value={profileData.fname}
                                    onChange={(e) => {
                                        setProfileData(prev => ({ ...prev, fname: e.target.value }));
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
                                    value={profileData.lname}
                                    onChange={(e) => {
                                        setProfileData(prev => ({ ...prev, lname: e.target.value }));
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
                                    value={profileData.email}
                                    onChange={(e) => {
                                        setProfileData(prev => ({ ...prev, email: e.target.value }));
                                        setErrors(prev => ({ ...prev, email: "" }));
                                    }}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                />

                                <div className='w-full h-auto flex flex-row items-center gap-x-2'>
                                    <CustomCountrySelector
                                        value={country}
                                        onChange={setCountry}
                                    />

                                    <CustomTextField
                                        label="Mobile Number"
                                        type="number"
                                        variant="outlined"
                                        fullWidth
                                        value={profileData.mobileNum}
                                        onChange={(e) => {
                                            setProfileData(prev => ({ ...prev, mobileNum: e.target.value }));
                                            setErrors(prev => ({ ...prev, mobileNum: "" }));
                                        }}
                                        error={!!errors.mobileNum}
                                        helperText={errors.mobileNum}
                                        inputProps={{ min: 7, maxLength: 17 }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-auto flex flex-col bg-on-background border-2 border-on-background rounded-lg p-10 gap-y-8">
                            <h3 className="text-2xl text-background text-left font-heading">Address Informations</h3>

                            <div className='w-full h-auto flex flex-col gap-y-8'>
                                <CustomTextField
                                    label="Address Line 1"
                                    type="text"
                                    variant="outlined"
                                    fullWidth
                                    value={profileData.address?.addressLine1}
                                    onChange={(e) => {
                                        setProfileData(prev => ({ ...prev, address: { ...prev.address, addressLine1: e.target.value } }));
                                        setErrors(prev => ({ ...prev, addressLine1: "" }));
                                    }}
                                    error={!!errors.addressLine1}
                                    helperText={errors.addressLine1}
                                />

                                <CustomTextField
                                    label="Address Line 2"
                                    type="text"
                                    variant="outlined"
                                    fullWidth
                                    value={profileData.address?.addressLine2}
                                    onChange={(e) => {
                                        setProfileData(prev => ({ ...prev, address: { ...prev.address, addressLine2: e.target.value } }));
                                        setErrors(prev => ({ ...prev, addressLine2: "" }));
                                    }}
                                    error={!!errors.addressLine2}
                                    helperText={errors.addressLine2}
                                />
                            </div>
                        </div>

                        <div className="w-full h-auto flex flex-col bg-on-background border-2 border-on-background rounded-lg p-10 gap-y-8">
                            <h3 className="text-2xl text-background text-left font-heading">Change Password</h3>

                            <div className='w-full h-auto flex flex-col gap-y-8'>
                                <CustomTextField
                                    label="New Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    value={newPassword}
                                    onChange={(e) => {
                                        setNewPassword(e.target.value);
                                        setErrors(prev => ({ ...prev, newPassword: "" }));
                                    }}
                                    error={!!errors.newPassword}
                                    helperText={errors.newPassword}
                                />

                                <CustomTextField
                                    label="Confirm New Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    value={confirmNewPassword}
                                    onChange={(e) => {
                                        setConfirmNewPassword(e.target.value);
                                        setErrors(prev => ({ ...prev, confirmNewPassword: "" }));
                                    }}
                                    error={!!errors.confirmNewPassword}
                                    helperText={errors.confirmNewPassword}
                                />
                            </div>
                        </div>

                        <div className="w-full h-auto flex flex-col bg-on-background border-2 border-on-background rounded-lg p-10 gap-y-8">
                            <h3 className="text-2xl text-background text-left font-heading">Security Details</h3>

                            <div className='w-full h-auto flex flex-col gap-y-8'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;