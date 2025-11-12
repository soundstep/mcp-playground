<!--
Sync Impact Report:
- Version change: N/A → 1.0.0
- Initial constitution for static web app spec kit
- Modified principles: N/A (initial version)
- Added sections: Core Principles (3), Technical Standards, Governance
- Removed sections: N/A
- Templates requiring updates:
  ✅ plan-template.md (Constitution Check section compatible)
  ✅ spec-template.md (User Scenarios & Requirements sections compatible)
  ✅ tasks-template.md (Test-driven approach compatible)
- Follow-up TODOs: None
-->

# Static Web App Spec Kit Constitution

## Core Principles

### I. Static-First Architecture

Every feature MUST be deliverable as static files (HTML, CSS, JavaScript, assets).
No server-side runtime required for core functionality. Dynamic features (if any) MUST
use client-side JavaScript or external APIs called from the browser.

**Rationale**: Static sites are secure, fast, scalable, and inexpensive to host.
They eliminate server maintenance and enable CDN distribution globally.

### II. Accessibility & Standards Compliance

All pages MUST meet WCAG 2.1 Level AA standards. Semantic HTML5 MUST be used.
Pages MUST be functional without JavaScript (progressive enhancement).
Valid HTML, CSS, and adherence to web standards are REQUIRED.

**Rationale**: Ensures content is accessible to all users, including those with
disabilities, and works across all browsers and assistive technologies.

### III. Performance & Optimization

Pages MUST load in under 3 seconds on 3G networks. Images MUST be optimized.
CSS and JavaScript MUST be minified for production. Lazy loading MUST be
implemented for images and heavy content below the fold.

**Rationale**: Fast loading times improve user experience, SEO rankings, and
accessibility for users on slower connections or older devices.

## Technical Standards

**HTML/CSS/JavaScript**: Use modern standards (HTML5, ES6+, CSS3). Avoid vendor-specific extensions.

**Browser Support**: Target current and previous major versions of Chrome, Firefox, Safari, Edge.

**Build Process**: MUST produce optimized static files. Source files can use preprocessors (Sass, TypeScript)
but MUST compile to standard CSS/JavaScript.

**Asset Management**: Images in WebP/AVIF with fallbacks. SVG for icons. Fonts optimized and self-hosted
where possible.

**SEO Requirements**: Proper meta tags, Open Graph tags, sitemap.xml, robots.txt required.

## Governance

This constitution defines the non-negotiable requirements for all static web app features.
All specifications, plans, and implementations MUST comply with these principles.

**Amendment Process**: Amendments require:

1. Documented justification for the change
2. Impact analysis on existing features
3. Version bump following semantic versioning (MAJOR for principle removals/redefinitions,
   MINOR for new principles, PATCH for clarifications)
4. Update of all dependent templates and documentation

**Compliance Review**: All feature specifications MUST include a Constitution Check section
verifying adherence to principles. Any violations MUST be explicitly justified.

**Version**: 1.0.0 | **Ratified**: 2025-11-12 | **Last Amended**: 2025-11-12
