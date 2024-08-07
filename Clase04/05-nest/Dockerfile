ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine as stage_base
WORKDIR /usr/app

FROM stage_base as stage_deps
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

FROM stage_base as stage_build
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci
COPY . .
RUN npm run build

FROM stage_base as stage_prod
COPY --from=stage_deps /usr/app/node_modules ./node_modules
COPY --from=stage_build /usr/app/dist ./dist
COPY --from=stage_build /usr/app/package.json ./package.json

CMD npm run start:prod