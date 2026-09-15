'use client';
import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSlots, AccordionSummary, Fade, accordionClasses, accordionDetailsClasses } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FaqItem } from '@/components/interfaces/FaqItem';
import { Text } from '@/components/ui/Typography';
import { RADIUS } from '@/libs/design-tokens';

export function CustomAccordion({ item }: { item: FaqItem }) {

    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <Accordion
            disableGutters
            elevation={0}
            expanded={expanded}
            onChange={() => setExpanded(prev => !prev)}
            slots={{ transition: Fade as AccordionSlots['transition'] }}
            slotProps={{ transition: { timeout: 300 } }}
            sx={[
                {
                    width: '100%',
                    backgroundImage: 'none',
                    backgroundColor: 'transparent',
                    border: '1px solid var(--color-outline-variant)',
                    borderRadius: `${RADIUS.lg}px !important`,
                    boxShadow: 'none',
                    overflow: 'hidden',
                    '& .MuiAccordionSummary-root': {
                        alignItems: 'center',
                        backgroundColor: 'var(--color-surface-variant)',
                        padding: '16px',
                        gap: '16px'
                    },
                    '& .MuiAccordionSummary-content': {
                        margin: 0
                    },
                    '& .MuiAccordionSummary-expandIconWrapper': {
                        transform: 'none',
                        transition: 'none'
                    },
                    '& .MuiAccordionDetails-root': {
                        backgroundColor: 'var(--color-background)',
                        padding: '16px'
                    }
                },
                expanded ? {
                    [`& .${accordionClasses.region}`]: { height: 'auto' },
                    [`& .${accordionDetailsClasses.root}`]: { display: 'block' }
                } : {
                    [`& .${accordionClasses.region}`]: { height: 0 },
                    [`& .${accordionDetailsClasses.root}`]: { display: 'none' }
                }
            ]}
        >
            <AccordionSummary
                expandIcon={
                    <div className='w-8 h-8 shrink-0 flex items-center justify-center bg-on-background border border-outline-variant hover:bg-background rounded-full transition-colors duration-300 cursor-pointer group'>
                        <FontAwesomeIcon
                            icon={expanded ? faCircleChevronUp : faCircleChevronDown}
                            className='text-base text-background group-hover:text-on-background'
                        />
                    </div>
                }
                aria-controls={`${item.id}-content`}
                id={`${item.id}-header`}
            >
                <Text variant='body' className='text-on-background'>
                    <span className='font-semibold'>{item.question}</span>
                </Text>
            </AccordionSummary>
            <AccordionDetails>
                <Text variant='body' className='text-on-background'>{item.answer}</Text>
            </AccordionDetails>
        </Accordion>
    );
}