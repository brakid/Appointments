# Appointment Booking System

Complete TypeScript-based Node.js full-stack appointment booking system for consulting sessions with Google authentication and calendar integration.

## Quick Start

This monorepo contains a complete appointment booking system built with:

- **Frontend**: Next.js 15 + React 19 + TypeScript
- **Backend**: Fastify 4 + Node.js + TypeScript  
- **Database**: PostgreSQL + Prisma ORM
- **Authentication**: Firebase Auth (Google OAuth)
- **Integrations**: Google Calendar, Resend Email
- **Deployment**: Docker + Nginx

## Project Structure

```
appointments/
├── packages/
│   ├── frontend/     # Next.js application
│   ├── backend/      # Fastify API
│   ├── shared/       # Common types and utilities
│   └── docs/        # Documentation
├── projectspecs.md   # Technical specifications
├── task-breakdown.md # Implementation tasks
└── README.md         # This file
```

## Documentation

- **[API Documentation](/api/)** - REST API reference
- **[Deployment Guide](/deployment/)** - Production deployment
- **[Developer Guide](/development/)** - Development setup
- **[User Guide](/user-guide/)** - End-user documentation
- **[Architecture](/architecture/)** - System design docs

## Key Features

- 🔐 **Google Authentication** - OAuth via Firebase Auth
- 📅 **Smart Booking** - 30-minute time slots with availability
- 🔄 **Calendar Sync** - Automatic Google Calendar integration  
- 📧 **Email Notifications** - Confirmations, cancellations, reminders
- 📱 **Responsive Design** - Mobile-first approach
- 🌍 **Timezone Support** - Luxembourg timezone handling
- 🐳 **Docker Ready** - Production containerized deployment

## Getting Started

See the [Development Guide](/development/getting-started) for detailed setup instructions.