import { ElementType, ReactNode } from 'react';
import { HeadingLevel, TextVariant, TYPOGRAPHY } from '@/libs/design-tokens';

type HeadingProps = {
    level: HeadingLevel;
    as?: ElementType;
    className?: string;
    children: ReactNode;
};

export function Heading({ level, as, className = '', children }: HeadingProps) {

    const Tag = as ?? level;

    return (
        <Tag className={`${TYPOGRAPHY[level]} ${className}`}>
            {children}
        </Tag>
    );
}

type TextProps = {
    variant?: TextVariant;
    as?: ElementType;
    className?: string;
    children: ReactNode;
};

export function Text({ variant = 'body', as = 'p', className = '', children }: TextProps) {

    const Tag = as;

    return (
        <Tag className={`${TYPOGRAPHY[variant]} ${className}`}>
            {children}
        </Tag>
    );
}