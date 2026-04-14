# Contributing

## Local setup

1. Install `Node.js 22+`
2. Install `pnpm 10+`
3. Copy `.env.example` to `.env`
4. Copy `.env.local.example` to `.env.local` if you want a local env template
5. Start local services with `pnpm docker:up`
6. Install dependencies with `pnpm install`
7. Generate Prisma client with `pnpm db:generate`
8. Start the workspace with `pnpm dev:all`

## Project rules

- Treat `packages/domain` as the shared product contract.
- Keep institution integrations behind adapter boundaries.
- Do not ship AI features without scoped context and explicit guardrails.
- Use `v0` to accelerate frontend delivery, but review every generated surface before merging.

## Useful scripts

- `pnpm setup` installs dependencies, starts Docker services, and generates Prisma client
- `pnpm dev:all` starts local infra and runs web + api together
- `pnpm dev:web` runs only the web app
- `pnpm dev:api` runs only the API
- `pnpm db:studio` opens Prisma Studio
