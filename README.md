# Questify

Questify is a web application for creating and completing quests. Built with Next.js, it provides a secure and interactive environment for users to design and participate in various challenges.

## Features
- Create custom quests with different tasks
- Secure authentication using Clerk
- Optimized performance with Next.js

It is not fully completed yet because you can`t see the function of completing the quest

## Tech Stack
- **Framework:** Next.js
- **Authentication:** Clerk
- **Database:** PostgreSQL
- **Styling:** (Specify if using Tailwind, SCSS, etc.)

It is hosted on: https://quests-app.vercel.app/

But you also can set it localy:

## Getting Started

### Prerequisites
Before running Questify locally, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Yarn](https://yarnpkg.com/) or npm

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/questify.git
   cd questify
   ```
2. Install dependencies:
   ```sh
   npm install

### Setting Up Environment Variables
1. Create a `.env.local` file in the root directory:
   ```sh
   touch .env.local
   ```
2. Add the following environment variables:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```
3. Get your **Clerk API keys**:
   - Sign up or log in to [Clerk](https://clerk.dev/)
   - Create a new application
   - Go to the **API Keys** section and copy the **Publishable Key** and **Secret Key**
   - Paste them into your `.env.local` file

### Running the Project
To start the development server:
```sh
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Deployment
For production deployment:
```sh
next build
next start
```

## Contributors
- **Haranycheva Mariia** - [GitHub Profile](https://github.com/haranycheva)
- **Ivan Tkach** - [GitHub Profile](https://github.com/iveke)


