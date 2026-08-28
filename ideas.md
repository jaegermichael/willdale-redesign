# Willdale Bricks redesign ideas

## Approach 1
**Theme Name:** Clay & Canopy

**Very Brief Intro:** A warm architectural direction that treats brick as a living material, pairing mineral surfaces with Zimbabwean landscape tones. It feels grounded, crafted, and confident rather than corporate.

**Probability:** 0.06

## Approach 2
**Theme Name:** Greenline Industrial

**Very Brief Intro:** A sharper industrial system built around Willdale green, blackened steel, technical labels, and high-contrast product navigation. It makes the business feel operationally precise and procurement-ready.

**Probability:** 0.03

## Approach 3
**Theme Name:** Material Index

**Very Brief Intro:** An editorial catalogue for brick, structure, and place, using a restrained field-guide language, tactile close-ups, and asymmetric composition. It makes the product range feel considered and collectible.

**Probability:** 0.08

## Selected approach: Clay & Canopy

### Design Movement
Contemporary African architectural editorial, informed by material studies, landscape modernism, and the quiet confidence of a well-made building.

### Core Principles
1. **Material first:** Brick texture, fired clay, earth, and shadow carry the visual narrative.
2. **Architectural hierarchy:** Use structural asymmetry, strong alignment, and generous intervals instead of decorative clutter.
3. **Trust through clarity:** Make the product path, project proof, contact information, and specifications easy to scan.
4. **Green as signal:** Preserve Willdale green as an ownable action color, not as a field that overwhelms every section.

### Color Philosophy
The base is warm white and sand, creating a calm surface that lets fired-clay imagery feel tangible. Charcoal-green grounds the interface with an industrial, Zimbabwean botanical undertone. Terracotta appears as a material cue, while Willdale green is reserved for actions, active states, and small brand signals. The effect should feel built, not coated.

Palette: **Charcoal Green #163B35**, **Fired Clay #B95638**, **Sandstone #E8DFD1**, **Warm White #F8F6F1**, **Willdale Green #23B26D**, **Ink #14201D**.

### Layout Paradigm
Use a left-anchored, split-screen hero with a tall image field on the right. After the hero, move through a sequence of distinct compositions: an editorial mission spread, an evidence-led project rail, a material library for products, and a direct contact block. Avoid repeated centered card grids. The signature “Brick by brick” index rail should appear as a quiet vertical navigation motif beside the product/project storytelling.

### Signature Elements
1. A vertical material index rail with tiny masonry-course marks and section labels.
2. Terracotta image frames with offset edge details that echo brick bonds.
3. Small architectural metadata lines for place, category, and use case.

### Interaction Philosophy
Interactions should feel like handling a material sample: direct, tactile, and restrained. Links gain a measured underline or shift in weight, product tiles lift only slightly, and buttons respond with a compact press motion. The mobile navigation opens as a clean full-height field, keeping the same information hierarchy without visual noise.

### Animation
On first load, let the header settle in quickly and reveal the hero copy with a short upward movement while the image remains stable. On scroll, reveal section headings and imagery with low-distance fades and staggered metadata, never with large parallax or attention-seeking loops. Product tiles can shift 4px and deepen their border on hover. Respect reduced motion by removing transforms and using opacity-only transitions.

### Typography System
Use **DM Sans** for body, navigation, metadata, and UI controls, with **Space Grotesk** for display headings and large product names. Headings are tight, slightly tracked in, and sentence case. Body copy stays readable at 16–18px with 1.55–1.7 line-height. Utility labels use 11–12px uppercase with deliberate letter spacing, but only where they improve scanning.

### Brand Essence
**Willdale makes Zimbabwean clay bricks for people shaping places that should endure, combining local material knowledge with dependable supply.**

Personality: **grounded, exacting, quietly bold**.

### Brand Voice
Headlines sound direct and material-aware. CTAs name the next action plainly. Microcopy is concise, factual, and warm without sounding salesy. Avoid generic filler and inflated claims.

Example headline: **Brick made for the life around it.**

Example CTA: **Explore the range**.

### Wordmark & Logo
Use the existing Willdale emblem as the reference, but redraw it as a simplified masonry monogram: a bold W assembled from two interlocking brick courses, with a small green vertical mark suggesting a sprouting line or level. Keep the symbol standalone so it works in the header and favicon without relying on generated text.

### Signature Brand Color
**Willdale Green #23B26D**. It is the brand’s action signal: visible enough to own, restrained enough to retain credibility.

## Design read
Reading this as: **a trust-first industrial manufacturing and product catalogue homepage** for Zimbabwean homeowners, builders, architects, developers, and procurement teams, with a **warm material-led, contemporary architectural** language.

## Design dials
**DESIGN_VARIANCE:** 8. **MOTION_INTENSITY:** 5. **VISUAL_DENSITY:** 4.

## Compact token plan

| Token | Value | Use |
| --- | --- | --- |
| Charcoal Green | #163B35 | Header, dark sections, primary text on pale surfaces |
| Fired Clay | #B95638 | Material accent, image framing, section markers |
| Sandstone | #E8DFD1 | Soft background field and secondary surfaces |
| Warm White | #F8F6F1 | Main page surface |
| Willdale Green | #23B26D | Primary actions, focus states, brand signal |
| Ink | #14201D | High-contrast body text |

## ASCII wireframe

```text
[utility strip: standards | email | phone | socials]
[logo] [About] [Projects] [Products] [Contact] [Shop bricks]

[hero copy: eyebrow / thesis / short proof / CTA]
                                      [tall brick-yard image]
                                      [vertical material index]

[mission spread: large heading]      [short mission + action]

[projects: heading + context] [wide editorial project rail]

[products: material library with 4 varied image tiles]

[contact field: address / hours / call me back] [dark action panel]

[footer: navigation / standards / social / legal]
```
