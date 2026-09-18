'use client';
import { useMemo, useState } from 'react';
import { IconButton, InputAdornment, List, ListItemButton, Popover } from '@mui/material';
import { CustomTextField } from './CustomTextField';
import { Country } from '@/components/interfaces/User';
import { COUNTRIES } from '@/constants/countries';
import { RADIUS, SIZES } from '@/libs/design-tokens';
import { baseTypography, getMenuItemSx, getPopoverPaperSx, hideScrollbarSx } from '@/libs/mui-styles';

interface CountrySelectorProps {
    value: Country;
    onChange: (country: Country) => void;
}

export function CustomCountrySelector({ value, onChange }: CountrySelectorProps) {

    const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);

    const [searchCountry, setSearchCountry] = useState<string>('');

    const open = Boolean(anchor);

    const filtered = useMemo(() =>
        COUNTRIES.filter((c: Country) =>
            c.name?.toLowerCase().includes(searchCountry.toLowerCase()) ||
            c.dial?.includes(searchCountry)
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
        <InputAdornment position='start' sx={{ margin: 0 }}>
            <IconButton
                onClick={handleOpen}
                disableRipple
                aria-label='Select Country Code'
                sx={{
                    width: 'fit-content',
                    height: `${SIZES.fieldHeight}px`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-on-primary)',
                    backgroundColor: 'var(--color-primary)',
                    border: '1px solid var(--color-outline)',
                    borderRadius: `${RADIUS.lg}px`,
                    paddingX: '10px',
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
                <span style={baseTypography}>{value.flagCode}</span>
                <span style={baseTypography}>{value.dial}</span>
            </IconButton>

            <Popover
                open={open}
                anchorEl={anchor}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                marginThreshold={16}
                slotProps={{
                    paper: {
                        sx: {
                            ...getPopoverPaperSx(),
                            width: 'min(360px, calc(100vw - 32px))',
                            maxHeight: 'min(360px, calc(100vh - 120px))',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '20px',
                            gap: '8px',
                            overflow: 'hidden'
                        }
                    }
                }}
            >
                <CustomTextField
                    label='Search Country'
                    type='text'
                    variant='outlined'
                    fullWidth
                    value={searchCountry}
                    onChange={e => setSearchCountry(e.target.value)}
                />

                <List
                    disablePadding
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        overflowY: 'auto',
                        ...hideScrollbarSx
                    }}
                >
                    {filtered.length === 0 ? (
                        <ListItemButton sx={{ flexShrink: 0, ...getMenuItemSx() }}>
                            <span style={baseTypography}>No Results</span>
                        </ListItemButton>
                    ) : filtered.map(country => (
                        <ListItemButton
                            key={country.code}
                            selected={country.code === value.code}
                            onClick={() => handleSelect(country)}
                            sx={{ flexShrink: 0, ...getMenuItemSx() }}
                        >
                            <span style={{ ...baseTypography, flexShrink: 0 }}>
                                {country.flagCode}
                            </span>
                            <span style={{
                                ...baseTypography,
                                flexGrow: 1,
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden'
                            }}>
                                {country.name}
                            </span>
                            <span style={{ ...baseTypography, flexShrink: 0, opacity: 0.6 }}>
                                {country.dial}
                            </span>
                        </ListItemButton>
                    ))}
                </List>
            </Popover>

        </InputAdornment>
    );
}