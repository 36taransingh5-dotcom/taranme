# Design Ideas for Taran Pal Singh — Personal Portfolio

## Approach 1: Technical Brutalism

<response>
<text>
**Design Movement:** Neo-Brutalism meets Technical Documentation

**Core Principles:**
- Raw, honest structure — no decorative chrome, every element earns its place
- High-contrast monochrome base with a single electric accent (amber or lime)
- Typographic hierarchy does all the heavy lifting
- Grid-breaking asymmetry that feels engineered, not designed

**Color Philosophy:**
- Background: near-black (#0D0D0D) with off-white text (#F2F0E8)
- Accent: Electric amber (#F5A623) — signals precision and energy
- Borders and dividers use hard 1px lines, no softness

**Layout Paradigm:**
- Horizontal scrolling sections for projects
- Left-anchored sidebar navigation that stays fixed
- Content bleeds to edges; no centered containers

**Signature Elements:**
- Monospace code-like labels (e.g., `[01] ABOUT`, `[02] WORK`)
- Hard-bordered cards with visible grid lines
- Terminal-style blinking cursor in hero text

**Interaction Philosophy:**
- Hover states use color inversion (black-on-amber)
- Links underline with a sliding fill animation
- Scroll-triggered section reveals with no easing (snap-in)

**Animation:**
- Text scramble effect on hero name
- Section entries: instant appear (no fade, just clip-path reveal)
- Cursor blink on hero tagline

**Typography System:**
- Display: JetBrains Mono Bold — technical, authoritative
- Body: IBM Plex Mono Regular — consistent monospace throughout
- Size scale: 72px / 36px / 18px / 14px
</text>
<probability>0.07</probability>
</response>

---

## Approach 2: Refined Editorial Dark

<response>
<text>
**Design Movement:** Contemporary Editorial — think Stripe meets a CS academic portfolio

**Core Principles:**
- Dark, immersive canvas that feels premium and focused
- Generous whitespace with deliberate typographic rhythm
- Subtle depth through layered surfaces and soft glows
- Content-first: the work speaks, the design supports

**Color Philosophy:**
- Background: deep navy-black (oklch(0.10 0.02 265))
- Surface cards: slightly lighter (oklch(0.15 0.02 265))
- Accent: soft indigo-blue glow (#6366F1) for interactive elements
- Text: warm off-white (#F0EEE8) for readability, muted grey for secondary

**Layout Paradigm:**
- Full-width hero with name large and left-anchored
- Two-column asymmetric layout for experience (60/40 split)
- Bento-grid for skills and achievements
- Sticky top navigation with blur backdrop

**Signature Elements:**
- Gradient glow orbs behind key sections (subtle, not garish)
- Thin horizontal rules with fade-out ends
- Tag pills for skills with a frosted-glass look

**Interaction Philosophy:**
- Cards lift on hover with a soft shadow bloom
- Navigation links have a sliding underline indicator
- Smooth scroll with section fade-in on enter

**Animation:**
- Hero: name slides in from left, tagline fades up
- Cards: staggered fade-up on scroll
- Skill tags: cascade in with a slight delay

**Typography System:**
- Display: Syne ExtraBold — geometric, distinctive
- Body: DM Sans Regular — clean and modern
- Accent labels: DM Mono — for code, tags, dates
</text>
<probability>0.08</probability>
</response>

---

## Approach 3: Clean Structured Light (Selected)

<response>
<text>
**Design Movement:** Swiss International Typographic Style meets modern SaaS — structured, confident, precise

**Core Principles:**
- Light, airy background with strong typographic structure
- Asymmetric column layout — content never feels centered or generic
- Colour used sparingly and intentionally as a signal, not decoration
- Every section has a clear visual hierarchy: label → headline → body

**Color Philosophy:**
- Background: warm white (oklch(0.98 0.005 85)) — not pure white, slightly warm
- Primary accent: deep forest green (oklch(0.38 0.12 155)) — signals growth, precision, trust
- Secondary: slate grey for muted text
- Highlight: pale green tint for hover states and tags

**Layout Paradigm:**
- Off-center hero: name and title on left 60%, abstract visual element on right 40%
- Timeline-style experience section with a vertical rule
- Horizontal card row for projects (scrollable on mobile)
- Two-column skills grid with category labels

**Signature Elements:**
- Thin vertical green rule running down the left of the hero
- Section labels in small-caps forest green above each heading
- Subtle dot-grid background texture in hero area

**Interaction Philosophy:**
- Project cards reveal a description overlay on hover
- Navigation items have a green dot indicator on active
- Smooth scroll with intersection-observer fade-ins

**Animation:**
- Hero name: word-by-word fade-up on load
- Section headings: slide in from left on scroll
- Project cards: scale up slightly on hover with shadow

**Typography System:**
- Display: Fraunces (variable, high contrast serif) — distinctive, intellectual
- Body: Outfit Regular — geometric, highly legible
- Mono: Fira Code — for tech tags, dates, code snippets
</text>
<probability>0.09</probability>
</response>
