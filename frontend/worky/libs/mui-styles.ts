import { SxProps, Theme } from '@mui/material/styles';
import { RADIUS, SIZES } from './design-tokens';

export const baseTypography = {
    fontSize: '16px',
    fontFamily: 'var(--font-ropa-sans), sans-serif',
    fontWeight: 600
} as const;

export const baseTypographySm = {
    ...baseTypography,
    fontSize: '14px'
} as const;

export function getOutlinedFieldSx(): SxProps<Theme> {
    return {
        '& .MuiOutlinedInput-root': {
            ...baseTypography,
            minHeight: `${SIZES.fieldHeight}px`,
            color: 'var(--color-on-primary)',
            borderRadius: `${RADIUS.lg}px`,
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
        '& .MuiInputLabel-root': {
            ...baseTypography,
            color: 'var(--color-on-primary)',
            opacity: 0.8,
            '&.MuiFormLabel-filled, &.Mui-focused': {
                color: 'var(--color-on-primary)',
                opacity: 1
            },
            '&.Mui-error': {
                color: 'var(--color-on-error)',
                opacity: 1
            }
        },
        '& .MuiFormHelperText-root': {
            ...baseTypography,
            marginLeft: 0,
            color: 'var(--color-on-primary)',
            '&.Mui-error': {
                color: 'var(--color-on-error)'
            }
        }
    };
}

export function getPillItemSx(itemSize: number = SIZES.itemSize): SxProps<Theme> {
    return {
        ...baseTypographySm,
        margin: '4px',
        minWidth: 'fit-content',
        width: `${itemSize}px`,
        height: `${itemSize}px`,
        minHeight: `${itemSize}px`,
        backgroundColor: 'transparent',
        border: '1px solid var(--color-outline)',
        borderRadius: `${RADIUS.full}px`,
        padding: '0 16px',
        opacity: 0.8,
        textTransform: 'none',
        transition: 'color 300ms ease, background-color 300ms ease, border-color 300ms ease, opacity 300ms ease',
        overflow: 'hidden',
        '&:hover': {
            color: 'var(--color-on-primary)',
            backgroundColor: 'var(--color-primary)',
            opacity: 1
        },
        '&.Mui-selected, &.Mui-selected:hover': {
            color: 'var(--color-primary)',
            backgroundColor: 'var(--color-on-primary)',
            borderColor: 'var(--color-primary)',
            opacity: 1
        },
        '&.Mui-disabled': {
            opacity: 0.4
        }
    };
}

export function getPopoverPaperSx(): SxProps<Theme> {
    return {
        marginTop: '6px',
        backgroundColor: 'var(--color-primary)',
        border: '1px solid var(--color-outline)',
        borderRadius: `${RADIUS.xl}px`,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.24)'
    };
}

export function getMenuItemSx(): SxProps<Theme> {
    return {
        ...baseTypography,
        color: 'var(--color-on-primary)',
        borderRadius: `${RADIUS.lg}px`,
        padding: '10px',
        gap: '8px',
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
    };
}