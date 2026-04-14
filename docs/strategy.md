# Strategy

## Purpose

This document defines the engineering strategy for building Axioma Learn as a serious institution-ready product, not just a polished prototype.

The operating assumption is:

- B2B institution-ready
- US higher ed first
- architecture designed to globalize later

## Strategic principle

We will not build “an LMS with AI.”

We will build a multi-tenant academic workflow platform where:

- students always know what to do next
- educators get actionable teaching visibility
- institutions get trust, control, and operational reliability
- AI is grounded, permissioned, and productized

## Engineering doctrine

### 1. Product truth lives in the domain model

The central asset of this company will not be a prompt library or a nice UI.
It will be a strong academic domain model with clear relationships between:

- institutions
- terms
- users
- enrollments
- classes
- coursework
- resources
- submissions
- grades
- office hours
- messaging
- AI interactions

Engineering implication:

- We design the domain model first-class and keep it clean.
- Every major feature should map cleanly onto that model.
- We do not allow ad hoc feature-state islands to become the real system.

### 2. AI is an orchestrated capability, not a generic chat layer

AI will succeed only if it is:

- context-aware
- role-aware
- grounded in institution-safe data
- constrained by permission boundaries
- auditable

Engineering implication:

- Every AI feature must have a defined input context, retrieval policy, output contract, and review boundary.
- We do not ship freeform AI just because it demos well.
- AI outputs become suggestions, drafts, summaries, and structured actions before they become state changes.

### 3. Institution trust is a product feature

For B2B higher ed, security and operational credibility are not “later.”
They are part of the product.

Engineering implication:

- tenant boundaries are explicit
- audit logs are designed early
- authorization is centralized
- integrations are observable
- data access is explainable

### 4. Fast iteration is allowed only inside clear boundaries

We should move quickly on UX, especially with `v0`, but not by corrupting architecture.

Engineering implication:

- UI can iterate fast
- domain contracts move deliberately
- integration code is isolated
- background workflows are explicit

## Product-building strategy

## Phase model

### Phase 0: Spec and architectural baseline

Goal:
Turn the current prototype into a real platform design.

Outputs:

- validated domain model
- institutional persona and workflow map
- integration strategy
- MVP scope
- security baseline
- engineering standards

### Phase 1: Core operating system for one institution segment

Goal:
Ship a narrow but excellent platform for US higher ed pilot use.

Must include:

- multi-tenant auth
- student home
- class hub
- coursework detail
- to-do
- calendar
- office-hours booking
- educator class overview
- educator review queue
- grounded AI assistance for student and educator flows

Must not include yet:

- broad internationalization
- dozens of institution-specific connectors
- autonomous grading
- advanced analytics theater

### Phase 2: Institutional fit and operational maturity

Goal:
Become deployable for real institutional teams with repeatable onboarding.

Add:

- LMS imports
- roster sync
- richer messaging
- stronger grading workflows
- audit tooling
- support tools
- observability hardening

### Phase 3: Platformization

Goal:
Support multiple institution types, stronger integrations, and configurable workflows.

Add:

- admin console depth
- integration marketplace mindset
- analytics warehouse
- policy customization
- broader geographic readiness

## Architectural strategy

### 1. Monolith first, modular from the beginning

Recommendation:

- Start as a modular monolith
- Use clear domain modules and service boundaries
- Split deployments only when operational pressure proves the need

Why:

- Faster iteration
- lower coordination overhead
- easier tracing and debugging
- less distributed-systems tax early on

What this means in practice:

- One main web app
- One main backend application surface
- Separate modules for identity, classes, coursework, submissions, messaging, scheduling, AI, and integrations
- Background workers for async workloads

What we will not do:

- Not launch with many microservices because “enterprise”
- Not tie every domain module to its own deployment pipeline

### 2. BFF plus service core

Recommendation:

- Frontend talks to a BFF
- BFF talks to internal domain services/modules
- Async workflows run through workers and queues

Why:

- UI gets product-shaped APIs
- backend gets architectural discipline
- internal complexity stays hidden from the browser

### 3. Retrieval before agent autonomy

AI strategy should begin with:

- retrieval
- structured prompting
- typed outputs
- constrained actions

Only later should we add:

- multi-step autonomous agent workflows
- longer-running background reasoning chains

Why:

Education products need trust and predictability more than “AI magic.”

## Frontend strategy

### 1. Use `v0` aggressively, but within a controlled system

`v0` should be a force multiplier for:

- page scaffolds
- workflow-heavy UI
- admin and educator consoles
- high-velocity UI iteration

But we will enforce:

- shared design tokens
- component review
- accessibility review
- integration review before shipping

### 2. Build one design system, not separate student and educator apps in disguise

Student and educator experiences should feel distinct in workflow, but cohesive in platform identity.

Engineering implication:

- shared primitives
- shared shell patterns where appropriate
- role-specific feature modules
- no duplicated parallel component trees unless behavior truly differs

### 3. Optimize for dense workflows, not just pretty marketing pages

This app will win on:

- clarity
- composure
- speed to action
- contextual assistance

It will not win by looking like a generic AI dashboard.

## Backend strategy

### 1. Model institutions as first-class tenants

Tenant isolation must be explicit in:

- auth context
- DB queries
- search indexes
- file access
- logs and audit records

### 2. Treat integrations as adapters, not product core

Institutional integrations will be messy.
Canvas, SIS feeds, Google/Microsoft, and SSO systems should live behind adapter boundaries.

Engineering implication:

- integration modules must be isolated
- normalized internal models must remain stable
- mapping and sync logic must be observable and retryable

### 3. Separate synchronous UX from asynchronous operations

Examples of async work:

- syllabus ingestion
- roster imports
- file processing
- AI enrichment
- notifications
- calendar sync

Engineering implication:

- queue-backed workflows
- retry strategy
- idempotency
- operational dashboards

## Data strategy

### 1. Transactional first, analytical second

Our system of record should optimize for correctness and permission safety first.

Only after core product maturity should we deepen:

- warehouse models
- advanced instructor analytics
- cohort intelligence

### 2. Keep an event trail for sensitive actions

We should persist important events such as:

- grade updates
- booking creation/cancellation
- permission changes
- AI suggestion acceptance
- outbound institutional sync actions

### 3. Avoid premature data sprawl

We should not start with:

- separate OLTP and OLAP stacks on day one
- three search systems
- event sourcing everywhere

We should earn that complexity.

## Security strategy

### 1. Secure by architecture, not just by review

This means:

- explicit auth context at every boundary
- signed file access
- centralized permission checks
- secret management
- rate limiting
- auditability

### 2. Design for FERPA-aware posture early

Even if formal compliance work comes later, the architecture should assume:

- education records are sensitive
- access must be traceable
- AI interactions may involve regulated data
- support tooling must not overexpose content

### 3. Human approval for high-impact actions

The system should require explicit confirmation for:

- sending educator-to-student outreach drafted by AI
- publishing class-wide AI-generated clarifications
- applying grading suggestions
- syncing potentially destructive external changes

## Delivery strategy

### 1. Build by workflow, not by page count

The core unit of planning should be the end-to-end user workflow.

Examples:

- student understands and starts an assignment
- student books office hours
- educator reviews a coursework queue
- educator identifies who needs support
- educator uploads a syllabus and previews a structure

Why:

This prevents local screen polish from masking broken product reality.

### 2. Every shipped feature needs all four layers

For each meaningful feature, we ship:

- UI
- domain logic
- telemetry
- operational visibility

If one is missing, the feature is not actually complete.

### 3. Preview fast, harden deliberately

We should maintain a rhythm of:

- rapid preview iteration in frontend and BFF
- deliberate hardening once a workflow proves valuable

This is where `v0` helps a lot:

- fast interface generation early
- disciplined engineering after signal appears

## Testing strategy

### 1. Test the workflows that matter institutionally

Priority areas:

- login and tenant isolation
- class and coursework access
- grade visibility and edits
- office-hours booking consistency
- AI permission boundaries
- sync jobs and retries

### 2. Use layered testing

- Unit tests for domain logic
- integration tests for modules and APIs
- end-to-end tests for critical workflows
- load tests for deadline spikes and imports

### 3. Treat AI evaluation as a real engineering discipline

We need recurring evaluation for:

- grounding accuracy
- permission leakage risk
- hallucination rate in course-specific help
- draft usefulness
- action acceptance rates

## Team strategy

### 1. Organize around product domains

Good domain ownership areas:

- identity and tenancy
- courses and coursework
- submissions and grading
- scheduling and office hours
- messaging and notifications
- AI platform
- integrations

### 2. Keep frontend and backend tightly coupled at the workflow level

This product should not create a hard org split where frontend invents UX and backend later discovers the model cannot support it.

The team should work from shared workflow specs and shared typed contracts.

### 3. Product, design, and engineering should co-own AI features

AI cannot be “owned by the AI team” alone.
Each AI capability must be jointly defined by:

- user value
- operational feasibility
- safety and trust requirements
- measurable outcomes

## Go-to-market-aware engineering

### 1. Build for pilotability

A higher ed product has to be easy to pilot.
That means:

- fast tenant setup
- limited but credible integration requirements
- clear admin onboarding
- safe defaults

### 2. Prefer configurable adapters over institution-specific forks

Institutions will differ.
We should absorb that through:

- adapter configuration
- sync rules
- branding/theming options
- policy configuration

We should not absorb it through:

- code forks
- custom schema branches
- bespoke logic hidden in random conditionals

### 3. Instrument everything needed for sales and renewal conversations

Engineering should expose credible metrics for:

- student engagement
- assignment start/completion movement
- office-hours usage
- educator time savings proxies
- AI adoption and action follow-through

## What we will deliberately avoid

- AI-first chaos with weak domain modeling
- microservices too early
- brittle institution-specific hacks in core flows
- analytics dashboards without workflow actionability
- overbuilding global support before US higher ed fit
- shipping generated UI without architectural review

## Operating mantra

Build a calm product on top of a strict system.

The user experience should feel simple, warm, and supportive.
The engineering underneath should be explicit, typed, auditable, observable, and institution-grade.
