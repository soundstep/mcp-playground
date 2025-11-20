# Site Configuration Specification

## ADDED Requirements

### Requirement: Author Contact Information

The system SHALL provide author contact information constants for use throughout the site.

#### Scenario: Contact constants are defined

- **WHEN** site configuration is imported
- **THEN** author name constant is available
- **AND** author LinkedIn URL constant is available
- **AND** constants can be imported from `src/consts.ts`

#### Scenario: Contact information is displayed on contact page

- **WHEN** user views the contact page
- **THEN** the page displays the author's name
- **AND** the page includes a link to the author's LinkedIn profile
- **AND** LinkedIn link opens in a new tab with proper rel attributes for security
