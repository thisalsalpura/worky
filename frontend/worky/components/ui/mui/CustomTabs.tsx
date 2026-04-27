'use client';
import { ReactNode, useState } from 'react';
import { Tabs, TabsProps, Tab, TabProps, Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const TAB_HEIGHT = 48;
const ICON_SIZE = 36;
const BORDER_RADIUS = 12;

const BASE_TYPOGRAPHY = {
    fontSize: '16px',
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

function CustomTab(props: TabProps) {
    return (
        <Tab
            disableRipple
            {...props}
            sx={[
                {
                    ...BASE_TYPOGRAPHY,
                    minWidth: 'fit-content',
                    height: '100%',
                    minHeight: 'unset',
                    color: 'var(--color-on-primary)',
                    borderRadius: `${BORDER_RADIUS}px`,
                    padding: '0 16px',
                    opacity: 0.6,
                    textTransform: 'none',
                    transition: 'color 300ms ease, background-color 300ms ease, opacity 300ms ease',
                    overflow: 'hidden',
                    '&:hover': {
                        opacity: 1,
                        backgroundColor: 'rgba(var(--color-on-primary-rgb, 255,255,255), 0.1)'
                    },
                    '&.Mui-selected': {
                        color: 'var(--color-primary)',
                        backgroundColor: 'var(--color-on-primary)',
                        border: '1px solid var(--color-outline)',
                        opacity: 1
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

    const tabsSx: SxProps<Theme> = [
        {
            width: '100%',
            maxWidth: 'fit-content',
            height: `${TAB_HEIGHT}px`,
            minHeight: `${TAB_HEIGHT}px`,
            backgroundColor: 'var(--color-primary)',
            border: '1px solid var(--color-outline)',
            borderRadius: `${BORDER_RADIUS}px`,
            padding: '4px',
            '& .MuiTabs-indicator': {
                display: 'none'
            },
            '& .MuiTabs-flexContainer': {
                gap: '4px',
                height: '100%'
            },
            '& .MuiTabs-scrollButtons': {
                width: `${ICON_SIZE}px`,
                height: `${ICON_SIZE}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                color: 'var(--color-on-primary)',
                opacity: 0.6,
                transition: 'opacity 300ms ease',
                '&:hover': {
                    opacity: 1
                },
                '&.Mui-disabled': {
                    opacity: 0.2
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
        <div className={`${containerClassName} w-full h-auto flex flex-col gap-y-4`}>
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
                    ),
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
                    />
                ))}
            </Tabs>

            <Box className={`${panelClassName} w-full h-auto`}>
                {tabs[activeTab]?.content}
            </Box>
        </div>
    );
}