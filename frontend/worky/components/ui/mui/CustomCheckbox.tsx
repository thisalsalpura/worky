'use client';
import { Checkbox, CheckboxProps } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const BORDER_RADIUS = 12;

type CustomCheckboxProps = CheckboxProps & {
    label?: string;
    containerClassName?: string;
    labelClassName?: string;
};

function CheckboxIcon({ checked = false }: { checked?: boolean }) {
    return (
        <span className={`w-5 h-5 flex items-center justify-center border-2 rounded-lg transition-all duration-300 ${checked ? 'bg-on-primary border-on-primary' : 'bg-transparent border-outline'}`}>
            {checked && <FontAwesomeIcon icon={faCheck} className="text-xs text-primary" />}
        </span>
    );
}

export function CustomCheckbox({ label, containerClassName = '', labelClassName = '', ...props }: CustomCheckboxProps) {

    const sx: SxProps<Theme> = [
        {
            color: 'var(--color-outline)',
            borderRadius: `${BORDER_RADIUS}px`,
            '&:hover': {
                backgroundColor: 'transparent',
                opacity: 0.8
            },
            '&.Mui-checked': {
                color: 'var(--color-on-primary)'
            },
            '& .MuiSvgIcon-root': {
                display: 'none'
            }
        },
        ...(props.sx ? (Array.isArray(props.sx) ? props.sx : [props.sx]) : [])
    ];

    return (
        <label className={`${containerClassName} flex flex-row items-center gap-x-2 cursor-pointer select-none`}>
            <Checkbox
                {...props}
                disableRipple
                checkedIcon={<CheckboxIcon checked />}
                icon={<CheckboxIcon />}
                sx={sx}
            />
            {label && (
                <span className={`${labelClassName} text-background font-base`}>
                    {label}
                </span>
            )}
        </label>
    );
}