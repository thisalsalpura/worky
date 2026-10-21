'use client';
import { useTheme } from 'next-themes';
import { Pagination, PaginationItem, PaginationProps } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SIZES } from '@/libs/design-tokens';
import { getPillItemSx } from '@/libs/mui-styles';

type CustomPaginationProps = PaginationProps & {
    containerClassName?: string;
};

export function CustomPagination({ containerClassName = '', ...props }: CustomPaginationProps) {

    const { resolvedTheme } = useTheme();

    const isDark = resolvedTheme === 'dark';

    const sx: SxProps<Theme> = [
        {
            '& .MuiPaginationItem-root': {
                ...getPillItemSx(SIZES.itemSize),
                color: isDark ? 'var(--color-on-primary)' : 'var(--color-primary)',
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
                }
            }
        },
        ...(props.sx ? (Array.isArray(props.sx) ? props.sx : [props.sx]) : [])
    ];

    return (
        <div suppressHydrationWarning className={`${containerClassName} w-full md:w-fit flex items-center justify-center bg-background dark:bg-on-background border border-outline-variant rounded-lg shadow-lg p-2.5`}>
            <Pagination
                {...props}
                renderItem={(item) => (
                    <PaginationItem
                        {...item}
                        slots={{
                            previous: () => (
                                <FontAwesomeIcon icon={faCircleChevronLeft} style={{ fontSize: '16px', display: 'block' }} />
                            ),
                            next: () => (
                                <FontAwesomeIcon icon={faCircleChevronRight} style={{ fontSize: '16px', display: 'block' }} />
                            )
                        }}
                    />
                )}
                sx={sx}
            />
        </div>
    );
}