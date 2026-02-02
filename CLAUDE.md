# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server with hot reload
npm run build        # TypeScript compilation + Vite production build
npm run preview      # Preview production build locally
```

No test suite or linting tools are currently configured.

## Architecture

This is a React + TypeScript single-page application for a drinking card game called "(Un)Boxed". Built with Vite.

### Key Directories

- `src/components/` - React components (Header, Nav, Players, Deals, RoundOne/Two/Three, etc.)
- `src/data/deals.ts` - Game deals/power-ups data
- `src/types.ts` - TypeScript interfaces (Deal, Player)
- `public/images/deals/` - Static images for deal cards

### State Management

- React hooks (`useState`, `useEffect`) for component state
- App.tsx is the main component that manages state and passes props down
- localStorage keys:
  - `'unboxed-players'` - Player data
  - `'unboxed-deck-config'` - Number of each deal card in the deck (default 2 each)
  - `'unboxed-deals-per-player'` - How many deals each player receives (default 2)

### Core Data Types

```typescript
interface Player {
  id: string;
  name: string;
  deals: string[];  // Array of deal IDs assigned to player
}

interface Deal {
  id: string;
  name: string;
  description: string;
  abbreviation: string;
  image: string;  // Path to image in public/images/deals/
}
```

### Deployment

- Configured for subpath deployment at `/unboxed/` (see `vite.config.ts` base path)
- GitHub Pages deployment via `.github/workflows/deploy.yaml`
- Use `import.meta.env.BASE_URL` when referencing static assets from `public/`
