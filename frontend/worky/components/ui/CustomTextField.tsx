'use client';
import { ReactNode, useState } from 'react';
import { TextField, TextFieldProps, InputAdornment, IconButton } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const FIELD_HEIGHT = 48;
const ICON_SIZE = 36;
const ICON_INSET = (FIELD_HEIGHT - ICON_SIZE) / 2;
const BORDER_RADIUS = 12;

const BASE_TYPOGRAPHY = {
    fontSize: '16px',
    fontFamily: 'var(--font-ropa-sans), sans-serif',
    fontWeight: 600
} as const;

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
                width: `${ICON_SIZE}px`,
                height: `${ICON_SIZE}px`,
                minWidth: `${ICON_SIZE}px`,
                flexShrink: 0,
                fontSize: '16px',
                color: 'var(--color-on-primary)',
                backgroundColor: 'var(--color-primary)',
                border: '1px solid var(--color-outline)',
                borderRadius: `${BORDER_RADIUS}px`,
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

    const [showPassword, setShowPassword] = useState(false);

    const inputType = isPasswordField && showPassword ? 'text' : props.type;

    const startAdornment = prefix ? (
        <InputAdornment position="start">{prefix}</InputAdornment>
    ) : props.InputProps?.startAdornment;

    const endAdornment = isPasswordField ? (
        <InputAdornment position="end">
            <EndIconButton
                onClick={() => setShowPassword(prev => !prev)}
                ariaLabel={showPassword ? 'Hide The Password' : 'Show The Password'}
            >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </EndIconButton>
        </InputAdornment>
    ) : endIcon ? (
        <InputAdornment position="end">
            <EndIconButton ariaLabel="Text Field Action">
                {endIcon}
            </EndIconButton>
        </InputAdornment>
    ) : props.InputProps?.endAdornment;

    const sx: SxProps<Theme> = [
        {
            '& .MuiInputLabel-root': {
                ...BASE_TYPOGRAPHY,
                color: 'var(--color-on-primary)',
                opacity: 0.8,
                ...(!isMultiline && { top: `${(FIELD_HEIGHT - 56) / 2}px` }),
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
            '& .MuiInputAdornment-root': {
                margin: 0,
                color: 'var(--color-on-primary)',
                '& .MuiTypography-root': {
                    ...BASE_TYPOGRAPHY,
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
                ...BASE_TYPOGRAPHY,
                color: 'var(--color-on-primary)',
                borderRadius: `${BORDER_RADIUS}px`,
                ...(!isMultiline && {
                    minHeight: `${FIELD_HEIGHT}px`,
                    ...(hasEndAdornment && { paddingRight: 0 }),
                    '& input': {
                        paddingTop: '12px',
                        paddingBottom: '12px',
                        paddingLeft: '14px',
                        paddingRight: '14px'
                    }
                }),
                '& textarea': {
                    ...BASE_TYPOGRAPHY
                },
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
                }
            },
            '& .MuiFormHelperText-root': {
                marginLeft: 0,
                ...BASE_TYPOGRAPHY,
                color: 'var(--color-on-primary)',
                '&.Mui-error': {
                    color: 'var(--color-on-error)'
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