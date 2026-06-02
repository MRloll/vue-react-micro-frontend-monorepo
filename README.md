# Vue-React Micro Frontend Monorepo

A monorepo demonstrating a micro-frontend architecture using **Vue 3** as the host shell and **React 19** as a remote micro-frontend, connected via **Module Federation** (`@originjs/vite-plugin-federation`) and orchestrated with **Turborepo**.

## Architecture

```
┌─────────────────────────────────────┐
│         Host App (Vue 3)            │
│  apps/vue  ───  port 5173           │
│  Vue Router + Nuxt UI               │
│  Dynamically imports React remote   │
│  via ReactWrapper.vue               │
└──────────────┬──────────────────────┘
               │ Module Federation
               │ (remoteEntry.js)
               ▼
┌─────────────────────────────────────┐
│       Remote App (React 19)         │
│  apps/react ───  port 5174          │
│  Exposes: ./ReactApp                │
│  Tailwind CSS v4                    │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│         Shared Packages              │
│  packages/types       @repo/types   │
│  packages/typescript-config         │
└─────────────────────────────────────┘
```

## Project Structure

```
vue-react-micro-frontend-monorepo/
├── apps/
│   ├── vue/                         # Host shell (Vue 3)
│   │   ├── src/
│   │   │   ├── App.vue              # Root component with RouterView
│   │   │   ├── main.ts              # App entry, vue-router setup
│   │   │   ├── ReactWrapper.vue     # Loads React remote via federation
│   │   │   ├── views/index.vue      # Home view (renders ReactWrapper)
│   │   │   ├── assets/
│   │   │   └── style.css
│   │   ├── vite.config.ts           # Federation config (host, consumes react_app)
│   │   └── package.json
│   │
│   └── react/                       # Remote micro-frontend (React 19)
│       ├── src/
│       │   ├── App.tsx              # Root component (exposed as remote)
│       │   ├── main.tsx             # Standalone entry
│       │   ├── components/
│       │   │   └── NavBar.tsx       # Example component (uses @repo/types)
│       │   └── index.css
│       ├── vite.config.ts           # Federation config (remote, exposes ./ReactApp)
│       └── package.json
│
├── packages/
│   ├── types/                       # @repo/types — shared TypeScript types
│   │   ├── src/index.ts             # user interface definition
│   │   └── package.json
│   │
│   └── typescript-config/           # @repo/typescript-config — base tsconfig
│       ├── base.json
│       └── package.json
│
├── package.json                     # Root workspace & turbo scripts
├── pnpm-workspace.yaml              # Workspace definition (apps/*, packages/*)
├── turbo.json                       # Turborepo task pipeline
└── pnpm-lock.yaml
```

## Tech Stack

| Layer          | Technology                              |
| -------------- | --------------------------------------- |
| Monorepo       | Turborepo 2 + pnpm 9                   |
| Host Shell     | Vue 3 + Vue Router 5 + Nuxt UI 4       |
| Remote         | React 19 + Tailwind CSS 4              |
| Federation     | `@originjs/vite-plugin-federation` 1.4 |
| Build Tool     | Vite 8                                  |
| Language       | TypeScript ~6.0                        |

## Installation & Setup

### Prerequisites

- **Node.js** >= 18
- **pnpm** >= 9.0.0 (install via `npm install -g pnpm`)

### Steps

```bash
# 1. Clone the repository
git clone <repository-url>
cd vue-react-micro-frontend-monorepo

# 2. Install dependencies
pnpm install

# 3. Build the React remote app (required — see note below)
pnpm --filter react build

# 4. Preview the React remote (serves the built files with remoteEntry.js)
pnpm --filter react preview

# 5. In a separate terminal, start the Vue host shell
pnpm --filter vue dev
```

The Vue host app runs on **http://localhost:5173** and the React remote on **http://localhost:5174**.

> **Important:** `@originjs/vite-plugin-federation` only generates the `remoteEntry.js` file during a **production build**, not in dev mode. The Vue host fetches this file to load the React micro-frontend. Therefore you **must** build and preview the React app first. Simply running `pnpm dev` on both will **not** show the React content inside the Vue app.

### Production Build

```bash
pnpm build
pnpm preview
```

## How It Works

1. The **React app** (`apps/react`) exposes its `App` component as a federated module via `@originjs/vite-plugin-federation` with the identifier `./ReactApp`.
2. The **Vue app** (`apps/vue`) is configured as the host shell. It declares `react_app` as a remote in `vite.config.ts`, pointing to the React app's `remoteEntry.js`.
3. `ReactWrapper.vue` dynamically imports `react_app/ReactApp` and renders it inside a Vue component using `React.createElement` and `ReactDOM.createRoot`.
4. The view at `/` (defined with Vue Router) renders `<ReactWrapper />`, seamlessly embedding the React micro-frontend inside the Vue shell.

## Useful Commands

| Command          | Description                        |
| ---------------- | ---------------------------------- |
| `pnpm dev`       | Start all apps in dev mode         |
| `pnpm build`     | Build all apps and packages        |
| `pnpm preview`   | Preview production builds          |
| `pnpm check-types` | Run TypeScript type checking     |
| `pnpm format`    | Format code with Prettier          |
