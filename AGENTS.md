# Project Instructions

## Scope and priorities

- These rules apply to the entire repository unless a more specific `AGENTS.md` exists deeper in the tree.
- Inspect the repository, existing code, configuration, tests, and conventions before changing anything.
- Preserve existing behavior and public interfaces unless the user explicitly requests a change.
- Do not invent requirements or silently broaden the scope. When a decision would materially change product behavior, explain the assumption or ask for direction.
- Prefer the simplest implementation that is clear, maintainable, and proportionate to the task. Avoid unnecessary dependencies, abstractions, and rewrites.

## Implementation quality

- Follow the existing language, framework, architecture, naming, formatting, and dependency-management conventions.
- Keep modules and components focused. Reuse established primitives before adding new ones.
- Handle loading, empty, error, offline, and boundary states when relevant.
- Never commit secrets, credentials, tokens, private keys, or production data. Use documented environment-variable names and a safe example file with placeholder values when configuration is required.
- Do not edit generated files unless the repository's documented workflow requires it.

## Web, UI, and game experiences

- Build responsive experiences that work from narrow mobile screens through desktop widths; verify touch, pointer, and keyboard use where applicable.
- Use semantic HTML and accessible names. Preserve visible focus, sufficient contrast, logical heading order, keyboard operation, and reduced-motion preferences.
- Treat UI/UX quality as part of correctness: clear hierarchy, readable typography, purposeful spacing, useful feedback, and predictable navigation.
- Avoid generic, cheap-looking templates and conspicuous AI-generated visual patterns. Match the product context and existing design language.
- Add animation and interaction only when they improve comprehension, feedback, or delight. Keep them performant, interruptible, and respectful of `prefers-reduced-motion`.
- For games and interactive tools, keep the update/render loop deterministic where practical, separate state from presentation, support pause/restart and input boundaries, and test common viewport and input modes.
- Optimize assets and avoid layout shifts, avoidable blocking work, and unnecessary client-side JavaScript.

## Verification

- After implementation, run the repository's relevant existing checks: formatting, lint, typecheck, unit/integration tests, build, and end-to-end tests.
- Use the package manager implied by the committed lockfile. Do not replace or mix lockfiles without explicit approval.
- For browser-facing changes, exercise the affected flow in a real browser at representative mobile and desktop sizes. Check the browser console for errors and important warnings, and verify keyboard navigation when relevant.
- Add or update tests for changed behavior when the project has a test framework. Do not change product behavior merely to make a test pass.
- If a check cannot run, report exactly what was attempted and what prerequisite is missing.

## Git and GitHub

- Treat the GitHub remote as the shared source of truth. Sync before starting work when network access and credentials are available.
- Keep the repository history intact. Never force-push, rewrite history, or discard unrelated local changes without explicit authorization.
- Work on a focused branch rather than directly on the default branch unless the user explicitly requests otherwise or the environment supplies an isolated worktree.
- Keep commits small and cohesive. Use descriptive commit messages and exclude generated output, local caches, secrets, and unrelated changes.
- Use pull requests for review and integration. Summarize intent, key changes, tests run, visual evidence for UI changes, risks, and follow-up work.
- Use the desktop app and the user's selected model; do not use Codex Cloud. Do not install additional software on the workplace PC or incur additional costs. Prefer available tools and report missing verification capabilities.
- Keep completed projects in individual top-level folders on main. Record progress and reproducible setup/test steps inside each project so another PC or agent can continue. Do not assume GitHub synchronizes application chat history or installed tools.

## Shared website authoring

- For website creation or redesign, read `.agents/skills/web-product-development/SKILL.md` even if automatic skill discovery has not exposed it. These are repository instructions, not an installation of a runtime or browser tool.
- Prefer HTML, CSS and JavaScript for new static sites; choose additional tooling only when product needs justify it and it is compatible with the user's environment and budget.
- Default hosting is GitHub Pages with separate project URL paths. Preserve sibling projects when staging deployment output. Do not flatten one project's contents to the deployment root when folder-based URLs are required. Never publish repository secrets or development-only files.

## Reporting

- Report files changed, behavior affected, checks run and their results, any assumptions, remaining risks, and any manual steps.
- Never claim a test, browser check, deployment, authentication, or external integration succeeded unless it was actually verified.
