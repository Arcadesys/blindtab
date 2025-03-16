# BlindTab

BlindTab is a music application designed for users with low vision, allowing them to easily view and manage song content like chord charts and lyrics.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Prisma ORM
- NeonDB (PostgreSQL)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Set up your environment variables by copying the example file:

```bash
cp .env.example .env.local
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Schema

The application uses the following data models:

- **Song**: Represents a song with title, artist, content (markdown), key, tempo, etc.
- **Tag**: Represents categories or labels that can be associated with songs

## Environment Variables

- `DATABASE_URL`: Connection string for the PostgreSQL database
- `NEXT_PUBLIC_APP_ENV`: Current environment (development, production)
- `NEXT_PUBLIC_ENABLE_DEBUG_TOOLS`: Whether to enable debug tools
- `NEXT_PUBLIC_ENABLE_ANALYTICS`: Whether to enable analytics
- `NEXT_PUBLIC_LOG_LEVEL`: Logging level (debug, info, warn, error)

## Deployment

The application is configured for deployment on Vercel with NeonDB for the database.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
