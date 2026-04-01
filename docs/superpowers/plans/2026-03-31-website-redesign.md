# Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Lost Tangerine site shell to match the warm orange design from `WebsiteDesignUpdate.md`, add a real `/commissions` page with scraped pricing and TOS, and preserve all existing gallery/lightbox/animation logic.

**Architecture:** Approach B — keep `ArtworkGallery`, `AnimationGallery`, `ArtworkModal`, `ScrollReveal`, and both data files untouched. Rebuild `Navbar`, `Header`, `PortfolioSection`, `SocialLinks` (renamed to `SideNav`). Create `Footer`, `ContactSection`, and `app/commissions/page.tsx`. All theme tokens live in `globals.css` using Tailwind v4's `@theme` block (no `tailwind.config.js`).

**Tech Stack:** Next.js 16 (App Router), Tailwind CSS v4, Framer Motion, react-icons/fa6, next/font/google

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Modify | `app/globals.css` | Replace dark `@theme` tokens with warm orange system; keep legacy aliases so gallery components don't break |
| Modify | `app/layout.tsx` | Swap Inter for Plus Jakarta Sans + Manrope; expose CSS vars |
| Modify | `app/page.tsx` | Wire Navbar + SideNav + Header + PortfolioSection + ContactSection + Footer |
| Modify | `components/Navbar.tsx` | Glass-blur nav, 3 links, orange logo, mobile hamburger |
| Modify | `components/Header.tsx` | Warm hero: label + large name + tagline + dual CTAs |
| Modify | `components/PortfolioSection.tsx` | Filter tabs (ALL/ARTWORK/EMOTES/ANIMATION) + bento grid |
| Rename/Modify | `components/SocialLinks.tsx` → `components/SideNav.tsx` | Fixed left pill sidebar with LT avatar + brand icons |
| Create | `components/ContactSection.tsx` | "Studio Invite" form section |
| Create | `components/Footer.tsx` | Orange footer with links and copyright |
| Create | `app/commissions/page.tsx` | Status badge + pricing bento + ToS + request form |
| **Untouched** | `components/ArtworkGallery.tsx` | — |
| **Untouched** | `components/AnimationGallery.tsx` | — |
| **Untouched** | `components/ArtworkModal.tsx` | — |
| **Untouched** | `components/ScrollReveal.tsx` | — |
| **Untouched** | `data/portfolio.ts` | — |
| **Untouched** | `data/socials.ts` | — |

---

## Task 1: Theme Foundation — globals.css + layout.tsx

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace globals.css**

Replace the entire file with:

```css
@import "tailwindcss";

@theme {
  /* ── Fonts ─────────────────────────────────────── */
  --font-sans: var(--font-manrope), system-ui, sans-serif;
  --font-headline: var(--font-plus-jakarta-sans), system-ui, sans-serif;
  --font-body: var(--font-manrope), system-ui, sans-serif;

  /* ── New warm colour system ─────────────────────── */
  --color-primary:                  #964300;
  --color-primary-fixed:            #f9873e;
  --color-primary-container:        #f9873e;
  --color-primary-dim:              #843a00;
  --color-on-primary:               #fff0e9;
  --color-on-primary-container:     #451b00;

  --color-background:               #f7f6f3;
  --color-surface:                  #f7f6f3;
  --color-surface-bright:           #f7f6f3;
  --color-surface-dim:              #d4d5d1;
  --color-surface-container-lowest: #ffffff;
  --color-surface-container-low:    #f1f1ee;
  --color-surface-container:        #e8e8e5;
  --color-surface-container-high:   #e3e3df;
  --color-surface-container-highest:#ddddd9;
  --color-on-surface:               #2e2f2d;
  --color-on-surface-variant:       #5b5c5a;
  --color-outline:                  #767775;
  --color-outline-variant:          #adadab;

  /* ── Legacy aliases (ArtworkGallery / AnimationGallery keep working) ── */
  --color-surface-raised:           #e8e8e5;
  --color-surface-border:           #adadab;
  --color-accent:                   #964300;
  --color-accent-hover:             #e97b32;

  /* ── Animation ─────────────────────────────────── */
  --animate-fade-up: fadeUp 0.6s ease-out both;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

@layer base {
  html { scroll-behavior: smooth; }

  body {
    background-color: #f7f6f3;
    color: #2e2f2d;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: rgba(150, 67, 0, 0.15);
    color: #2e2f2d;
  }
}

@utility section-padding {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 5rem;
  padding-bottom: 5rem;

  @media (min-width: 640px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 7rem;
    padding-bottom: 7rem;
  }

  @media (min-width: 1024px) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
}

@utility glass-nav {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}
```

- [ ] **Step 2: Replace layout.tsx**

```tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lost Tangerine | Artist & Animator",
  description: "Portfolio and social links for Lost Tangerine — digital artist and animator.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${manrope.variable}`}>
      <body className="antialiased font-body bg-background text-on-surface">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Run dev server and verify**

```bash
npm run dev
```

Open `http://localhost:3000`. Expected: page background is warm cream (`#f7f6f3`), not black. Font rendering may still use old components — that's fine for now.

- [ ] **Step 4: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "feat: swap theme to warm orange system, update fonts"
```

---

## Task 2: Navbar

**Files:**
- Modify: `components/Navbar.tsx`

- [ ] **Step 1: Replace Navbar.tsx**

```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Commissions", href: "/commissions" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-50/80 glass-nav border-b border-outline-variant/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-headline font-bold text-lg tracking-tight text-orange-950 hover:text-primary transition-colors"
        >
          Lost Tangerine
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/commissions"
                ? pathname === "/commissions"
                : false;
            return (
              <motion.div key={link.href} whileHover={{ y: -1 }}>
                <Link
                  href={link.href}
                  className={`font-headline text-sm uppercase tracking-widest transition-colors ${
                    isActive
                      ? "text-primary font-bold border-b-2 border-primary pb-0.5"
                      : "text-stone-600 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-5 h-0.5 bg-on-surface transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-5 h-0.5 bg-on-surface transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-on-surface transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden bg-surface-container-low border-b border-outline-variant/30 px-4 pb-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-on-surface-variant hover:text-primary text-sm font-headline uppercase tracking-widest border-b border-outline-variant/20 last:border-0 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
```

- [ ] **Step 2: Verify in browser**

Expected: navbar shows "Lost Tangerine" logo in dark orange-brown, three nav links in muted stone, blurs on scroll, mobile hamburger toggles dropdown.

- [ ] **Step 3: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: rebuild navbar with warm theme and Next.js Link"
```

---

## Task 3: Hero (Header.tsx)

**Files:**
- Modify: `components/Header.tsx`

- [ ] **Step 1: Replace Header.tsx**

```tsx
"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Header() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* Warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(249,135,62,0.15) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center gap-6"
      >
        {/* Label */}
        <motion.p
          variants={itemVariants}
          className="text-xs uppercase tracking-[0.3em] text-primary font-headline font-bold"
        >
          Digital Artist &amp; Animator
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl md:text-8xl font-headline font-extrabold tracking-tighter text-on-surface leading-none"
        >
          Lost Tangerine
          <span className="text-primary">.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-on-surface-variant max-w-sm font-body"
        >
          Digital art &amp; animation
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mt-2"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 bg-primary text-on-primary rounded-full font-headline font-bold hover:scale-105 transition-transform duration-300 shadow-xl shadow-primary/20"
          >
            View Portfolio
          </a>
          <Link
            href="/commissions"
            className="px-8 py-4 border border-outline-variant text-primary rounded-full font-headline font-bold hover:bg-surface-container-low transition-colors"
          >
            Commissions
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

Expected: cream background, large "Lost Tangerine." in dark text with orange dot, orange label above, two pill buttons below. Stagger animation plays on load.

- [ ] **Step 3: Commit**

```bash
git add components/Header.tsx
git commit -m "feat: rebuild hero with warm theme and dual CTAs"
```

---

## Task 4: SideNav (replaces SocialLinks)

**Files:**
- Create: `components/SideNav.tsx`

- [ ] **Step 1: Create SideNav.tsx**

```tsx
import {
  FaTwitch,
  FaYoutube,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { IconType } from "react-icons";
import { socials } from "@/data/socials";

const ICON_MAP: Record<string, IconType> = {
  FaTwitch,
  FaYoutube,
  FaTiktok,
  FaXTwitter,
};

export default function SideNav() {
  return (
    <aside className="fixed left-4 top-1/2 -translate-y-1/2 rounded-full py-4 bg-stone-100/50 glass-nav shadow-xl shadow-orange-900/5 z-40 hidden lg:block">
      <div className="flex flex-col items-center gap-2 px-2">
        {/* Avatar / initials */}
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-2 text-on-primary font-headline font-bold text-sm select-none">
          LT
        </div>

        {socials.map((link) => {
          const Icon = ICON_MAP[link.iconName];
          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
              aria-label={link.label}
              className="text-stone-500 p-3 transition-all hover:translate-x-1 hover:bg-orange-100 rounded-full"
              style={{ "--brand": link.brandColor } as React.CSSProperties}
            >
              {Icon && (
                <Icon
                  className="text-xl hover:text-[var(--brand)] transition-colors"
                  aria-hidden="true"
                />
              )}
            </a>
          );
        })}
      </div>
    </aside>
  );
}
```

- [ ] **Step 2: Verify in browser (after wired into page.tsx in Task 7)**

Expected on desktop (≥1024px): pill sidebar visible on left mid-screen, orange "LT" circle at top, four brand icons below, each slides right on hover.

- [ ] **Step 3: Commit**

```bash
git add components/SideNav.tsx
git commit -m "feat: add SideNav fixed social orbit sidebar"
```

---

## Task 5: PortfolioSection (filter tabs + bento grid)

**Files:**
- Modify: `components/PortfolioSection.tsx`

- [ ] **Step 1: Replace PortfolioSection.tsx**

```tsx
"use client";

import { useState } from "react";
import { artworks, emotes, animations } from "@/data/portfolio";
import ArtworkGallery from "./ArtworkGallery";
import AnimationGallery from "./AnimationGallery";
import ScrollReveal from "./ScrollReveal";

type Filter = "all" | "artwork" | "emotes" | "animation";

const tabs: { label: string; value: Filter }[] = [
  { label: "ALL", value: "all" },
  { label: "ARTWORK", value: "artwork" },
  { label: "EMOTES", value: "emotes" },
  { label: "ANIMATION", value: "animation" },
];

export default function PortfolioSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const showArtwork = filter === "all" || filter === "artwork";
  const showEmotes = filter === "all" || filter === "emotes";
  const showAnimation = filter === "all" || filter === "animation";

  return (
    <section id="portfolio" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header + filter tabs */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-on-surface">
              The Gallery
            </h2>
            <div className="flex gap-2 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setFilter(tab.value)}
                  className={`px-4 py-1.5 rounded-full text-xs font-headline font-bold transition-colors ${
                    filter === tab.value
                      ? "bg-surface-container-lowest text-primary shadow-sm"
                      : "text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Artwork */}
        {showArtwork && (
          <div className="mb-20">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xl font-headline font-semibold text-on-surface">Artworks</h3>
                <div className="flex-1 h-px bg-outline-variant/40" />
              </div>
            </ScrollReveal>
            <ArtworkGallery artworks={artworks} />
          </div>
        )}

        {/* Emotes */}
        {showEmotes && (
          <div className="mb-20">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xl font-headline font-semibold text-on-surface">Emotes</h3>
                <div className="flex-1 h-px bg-outline-variant/40" />
              </div>
            </ScrollReveal>
            <ArtworkGallery artworks={emotes} fit="contain" aspect="square" />
          </div>
        )}

        {/* Animations */}
        {showAnimation && (
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xl font-headline font-semibold text-on-surface">Animations</h3>
                <div className="flex-1 h-px bg-outline-variant/40" />
              </div>
            </ScrollReveal>
            <AnimationGallery animations={animations} />
          </div>
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

Expected: filter tabs visible, clicking "EMOTES" hides artwork and animation sections, "ALL" shows everything. Gallery cards render with warm cream backgrounds.

- [ ] **Step 3: Commit**

```bash
git add components/PortfolioSection.tsx
git commit -m "feat: rebuild portfolio section with filter tabs and warm theme"
```

---

## Task 6: ContactSection + Footer

**Files:**
- Create: `components/ContactSection.tsx`
- Create: `components/Footer.tsx`

- [ ] **Step 1: Create ContactSection.tsx**

```tsx
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-primary-container px-4 sm:px-8 py-24 md:py-32"
    >
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-primary-container">
            STUDIO INVITE
          </h2>
          <p className="text-xl text-on-primary-container/80 font-body max-w-2xl mx-auto">
            Interested in a custom illustration or looking to collaborate on a
            motion project? Let&apos;s bring your vision to life.
          </p>
        </div>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-2">
            <label className="block font-headline font-bold text-on-primary-container px-2 text-sm uppercase tracking-widest">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-4 rounded-xl border-none bg-surface-container-lowest shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-on-surface"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-headline font-bold text-on-primary-container px-2 text-sm uppercase tracking-widest">
              Email Address
            </label>
            <input
              type="email"
              placeholder="hello@example.com"
              className="w-full p-4 rounded-xl border-none bg-surface-container-lowest shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-on-surface"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="block font-headline font-bold text-on-primary-container px-2 text-sm uppercase tracking-widest">
              Project Vision
            </label>
            <textarea
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full p-4 rounded-xl border-none bg-surface-container-lowest shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-on-surface resize-none"
            />
          </div>

          <div className="md:col-span-2 flex justify-center pt-4">
            <button
              type="submit"
              className="px-12 py-5 bg-on-primary-container text-surface-container-lowest rounded-full font-headline font-extrabold text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              SEND PROPOSAL
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create Footer.tsx**

```tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-orange-500">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-2xl font-headline font-black text-stone-50">
            Lost Tangerine
          </span>
          <p className="text-orange-100/80 font-body text-sm max-w-xs">
            Curated digital art and motion storytelling.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6 flex-wrap justify-center md:justify-end">
            <Link
              href="/commissions"
              className="text-orange-100/80 hover:text-white transition-colors font-body text-sm"
            >
              Commissions
            </Link>
            <a
              href="/#contact"
              className="text-white underline font-body text-sm"
            >
              Studio Invite
            </a>
          </div>
          <p className="text-stone-50/60 text-xs font-body">
            © {new Date().getFullYear()} Lost Tangerine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add components/ContactSection.tsx components/Footer.tsx
git commit -m "feat: add ContactSection and Footer components"
```

---

## Task 7: Wire Home Page (app/page.tsx)

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace app/page.tsx**

```tsx
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <SideNav />
      <main>
        <Header />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Delete old SocialLinks.tsx**

The `SideNav.tsx` replaces it. Remove the now-unused file:

```bash
rm "components/SocialLinks.tsx"
```

- [ ] **Step 3: Full home page verify in browser**

Check each element:
- Cream background throughout ✓
- Navbar glass blur on scroll ✓
- Left pill sidebar visible on desktop (≥1024px width) ✓
- Hero: label, name, tagline, two CTA buttons ✓
- Portfolio section: filter tabs + all three galleries ✓
- Contact section: orange background, form ✓
- Footer: orange bar, "Lost Tangerine" ✓

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: wire home page with all new components, remove SocialLinks"
```

---

## Task 8: Commissions Page

**Files:**
- Create: `app/commissions/page.tsx`

- [ ] **Step 1: Create app/commissions/page.tsx**

```tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Commissions | Lost Tangerine",
  description: "Commission pricing and terms for Lost Tangerine — custom illustrations, emotes, and animated emotes.",
};

export default function CommissionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-8 max-w-7xl mx-auto">

        {/* Status badge + Hero */}
        <header className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-primary text-xs font-headline font-bold tracking-widest uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Commission Status: Open
          </div>

          <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter text-on-surface mb-6 leading-none">
            Bring Your{" "}
            <span className="text-primary italic">Vision</span>{" "}
            to Life
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-body">
            Custom digital illustrations and smooth animations crafted with
            meticulous care.
          </p>
        </header>

        {/* Pricing Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">

          {/* Character Illustrations */}
          <div className="md:col-span-7 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
            <div className="p-8">
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-1">
                Character Illustrations
              </h3>
              <p className="text-on-surface-variant font-body text-sm mb-6">
                Per character — all styles include sketch revision before lining
              </p>
              <ul className="space-y-3">
                {[
                  { label: "Sketch", price: "$5–10" },
                  { label: "Headshot / Chibi", price: "$40" },
                  { label: "Half Body", price: "$55" },
                  { label: "Full Body", price: "$85" },
                  { label: "Simple / Blurred Background", price: "+$5" },
                ].map(({ label, price }) => (
                  <li
                    key={label}
                    className="flex justify-between items-center py-2 border-b border-outline-variant/30 last:border-0"
                  >
                    <span className="font-body text-on-surface">{label}</span>
                    <span className="font-headline font-bold text-primary">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Streaming Emotes */}
          <div className="md:col-span-5 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">
                Streaming Emotes
              </h3>
              <p className="text-on-surface-variant font-body mb-6 text-sm">
                Optimized for Twitch, Discord, and YouTube.
              </p>
              <ul className="space-y-3">
                {[
                  { label: "Per Emote", price: "$30" },
                  { label: "Set of Three", price: "$75" },
                  { label: "Set of Five", price: "$125" },
                ].map(({ label, price }) => (
                  <li key={label} className="flex justify-between items-center py-2 border-b border-outline-variant/30 last:border-0">
                    <span className="font-body text-on-surface">{label}</span>
                    <span className="font-headline font-bold text-on-surface">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Animated Emotes — full row */}
          <div className="md:col-span-12 bg-primary-container rounded-xl p-8 md:p-12">
            <div className="max-w-2xl">
              <h3 className="text-4xl md:text-5xl font-headline font-black mb-4 tracking-tighter text-on-primary-container">
                Animated Emotes
              </h3>
              <p className="text-on-primary-container/80 font-body mb-8">
                Smooth frame-by-frame animation. Base price per emote with
                complexity surcharges based on moving parts.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Base Price", price: "$50" },
                  { label: "4–5 Moving Parts", price: "+$10" },
                  { label: "6–7 Moving Parts", price: "+$15" },
                  { label: "8–9 Moving Parts", price: "+$20" },
                ].map(({ label, price }) => (
                  <div key={label} className="bg-white/10 backdrop-blur p-4 rounded-xl">
                    <span className="block text-xs font-headline font-bold uppercase tracking-widest text-on-primary-container/60 mb-1">
                      {label}
                    </span>
                    <span className="text-xl font-headline font-bold text-on-primary-container">
                      {price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-on-primary-container/70 font-body text-sm">
                Already have a drawn emote and want it animated? Just reach out — we can work out pricing based on complexity.
              </p>
            </div>
          </div>
        </section>

        {/* Terms of Service */}
        <section className="mb-24 px-8 py-12 bg-surface-container-low rounded-xl border-l-4 border-primary">
          <h2 className="text-3xl font-headline font-bold text-on-surface mb-10">
            Terms of Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h4 className="font-headline font-bold text-primary mb-3 uppercase tracking-widest text-xs">
                01. Payment
              </h4>
              <ul className="space-y-2 text-sm text-on-surface-variant font-body">
                <li>Paypal, Venmo, or Cash App.</li>
                <li>Upfront or after sketch confirmation.</li>
                <li className="font-bold text-on-surface">No refunds.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold text-primary mb-3 uppercase tracking-widest text-xs">
                02. Usage
              </h4>
              <ul className="space-y-2 text-sm text-on-surface-variant font-body">
                <li>Please provide credit when sharing.</li>
                <li>Do not claim my work as your own.</li>
                <li>I retain the right to showcase in portfolio.</li>
                <li>No NSFW. Slightly lewd is fine.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold text-primary mb-3 uppercase tracking-widest text-xs">
                03. Revisions &amp; Timeline
              </h4>
              <ul className="space-y-2 text-sm text-on-surface-variant font-body">
                <li>2 major revision limit. Extra fees may apply.</li>
                <li>3–7 day turnaround depending on complexity.</li>
                <li>I can decline commissions I don't want to do.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold text-primary mb-3 uppercase tracking-widest text-xs">
                04. Process &amp; Delivery
              </h4>
              <ul className="space-y-2 text-sm text-on-surface-variant font-body">
                <li>Drawing process may be streamed publicly unless you request otherwise.</li>
                <li>Files delivered via Discord or Email — send those in advance.</li>
                <li>Questions? DM @losttangerine on Twitter.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Commission Request Form */}
        <section
          id="request-form"
          className="bg-primary-container rounded-3xl p-8 md:p-16 relative overflow-hidden"
        >
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" aria-hidden="true" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-5xl font-headline font-black mb-6 leading-none text-on-primary-container">
                Ready to<br />Collaborate?
              </h2>
              <p className="text-on-primary-container/90 font-body mb-8 text-lg">
                Tell me about your project. I respond to all serious inquiries
                within 48 hours.
              </p>
              <div className="flex flex-col gap-3 text-on-primary-container">
                <p className="font-body text-sm font-bold">
                  Twitter: @losttangerine
                </p>
                <p className="font-body text-sm">
                  Payment via Paypal, Venmo, or Cash App
                </p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="block text-sm font-headline font-bold uppercase tracking-widest text-on-primary-container">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-surface-container-lowest rounded-xl p-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-on-primary-container/20 border-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-headline font-bold uppercase tracking-widest text-on-primary-container">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full bg-surface-container-lowest rounded-xl p-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-on-primary-container/20 border-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-headline font-bold uppercase tracking-widest text-on-primary-container">
                  Commission Type
                </label>
                <select className="w-full bg-surface-container-lowest rounded-xl p-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-on-primary-container/20 border-none">
                  <option>Character Illustration</option>
                  <option>Emote Pack</option>
                  <option>Animated Emote</option>
                  <option>Other / Custom</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-headline font-bold uppercase tracking-widest text-on-primary-container">
                  Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your character, setting, and mood..."
                  className="w-full bg-surface-container-lowest rounded-xl p-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-on-primary-container/20 border-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-on-primary-container text-white font-headline font-bold py-5 rounded-full hover:scale-[1.02] transition-transform shadow-lg"
              >
                Send Request
              </button>
            </form>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify commissions page at http://localhost:3000/commissions**

Check:
- Pulsing status badge visible ✓
- Character Illustrations pricing table with real prices ✓
- Emote pricing table ✓
- Animated Emotes row with 4 price tiles ✓
- ToS section with 4 columns ✓
- Request form with Commission Type dropdown ✓
- Footer present ✓

- [ ] **Step 3: Commit**

```bash
git add app/commissions/page.tsx
git commit -m "feat: add commissions page with real pricing, TOS, and request form"
```

---

## Task 9: Build Check + Final Cleanup

**Files:**
- No new files

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: exits with code 0, no TypeScript errors, no missing import errors. If `SocialLinks` is still referenced anywhere, that will error here — fix by searching for stale imports:

```bash
grep -r "SocialLinks" app components
```

Expected: no matches.

- [ ] **Step 2: Verify nav active state on commissions page**

Open `http://localhost:3000/commissions`. The "Commissions" nav link should have the orange underline + bold style. Portfolio and Contact links should be muted stone.

- [ ] **Step 3: Verify mobile responsiveness**

Resize browser to 375px width:
- Navbar hamburger appears, dropdown works ✓
- SideNav is hidden on mobile ✓
- Hero text doesn't overflow ✓
- Portfolio filter tabs wrap cleanly ✓
- Commissions bento grid stacks to single column ✓
- ToS grid stacks to single column ✓

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete website redesign to warm orange theme"
```
