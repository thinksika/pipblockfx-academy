# PIP BLOCKS — A–Z WEBSITE REDESIGN & BUILD BRIEF

**Primary design reference:** https://www.coffiefx.com/  
**Current PiP Blocks site to inspect:** https://pipblockfx.com/  
**Brand:** PiP Blocks Forex Trading Academy

## Mission

Rebuild the PiP Blocks website from a fresh design direction. The desired outcome is a polished, rich, conversion-focused Forex academy website with the same *level of completeness, interaction, content hierarchy and presentation quality* as CoffieFX, while remaining recognisably PiP Blocks.

This is not a request to clone CoffieFX pixel-for-pixel. Study the live reference and supplied screenshots, then create an original PiP Blocks interpretation. Use your design judgement: make strong decisions, improve weak sections, and add useful details where they materially improve the visitor journey. Do not ask for approval for routine design choices. Do not invent products, claims, facts or imagery.

## 1. Work economically

- Inspect the repository, current site and supplied asset pack once, then make a short implementation plan internally and start building.
- Avoid repeated site-wide scans, repeated explanations, speculative redesign alternatives and long reports.
- Do not dump source files or long analysis into chat. Report only key decisions, blockers and final results.
- Prefer the existing framework, components, dependencies and tooling. Do not migrate frameworks or install large libraries without a concrete technical need.
- Reuse useful code, but replace the old visual system where necessary. Keep the code readable and maintainable.
- Use best judgement for spacing, responsive behaviour, component structure, copy and section ordering. Add a feature only when it serves a clear visitor need and can be completed properly.

## 2. Read the design pack first

This ZIP contains:

- `01-PRIMARY-DESIGN-SCREENS/` — the preferred PiP Blocks desktop and mobile UI references. Treat these as the main visual direction.
- `02-SUPPORTING-DESIGN-EXPLORATIONS/` — earlier generated concepts. Use only for useful ideas; some are older and use different layouts. The primary screens take precedence.
- `03-COFFIEFX-REFERENCE-SCREENSHOTS/` — screenshots supplied by the user showing the CoffieFX mobile website and menu/footer.
- `04-REAL-PIPBLOCKS-BRAND-ASSETS/` — real PiP Blocks logo, mark and authentic event photographs, including four newly supplied photographs.

Also open the actual websites in a browser if available. Inspect the current PiP Blocks site to identify its existing logo, exact colours, working links, copy and any additional authentic images. Inspect CoffieFX to understand the live section flow and interactions. The CoffieFX reference is a design/structure reference only.

**Important hierarchy:** current PiP Blocks brand assets + primary design screens + real content are the source of truth. Do not copy outdated supporting mockup details if they conflict.

## 3. Absolute image and asset rules

- Use the supplied, genuine PiP Blocks logo and event photographs. Prefer the assets in `04-REAL-PIPBLOCKS-BRAND-ASSETS/`, and inspect the current live site for any additional authentic assets.
- The four new event photographs are `IMG-20261112-WA0051.jpg`, `IMG-20261112-WA0048.jpg`, `IMG-20261112-WA0050.jpg`, and `IMG-20261112-WA0047.jpg`.
- Suggested use: `WA0050` as a speaker portrait/editorial feature; `WA0051` and `WA0048` for wider panel/event sections; `WA0047` as a supporting panel/event image. Check each crop in context before final placement.
- Existing images include `speaker-stage.jpg`, `wide-seminar.jpg`, `speaker-presentation.jpg`, and `community-audience.jpg`.
- **Never use AI-generated people, AI-generated event scenes, random stock photography, fabricated screenshots, or generated trading results.**
- The screen mockups in this pack are UI references only. They may contain illustrative or generated photos, charts, placeholder avatars or text. Do not reuse the people/photos shown inside mockups as website assets. Recreate the layout using genuine PiP Blocks assets.
- Do not invent a Bootcamp flyer or show the old Bootcamp as a current programme. It has ended.
- Optimise images for web without visibly damaging quality. Use responsive dimensions, explicit width/height or aspect ratio, descriptive alt text, `object-fit`/`object-position` and lazy loading below the fold. Do not lazy-load the main hero image.

## 4. Brand and visual quality

Use the exact PiP Blocks logo as the source for the colour system. The established direction is orange/red-orange, charcoal/black, white/warm cream and slate/grey. Tune the colour values from the logo rather than inventing an unrelated palette.

Create a premium, visually rich design with:

- A distinctive typography system: expressive display headings plus a clean, highly readable sans-serif for body copy.
- Photography-led compositions, not a plain block of text followed by a generic image.
- A considered mix of dark and light sections, editorial split layouts, layered image crops, well-designed feature panels, subtle borders, directional details and clear CTA hierarchy.
- Visual rhythm and variety. Not every section should use the same three-card grid.
- Rich but restrained interaction design. No excessive glassmorphism, random gradients, fake dashboards, neon glows, particles or decorative chart noise.
- Responsive layouts designed for phones first, then enhanced for desktop. Mobile should feel deliberately composed, not like a desktop page squeezed smaller.

Aim for the visual polish and completeness of CoffieFX. Do not make the website bland/minimal by removing useful visual storytelling, but avoid clutter. The result should be confident, editorial, professional and authentic.

## 5. Recommended site architecture and visitor journey

Use a clear small site structure. Keep the homepage as a strong, complete landing page and provide proper detail pages where useful:

- Home
- Mentorship
- About
- Insights
- Community
- FAQ (can be a homepage section if a separate page adds no value)

Do not create an empty or fake Programs/Bootcamp page. If there are no active upcoming programmes, omit that navigation item or show a modest “Enquire about future programmes” route without dates or false urgency. Do not build the private student portal/live-class system in this phase.

Suggested homepage flow, adapted to the actual PiP Blocks offer:

1. Navigation and strong hero.
2. Market coverage strip.
3. Forex education / mentorship / community offers.
4. A clear learning pathway based on the real syllabus.
5. Mentorship offer preview with price and key inclusions.
6. Watch & Learn / Insights using verified existing YouTube content.
7. About the academy with authentic speaker/event photography.
8. Interactive “Find Your Starting Point” flow (inspired by CoffieFX’s six-question finder, but original to PiP Blocks).
9. FAQ.
10. Strong final CTA and detailed but compact footer.

You may improve the order if you can explain the visitor-flow benefit in one sentence. Do not add sections merely to make the page longer.

## 6. Hero and content direction

Use original, natural copy. The established brand idea “Trade with Purpose” is available, but you are free to craft a stronger headline that fits the real academy and photographs. Do not force exact wording from any previous mockup.

The hero should clearly communicate that PiP Blocks offers Forex education, structured mentorship and a learning community. Use the strongest genuine PiP Blocks seminar image, with a crop that keeps the speaker and room context legible. Provide one clear primary CTA (mentorship enquiry or community join) and one quieter secondary CTA.

Avoid exaggerated claims such as “become profitable”, “guaranteed consistency” or “master trading in days”.

## 7. Verified offer and syllabus details

Use these known mentorship details accurately:

- Price: **US$370**.
- Format: live + pre-recorded.
- Delivery/venue: Zoom Meeting.
- Access: lifetime access.
- Private Telegram group.
- Weekly market outlook.
- PDF trading resources/books.

The syllabus is:

**Module 0** — Introduction to Forex Trading; Platform Setup & Chart Basics; Trading Mindset Introduction.

**Module 1** — Market Structure; Valid BOS (EEC/SMC); Range Concept; SNR Basics; Market Pricing.

**Module 2** — Storyline; Zone Selection (SMC/EEC); Types of EG; SNR Significant.

**Module 3** — Liquidity Concept; Money Transfer.

**Module 4** — SNR Trendlines; TL Kiss; TL Logics; Entry Model.

**Module 5** — Risk/Trade Management; Trading Psychology; Backtesting & Journaling; Building a Trading Routine; Review & Continuous Improvement.

Present the syllabus as an attractive accordion, learning path or modular programme layout. Do not silently rename or remove specialist syllabus terms. The mentorship CTA should open a real WhatsApp or direct Telegram enquiry, not a fake checkout.

## 8. Markets and educational coverage

The established market categories are:

- Forex
- Synthetics / Synthetic Indices
- Metals
- Indices
- Commodities
- Crypto

Do not show invented prices, live quotes, win rates or performance charts. Any decorative charts must be clearly decorative and not presented as current market data. The PiP Blocks Telegram channel describes its analysis as educational ideas rather than financial advice/signals; keep the site's language consistent with that positioning.

## 9. Insights / Watch & Learn

Use the official YouTube channel: https://youtube.com/channel/UCLNMge-FeeicPfXTyyeKBXQ?sub_confirmation=1

Inspect the channel or existing project for genuine videos and thumbnails. Use only verified titles, IDs and links. If video metadata cannot be retrieved efficiently, show a well-designed channel feature linking to YouTube rather than inventing video cards. Make the content presentation feel like a real academy media library without implying a paid/free course that does not exist.

## 10. Find Your Fit interaction

Create a lightweight multi-step selector inspired by CoffieFX’s “Not Sure Where to Start?” feature. It should help a visitor choose among:

- Learning Forex foundations / understanding concepts.
- Developing a structured process through mentorship.
- Getting educational market insights/content.
- Joining the community and learning alongside other traders.

Use a short progress indicator, back/next controls and a useful result with a matching existing CTA. No signup, account or backend required. Keep it to roughly 4–6 concise questions. Make every interaction work on mobile, keyboard and touch.

## 11. FAQ and trust

Answer common questions accurately: who PiP Blocks is for; whether a beginner can join; what mentorship includes; its price and delivery; how long access lasts; how to enquire; how to join the community; and whether profits are guaranteed.

Clearly state that trading involves risk and that PiP Blocks does not guarantee profits. Do not create testimonials, student names, avatars, review counts, member counts, years of experience, awards, certifications or performance metrics unless verified from the real site/project and clearly attributable.

## 12. Official links and calls to action

Use these links:

- Telegram community: https://t.me/pipblcksfxhuz
- Direct Telegram enquiry: https://t.me/pipblockfx
- WhatsApp: https://wa.me/233538132060
- YouTube: https://youtube.com/channel/UCLNMge-FeeicPfXTyyeKBXQ?sub_confirmation=1
- TikTok: https://www.tiktok.com/@pipblockfx_?_r=1&_t=ZS-99WUfePMQR3
- Broker referral: https://iux.com/en/register?code=S9ncfCvV:affiliate

If the broker link is included, identify it plainly as an affiliate/referral link. Do not imply the broker is risk-free, endorsed by regulators, or guarantees outcomes. Avoid making the broker the main message of the site.

## 13. Motion and micro-interactions

Use polished, smooth motion, with restraint:

- Section reveal on scroll (subtle fade/translate).
- Gentle image scale/reveal.
- Smooth mobile menu open/close.
- Refined button hover/press states.
- Small card hover/lift on desktop only.
- Smooth accordion transitions.
- Smooth step transitions in Find Your Fit.
- Active navigation state and anchor scrolling.

Prefer CSS transitions and IntersectionObserver. Reuse existing libraries if already installed. Do not add GSAP/Framer Motion just for decoration. Keep animations lightweight, non-blocking and responsive to `prefers-reduced-motion`. Do not animate essential content in a way that hides it if JS fails.

## 14. Technical requirements

- Inspect the project's actual framework before changing routing or deployment configuration.
- Keep proper page routes and ensure direct entry, refresh, back/forward and new-tab navigation work.
- The prior site had a Vercel refresh 404 issue on routes such as `/community`; verify and fix the correct framework-specific cause. Do not apply a generic rewrite blindly to Next.js.
- Ensure mobile navigation is accessible and works with keyboard, Escape and touch.
- Use semantic HTML, accessible labels, visible focus states, sufficient contrast and appropriate heading hierarchy.
- Avoid broken links, placeholder buttons, fake forms, empty menu items or controls that do nothing.
- Ensure page titles, meta descriptions, favicon/logo, Open Graph metadata and image alt text are sensible.
- Preserve or improve loading performance. Avoid large dependencies and oversized images.
- Never commit `.env`, API keys, tokens, credentials, build artefacts or other secrets.

## 15. Testing and release

Before pushing:

1. Run the local dev server and review every page.
2. Test mobile at 320, 360, 375, 390 and 414px; test tablet and desktop as well.
3. Check for horizontal overflow, overlapping content, clipped text, broken crops, contrast problems and excessive whitespace.
4. Test menu, all navigation, Find Your Fit, FAQ and every CTA/link.
5. Directly open and refresh every route.
6. Run lint/typecheck/tests/build commands available in the repository.
7. Check browser console and network for failed assets or errors.
8. Fix all issues introduced by the redesign.
9. Provide a concise summary, preview URLs/screenshots and test outcomes.

## 16. GitHub push — do this carefully

The user explicitly wants the completed work pushed to GitHub.

- Inspect `git status`, `git branch` and `git remote -v` first.
- Confirm the configured remote is the existing PiP Blocks repository. Do not create a new repository and do not guess a remote URL.
- Preserve any unrelated user changes. Do not overwrite or discard uncommitted work.
- Create a review branch such as `website-redesign` (or follow the repository's established feature-branch convention), commit the finished redesign and push that branch to the existing remote.
- Never force-push, rewrite history, or push secrets.
- Check whether the production branch is connected to automatic Vercel deployment. Prefer a feature branch so the GitHub push does not unexpectedly replace the live production website. Do not manually deploy or merge to production unless the user explicitly approves.
- If no remote exists, or the remote cannot be confidently identified as PiP Blocks, complete local work and report the exact blocker instead of pushing to an unrelated repository.

## Definition of done

A beautiful, complete, responsive PiP Blocks website that takes inspiration from CoffieFX’s section flow and polish, but uses PiP Blocks' real logo, photographs, real mentorship offer, real syllabus and actual links. It must feel designed rather than templated, load quickly, work on phones and desktop, have no fake claims, and be pushed to a review branch of the correct existing GitHub repository after checks pass.

Keep updates and final reporting concise. Spend tokens on implementation, not repeated analysis.
