'use client';
import { ReactNode, useState } from 'react';
import { useTheme } from 'next-themes';
import { Box, Tab, TabProps, Tabs, TabsProps } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { SIZES, SPACING } from '@/libs/design-tokens';
import { getPillItemSx } from '@/libs/mui-styles';

interface TabItem {
    label: string;
    content: ReactNode;
    disabled?: boolean;
};

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
                    ...getPillItemSx(SIZES.itemSize),
                    margin: 0,
                    marginRight: `${SPACING.space2}px`,
                    '&:last-of-type': {
                        marginRight: 0
                    },
                    color: isDark ? 'var(--color-on-primary)' : 'var(--color-primary)'
                },
                ...(props.sx ? (Array.isArray(props.sx) ? props.sx : [props.sx]) : [])
            ]}
        />
    );
}

export function CustomTabs({ tabs, containerClassName = '', panelClassName = '', value, onChange, ...props }: CustomTabsProps) {

    const [activeTab, setActiveTab] = useState<number>(0);

    const clampedActiveTab = Math.min(activeTab, Math.max(0, tabs.length - 1));

    const effectiveTabIndex = tabs.length === 0 || value === false
        ? false
        : typeof value === 'number'
            ? Math.min(Math.max(value, 0), tabs.length - 1)
            : clampedActiveTab;

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
                height: 'auto'
            },
            '& .MuiTabs-scrollButtons': {
                width: `${SIZES.itemSize}px`,
                height: `${SIZES.itemSize}px`,
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
                variant='scrollable'
                scrollButtons='auto'
                slots={{
                    startScrollButtonIcon: () => (
                        <FontAwesomeIcon icon={faCircleLeft} style={{ fontSize: '16px', display: 'block' }} />
                    ),
                    endScrollButtonIcon: () => (
                        <FontAwesomeIcon icon={faCircleRight} style={{ fontSize: '16px', display: 'block' }} />
                    )
                }}
                value={effectiveTabIndex}
                onChange={(event, newValue) => {
                    if (value === undefined) setActiveTab(newValue);
                    onChange?.(event, newValue);
                }}
                sx={tabsSx}
            >
                {tabs.map((tab, index) => (
                    <CustomTab
                        key={tabs.every((candidate, candidateIndex) => candidateIndex === index || candidate.label !== tab.label) ? `label:${tab.label}` : `index:${index}`}
                        label={tab.label}
                        disabled={tab.disabled}
                        isDark={isDark}
                    />
                ))}
            </Tabs>

            <Box className={`${panelClassName} w-full h-auto`}>
                {effectiveTabIndex === false ? undefined : tabs[effectiveTabIndex]?.content}
            </Box>
        </div>
    );
}