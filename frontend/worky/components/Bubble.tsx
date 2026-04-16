'use client';
import { motion } from 'framer-motion';

interface BubbleProps {
    className: string;
    x: number[];
    y: number[];
    scale: number[];
    duration?: number;
    style?: React.CSSProperties;
}

const Bubble = ({ className, x, y, scale, duration = 20, style }: BubbleProps) => {
    return (
        <motion.div
            className={`absolute rounded-full ${className}`}
            animate={{ x, y, scale }}
            transition={{
                duration,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
            }}
            style={style}
        />
    );
}

export default Bubble;