# Stack

## Positioning

This stack is optimized for:

- B2B institution-ready software
- US higher ed first
- multi-tenant architecture
- strong security and auditability
- AI-native workflows
- robust frontend built with `v0` as a required part of the UI workflow

The goal is not to choose the trendiest tools. The goal is to choose technologies that make Axioma Learn credible to institutions, maintainable by a real engineering team, and expandable into a serious platform.

## Stack summary

### Product surfaces

- Web application: `Next.js App Router`
- Frontend generation and acceleration: `v0`
- UI system: `React`, `TypeScript`, `Tailwind CSS`, `shadcn/ui`
- Backend API: `Next.js BFF + typed service layer`
- Async and integrations: `NestJS` microservices or modular workers inside a backend app
- Database: `PostgreSQL`
- ORM and migrations: `Prisma`
- Caching and queues: `Redis` and `BullMQ`
- Search: `Postgres full-text` first, `OpenSearch` later
- File storage: `Vercel Blob` for early phases, `S3-compatible object storage` for institutional scale
- Auth and enterprise SSO: `WorkOS` plus app-level RBAC
- AI platform: `OpenAI API` with orchestration via `Vercel AI SDK`
- Observability: `Sentry`, `OpenTelemetry`, `PostHog`, structured logs
- Infra and deploy: `Vercel` for web, `Railway` or `AWS` for backend/data services
- CI/CD: `GitHub Actions`
- Docs and contracts: `OpenAPI`, `Storybook`, `MDX docs`
- Testing: `Vitest`, `Playwright`, `MSW`, `Supertest`, `k6`

## Frontend stack

### 1. `v0`

How it will be used:

- Generate first-pass UI for dashboards, class hubs, workflow screens, and internal tools
- Explore layout directions quickly with product and design
- Bootstrap production React components that engineers then refine
- Accelerate new surfaces like student home, educator overview, review queue, and admin consoles
- Produce high-quality starting points that align with `shadcn/ui` patterns

How it will not be used:

- Not as the source of truth for product architecture
- Not as a replacement for engineering decisions about state, accessibility, performance, or security
- Not for generating backend logic, permission rules, or domain contracts
- Not for dumping unreviewed generated UI directly into production

Why:

You explicitly want `v0`, and it fits well here as a frontend acceleration layer. It should speed up interface production, but it must sit inside a disciplined design system and engineering review process.

### 2. `Next.js App Router`

How it will be used:

- Main web app for both student and educator surfaces
- Route composition, layouts, streaming, and server rendering where helpful
- BFF endpoints for frontend-specific orchestration
- Secure server actions only where they simplify UX and remain auditable

How it will not be used:

- Not as the only place all backend business logic lives forever
- Not as a dumping ground for every integration and async workflow
- Not for hiding domain complexity inside ad hoc route handlers

Why:

It gives the team a modern, productive frontend foundation and pairs naturally with `v0`, `Vercel`, and the AI SDK.

### 3. `React + TypeScript`

How it will be used:

- All UI surfaces
- Shared typed domain contracts
- Strongly typed feature modules and view models
- Safer component interfaces and state flows

How it will not be used:

- Not with loose `any`-heavy patterns
- Not with massive god-components and mixed UI/business logic files

### 4. `Tailwind CSS`

How it will be used:

- Product UI styling
- Shared design tokens
- Fast iteration on institutional dashboards and workflow-heavy screens

How it will not be used:

- Not as ungoverned utility sprawl
- Not without semantic tokens for colors, spacing, states, and roles

### 5. `shadcn/ui`

How it will be used:

- Base component primitives
- Internal design system starter
- Consistent accessible components for tabs, cards, dialogs, tables, forms, and command menus

How it will not be used:

- Not as the final design language by itself
- Not with copy-paste divergence across screens

### 6. `Storybook`

How it will be used:

- Component documentation
- Visual review of shared primitives and role-specific patterns
- Regression testing of UI states

How it will not be used:

- Not as the only place design truth lives
- Not for documenting backend contracts or product strategy

## Backend and application stack

### 7. `Next.js BFF`

How it will be used:

- Frontend-oriented API composition
- Session-aware endpoints
- Lightweight orchestration across internal services
- Secure server-side mediation between browser and core platform

How it will not be used:

- Not as the long-term home of every domain rule
- Not for heavy background processing
- Not for institution integrations that need retries, monitoring, and workflow isolation

### 8. `NestJS`

How it will be used:

- Core backend services once domain complexity grows
- Integration adapters for LMS, SIS, notification systems, and sync jobs
- Background processing and operational APIs
- Clear modular boundaries around courses, identity, messaging, scheduling, and AI orchestration

How it will not be used:

- Not as microservices theater from day one
- Not split into too many independently deployed services too early

Why:

NestJS gives enterprise-friendly structure, DI, modules, and operational clarity. For this app, that matters more than minimalism.

### 9. `tRPC` or typed internal API contracts

How it will be used:

- Fast type-safe integration between web app and BFF/internal services in early and middle phases
- Strong contract-sharing between frontend and backend

How it will not be used:

- Not as an excuse to avoid versioned public APIs for institutional integrations
- Not as a replacement for explicit service boundaries

Recommendation:

Use typed internal contracts early. If external APIs become first-class, expose `OpenAPI` alongside them.

## Data stack

### 10. `PostgreSQL`

How it will be used:

- Primary system of record
- Multi-tenant data model
- transactional entities such as users, enrollments, classes, coursework, submissions, grades, bookings, and audit events
- read models and analytics-supporting tables where needed

How it will not be used:

- Not as a loose document store for arbitrary JSON everywhere
- Not with business-critical logic hidden in fragile SQL blobs

Why:

This product is relationship-dense, permission-sensitive, and audit-heavy. Postgres is the right center of gravity.

### 11. `Prisma`

How it will be used:

- Schema management
- Type-safe DB access
- Migrations for the core application model
- Shared data contracts for app engineers

How it will not be used:

- Not for every complex analytical query if raw SQL is better
- Not as an abstraction to avoid understanding the database

### 12. `Redis`

How it will be used:

- Caching
- rate limiting
- short-lived session and job coordination data
- queue coordination

How it will not be used:

- Not as a silent second database for durable business truth
- Not for data that must survive operational mistakes without stronger persistence guarantees

### 13. `BullMQ`

How it will be used:

- Background jobs
- notification dispatch
- calendar sync
- LMS/SIS imports
- AI post-processing and enrichment jobs
- retryable workflows

How it will not be used:

- Not for long-running business workflows that need human review states forever
- Not for logic that belongs in explicit domain services

### 14. `OpenSearch`

How it will be used:

- Full-content search across coursework, files, messages, class resources, and admin records once search needs exceed Postgres
- institution-grade search experiences

How it will not be used:

- Not in v1 if Postgres search is enough
- Not as a premature distributed dependency

Recommendation:

Start with Postgres full-text and trigram search. Introduce OpenSearch only when usage proves it necessary.

## Files and content stack

### 15. `S3-compatible object storage`

How it will be used:

- Durable storage for submissions, attachments, exports, and institution files
- Pre-signed access
- retention and lifecycle policies

How it will not be used:

- Not as a public CDN bucket with weak access controls
- Not without metadata tracked in the database

### 16. `Vercel Blob`

How it will be used:

- Fast early-stage storage for prototypes, lightweight assets, and rapid iteration if the web stack is on Vercel

How it will not be used:

- Not as the forever answer for institution-scale file compliance requirements

Recommendation:

Use only if it accelerates early phases. Plan migration to S3-compatible storage before serious institutional rollout.

### 17. `Tiptap`

How it will be used:

- Rich text editing for announcements, prompts, notes, feedback, and messages

How it will not be used:

- Not for arbitrary complex document fidelity that should live in Docs/Office integrations

## Auth, identity, and enterprise access

### 18. `WorkOS`

How it will be used:

- SAML and OIDC enterprise SSO
- SCIM provisioning later
- Directory sync and institution identity bridging

How it will not be used:

- Not as the only authorization layer
- Not as a replacement for our own tenant, role, and resource permission model

Why:

Institution-ready means enterprise identity is mandatory, and WorkOS shortens a painful path significantly.

### 19. `RBAC + policy layer`

How it will be used:

- App-level role and resource access
- tenant-aware authorization
- permission checks for students, educators, TAs, admins, and service actors

How it will not be used:

- Not as scattered `if role === ...` checks across the app
- Not without central policy evaluation and auditability

Recommendation:

Start with a strongly typed internal authorization layer. Move to `Permit.io` or `Oso` only if policy complexity justifies it.

## AI stack

### 20. `OpenAI API`

How it will be used:

- Grounded study support
- educator assistance
- summarization
- structured drafting
- retrieval-assisted tutoring and teaching workflows

How it will not be used:

- Not as an ungrounded chatbot bolted onto every page
- Not for autonomous grading decisions
- Not for policy-sensitive actions without constraints and review

### 21. `Vercel AI SDK`

How it will be used:

- Streaming AI responses in the frontend
- Typed AI interactions
- tool calling
- structured outputs
- orchestration between UI and model-backed actions

How it will not be used:

- Not as the persistence layer for AI history
- Not as a substitute for backend prompt governance or audit logs

### 22. `pgvector`

How it will be used:

- Embeddings for class-scoped retrieval
- semantic lookup across resources, notes, messages, and syllabus content
- institution-safe retrieval on internal content

How it will not be used:

- Not as magic memory for everything
- Not without source metadata and permission filtering

### 23. `Langfuse`

How it will be used:

- Prompt/version tracking
- tracing AI calls
- evaluation and debugging
- grounding analysis

How it will not be used:

- Not as the source of business analytics
- Not as a substitute for product logs or audits

## Observability and analytics

### 24. `Sentry`

How it will be used:

- frontend and backend error tracking
- release monitoring
- performance tracing for key user journeys

How it will not be used:

- Not as a full BI or product analytics layer

### 25. `OpenTelemetry`

How it will be used:

- distributed traces across web, backend, queues, and integrations
- operational visibility for slow or failing institutional workflows

How it will not be used:

- Not as a developer-only nice-to-have added too late

### 26. `PostHog`

How it will be used:

- product analytics
- funnel analysis
- feature adoption
- institution and role segmentation
- experimentation later

How it will not be used:

- Not for storing regulated academic content
- Not for mixing analytics with audit logs

### 27. Structured logging

Recommended tools:

- `Pino` for Node services
- log shipping to `Datadog`, `Axiom`, or `CloudWatch`

How it will be used:

- audit-adjacent operational logs
- integration diagnosis
- support investigations

How it will not be used:

- Not for sensitive raw content when metadata would do

## DevOps and infrastructure

### 28. `Vercel`

How it will be used:

- Hosting the web application
- preview deployments
- fast frontend iteration
- AI SDK friendly deployment path

How it will not be used:

- Not as the only home for stateful enterprise infrastructure
- Not for pretending every backend need fits inside serverless ergonomically

### 29. `AWS`

How it will be used:

- Durable infrastructure for storage, networking, databases, queue-adjacent systems, and mature enterprise controls
- likely home for institution-scale data services

How it will not be used:

- Not with overengineered IaC complexity before product-market signal

Recommendation:

Use a hybrid model:

- `Vercel` for the web product
- `AWS` for persistent backend infrastructure as complexity grows

### 30. `Terraform`

How it will be used:

- Repeatable environment provisioning
- networking, storage, managed services, and secrets-adjacent infrastructure definition

How it will not be used:

- Not for premature platform engineering theater in week one

### 31. `GitHub Actions`

How it will be used:

- CI
- test execution
- linting
- migration validation
- deploy orchestration
- security scans

How it will not be used:

- Not for opaque, fragile release pipelines nobody understands

## Testing stack

### 32. `Vitest`

How it will be used:

- unit tests
- service tests
- component logic tests

How it will not be used:

- Not as a replacement for end-to-end or integration coverage

### 33. `Playwright`

How it will be used:

- critical journey tests
- institution admin, educator, and student workflows
- role and permission validation

How it will not be used:

- Not to brute-force test every trivial branch

### 34. `MSW`

How it will be used:

- frontend integration testing with realistic mocked APIs
- isolated UI development

How it will not be used:

- Not for masking real contract drift forever

### 35. `Supertest`

How it will be used:

- backend API integration tests
- auth and contract tests

### 36. `k6`

How it will be used:

- load testing around deadline spikes, roster imports, and institution onboarding events

How it will not be used:

- Not as a vanity benchmark tool disconnected from realistic traffic

## Security and compliance stack

### 37. `WorkOS Audit Logs` plus app audit tables

How it will be used:

- identity event capture
- institution-facing auditability
- administrative investigations

How it will not be used:

- Not as the only audit layer; core app actions must still be logged in our DB

### 38. `Dependabot` and `CodeQL`

How it will be used:

- dependency hygiene
- security scanning in CI

How it will not be used:

- Not as proof that the system is secure

### 39. `Vault` or managed secret manager

Recommendation:

- `AWS Secrets Manager` if AWS becomes the main backend platform

How it will be used:

- environment secrets
- rotation support
- integration credentials

How it will not be used:

- Not with secrets scattered across developer machines and ad hoc env files forever

## Integrations stack

### 40. LMS integrations

Recommended initial targets:

- `Canvas`
- `Blackboard`
- `Moodle`

How they will be used:

- course roster import
- assignment sync
- content bootstrap
- deep-linking where useful

How they will not be used:

- Not as hard dependencies for core app function
- Not with one-off institution-specific hacks inside the product core

### 41. SIS integrations

Recommended approach:

- Start with CSV and managed ingestion pipelines
- add institutional SIS connectors later

How they will be used:

- roster sync
- term alignment
- enrollment truth

How they will not be used:

- Not for real-time coupling if batch sync is operationally safer

### 42. Google and Microsoft integrations

How they will be used:

- calendar sync
- document attachment flows
- institution ecosystem compatibility

How they will not be used:

- Not as the core canonical document model if the app needs its own submission metadata and permissioning

## Recommended implementation topology

### Phase 1 stack

- `v0`
- `Next.js`
- `React`
- `TypeScript`
- `Tailwind`
- `shadcn/ui`
- `PostgreSQL`
- `Prisma`
- `Redis`
- `BullMQ`
- `OpenAI API`
- `Vercel AI SDK`
- `WorkOS`
- `Sentry`
- `PostHog`
- `GitHub Actions`

### Phase 2 additions

- `NestJS`
- `pgvector`
- `OpenTelemetry`
- `S3-compatible storage`
- `Storybook`
- `Playwright`
- LMS connectors

### Phase 3 additions

- `OpenSearch`
- `Terraform`
- deeper AWS footprint
- SCIM provisioning
- advanced audit and compliance tooling

## Final recommendation

If I had to pick the strongest practical stack for this app today, it would be:

- Frontend: `v0 + Next.js + React + TypeScript + Tailwind + shadcn/ui`
- Backend: `Next.js BFF + NestJS services`
- Data: `PostgreSQL + Prisma + Redis + BullMQ + pgvector`
- Auth: `WorkOS + internal RBAC/policy layer`
- AI: `OpenAI API + Vercel AI SDK + Langfuse`
- Infra: `Vercel for web, AWS for persistent services`
- Observability: `Sentry + OpenTelemetry + PostHog + structured logs`
- Quality: `Vitest + Playwright + MSW + Supertest + GitHub Actions`

That combination is fast enough to build with, serious enough to sell to institutions, and flexible enough to grow into a real platform.
