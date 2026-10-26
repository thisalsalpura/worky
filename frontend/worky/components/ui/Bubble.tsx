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
            animate={prefersReducedMotion ? { scale: scale[0] } : { x, y, scale }}
            transition={{
                duration: prefersReducedMotion ? 0 : duration,
                repeat: prefersReducedMotion ? 0 : Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut'
            }}
            style={style}
        />
    );
}