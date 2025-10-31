## ITV Top Navigation — Test Plan

Generated: 31 Oct 2025

## Executive summary

This test plan covers functional, accessibility and responsive testing for the top navigation on https://www.itv.com/ (ITVX homepage). The focus is verifying: structure and presence of primary nav items, correct targets/links, dropdown/hover behaviour, search and sign-in entry points, keyboard accessibility and mobile/hamburger behaviour. Tests are written as independent scenarios that assume a fresh browser session (not signed in) unless otherwise noted.

## Scope / out-of-scope

- In-scope: top navigation bar and immediate interactions (clicks, hover, keyboard, mobile overlay). Verification includes link targets, visible changes, ARIA attributes, and basic deep-linking.
- Out-of-scope: deep functional flows behind clicked pages (e.g., full sign-in flow beyond navigation landing), backend analytics validation (only check that pages navigate), video playback, 3rd-party ads behavior except presence as an element.

## Assumptions / starting state

- Tests start from a fresh browser context (cookies/cache cleared).
- User is not signed in unless scenario explicitly says so.
- Network is normal (no simulated offline), unless scenario explicitly simulates slow/offline.
- Page under test: https://www.itv.com/ (seed test already navigates here).

## Navigation structure observed (summary)

Primary items observed in the page snapshot:
- Logo / Home (clickable)
- Live (/watch)
- Film (/watch/categories/films)
- Categories (/watch/categories)
- News (/news)
- My List (/watch/user/mylist)
- Stream Ad-Free (/watch/itvx-premium)
- Sign in (/watch/user/signin)
- Search (opens /watch/search)
- Responsive/hamburger menu on smaller viewports

Note: there are also utility links in footer and content-level links; this plan focuses on the top navigation only.

## Test matrix

- Browsers: Chromium (desktop), Firefox, WebKit (mobile Safari emulation)
- Viewports: Desktop (1366x768), Tablet (768x1024), Mobile (375x812)
- Network: normal; one scenario will simulate slow 3G to check menu load.

## Success criteria

- All primary nav items are present and labelled correctly.
- Clicking each item navigates to expected URL or opens expected overlay.
- Keyboard users can tab to each interactive element, open submenus with keyboard, and activate links.
- Mobile hamburger opens and shows equivalent navigation options.
- Failure conditions are clearly reported when an expected element is missing, navigation lands on 404, or focus/ARIA behaviour is incorrect.

---

## Test scenarios

Each scenario has: Steps (numbered), Expected results, Assumptions and Success/Failure criteria.

### Scenario 1 — Presence & labeling (smoke)
Assumption: fresh session, desktop viewport 1366x768.

Steps:
1. Navigate to https://www.itv.com/
2. Inspect the top navigation area.

Expected results:
- The logo/home, Live, Film, Categories, News, My List, Stream Ad-Free, Sign in and Search controls are present and visible.
- Each item has an accessible name (visible label or alt text for images).

Success: all items present and labelled. Failure: any primary item missing or unlabeled.

---

### Scenario 2 — Link navigation (happy path)
Assumption: desktop, fresh session.

Steps:
1. From the homepage, click each primary nav item one-by-one: Live, Film, Categories, News, My List, Stream Ad-Free.
2. After clicking each item, wait for navigation to complete (network idle / new URL loaded).
3. Record the landing URL and HTTP status (if possible) or page title content.

Expected results per item:
- Live -> URL contains `/watch` and page shows live content or watch listing.
- Film -> URL contains `/watch/categories/films` or shows film category view.
- Categories -> URL contains `/watch/categories`.
- News -> URL contains `/news`.
- My List -> `/watch/user/mylist` and since not signed in, either a sign-in redirect or an empty list page.
- Stream Ad-Free -> `/watch/itvx-premium`.

Success: each link lands on the expected URL or well-defined behavior (e.g., sign-in redirect). Failure: landing page is 404, incorrect domain, or link target is not the expected path.

---

### Scenario 3 — Logo / Home link
Assumption: any page on the site, not on root.

Steps:
1. Navigate to a sub-page (e.g., /watch/trigger-point/10a0591).
2. Click the logo or the 'ITVX Homepage' link in the top navigation.

Expected results:
- The browser navigates back to root `/` (or content that matches the homepage title).

Success: navigation to homepage. Failure: no navigation or navigation to wrong URL.

---

### Scenario 4 — Search control opens search
Assumption: desktop and mobile (two sub-runs).

Steps (desktop):
1. On the homepage, click the Search control/icon.
2. Verify the search UI opens (search input appears / search page loads at /watch/search).

Steps (mobile):
1. At mobile viewport, open hamburger if needed then activate the Search control.

Expected results:
- Search opens as an accessible input; the URL may change to `/watch/search` or an overlay appears with input field.
- Search input receives focus.

Success: search UI is visible and focused. Failure: search control does not open or input not focusable.

---

### Scenario 5 — Sign in target behaviour
Assumption: user not signed in.

Steps:
1. Click the Sign in link in the top navigation.
2. Observe the landing page/overlay.

Expected results:
- The sign-in page at `/watch/user/signin` loads.
- If a redirect is required (e.g., to a centralized auth domain), landing page shows sign-in UI.

Success: sign in page loads. Failure: broken link / 404 / sign-in UI missing.

---

### Scenario 6 — Hover & dropdown behaviour (desktop)
Assumption: desktop hover-capable device.

Steps:
1. Hover over any nav item that is expected to show subitems (e.g., Categories or other menu items that expose dropdowns).
2. Verify the dropdown appears and is positioned under or near the nav item.
3. Move mouse into the dropdown and click a sub-item.

Expected results:
- Dropdown becomes visible on hover.
- Sub-items inside dropdown are keyboard accessible (see keyboard scenario) and clicking navigates to the expected target.

Success: dropdown appears reliably on hover and sublinks work. Failure: dropdown does not appear, disappears too quickly, or click on sub-item fails.

---

### Scenario 7 — Keyboard navigation and accessibility
Assumption: fresh session; desktop viewport; no pointer interactions.

Steps:
1. Load homepage.
2. Press Tab to focus the first interactive element (Skip to content may be first; ensure you can tab into the top navigation region).
3. Tab through navigation items to the Search and Sign in controls.
4. For nav items with dropdowns: with focus on the parent item, press Enter or Space to open the dropdown. Then use ArrowDown/ArrowUp to move through subitems. Press Enter to activate a subitem.
5. Observe focus ring visibility and ARIA attributes (aria-expanded, aria-haspopup, role=menu/list as appropriate).

Expected results:
- All nav items and dropdowns are reachable via keyboard.
- Dropdown menus open with keyboard and aria-expanded toggles accordingly.
- Focus order is logical and visible.

Success: full keyboard traversal works and ARIA attributes are present. Failure: any element not reachable, ARIA missing or incorrect, or keyboard cannot open/operate menus.

---

### Scenario 8 — Mobile / hamburger menu behaviour
Assumption: mobile viewport (375x812) or tablet narrow width.

Steps:
1. Load the homepage in mobile viewport.
2. Verify a hamburger (or equivalent) menu button is present.
3. Tap the hamburger to open the mobile nav overlay.
4. Verify the overlay contains equivalent primary nav items (Live, Film, Categories, News, My List, Stream Ad-Free, Search, Sign in).
5. Tap each item in the mobile menu and verify navigation.

Expected results:
- Hamburger button opens an overlay or slide-in menu.
- All primary items are present and accessible by touch/click.

Success: mobile menu shows expected items and navigation works. Failure: menu missing items, not openable, or links broken.

---

### Scenario 9 — Focus trap & modal/overlay behaviour
Assumption: Search or mobile menu opens as overlay/modal.

Steps:
1. Open the overlay (search or mobile menu).
2. Press Tab repeatedly and make sure focus cycles inside the overlay and does not escape to background content.
3. Press Escape and verify overlay closes and focus returns to the control that opened it.

Expected results:
- Focus is trapped while overlay is open.
- Escape closes overlay and returns focus appropriately.

Success: focus trap and escape behavior work. Failure: focus leaves overlay or escape does not close it.

---

### Scenario 10 — Broken link detection & 404 check
Assumption: desktop, fast network.

Steps:
1. Click each primary nav link and any dropdown sub-link.
2. For each navigation, check for HTTP error pages or 404s by asserting page title contains "404" or response status (where accessible via test framework).

Expected results:
- No primary nav link results in 404. If a 404 occurs, note the URL and reproduce.

Success: all links valid. Failure: any link produces 404.

---

### Scenario 11 — Slow network resilience (edge case)
Assumption: desktop; emulate slow network (3G) in test run.

Steps:
1. Emulate slow network and load homepage.
2. Attempt to open the mobile menu or hover menus and click a few nav items.

Expected results:
- Navigation still works (albeit with delay); menus render and controls remain clickable.
- No UI freeze preventing interaction.

Success: menus usable. Failure: UI fails to render or becomes unresponsive.

---

### Scenario 12 — ARIA / screen reader verification (a11y)
Assumption: desktop; use accessibility snapshot or manual screen reader checks.

Steps:
1. Use an accessibility tool or Playwright accessibility snapshot to inspect the nav region.
2. Verify landmarks, roles, aria-labels and aria-expanded on menu controls.
3. Verify the Skip to content link exists and is first in tab order.

Expected results:
- Top nav has an accessible navigation landmark (nav role), aria attributes where needed, and readable labels.
- Skip link is present and works.

Success: ARIA and a11y indicators present. Failure: missing or incorrectly used ARIA attributes.

---

## Test data & notes for QA

- If My List requires sign-in, test the redirect and verify the sign-in page shows. Don't attempt credentials in this plan.
- Record all broken links with full URL and timestamp.
- If any content is A/B tested (dynamic content), re-run to confirm reproducibility.

## Recommended automation mapping (playwright)

- `tests/top-navigation.presence.spec.ts` — Scenario 1
- `tests/top-navigation.links.spec.ts` — Scenario 2 & 3 & 10
- `tests/top-navigation.search-signin.spec.ts` — Scenario 4 & 5
- `tests/top-navigation.hover-a11y.spec.ts` — Scenario 6 & 7 & 12
- `tests/top-navigation.mobile.spec.ts` — Scenario 8 & 9 & 11

Checklist per automated test:
- Setup fresh context
- Navigate to `/`
- Run assertions as described above
- Capture accessibility snapshot on failures
- For link checks, assert URL contains expected path and page title contains an expected keyword

## Reporting

- For each failing case capture: URL, browser, viewport, console errors, screenshot, and accessibility snapshot.
- Add a short reproduction note for developers.

---

## Completion notes

This test plan is saved as a Markdown file inside the `tests/` folder so QA can review and convert scenarios into Playwright tests. If you'd like, I can scaffold the corresponding Playwright test files (one file per mapping above) with a runnable seed and assertions — say the word and I will create them and run the quick smoke tests.
