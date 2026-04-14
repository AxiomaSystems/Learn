# Architecture

## Intent

The current prototype is a single static JSX file, but the final product should be implemented as a multi-layer application with a shared backend, role-aware services, and AI orchestration grounded in course context.

## Recommended high-level architecture

```text
Web App (student + educator clients)
        |
        v
Application API / BFF
        |
        +--> Auth & permissions
        +--> Coursework service
        +--> Calendar / scheduling service
        +--> Messaging service
        +--> Submission / file service
        +--> Grading / progress service
        +--> AI orchestration service
        |
        v
Primary database + object storage + external integrations
```

## Frontend architecture

### Recommended shape

- `apps/web` for the product UI
- route- or feature-based modules for student and educator experiences
- shared UI package for design system primitives
- shared domain package for typed entities and client contracts

### Frontend principles

- One product, two role-specific surfaces
- Shared components where behavior overlaps
- Role-specific feature modules where workflows differ
- Server-backed state instead of local mock arrays
- Strong typing around domain objects and API contracts

### Suggested frontend modules

- `student/home`
- `student/calendar`
- `student/todo`
- `student/class`
- `student/coursework`
- `student/office-hours`
- `student/study-buddy`
- `educator/home`
- `educator/calendar`
- `educator/review-queue`
- `educator/class`
- `educator/classroom-creation`
- `shared/search`
- `shared/files`
- `shared/messaging`

## Backend architecture

### API layer

A typed application API should expose the product domain to the web client. This can be REST, GraphQL, or a typed RPC approach, but it should preserve:

- strong auth boundaries
- role-aware access control
- explicit domain contracts
- auditable mutations

### Core services

#### Auth and identity

- User identity
- Role assignment
- Enrollment and teaching relationships
- Institution or tenant boundaries

#### Course service

- Classes
- Modules
- Coursework
- Topics
- Resources

#### Progress and grading service

- Submissions
- Grades
- Rubrics
- Completion state
- Derived student and class progress metrics

#### Calendar and scheduling service

- Class schedules
- Due dates
- Office-hours slots
- Bookings
- External calendar sync

#### Messaging service

- Coursework threads
- Student-instructor messages
- Group messaging
- Notifications and message history

#### File service

- Resource attachments
- Submission uploads
- Generated documents
- Secure access and versioning

#### AI orchestration service

- Prompt construction
- Retrieval of class-scoped context
- Role-specific tool access
- Safety filters and audit logging
- Suggested actions returned in structured form

## AI architecture

The prototype strongly implies contextual AI rather than freeform chat. The final system should support retrieval-augmented, role-aware assistance.

### AI request flow

1. User opens a context such as a class, coursework item, or educator tab.
2. The client sends an intent plus context identifiers.
3. The AI service retrieves relevant domain context:
   - class metadata
   - coursework instructions
   - linked resources
   - grades or progress signals
   - office-hours context
4. The system builds a role-specific prompt and tool context.
5. The model returns:
   - response text
   - cited context references where possible
   - suggested actions
   - confidence or uncertainty metadata where appropriate
6. The client can optionally apply structured suggestions back into product state.

### AI constraints

- Student AI cannot expose educator-only data.
- Educator AI cannot take high-impact actions without confirmation.
- Grading assistance should propose, not finalize.
- Messaging drafts should require human approval before sending.

## Data architecture

### Storage

- Relational database for core domain state
- Object storage for submissions and resources
- Search index for fast retrieval across classes, files, and messages
- Event or audit log for important mutations and AI-assisted actions

### Why relational first

This product has many strongly connected entities:

- users
- classes
- enrollments
- coursework
- submissions
- grades
- office-hours bookings
- messages

A relational model is the best default for consistency and permissions.

## Integrations

Recommended external integrations for the final version:

- Google Calendar or Outlook calendar sync
- Cloud file providers or native storage
- Email / push notification providers
- SIS or LMS imports where institutional rollout matters

## Security and trust

The final version should include:

- tenant-aware authorization
- role-based access control
- signed file URLs
- audit logs for grading and AI suggestions
- data retention policies
- clear boundaries between draft AI output and committed user actions

## Suggested implementation phases

### Phase 1

- Real auth
- Core course and coursework models
- Student home, class, to-do, and calendar
- Educator class overview and review queue
- Office-hours booking
- Basic AI context for student and educator assistants

### Phase 2

- Messaging and group work
- Submission creation flows
- Rich grading and rubric workflows
- External calendar sync
- Notifications

### Phase 3

- Syllabus ingestion
- Classroom auto-structure generation
- Deeper analytics
- Institutional integrations

## Target repo shape

```text
/apps
  /web
  /api
/packages
  /ui
  /domain
  /ai
  /db
  /integrations
/docs
```
