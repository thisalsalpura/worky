'use client';
import { Pagination, PaginationProps } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { useTheme } from 'next-themes';

const ITEM_SIZE = 36;
const BORDER_RADIUS = 1000;

const BASE_TYPOGRAPHY = {
    fontSize: '14px',
    fontFamily: 'var(--font-ropa-sans), sans-serif',
    fontWeight: 600
} as const;

type CustomPaginationProps = PaginationProps & {
    containerClassName?: string;
};

export function CustomPagination({ containerClassName = '', ...props }: CustomPaginationProps) {

    const { resolvedTheme } = useTheme();

    const isDark = resolvedTheme === 'dark';

    const sx: SxProps<Theme> = [
        {
            '& .MuiPaginationItem-root': {
                ...BASE_TYPOGRAPHY,
                margin: '4px',
                width: `${ITEM_SIZE}px`,
                height: `${ITEM_SIZE}px`,
                minWidth: `${ITEM_SIZE}px`,
                color: isDark ? 'var(--color-on-primary)' : 'var(--color-primary)',
                backgroundColor: 'transparent',
                border: '1px solid var(--color-outline)',
                borderRadius: `${BORDER_RADIUS}px`,
                opacity: 0.8,
                transition: 'color 300ms ease, background-color 300ms ease, border-color 300ms ease, opacity 300ms ease',
                '&.Mui-selected': {
                    color: 'var(--color-primary)',
                    backgroundColor: 'var(--color-on-primary)',
                    borderColor: 'var(--color-primary)',
                    opacity: 1,
                    '&:hover': {
                        color: 'var(--color-on-primary)',
                        backgroundColor: 'var(--color-primary)'
                    }
                },
                '&.Mui-disabled': {
                    opacity: 0.4
                },
                '&.MuiPaginationItem-ellipsis': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'transparent',
                    border: 'none',
                    opacity: 0.6,
                    cursor: 'default',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        opacity: 0.6
                    }
                },
                '&:not(.MuiPaginationItem-ellipsis):hover': {
                    color: 'var(--color-on-primary)',
                    backgroundColor: 'var(--color-primary)',
                    opacity: 1
                }
            }
        },
        ...(props.sx ? (Array.isArray(props.sx) ? props.sx : [props.sx]) : [])
    ];

    return (
        <div suppressHydrationWarning className={`${containerClassName} w-full md:w-fit flex items-center justify-center bg-background dark:bg-on-background border border-outline-variant rounded-lg shadow-lg p-2.5`}>
            <Pagination
                {...props}
                sx={sx}
            />
        </div>
    );
}