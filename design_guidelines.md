# Revelry Cinema - Design Guidelines

## Design Approach

**Selected Approach:** NEON-Inspired Film Distributor Showcase

**Primary Reference:**
- NEON Rated: Full-screen heroes, horizontal scrolling carousels, dark cinematic theme, minimal text overlays

**Design Principles:**
1. Cinematic Immersion: Full-screen imagery, video backgrounds, dark theme
2. Browse Experience: Horizontal scrolling carousels for discovering films
3. Minimal Text: Let film imagery speak, only title + year overlays
4. Dark by Default: True black/near-black backgrounds for maximum contrast

---

## Core Design Elements

### A. Color Palette

**Dark Theme (Default - Always On):**
- Background: 0 0% 0% (true black)
- Surface: 0 0% 6% (slightly elevated cards)
- Border: 0 0% 15% (subtle dividers)

**Text Colors:**
- Primary: 0 0% 100% (pure white for headlines)
- Secondary: 0 0% 70% (muted descriptions)
- Tertiary: 0 0% 50% (meta info)

**Brand Accent:**
- Primary Action: 0 0% 100% (white buttons/links)
- Hover: 0 0% 85% (slightly dimmed)

### B. Typography

**Primary Font:** Inter or system sans-serif - Modern, clean
**Film Titles:** Bold, large, white - let them command attention

**Hierarchy:**
- Hero Title: 72-96px, font-weight 700, uppercase optional
- Section Headers: 24-32px, font-weight 600, uppercase
- Film Card Title: 18-24px, font-weight 600
- Meta Text: 14px, font-weight 400, muted color

### C. Layout System

**Full-Width Sections:**
- Hero: 100vh full-screen with video/image background
- Carousels: Full-width horizontal scrolling sections
- No max-width containers - edge-to-edge design

**Spacing:**
- Section gaps: 80-120px vertical
- Carousel item gaps: 16-24px
- Card padding: Minimal, let images breathe

### D. Component Library

**Hero Section:**
- Full viewport height (100vh)
- Video background with fallback image
- Dark gradient overlay (from-black/60 via-transparent to-black/40)
- Featured film title large and bold at bottom-left
- "Play Trailer" button with play icon
- Optional small thumbnail + "Get Tickets" CTA

**Film Cards (Carousel Items):**
- Large poster/still image (aspect-ratio 16:9 or 2:3)
- Title overlay at bottom with gradient
- Year badge or "Coming Soon" label
- Hover: Slight scale (1.02) + brightness increase
- Click: Navigate to film detail page

**Carousel Sections:**
- Section title: Uppercase, bold, left-aligned
- Horizontal scroll with overflow visible
- Scroll buttons or drag-to-scroll
- 4-6 items visible on desktop, 1-2 on mobile

**Navigation:**
- Fixed/sticky at top
- Transparent over hero, solid on scroll
- Logo left, minimal links right (About, Contact)
- Hamburger menu on mobile

**Footer:**
- Minimal: Logo, copyright, social links
- Dark background matching theme

### E. Animations

**Subtle and Cinematic:**
- Carousel scroll: Smooth momentum scrolling
- Card hover: scale(1.02) transition 300ms ease
- Page transitions: Fade in/out
- Video: Autoplay, muted, loop for backgrounds

---

## Page Structure

### Homepage
1. **Hero**: Full-screen featured film with video/image, title overlay, play trailer button
2. **Coming Soon Carousel**: Films releasing soon
3. **Now Available Carousel**: Recently released films
4. **Library Carousel**: Past catalog films
5. **Footer**: Minimal branding + social links

### Film Detail Page
- Full-width hero image/video
- Film title large at bottom-left of hero
- Metadata: Director, Writer, Cast, Release Date
- Logline section
- Related films carousel at bottom

### About Section
- Brief filmmaker statement
- Social links
- Can be modal or inline section

### Contact
- Email link
- Social media links
- Minimal - just the essentials

---

## Responsive Behavior

**Mobile (< 768px):**
- Hero: Shorter height (70vh), adjusted text sizes
- Carousels: 1-2 cards visible, swipe to scroll
- Navigation: Hamburger menu
- Stacked layout for detail pages

**Tablet (768px - 1024px):**
- 3-4 cards visible in carousels
- Hero maintains full height

**Desktop (> 1024px):**
- Full experience with 5-6 cards visible
- Hover interactions enabled
- Large typography

---

## Films Data

**Status Categories:**
- Coming Soon: Films in production or pre-release
- In Theaters/Now Available: Currently released
- Library: Past catalog

**Current Films:**
- Lila.exe (Coming Soon) - Mark De Leon
- The Handy Man (Coming Soon) - Chris Soriano
- Red Light Teachers (Sept 3, 2025) - Chris Soriano
- Revelry (2024)
- The Master Chief (2023)
- Summer Jazz (2022)
- Anita (2021)
