'use client';
import { ReactNode } from 'react';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectProps } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { SIZES } from '@/libs/design-tokens';
import { getFieldLabelSx, getMenuItemSx, getOutlinedFieldSx, getPopoverPaperSx, hideScrollbarSx } from '@/libs/mui-styles';

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
            '& .MuiInputLabel-root': getFieldLabelSx(SIZES.fieldHeight),
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
        '& .MuiList-root': hideScrollbarSx,
        '& .MuiMenuItem-root': getMenuItemSx(0)
    };

    return (
        <div className={`${containerClassName} relative`}>
            <FormControl
                variant='outlined'
                fullWidth={fullWidth}
                error={error}
                disabled={props.disabled}
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

            <div
                className='absolute right-4 -translate-y-1/2 flex items-center justify-center pointer-events-none'
                style={{ top: `${SIZES.fieldHeight / 2}px` }}
            >
                <FontAwesomeIcon
                    icon={props.open ? faChevronCircleUp : faChevronCircleDown}
                    fixedWidth
                    className={`text-base ${props.disabled ? 'text-on-primary opacity-50' : error ? 'text-on-error' : 'text-on-primary'}`}
                />
            </div>
        </div>
    );
}