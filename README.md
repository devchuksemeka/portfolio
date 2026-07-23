# Chuks Okafor — Portfolio

A terminal-themed portfolio built with [Next.js](https://nextjs.org) (App Router, TypeScript).

## Sections

- **Hero** — animated terminal emulator with typed command sequence
- **Stack** — categorized tech skills panel (frontend, backend, data, infra, web3, quality)
- **Experience** — git-log style career timeline with 7 roles
- **Featured project** — deep-dive on current work (Carojon)
- **Case studies** — 6 archived projects framed as case studies
- **Contact** — terminal-themed contact card with links

## Features

- Typing animation in the terminal hero
- Scroll-triggered reveal animations (`IntersectionObserver`)
- Animated stat counters (years, companies, etc.)
- Scroll-percentage indicator in the status bar
- `prefers-reduced-motion` respected throughout
- JetBrains Mono + Inter fonts via `next/font`

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Tech

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Pure CSS (dark terminal theme, no Tailwind utilities)
- `next/font` for Google Fonts
