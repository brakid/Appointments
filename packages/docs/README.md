# Documentation Package

Complete documentation for the appointment booking system including API docs, deployment guides, and user manuals.

## Overview

This package contains:
- API documentation (OpenAPI/Swagger)
- Deployment guides
- Developer setup instructions
- User manuals and tutorials
- Architecture documentation
- Troubleshooting guides

## Documentation Structure

```
docs/
├── api/                    # API documentation
│   ├── authentication.md
│   ├── appointments.md
│   ├── users.md
│   └── provider.md
├── deployment/             # Deployment guides
│   ├── docker.md
│   ├── production.md
│   └── environment.md
├── development/            # Developer setup
│   ├── getting-started.md
│   ├── coding-standards.md
│   └── testing.md
├── user-guide/            # User documentation
│   ├── booking.md
│   ├── calendar.md
│   └── troubleshooting.md
└── architecture/          # System design docs
    ├── overview.md
    ├── database.md
    └── integrations.md
```

## Building Documentation

```bash
# Install dependencies
npm install

# Build documentation
npm run build

# Serve documentation locally
npm run dev
```

## Contributing to Documentation

When contributing to documentation:
- Follow the established format and style
- Update table of contents when adding new sections
- Test all code examples
- Include screenshots and diagrams where helpful
- Keep content up-to-date with code changes