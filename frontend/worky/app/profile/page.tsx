'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Country, User } from '@/components/interfaces/User';
import { COUNTRIES } from '@/constants/countries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faLocationDot, faShare, faEnvelopeCircleCheck, faPersonCircleCheck, faPlugCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { CustomSelect } from '@/components/ui/mui/CustomSelect';
import { CustomTextField } from '@/components/ui/mui/CustomTextField';
import { CustomCountrySelector } from '@/components/ui/mui/CustomCountrySelector';
import { Button } from '@/components/ui/Button';
import { Heading, Text } from '@/components/ui/Typography';
import { HorizontalRule } from '@/components/ui/HorizontalRule';

const Profile = () => {

    const DEFAULT_COUNTRY = COUNTRIES.find(c => c.code === 'LK') || { code: '', name: '', dial: '', flagCode: '' };

    const [mobileCountryCode, setMobileCountryCode] = useState<Country>(DEFAULT_COUNTRY);

    const [profileData, setProfileData] = useState<User>({
        fname: '',
        lname: '',
        pronoun: '',
        email: '',
        password: '',
        mobileCountryCode: {
            code: '',
            name: '',
            dial: '',
            flagCode: ''
        },
        mobileNum: undefined,
        dob: undefined,
        createdAt: undefined,
        updatedAt: undefined,
        isEmailVerified: undefined,
        status: '',
        address: {
            addressLine1: '',
            addressLine2: '',
            city: '',
            postalCode: undefined,
            country: {
                code: '',
                name: '',
                dial: '',
                flagCode: ''
            }
        },
        profileURL: '',
        linkedInURL: '',
        gitHubURL: '',
        role: ''
    });

    const [newPassword, setNewPassword] = useState<string>('');

    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');

    const [errors, setErrors] = useState<Record<string, string>>({});

    return (
        <div className='w-full h-full flex flex-col items-center justify-center gap-y-12'>
            <div className='w-full h-auto flex items-center justify-start'>
                <Text as='p' variant='bodySm' className='text-primary'>
                    <span className='opacity-40 cursor-pointer'>Home</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                    <span className='cursor-pointer'>Profile</span>
                </Text>
            </div>

            <div className='w-full h-auto flex flex-col items-start justify-center md:p-4 gap-y-8'>
                <div className='w-full h-auto grid grid-cols-12 gap-y-8 lg:gap-x-8'>
                    <div className='lg:top-22 col-span-12 lg:col-span-5 h-auto lg:h-fit flex flex-col items-center justify-center lg:sticky bg-background dark:bg-on-background border border-outline-variant rounded-lg shadow-lg p-5 md:p-10 gap-y-8'>
                        <div className='w-full h-auto flex items-center justify-end'>
                            <div className='w-auto h-auto flex items-center justify-center bg-on-primary border border-outline hover:bg-primary rounded-xl p-2.5 transition-colors duration-300 cursor-pointer group'>
                                <FontAwesomeIcon icon={faShare} className='text-sm text-primary group-hover:text-on-primary' />
                            </div>
                        </div>

                        <div className='w-32 h-32 flex items-center justify-center border border-outline rounded-full cursor-pointer'>
                            <div className='w-30 h-30 flex items-center justify-center bg-surface-variant dark:bg-on-surface-variant rounded-full overflow-hidden'>
                                <Image
                                    src='/images/user-img.svg'
                                    alt='user-image'
                                    width={120}
                                    height={120}
                                    className='object-cover'
                                    priority
                                />
                            </div>
                        </div>

                        <HorizontalRule />

                        <div className='w-full h-auto flex flex-col bg-on-background border border-outline rounded-xl p-5 gap-y-4'>
                            <CustomSelect
                                label='Pronouns'
                                fullWidth
                                options={[
                                    { value: 'select', label: 'Select Pronouns' },
                                    { value: 'he/him', label: 'He/Him' },
                                    { value: 'she/her', label: 'She/Her' },
                                    { value: 'they/them', label: 'They/Them' }
                                ]}
                                value={profileData.pronoun}
                                onChange={(e) => {
                                    setProfileData(prev => ({ ...prev, pronoun: String(e.target.value) }));
                                    setErrors(prev => ({ ...prev, pronoun: '' }));
                                }}
                                error={!!errors.pronoun}
                                helperText={errors.pronouns}
                            />

                            <CustomTextField
                                label='LinkedIn URL'
                                type='text'
                                variant='outlined'
                                fullWidth
                                value={profileData.linkedInURL}
                                onChange={(e) => setProfileData(prev => ({ ...prev, linkedInURL: e.target.value }))}
                            />

                            <CustomTextField
                                label='GitHub URL'
                                type='text'
                                variant='outlined'
                                fullWidth
                                value={profileData.gitHubURL}
                                onChange={(e) => setProfileData(prev => ({ ...prev, gitHubURL: e.target.value }))}
                            />
                        </div>

                        <div className='w-full h-auto flex flex-col md:flex-row items-center justify-start gap-y-4 md:gap-x-4'>
                            <div className='w-12 h-12 shrink-0 flex items-center justify-center bg-primary border border-outline hover:bg-on-primary rounded-full transition-colors duration-300 cursor-pointer group'>
                                <FontAwesomeIcon icon={faLocationDot} className='text-lg text-on-primary group-hover:text-primary' />
                            </div>

                            <div className='w-auto h-auto flex-1 flex flex-col items-center md:items-start justify-center'>
                                <Text variant='body' className='text-on-background dark:text-background text-center md:text-left'>
                                    <span className='font-semibold'>Colombo, Sri Lanka</span>
                                </Text>
                                <Text variant='body' className='text-on-background dark:text-background text-center md:text-left'>If you want to update your Location, click the Location icon and then click update Location.</Text>
                            </div>
                        </div>

                        <Button name='Save' btnContainer='w-full text-primary bg-on-primary hover:text-on-primary hover:bg-primary group' btnPing='bg-primary group-hover:bg-on-primary' btnPingDot='bg-primary group-hover:bg-on-primary' />
                    </div>

                    <div className='col-span-12 lg:col-span-7 h-auto flex flex-col items-center justify-center gap-y-8'>
                        <div className='w-full h-auto flex flex-col bg-on-background border-2 border-on-background rounded-lg p-5 md:p-10 gap-y-8'>
                            <Heading level='h3' className='text-background text-left'>Personal Informations</Heading>

                            <div className='w-full h-auto flex flex-col gap-y-8'>
                                <CustomTextField
                                    label='First Name'
                                    type='text'
                                    variant='outlined'
                                    fullWidth
                                    value={profileData.fname}
                                    onChange={(e) => {
                                        setProfileData(prev => ({ ...prev, fname: e.target.value }));
                                        setErrors(prev => ({ ...prev, fname: '' }));
                                    }}
                                    error={!!errors.fname}
                                    helperText={errors.fname}
                                />

                                <CustomTextField
                                    label='Last Name'
                                    type='text'
                                    variant='outlined'
                                    fullWidth
                                    value={profileData.lname}
                                    onChange={(e) => {
                                        setProfileData(prev => ({ ...prev, lname: e.target.value }));
                                        setErrors(prev => ({ ...prev, lname: '' }));
                                    }}
                                    error={!!errors.lname}
                                    helperText={errors.lname}
                                />

                                <CustomTextField
                                    label='Email Address'
                                    type='email'
                                    variant='outlined'
                                    fullWidth
                                    value={profileData.email}
                                    onChange={(e) => {
                                        setProfileData(prev => ({ ...prev, email: e.target.value }));
                                        setErrors(prev => ({ ...prev, email: '' }));
                                    }}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                />

                                <div className='w-full h-auto flex flex-row items-center gap-x-2'>
                                    <CustomCountrySelector
                                        value={mobileCountryCode}
                                        onChange={setMobileCountryCode}
                                    />

                                    <CustomTextField
                                        label='Mobile Number'
                                        type='number'
                                        variant='outlined'
                                        fullWidth
                                        value={profileData.mobileNum}
                                        onChange={(e) => {
                                            setProfileData(prev => ({ ...prev, mobileNum: Number(e.target.value) }));
                                            setErrors(prev => ({ ...prev, mobileNum: '' }));
                                        }}
                                        error={!!errors.mobileNum}
                                        helperText={errors.mobileNum}
                                        slotProps={{ htmlInput: { min: 7, maxLength: 17 } }}
                                    />
                                </div>

                                <CustomTextField
                                    label='Role'
                                    type='text'
                                    variant='outlined'
                                    fullWidth
                                    value={profileData.role}
                                    onChange={(e) => {
                                        setProfileData(prev => ({ ...prev, role: e.target.value }));
                                        setErrors(prev => ({ ...prev, role: '' }));
                                    }}
                                    error={!!errors.role}
                                    helperText={errors.role}
                                />
                            </div>

                            <Button name='Update' btnContainer='w-full text-on-primary bg-primary hover:text-primary hover:bg-on-primary group' btnPing='bg-on-primary group-hover:bg-primary' btnPingDot='bg-on-primary group-hover:bg-primary' />
                        </div>

                        <div className='w-full h-auto flex flex-col bg-on-background border-2 border-on-background rounded-lg p-5 md:p-10 gap-y-8'>
                            <Heading level='h3' className='text-background text-left'>Address Informations</Heading>

                            <div className='w-full h-auto flex flex-col gap-y-8'>
                                <CustomTextField
                                    label='Address Line 1'
                                    type='text'
                                    variant='outlined'
                                    fullWidth
                                    value={profileData.address?.addressLine1}
                                    onChange={(e) => {
                                        setProfileData(prev => ({ ...prev, address: { ...prev.address, addressLine1: e.target.value } }));
                                        setErrors(prev => ({ ...prev, addressLine1: '' }));
                                    }}
                                    error={!!errors.addressLine1}
                                    helperText={errors.addressLine1}
                                />

                                <CustomTextField
                                    label='Address Line 2'
                                    type='text'
                                    variant='outlined'
                                    fullWidth
                                    value={profileData.address?.addressLine2}
                                    onChange={(e) => {
                                        setProfileData(prev => ({ ...prev, address: { ...prev.address, addressLine2: e.target.value } }));
                                        setErrors(prev => ({ ...prev, addressLine2: '' }));
                                    }}
                                    error={!!errors.addressLine2}
                                    helperText={errors.addressLine2}
                                />

                                <CustomTextField
                                    label='City'
                                    type='text'
                                    variant='outlined'
                                    fullWidth
                                    value={profileData.address?.city}
                                    onChange={(e) => {
                                        setProfileData(prev => ({ ...prev, address: { ...prev.address, city: e.target.value } }));
                                        setErrors(prev => ({ ...prev, city: '' }));
                                    }}
                                    error={!!errors.city}
                                    helperText={errors.city}
                                />

                                <CustomTextField
                                    label='Postal Code'
                                    type='number'
                                    variant='outlined'
                                    fullWidth
                                    value={profileData.address?.postalCode}
                                    onChange={(e) => {
                                        setProfileData(prev => ({ ...prev, address: { ...prev.address, postalCode: Number(e.target.value) } }));
                                        setErrors(prev => ({ ...prev, postalCode: '' }));
                                    }}
                                    error={!!errors.postalCode}
                                    helperText={errors.postalCode}
                                />

                                <CustomSelect
                                    label='Country'
                                    fullWidth
                                    options={[
                                        { value: 'select', label: 'Select Country' },
                                        ...COUNTRIES.map(country => ({
                                            value: country.name ?? '',
                                            label: country.name ?? ''
                                        }))
                                    ]}
                                    value={profileData.address?.country?.name}
                                    onChange={(e) => {
                                        const selectedCountryName = String(e.target.value);
                                        const selectedCountry = COUNTRIES.find(
                                            (country) => country.name === selectedCountryName
                                        ) ?? {
                                            code: '',
                                            name: '',
                                            dial: '',
                                            flagCode: ''
                                        };

                                        setProfileData(prev => ({
                                            ...prev,
                                            address: {
                                                ...prev.address,
                                                country: selectedCountry
                                            }
                                        }));
                                        setErrors(prev => ({ ...prev, country: '' }));
                                    }}
                                    error={!!errors.country}
                                    helperText={errors.country}
                                />
                            </div>

                            <Button name='Update' btnContainer='w-full text-on-primary bg-primary hover:text-primary hover:bg-on-primary group' btnPing='bg-on-primary group-hover:bg-primary' btnPingDot='bg-on-primary group-hover:bg-primary' />
                        </div>

                        <div className='w-full h-auto flex flex-col bg-on-background border-2 border-on-background rounded-lg p-5 md:p-10 gap-y-8'>
                            <Heading level='h3' className='text-background text-left'>Change Password</Heading>

                            <div className='w-full h-auto flex flex-col gap-y-8'>
                                <CustomTextField
                                    label='New Password'
                                    type='password'
                                    variant='outlined'
                                    fullWidth
                                    value={newPassword}
                                    onChange={(e) => {
                                        setNewPassword(e.target.value);
                                        setErrors(prev => ({ ...prev, newPassword: '' }));
                                    }}
                                    error={!!errors.newPassword}
                                    helperText={errors.newPassword}
                                />

                                <CustomTextField
                                    label='Confirm New Password'
                                    type='password'
                                    variant='outlined'
                                    fullWidth
                                    value={confirmNewPassword}
                                    onChange={(e) => {
                                        setConfirmNewPassword(e.target.value);
                                        setErrors(prev => ({ ...prev, confirmNewPassword: '' }));
                                    }}
                                    error={!!errors.confirmNewPassword}
                                    helperText={errors.confirmNewPassword}
                                />
                            </div>

                            <Button name='Change Password' btnContainer='w-full text-on-primary bg-primary hover:text-primary hover:bg-on-primary group' btnPing='bg-on-primary group-hover:bg-primary' btnPingDot='bg-on-primary group-hover:bg-primary' />
                        </div>

                        <div className='w-full h-auto flex flex-col bg-on-background border-2 border-on-background rounded-lg p-5 md:p-10 gap-y-8'>
                            <Heading level='h3' className='text-background text-left'>Security Details</Heading>

                            <div className='w-full h-auto flex flex-col gap-y-8'>
                                <div className='w-full h-auto flex flex-col md:flex-row items-center justify-between bg-surface-variant border border-outline-variant rounded-xl p-5 gap-y-4 md:gap-x-4'>
                                    <div className='w-auto h-auto flex-1 flex flex-col md:flex-row items-center justify-start gap-y-4 md:gap-x-4'>
                                        <div className='w-12 h-12 shrink-0 flex items-center justify-center bg-primary border border-outline hover:bg-on-primary rounded-full transition-colors duration-300 cursor-pointer group'>
                                            <FontAwesomeIcon icon={faEnvelopeCircleCheck} className='text-lg text-on-primary group-hover:text-primary' />
                                        </div>

                                        <div className='w-auto h-auto flex-1 flex flex-col items-center md:items-start justify-center'>
                                            <Text variant='body' className='text-on-surface-variant text-center md:text-left'>
                                                <span className='font-semibold'>Email Verification Status</span>
                                            </Text>
                                            <Text variant='body' className='text-on-surface-variant text-center md:text-left'>{'If you haven\u2019t verified your Email Address yet, click the Verify button and verify your Email Address.'}</Text>
                                        </div>
                                    </div>

                                    <Button name='Verified' btnContainer='w-full md:w-auto text-on-primary bg-primary hover:text-primary hover:bg-on-primary group' btnPing='bg-on-primary group-hover:bg-primary' btnPingDot='bg-on-primary group-hover:bg-primary' />
                                </div>

                                <div className='w-full h-auto flex flex-col md:flex-row items-center justify-between bg-surface-variant border border-outline-variant rounded-xl p-5 gap-y-4 md:gap-x-4'>
                                    <div className='w-auto h-auto flex-1 flex flex-col md:flex-row items-center justify-start gap-y-4 md:gap-x-4'>
                                        <div className='w-12 h-12 shrink-0 flex items-center justify-center bg-primary border border-outline hover:bg-on-primary rounded-full transition-colors duration-300 cursor-pointer group'>
                                            <FontAwesomeIcon icon={faPersonCircleCheck} className='text-lg text-on-primary group-hover:text-primary' />
                                        </div>

                                        <div className='w-auto h-auto flex-1 flex flex-col items-center md:items-start justify-center'>
                                            <Text variant='body' className='text-on-surface-variant text-center md:text-left'>
                                                <span className='font-semibold'>Account Status</span>
                                            </Text>
                                            <Text variant='body' className='text-on-surface-variant text-center md:text-left'>If your account is currently Inactive, contact the Worky Team.</Text>
                                        </div>
                                    </div>

                                    <Button name='Active' btnContainer='w-full md:w-auto text-on-primary bg-primary hover:text-primary hover:bg-on-primary group' btnPing='bg-on-primary group-hover:bg-primary' btnPingDot='bg-on-primary group-hover:bg-primary' />
                                </div>

                                <div className='w-full h-auto flex flex-col md:flex-row items-center justify-between bg-error-container border border-outline-variant rounded-xl p-5 gap-y-4 md:gap-x-4'>
                                    <div className='w-auto h-auto flex-1 flex flex-col md:flex-row items-center justify-start gap-y-4 md:gap-x-4'>
                                        <div className='w-12 h-12 shrink-0 flex items-center justify-center bg-error border border-outline hover:bg-on-error rounded-full transition-colors duration-300 cursor-pointer group'>
                                            <FontAwesomeIcon icon={faPlugCircleXmark} className='text-lg text-on-error group-hover:text-error' />
                                        </div>

                                        <div className='w-auto h-auto flex-1 flex flex-col items-center md:items-start justify-center'>
                                            <Text variant='body' className='text-on-error-container text-center md:text-left'>
                                                <span className='font-semibold'>Authenticator App</span>
                                            </Text>
                                            <Text variant='body' className='text-on-error-container text-center md:text-left'>For more Secutity, we recommend you to use a Google Authenticator App.</Text>
                                        </div>
                                    </div>

                                    <Button name='Authenticate' btnContainer='w-full md:w-auto text-on-error bg-error hover:text-error hover:bg-on-error group' btnPing='bg-on-error group-hover:bg-error' btnPingDot='bg-on-error group-hover:bg-error' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full h-auto flex flex-col items-center justify-start bg-on-background border-2 border-on-background rounded-lg p-5 md:p-10 gap-y-8'>
                    <div className='w-full h-auto flex flex-col md:flex-row items-center justify-between bg-surface-variant border border-outline-variant rounded-xl p-5 gap-y-4 md:gap-x-4'>
                        <div className='w-auto h-auto flex-1 flex flex-col md:flex-row items-center justify-start gap-y-4 md:gap-x-4'>
                            <div className='w-12 h-12 shrink-0 flex items-center justify-center bg-primary border border-outline hover:bg-on-primary rounded-full transition-colors duration-300 cursor-pointer group'>
                                <FontAwesomeIcon icon={faEnvelope} className='text-lg text-on-primary group-hover:text-primary' />
                            </div>

                            <div className='w-auto h-auto flex-1 flex flex-col items-center md:items-start justify-center'>
                                <Text variant='body' className='text-on-surface-variant text-center md:text-left'>
                                    <span className='font-semibold'>Subscribe the Newsletter</span>
                                </Text>
                                <Text variant='body' className='text-on-surface-variant text-center md:text-left'>{'By subscribing to our Newsletter, you\u2019ll receive the latest updates and news from Worky.'}</Text>
                            </div>
                        </div>

                        <Button name='Subscribe' btnContainer='w-full md:w-auto text-on-primary bg-primary hover:text-primary hover:bg-on-primary group' btnPing='bg-on-primary group-hover:bg-primary' btnPingDot='bg-on-primary group-hover:bg-primary' />
                    </div>

                    <div className='w-full h-auto flex flex-col md:flex-row items-center justify-between bg-error-container border border-outline-variant rounded-xl p-5 gap-y-4 md:gap-x-4'>
                        <div className='w-auto h-auto flex-1 flex flex-col md:flex-row items-center justify-start gap-y-4 md:gap-x-4'>
                            <div className='w-12 h-12 shrink-0 flex items-center justify-center bg-error border border-outline hover:bg-on-error rounded-full transition-colors duration-300 cursor-pointer group'>
                                <FontAwesomeIcon icon={faTrashCan} className='text-lg text-on-error group-hover:text-error' />
                            </div>

                            <div className='w-auto h-auto flex-1 flex flex-col items-center md:items-start justify-center'>
                                <Text variant='body' className='text-on-error-container text-center md:text-left'>
                                    <span className='font-semibold'>Disconnect Account</span>
                                </Text>
                                <Text variant='body' className='text-on-error-container text-center md:text-left'>{'By disconnecting your Account, you\u2019ll temporarily delete your Worky Account.'}</Text>
                            </div>
                        </div>

                        <Button name='Disconnect' btnContainer='w-full md:w-auto text-on-error bg-error hover:text-error hover:bg-on-error group' btnPing='bg-on-error group-hover:bg-error' btnPingDot='bg-on-error group-hover:bg-error' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;