'use client';
import { InputAdornment, TextField, TextFieldProps } from "@mui/material";

type CustomTextFieldProps = TextFieldProps & {
    prefix?: string;
};

export function CustomTextField({ prefix, ...props }: CustomTextFieldProps) {

    const isMultiline = props.multiline;

    const baseTypography = {
        fontSize: '16px',
        fontFamily: 'var(--font-ropa-sans), sans-serif'
    };

    const baseColor = 'var(--color-on-primary)';

    const errorColor = 'var(--color-on-error)';

    const startAdornment = prefix ? (
        <InputAdornment position="start">
            {prefix}
        </InputAdornment>
    ) : props.InputProps?.startAdornment;

    return (
        <TextField
            {...props}
            InputProps={{
                ...props.InputProps,
                startAdornment
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
                        '& .MuiTypography-root': {
                            ...baseTypography,
                            color: baseColor
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