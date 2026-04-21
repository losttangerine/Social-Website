# Codebase Audit Tasks (2026-04-21)

This audit proposes one targeted task in each requested category.

## 1) Typo Fix Task

**Task:** Correct the payment provider spelling from `Paypal` to `PayPal` in the Commissions Terms of Service section.

- **Why:** This is user-facing copy and currently uses a misspelled brand name.
- **Where:** `app/commissions/page.tsx` (Payment list item).
- **Acceptance criteria:** The rendered bullet reads exactly `PayPal, Venmo, or Cash App.`.

## 2) Bug Fix Task

**Task:** Fix active-link logic in the top navbar so the `Portfolio` link can become active on the home route.

- **Why:** Current logic compares `pathname` directly against `/#portfolio`, but `usePathname()` only returns path segments (for example `/`), not hash fragments, so the `Portfolio` tab never appears active.
- **Where:** `components/Navbar.tsx`.
- **Acceptance criteria:**
  - On `/`, `Portfolio` displays active styling.
  - On `/commissions`, `Commissions` displays active styling.
  - On `/contact`, `Contact` displays active styling.

## 3) Code Comment / Documentation Discrepancy Task

**Task:** Replace the default Create Next App README with project-specific documentation that matches the actual app routes and components.

- **Why:** `README.md` currently contains generic scaffold text and does not document this repository's real pages (`/`, `/commissions`, `/contact`), data files, or UI component structure.
- **Where:** `README.md`.
- **Acceptance criteria:** README includes:
  - project overview,
  - route map,
  - local setup commands,
  - brief component/data architecture notes,
  - any known limitations (for example: presentational-only forms).

## 4) Test Improvement Task

**Task:** Add first automated component tests for interactive navigation behavior.

- **Why:** The repository currently has no test suite files; interactive regressions (menu toggle/active nav state) are unprotected.
- **Where:** introduce tests under a new `__tests__` or `components/__tests__` folder (plus test runner config).
- **Suggested scope:** `components/Navbar.tsx`.
- **Acceptance criteria:**
  - Tests verify mobile menu open/close interaction.
  - Tests verify active nav class behavior for `/`, `/commissions`, and `/contact`.
  - Tests run in CI via a script such as `npm test`.
