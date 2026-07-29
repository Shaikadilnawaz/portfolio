# Shaik Adil Nawaz — Portfolio

Personal portfolio site. React + Vite + Tailwind CSS v4 + [Motion](https://motion.dev).

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve the production build
```

## The photo

The hero avatar reads `public/adil.jpg`, generated from `Adil.png` at the repo
root. If that file is ever missing the avatar falls back to your initials, so
the site never shows a broken image.

To re-crop (after replacing `Adil.png`, or to change the framing):

```powershell
powershell -File scripts/crop-avatar.ps1 -Source Adil.png -VerticalBias 0.02
```

The script centre-crops to a square, biased toward the top of the frame so the
face sits inside the circle, and writes an 800×800 JPEG to `public/adil.jpg`.
Tune the framing with `-VerticalBias` (`0` = flush to the top edge, `0.5` =
vertically centred; default `0.06`).

If you'd rather do it by hand, just drop any square image at `public/adil.jpg`.

## Editing content

Everything on the page comes from [`src/data.js`](src/data.js) — profile, stats,
skills, projects, education, certifications, languages, interests, nav. No
component needs touching to update content.

Two things in there are placeholders you should replace:

- `profile.socials` — the GitHub and LinkedIn URLs currently point at the site
  roots.

## Structure

```
src/
  data.js                  all page content
  App.jsx                  section order + scroll progress bar
  index.css                design tokens (@theme) and base styles
  components/
    Nav.jsx                fixed bar, frosts on scroll, mobile drawer
    Hero.jsx               name, role, avatar, stats, parallax
    Projects.jsx           project cards
    LivePreview.jsx        live iframe embed, framed as a browser window
    About.jsx              bio + skill groups
    Background.jsx         education / certifications timeline, languages
    Contact.jsx            email, copy-to-clipboard, socials
    Footer.jsx
    SectionHeading.jsx     shared eyebrow + title + intro
    Reveal.jsx             scroll-triggered entrance
    icons.jsx              inline SVG icon set
```

## Design system

Generated with the [UI UX Pro Max](https://ui-ux-pro-max-skill.nextlevelbuilder.io/)
skill. It's git-ignored (2.5 MB of vendored data) — reinstall it, then
regenerate or explore:

```bash
npm i -g ui-ux-pro-max-cli && uipro init --ai claude

python .claude/skills/ui-ux-pro-max/scripts/search.py "developer portfolio" \
  --design-system -p "Adil Nawaz Portfolio"
```

What it recommended, and what's implemented here:

| | |
|---|---|
| Pattern | Portfolio Grid — hero → work → about → contact |
| Style | Motion-Driven — scroll reveals, parallax, hover microinteractions |
| Colors | Monochrome (zinc) + blue accent `#3b82f6` |
| Type | "Tech Startup" — Space Grotesk (display) + DM Sans (body) |

The skill's default type pairing for this query was Caveat/Quicksand
(handwritten); it was swapped for the Tech Startup pairing from the same
database, which suits an engineering portfolio better.

Its pre-delivery checklist is satisfied: SVG icons rather than emoji,
`cursor-pointer` on every clickable element, 150–300ms hover transitions,
visible `:focus-visible` rings, a skip link, and `prefers-reduced-motion`
honoured in both CSS and JS (`useReducedMotion` disables transforms, parallax
and looping ambient animation rather than merely speeding them up).

## The live embed

The MConnects card embeds `https://mconnects.vercel.app` in a sandboxed,
lazy-loaded iframe styled as a browser window, so visitors can use the real app
without leaving the page. It works because that deployment sends no
`X-Frame-Options` or CSP `frame-ancestors` header — if you ever add one, the
embed will go blank and you should switch `preview` to a screenshot in
`src/data.js`.
