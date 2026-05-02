'use client';
import { useState } from "react";
import { COUNTRIES } from "@/constants/countries";
import { Country, User } from "@/components/interfaces/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { CustomTextField } from "@/components/ui/mui/CustomTextField";

const Profile = () => {

    const DEFAULT_COUNTRY = COUNTRIES.find(c => c.code === 'LK') || { code: '', name: '', dial: '', flagCode: '' };

    const [country, setCountry] = useState<Country>(DEFAULT_COUNTRY);

    const [profileData, setProfileData] = useState<User>({
        fname: "",
        lname: "",
        email: "",
        password: "",
        country: country,
        mobile: "",
        role: ""
    });

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
                    <div className="md:top-22 col-span-12 md:col-span-5 h-auto md:h-fit flex flex-col items-center justify-center md:sticky bg-on-background border-2 border-on-background rounded-lg p-10 gap-y-8">

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
                            </div>
                        </div>

                        <div className="w-full h-auto flex flex-col bg-on-background border-2 border-on-background rounded-lg p-10 gap-y-8">

                        </div>

                        <div className="w-full h-auto flex flex-col bg-on-background border-2 border-on-background rounded-lg p-10 gap-y-8">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;