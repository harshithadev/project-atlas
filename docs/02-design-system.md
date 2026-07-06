# Project Atlas

## 02 Design System

### Visual, Interaction, Motion, and Brand Language for the Digital Experience of Thinking Alongside Harshitha

**Version:** 0.2
**Owner:** Harshitha Devineni
**Document Type:** Design Language System
**Primary Audience:** Designers, engineers, AI agents, creative technologists, motion designers, content strategists
**Depends On:** `00-master-context.md`, `01-product-vision-experience-blueprint.md`, `AGENTS.md`
**Status:** Foundational Draft

---

# 1. Executive Summary

The Project Atlas design system defines how Harshitha’s portfolio should look, feel, move, speak, and behave.

This is not a conventional UI kit.

It is a design language for a personal thinking space.

Project Atlas should feel like entering a warm, elegant, intelligent workspace. The homepage is not a standard webpage. It is an interactive room: a desk by a window, a library beside it, framed achievements on the wall, books that hold reflections, a notebook that opens into investigations, and a glowing Ask Harshitha orb that guides visitors through the experience.

The design system must communicate:

* clarity
* warmth
* intelligence
* trust
* curiosity
* calm confidence
* human depth
* strategic capability
* thoughtful restraint
* personal authenticity

The guiding design thesis is:

> Turn Harshitha’s thinking space into an interface.

Every color, object, type choice, animation, and component should support that thesis.

---

# 2. Design North Star

Project Atlas should feel like:

> A bright, cozy, editorial workspace where complex ideas become clear.

It should combine:

1. **Apple-like clarity**
   Clean layouts, strong hierarchy, thoughtful motion, simplicity.

2. **Swiss editorial structure**
   Strong typography, grids, negative space, precise alignment.

3. **Cozy personal study**
   Warm light, books, plants, soft materials, desk objects, human atmosphere.

4. **AI-enabled product experience**
   A subtle intelligent layer through the Ask Harshitha orb and later recruiter mode.

The result should not feel like a portfolio template.
It should feel like a place.

---

# 3. Design Principles

## 3.1 Warm clarity over cold minimalism

Minimalism should not feel empty or sterile.
Whitespace should create calm, not distance.

The interface should feel clean, but lived-in.

## 3.2 Objects must mean something

Every object in the workspace scene must map to a real part of Harshitha’s identity or website.

No decorative clutter.

## 3.3 Motion should reveal meaning

Animation should guide, reveal, transition, or reward curiosity.

No motion should exist only because it looks cool.

## 3.4 Light is part of the interface

Day and night modes are not just color themes.

They change the emotional setting:

* day mode = clarity, momentum, openness
* night mode = reflection, warmth, depth

## 3.5 The site should feel discoverable, not confusing

The room metaphor should invite exploration, but never hide basic usability.

Standard navigation must always exist.

## 3.6 Premium does not mean impersonal

The site should feel polished, but still deeply human.

Personal details matter.

## 3.7 Every component should answer “So what?”

If a card, button, animation, page, or object does not help visitors understand Harshitha better, remove or simplify it.

---

# 4. Visual World

## 4.1 Workspace Scene Direction

The primary visual reference is a cozy, elegant study beside a window.

The workspace should feel:

* sunlit in day mode
* lamp-lit in night mode
* warm
* personal
* intelligent
* clean
* lived-in but never cluttered
* cozy but still premium
* editorial but not cold

The scene should include:

* wooden desk
* natural light
* soft curtains
* plants
* bookshelf
* framed memories or certificates
* warm lamp lighting
* notebooks
* pens
* laptop
* open journal
* comfortable chair
* subtle AI orb

The design should balance two moods:

1. Apple-like clarity
2. cozy personal study

The final result should not look like a generic productivity dashboard.
It should look like a place where a thoughtful person actually thinks.

---

# 5. Color System

Project Atlas is light-first.

The palette should feel warm, natural, refined, and intelligent.

It should avoid generic “tech blue” or heavy black unless used for contrast.

## 5.1 Core Palette

### Paper White

Used for main page backgrounds.

```css
--color-paper: #FAF7F0;
```

Feeling: warm, soft, calm, readable.

### Soft Ivory

Used for elevated surfaces and cards.

```css
--color-ivory: #FFFDF8;
```

Feeling: clean, premium, gentle.

### Warm Cream

Used for desk-scene overlays, panels, and subtle section breaks.

```css
--color-cream: #F3E9D7;
```

Feeling: cozy, natural, tactile.

### Light Oak

Used for desk-inspired surfaces and warm accents.

```css
--color-oak: #D8B98C;
```

Feeling: workspace, wood, warmth.

### Soft Sand

Used for secondary surfaces and muted highlights.

```css
--color-sand: #E7D6BC;
```

Feeling: neutral, grounded, editorial.

### Sage

Primary nature accent.

```css
--color-sage: #A8B99A;
```

Feeling: growth, calm, learning, natural curiosity.

### Deep Sage

Used for stronger accent moments.

```css
--color-deep-sage: #6F8065;
```

Feeling: thoughtful, grounded, mature.

### Ink Charcoal

Primary text color.

```css
--color-ink: #171717;
```

Feeling: precise, readable, strong.

### Soft Charcoal

Secondary text color.

```css
--color-soft-ink: #3E3E3A;
```

Feeling: readable but quieter.

### Mist Gray

Borders, dividers, subtle UI lines.

```css
--color-mist: #D8D4CC;
```

Feeling: restrained structure.

### Pearl

Glass highlight and AI orb base.

```css
--color-pearl: #F8F3E8;
```

Feeling: luminous, soft, diamond-like.

### Candle Glow

Used sparingly for warm highlight, night mode lamp, orb glow.

```css
--color-glow: #F6C96D;
```

Feeling: light, attention, warmth.

---

## 5.2 Day Theme Tokens

```css
:root {
  --background: #FAF7F0;
  --surface: #FFFDF8;
  --surface-soft: #F3E9D7;
  --surface-muted: #E7D6BC;

  --text-primary: #171717;
  --text-secondary: #3E3E3A;
  --text-muted: #76716A;

  --border-soft: #D8D4CC;
  --border-strong: #B9B2A7;

  --accent-primary: #A8B99A;
  --accent-secondary: #D8B98C;
  --accent-glow: #F6C96D;

  --orb-core: #FFF7D8;
  --orb-glow: rgba(246, 201, 109, 0.45);

  --shadow-soft: rgba(40, 32, 22, 0.08);
  --shadow-medium: rgba(40, 32, 22, 0.16);
}
```

---

## 5.3 Night Theme Tokens

Night mode should not become a generic dark portfolio.

It should feel like the same workspace at night, lit by a lamp and city/window glow.

```css
[data-theme="night"] {
  --background: #17130F;
  --surface: #211B16;
  --surface-soft: #2A211A;
  --surface-muted: #3A2D22;

  --text-primary: #FFF8EA;
  --text-secondary: #E6D9C4;
  --text-muted: #B8A891;

  --border-soft: #493C30;
  --border-strong: #6B5844;

  --accent-primary: #B7C7A8;
  --accent-secondary: #E0B875;
  --accent-glow: #F6C96D;

  --orb-core: #FFE8A7;
  --orb-glow: rgba(246, 201, 109, 0.55);

  --shadow-soft: rgba(0, 0, 0, 0.35);
  --shadow-medium: rgba(0, 0, 0, 0.55);
}
```

---

## 5.4 Color Usage Rules

Use light backgrounds generously.

Use accent colors sparingly.

Use Candle Glow only for:

* Ask Harshitha orb
* lamp light
* selected states
* subtle focus highlights
* tiny premium details

Use Sage for:

* active navigation
* tags
* nature/growth references
* soft callouts

Use Oak and Sand for:

* workspace elements
* cards
* warm surfaces
* content blocks

Avoid:

* neon colors
* saturated purple AI aesthetic
* harsh pure white
* heavy default black backgrounds
* too many accent colors at once

---

# 6. Typography System

The typography should feel editorial, intelligent, calm, and premium.

The site should combine a refined serif display face with a highly readable sans-serif.

## 6.1 Primary Display Typeface

Recommended options:

1. **Playfair Display**
2. **Cormorant Garamond**
3. **Libre Baskerville**
4. **Fraunces**
5. **Canela** if using paid fonts later

Use for:

* hero headings
* chapter titles
* large emotional statements
* investigation questions
* quote moments

Default recommendation for Version 1:

```txt
Playfair Display
```

Why:

* elegant
* editorial
* expressive
* widely available
* works well with warm workspace aesthetic

---

## 6.2 Primary Sans Typeface

Recommended options:

1. **Inter**
2. **Neue Haas Grotesk** if using paid fonts later
3. **Satoshi**
4. **Geist**
5. **Avenir Next**

Default recommendation for Version 1:

```txt
Inter
```

Use for:

* body copy
* navigation
* buttons
* labels
* metadata
* AI chat
* captions
* UI components

---

## 6.3 Optional Monospace Typeface

Use sparingly for:

* version labels
* metadata
* AI system tags
* changelog
* technical fragments

Recommended:

```txt
JetBrains Mono
```

or

```txt
Geist Mono
```

---

## 6.4 Type Scale

Use a fluid type scale.

### Display 1

Hero headline.

```css
font-size: clamp(4rem, 9vw, 9rem);
line-height: 0.92;
letter-spacing: -0.05em;
font-family: var(--font-display);
font-weight: 500;
```

### Display 2

Large section heading.

```css
font-size: clamp(3rem, 6vw, 6rem);
line-height: 0.95;
letter-spacing: -0.045em;
font-family: var(--font-display);
font-weight: 500;
```

### Heading 1

Page heading.

```css
font-size: clamp(2.5rem, 4.5vw, 4.5rem);
line-height: 1;
letter-spacing: -0.035em;
font-family: var(--font-display);
```

### Heading 2

Section heading.

```css
font-size: clamp(2rem, 3vw, 3rem);
line-height: 1.08;
letter-spacing: -0.03em;
font-family: var(--font-display);
```

### Heading 3

Card or subsection heading.

```css
font-size: clamp(1.25rem, 1.8vw, 1.75rem);
line-height: 1.2;
letter-spacing: -0.02em;
font-family: var(--font-display);
```

### Body Large

Intro paragraphs.

```css
font-size: clamp(1.125rem, 1.3vw, 1.375rem);
line-height: 1.65;
font-family: var(--font-sans);
```

### Body

Standard text.

```css
font-size: 1rem;
line-height: 1.7;
font-family: var(--font-sans);
```

### Body Small

Metadata and captions.

```css
font-size: 0.875rem;
line-height: 1.5;
font-family: var(--font-sans);
```

### Label

Buttons, tags, UI labels.

```css
font-size: 0.75rem;
line-height: 1;
letter-spacing: 0.08em;
text-transform: uppercase;
font-family: var(--font-sans);
font-weight: 600;
```

---

## 6.5 Typography Rules

* Large serif headings should carry emotion.
* Sans-serif body copy should carry clarity.
* Avoid long centered paragraphs.
* Use generous line height for reflective text.
* Use short paragraphs.
* Use strong hierarchy.
* Do not overuse all caps.
* Do not use too many font weights.
* Do not combine more than three typefaces.
* Let important sentences breathe.

---

# 7. Spacing System

Project Atlas should use generous spacing.

The interface should feel calm, not packed.

## 7.1 Base Unit

Use an 8px spacing system.

```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.5rem;   /* 24px */
--space-6: 2rem;     /* 32px */
--space-7: 3rem;     /* 48px */
--space-8: 4rem;     /* 64px */
--space-9: 6rem;     /* 96px */
--space-10: 8rem;    /* 128px */
--space-11: 10rem;   /* 160px */
--space-12: 12rem;   /* 192px */
```

---

## 7.2 Layout Spacing

### Page Padding

Desktop:

```css
padding-inline: clamp(2rem, 5vw, 6rem);
```

Tablet:

```css
padding-inline: 2rem;
```

Mobile:

```css
padding-inline: 1.25rem;
```

### Section Spacing

Desktop:

```css
padding-block: clamp(6rem, 12vw, 12rem);
```

Mobile:

```css
padding-block: 4rem;
```

### Component Gaps

Cards:

```css
gap: 1.5rem;
```

Large grids:

```css
gap: 2rem;
```

Editorial sections:

```css
gap: clamp(3rem, 6vw, 6rem);
```

---

## 7.3 Whitespace Rules

* Important content needs space around it.
* Do not fill every area of the screen.
* Let the desk scene breathe.
* Let headings stand alone.
* Avoid dense card grids.
* Use whitespace as a signal of confidence.

---

# 8. Grid and Layout System

## 8.1 Desktop Grid

Use a 12-column grid.

```css
grid-template-columns: repeat(12, minmax(0, 1fr));
column-gap: 1.5rem;
```

Max content width:

```css
max-width: 1440px;
```

For text-heavy pages:

```css
max-width: 760px;
```

For editorial split layouts:

```css
max-width: 1180px;
```

---

## 8.2 Homepage Room Layout

The homepage scene should be full viewport.

Desktop:

* image/scene fills viewport
* overlay navigation at top
* hero copy placed left or left-center
* interactive hotspots anchored to objects
* bottom navigation optional
* Ask Harshitha orb visible
* day/night toggle top-right or near lamp/window

Mobile:

* scene crops carefully
* hotspots become accessible cards
* object list appears below scene
* top nav collapses
* orb remains accessible

---

## 8.3 Section Layouts

### Investigation Pages

Use an editorial long-form layout:

* opening question
* sticky side index on desktop
* narrative content column
* visual/artifact column
* “Thinking Dossier” callout
* “So what?” summary

### Library Pages

Use shelf or collection metaphor:

* theme filters
* book cards
* reflection previews
* linked ideas

### Field Notes

Use a journal-like layout:

* date
* title
* short excerpt
* tags
* related ideas

### About

Use warm editorial layout:

* personal portrait or framed photo metaphor
* short story sections
* principles
* timeline of ideas, not only jobs

---

# 9. Border Radius System

The design should feel soft but not bubbly.

```css
--radius-xs: 0.25rem;
--radius-sm: 0.5rem;
--radius-md: 0.875rem;
--radius-lg: 1.25rem;
--radius-xl: 2rem;
--radius-pill: 999px;
```

Usage:

* buttons: pill or medium radius
* cards: medium to large radius
* modals: large radius
* orb: full circle
* image cards: medium radius
* workspace labels: pill

Avoid overly rounded SaaS-style cards everywhere.

---

# 10. Shadow and Elevation System

Shadows should be soft and natural.

Use shadows to imply physicality, not drama.

```css
--shadow-xs: 0 1px 2px rgba(40, 32, 22, 0.06);
--shadow-sm: 0 4px 12px rgba(40, 32, 22, 0.08);
--shadow-md: 0 12px 32px rgba(40, 32, 22, 0.12);
--shadow-lg: 0 24px 64px rgba(40, 32, 22, 0.18);
--shadow-glow: 0 0 40px rgba(246, 201, 109, 0.35);
```

Use:

* cards: small to medium
* modals: medium to large
* orb: glow
* desk labels: soft
* hover elevation: slight

Avoid:

* harsh drop shadows
* pure black shadows
* overly floating cards

---

# 11. Component System

## 11.1 Navigation

### Top Navigation

Purpose:

Give users reliable access to core sections without breaking the room metaphor.

Items:

* About
* Investigations
* Library
* Weekly Notes
* Certifications
* Ask Harshitha

Style:

* minimal
* transparent or glass
* small sans-serif
* high contrast
* calm hover states

Desktop behavior:

* fixed or absolute over scene
* center or right aligned
* logo left

Mobile behavior:

* compact menu
* orb remains separate
* primary links accessible

---

## 11.2 Logo / Wordmark

Working label:

```txt
Project Atlas
```

or eventually:

```txt
Harshitha Devineni
```

Logo style:

* text-based
* editorial
* no complex symbol required
* subtle accent dot allowed

Example:

```txt
Project Atlas.
```

The dot may use Candle Glow.

---

## 11.3 Buttons

### Primary Button

Use for main CTA.

Example:

```txt
Explore My World
```

Style:

```css
background: var(--text-primary);
color: var(--background);
border-radius: var(--radius-pill);
padding: 0.875rem 1.25rem;
font-size: 0.875rem;
font-weight: 500;
```

Hover:

* slight lift
* arrow moves 3 to 4px
* background softens slightly

### Secondary Button

Use for quieter CTAs.

```css
background: rgba(255,255,255,0.45);
border: 1px solid var(--border-soft);
backdrop-filter: blur(12px);
color: var(--text-primary);
```

### Text Link

Use in editorial sections.

Behavior:

* underline appears on hover
* arrow optional
* no loud color unless needed

---

## 11.4 Object Hotspot Labels

Hotspots are one of the most important components.

They turn the room into the interface.

### Purpose

Label meaningful objects in the workspace.

### Examples

* About
* Investigations
* Library
* Weekly Notes
* Certifications
* Ask Harshitha AI
* Selected Work
* Day / Night

### Style

```css
display: inline-flex;
align-items: center;
gap: 0.5rem;
padding: 0.55rem 0.8rem;
border-radius: 999px;
background: rgba(255, 253, 248, 0.72);
border: 1px solid rgba(216, 212, 204, 0.8);
backdrop-filter: blur(14px);
box-shadow: var(--shadow-sm);
font-size: 0.8125rem;
```

### Connector Line

Optional dotted line connecting label to object.

Use sparingly.

### Hover

* label lifts 2px
* plus icon rotates 45 degrees
* background becomes more opaque
* related object subtly glows or sharpens

### Accessibility

Each hotspot must be a button or link with a clear accessible label.

---

## 11.5 Ask Harshitha Orb

### Purpose

AI guide entry point.

### Visual

* circular
* glowing softly
* pearl/gold center
* subtle pulse
* small sparkle optional
* never neon

### Size

Desktop:

```css
width: 56px;
height: 56px;
```

Mobile:

```css
width: 48px;
height: 48px;
```

### Position

* persistent but non-intrusive
* bottom-right or integrated into scene
* on homepage, can sit near bookshelf/lamp area
* on content pages, fixed lower-right

### Motion

* gentle idle float
* pulse every 6 to 10 seconds
* reacts to hover
* stops animation if reduced motion enabled

### Click

Opens Ask Harshitha panel.

---

## 11.6 Ask Harshitha Panel

### Purpose

Allow visitors to ask questions.

### Layout

Desktop:

* slide-in panel from right
* max width 420px
* translucent warm surface
* rounded corners
* prompt suggestions

Mobile:

* full-screen modal
* bottom sheet optional

### Sections

* intro
* suggested questions
* chat transcript
* input field
* privacy/grounding note

### Starter copy

```txt
Hi, I’m Ask Harshitha.
I’m trained on Harshitha’s public work, projects, notes, and thinking system. Ask me where to start.
```

### Input placeholder

```txt
Ask about Harshitha’s work, thinking, or projects...
```

---

## 11.7 Cards

Cards should feel editorial, not generic.

### Investigation Card

Includes:

* question title
* short context
* capability tags
* outcome line
* small visual or artifact
* link to full story

Structure:

```txt
Question
Context
So what?
Tags
Open Investigation
```

### Library Card

Includes:

* book title
* author
* why it matters
* connected ideas
* status: reading/read/revisiting

### Field Note Card

Includes:

* date
* title
* short observation
* tags
* related idea

### Certification Card

Can be shown as a frame or document.

Includes:

* title
* issuing organization
* date
* skill area
* reflection or relevance

---

## 11.8 Frames

Frames represent:

* awards
* certifications
* degrees
* proud moments
* photos
* memories

Style:

* slim warm border
* paper background
* subtle shadow
* slight glass reflection
* grouped on wall near desk

Frames should not scream achievement.

They should feel like meaningful proof quietly present in the room.

---

## 11.9 Bookshelf Items

Books represent:

* books read
* weekly notes
* reflections
* frameworks
* thinking archives

Interaction:

* hover pulls book forward slightly
* selected book opens side panel
* connected themes appear

Book visual options:

* spine-only shelf
* card representation
* hybrid shelf plus detail panel

Mobile:

* convert to stacked list or carousel.

---

## 11.10 Notebook / Investigation Entry

The open notebook represents investigations.

Interaction:

* hover reveals “Investigations”
* click opens investigations index
* possible page-turn animation later
* current version can use simple transition

Notebook should symbolize:

* process
* unfinished questions
* active thinking
* project stories

---

## 11.11 Day/Night Toggle

The day/night toggle should feel tied to the room.

Possible trigger objects:

* lamp
* window
* dedicated toggle
* sun/moon pill

Behavior:

* day mode changes outside landscape to daylight
* night mode changes outside landscape to evening/night
* lamp glow strengthens at night
* overall theme changes
* transition should feel like light shifting, not just colors swapping

Version 1 can use CSS variables and a simple toggle.

Later versions can use scene image variants.

---

# 12. Imagery System

## 12.1 Imagery Mood

Images should feel:

* warm
* natural
* calm
* thoughtful
* editorial
* human
* slightly cinematic
* never stocky

Preferred imagery:

* desk scenes
* books
* notebooks
* cafés
* NYC windows
* plants
* sketches
* screenshots
* interface details
* travel observations
* product details

Avoid:

* generic corporate illustrations
* random gradient blobs
* cliché tech imagery
* overused AI robot visuals
* staged business handshake photos

---

## 12.2 Workspace Hero Image

The homepage workspace may be:

1. a generated illustration/render
2. a stylized photograph
3. a 3D scene
4. a layered image with hotspots
5. a hybrid custom art direction

Version 1 recommendation:

Use a high-quality generated or custom-composited image with layered hotspot overlays.

Reason:

* fastest path to emotional direction
* easier than full 3D
* maintains artistic control
* allows day/night variants

Later versions may explore 3D.

---

## 12.3 Portraits

Portraits should feel:

* natural
* warm
* confident
* not overly corporate
* not overly casual
* integrated into frames or about section

Preferred:

* seated near desk
* natural light
* neutral clothing
* cozy professional setting

Avoid:

* stiff headshots
* overly glam portraits
* busy backgrounds

---

# 13. Iconography

Icons should be:

* thin-line
* simple
* slightly geometric
* warm
* not overly playful

Recommended style:

* Lucide icons
* custom line icons later

Icon stroke:

```css
stroke-width: 1.5;
```

Common icons:

* arrow
* plus
* book
* notebook
* sparkles
* search
* message circle
* file
* frame
* moon
* sun
* external link
* download
* bookmark
* pen
* lamp
* clock

Avoid:

* filled cartoon icons
* heavy icons
* inconsistent icon packs

---

# 14. Motion System

## 14.1 Motion Tokens

```css
--ease-out-soft: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out-soft: cubic-bezier(0.65, 0, 0.35, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 450ms;
--duration-scene: 900ms;
```

---

## 14.2 Standard Transitions

### Hover Lift

```css
transform: translateY(-2px);
transition: transform 250ms var(--ease-out-soft);
```

### Fade Up

Used for content entering viewport.

```txt
opacity: 0 → 1
y: 16px → 0
duration: 450ms
```

### Soft Scale

Used for object focus.

```txt
scale: 1 → 1.025
duration: 250ms
```

### Glow Pulse

Used only for orb/lamp.

```txt
opacity: 0.45 → 0.8 → 0.45
duration: 6s
```

### Day/Night Transition

```txt
duration: 900ms
background, color, shadow, scene overlay shift
```

---

## 14.3 Motion Rules

* Respect `prefers-reduced-motion`.
* Do not animate large content blocks excessively.
* Do not create scroll nausea.
* Use parallax sparingly.
* Avoid constant movement except very subtle orb/lamp.
* Important content must be accessible without animation.

---

# 15. Interaction States

All interactive elements need states:

* default
* hover
* focus-visible
* active
* disabled
* loading
* selected

## 15.1 Focus State

Use visible accessible focus.

```css
outline: 2px solid var(--accent-primary);
outline-offset: 4px;
```

For night mode, use Candle Glow if needed.

---

## 15.2 Hover State

Hover should be subtle:

* slight lift
* background opacity increase
* icon movement
* object glow
* no dramatic scaling

---

## 15.3 Active State

Active should feel tactile:

* slight press down
* reduced shadow
* subtle opacity change

---

# 16. Responsive Design

## 16.1 Breakpoints

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

## 16.2 Desktop

Primary immersive scene.

Full object-based navigation.

Rich hover behavior.

## 16.3 Tablet

Simplified scene.

Hotspots still visible but fewer at once.

Panels slide over content.

## 16.4 Mobile

The scene becomes a doorway, not the full interface.

Use:

* cropped workspace image
* short hero copy
* object navigation cards
* bottom Ask Harshitha button
* no hover-dependent interactions
* simplified animations

---

# 17. Accessibility System

Accessibility is non-negotiable.

## 17.1 Requirements

* semantic HTML
* keyboard navigation
* visible focus states
* descriptive alt text
* aria labels for hotspots
* accessible modals
* skip links
* sufficient contrast
* reduced motion support
* no hover-only essential content
* screen-reader-friendly navigation
* readable text sizes

## 17.2 Workspace Scene Accessibility

Because the homepage uses a visual room metaphor, it must also provide a structured alternative.

Example:

```html
<nav aria-label="Workspace navigation">
  <a href="/about">About Harshitha</a>
  <a href="/investigations">Investigations</a>
  <a href="/library">Library</a>
  <a href="/weekly-notes">Weekly Notes</a>
  <a href="/certifications">Certifications</a>
  <button>Ask Harshitha AI</button>
</nav>
```

Hotspots must not be the only navigational method.

---

# 18. Component Naming

Use clear component names.

Suggested React components:

```txt
WorkspaceHero
WorkspaceHotspot
AskOrb
AskPanel
ThemeToggle
TopNavigation
BottomDock
InvestigationCard
LibraryShelf
LibraryBook
FieldNoteCard
CertificationFrame
PrincipleCard
ThinkingDossierLink
SectionHeader
EditorialQuote
```

Avoid vague names like:

```txt
CoolCard
FancySection
MagicBox
HeroThing
```

---

# 19. Tailwind Token Direction

Recommended Tailwind extension:

```ts
theme: {
  extend: {
    colors: {
      paper: "#FAF7F0",
      ivory: "#FFFDF8",
      cream: "#F3E9D7",
      oak: "#D8B98C",
      sand: "#E7D6BC",
      sage: "#A8B99A",
      "deep-sage": "#6F8065",
      ink: "#171717",
      "soft-ink": "#3E3E3A",
      mist: "#D8D4CC",
      pearl: "#F8F3E8",
      glow: "#F6C96D",
    },
    fontFamily: {
      display: ["var(--font-display)", "serif"],
      sans: ["var(--font-sans)", "sans-serif"],
      mono: ["var(--font-mono)", "monospace"],
    },
    borderRadius: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "0.875rem",
      lg: "1.25rem",
      xl: "2rem",
    },
    boxShadow: {
      soft: "0 4px 12px rgba(40, 32, 22, 0.08)",
      medium: "0 12px 32px rgba(40, 32, 22, 0.12)",
      glow: "0 0 40px rgba(246, 201, 109, 0.35)",
    },
  },
}
```

---

# 20. Page-Level Design Specs

## 20.1 Home

Must include:

* immersive workspace scene
* hero copy
* top navigation
* hotspots
* Ask Harshitha orb
* day/night toggle
* bottom dock or subtle quick navigation
* quote or principle

The homepage should immediately communicate:

> This is a thinking space, not a resume site.

## 20.2 Investigations

Feel:

* editorial
* process-rich
* case-study-like
* human

Must include:

* opening question
* project context
* role
* timeline
* problem
* process
* outcome
* Thinking Dossier

## 20.3 Library

Feel:

* thoughtful
* organized
* warm
* alive

Must include:

* books
* categories
* reflections
* connected ideas

## 20.4 Weekly Notes

Feel:

* journal-like
* observant
* concise

Must include:

* date
* note title
* short reflection
* tags
* related ideas

## 20.5 About

Feel:

* personal
* warm
* credible
* not stiff

Must include:

* story
* current direction
* personal traits
* professional evolution
* principles

## 20.6 Certifications

Feel:

* framed
* subtle
* credible

Must include:

* title
* issuer
* date
* skill area
* relevance

---

# 21. Writing and Microcopy

## 21.1 Voice

The design system includes language.

Voice should be:

* warm
* specific
* reflective
* intelligent
* concise
* grounded

## 21.2 Button Copy Examples

Good:

```txt
Open the notebook
Explore the library
Ask Harshitha
Read the investigation
View the dossier
See what shaped this
```

Avoid:

```txt
Learn More
Click Here
View Details
Discover More
```

Use common labels only where clarity matters.

## 21.3 Hotspot Copy Examples

```txt
About
Investigations
Weekly Notes
Certifications
Library
Ask Harshitha AI
Current Focus
Thinking Dossier
```

## 21.4 Empty State Copy

```txt
This shelf is still being filled.
```

```txt
A few notes are still being organized.
```

```txt
This investigation is in progress.
```

---

# 22. Sound and Haptics

Version 1:

No sound.

Future scope:

* optional subtle sound
* paper
* soft click
* lamp toggle
* page turn

Rules:

* always off by default
* user-controlled
* never required
* never autoplay

“Haptics” on web should be interpreted as tactile-feeling interaction, not actual device vibration unless intentionally added for mobile later.

---

# 23. Dark Mode / Night Mode

Night mode should be called Night Mode, not Dark Mode, in the product language.

Reason:

It is not a developer theme.
It is the same room at a different time.

Night mode should change:

* background tones
* text colors
* shadows
* lamp glow
* window atmosphere
* orb glow
* hotspot surfaces

It should not change:

* content structure
* navigation
* brand identity
* overall warmth

---

# 24. Design Anti-Patterns

Do not use:

* generic portfolio cards everywhere
* black background with neon gradients
* random 3D spinning objects
* fake glassmorphism overload
* too many badges
* dense résumé timeline as homepage
* stock illustrations
* “AI robot” imagery
* excessive particle effects
* scroll hijacking that prevents control
* hidden navigation that hurts usability
* small unreadable text
* overly gamified achievements

---

# 25. Version 1 Design Acceptance Criteria

Version 1 design is successful when:

* homepage feels like entering a room
* desk and library metaphor are immediately understandable
* light theme feels warm and premium
* night mode can be designed later without rebuilding everything
* hotspots are clear and accessible
* typography feels editorial and readable
* visual system does not feel generic
* Ask Harshitha orb feels integrated, not pasted on
* mobile experience remains usable
* projects can grow into investigations
* design feels like Harshitha, not like a template

---

# 26. Design Decision Log

## Decision 001: Light-first interface

Reason:

Harshitha explicitly does not want a dark default. Light mode better communicates openness, warmth, clarity, and trust.

Status:

Accepted.

## Decision 002: Homepage as interactive room

Reason:

The strongest concept is not a portfolio page but a workspace scene where meaningful objects become navigation.

Status:

Accepted.

## Decision 003: Desk and library as core metaphor

Reason:

The desk represents active thinking. The library represents evolving thought. Together they communicate Harshitha’s operating system.

Status:

Accepted.

## Decision 004: Night Mode, not Dark Mode

Reason:

Night mode should feel environmental and emotional, not merely technical.

Status:

Accepted.

## Decision 005: Warm editorial typography

Reason:

The experience needs sophistication and humanity. Pairing a serif display face with a clean sans-serif supports that balance.

Status:

Accepted.

## Decision 006: Hotspots as primary experiential navigation

Reason:

Hotspots make the workspace interactive while preserving standard navigation for usability.

Status:

Accepted.

---

# 27. Open Design Questions

1. Should the homepage scene be a single generated image, custom illustration, or layered 3D scene?
2. What is the final wordmark: Project Atlas, Harshitha Devineni, or both?
3. Should the orb live inside the room or float above the UI globally?
4. Should the bottom dock appear on desktop, mobile, or both?
5. Should project entries be called Investigations, Questions, or something else?
6. What exact accent color should become the signature?
7. Should the first version include true night mode or only visual preparation?
8. How many hotspots should appear on the first screen before it feels cluttered?
9. Should certifications appear on the wall or inside the library?
10. How realistic should the room be?

---

# 28. Final Design North Star

Project Atlas should look like a warm, thoughtful workspace and behave like an intelligent product.

The user should not feel like they are browsing a résumé.

They should feel like they have entered the place where Harshitha thinks.

Every object should invite a question.
Every page should create clarity.
Every interaction should reveal character.
Every design choice should make the visitor trust how Harshitha thinks.
