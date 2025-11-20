# Change: Add Contact Page

## Why

The blog currently lacks a way for visitors to contact the site owner. Adding a contact page will provide a dedicated place for readers to reach out with questions, feedback, or collaboration opportunities, improving user engagement and communication.

## What Changes

- Add a new `/contact` route with a contact page
- Create a contact form component with fields for name, email, and message
- Implement client-side form validation
- Add contact page link to the site navigation header
- Display contact information including LinkedIn profile link
- Add author constants to `src/consts.ts` for reusability
- Style the contact page to match the existing minimal design aesthetic

## Impact

- **Affected specs**: `page-routing`, `site-navigation`, `form-components`, `site-configuration`
- **Affected code**:
  - `src/pages/contact.astro` (new file)
  - `src/components/Header.astro` (add navigation link)
  - `src/consts.ts` (add author/contact constants)
  - `src/styles/global.css` (optional form styling)
- **Breaking changes**: None
