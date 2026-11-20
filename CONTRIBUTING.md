# Contributing to CareerPilot AI

Thanks for helping improve CareerPilot AI.

## Local setup
1. Install Node.js 18 or newer and MongoDB.
2. Copy `backend/.env.example` to `backend/.env` and set the required values.
3. Install dependencies with `npm install --prefix backend` and `npm install --prefix frontend`.
4. Run the API and frontend in separate terminals with `npm run dev --prefix backend` and `npm run dev --prefix frontend`.

## Before opening a pull request
- Run `npm test --prefix backend`.
- Run `npm run build --prefix frontend`.
- Keep changes focused and describe user-visible behavior.
- Add or update tests when changing backend utilities or business rules.
- Never commit environment files, API keys, passwords, or real resume documents.

## Commit messages
Use short conventional prefixes such as `feat:`, `fix:`, `test:`, `docs:`, and `refactor:`.

## Pull requests
Explain the problem, summarize the implementation, list verification steps, and include screenshots for meaningful UI changes.