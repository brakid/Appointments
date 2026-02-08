# Backend Package

Fastify 4.x backend API with TypeScript for the appointment booking system.

## Overview

This package contains the complete backend implementation including:
- RESTful API endpoints
- Database operations with Prisma
- Authentication middleware
- External service integrations
- Business logic and services

## Technology Stack

- **Runtime**: Node.js 20.x
- **Framework**: Fastify 4.x
- **Language**: TypeScript 5.x
- **Database**: PostgreSQL + Prisma ORM
- **Authentication**: Firebase Admin SDK
- **Validation**: Zod
- **Email**: Resend API
- **Calendar**: Google Calendar API
- **Cron Jobs**: node-cron

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Lint code
npm run lint

# Database operations
npm run db:migrate
npm run db:generate
npm run db:seed
```

## Project Structure

```
src/
├── routes/              # API route handlers
├── services/           # Business logic services
├── middleware/          # Custom middleware
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
├── prisma/             # Database schema and migrations
└── config/             # Configuration files
```