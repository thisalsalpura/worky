'use client';
import { ReactNode, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { CustomAccordion } from '@/components/ui/mui/CustomAccordion';
import { CustomCheckbox } from '@/components/ui/mui/CustomCheckbox';
import { CustomCountrySelector } from '@/components/ui/mui/CustomCountrySelector';
import { CustomPagination } from '@/components/ui/mui/CustomPagination';
import { CustomSelect } from '@/components/ui/mui/CustomSelect';
import { CustomTabs } from '@/components/ui/mui/CustomTabs';
import { CustomTextField } from '@/components/ui/mui/CustomTextField';
import { Heading, Text } from '@/components/ui/Typography';
import { FaqItem } from '@/components/interfaces/FaqItem';
import { Country } from '@/components/interfaces/User';
import { COUNTRIES } from '@/constants/countries';

const FAQS: FaqItem[] = [
    {
        id: 'panel-1',
        question: 'What is this test page for?',
        answer: 'This page renders every Custom MUI wrapper component in isolation so visual and behavioral regressions are easy to spot after a refactor.'
    },
    {
        id: 'panel-2',
        question: 'Is this page shipped to production?',
        answer: 'No — this is a development-only reference page and should not be linked from the public navigation.'
    }
];

function Section({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section className='w-full h-auto flex flex-col bg-on-background border-2 border-on-background rounded-lg p-4 md:p-8 gap-y-8'>
            <Heading level='h3' className='text-background'>{title}</Heading>
            {children}
        </section>
    );
}

const MuiTest = () => {

    const [textValue, setTextValue] = useState<string>('');

    const [passwordValue, setPasswordValue] = useState<string>('');

    const [selectValue, setSelectValue] = useState<string | number>('select');

    const [checked, setChecked] = useState<boolean>(false);

    const [page, setPage] = useState<number>(1);

    const DEFAULT_COUNTRY = COUNTRIES.find(c => c.code === 'LK') ?? { code: '', name: '', dial: '', flagCode: '' };

    const [country, setCountry] = useState<Country>(DEFAULT_COUNTRY);

    return (
        <div className='w-full h-full flex flex-col items-center justify-center gap-y-12'>
            <Section title='CustomTextField'>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-8'>
                    <CustomTextField
                        label='Email Address'
                        type='email'
                        variant='outlined'
                        fullWidth
                        endIcon={<FontAwesomeIcon icon={faEnvelope} />}
                        value={textValue}
                        onChange={(e) => setTextValue(e.target.value)}
                    />

                    <CustomTextField
                        label='Password'
                        type='password'
                        variant='outlined'
                        fullWidth
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                    />

                    <CustomTextField
                        label='Search'
                        type='text'
                        variant='outlined'
                        fullWidth
                        endIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    />

                    <CustomTextField
                        label='Disabled Field'
                        type='text'
                        variant='outlined'
                        fullWidth
                        disabled
                        value='Read Only Value'
                    />

                    <CustomTextField
                        label='Error State'
                        type='text'
                        variant='outlined'
                        fullWidth
                        error
                        helperText='This field is required'
                    />

                    <CustomTextField
                        label='Multiline'
                        type='text'
                        variant='outlined'
                        fullWidth
                        multiline
                        minRows={3}
                    />
                </div>
            </Section>

            <Section title='CustomSelect'>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-8'>
                    <CustomSelect
                        label='Category'
                        fullWidth
                        options={[
                            { value: 'select', label: 'Select Category' },
                            { value: 'web', label: 'Web' },
                            { value: 'app', label: 'App' },
                            { value: 'design', label: 'Design' }
                        ]}
                        value={selectValue}
                        onChange={(e) => setSelectValue(e.target.value)}
                    />

                    <CustomSelect
                        label='Error State'
                        fullWidth
                        error
                        helperText='Please select an option'
                        options={[{ value: 'select', label: 'Select Option' }]}
                        value='select'
                        onChange={() => { }}
                    />
                </div>
            </Section>

            <Section title='CustomCheckbox'>
                <div className='flex flex-row items-center gap-x-8'>
                    <CustomCheckbox
                        label='Remember Me'
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                    />

                    <CustomCheckbox
                        label='Disabled'
                        disabled
                    />
                </div>
            </Section>

            <Section title='CustomCountrySelector'>
                <div className='w-full max-w-sm flex flex-row items-center gap-x-2'>
                    <CustomCountrySelector value={country} onChange={setCountry} />

                    <CustomTextField
                        label='Mobile Number'
                        type='number'
                        variant='outlined'
                        fullWidth
                    />
                </div>
            </Section>

            <Section title='CustomTabs'>
                <CustomTabs
                    tabs={[
                        { label: 'Bronze', content: <Text variant='body' className='text-on-background'>Bronze package content goes here.</Text> },
                        { label: 'Silver', content: <Text variant='body' className='text-on-background'>Silver package content goes here.</Text> },
                        { label: 'Gold', content: <Text variant='body' className='text-on-background'>Gold package content goes here.</Text> },
                        { label: 'Disabled', content: null, disabled: true }
                    ]}
                />
            </Section>

            <Section title='CustomPagination'>
                <CustomPagination count={10} page={page} onChange={(_, value) => setPage(value)} />
            </Section>

            <Section title='CustomAccordion'>
                <div className='w-full flex flex-col gap-y-4'>
                    {FAQS.map((faq) => (
                        <CustomAccordion key={faq.id} item={faq} />
                    ))}
                </div>
            </Section>
        </div>
    );
}

export default MuiTest;