# Appointment Booking System

A TypeScript-based Node.js full-stack appointment booking system for consulting sessions with Google authentication and calendar integration.

## 🚀 Overview

This monorepo contains the complete appointment booking system that enables customers to book 30-minute consulting slots with a single provider. The system includes Google OAuth authentication, Google Calendar integration, and email notifications.

## 📋 Project Structure

```
appointments/
├── projectspecs.md          # Detailed project specifications
├── task-breakdown.md         # Implementation task breakdown with design diagrams
├── README.md                # This file
├── .gitignore              # Git ignore rules
└── packages/               # Monorepo packages (to be created)
    ├── frontend/           # Next.js frontend application
    ├── backend/            # Fastify backend API
    ├── shared/             # Shared types and utilities
    └── docs/              # Documentation
```

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **UI**: React 19 + TypeScript 5.x
- **Styling**: Tailwind CSS 3.x
- **State Management**: Zustand
- **Calendar**: FullCalendar
- **Forms**: React Hook Form + Zod

### Backend
- **Runtime**: Node.js 20.x
- **Framework**: Fastify 4.x + TypeScript 5.x
- **Database**: PostgreSQL + Prisma ORM
- **Authentication**: Firebase Admin SDK
- **Email**: Resend API
- **Calendar**: Google Calendar API

### DevOps & Deployment
- **Containerization**: Docker & Docker Compose
- **Reverse Proxy**: Nginx
- **Process Manager**: PM2
- **Testing**: Jest + Supertest + Playwright

## 📊 Key Features

- 🔐 **Google Authentication** - OAuth via Firebase Auth
- 📅 **Smart Booking** - 30-minute time slots with availability management
- 🔄 **Calendar Sync** - Automatic Google Calendar integration
- 📧 **Email Notifications** - Booking confirmations, cancellations, reminders
- 📱 **Responsive Design** - Mobile-first approach
- 🌍 **Timezone Support** - Luxembourg timezone handling
- 🐳 **Docker Ready** - Production containerized deployment

## 📝 Documentation

- **[Project Specifications](projectspecs.md)** - Complete technical requirements and architecture
- **[Task Breakdown](task-breakdown.md)** - Detailed implementation plan with design diagrams
- **API Documentation** - (Coming in `/packages/docs/`)
- **Deployment Guide** - (Coming in `/packages/docs/`)

## 🚦 Implementation Status

### Milestones
- [ ] **Milestone 1**: Foundation & Authentication (Weeks 1-2)
- [ ] **Milestone 2**: Core Booking System (Weeks 3-4)
- [ ] **Milestone 3**: Integrations & Notifications (Weeks 5-6)
- [ ] **Milestone 4**: Testing, Deployment & Documentation (Weeks 7-8)

### Current Phase: Project Initialization
- [x] Repository initialization
- [x] Documentation creation
- [x] Monorepo structure planning
- [ ] Package setup (frontend, backend, shared)
- [ ] Development environment configuration

## 🛠️ Development Setup (Coming Soon)

Once the monorepo packages are created:

```bash
# Clone and install dependencies
git clone <repository-url>
cd appointments
npm install

# Start development environment
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```

## 📋 System Requirements

- **Node.js**: 20.x or higher
- **PostgreSQL**: 15.x or higher
- **Redis**: 7.x or higher (for caching)
- **Docker**: 20.x or higher (for containerization)

## 🔐 Security Features

- JWT token-based authentication
- Google OAuth integration only
- Input validation with Zod schemas
- CORS configuration
- Rate limiting on API endpoints
- Environment variable security
- SQL injection prevention via Prisma

## 📈 Performance Goals

- Page load time: < 2 seconds
- API response time: < 500ms
- System uptime: 99.9%
- Database query time: < 100ms

## 🤝 Contributing

This project follows a structured development approach. Please refer to the [task breakdown](task-breakdown.md) for detailed implementation guidelines and agent coordination.

### Development Workflow

1. Review project specifications
2. Follow task breakdown milestones
3. Implement features per task requirements
4. Test thoroughly
5. Update documentation
6. Submit for review

## 📄 License

[License information to be added]

## 📞 Contact

[Contact information to be added]

---

**Note**: This is a monorepo project. The complete application structure will be established as we progress through the implementation milestones.