'use client';
import { ReactNode, useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

type TiltCardProps = {
    children: ReactNode;
    className: string;
};

export function TiltCard({ children, className }: TiltCardProps) {

    const tiltRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tiltNode = tiltRef.current;

        if (!tiltNode) return;

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

        let isTiltInitialized = false;

        const destroyTilt = () => {
            if (!isTiltInitialized) return;

            const tiltElement = tiltNode as HTMLDivElement & { vanillaTilt?: { destroy: () => void } };

            tiltElement.vanillaTilt?.destroy();

            isTiltInitialized = false;
        };

        const initializeTilt = () => {
            if (isTiltInitialized) return;

            VanillaTilt.init(tiltNode, {
                max: 15,
                speed: 400,
                perspective: 1000,
                scale: 1.05,
                glare: false
            });

            isTiltInitialized = true;
        };

        const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
            if (event.matches) destroyTilt();
            else initializeTilt();
        };

        if (reducedMotion.matches) destroyTilt();
        else initializeTilt();

        reducedMotion.addEventListener('change', handleMotionPreferenceChange);

        return () => {
            reducedMotion.removeEventListener('change', handleMotionPreferenceChange);
            destroyTilt();
        };
    }, []);

    return (
        <div ref={tiltRef} className={`${className} transform-style-preserve-3d`}>
            {children}
        </div>
    );
}