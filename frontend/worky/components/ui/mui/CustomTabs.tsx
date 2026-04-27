'use client';
import { ReactNode, useState } from 'react';
import { useTheme } from 'next-themes';
import { Tabs, TabsProps, Tab, TabProps, Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const ITEM_SIZE = 36;
const BORDER_RADIUS = 12;

const BASE_TYPOGRAPHY = {
    fontSize: '14px',
    fontFamily: 'var(--font-ropa-sans), sans-serif',
    fontWeight: 600
} as const;

interface TabItem {
    label: string;
    content: ReactNode;
    disabled?: boolean;
}

type CustomTabsProps = Omit<TabsProps, 'children'> & {
    tabs: TabItem[];
    containerClassName?: string;
    panelClassName?: string;
};

function CustomTab({ isDark, ...props }: TabProps & { isDark: boolean }) {
    return (
        <Tab
            disableRipple
            {...props}
            sx={[
                {
                    ...BASE_TYPOGRAPHY,
                    minWidth: 'fit-content',
                    height: `${ITEM_SIZE}px`,
                    minHeight: `${ITEM_SIZE}px`,
                    color: isDark ? 'var(--color-on-primary)' : 'var(--color-primary)',
                    backgroundColor: 'transparent',
                    border: '1px solid var(--color-outline)',
                    borderRadius: `${BORDER_RADIUS}px`,
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
                    }
                },
                ...(props.sx ? (Array.isArray(props.sx) ? props.sx : [props.sx]) : [])
            ]}
        />
    );
}

export function CustomTabs({ tabs, containerClassName = '', panelClassName = '', ...props }: CustomTabsProps) {

    const [activeTab, setActiveTab] = useState<number>(0);

    const { resolvedTheme } = useTheme();

    const isDark = resolvedTheme === 'dark';

    const tabsSx: SxProps<Theme> = [
        {
            width: '100%',
            maxWidth: 'fit-content',
            height: 'auto',
            minHeight: 'auto',
            '& .MuiTabs-indicator': {
                display: 'none'
            },
            '& .MuiTabs-flexContainer': {
                height: 'auto',
                gap: '4px'
            },
            '& .MuiTabs-scrollButtons': {
                width: `${ITEM_SIZE}px`,
                height: `${ITEM_SIZE}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                color: isDark ? 'var(--color-on-primary)' : 'var(--color-primary)',
                opacity: 0.8,
                transition: 'opacity 300ms ease',
                '&:hover': {
                    opacity: 1
                },
                '&.Mui-disabled': {
                    opacity: 0.4
                }
            },
            '& .MuiTabs-scrollableX': {
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                    display: 'none'
                }
            }
        },
        ...(props.sx ? (Array.isArray(props.sx) ? props.sx : [props.sx]) : [])
    ];

    return (
        <div suppressHydrationWarning className={`${containerClassName} w-full h-auto flex flex-col gap-y-4`}>
            <Tabs
                {...props}
                variant="scrollable"
                scrollButtons="auto"
                slots={{
                    StartScrollButtonIcon: () => (
                        <FontAwesomeIcon icon={faCircleChevronLeft} style={{ fontSize: '16px', display: 'block' }} />
                    ),
                    EndScrollButtonIcon: () => (
                        <FontAwesomeIcon icon={faCircleChevronRight} style={{ fontSize: '16px', display: 'block' }} />
                    )
                }}
                value={activeTab}
                onChange={(_, newValue) => setActiveTab(newValue)}
                sx={tabsSx}
            >
                {tabs.map((tab, index) => (
                    <CustomTab
                        key={index}
                        label={tab.label}
                        disabled={tab.disabled}
                        isDark={isDark}
                    />
                ))}
            </Tabs>

            <Box className={`${panelClassName} w-full h-auto`}>
                {tabs[activeTab]?.content}
            </Box>
        </div>
    );
}