---
name: web-product-development
description: Plan, implement, review, and test polished websites, web apps, browser games, and educational tools in this repository. Use for frontend design, UI/UX, wireframes, interactive prototypes, browser behavior, or game interactions; do not use for unrelated backend-only work.
---

# Web Product Development

Start by reading the root `AGENTS.md` and inspecting the current stack, design system, routes, tests, and package-manager lockfile. Preserve existing choices and avoid introducing a new framework or visual system without a concrete need.

For an unclear product idea, first establish the primary user, key task, essential states, and smallest useful flow. A compact text wireframe or component/state map is enough unless the user requests a visual artifact. Implement the narrowest end-to-end slice that can be meaningfully tested.

## Design decisions

For Japanese public-facing copy and design work, read [Japanese editorial and design criteria](references/japanese-editorial-design.md) before authoring. Use the criteria to make content-specific decisions, not to impose one visual template.

## Environment and delivery

- Work through the desktop app, not Codex Cloud. Use existing tools; do not install additional tools on the workplace PC or introduce paid services.
- A static site needs HTML for structure, CSS for presentation, and JavaScript for behavior. These are authored files, not three programs that must be installed. A supported browser can run them. React/TypeScript and build dependencies are optional, not prerequisites for professional design.
- Inventory available browser, execution and image tools before promising verification. Repository skills do not supply those tools. Use image generation only if available within the user's existing allowance; use licensed assets or an intentional typography-led design when unavailable.
- Keep each site in a top-level project folder. For multiple Pages projects, stage the intended public folders while preserving their names. One Pages deployment replaces the previous site's output; do not deploy each project separately to the same destination and erase its siblings.
- Validate the actual production path after deployment. Record incomplete checks and hosting blockers honestly. Add a short project README with its purpose, file layout, commands if any, public URL, checks and remaining work.

- Derive a deliberate visual direction from the product's audience and content. Reuse existing tokens and components when present.
- Make hierarchy, typography, spacing, color, and interaction states coherent across mobile and desktop.
- Avoid interchangeable hero-card-grid templates, excessive gradients, decorative glass effects, and animation without purpose.
- Cover default, hover, focus, active, disabled, loading, empty, success, and error states when applicable.
- Use semantic structure, accessible names, visible focus, sufficient contrast, keyboard support, and reduced-motion behavior.

## Prototypes and games

- Keep prototypes honest: clearly distinguish functional behavior from mocked data or unimplemented actions.
- Separate domain/game state from rendering and input. Prefer deterministic state transitions and explicit reset/pause behavior.
- Account for touch targets, pointer capture, keyboard controls, resize/orientation changes, timing, and performance budgets as relevant.

## Browser verification

Use the repository's existing test framework first. For browser-facing work, use the installed official `playwright` skill for repeatable flows and `playwright-interactive` for iterative debugging when available.

Verify the changed happy path and important failure states at mobile and desktop widths. Check console errors, failed network requests, focus order, keyboard behavior, reduced motion, overflow, and layout stability. Capture screenshots when they materially help review.

Report exact commands and observed results. If the project has no runnable application or test configuration yet, do not fabricate one solely to demonstrate the skill.
