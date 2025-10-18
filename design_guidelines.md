# Revelry Cinema - Design Guidelines

## Design Approach

**Selected Approach:** A24-Inspired Artistic Portfolio

**Primary References:**
- A24 Films: Project-focused, artistic presentation, work as hero content
- Showcase/Portfolio Sites: Large imagery, minimal text, let work speak
- Artist Portfolios: Personal, creative, non-corporate feel

**Design Principles:**
1. Work is Everything: Projects and visual work are the sole focus
2. Artistic Over Commercial: Creative portfolio, not service provider
3. Minimal Interference: Clean, simple UI that doesn't compete with imagery
4. Cinematic Presentation: Dark theme, full-bleed images, generous spacing

---

## Core Design Elements

### A. Color Palette

**Dark Mode Primary:**
- Background: 15 8% 8% (deep charcoal, almost black)
- Surface: 15 8% 12% (elevated cards/sections)
- Border: 15 8% 18% (subtle dividers)

**Light Accents:**
- Text Primary: 0 0% 98% (off-white for readability)
- Text Secondary: 0 0% 70% (muted descriptions)

**Brand Colors:**
- Primary: 25 95% 53% (warm cinematic orange/amber - for CTAs and accents)
- Hover: 25 95% 48% (slightly darker)

**Accent (Use Sparingly):**
- Success/Active: 142 71% 45% (muted teal for form success states)

### B. Typography

**Primary Font:** Inter (Google Fonts) - Modern, clean, excellent readability
**Secondary Font:** Playfair Display (Google Fonts) - Elegant serif for hero headlines

**Hierarchy:**
- Hero Headline: Playfair Display, 72px (4.5rem), font-weight 700, tracking tight
- Section Headers: Inter, 48px (3rem), font-weight 700
- Subheadings: Inter, 24px (1.5rem), font-weight 600
- Body: Inter, 16px (1rem), font-weight 400, line-height 1.7
- Small/Meta: Inter, 14px (0.875rem), font-weight 400

### C. Layout System

**Container Widths:**
- Max content: max-w-7xl (1280px)
- Text content: max-w-4xl (896px)
- Narrow forms: max-w-2xl (672px)

**Spacing Primitives:** Use Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component gaps: gap-8 to gap-12
- Card padding: p-8 to p-12
- Tight spacing: space-y-4
- Generous spacing: space-y-8

**Grid Systems:**
- Portfolio: 3-column grid (lg:grid-cols-3, md:grid-cols-2, grid-cols-1)
- Services: 3-column cards (same responsive pattern)
- Testimonials/Stats: 2-column split

### D. Component Library

**Navigation:**
- Sticky header with blur backdrop (backdrop-blur-md)
- Logo left, nav links center, social icons right
- Minimal height (h-16 to h-20) to maximize content space

**Hero Section:**
- Full-viewport height (min-h-screen) with high-quality background image
- Dark gradient overlay (from-black/70 to-black/40)
- Centered headline + subheadline + CTA
- Subtle scroll indicator at bottom

**Service Cards:**
- Dark surface background with subtle border
- Icon or representative image at top
- Service title, description, and "Learn More" link
- Hover: slight scale and border glow effect

**Portfolio Gallery:**
- Masonry/grid layout with hover overlays
- Category filters (All, Video, Photo, Commercial, Events)
- Lightbox modal for full-screen viewing
- Project title and category tag on hover

**Forms:**
- Dark input backgrounds (bg-white/5) with light borders
- Focus state: border color changes to primary orange
- Floating labels or top-aligned labels
- Full-width submit button with primary color

**Footer:**
- Multi-column layout (Logo/About | Quick Links | Newsletter | Social)
- Newsletter signup with inline form
- Social media icon links with hover effects
- Copyright and additional links at bottom

### E. Animations

**Use Very Sparingly:**
- Fade-in on scroll for section reveals (opacity + translateY)
- Smooth hover transitions (200-300ms ease)
- Portfolio grid: stagger animation on load
- NO complex parallax, NO background animations, NO auto-playing elements

---

## Images

**Critical Images Needed:**

1. **Hero Background (Large):** Cinematic behind-the-scenes shot of film production or dramatic landscape from portfolio work. Should be high-resolution, slightly desaturated to blend with dark theme. Position: Full-width background with gradient overlay.

2. **Portfolio Thumbnails (12-16 images):** Mix of video stills and photography work showing range - events, commercial work, landscapes, portraits. Square or 16:9 aspect ratio for grid consistency.

3. **About Section Image:** Professional photo of Kyle Tims with camera equipment or on set. Positioned alongside about text in 2-column layout.

4. **Service Section Icons/Images:** Small illustrative images or icons for Video Production, Photography, and Creative Storytelling (can use icon library instead).

**Image Treatment:**
- Slight grain texture overlay on hero for filmic quality
- Subtle vignette on portfolio items
- Maintain high quality but optimize for web (WebP format)
- Lazy loading for portfolio gallery

---

## Page Structure

1. **Hero:** Minimal branding intro, optional tagline, clean and simple
2. **Work Grid:** Large grid of projects (films, videos, photo series) - THE MAIN FOCUS
3. **About:** Brief personal statement about the work/vision (not services)
4. **Contact:** Simple, minimal - just email/social, no forms needed
5. **Footer:** Minimal with social links and copyright

**Key Differences from Service Site:**
- No "Services" section - the work speaks for itself
- No testimonials or client lists
- No aggressive CTAs or "hire me" language
- Contact is subtle, not prominent
- Focus is 90% on the work showcase

**Responsive Behavior:**
- Mobile: Stack all columns to single column
- Tablet: 2-column layouts where appropriate
- Desktop: Full multi-column glory with generous spacing