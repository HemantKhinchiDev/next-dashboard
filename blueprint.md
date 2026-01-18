# Project Blueprint

## Overview
This is a Next.js Dashboard application using App Router, React Server Components, and Tailwind CSS. The project is currently in the setup phase.

## Current State
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4 (configured via `@theme` in `globals.css`).
- **Fonts**: configured in `layout.tsx` (League Spartan, Open Sans, Plus Jakarta Sans) and `ui/fonts.ts`.
- **Known Issues**: `globals.css` contains references to "Geist" fonts which are not configured in `layout.tsx`, and redundant `:root` variable definitions.

## Plan: Fix CSS Configuration
1.  **Refactor `globals.css`**:
    - Remove invalid/redundant `:root` font variable definitions.
    - Update `@theme` block to reference the correctly defined font variables (`--font-body`, `--font-heading`) instead of the missing Geist variables.
    - Ensure Tailwind v4 compatibility.

## Future Plans
- Fix any build errors resulting from incorrect configuration.
- detailed feature implementation steps (to be added).
