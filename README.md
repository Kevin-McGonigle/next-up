# 👆🏻 Next Up

A template for building Next.js applications.

## Getting Started

### Pre-requisites

- [Node.js](https://nodejs.org/)
  - Using [nvm](https://github.com/nvm-sh/nvm) is recommended:
    ```bash
    nvm install
    ```
  - Alternatively, with brew:
    ```bash
    brew install node
    ```
- [pnpm](https://pnpm.io/)
  ```bash
  npm install -g pnpm@latest
  ```

### Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Copy `.env.template` to `.env.local` and fill in the required values.

   ```bash
   cp .env.template .env.local
   ```

### Development

To run the development server:

```bash
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser of choice.

## Stack

- [Next.js](https://nextjs.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Supabase](https://supabase.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
