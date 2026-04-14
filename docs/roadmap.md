# Roadmap

## Purpose

This roadmap translates the product vision, stack, and engineering strategy into a staged delivery sequence for Axioma Learn.

It is designed for:

- B2B institution-ready execution
- US higher ed first
- AI-native but trust-first product development
- disciplined sequencing instead of feature sprawl

## Roadmap principles

### 1. Build credibility before breadth

The first wins must prove that:

- students get real clarity
- educators save real time
- institutions can trust the system

We do not need global breadth early. We need one sharp wedge with credible operational quality.

### 2. Every phase must improve all three constituencies

Each major phase should produce visible value for:

- students
- educators
- institution operators

If one group is ignored for too long, the platform becomes unbalanced.

### 3. AI follows workflow value

AI should appear where it clearly improves a workflow:

- clarifying an assignment
- drafting educator follow-up
- surfacing class health themes
- organizing syllabus-derived structure

We do not add AI to every surface for symmetry.

### 4. Institution readiness grows in layers

The roadmap must progressively strengthen:

- permissions
- auditability
- integrations
- observability
- onboarding repeatability

## Horizon 0: Foundation and product shaping

Target outcome:
Turn the current concept into an implementation-ready platform definition.

Deliverables:

- docs complete enough to support engineering planning
- validated domain model
- tenant and permission model
- MVP workflow list
- first architecture boundaries
- institution persona assumptions

Success criteria:

- the team can describe exactly what phase 1 ships
- the team can explain how the product differs from an LMS
- the team has one coherent data model

## Horizon 1: Pilotable core product

Target outcome:
Ship a narrow but excellent pilotable product for one or a few US higher ed institutions.

### Student scope

- authentication and tenant-aware access
- home dashboard
- class hub
- coursework detail
- to-do
- calendar
- office-hours booking
- grounded Study Buddy

### Educator scope

- educator home
- class overview
- review queue
- coursework management basics
- office-hours management basics
- AI Assistant for summary, clarification drafts, and support signals

### Institutional scope

- tenant setup
- role assignment
- basic roster import
- audit trail for critical actions
- support/admin visibility into tenant health

### Technical scope

- production auth
- production DB schema
- audit event model
- object storage
- background jobs
- observability baseline
- CI/CD baseline

Success criteria:

- one student can manage a course from the platform
- one educator can run a class without losing context
- one institution can pilot with operational confidence

## Horizon 2: Institutional fit

Target outcome:
Move from “interesting pilot” to “credible institutional deployment candidate.”

### Product scope

- messaging and notifications
- richer grading and rubric workflows
- stronger search
- expanded educator student-support tooling
- more robust admin controls

### Integration scope

- Canvas first
- Google/Microsoft calendar and document integrations
- CSV and managed SIS ingestion improvements

### AI scope

- richer retrieval grounding
- structured educator actions
- evaluation loops for prompt quality
- class-level trend summaries with citations

### Technical scope

- stronger worker orchestration
- improved retry and idempotency guarantees
- deeper traces and dashboards
- load testing around spikes

Success criteria:

- pilot institutions can onboard with less manual engineering support
- educators actively rely on the system for recurring workflows
- AI outputs are trusted because they are constrained and useful

## Horizon 3: Platform maturity

Target outcome:
Become a durable system institutions can standardize on for selected learning workflows.

### Product scope

- deeper admin console
- configurable policies
- stronger cohort and class analytics
- more advanced classroom creation and syllabus ingestion
- cross-course views for institution operators

### Integration scope

- Blackboard and Moodle adapters
- SCIM
- deeper SIS pathways where justified
- export/reporting features for institutional stakeholders

### Technical scope

- search scaling
- analytics warehouse
- stronger infra automation
- reliability engineering hardening

Success criteria:

- deployment becomes repeatable
- institution requests are handled through configuration more often than code
- product usage data supports renewals and expansion

## Horizon 4: Expansion

Target outcome:
Extend beyond initial higher ed wedge without breaking platform coherence.

Possible directions:

- broader institution types
- global support
- advanced assessment workflows
- deeper academic operations tooling

Rule:

Expansion only happens after strong proof that the core wedge is real.

## What happens in sequence

### Sequence 1: Build the academic core

1. tenant-aware identity
2. classes and coursework
3. student home and task clarity
4. educator overview and review queue
5. office-hours scheduling
6. audit and observability

### Sequence 2: Make it operational

1. notifications
2. imports and sync
3. support tooling
4. stronger permissions and admin workflows

### Sequence 3: Make it intelligent

1. grounded study support
2. grounded educator support
3. retrieval infrastructure
4. prompt/version evaluation
5. structured AI actions

### Sequence 4: Make it institution-scalable

1. integrations
2. analytics
3. policy controls
4. operational automation

## Key roadmap bets

### Bet 1: The student wedge is clarity, not content

Students do not need another repository of materials.
They need:

- clarity
- sequencing
- contextual help
- easy access to human support

### Bet 2: The educator wedge is operational cognition

Educators need:

- class health awareness
- fast review workflows
- actionable outreach support
- less coordination overhead

### Bet 3: Institutional buyers care about trust as much as features

This means:

- SSO matters
- audit matters
- support tooling matters
- operational reporting matters
- safe AI matters

## Metrics by horizon

### Horizon 1 metrics

- weekly active students
- weekly active educators
- task open-to-start conversion
- office-hours booking rate
- educator review workflow completion
- AI usage on grounded surfaces

### Horizon 2 metrics

- roster import success rate
- notification reliability
- sync job success rate
- AI action acceptance rate
- educator time-saving proxy metrics

### Horizon 3 metrics

- institution onboarding time
- support burden per tenant
- renewal-supporting engagement metrics
- expansion usage across departments or roles

## What we deliberately postpone

- full global localization
- institution-specific heavy customization
- autonomous grading
- sprawling analytics product
- broad marketplace vision before core fit

## Operating rule

If a roadmap item does not improve:

- workflow clarity
- institutional trust
- or product adoption durability

it should probably wait.
