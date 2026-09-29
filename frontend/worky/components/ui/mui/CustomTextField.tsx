'use client';
import { ReactNode, useState } from 'react';
import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { getOutlinedFieldSx } from '@/libs/mui-styles';
import { RADIUS, SIZES } from '@/libs/design-tokens';

const ICON_INSET = (SIZES.fieldHeight - SIZES.iconButtonSize) / 2;

type CustomTextFieldProps = TextFieldProps & {
    prefix?: string;
    endIcon?: ReactNode;
};

function EndIconButton({ onClick, ariaLabel, children }: {
    onClick?: () => void;
    ariaLabel: string;
    children: ReactNode;
}) {
    return (
        <IconButton
            onClick={onClick}
            aria-label={ariaLabel}
            disableRipple
            sx={{
                width: `${SIZES.iconButtonSize}px`,
                minWidth: `${SIZES.iconButtonSize}px`,
                height: `${SIZES.iconButtonSize}px`,
                flexShrink: 0,
                fontSize: '16px',
                color: 'var(--color-on-primary)',
                backgroundColor: 'var(--color-primary)',
                border: '1px solid var(--color-outline)',
                borderRadius: `${RADIUS.lg}px`,
                transition: 'color 300ms ease, background-color 300ms ease, border-color 300ms ease',
                '&:hover': {
                    color: 'var(--color-primary)',
                    backgroundColor: 'var(--color-on-primary)'
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

    const hasEndAdornment = isPasswordField || !!endIcon || !!props.InputProps?.endAdornment;

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const inputType = isPasswordField && showPassword ? 'text' : props.type;

    const startAdornment = prefix ? (
        <InputAdornment position='start'>{prefix}</InputAdornment>
    ) : props.InputProps?.startAdornment;

    const endAdornment = isPasswordField ? (
        <InputAdornment position='end'>
            <EndIconButton
                onClick={() => setShowPassword(prev => !prev)}
                ariaLabel={showPassword ? 'Hide The Password' : 'Show The Password'}
            >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </EndIconButton>
        </InputAdornment>
    ) : endIcon ? (
        <InputAdornment position='end'>
            <EndIconButton ariaLabel='Text Field Action'>
                {endIcon}
            </EndIconButton>
        </InputAdornment>
    ) : props.InputProps?.endAdornment;

    const sx: SxProps<Theme> = [
        getOutlinedFieldSx(),
        {
            '& .MuiInputLabel-root': {
                ...(!isMultiline && { top: `${(SIZES.fieldHeight - 56) / 2}px` }),
                '&.MuiFormLabel-filled, &.Mui-focused': { top: 0 },
                '&.Mui-error': { top: 0 }
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
            InputProps={{
                ...props.InputProps,
                startAdornment,
                endAdornment
            }}
            sx={sx}
        />
    );
}