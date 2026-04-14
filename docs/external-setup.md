# External Setup

## Purpose

This document lists the external services, API keys, accounts, and non-code setup required to run Axioma Learn locally and to evolve it into the institution-ready platform described in the docs.

It is intentionally split into:

- required for local development
- required for staging / production
- optional but recommended later

## 1. Required for local development

### Node and package manager

You need:

- `Node.js 22+`
- `pnpm 10+`
- `Docker Desktop` or compatible Docker runtime

Why:

- Node runs the web and API apps
- pnpm manages the monorepo
- Docker runs local Postgres and Redis

### Local infrastructure services

You must run:

- `PostgreSQL`
- `Redis`

Current local path:

- use the included `docker-compose.yml`

Current local defaults:

- Postgres: `postgresql://postgres:postgres@localhost:5432/axioma_learn`
- Redis: `redis://localhost:6379`

### Base environment variables

At minimum, local development should set:

- `NODE_ENV`
- `DATABASE_URL`
- `REDIS_URL`

See:

- root `.env.example`
- `apps/web/.env.example`
- `apps/api/.env.example`

## 2. Required soon for real app development

These should be set up early even if not every integration is used on day one.

### OpenAI

What to create:

- OpenAI account
- project with billing enabled
- API key

Environment variables:

- `OPENAI_API_KEY`

Where it will be used:

- Study Buddy
- educator AI assistant
- grounded summarization and drafting workflows

What not to do:

- do not hardcode the key in code
- do not put the key in client-side env vars

### WorkOS

What to create:

- WorkOS account
- environment / project
- client application

Environment variables:

- `WORKOS_API_KEY`
- `WORKOS_CLIENT_ID`
- `WORKOS_COOKIE_PASSWORD`

Where it will be used:

- enterprise SSO
- institution-ready identity layer
- later SCIM / directory features

What not to do:

- do not treat WorkOS as your only authorization model
- do not expose API credentials to the browser

### Sentry

What to create:

- Sentry org
- project for web
- project for API

Environment variables:

- `SENTRY_DSN`
- `NEXT_PUBLIC_SENTRY_DSN`
- `SENTRY_AUTH_TOKEN`

Where it will be used:

- frontend error tracking
- backend error tracking
- release monitoring

### PostHog

What to create:

- PostHog project

Environment variables:

- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`

Where it will be used:

- product analytics
- adoption and workflow instrumentation

What not to do:

- do not put sensitive academic records into analytics events

## 3. Recommended for staging and production

### Vercel

What to create:

- Vercel account / team
- linked project for `apps/web`

You will need to configure:

- environment variables for web
- preview and production environments
- custom domains later

Expected setup areas:

- build settings
- environment variables
- deployment protection rules if needed

### Cloud hosting for persistent backend infrastructure

Recommended options:

- `AWS` for long-term production
- `Railway` only as an easier interim path if you want faster early deployment

You will need:

- managed Postgres or self-managed Postgres infra
- managed Redis
- object storage
- secrets management
- logs and tracing sink

Minimum external resources:

- production database
- staging database
- production Redis
- staging Redis
- object storage bucket(s)

### Object storage

Recommended:

- `AWS S3` or S3-compatible storage

You will need:

- bucket for submissions
- bucket for coursework/resource attachments
- lifecycle rules
- secure access strategy

Likely env vars later:

- `S3_BUCKET`
- `S3_REGION`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

What not to do:

- do not store submissions in a public bucket
- do not rely on bare object keys without DB metadata
- do not ship long-lived file URLs to the browser; use presigned access

Recommended application env vars:

- `S3_BUCKET`
- `S3_REGION`
- `S3_ENDPOINT` (optional, mainly for non-AWS dev targets)
- `S3_FORCE_PATH_STYLE`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

How the app now uses storage:

- student uploads go through a presigned `PUT` URL
- object keys are still tracked in Postgres as `storageKey`
- student and educator views receive short-lived signed download links when storage is configured

### Langfuse

What to create:

- Langfuse project

Likely env vars later:

- `LANGFUSE_PUBLIC_KEY`
- `LANGFUSE_SECRET_KEY`
- `LANGFUSE_HOST`

Where it will be used:

- prompt versioning
- AI traces
- evaluation and debugging

## 4. External systems for institution readiness

These are not required on day one, but the platform is architected to support them.

### LMS providers

Planned targets:

- Canvas
- Blackboard
- Moodle

What you will need eventually:

- developer account / institution partnership path
- API credentials
- test tenant or sandbox

Likely config fields later:

- LMS base URL
- LMS client ID
- LMS client secret
- LMS webhook secrets if supported

### SIS / roster systems

Early recommendation:

- support CSV imports first

Later requirements may include:

- SIS API credentials
- secure file transfer or scheduled import access
- institution-specific mapping rules

### Google Workspace

Potential uses:

- calendar sync
- Drive / Docs resource linking

What you may need:

- Google Cloud project
- OAuth client
- redirect URLs

Likely env vars later:

- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

### Microsoft 365

Potential uses:

- Outlook calendar sync
- OneDrive / Microsoft document linkage

What you may need:

- Azure app registration
- tenant-specific configuration

Likely env vars later:

- `MICROSOFT_CLIENT_ID`
- `MICROSOFT_CLIENT_SECRET`
- `MICROSOFT_TENANT_ID`

## 5. Suggested env variable inventory

This is the consolidated list of keys and config values you should expect across environments.

### Core app

- `NODE_ENV`
- `DATABASE_URL`
- `REDIS_URL`

### Auth

- `WORKOS_API_KEY`
- `WORKOS_CLIENT_ID`
- `WORKOS_COOKIE_PASSWORD`

### AI

- `OPENAI_API_KEY`
- `LANGFUSE_PUBLIC_KEY`
- `LANGFUSE_SECRET_KEY`
- `LANGFUSE_HOST`

### Analytics and errors

- `SENTRY_DSN`
- `NEXT_PUBLIC_SENTRY_DSN`
- `SENTRY_AUTH_TOKEN`
- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`

### Storage

- `S3_BUCKET`
- `S3_REGION`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

### Web app public config

- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_API_URL`

### Integrations later

- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `MICROSOFT_CLIENT_ID`
- `MICROSOFT_CLIENT_SECRET`
- `MICROSOFT_TENANT_ID`

## 6. Accounts and dashboards you should expect to own

Minimum serious operator set:

- GitHub
- Vercel
- OpenAI
- WorkOS
- Sentry
- PostHog
- cloud provider account
- domain / DNS provider

Later:

- Langfuse
- LMS developer accounts
- Google Cloud
- Microsoft Azure

## 7. What to configure first

If you want the fastest realistic setup order, do this:

1. Node, pnpm, Docker
2. local Postgres and Redis via Docker
3. OpenAI
4. WorkOS
5. Sentry
6. PostHog
7. Vercel
8. cloud storage and production infra

## 8. Security notes

- Never commit real `.env` files.
- Keep server-only secrets out of `NEXT_PUBLIC_*`.
- Rotate credentials when teammates or vendors change.
- Separate dev, staging, and production credentials.
- Prefer managed secret storage for hosted environments.

## 9. Recommended next action

The next practical follow-up would be to create:

- `.env.local.example`
- `.env.staging.example`
- `.env.production.example`

with environment-specific values and ownership notes for each variable.
