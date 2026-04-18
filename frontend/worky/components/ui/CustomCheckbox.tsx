'use client';
import { Checkbox, CheckboxProps } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

type CustomCheckboxProps = CheckboxProps & {
    label?: string;
    containerClassName?: string;
    labelClassName?: string;
};

function CheckboxIcon({ checked = false }: { checked?: boolean }) {
    return (
        <span className={`w-5 h-5 flex items-center justify-center border-2 ${checked ? 'bg-on-primary border-on-primary' : 'bg-transparent border-outline'} rounded-lg transition-all duration-300`}>
            {checked && (
                <FontAwesomeIcon icon={faCheck} className="text-xs text-primary" />
            )}
        </span>
    );
}

export function CustomCheckbox({
    label,
    containerClassName = '',
    labelClassName = '',
    ...props
}: CustomCheckboxProps) {

    const baseColor = 'var(--color-outline)';

    const checkedColor = 'var(--color-on-primary)';

    return (
        <label className={`${containerClassName} flex flex-row items-center gap-2 cursor-pointer select-none`}>
            <Checkbox
                {...props}
                disableRipple
                checkedIcon={<CheckboxIcon checked />}
                icon={<CheckboxIcon />}
                sx={[
                    {
                        color: baseColor,
                        p: '4px',
                        borderRadius: '10px',
                        '&:hover': {
                            backgroundColor: 'transparent',
                            opacity: 0.8
                        },
                        '&.Mui-checked': {
                            color: checkedColor
                        },
                        '& .MuiSvgIcon-root': {
                            display: 'none'
                        }
                    },
                    ...(Array.isArray(props.sx) ? props.sx : props.sx ? [props.sx] : [])
                ]}
            />

            {label && (
                <span className={`${labelClassName} text-background font-base`}>
                    {label}
                </span>
            )}
        </label>
    );
}