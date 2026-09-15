'use client';
import { ReactNode } from 'react';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectProps } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { getMenuItemSx, getOutlinedFieldSx, getPopoverPaperSx } from '@/libs/mui-styles';
import { SIZES } from '@/libs/design-tokens';

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

    const formControlSx: SxProps<Theme> = [
        getOutlinedFieldSx(),
        {
            width: fullWidth ? '100%' : 'auto',
            '& .MuiInputLabel-root': {
                top: `${(SIZES.fieldHeight - 56) / 2}px`,
                '&.MuiFormLabel-filled, &.Mui-focused': { top: 0 },
                '&.Mui-error': { top: 0 }
            },
            '& .MuiOutlinedInput-root': {
                minHeight: `${SIZES.fieldHeight}px`,
                '& .MuiSelect-select': {
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    paddingLeft: '14px',
                    paddingRight: '40px'
                },
                '& .MuiSelect-icon': {
                    display: 'none'
                }
            }
        }
    ];

    const menuSx: SxProps<Theme> = {
        '& .MuiPaper-root': getPopoverPaperSx(),
        '& .MuiMenuItem-root': getMenuItemSx()
    };

    return (
        <div className={`${containerClassName} relative`}>
            <FormControl
                variant='outlined'
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
                    variant='outlined'
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

            <div className='absolute top-1/2 right-4 -translate-y-1/2 flex items-center justify-center pointer-events-none'>
                <FontAwesomeIcon
                    icon={props.open ? faChevronCircleUp : faChevronCircleDown}
                    className={`text-base ${error ? 'text-on-error' : 'text-on-primary'}`}
                />
            </div>
        </div>
    );
}