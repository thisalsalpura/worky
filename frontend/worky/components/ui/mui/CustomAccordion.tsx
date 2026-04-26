'use client';
import { useState } from "react";
import { FaqItem } from "@/components/interfaces/FaqItem";
import { Accordion, AccordionSummary, AccordionDetails, AccordionSlots, Fade, accordionClasses, accordionDetailsClasses } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown, faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

const BORDER_RADIUS = 12;

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
                    backgroundColor: 'transparent',
                    backgroundImage: 'none',
                    border: '1px solid var(--color-outline-variant)',
                    borderRadius: `${BORDER_RADIUS}px !important`,
                    boxShadow: 'none',
                    overflow: 'hidden',
                    '& .MuiAccordionSummary-root': {
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
                    <div className="w-8 h-8 shrink-0 flex items-center justify-center bg-on-background border border-outline-variant hover:bg-background rounded-full transition-colors duration-300 cursor-pointer group">
                        <FontAwesomeIcon
                            icon={expanded ? faCircleChevronUp : faCircleChevronDown}
                            className="text-base text-background group-hover:text-on-background transition-transform duration-300"
                        />
                    </div>
                }
                aria-controls={`${item.id}-content`}
                id={`${item.id}-header`}
            >
                <p className="text-on-background font-base font-semibold">{item.question}</p>
            </AccordionSummary>
            <AccordionDetails>
                <p className="text-on-background font-base">{item.answer}</p>
            </AccordionDetails>
        </Accordion>
    );
}