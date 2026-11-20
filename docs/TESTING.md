# Testing guide

## Run checks locally

From the repository root:

```bash
npm test --prefix backend
npm run build --prefix frontend
```

Backend tests use Node's built-in test runner. Utility tests cover filename sanitization, CSV escaping, date boundaries, session versioning, status history, job filters, dashboard statistics, environment validation, and AI JSON parsing. API-level tests exercise health responses, CORS behavior, security headers, validation, and protected routes without requiring a live MongoDB database.

## Continuous integration
The `Validate CareerPilot` workflow runs backend tests and JavaScript syntax checks, then builds the frontend on Node.js 22 and 24.

The CodeQL workflow performs JavaScript / TypeScript security analysis on pushes and pull requests and runs on a weekly schedule.

## Before merging
- Ensure all backend tests pass.
- Ensure the Vite production build succeeds.
- Review the changed files for secrets and personal resume data.
- Add tests for new reusable business logic and API validation.