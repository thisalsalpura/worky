'use client';
import { useState, ReactNode } from 'react';
import { TextField, TextFieldProps, InputAdornment, IconButton } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

type CustomTextFieldProps = TextFieldProps & {
    prefix?: string;
    endIcon?: ReactNode;
};

export function CustomTextField({ prefix, endIcon, ...props }: CustomTextFieldProps) {

    const isMultiline = props.multiline;

    const isPasswordField = props.type === 'password';

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const inputType = isPasswordField && showPassword ? 'text' : props.type;

    const handleClickShowPassword = () => setShowPassword((prev) => !prev);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const baseTypography = {
        fontSize: '16px',
        fontFamily: 'var(--font-ropa-sans), sans-serif',
        fontWeight: 600
    };

    const baseColor = 'var(--color-on-primary)';

    const errorColor = 'var(--color-on-error)';

    const startAdornment = prefix ? (
        <InputAdornment position="start">
            {prefix}
        </InputAdornment>
    ) : props.InputProps?.startAdornment;

    const endAdornment = isPasswordField ? (
        <InputAdornment position="end">
            <IconButton
                edge="end"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                aria-label={showPassword ? 'Hide The Password' : 'Display The Password'}
                sx={{
                    color: baseColor,
                    p: '6px',
                    mr: '2px',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        opacity: 0.8
                    }
                }}
            >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className='text-base text-on-primary' />
            </IconButton>
        </InputAdornment>
    ) : endIcon ? (
        <InputAdornment position="end">
            <IconButton
                edge="end"
                aria-label="Text Field Action"
                sx={{
                    mr: '2px',
                    width: '32px',
                    height: '32px',
                    fontSize: '14px',
                    color: 'var(--color-primary)',
                    backgroundColor: 'var(--color-on-primary)',
                    border: '1px solid var(--color-on-primary)',
                    borderRadius: '12px',
                    transition: 'all 300ms ease',
                    '&:hover': {
                        color: 'var(--color-on-primary)',
                        backgroundColor: 'var(--color-primary)',
                        borderColor: 'var(--color-on-primary)'
                    }
                }}
            >
                {endIcon}
            </IconButton>
        </InputAdornment>
    ) : props.InputProps?.endAdornment;

    return (
        <TextField
            {...props}
            type={inputType}
            InputProps={{
                ...props.InputProps,
                startAdornment,
                endAdornment
            }}
            sx={[
                {
                    '& .MuiInputLabel-root': {
                        ...baseTypography,
                        color: baseColor,
                        opacity: 0.8,
                        ...(props.variant !== 'standard' && {
                            transform: 'translate(14px, 12px) scale(1)',
                            '&.MuiInputLabel-shrink': {
                                transform: 'translate(14px, -9px) scale(0.75)'
                            }
                        }),
                        '&.Mui-focused': {
                            color: baseColor,
                            opacity: 1
                        },
                        '&.Mui-error': {
                            color: errorColor,
                            opacity: 1
                        }
                    },
                    '& .MuiInputAdornment-root': {
                        color: baseColor,
                        '&.MuiInputAdornment-positionEnd': {
                            marginRight: '2px'
                        },
                        '& .MuiTypography-root': {
                            ...baseTypography,
                            color: baseColor
                        },
                        '& .svg-inline--fa': {
                            color: 'inherit'
                        }
                    },
                    '& .MuiOutlinedInput-root': {
                        ...baseTypography,
                        color: baseColor,
                        borderRadius: '12px',
                        ...(!isMultiline && {
                            minHeight: '48px',
                            '& input': {
                                padding: '12px 14px'
                            }
                        }),
                        '&.MuiInputBase-adornedEnd': {
                            paddingRight: '8px'
                        },
                        '& textarea': {
                            ...baseTypography
                        },
                        '& fieldset': {
                            borderColor: baseColor,
                            opacity: 0.8
                        },
                        '&:hover fieldset': {
                            borderColor: baseColor,
                            opacity: 1
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: baseColor,
                            opacity: 1
                        },
                        '&.Mui-error fieldset': {
                            borderColor: errorColor,
                            opacity: 1
                        },
                        '&.Mui-error': {
                            color: errorColor
                        }
                    },
                    '& .MuiFormHelperText-root': {
                        ...baseTypography,
                        color: baseColor,
                        marginLeft: 0,
                        '&.Mui-error': {
                            color: errorColor
                        }
                    }
                },
                ...(Array.isArray(props.sx) ? props.sx : props.sx ? [props.sx] : [])
            ]}
        />
    );
}