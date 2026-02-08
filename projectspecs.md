# Appointment Booking System - Project Specification

## Project Overview
A TypeScript-based Node.js full-stack appointment booking system for consulting sessions with Google authentication and calendar integration. The system enables customers to book 30-minute consulting slots with a single provider.

## Business Requirements

### User Stories
- **As a customer**, I want to register using my Google account so I can easily book appointments
- **As a customer**, I want to view available time slots and book a 30-minute consultation
- **As a customer**, I want my appointments to automatically appear in my Google Calendar
- **As a customer**, I want to receive email confirmations and reminders for my appointments
- **As the provider**, I want to manage my availability and view upcoming appointments

### Functional Requirements
- User registration via Google OAuth only
- 30-minute appointment slots
- Calendar-based booking interface
- Google Calendar integration (client accounts)
- Email notifications (booking, cancellation, 24-hour reminder)
- Appointment management (view, cancel, reschedule)
- Provider availability management
- Luxembourg timezone handling

### Non-Functional Requirements
- Mobile-responsive web application
- TypeScript throughout (strict mode)
- Docker deployment ready
- Self-hosted deployment
- Single provider (single consultant)
- No payment processing in v1

## Technical Architecture

### System Overview
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │     Backend     │    │   External      │
│   Next.js       │◄──►│   Fastify       │◄──►│   Services      │
│   React         │    │   Node.js       │    │   Firebase      │
│   TypeScript    │    │   TypeScript    │    │   Google API    │
└─────────────────┘    └─────────────────┘    │   Resend        │
                                │            └─────────────────┘
                                ▼
                       ┌─────────────────┐
                       │    Database     │
                       │   PostgreSQL    │
                       │   Prisma ORM    │
                       └─────────────────┘
```

### Data Flow
1. User authenticates via Firebase Auth (Google OAuth)
2. Frontend displays available time slots from backend
3. User selects slot → Backend creates appointment
4. Backend creates Google Calendar event for user
5. Backend sends confirmation email via Resend
6. Scheduled jobs send 24-hour reminders

## Technology Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5.x (strict mode)
- **Styling**: Tailwind CSS 3.x
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod
- **Calendar Component**: FullCalendar
- **Date Handling**: date-fns
- **HTTP Client**: Fetch API (Next.js built-in)

### Backend
- **Runtime**: Node.js 20.x
- **Framework**: Fastify 4.x
- **Language**: TypeScript 5.x (strict mode)
- **Database**: PostgreSQL 15+
- **ORM**: Prisma 5.x
- **Authentication**: Firebase Admin SDK
- **Validation**: Zod
- **Email**: Resend API
- **Calendar**: Google Calendar API (Node.js client)
- **Cron Jobs**: node-cron
- **Environment**: dotenv

### DevOps & Deployment
- **Containerization**: Docker & Docker Compose
- **Reverse Proxy**: Nginx
- **Process Manager**: PM2
- **Environment**: Development, Staging, Production
- **Code Quality**: ESLint + Prettier
- **Testing**: Jest + Supertest

## Database Schema

### Prisma Schema
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id           String  @id @default(cuid())
  email        String  @unique
  name         String
  googleUid    String  @unique
  timezone     String  @default("Europe/Luxembourg")
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
  
  appointments Appointment[]
  
  @@map("users")
}

model Appointment {
  id           String    @id @default(cuid())
  userId       String
  startTime    DateTime
  endTime      DateTime
  status       AppointmentStatus @default(SCHEDULED)
  googleEventId String?  @unique
  notes        String?
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt
  
  user         User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@map("appointments")
}

model TimeSlot {
  id           String   @id @default(cuid())
  startTime    DateTime
  endTime      DateTime
  isAvailable  Boolean  @default(true)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
  
  @@map("time_slots")
}

enum AppointmentStatus {
  SCHEDULED
  COMPLETED
  CANCELLED
  NO_SHOW
}
```

## API Design

### Authentication Endpoints
```
POST /api/auth/google     - Google OAuth callback
GET  /api/auth/me         - Get current user
POST /api/auth/logout     - Logout user
```

### User Endpoints
```
GET    /api/users/profile     - Get user profile
PUT    /api/users/profile     - Update user profile
DELETE /api/users/account     - Delete user account
```

### Appointment Endpoints
```
GET    /api/appointments           - Get user appointments
POST   /api/appointments           - Create appointment
GET    /api/appointments/:id       - Get appointment details
PUT    /api/appointments/:id       - Update appointment
DELETE /api/appointments/:id       - Cancel appointment
GET    /api/appointments/available - Get available time slots
```

### Provider Endpoints (Protected)
```
GET    /api/provider/appointments  - Get all appointments
GET    /api/provider/availability  - Get availability settings
PUT    /api/provider/availability  - Update availability
POST   /api/provider/timeslots     - Generate time slots
```

## Frontend Architecture

### Page Structure (Next.js App Router)
```
app/
├── (auth)/
│   ├── login/
│   │   └── page.tsx
│   └── callback/
│       └── page.tsx
├── dashboard/
│   ├── page.tsx
│   └── appointments/
│       ├── page.tsx
│       └── [id]/
│           └── page.tsx
├── booking/
│   └── page.tsx
├── profile/
│   └── page.tsx
├── api/            # API routes
│   ├── auth/
│   ├── appointments/
│   └── users/
├── globals.css
├── layout.tsx
└── page.tsx        # Landing/booking page
```

### Component Structure
```
components/
├── ui/                     # Reusable UI components
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Modal.tsx
│   └── Calendar.tsx
├── layout/
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   └── Footer.tsx
├── auth/
│   ├── GoogleLoginButton.tsx
│   └── ProtectedRoute.tsx
├── appointments/
│   ├── AppointmentCard.tsx
│   ├── BookingCalendar.tsx
│   ├── AppointmentForm.tsx
│   └── AppointmentList.tsx
└── provider/
    ├── AvailabilityManager.tsx
    └── AppointmentDashboard.tsx
```

### State Management (Zustand)
```typescript
// stores/auth-store.ts
interface AuthState {
  user: User | null
  isLoading: boolean
  login: (googleToken: string) => Promise<void>
  logout: () => void
}

// stores/appointment-store.ts
interface AppointmentState {
  appointments: Appointment[]
  availableSlots: TimeSlot[]
  fetchAppointments: () => Promise<void>
  createAppointment: (slot: TimeSlot) => Promise<void>
  cancelAppointment: (id: string) => Promise<void>
}
```

## Integration Requirements

### Firebase Authentication
- Google OAuth only
- Client-side SDK for frontend
- Admin SDK for backend verification
- Session management with JWT tokens

### Google Calendar Integration
- OAuth2 flow for calendar access
- Create events on appointment booking
- Update/cancel events on appointment changes
- Event details: consultation link, notes, reminder

### Email Service (Resend)
- Templates: booking confirmation, cancellation, reminder
- HTML email templates with React components
- Automated 24-hour reminders via cron job
- Email scheduling and retry logic

### Timezone Handling
- All times stored in UTC in database
- Frontend displays in Europe/Luxembourg
- date-fns for timezone conversions
- Consistent timezone across application

## Docker Configuration

### Dockerfile (Multi-stage)
```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma
EXPOSE 3000
CMD ["npm", "start"]
```

### Docker Compose
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/appointments
      - NODE_ENV=production
    depends_on:
      - db
      - redis
  
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: appointments
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
    volumes:
      - postgres_data:/var/lib/postgresql/data
  
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
  
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - app

volumes:
  postgres_data:
```

## Implementation Phases

### Phase 1: Core Infrastructure (Week 1-2)
1. **Project Setup**
   - Next.js + TypeScript configuration
   - Prisma schema and database setup
   - Docker development environment
   - CI/CD pipeline basics

2. **Authentication System**
   - Firebase Auth integration
   - Google OAuth flow
   - Protected routes middleware
   - User session management

3. **Basic UI Framework**
   - Tailwind CSS setup
   - Core components library
   - Layout and navigation
   - Responsive design system

### Phase 2: Booking System (Week 3-4)
1. **Appointment Management**
   - Time slot generation logic
   - Booking API endpoints
   - Appointment CRUD operations
   - Availability management

2. **Calendar Interface**
   - Interactive booking calendar
   - Time slot selection
   - Appointment confirmation flow
   - User appointment dashboard

3. **Google Calendar Integration**
   - OAuth2 setup and token management
   - Event creation/update/deletion
   - Calendar sync logic
   - Error handling for calendar API

### Phase 3: Notifications & Polish (Week 5-6)
1. **Email System**
   - Resend API integration
   - Email templates (React)
   - Automated reminders (cron jobs)
   - Email delivery tracking

2. **User Experience**
   - Loading states and error handling
   - Success notifications
   - Form validation
   - Micro-interactions

3. **Provider Features**
   - Availability configuration
   - Appointment overview dashboard
   - Bulk time slot generation
   - Export functionality

### Phase 4: Testing & Deployment (Week 7-8)
1. **Testing**
   - Unit tests (Jest)
   - Integration tests
   - E2E tests (Playwright)
   - API testing

2. **Production Deployment**
   - Production Docker setup
   - Database migrations
   - Environment configuration
   - Monitoring and logging

3. **Documentation**
   - API documentation
   - User guide
   - Deployment guide
   - Developer setup instructions

## Security Considerations

### Authentication & Authorization
- Firebase token validation on all API calls
- CORS configuration for frontend domain
- Rate limiting on authentication endpoints
- Secure cookie handling for sessions

### Data Protection
- Input validation with Zod schemas
- SQL injection prevention via Prisma
- XSS prevention in React components
- CSRF protection on form submissions

### API Security
- API key management for external services
- Request/response logging (without sensitive data)
- Error message sanitization
- Environment variable security

## Performance Optimization

### Frontend Optimization
- Next.js automatic code splitting
- Image optimization with next/image
- Lazy loading for heavy components
- Service worker for caching strategies

### Backend Optimization
- Database query optimization
- Redis caching for frequently accessed data
- Connection pooling for PostgreSQL
- API response compression

### Deployment Optimization
- Docker image size optimization
- CDN configuration for static assets
- Database indexing strategy
- Load balancing preparation

## Monitoring & Maintenance

### Application Monitoring
- Health check endpoints
- Error tracking and reporting
- Performance metrics collection
- User analytics integration

### Database Maintenance
- Regular backups strategy
- Query performance monitoring
- Connection pool optimization
- Data retention policies

### External Service Monitoring
- Firebase Auth status monitoring
- Google Calendar API quota tracking
- Email deliverability monitoring
- External service fallback strategies

## Future Considerations (v2 and beyond)

### Mobile Application
- React Native or Flutter
- API optimization for mobile
- Offline functionality
- Push notifications

### Advanced Features
- Multiple providers support
- Payment processing integration
- Video consultation integration
- Advanced scheduling rules

### Scaling Considerations
- Microservices architecture migration
- Database scaling strategies
- Geographic distribution
- Advanced caching strategies

---

## Project Success Metrics

### Technical Metrics
- < 2 second page load times
- 99.9% uptime for booking system
- < 500ms API response times
- Zero data loss incidents

### User Experience Metrics
- < 3 steps to complete booking
- 95% successful calendar integration
- < 24 hours response time for support
- 90% user retention rate

---

This specification serves as the comprehensive guide for implementing the appointment booking system. All development should adhere to these requirements and technical decisions unless explicitly modified through the change management process.