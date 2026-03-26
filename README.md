# DewPoint Labs

DewPoint Labs landing page built with React, Vite, TypeScript, and Tailwind CSS.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

The app will be available at [http://localhost:8080](http://localhost:8080).

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start development server with HMR   |
| `npm run build`   | Create optimized production build    |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint checks                    |
| `npm run test`    | Run tests once                       |
| `npm run test:watch` | Run tests in watch mode           |

## Tech Stack

- **React 18** — UI library
- **Vite** — Build tool and dev server
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **shadcn/ui** — Component library
- **Framer Motion** — Animations
- **React Router** — Client-side routing

## Project Structure

```
src/
├── assets/        # SVG logos and images
├── components/    # Reusable UI components
│   └── ui/        # shadcn/ui base components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── pages/         # Route page components
└── main.tsx       # App entry point
```
