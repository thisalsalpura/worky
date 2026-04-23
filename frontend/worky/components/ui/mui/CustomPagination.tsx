'use client';
import { Pagination, PaginationProps } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

const ITEM_SIZE = 36;
const BORDER_RADIUS = 1000;

const BASE_TYPOGRAPHY = {
    fontSize: '16px',
    fontFamily: 'var(--font-ropa-sans), sans-serif',
    fontWeight: 600
} as const;

type CustomPaginationProps = PaginationProps & {
    containerClassName?: string;
};

export function CustomPagination({ containerClassName = '', ...props }: CustomPaginationProps) {

    const sx: SxProps<Theme> = [
        {
            '& .MuiPaginationItem-root': {
                ...BASE_TYPOGRAPHY,
                margin: '0 3px',
                width: `${ITEM_SIZE}px`,
                height: `${ITEM_SIZE}px`,
                minWidth: `${ITEM_SIZE}px`,
                color: 'var(--color-on-primary)',
                backgroundColor: 'transparent',
                border: '1px solid var(--color-outline)',
                borderRadius: `${BORDER_RADIUS}px`,
                opacity: 0.8,
                transition: 'color 300ms ease, background-color 300ms ease, border-color 300ms ease, opacity 300ms ease',
                '&.Mui-selected': {
                    color: 'var(--color-on-primary)',
                    backgroundColor: 'var(--color-primary)',
                    borderColor: 'var(--color-on-primary)',
                    opacity: 1,
                    '&:hover': {
                        color: 'var(--color-primary)',
                        backgroundColor: 'var(--color-on-primary)',
                        borderColor: 'var(--color-on-primary)'
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
                    color: 'var(--color-primary)',
                    backgroundColor: 'var(--color-on-primary)',
                    opacity: 1
                }
            }
        },
        ...(Array.isArray(props.sx) ? props.sx : props.sx ? [props.sx] : [])
    ];

    return (
        <div className={`${containerClassName} w-fit flex items-center justify-center bg-primary border border-outline rounded-xl p-2.5`}>
            <Pagination
                {...props}
                sx={sx}
            />
        </div>
    );
}