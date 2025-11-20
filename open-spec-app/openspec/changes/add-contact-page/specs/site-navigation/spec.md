# Site Navigation Specification

## ADDED Requirements

### Requirement: Contact Navigation Link

The system SHALL provide a navigation link to the contact page in the main site header.

#### Scenario: Contact link appears in navigation

- **WHEN** any page loads
- **THEN** the header navigation includes a "Contact" link
- **AND** the link points to `/contact`

#### Scenario: Active state on contact page

- **WHEN** user is on the contact page
- **THEN** the Contact navigation link displays an active state indicator
