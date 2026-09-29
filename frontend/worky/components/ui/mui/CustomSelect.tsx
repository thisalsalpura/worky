'use client';
import { ReactNode } from 'react';
import { Select, SelectProps, FormControl, FormHelperText, InputLabel, MenuItem } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

const FIELD_HEIGHT = 48;
const BORDER_RADIUS = 12;

const BASE_TYPOGRAPHY = {
    fontSize: '16px',
    fontFamily: 'var(--font-ropa-sans), sans-serif',
    fontWeight: 600
} as const;

export interface SelectOption {
    value: string | number;
    label: string;
}

type CustomSelectProps = Omit<SelectProps, 'variant'> & {
    label?: string;
    options: SelectOption[];
    helperText?: ReactNode;
    error?: boolean;
    fullWidth?: boolean;
    containerClassName?: string;
};

export function CustomSelect({
    label,
    options,
    helperText,
    error = false,
    fullWidth = false,
    containerClassName = '',
    ...props
}: CustomSelectProps) {

    const labelId = `${props.id ?? props.name ?? 'select'}-label`;

    const formControlSx: SxProps<Theme> = {
        width: fullWidth ? '100%' : 'auto',
        '& .MuiInputLabel-root': {
            ...BASE_TYPOGRAPHY,
            top: `${(FIELD_HEIGHT - 56) / 2}px`,
            color: 'var(--color-on-primary)',
            opacity: 0.8,
            '&.MuiFormLabel-filled, &.Mui-focused': {
                top: 0,
                color: 'var(--color-on-primary)',
                opacity: 1
            },
            '&.Mui-error': {
                top: 0,
                color: 'var(--color-on-error)',
                opacity: 1
            }
        },
        '& .MuiOutlinedInput-root': {
            ...BASE_TYPOGRAPHY,
            minHeight: `${FIELD_HEIGHT}px`,
            color: 'var(--color-on-primary)',
            borderRadius: `${BORDER_RADIUS}px`,
            '& fieldset': {
                borderColor: 'var(--color-on-primary)',
                opacity: 0.8
            },
            '&:hover fieldset': {
                borderColor: 'var(--color-on-primary)',
                opacity: 1
            },
            '&.Mui-focused fieldset': {
                borderColor: 'var(--color-on-primary)',
                opacity: 1
            },
            '&.Mui-error fieldset': {
                borderColor: 'var(--color-on-error)',
                opacity: 1
            },
            '&.Mui-error': {
                color: 'var(--color-on-error)'
            },
            '& .MuiSelect-select': {
                paddingTop: '12px',
                paddingBottom: '12px',
                paddingLeft: '14px',
                paddingRight: '40px'
            },
            '& .MuiSelect-icon': {
                display: 'none'
            }
        },
        '& .MuiFormHelperText-root': {
            ...BASE_TYPOGRAPHY,
            marginLeft: 0,
            color: 'var(--color-on-primary)',
            '&.Mui-error': {
                color: 'var(--color-on-error)'
            }
        }
    };

    const menuSx: SxProps<Theme> = {
        '& .MuiPaper-root': {
            marginTop: '6px',
            backgroundColor: 'var(--color-primary)',
            border: '1px solid var(--color-outline)',
            borderRadius: `${BORDER_RADIUS}px`,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.24)'
        },
        '& .MuiMenuItem-root': {
            ...BASE_TYPOGRAPHY,
            color: 'var(--color-on-primary)',
            padding: '10px',
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
        }
    };

    return (
        <div className={`${containerClassName} relative`}>
            <FormControl
                variant="outlined"
                fullWidth={fullWidth}
                error={error}
                sx={formControlSx}
            >
                {label && (
                    <InputLabel id={labelId}>
                        {label}
                    </InputLabel>
                )}

                <Select
                    {...props}
                    labelId={label ? labelId : undefined}
                    label={label}
                    variant="outlined"
                    IconComponent={() => null}
                    MenuProps={{ sx: menuSx }}
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>

                {helperText && (
                    <FormHelperText>
                        {helperText}
                    </FormHelperText>
                )}
            </FormControl>

            <div className="absolute top-1/2 right-4 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                <FontAwesomeIcon
                    icon={props.open ? faChevronCircleUp : faChevronCircleDown}
                    className={`text-base ${error ? 'text-on-error' : 'text-on-primary'}`}
                />
            </div>
        </div>
    );
}