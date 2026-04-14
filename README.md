# Axioma Learn

Axioma Learn is intended to become an AI-native learning workspace that replaces the fragmented experience students and educators usually endure across LMS pages, docs, chats, calendars, and office-hours tools.

The current repository only contains a single JSX concept file, but that prototype already points clearly to the final product direction:

- A student workspace with home, calendar, to-do, class views, grades, coursework detail, office hours, and an in-context Study Buddy.
- An educator workspace with class health, coursework review, student support, grading assistance, class setup, office hours management, and an AI teaching assistant.
- A shared product model where classes, coursework, resources, submissions, messages, bookings, and AI assistance all live in one coherent system.

## Product vision

The final version of Axioma Learn should feel like a calm, unified operating system for learning:

- Students should always know what to do next, why it matters, and what resource or help path is most useful.
- Educators should be able to understand class health quickly, act on weak signals early, and manage teaching workflows without bouncing across multiple products.
- AI should be grounded in class context, not generic. It should use coursework, files, deadlines, participation, grades, and class structure to generate support that is actionable and safe.

## Core experience

### For students

- A home dashboard with upcoming work, learning goals, recommended refreshers, and focus topics.
- A weekly calendar that combines class meetings, deadlines, and office-hours bookings.
- A to-do view with filters and sorting that supports execution, not just listing.
- Per-class spaces for stream, coursework, grades, office hours, and AI help.
- Coursework detail pages where materials, submissions, grades, and communication all live together.
- A Study Buddy that can explain concepts, suggest next steps, recommend resources, and push useful guidance back into the student home experience.

### For educators

- A home dashboard that surfaces class health, pending work, support opportunities, and suggested interventions.
- A unified teaching calendar with classes, coursework due dates, and office hours.
- A review queue for coursework and submissions.
- A class management area with tabs for overview, coursework, students, grades, AI assistant, and office hours.
- AI support for grading, class-wide clarifications, student check-ins, and reteach planning.
- An agentic classroom-creation flow that can parse a syllabus and propose a course structure before publishing.

## What the final product should include

- Role-aware experiences for students and educators.
- A shared domain model so both sides see the same source of truth.
- AI grounded in class context and permissioned by role.
- Real integrations for files, calendars, notifications, and messaging.
- A backend that supports live state instead of static arrays.
- Auditability, permissions, and educational safeguards around AI outputs.

## Repository structure to aim for

This repo should eventually evolve from a single concept file into something closer to:

```text
/apps
  /web
  /api
/packages
  /ui
  /domain
  /ai
  /integrations
/docs
  architecture.md
  models.md
  goals.md
  features.md
```

## Documentation

- [Product goals](./docs/goals.md)
- [Feature breakdown](./docs/features.md)
- [Architecture direction](./docs/architecture.md)
- [Domain models](./docs/models.md)

## Current state

Current state: a single static JSX prototype that successfully captures product intent, IA, and interaction philosophy.

Next step: use the prototype as a spec artifact and implement the real application around the flows it already validates.
