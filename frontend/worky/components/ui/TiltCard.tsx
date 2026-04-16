'use client';
import React, { useEffect, useRef, ReactNode } from 'react';
import VanillaTilt from 'vanilla-tilt';

type TiltCardProps = {
    children: ReactNode;
    className: string;
}

export function TiltCard({ children, className }: TiltCardProps) {

    const tiltRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tiltNode = tiltRef.current;
        if (!tiltNode) return;

        VanillaTilt.init(tiltNode, {
            max: 15,
            speed: 400,
            perspective: 1000,
            scale: 1.05,
            glare: false
        });

        return () => {
            const tiltElement = tiltNode as HTMLDivElement & { vanillaTilt?: { destroy: () => void } };
            tiltElement.vanillaTilt?.destroy();
        };
    }, []);

    return (
        <div ref={tiltRef} className={`${className} transform-style-preserve-3d`}>
            {children}
        </div>
    );
}