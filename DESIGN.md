---
name: Milos Rankovic Portfolio
description: A fully dark, work-first portfolio. Neutral ground, one cobalt accent, hairlines instead of containers.
colors:
  cobalt: "oklch(0.5 0.23 264)"
  cobalt-bright: "oklch(0.56 0.23 264)"
  cobalt-ink: "oklch(0.76 0.13 264)"
  on-cobalt: "oklch(0.985 0.005 264)"
  on-cobalt-mute: "oklch(0.88 0.06 264)"
  ground: "oklch(0.155 0 0)"
  raised: "oklch(0.195 0 0)"
  raised-hover: "oklch(0.225 0 0)"
  ink: "oklch(0.955 0 0)"
  mute: "oklch(0.69 0 0)"
  line: "oklch(1 0 0 / 0.13)"
  line-strong: "oklch(1 0 0 / 0.4)"
  danger: "oklch(0.74 0.16 25)"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.35rem + 2.6vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1.2vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.3vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: "-0.01em"
  row:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.005em"
  small:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: "-0.005em"
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "0.01em"
    fontFeature: "tnum"
rounded:
  none: "0"
  control: "0.5rem"
spacing:
  gutter: "clamp(1.25rem, 0.6rem + 2.8vw, 2.5rem)"
  section: "clamp(5rem, 3rem + 8vw, 10rem)"
  column-gap: "1rem"
  column-gap-wide: "1.5rem"
  row: "0.75rem"
  field-gap: "1.75rem"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.on-cobalt}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    height: "3rem"
    padding: "0 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-bright}"
    textColor: "{colors.on-cobalt}"
  button-inverse:
    backgroundColor: "{colors.on-cobalt}"
    textColor: "{colors.cobalt}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    height: "3rem"
    padding: "0 1.75rem"
  button-inverse-hover:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
  button-outline:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    height: "3rem"
    padding: "0 1.75rem"
  button-sm:
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    height: "2.5rem"
    padding: "0 1.25rem"
  input:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    height: "3rem"
    padding: "0 1rem"
  textarea:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1rem"
  field-label:
    textColor: "{colors.mute}"
    typography: "{typography.label}"
  media-frame:
    backgroundColor: "{colors.raised}"
    rounded: "{rounded.none}"
  nda-tile:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.75rem"
  nda-tile-hover:
    backgroundColor: "{colors.raised-hover}"
  closing-band:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.on-cobalt}"
    rounded: "{rounded.none}"
---

# Design System: Milos Rankovic Portfolio

## Overview

**Creative North Star: "The Lit Screen in a Dark Room"**

The interface is the dark room; the work is the only thing lit. Every page is a neutral near-black ground carrying off-white Geist at one weight, grey secondary text, and small uppercase mono for facts. Project screenshots are the only saturated, detailed objects on the page, so the eye lands on them before any sentence is read. Nothing in the chrome competes: there are no containers, no pills, no icons, no depth effects. Structure comes from a 12-column grid and 1px hairlines.

Restraint here is not emptiness. Density comes from real content set plainly: ruled lists of capabilities, experience and projects, each row a hairline, a mono fact and a title. Projects under NDA are presented deliberately, as ruled rows or square raised tiles with their index, title, stack and year, never as a missing picture.

One colour is held back for the single action the site exists for. Cobalt appears as the primary button, as hover and focus feedback, as text selection, and once per page as a full-bleed closing field. Motion is a quiet layer over this: smooth scroll, headlines that rise line by line, media that drifts under scroll. All of it switches off for visitors who ask for reduced motion, and the page is complete without it.

**Key Characteristics:**
- Fully dark, neutral greys with zero chroma; the theme is fixed, not toggled.
- One typeface family at weight 400; hierarchy from size and from ink versus mute.
- Geist Mono 12px uppercase carries every fact: index, year, stack, status, labels.
- Square media, 8px controls, 1px hairlines; nothing else has a shape.
- Cobalt is rare everywhere except the closing band, where it owns the full width.
- Flat. No shadows, glows, backdrop blur or visible gradients.

## Colors

A zero-chroma dark neutral ramp with a single cobalt accent at hue 264. Values are OKLCH and live as custom properties in `portfolio/app/globals.css`; the frontmatter is the normative list.

### Primary
- **Cobalt** (`cobalt`): the fill of the primary button, the text-selection background, and the full-bleed closing band. It is a surface colour, never a text colour on the dark ground.
- **Bright Cobalt** (`cobalt-bright`): the primary button's hover fill only.
- **Cobalt Ink** (`cobalt-ink`): the legible, lighter cobalt for anything drawn on the dark ground: link and title hover, the 2px focus outline, the focused field border, and the caret.
- **Paper on Cobalt** (`on-cobalt`): text on cobalt surfaces, and the fill of the inverse button that sits inside the closing band.
- **Muted Paper on Cobalt** (`on-cobalt-mute`): link hover inside the closing band, where cobalt ink would disappear.

### Neutral
- **Ground** (`ground`): the page, the mobile menu, and its backdrop.
- **Raised** (`raised`): the slot behind media while it loads or letterboxes, and the NDA tile.
- **Raised Hover** (`raised-hover`): the NDA tile on hover. The only tonal step used as feedback.
- **Ink** (`ink`): primary text, headings, active nav item, row titles.
- **Mute** (`mute`): secondary text, the quieter second half of a headline, all meta, inactive nav, placeholders.
- **Line** (`line`): the default 1px hairline for every rule and row divider.
- **Strong Line** (`line-strong`): the field border, where a control boundary must be visible at rest.
- **Danger** (`danger`): invalid field border and error messages. Appears only in the contact form.

### Named Rules
**The One Accent Rule.** Cobalt is the only hue. On any screen above the closing band it appears at rest in at most one place, the primary button; everything else cobalt is a response to hover, focus or selection.

**The Two Cobalts Rule.** `cobalt` is for fills, `cobalt-ink` is for marks on the dark ground. Never set text or an outline on `ground` in `cobalt`; never fill a surface with `cobalt-ink`.

**The Split Headline Rule.** A headline may finish in `mute`: the first clause in ink, the continuation in grey, in the same size and weight. This is the system's emphasis device; it replaces bold, italic and colour.

## Typography

**Display Font:** Geist (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Geist (same stack)
**Label/Mono Font:** Geist Mono (with ui-monospace, monospace)

**Character:** One grotesque at one weight, tightened as it grows, paired with its own mono for facts. The pairing reads as engineered rather than decorated.

### Hierarchy
- **Display** (400, clamp 2rem to 3.75rem, 1.04, -0.025em, balanced): page titles, the hero headline, the home statement, the next-project link. Held to roughly 20 to 22 characters per line on page headers.
- **Title** (400, clamp 1.5rem to 2.25rem, 1.12, -0.02em, balanced): group titles inside a section, NDA tile titles, bio paragraphs on About.
- **Lead** (400, clamp 1.125rem to 1.3125rem, 1.42, -0.01em, pretty): long-form project description, capped at 65ch; the email link in the closing band.
- **Row** (400, 1.25rem, -0.025em): the title cell of a ruled row: project list, role, degree.
- **Body** (400, 1rem, 1.5, -0.005em): everything else. Prose blocks cap between 52ch and 68ch.
- **Small** (400, 0.875rem): footer line, form messages.
- **Label** (Geist Mono 400, 0.75rem, 1.35, 0.01em, uppercase, tabular figures): index numbers, years, stacks, status, section labels, field labels, definition terms, button text, Menu and Close, Play and Pause.

### Named Rules
**The One Weight Rule.** All headings and text are weight 400. Weight 500 exists in exactly two places, the wordmark and button labels. Nothing is bold.

**The Facts in Mono Rule.** If it is a fact about the work (a number, a year, a stack, a status) or a control label, it is the Label style in `mute`. If it is a sentence, it is Geist. Mono never carries prose and never exceeds 12px.

**The Middle Dot Rule.** Stack items inside a label are joined with a spaced middle dot and limited to three. They are text, not chips.

## Layout

A 12-column grid inside a wide shell. The shell is centred, capped at 110rem, and padded by a fluid gutter (`spacing.gutter`). The grid is 4 columns with a 1rem gap below 48rem and 12 columns with a 1.5rem gap from 48rem up. There is one structural breakpoint, 48rem; 40rem is used only to flip stacked rows to side by side and to swap the mobile menu for inline nav.

Vertical rhythm is one token: every section opens with `spacing.section` of space above it, and the footer takes the same. Sections do not have bottom padding or background changes; the next section's top spacing and its hairline do the separating.

Composition is asymmetric on purpose. Text blocks start on column 4 (statement, project description) or column 6 (bio); facts sit in the last four columns; the first featured project runs all 12 columns, later ones pair at 6, and a leftover sits right-aligned at 8. Ruled rows use fixed column roles: label in the first 1 to 3 columns, title next, detail in the remainder.

The home hero fills the viewport below the header (100svh minus header height) and anchors to the bottom: media takes the flexible height, its caption bar sits under it, and the headline with caption and primary button close the viewport. The header is 5rem tall, 6rem from 48rem up, and is not sticky.

On small screens every grid child spans all 4 columns, meta cells drop below titles, secondary meta (stack on image tiles, NDA status in rows) is hidden rather than wrapped, and navigation moves into a full-screen menu.

### Named Rules
**The Hairline Section Rule.** A section begins with a 1px rule across the shell, a mono label under it at the left, and optionally one text link opposite. That row is the section's heading. It is a ruled index label, not an eyebrow: it is never stacked directly above a display headline.

**The Ruled List Rule.** Repeating content is a list of rows separated by `line` hairlines and closed with a bottom hairline. Row padding is 0.75rem for single-line items, 1.25rem to 2.5rem for rows with a title.

## Elevation & Depth

Flat. The build contains no box-shadow, no drop-shadow, no backdrop blur and no glow. Depth is conveyed three ways only: one tonal step (`raised` on `ground`) for media slots and NDA tiles, the 1px hairline, and motion (media drifting inside a clipped frame, one hero slide wiping over the previous).

Layering exists only where function demands it: the mobile menu is a full-screen opaque sheet in `ground`, and the skip link appears above everything on focus.

### Named Rules
**The Flat Rule.** No shadow of any kind, at rest or on hover. Feedback is a colour change, a border change, a 2% press scale on buttons, or a 3% slow zoom on media.

## Shapes

Two radii and nothing between them. Media, tiles, the closing band, frames and rules are square (0). Controls (buttons, inputs, textarea, the skip link) take 8px. No element is pill-shaped or circular.

Borders are always 1px. `line` draws rules and the outline button; `line-strong` draws fields. Media is cropped by its frame with overflow hidden, never masked to a shape; image tiles use a 2:1 frame showing the screenshot from its top edge, and the portrait is 4:5.

### Named Rules
**The Square Media Rule.** Anything that shows work or stands in for it has square corners. Rounding belongs to things you press or type into.

## Components

Refined and restrained: controls are small, mono-labelled and quiet; the content around them does the talking.

### Buttons
- **Shape:** gently rounded (8px), 48px tall with 28px side padding; a compact size is 40px tall with 20px padding. Labels are the Label style at weight 500.
- **Primary:** cobalt fill, paper-on-cobalt text. Hover brightens the fill to bright cobalt.
- **Inverse:** paper-on-cobalt fill with cobalt text, used only on the cobalt closing band. Hover turns it to ground with ink text; its focus outline is paper, not cobalt ink.
- **Outline:** 1px `line` border, ink text, transparent. Hover takes the border to ink.
- **States:** colour and border transition over 300ms on the expo-out curve; press scales to 0.98; disabled is 50% opacity with no pointer events.

### Text links
An inline link carries a 1px underline in its own colour, sitting 0.15em below the text. On hover the text turns cobalt ink and the underline retracts toward the right over 450ms. Titles that are links (tile titles, row titles, the next-project link) have no underline and turn cobalt ink on hover of the whole row or tile. Nav and footer links move from mute to ink instead.

### Inputs / Fields
- **Style:** transparent fill, 1px strong-line border, 8px radius, 48px tall, 16px side padding, 16px text. The textarea is at least 160px tall and resizes vertically.
- **Label:** the Label style in mute above the field, 8px gap. Fields are spaced 28px apart; Name and Email sit side by side from 48rem.
- **Hover / Focus:** hover takes the border to mute; focus takes the border to cobalt ink and draws the 2px cobalt-ink outline flush to the field.
- **Error / Disabled:** invalid fields take a danger border, the label turns danger, and a small danger message sits under the field. Disabled is 50% opacity.
- **Feedback:** submit status is a plain small-text line beside the button, announced politely; the button label changes to "Sending…" while pending.

### Focus
Every focusable element gets a 2px cobalt-ink outline offset by 3px. Fields pull it flush; the inverse button switches it to paper. Never removed.

### Navigation
The header is the wordmark at left (15px, weight 500, tight tracking) and three text links at right (15px, 40px apart). The current section is ink, the rest mute, hover to ink. No underline, no indicator, no background. Below 40rem the links are replaced by a mono "Menu" button that opens a full-screen native dialog in ground: wordmark and "Close" at the top, then the links stacked at the bottom as large ruled rows (40px, tight tracking, hairline above each), then a full-width primary button.

### Media frame
A square, clipped slot with a `raised` fill that holds an image or video. From 48rem up the content inside drifts with scroll (see motion in the sidecar); on hover inside a linked tile it scales to 1.03 over 1200ms. Under the frame, a single baseline row carries the index in mono, the title in Geist, and stack and year in mono at the right.

### NDA tile
The stand-in for work that cannot be shown. A square `raised` panel at the same grid footprint as an image tile, padded 20px (28px from 48rem), with index and "Under NDA" in mono at the top and the title in Title size, a two-line description in mute, and stack and year in mono at the bottom. Hover lightens the panel to `raised-hover` over 500ms. It has no border, radius or shadow; it is a media slot with type in it, not a card.

### Hero media
The first-viewport signature. A media frame that takes the flexible height of the viewport, showing either a looping muted video or project screenshots that advance every 5 seconds. Each incoming slide wipes in from the right over the outgoing one. Under it, a 44px mono bar holds the current project title as a link at left and, at right, the slide counter ("01 / 02") and a text Play/Pause toggle. Autoplay is off for visitors who prefer reduced motion until they press Play.

### Ruled rows
The project list, experience, education, capabilities, skills, project facts and contact details all use the same row: hairline above, mono label or index in the leading columns in mute, value or title in ink, optional mono meta at the right. Linked rows turn their title cobalt ink on hover; the row itself does not change background.

### Closing band
The one place cobalt is a field. A full-bleed cobalt section at the foot of every page except Contact (which gets a single hairline instead), at least 24rem tall and 60svh from 48rem. A large question in paper-on-cobalt sits at the top (clamp 2.75rem to 6rem, line-height 0.96, about 14 characters wide); the email as a Lead-size link and the inverse button sit on the bottom edge, left and right. Text selection inverts inside it. A plain footer line in small mute text follows on ground.

## Do's and Don'ts

### Do:
- **Do** put the work first: media or a ruled list of projects appears before explanatory copy.
- **Do** build structure from the 12-column grid and 1px `line` hairlines; open sections with the ruled label row and `spacing.section` above.
- **Do** keep all text at weight 400 and create emphasis by size or by finishing a headline in `mute`.
- **Do** set facts and control labels in Geist Mono 12px uppercase in `mute`, with tabular figures and two-digit indexes (01, 02).
- **Do** keep media and anything standing in for media square, and controls at 8px.
- **Do** use `cobalt-ink` for anything cobalt drawn on the dark ground, and `cobalt` only as a fill.
- **Do** present NDA projects with the NDA tile or a ruled row, stating "Under NDA" as plain mono text.
- **Do** gate every animation on `prefers-reduced-motion: no-preference`, and scroll-linked drift on 48rem and up; content must be visible and complete with motion off.
- **Do** end every page except Contact with the cobalt closing band.

### Don't:
- **Don't** add a second accent hue, tint the neutrals, or add a light theme; the neutrals have zero chroma and the theme is fixed dark.
- **Don't** use cobalt at rest for anything above the closing band other than the one primary button.
- **Don't** add shadows, glows, backdrop blur or visible colour gradients. (The link underline is drawn with a single-colour background image, and images load from a blurred low-quality placeholder; neither is a decorative effect.)
- **Don't** wrap content in bordered, rounded or shadowed cards. The only filled panel is the square NDA tile, and it exists to occupy a media slot.
- **Don't** render tags, stacks or statuses as pills, chips or badges; they are mono text joined by middle dots.
- **Don't** use icons or glyphs for controls or decoration; controls are words (Menu, Close, Play, Pause).
- **Don't** use bold, italic or colour for emphasis in text.
- **Don't** round media, and don't introduce radii other than 0 and 8px.
- **Don't** stack a mono label above a display headline as an eyebrow; mono labels are section index rows and facts.
- **Don't** make the header sticky or give it a background.
- **Don't** invent facts for the mono slots (locations, metrics, client names); a slot with no true value is omitted.
