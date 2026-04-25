'use client';
import { useState, useMemo } from 'react';
import { Country } from '@/components/interfaces/User';
import { Popover, InputAdornment, IconButton, List, ListItemButton } from '@mui/material';
import { CustomTextField } from './CustomTextField';
import { COUNTRIES } from '@/constants/countries';

const BUTTON_HEIGHT = 48;
const BORDER_RADIUS = 12;

const BASE_TYPOGRAPHY = {
    fontSize: '16px',
    fontFamily: 'var(--font-ropa-sans), sans-serif',
    fontWeight: 600
} as const;

interface CountrySelectorProps {
    value: Country;
    onChange: (country: Country) => void;
}

export function CustomCountrySelector({ value, onChange }: CountrySelectorProps) {

    const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);

    const [searchCountry, setSearchCountry] = useState('');

    const open = Boolean(anchor);

    const filtered = useMemo(() =>
        COUNTRIES.filter(c =>
            c.name.toLowerCase().includes(searchCountry.toLowerCase()) ||
            c.dial.includes(searchCountry)
        ),
        [searchCountry]
    );

    const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(e.currentTarget);
        setSearchCountry('');
    };

    const handleClose = () => setAnchor(null);

    const handleSelect = (country: Country) => {
        onChange(country);
        handleClose();
    };

    return (
        <InputAdornment position="start" sx={{ margin: 0 }}>
            <IconButton
                onClick={handleOpen}
                disableRipple
                aria-label="Select Country Code"
                sx={{
                    width: 'fit-content',
                    height: `${BUTTON_HEIGHT}px`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-on-primary)',
                    backgroundColor: 'var(--color-primary)',
                    border: '1px solid var(--color-outline)',
                    borderRadius: `${BORDER_RADIUS}px`,
                    px: '10px',
                    gap: '8px',
                    opacity: 0.8,
                    transition: 'background-color 300ms ease, opacity 300ms ease',
                    '&:hover': {
                        color: 'var(--color-primary)',
                        backgroundColor: 'var(--color-on-primary)',
                        opacity: 1
                    }
                }}
            >
                <span style={{ ...BASE_TYPOGRAPHY }}>{value.flagCode}</span>
                <span style={{ ...BASE_TYPOGRAPHY }}>{value.dial}</span>
            </IconButton>

            <Popover
                open={open}
                anchorEl={anchor}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                slotProps={{
                    paper: {
                        sx: {
                            mt: '6px',
                            width: '360px',
                            maxHeight: '360px',
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid var(--color-outline)',
                            backgroundColor: 'var(--color-primary)',
                            borderRadius: `${BORDER_RADIUS}px`,
                            p: '10px',
                            gap: '8px',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.24)',
                            overflow: 'hidden'
                        }
                    }
                }}
            >
                <CustomTextField
                    label="Search Country"
                    type="text"
                    variant="outlined"
                    fullWidth
                    value={searchCountry}
                    onChange={e => setSearchCountry(e.target.value)}
                    sx={{ mt: '10px' }}
                />

                <List
                    disablePadding
                    sx={{
                        mb: '10px',
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        overflowY: 'auto',
                        scrollbarWidth: 'none',
                        '&::-webkit-scrollbar': {
                            display: 'none'
                        }
                    }}
                >
                    {filtered.length === 0 ? (
                        <ListItemButton
                            sx={{
                                flexShrink: 0,
                                color: 'var(--color-on-primary)',
                                borderRadius: `${BORDER_RADIUS}px`,
                                p: '10px',
                                gap: '8px',
                                transition: 'background-color 300ms ease',
                                '&:hover': {
                                    backgroundColor: 'rgba(var(--color-on-primary-rgb, 255,255,255), 0.1)'
                                }
                            }}
                        >
                            <span style={{ ...BASE_TYPOGRAPHY }}>No Results</span>
                        </ListItemButton>
                    ) : filtered.map(country => (
                        <ListItemButton
                            key={country.code}
                            selected={country.code === value.code}
                            onClick={() => handleSelect(country)}
                            sx={{
                                flexShrink: 0,
                                color: 'var(--color-on-primary)',
                                borderRadius: `${BORDER_RADIUS}px`,
                                p: '10px',
                                gap: '8px',
                                transition: 'background-color 300ms ease',
                                '&:hover': {
                                    backgroundColor: 'rgba(var(--color-on-primary-rgb, 255,255,255), 0.1)'
                                },
                                '&.Mui-selected': {
                                    backgroundColor: 'rgba(var(--color-on-primary-rgb, 255,255,255), 0.15)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(var(--color-on-primary-rgb, 255,255,255), 0.2)'
                                    }
                                }
                            }}
                        >
                            <span style={{ ...BASE_TYPOGRAPHY, flexShrink: 0 }}>
                                {country.flagCode}
                            </span>
                            <span style={{
                                ...BASE_TYPOGRAPHY,
                                flexGrow: 1,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            }}>
                                {country.name}
                            </span>
                            <span style={{ ...BASE_TYPOGRAPHY, flexShrink: 0, opacity: 0.6 }}>
                                {country.dial}
                            </span>
                        </ListItemButton>
                    ))}
                </List>
            </Popover>

        </InputAdornment>
    );
}