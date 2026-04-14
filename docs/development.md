# Development

## Workspace layout

```text
apps/
  web/            Next.js product frontend
  api/            NestJS application API
packages/
  domain/         Shared domain contracts and schemas
  ui/             Shared UI tokens and primitives
  ai/             AI contracts and orchestration helpers
  db/             Prisma schema and database package
  integrations/   External system adapters
docs/             Product, architecture, and execution docs
```

## Start sequence

1. `pnpm setup`
2. `pnpm dev:all`

## Ports

- Web: `http://localhost:3000`
- API: `http://localhost:4000/api`
- Health: `http://localhost:4000/api/health`

## Notes

- The repo is scaffolded, not fully wired.
- The frontend is ready for `v0`-assisted iteration inside a real monorepo structure.
- The database schema is a foundation aligned with the docs, not yet the full production model.

## Useful root scripts

- `pnpm setup`
- `pnpm dev:all`
- `pnpm dev:web`
- `pnpm dev:api`
- `pnpm build`
- `pnpm lint`
- `pnpm test`
- `pnpm typecheck`
- `pnpm db:generate`
- `pnpm db:migrate`
- `pnpm db:push`
- `pnpm db:studio`
- `pnpm docker:up`
- `pnpm docker:down`
- `pnpm docker:logs`
