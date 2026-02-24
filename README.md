# Hoa Uu Dam - Buddhist Temple Community Website

A community website for a local Buddhist temple featuring a content management system (CMS) built with Strapi.io and a frontend built with React + Vite, managed in a single monorepo.

## Project Structure

```
hoa-uu-dam/
├── packages/
│   ├── cms/          # Strapi backend
│   └── website/      # React + Vite frontend
├── package.json      # Root package.json with workspaces
├── PLAN.md          # Detailed project plan
└── README.md        # This file
```

## Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up Husky (after first install):
   ```bash
   npm run prepare
   ```

## Development

- **Start all services**: `npm run dev`
- **Build all packages**: `npm run build`
- **Run tests**: `npm run test`
- **Lint code**: `npm run lint`
- **Format code**: `npm run format`

## Packages

### CMS (`packages/cms`)

Strapi.io backend providing the content management system and API.

### Website (`packages/website`)

React + Vite frontend for the temple community website.

## Code Quality

This project uses:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Husky** for Git hooks
- **lint-staged** for pre-commit checks

## Contributing

1. Create a feature branch
2. Make your changes
3. Ensure tests pass and code is properly formatted
4. Submit a pull request

## License

Private project for Buddhist temple community.
