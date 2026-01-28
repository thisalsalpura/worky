'use client';
import { useEffect, useRef, ReactNode } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface TiltCardProps {
    children: ReactNode;
    className?: string;
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {

    const tiltRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const tiltNode = tiltRef.current;
        if (!tiltNode) return;

        VanillaTilt.init(tiltNode, {
            max: 15,
            speed: 400,
            perspective: 1000,
            scale: 1.05,
            glare: false,
        });

        return () => {
            const tiltElement = tiltNode as HTMLDivElement & { vanillaTilt?: { destroy: () => void } };
            tiltElement.vanillaTilt?.destroy();
        };
    }, []);

    return (
        <div ref={tiltRef} className={`transform-style-preserve-3d ${className}`}>
            {children}
        </div>
    );
}