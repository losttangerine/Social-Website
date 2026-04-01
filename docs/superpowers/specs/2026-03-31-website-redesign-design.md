# Website Redesign — Design Spec
**Date:** 2026-03-31  
**Approach:** Adapt + extend (B) — keep gallery/modal/scroll logic, rebuild shell & theme, add commissions route

---

## Goals

Rebuild the Lost Tangerine social/portfolio site to match the new warm-orange design from `WebsiteDesignUpdate.md`, while preserving all existing real data (artwork, emotes, animations, social links) and the proven gallery/lightbox component logic. Add a real `/commissions` page populated with actual pricing and TOS scraped from losttangerine.carrd.co.

---

## Pages

### `/` — Home
- Glass navbar
- Fixed left side social orbit sidebar (desktop only)
- Hero section
- Portfolio gallery (bento grid with filter tabs)
- Contact form ("Studio Invite")
- Footer

### `/commissions` — Commissions & Pricing
- Commission status badge (pulsing "Open")
- Pricing bento grid
- Terms of Service
- Commission request form
- Footer

---

## What Changes vs. Current

| File | Action |
|------|--------|
| `app/globals.css` | Replace dark theme CSS vars with warm orange token system |
| `app/layout.tsx` | Switch fonts to Plus Jakarta Sans + Manrope via `next/font/google` |
| `app/page.tsx` | Rebuild with new section order |
| `components/Navbar.tsx` | Rebuild — glass blur, 3 nav links, Lost Tangerine logo |
| `components/Header.tsx` | Rebuild — hero with large name, label, dual CTA |
| `components/SocialLinks.tsx` | Rebuild as `SideNav.tsx` — fixed left pill sidebar |
| `components/PortfolioSection.tsx` | Rebuild — filter tabs + bento grid layout |
| `components/Footer.tsx` | New — orange background, copyright |
| `app/commissions/page.tsx` | New page |

## What Stays Untouched

| File | Reason |
|------|--------|
| `components/ArtworkGallery.tsx` | Solid grid + lightbox trigger logic |
| `components/AnimationGallery.tsx` | GIF/video player logic |
| `components/ArtworkModal.tsx` | Lightbox works well |
| `components/ScrollReveal.tsx` | Reused across sections |
| `data/portfolio.ts` | Real artwork/emote/animation paths |
| `data/socials.ts` | Real social URLs and brand colors |

---

## Theme & Visual System

**Fonts (next/font/google):**
- `Plus_Jakarta_Sans` — weights 400, 700, 800 → CSS var `--font-headline`
- `Manrope` — weights 400, 500, 600, 700 → CSS var `--font-body`

**Tailwind custom colors (added to `tailwind.config`):**
```
primary:                 #964300
primary-fixed:           #f9873e
primary-container:       #f9873e
on-primary:              #fff0e9
on-primary-container:    #451b00
background:              #f7f6f3
surface:                 #f7f6f3
surface-container-low:   #f1f1ee
surface-container:       #e8e8e5
surface-container-high:  #e3e3df
surface-container-lowest:#ffffff
on-surface:              #2e2f2d
on-surface-variant:      #5b5c5a
outline:                 #767775
outline-variant:         #adadab
```

**Icons:** `react-icons/fa6` retained for brand social icons. No new icon font dependency.

---

## Component Details

### Navbar
- `fixed top-0 w-full z-50`
- `bg-stone-50/80 backdrop-blur-xl` on scroll, transparent when at top
- Logo: "Lost Tangerine" (font-headline, text-orange-950)
- Links: Portfolio (`/#portfolio`), Commissions (`/commissions`), Contact (`/#contact`)
- Active link: orange underline, bold
- Mobile: hamburger → animated dropdown (keep existing AnimatePresence pattern)
- Next.js `<Link>` for internal navigation

### SideNav (replaces SocialLinks)
- `fixed left-4 top-1/2 -translate-y-1/2 hidden lg:block`
- Pill shape: `rounded-full py-4 bg-stone-100/50 backdrop-blur-xl shadow-xl`
- Small avatar circle at top (placeholder image or initials "LT")
- 4 brand icon links from `socials.ts`: Twitch, YouTube, TikTok, X/Twitter
- Hover: `hover:translate-x-1 hover:bg-orange-100 rounded-full`

### Header (Hero)
- Full viewport height section
- Label: "Digital Artist & Animator" — small uppercase orange text
- H1: "Lost Tangerine." — 6xl–8xl, font-headline, font-extrabold, tracking-tighter
- Tagline: "Digital art & animation"
- CTAs: `View Portfolio` (filled orange pill) + `Commissions` (outlined pill)
- Background: warm radial glow (keep existing gradient pattern)
- Framer Motion stagger animation (keep existing `containerVariants`/`itemVariants` pattern)

### PortfolioSection
- Section id="portfolio"
- Filter tabs: ALL / ARTWORK / EMOTES / ANIMATION (client component, useState)
- Active tab: white pill bg, others muted
- Bento grid: `grid grid-cols-1 md:grid-cols-3 gap-6`
  - Artworks span 2 cols, aspect-[16/9]
  - Emotes: 1 col, 2×2 grid of emote thumbs, aspect-square
  - Animations: span 2 cols, play button overlay
- Passes filtered data to existing `ArtworkGallery` / `AnimationGallery`
- ScrollReveal wrapper on section header

### Contact Section (Studio Invite)
- Section id="contact"
- `bg-primary-container` background (orange tint)
- Fields: Name, Email, Message (textarea)
- Submit button: "Send Proposal"
- Form is presentational (no backend); submits to `mailto:` or logs to console

### Footer
- `bg-orange-500` background, `text-stone-50`
- Left: "Lost Tangerine" + tagline
- Right: Privacy Policy · Terms of Service · Studio Invite links
- Bottom: © year · All rights reserved

---

## Commissions Page

### Commission Status Badge
```
inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-primary
```
- Pulsing dot (animate-ping) + "Commission Status: Open"

### Pricing Bento Grid
Three cards in a `grid grid-cols-1 md:grid-cols-12` layout:

**Character Illustrations (col-span-7):**
- Sketch: $5–10
- Headshot/Chibi: $40
- Half Body: $55
- Full Body: $85
- Simple/Blurred Background: +$5

**Streaming Emotes (col-span-5):**
- Per Emote: $30
- Set of Three: $75
- Set of Five: $125

**Animated Emotes (col-span-12, full row):**
- Base: $50/emote
- Complexity surcharges: 4–5 moving parts +$10 · 6–7 +$15 · 8–9 +$20
- Note: "Complexity and pricing decided together — just reach out"

### Terms of Service
Real rules from losttangerine.carrd.co, organized into 4 groups:

**01. Payment:** Paypal, Venmo, or Cash App. Upfront or after sketch confirmation. No refunds.

**02. Usage:** Personal use — provide credit when sharing. Do not claim as your own. I retain right to share in portfolio and may stream the process (private on request).

**03. Revisions & Timeline:** 2 major revision limit (extra fees may apply). 3–7 day turnaround depending on complexity. No NSFW; slightly lewd is fine.

**04. Delivery:** Files sent via Discord or Email — send those in advance. Questions → Twitter @losttangerine.

### Commission Request Form
Fields: Full Name · Email · Commission Type (dropdown: Character Illustration / Emote Pack / Animated Emote / Other) · Description (textarea)
Submit: "Send Request" button (presentational)

---

## Routing & Layout

```
app/
  layout.tsx          ← fonts, metadata, body class
  globals.css         ← warm token system
  page.tsx            ← Home
  commissions/
    page.tsx          ← Commissions
```

`layout.tsx` wraps all pages with fonts and base styles. `Navbar` and `Footer` rendered in each page (not in layout) so `/commissions` can have the same chrome without forcing a shared layout boundary.

---

## Dependencies

No new dependencies needed. Existing stack handles everything:
- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- react-icons
- next/font/google (built-in)
