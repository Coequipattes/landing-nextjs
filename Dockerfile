FROM node:24-alpine AS base
RUN corepack enable

# ---- deps : installe les dépendances du monorepo (workspace pnpm) ----
FROM base AS deps
WORKDIR /app
# Manifests nécessaires à la résolution du workspace pnpm.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/
COPY packages/ui/package.json ./packages/ui/
RUN pnpm install --frozen-lockfile

# ---- builder : build TanStack Start (Vite + Nitro) ----
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/web/node_modules ./apps/web/node_modules
COPY --from=deps /app/packages/ui/node_modules ./packages/ui/node_modules
COPY . .
# Vars publiques : inlinées par Vite au build (préfixe VITE_, ex NEXT_PUBLIC_*).
ARG VITE_SITE_URL
ARG VITE_CONTACT_EMAIL
ENV VITE_SITE_URL=$VITE_SITE_URL
ENV VITE_CONTACT_EMAIL=$VITE_CONTACT_EMAIL
# `pnpm build` (racine) = `pnpm --filter web build` = `vite build`.
# Sortie : apps/web/.output (serveur Node autonome Nitro).
RUN pnpm build

# ---- runner : serveur de prod autonome (équivalent ex-`next start`) ----
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 site

# Serveur Nitro autonome (inclut .output/public avec les assets de build).
COPY --from=builder --chown=site:nodejs /app/apps/web/.output ./.output

# Données initiales (écrasées par le volume si monté). Le code lit/écrit
# src/data/*.json et public/uploads/** via process.cwd() → WORKDIR /app.
COPY --from=builder --chown=site:nodejs /app/apps/web/src/data ./src/data

RUN mkdir -p public/uploads/gallery && \
    chown -R site:nodejs src/data public/uploads

USER site
EXPOSE 3000
ENV PORT=3000
ENV HOST=0.0.0.0

CMD ["node", ".output/server/index.mjs"]
