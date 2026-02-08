## 📝 Description
Brief description of changes and their purpose.

## 🎯 Type of Change
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update (changes to documentation only)
- [ ] Refactoring (code change that neither fixes a bug nor adds a feature)
- [ ] Performance improvement (code change that improves performance)
- [ ] Code style improvements (formatting, missing semi colons, etc.; no code change)

## 🧪 Testing
- [ ] All tests pass (`npm run test`)
- [ ] New tests added for new functionality (`npm run test:coverage`)
- [ ] Manual testing completed in development environment
- [ ] Cross-browser testing completed (if frontend changes)
- [ ] Mobile responsiveness tested (if UI changes)

## 📋 Definition of Done Checklist
- [ ] Code follows project style guidelines (`npm run lint`)
- [ ] Self-review completed - I have read through my code
- [ ] Documentation updated (if applicable)
- [ ] CHANGELOG.md updated (for user-facing changes)
- [ ] Dependencies checked and updated if needed
- [ ] Security considerations reviewed (if authentication/data changes)
- [ ] Performance impact considered (if database/api changes)

## 🔗 Related Issues
Closes: #[issue number]
Related to: #[issue number]

## 📦 Affected Packages
- [ ] **frontend** (`packages/frontend/`)
- [ ] **backend** (`packages/backend/`)
- [ ] **shared** (`packages/shared/`)
- [ ] **docs** (`packages/docs/`)

## 🚀 Deployment Considerations
- [ ] Database migrations required (if backend changes)
- [ ] Environment variables needed
- [ ] Build process changes
- [ ] Breaking changes that affect API contracts

## 📸 Screenshots/Videos
<!-- Add screenshots or videos if your PR contains UI changes -->

## 🔍 Additional Notes
<!-- Any additional context for reviewers -->

---

## Review Checklist for Reviewers

### Code Quality
- [ ] Code is readable and follows TypeScript best practices
- [ ] Variable names are descriptive and consistent
- [ ] Error handling is appropriate
- [ ] No console.log statements left in production code

### Security
- [ ] No hardcoded secrets or sensitive data
- [ ] Input validation is present
- [ ] Authentication/authorization is correct (if applicable)
- [ ] SQL injection protection is in place (if database changes)

### Performance
- [ ] No unnecessary database queries
- [ ] Appropriate use of caching (if applicable)
- [ ] No memory leaks or performance issues
- [ ] Bundle size considered (if frontend changes)

### Testing
- [ ] Tests cover new functionality
- [ ] Tests cover edge cases
- [ ] Test names are descriptive
- [ ] No flaky tests introduced

### Documentation
- [ ] Code comments are clear and necessary
- [ ] API documentation is updated (if applicable)
- [ ] README/usage examples are updated
- [ ] User-facing documentation is clear