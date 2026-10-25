import arcjet, { shield } from '@arcjet/next';

const arcjetKey = process.env.ARCJET_KEY;

if (!arcjetKey) throw new Error('ARCJET_KEY must be set to initialize Arcjet.');

export const aj = arcjet({
    key: arcjetKey,
    rules: [
        shield({ mode: 'LIVE' })
    ]
});