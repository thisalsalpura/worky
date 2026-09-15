# Worky — Frontend Style Guide

This document is the single source of truth for visual and code-pattern
consistency across the Worky frontend. Every component and page rewrite
follows these rules. Nothing in here is arbitrary — each scale is a fixed
step system so nobody has to "eyeball" a spacing or font value again.

---

## 1. Typography Scale

Two font families already exist in the project and stay as-is:

- `font-heading` → Londrina Solid (display / headings only)
- `font-base` → Ropa Sans (body copy, UI text, labels)

All heading and text sizing is standardized into 8 roles. Use the
`<Heading>` / `<Text>` components (see `components/ui/Typography.tsx`)
instead of raw `text-*` classes so the scale can never drift again.

| Role      | Tailwind classes                                  | Usage                                        |
| --------- | ------------------------------------------------- | -------------------------------------------- |
| `h1`      | `text-4xl md:text-5xl font-heading font-normal`   | Hero / page-defining titles (max 1 per page) |
| `h2`      | `text-3xl md:text-4xl font-heading font-normal`   | Section titles                               |
| `h3`      | `text-2xl md:text-3xl font-heading font-semibold` | Card / block titles                          |
| `h4`      | `text-xl md:text-2xl font-heading font-semibold`  | Sub-block titles                             |
| `h5`      | `text-lg md:text-xl font-base font-semibold`      | Small headers, list group titles             |
| `h6`      | `text-base md:text-lg font-base font-semibold`    | Inline emphasis headers                      |
| `body`    | `text-base font-base font-normal`                 | Default paragraph / UI text                  |
| `body-sm` | `text-sm font-base font-normal`                   | Secondary text, helper text                  |
| `caption` | `text-xs font-base font-normal`                   | Meta text, timestamps, tags                  |

Rules:

- Never hardcode `text-2xl`, `text-3xl`, etc. directly in a page/component.
  Always go through `<Heading level="h2">` or `<Text variant="body">`.
- Only one `h1` per page.
- Heading color defaults to `text-on-background dark:text-background`
  (see Color section) unless placed on an inverted surface
  (`bg-on-background`), in which case it's simply `text-background`.

---

## 2. Spacing Scale (4px base grid)

All margin/padding/gap values are restricted to this fixed step list.
No custom/arbitrary spacing values (`p-[13px]`, etc.) anywhere.

| Token      | Tailwind | px   | Usage                                             |
| ---------- | -------- | ---- | ------------------------------------------------- |
| `space-1`  | `1`      | 4px  | icon-to-label gaps                                |
| `space-2`  | `2`      | 8px  | tight inline gaps                                 |
| `space-3`  | `3`      | 12px | form field internal spacing                       |
| `space-4`  | `4`      | 16px | default component padding, mobile section padding |
| `space-6`  | `6`      | 24px | card internal padding (small)                     |
| `space-8`  | `8`      | 32px | card internal padding (default), section gaps     |
| `space-10` | `10`     | 40px | large card padding (desktop)                      |
| `space-12` | `12`     | 48px | section-to-section vertical rhythm                |

Standardized patterns (use these exact combinations, don't invent new ones):

- **Page section spacing:** `gap-y-12` between major `<section>`s.
- **Card padding:** `p-4 md:p-8` (small/medium cards), `p-5 md:p-10` (large
  feature cards/panels — profile, auth panels).
- **Internal stack spacing:** `gap-y-4` (form fields), `gap-y-8` (card
  content blocks).
- **Inline icon+text gaps:** `gap-x-2` (tight), `gap-x-4` (default).
- **Grid gutters:** `gap-y-8 lg:gap-x-8` for 2-column responsive layouts.

---

## 3. Radius Scale

| Token         | Tailwind       | px   | Usage                                                                                    |
| ------------- | -------------- | ---- | ---------------------------------------------------------------------------------------- |
| `radius-md`   | `rounded-lg`   | 8px  | Images, thumbnails, small chips                                                          |
| `radius-lg`   | `rounded-xl`   | 12px | Inputs, buttons, form controls (matches existing `BORDER_RADIUS = 12` in MUI components) |
| `radius-xl`   | `rounded-2xl`  | 16px | Navbar shell, cards, dropdowns/popovers                                                  |
| `radius-full` | `rounded-full` | —    | Avatars, icon buttons, pills, pagination items                                           |

The MUI `BORDER_RADIUS` constant in every Custom\* component must always
reference `RADIUS.lg` / `RADIUS.xl` from `lib/design-tokens.ts` — never a
raw duplicated number.

---

## 4. Color Usage

Colors are **never** hardcoded. Always use the semantic MD3 tokens already
defined in `theme.css` / exposed via Tailwind (`--color-primary`,
`--color-on-background`, etc.).

Standard pairings (don't mix and match beyond these):

| Surface              | Text                      | Usage                                                            |
| -------------------- | ------------------------- | ---------------------------------------------------------------- |
| `bg-background`      | `text-on-background`      | Page background                                                  |
| `bg-on-background`   | `text-background`         | Cards/panels (inverted surface — this app's dominant card style) |
| `bg-primary`         | `text-on-primary`         | Primary buttons, active nav state                                |
| `bg-on-primary`      | `text-primary`            | Secondary/hover-inverted buttons                                 |
| `bg-surface-variant` | `text-on-surface-variant` | Nested/muted panels inside a card                                |
| `bg-error-container` | `text-on-error-container` | Destructive action panels                                        |
| `bg-error`           | `text-on-error`           | Destructive buttons                                              |

Rule: **stop writing manual dark-mode pairs** like
`text-on-background dark:text-background`. Since cards already use
`bg-on-background` (which itself flips appropriately between the `.light`
and `.dark` token sets), the correct token pairing above already handles
theme switching — manual `dark:` overrides on text color are a code smell
in this codebase and should be removed wherever the surface/text pairing
above is followed correctly.

Outline colors: `border-outline` (default), `border-outline-variant`
(subtle/nested borders). Opacity modifiers stay at `opacity-20` for
`<HorizontalRule />`-style dividers only.

---

## 5. Component File Pattern

Every component/page follows this exact shape, top to bottom:

```tsx
"use client"; // only if needed — omit for server components

// 1. React / Next imports
import { useState } from "react";
import Image from "next/image";

// 2. Third-party library imports (alphabetical by package)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

// 3. Absolute internal imports (@/...), grouped: interfaces → constants → lib → components
import { User } from "@/components/interfaces/User";
import { COUNTRIES } from "@/constants/countries";
import { RADIUS, SPACING } from "@/lib/design-tokens";
import { Button } from "@/components/ui/Button";

// 4. Local constants (SCREAMING_SNAKE_CASE), always pulled from design-tokens where applicable
const FIELD_HEIGHT = 48;

// 5. Types/interfaces local to this file only
type ComponentProps = {
  label: string;
};

// 6. Component — always a named `export function ComponentName(...)`.
//    Pages are the one exception: `const Page = () => {...}; export default Page;`
export function ComponentName({ label }: ComponentProps) {
  // hooks first
  const [value, setValue] = useState("");

  // derived values / handlers next
  const handleClick = () => {};

  // render
  return <div>{label}</div>;
}
```

Rules:

- **Components** (`components/**`) → `export function Name() {}`.
- **Pages** (`app/**/page.tsx`) → `const Name = () => {}` + `export default Name;`
  (this matches the existing convention across all page.tsx files and is kept).
- JSX prop order: `key/ref` → structural props (`href`, `type`, `value`) →
  event handlers (`onClick`, `onChange`) → styling (`className`, `sx`) →
  `aria-*`.
- No inline magic numbers for radius/height — pull from
  `lib/design-tokens.ts`.
- Every MUI wrapper component pulls its shared `sx` foundation from
  `lib/muiStyles.ts` and only adds component-specific overrides locally.

---

## 6. MUI Style De-duplication

Previously, `CustomTextField`, `CustomSelect`, `CustomTabs`,
`CustomPagination`, `CustomCheckbox`, and `CustomAccordion` each
re-implemented near-identical `sx` objects (border colors, radius, hover
states, focus states, typography). These are now centralized in
`lib/muiStyles.ts`:

- `baseTypography` — shared font/size/weight object.
- `getOutlinedFieldSx()` — shared border/hover/focus/error states for
  text-field-like inputs (`CustomTextField`, `CustomSelect`).
- `getPillItemSx()` — shared selected/hover/disabled states for
  chip-like items (`CustomTabs` tabs, `CustomPagination` items).
- `RADIUS`, `SPACING`, `SIZES` — numeric tokens from `design-tokens.ts`.

This removes ~70% of the duplicated `sx` code across the MUI wrapper
components while keeping each component's public API unchanged.

---

## 7. Applying This Guide

Going forward, every file rewritten in this project:

1. Imports typography via `<Heading>` / `<Text>` — no raw `text-*xl` on
   headings.
2. Uses only the spacing tokens/patterns from Section 2.
3. Uses only the radius tokens from Section 3.
4. Uses only the color pairings from Section 4 (no manual `dark:` text
   overrides).
5. Follows the import order and component shape from Section 5.
6. Pulls shared MUI style logic from `lib/muiStyles.ts` per Section 6.
