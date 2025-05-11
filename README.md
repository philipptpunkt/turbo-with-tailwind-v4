# Turborepo with Tailwind CSS v4

This is an example setup for a mono repository using Tailwind CSS version 4.

## Getting Started

### Dependencies

First install the necessary dependencies

```bash
pnpm install
```

Update all dependencies in all apps and packages to latest version

```bash
pnpm up --recursive --latest
```

### Dev mode

Then you can run the project with

```bash
pnpm dev
```

### Build for production

or you can build an optimized production version with

```bash
pnpm build
```

or build and run the production version with

```bash
pnpm start
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `design-system`: a collection of basic React Design System components and Design Tokens styled with [Tailwind CSS](https://tailwindcss.com/) and shared with `web` application and other packages.
- `ui`: a set of more specific React UI components with [Tailwind CSS](https://tailwindcss.com/) shared with `web` application.
- `@turbo-with-tailwind/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@turbo-with-tailwind/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Building packages

This example is set up to produce compiled styles for `design-system` and `ui` components into the `dist` directories. The component `.tsx` files are consumed by the Next.js apps directly using `transpilePackages` in `next.config.js`. This was chosen for several reasons:

- Make package compilation simple by only depending on the Next.js Compiler and `tailwindcss`.
- Maintain clear package export boundaries.

### Differences in Tailwind 4 vs Tailwind 3

Compared to Tailwind CSS version 3 the tailwind config files have been removed (including the shared config package). All configurations are now placed directly inside the CSS file(s) see [Tailwind Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide) for more information. As well as [Tailwind's directives](https://tailwindcss.com/docs/functions-and-directives#directives) for custom configurations.

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
