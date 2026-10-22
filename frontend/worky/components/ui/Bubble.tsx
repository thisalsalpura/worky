'use client';
import { motion, useReducedMotion } from 'framer-motion';

type BubbleProps = {
    className: string;
    x: number[];
    y: number[];
    scale: number[];
    duration?: number;
    style?: React.CSSProperties;
};

export function Bubble({ className, x, y, scale, duration = 30, style }: BubbleProps) {

    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div
            className={`${className} absolute rounded-full`}
            animate={prefersReducedMotion ? { scale } : { x, y, scale }}
            transition={{
                duration,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut'
            }}
            style={style}
        />
    );
}