# Phases

## Purpose

This document defines the execution phases for building Axioma Learn from concept to institution-ready platform.

Unlike `roadmap.md`, which describes direction and horizons, this document is more operational:

- what we build
- what we do not build
- what must be true before we move on

## Phase 0: Product definition and system design

### Objective

Make the product buildable without architectural confusion.

### Build

- product docs
- domain model
- stack decision
- engineering strategy
- success metrics
- repo shape and coding standards

### Do not build

- production integrations
- throwaway UI spikes that become permanent
- AI proof-of-concept code without product framing

### Exit criteria

- product scope is explicit
- the team agrees on data boundaries
- the first implementation plan is ready

## Phase 1: Core domain and access foundation

### Objective

Establish the minimum platform skeleton that every later workflow depends on.

### Build

- tenant model
- institution model
- user model
- roles and permissions
- class and enrollment model
- coursework and resource model
- submission model
- office-hours slot and booking model
- audit event model

### Infrastructure

- production database
- object storage
- auth and SSO baseline
- CI/CD
- logging and error monitoring

### Frontend

- app shell
- role-aware routing
- shared design tokens
- first `v0`-generated surfaces integrated into the real app structure

### AI

- none beyond foundation contracts

### Do not build

- advanced analytics
- rich integrations
- broad AI surfaces

### Exit criteria

- a tenant can exist safely
- a user can authenticate and access only their allowed resources
- the core entities are persisted and observable

## Phase 2: Student operating system

### Objective

Make the student experience truly useful on its own.

### Build

- student home
- to-do
- calendar
- class hub
- coursework detail
- submission entry flow
- office-hours booking

### UX outcomes

- student knows what to do next
- student can find materials quickly
- student can take action from one place

### AI

- Study Buddy in limited grounded mode
- assignment explanation
- learning-goal suggestions
- resource recommendations

### Do not build

- freeform campus-wide AI
- cross-class autonomous planning
- speculative social features

### Exit criteria

- a student can run a real academic week from the system
- student help flows are grounded and safe
- office-hours booking works end-to-end

## Phase 3: Educator operating system

### Objective

Make the educator experience compelling enough to change teaching workflow.

### Build

- educator home
- class overview
- review queue
- coursework management basics
- grades summary basics
- office-hours management
- student support signals

### AI

- class summary queries
- support-signal summaries
- clarification drafts
- rubric-feedback draft support

### Do not build

- automatic final grading
- institution-wide predictive analytics theater
- overcomplicated dashboarding before actionability

### Exit criteria

- an educator can manage a class coherently from the platform
- the review queue saves real time
- AI helps without taking control

## Phase 4: Institutional pilot readiness

### Objective

Move from product demo to pilotable institution software.

### Build

- tenant admin setup flow
- roster import baseline
- support/admin tools
- notification service
- stronger audit surfaces
- operational dashboards

### Integrations

- SSO hardening
- CSV import pipelines
- calendar sync baseline

### Reliability

- retryable jobs
- idempotent sync operations
- production alerting

### Do not build

- too many LMS integrations at once
- custom deployment branches per institution

### Exit criteria

- one institution can onboard without bespoke engineering chaos
- support can diagnose major operational failures
- pilot stakeholders can trust permissions and logs

## Phase 5: LMS and ecosystem fit

### Objective

Reduce friction by meeting institutions where they already operate.

### Build

- Canvas integration first
- Google and Microsoft ecosystem hooks
- stronger file and content flows
- external calendar improvements

### AI

- retrieval over imported class content
- stronger class-context grounding

### Do not build

- multi-LMS parity at the expense of one good integration
- custom sync semantics scattered through core code

### Exit criteria

- core import and sync flows are stable
- educators do not have to duplicate obvious work across systems

## Phase 6: Compliance and operational hardening

### Objective

Reach the level of discipline needed for larger institutional trust.

### Build

- deeper audit trails
- security reviews
- secret rotation maturity
- stronger admin permissions
- support impersonation controls if needed
- data retention and deletion workflows

### Reliability

- load testing for deadline spikes
- incident playbooks
- more complete tracing

### Do not build

- shiny new user-facing features that create operational drag before hardening is complete

### Exit criteria

- the platform behaves predictably under stress
- sensitive actions are traceable
- internal teams can operate the system responsibly

## Phase 7: AI maturity

### Objective

Turn AI from useful feature set into a trustworthy platform capability.

### Build

- prompt/version lifecycle management
- evaluation pipelines
- structured action acceptance tracking
- citation and grounding improvements
- better educator workflow assistance
- better student sequence planning

### Do not build

- unconstrained autonomous agents
- AI actions that mutate critical academic records without approval

### Exit criteria

- AI usefulness is measurable
- grounding quality is trackable
- product trust increases instead of eroding

## Phase 8: Platformization

### Objective

Enable broader institutional deployment and configurable operations.

### Build

- stronger admin console
- policy configuration
- integration framework expansion
- analytics warehouse
- broader reporting

### Do not build

- uncontrolled enterprise feature creep driven by one customer

### Exit criteria

- new institutions can be onboarded with mostly configuration
- platform operations scale better than headcount

## Cross-phase rules

### Rule 1: No critical feature ships without telemetry

Every meaningful feature must include:

- logs
- errors
- adoption tracking
- operational visibility

### Rule 2: No AI feature ships without guardrails

Every AI feature must define:

- scope
- data sources
- allowed actions
- review boundary
- failure behavior

### Rule 3: No integration enters the core model directly

All external systems must pass through adapters and normalization layers.

### Rule 4: No institution-specific hack becomes the platform

If a customer request cannot be generalized cleanly, it must stay isolated until a broader pattern emerges.

## Suggested team focus by phase

### Early phases

- product engineer(s)
- full-stack platform engineer
- design-minded frontend engineer

### Middle phases

- integrations engineer
- platform/reliability engineer
- AI product engineer

### Later phases

- security/compliance support
- data/analytics support
- implementation and customer engineering support

## Final sequencing rule

Do not start the next phase because it sounds exciting.

Start the next phase only when the current one has:

- product signal
- operational signal
- architectural readiness

That discipline is what turns a promising concept into an institution-grade platform.
