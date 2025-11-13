# Tasks: Modern Podcast Website

**Input**: Design documents from `/specs/001-podcast-website/`
**Prerequisites**: plan.md (required), spec.md (required), data-model.md, quickstart.md, research.md

**Tests**: Tests are OPTIONAL - not explicitly requested in the feature specification. Focusing on implementation tasks only.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US5)
- Include exact file paths in descriptions

## Path Conventions

All paths relative to `podcast-website/` project root:
- Pages: `src/app/` (Next.js App Router)
- Components: `src/components/`
- Data: `src/data/`
- Types: `src/types/`
- Styles: `src/styles/`
- Assets: `public/audio/`, `public/images/`

## User Story Dependencies

```
Priority Order:
P1: US5 (Navigation) → US1 (Featured Episode) ← CRITICAL MVP
P2: US2 (Episodes Page)
P3: US3 (About Page)
P4: US4 (FAQ Page)

Dependency Graph:
US5 (Navigation) must complete first - it's foundational
US1, US2, US3, US4 can be implemented in parallel AFTER US5
```

**MVP Recommendation**: US5 (Navigation) + US1 (Featured Episode) = Minimal viable product

## Phase 1: Setup (Project Initialization)

**Purpose**: Initialize Next.js project with all required dependencies and configuration

- [ ] T001 Initialize Next.js 14 project with TypeScript, Tailwind CSS, and ESLint using create-next-app
- [ ] T002 Configure static export in next.config.js (set output: 'export', images.unoptimized: true)
- [ ] T003 [P] Create directory structure: src/components, src/data, src/types, src/styles
- [ ] T004 [P] Create public asset directories: public/audio, public/images
- [ ] T005 [P] Configure Tailwind CSS with custom theme colors for modern, sleek design
- [ ] T006 [P] Set up TypeScript strict mode in tsconfig.json
- [ ] T007 [P] Create placeholder README.md with project overview and setup instructions

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T008 Define TypeScript interfaces in src/types/index.ts (Episode, FAQItem, Host, ContactInfo, AboutContent)
- [ ] T009 [P] Create mock episode data in src/data/episodes.ts (20 episodes with all metadata)
- [ ] T010 [P] Create mock FAQ data in src/data/faq.ts (8-12 Q&A pairs)
- [ ] T011 [P] Create about content data in src/data/about.ts (title, mission, story, hosts, contact)
- [ ] T012 [P] Add placeholder audio files to public/audio/ (episode-001.mp3 through episode-020.mp3)
- [ ] T013 [P] Add placeholder cover art images to public/images/ (episode-001.jpg through episode-020.jpg)
- [ ] T014 [P] Add host photos and podcast logo to public/images/
- [ ] T015 Configure global styles in src/styles/globals.css with Tailwind directives

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 5 - Navigate Between Pages (Priority: P1) 🎯 FOUNDATIONAL

**Goal**: Enable visitors to navigate seamlessly between all pages of the website

**Independent Test**: Click navigation links and verify each page loads correctly with active page indication

**Why First**: Navigation is critical infrastructure that all other user stories depend on. Without navigation, users cannot access any pages.

### Implementation for User Story 5

- [ ] T016 [US5] Create Navigation component in src/components/Navigation.tsx with responsive menu
- [ ] T017 [US5] Implement mobile hamburger menu with open/close state in Navigation component
- [ ] T018 [US5] Add active page highlighting in navigation using usePathname hook
- [ ] T019 [US5] Create root layout in src/app/layout.tsx with Navigation component and global metadata
- [ ] T020 [US5] Add semantic HTML structure (header, nav, main, footer) to layout
- [ ] T021 [US5] Implement keyboard navigation support (Tab, Enter keys) for all nav links
- [ ] T022 [US5] Style navigation with Tailwind CSS for modern, sleek appearance
- [ ] T023 [US5] Test navigation on mobile (320px), tablet (768px), and desktop (1280px) viewports
- [ ] T024 [US5] Add ARIA labels and roles to navigation for screen reader accessibility

**Checkpoint**: Navigation complete - users can now access all pages. Other user stories can proceed.

---

## Phase 4: User Story 1 - Browse Featured Episode (Priority: P1) 🎯 MVP

**Goal**: Display featured episode prominently on landing page with playable audio

**Independent Test**: Navigate to homepage, verify featured episode displays with all metadata, click play button and verify audio begins playing

**Parallel Opportunity**: Can be implemented simultaneously with US2, US3, US4 since they use different pages

### Implementation for User Story 1

- [ ] T025 [P] [US1] Create AudioPlayer component in src/components/AudioPlayer.tsx with play/pause/seek controls
- [ ] T026 [P] [US1] Implement audio state management in AudioPlayer (playing, currentTime, duration)
- [ ] T027 [P] [US1] Add time formatting helper function in AudioPlayer (convert seconds to MM:SS)
- [ ] T028 [P] [US1] Create FeaturedEpisode component in src/components/FeaturedEpisode.tsx
- [ ] T029 [US1] Build landing page in src/app/page.tsx importing featuredEpisode from data
- [ ] T030 [US1] Display featured episode with large cover art, title, description, metadata
- [ ] T031 [US1] Integrate AudioPlayer component into landing page for featured episode
- [ ] T032 [US1] Add responsive layout: stack on mobile, side-by-side on desktop
- [ ] T033 [US1] Style featured episode section with modern, attention-grabbing design
- [ ] T034 [US1] Add metadata to landing page (title, description, Open Graph tags)
- [ ] T035 [US1] Implement keyboard controls for audio player (spacebar for play/pause)
- [ ] T036 [US1] Add ARIA labels to audio controls (Play button, Pause button, Seek slider)
- [ ] T037 [US1] Optimize featured episode cover art with Next.js Image component

**Checkpoint**: Landing page complete and fully functional - users can discover and play featured episode

---

## Phase 5: User Story 2 - Explore All Episodes (Priority: P2)

**Goal**: Display all 20 episodes in an organized, browsable list with playback capability

**Independent Test**: Navigate to /episodes, verify all 20 episodes display in newest-first order, click play on any episode and verify audio works

**Parallel Opportunity**: Can be implemented simultaneously with US3 and US4

### Implementation for User Story 2

- [ ] T038 [P] [US2] Create EpisodeCard component in src/components/EpisodeCard.tsx
- [ ] T039 [P] [US2] Display episode metadata in card (number, title, date, duration, description)
- [ ] T040 [P] [US2] Add play button to EpisodeCard with onClick handler
- [ ] T041 [P] [US2] Style EpisodeCard with hover effects and responsive layout
- [ ] T042 [US2] Create episodes page in src/app/episodes/page.tsx
- [ ] T043 [US2] Import and sort all episodes by publishDate descending (newest first)
- [ ] T044 [US2] Map episodes array to EpisodeCard components
- [ ] T045 [US2] Implement audio player state at page level (current playing episode)
- [ ] T046 [US2] Display AudioPlayer component when episode is selected
- [ ] T047 [US2] Ensure only one episode plays at a time (stop previous when new one plays)
- [ ] T048 [US2] Add responsive grid layout: 1 column mobile, 1 column tablet, 2 columns desktop
- [ ] T049 [US2] Implement lazy loading for episode cover images (loading="lazy")
- [ ] T050 [US2] Add page metadata for SEO (title: "All Episodes | Podcast Name")
- [ ] T051 [US2] Add semantic HTML structure (article tags for each episode)
- [ ] T052 [US2] Test scroll performance with all 20 episodes loaded

**Checkpoint**: Episodes page complete - users can browse and play any episode from catalog

---

## Phase 6: User Story 3 - Learn About the Podcast (Priority: P3)

**Goal**: Provide compelling information about the podcast, hosts, and mission

**Independent Test**: Navigate to /about, verify all sections display (mission, story, hosts, contact)

**Parallel Opportunity**: Can be implemented simultaneously with US2 and US4

### Implementation for User Story 3

- [ ] T053 [P] [US3] Create about page in src/app/about/page.tsx
- [ ] T054 [P] [US3] Import aboutContent from src/data/about.ts
- [ ] T055 [P] [US3] Display podcast title and tagline at top of page
- [ ] T056 [P] [US3] Create mission section with formatted text
- [ ] T057 [P] [US3] Create story section with multi-paragraph layout
- [ ] T058 [US3] Create hosts section with grid layout for multiple hosts
- [ ] T059 [US3] Display host photos using Next.js Image component with rounded styling
- [ ] T060 [US3] Display host name, role, and bio for each host
- [ ] T061 [US3] Create contact section with email and social media links
- [ ] T062 [US3] Style social media links as buttons or icons
- [ ] T063 [US3] Add responsive layout: single column mobile, multi-column desktop
- [ ] T064 [US3] Style page with consistent modern, sleek design matching rest of site
- [ ] T065 [US3] Add page metadata for SEO (title: "About | Podcast Name")
- [ ] T066 [US3] Add semantic HTML structure (sections for each content block)

**Checkpoint**: About page complete - visitors understand podcast mission and team

---

## Phase 7: User Story 4 - Find Answers to Common Questions (Priority: P4)

**Goal**: Display FAQ content in an easily scannable, organized format

**Independent Test**: Navigate to /faq, verify all questions and answers display clearly

**Parallel Opportunity**: Can be implemented simultaneously with US2 and US3

### Implementation for User Story 4

- [ ] T067 [P] [US4] Create FAQItem component in src/components/FAQItem.tsx (optional - can be inline)
- [ ] T068 [P] [US4] Create FAQ page in src/app/faq/page.tsx
- [ ] T069 [P] [US4] Import faqItems from src/data/faq.ts
- [ ] T070 [P] [US4] Sort FAQ items by order field
- [ ] T071 [US4] Map FAQ items to display components (question/answer pairs)
- [ ] T072 [US4] Style questions as bold headings with good visual hierarchy
- [ ] T073 [US4] Style answers with readable spacing and typography
- [ ] T074 [US4] Add optional category grouping if categories exist in data
- [ ] T075 [US4] Implement responsive layout with comfortable reading width
- [ ] T076 [US4] Add page metadata for SEO (title: "FAQ | Podcast Name")
- [ ] T077 [US4] Add semantic HTML structure (each FAQ as an article or div)
- [ ] T078 [US4] Consider accordion UI for long FAQ lists (optional enhancement)

**Checkpoint**: FAQ page complete - visitors can find answers to common questions

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Final touches, optimization, and cross-cutting features

- [ ] T079 [P] Create custom 404 page in src/app/not-found.tsx
- [ ] T080 [P] Generate sitemap.xml in public/ listing all pages
- [ ] T081 [P] Create robots.txt in public/ allowing all crawlers
- [ ] T082 [P] Add favicon and Apple touch icons to public/
- [ ] T083 [P] Add Open Graph image for social sharing to public/images/og-image.jpg
- [ ] T084 [P] Optimize all images: compress, convert to WebP/AVIF where possible
- [ ] T085 [P] Add loading states for audio player (buffering indicator)
- [ ] T086 [P] Add error handling for audio files that fail to load
- [ ] T087 [P] Implement focus-visible styles for keyboard navigation throughout site
- [ ] T088 [P] Add skip-to-content link for accessibility
- [ ] T089 Test full site on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] T090 Test responsive design on actual mobile devices
- [ ] T091 Run Lighthouse audit and address any performance/accessibility issues
- [ ] T092 Verify WCAG 2.1 Level AA compliance with axe DevTools
- [ ] T093 Test keyboard navigation through entire site
- [ ] T094 Test with screen reader (VoiceOver or NVDA)
- [ ] T095 Build static site with `npm run build`
- [ ] T096 Test built site locally with `npx serve out`
- [ ] T097 Deploy to chosen hosting platform (Vercel/Netlify/CloudFlare Pages)
- [ ] T098 Verify all pages and assets load correctly in production
- [ ] T099 Test audio playback in production environment
- [ ] T100 Update README.md with deployment URL and final instructions

---

## Implementation Strategy

### MVP Scope (Minimal Viable Product)

**Phase 1-2**: Setup + Foundation  
**Phase 3**: US5 - Navigation (P1) ✅ CRITICAL  
**Phase 4**: US1 - Featured Episode (P1) ✅ CRITICAL

**MVP Result**: Working website with navigation and featured episode playback

### Incremental Delivery

**Sprint 1** (MVP):
- T001-T024 (Setup, Foundation, Navigation, Featured Episode)
- **Deliverable**: Homepage with featured episode and navigation

**Sprint 2** (Content):
- T025-T052 (Episodes Page)
- **Deliverable**: Full episode catalog browsing

**Sprint 3** (Context):
- T053-T078 (About + FAQ Pages)
- **Deliverable**: Complete informational content

**Sprint 4** (Polish):
- T079-T100 (Optimization, Testing, Deployment)
- **Deliverable**: Production-ready site

### Parallel Execution Examples

**During Foundation Phase (T008-T015)**:
- All 8 tasks can run in parallel - different files/assets

**During US1 Implementation (T025-T037)**:
- T025-T028 (Components) can run in parallel
- T029-T037 must run sequentially after components complete

**During Content Pages (T038-T078)**:
- US2 (T038-T052), US3 (T053-T066), US4 (T067-T078) can ALL run in parallel
- Different pages, no shared dependencies

**During Polish Phase (T079-T088)**:
- All optimization tasks (T079-T088) can run in parallel
- Testing tasks (T089-T094) can run in parallel
- Deployment tasks (T095-T100) must run sequentially

## Task Summary

**Total Tasks**: 100 tasks

**By Phase**:
- Phase 1 (Setup): 7 tasks
- Phase 2 (Foundation): 8 tasks
- Phase 3 (US5 - Navigation): 9 tasks
- Phase 4 (US1 - Featured Episode): 13 tasks
- Phase 5 (US2 - Episodes Page): 15 tasks
- Phase 6 (US3 - About Page): 14 tasks
- Phase 7 (US4 - FAQ Page): 12 tasks
- Phase 8 (Polish): 22 tasks

**By User Story**:
- US5 (Navigation): 9 tasks
- US1 (Featured Episode): 13 tasks
- US2 (Episodes Page): 15 tasks
- US3 (About Page): 14 tasks
- US4 (FAQ Page): 12 tasks
- Infrastructure/Polish: 37 tasks

**Parallel Opportunities**: 45 tasks marked [P] can run in parallel with others

**Independent Test Criteria**:
- ✅ US5: Click all nav links, verify page loads, check active states
- ✅ US1: Load homepage, verify featured episode displays, test audio playback
- ✅ US2: Load /episodes, verify 20 episodes, test episode playback
- ✅ US3: Load /about, verify all sections present and readable
- ✅ US4: Load /faq, verify all questions/answers display

## Format Validation

✅ All tasks follow required format: `- [ ] [ID] [P?] [Story?] Description with file path`
✅ Task IDs sequential: T001-T100
✅ [P] markers only on parallelizable tasks
✅ [Story] labels only on user story phases (US1-US5)
✅ File paths included in all implementation tasks
✅ Checkboxes present on all tasks

**Status**: Ready for implementation! 🚀
