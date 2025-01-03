# Policy Management Dashboard

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). This project provides a dashboard for managing policies, including features such as viewing policies by topic, status, and location, as well as tracking trends over time.

## Description

The Policy Management Dashboard allows users to:
- View policies grouped by topic, status, and location.
- Track trends in policy introduction over time.
- Filter policies based on various criteria.
- Visualize data using charts and graphs.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later) or pnpm (v6.x or later) or bun (v0.x or later)
- PostgreSQL (v12.x or later)

### Installation

1. Clone the repository:

```bash
git clone git@github.com:CC-Applications/nabilbaadillah.work-gmail.com.git
cd nabilbaadillah.work-gmail.com
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up the database:
Create a `.env` file in the root of the project and add your PostgreSQL connection string:

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/mydatabase
```

4. Run database migrations:
```bash
npx prisma generate && npx prisma migrate dev --name init
```

5. Seed the database:
```bash
npx prisma db seed
```

The seed data is sourced from `prisma/policies_data.json`. If you want to change the data, generate a new JSON file with the same structure.

#### Running the Development Server
Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 with your browser to see the result.

--

#### Lighthouse Score

[<img alt="alt_text" width="500px" src="https://media.cleanshot.cloud/media/102883/MbJWKsoJ5TilhKmXPVHcn4hgCnXWFI6lRAI3wCGk.jpeg?Expires=1735238856&Signature=JzAh6Qq6cpDiaNTlWDjhmBcMewCJX-b2N7aft6KPxu3ArsmmOfLclp0As99vXd6YRUZyRb2hz1sbr2~fafZbVoeDUDWV87QKdPIomX6kLQucDtdqiChMF4PVk4DTMLJAbu6HLyGeiFWJomn1TIAZUagh3cZzLOqszG5wi~Q-JqzpCV54vbiobGU3mfC9aoZkP--cneyzJ5essN-wp4-sQLvomClICnoyFRpWA274ZrxYCV-29NAd-PK3gEiA4McbRE5gBBh55SGvlSk5NubPZT3~8-uvr~ISKyTEu~x9OA8nsMbe1aTpCA5kd-GW2RifJ08VUCdw~019SZ76GOfvMQ__&Key-Pair-Id=K269JMAT9ZF4GZ" />](https://share.cleanshot.com/QMQm09qM)


#### Libraries Used
This project uses the following libraries:

- **Next.js** - The React framework for production.
- **Prisma** - Next-generation ORM for Node.js and TypeScript.
- **Ant Design** - A design system for enterprise-level products.
- **Day.js** - A minimalist JavaScript library for parsing, validating, manipulating, and formatting dates.
- **Tailwind CSS** - A utility-first CSS framework for rapid UI development.
- **React** - A JavaScript library for building user interfaces.
- **TypeScript** - A typed superset of JavaScript that compiles to plain JavaScript.

