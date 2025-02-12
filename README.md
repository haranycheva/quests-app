# Questify

Questify is a web application for creating and completing quests. Built with Next.js, it provides a secure and interactive environment for users to design and participate in various challenges.

## Features
- Create custom quests with different tasks
- Secure authentication using Clerk
- Optimized performance with Next.js

It is not fully completed yet because you can`t see the function of completing the quest

## Tech Stack
- **Framework:** Next.js, NestJs
- **Authentication:** Clerk, JWT
- **Database:** PostgreSQL + TypeORM
- **Styling:** Tailwind

It is hosted on: https://quests-app.vercel.app/

But you also can set it localy:

## Getting Started(Front-End)

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
next dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Deployment
For production deployment:
```sh
next build
next start
```

## Getting Started(BackEnd)

It is hosted on: https://hakaton-k3ih.onrender.com

But you also can set it localy:

link on github repository: https://github.com/iveke/hakaton

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/hakaton.git
   cd hakaton
   ```
2. Install dependencies:
   ```sh
   npm install
   
### Setting Up Environment Variables
1. Create a `.env` file in the root directory:
   ```sh
   touch .env
   ```
2. Add the following environment variables:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=your_password
   DB_NAME=hakaton
   
   AWS_BUCKET_NAME=fluvi
   AWS_REGION=eu-central-1
   AWS_ACCESS_KEY_ID=your_access_key_id
   AWS_SECRET_ACCESS_KEY=your_secret_access_key
   
   JWT_SECRET=your_jwt_secret
   JWT_SECRET_PRIVATE=your_jwt_secret_private
   ```
### Running the Project
To start the development server:
```sh
npm run start:dev
# or
nest start
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Deployment
For production deployment:
```sh
npm run build
npm run start:prod
```

## Contributors
- **Haranycheva Mariia** - [GitHub Profile](https://github.com/haranycheva)
- **Ivan Tkach** - [GitHub Profile](https://github.com/iveke)


