'use client';
import { ReactNode, useState } from 'react';
import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { RADIUS, SIZES } from '@/libs/design-tokens';
import { getFieldLabelSx, getOutlinedFieldSx } from '@/libs/mui-styles';

const ICON_INSET = (SIZES.fieldHeight - SIZES.iconButtonSize) / 2;

type CustomTextFieldProps = TextFieldProps & {
    prefix?: string;
    endIcon?: ReactNode;
};

function EndIconButton({ onClick, ariaLabel, disabled, children }: {
    onClick?: () => void;
    ariaLabel: string;
    disabled?: boolean;
    children: ReactNode;
}) {
    return (
        <IconButton
            onClick={onClick}
            aria-label={ariaLabel}
            disabled={disabled}
            disableRipple
            sx={{
                width: `${SIZES.iconButtonSize}px`,
                minWidth: `${SIZES.iconButtonSize}px`,
                height: `${SIZES.iconButtonSize}px`,
                flexShrink: 0,
                fontSize: '16px',
                lineHeight: 1,
                color: 'var(--color-on-primary)',
                backgroundColor: 'var(--color-primary)',
                border: '1px solid var(--color-outline)',
                borderRadius: `${RADIUS.lg}px`,
                transition: 'color 300ms ease, background-color 300ms ease, border-color 300ms ease, opacity 300ms ease',
                '&:hover': {
                    color: 'var(--color-primary)',
                    backgroundColor: 'var(--color-on-primary)'
                },
                '&.Mui-disabled': {
                    color: 'var(--color-on-primary)',
                    backgroundColor: 'var(--color-primary)',
                    opacity: 0.5
                },
                '& svg': {
                    width: '16px',
                    height: '16px',
                    display: 'block'
                }
            } satisfies SxProps<Theme>}
        >
            {children}
        </IconButton>
    );
}

export function CustomTextField({ prefix, endIcon, ...props }: CustomTextFieldProps) {

    const isMultiline = props.multiline;

    const isPasswordField = props.type === 'password';

    const inputSlotProps = (typeof props.slotProps?.input === 'object' ? props.slotProps.input : undefined) as
        { startAdornment?: ReactNode; endAdornment?: ReactNode } | undefined;

    const hasEndAdornment = isPasswordField || !!endIcon || !!inputSlotProps?.endAdornment;

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const inputType = isPasswordField && showPassword ? 'text' : props.type;

    const startAdornment = prefix ? (
        <InputAdornment position='start'>{prefix}</InputAdornment>
    ) : inputSlotProps?.startAdornment;

    const endAdornment = isPasswordField ? (
        <InputAdornment position='end'>
            <EndIconButton
                onClick={() => setShowPassword(prev => !prev)}
                ariaLabel={showPassword ? 'Hide The Password' : 'Show The Password'}
                disabled={props.disabled}
            >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} fixedWidth />
            </EndIconButton>
        </InputAdornment>
    ) : endIcon ? (
        <InputAdornment position='end'>
            <EndIconButton ariaLabel='Text Field Action' disabled={props.disabled}>
                {endIcon}
            </EndIconButton>
        </InputAdornment>
    ) : inputSlotProps?.endAdornment;

    const sx: SxProps<Theme> = [
        getOutlinedFieldSx(),
        {
            '& .MuiInputLabel-root': {
                ...(!isMultiline && getFieldLabelSx(SIZES.fieldHeight))
            },
            '& .MuiInputAdornment-root': {
                margin: 0,
                color: 'var(--color-on-primary)',
                '& .MuiTypography-root': {
                    color: 'var(--color-on-primary)'
                },
                '& .svg-inline--fa': {
                    color: 'inherit'
                }
            },
            '& .MuiInputAdornment-positionEnd': {
                display: 'flex',
                alignItems: 'center',
                paddingTop: `${ICON_INSET}px`,
                paddingBottom: `${ICON_INSET}px`,
                paddingRight: `${ICON_INSET}px`
            },
            '& .MuiOutlinedInput-root': {
                ...(!isMultiline && {
                    minHeight: `${SIZES.fieldHeight}px`,
                    ...(hasEndAdornment && { paddingRight: 0 }),
                    '& input': {
                        paddingTop: '12px',
                        paddingBottom: '12px',
                        paddingLeft: '14px',
                        paddingRight: '14px'
                    }
                }),
                '& textarea': {
                    fontSize: '16px',
                    fontFamily: 'var(--font-ropa-sans), sans-serif',
                    fontWeight: 600
                }
            }
        },
        ...(props.sx ? (Array.isArray(props.sx) ? props.sx : [props.sx]) : [])
    ];

    return (
        <TextField
            {...props}
            type={inputType}
            slotProps={{
                ...props.slotProps,
                input: {
                    ...(typeof props.slotProps?.input === 'object' ? props.slotProps.input : {}),
                    startAdornment,
                    endAdornment
                }
            }}
            sx={sx}
        />
    );
}