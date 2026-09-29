import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { HeadingLevel, TextVariant, TYPOGRAPHY } from '@/libs/design-tokens';

type HeadingProps<T extends ElementType> = {
    level: HeadingLevel;
    as?: T;
    className?: string;
    children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, 'className' | 'children' | 'as'>;

export function Heading<T extends ElementType = HeadingLevel>({
    level,
    as,
    className = '',
    children,
    ...rest
}: HeadingProps<T>) {

    const Tag = (as ?? level) as ElementType;

    return (
        <Tag className={`${TYPOGRAPHY[level]} ${className}`} {...rest}>
            {children}
        </Tag>
    );
}

type TextProps<T extends ElementType> = {
    variant?: TextVariant;
    as?: T;
    className?: string;
    children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, 'className' | 'children' | 'as'>;

export function Text<T extends ElementType = 'p'>({
    variant = 'body',
    as,
    className = '',
    children,
    ...rest
}: TextProps<T>) {

    const Tag = (as ?? 'p') as ElementType;

    return (
        <Tag className={`${TYPOGRAPHY[variant]} ${className}`} {...rest}>
            {children}
        </Tag>
    );
}