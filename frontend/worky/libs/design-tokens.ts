export const SPACING = {
    space1: 4,
    space2: 8,
    space3: 12,
    space4: 16,
    space6: 24,
    space8: 32,
    space10: 40,
    space12: 48
} as const;

export const RADIUS = {
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999
} as const;

export const SIZES = {
    fieldHeight: 48,
    itemSize: 36,
    iconButtonSize: 36
} as const;

export const TYPOGRAPHY = {
    h1: 'text-4xl md:text-5xl font-heading font-normal',
    h2: 'text-3xl md:text-4xl font-heading font-normal',
    h3: 'text-2xl md:text-3xl font-heading font-semibold',
    h4: 'text-xl md:text-2xl font-heading font-semibold',
    h5: 'text-lg md:text-xl font-base font-semibold',
    h6: 'text-base md:text-lg font-base font-semibold',
    body: 'text-base font-base font-normal',
    bodySm: 'text-sm font-base font-normal',
    caption: 'text-xs font-base font-normal'
} as const;

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TextVariant = 'body' | 'bodySm' | 'caption';