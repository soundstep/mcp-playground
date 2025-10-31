import { test, expect } from '@playwright/test';

test.describe('ITV Top Navigation — Presence & labeling (smoke)', () => {
  // Increase per-test timeout: the site loads external resources that can slow navigation.
  test.setTimeout(120000);

  test('Scenario 1 — Presence & labeling (smoke)', async ({ page }) => {
    // 1. Navigate to https://www.itv.com/
    // Block common third-party telemetry/analytics to avoid stalls during navigation
    await page.route('**/*', (route) => {
      try {
        const url = route.request().url();
        if (/doubleclick|google-analytics|googletagmanager|gstatic|recaptcha|sentry|hotjar|segment|analytics/i.test(url)) {
          return route.abort();
        }
      } catch (e) {
        // ignore and continue
      }
      return route.continue();
    });

    // Navigate and wait for DOMContentLoaded; time out after 60s if something is wrong.
    try {
      await page.goto('https://www.itv.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    } catch (err) {
      // Log and continue; assertions below will fail clearly if the page isn't usable.
      // eslint-disable-next-line no-console
      console.warn('Navigation to https://www.itv.com/ failed or timed out; continuing with assertions:', err);
      // Fallback: try fetching the page HTML via the Playwright APIRequest and set as page content.
      try {
        const resp = await page.request.get('https://www.itv.com/');
        if (resp.ok()) {
          const html = await resp.text();
          await page.setContent(html, { waitUntil: 'domcontentloaded' });
          // eslint-disable-next-line no-console
          console.log('Fetched HTML via API and set as page content for assertions.');
        }
      } catch (errReq) {
        // eslint-disable-next-line no-console
        console.warn('Fallback fetch via page.request failed:', errReq);
      }
    }

    // Accept cookie banner if present (exact id observed on the page).
    // Wait for the button, click it, then wait for it to be removed to ensure acceptance.
    const exactCookieSel = 'button#cassie_accept_all_pre_banner';
    try {
      const banner = await page.waitForSelector(exactCookieSel, { timeout: 5000 });
      if (banner) {
        await banner.click().catch(() => {});
        // Wait for the banner to be removed/hidden after acceptance.
        await page.waitForSelector(exactCookieSel, { state: 'detached', timeout: 5000 }).catch(() => {});
      }
    } catch (e) {
      // If the exact selector didn't appear, fall back to a short list of alternatives.
      const cookieSelectors = [
        'button:has-text("Accept all")',
        'button:has-text("Accept all cookies")',
        'button:has-text("Accept cookies")',
        'button:has-text("Accept")',
        'button#onetrust-accept-btn-handler',
        'button:has-text("Agree")',
        'text=Accept'
      ];
      for (const sel of cookieSelectors) {
        const handle = await page.$(sel);
        if (handle) {
          try {
            await handle.click();
            await page.waitForSelector(sel, { state: 'detached', timeout: 3000 }).catch(() => {});
            await handle.dispose();
            break;
          } catch (err) {
            // ignore and continue
          }
        }
      }
    }

    // 2. Inspect the top navigation area and scope assertions to it to avoid duplicate text elsewhere on the page.
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();

    // Verify primary nav items are visible and have accessible labels.
    await expect(nav.getByRole('link', { name: 'Live' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Film' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Categories' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'News' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'My List' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Stream Ad-Free' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Sign in' })).toBeVisible();

    // verify search control exists within the nav (open search bar) — accept either a text trigger or a link/role labeled 'search'
    const searchByText = nav.getByText('open search bar');
    const searchByRole = nav.getByRole('link', { name: /search/i });
    const foundSearch = (await searchByText.count() && await searchByText.isVisible()) || (await searchByRole.count() && await searchByRole.isVisible());
    expect(foundSearch).toBeTruthy();
  });
});
