# Shared Package

Common types, utilities, and constants shared between frontend and backend packages.

## Overview

This package contains:
- Shared TypeScript type definitions
- Utility functions
- Constants and enums
- Validation schemas
- API response types

## Usage

```typescript
// Import types
import { User, Appointment, TimeSlot } from '@appointments/shared'

// Import utilities
import { formatDate, validateEmail } from '@appointments/shared'

// Import constants
import { APPOINTMENT_DURATION, TIMEZONE } from '@appointments/shared'
```

## Development

```bash
# Install dependencies
npm install

# Build types
npm run build

# Run tests
npm run test

# Lint code
npm run lint
```