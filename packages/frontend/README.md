# Frontend Package

Next.js 15 frontend application with React 19 and TypeScript for the appointment booking system.

## Overview

This package contains the complete frontend implementation including:
- User authentication with Firebase
- Appointment booking interface
- Calendar components
- User dashboard
- Responsive design with Tailwind CSS

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.x
- **State Management**: Zustand
- **Calendar**: FullCalendar
- **Forms**: React Hook Form + Zod
- **HTTP Client**: Fetch API (Next.js built-in)

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
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # React components
├── lib/                # Utility functions
├── stores/             # Zustand state management
├── types/              # TypeScript type definitions
└── styles/             # Global styles and CSS
```