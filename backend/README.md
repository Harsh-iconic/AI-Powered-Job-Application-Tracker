# CareerPilot API

Express/MongoDB API for CareerPilot AI. Copy `.env.example` to `.env`, configure MongoDB and secrets, then run `npm install`, `npm test`, and `npm run dev`.

All private routes require an httpOnly JWT cookie (or Bearer token). Resume uploads accept PDF files up to 5 MB. Gemini features require `GEMINI_API_KEY`; `GEMINI_MODEL` defaults to `gemini-3.8-flash`. Optional Cloudinary credentials enable remote resume storage.

API prefix: `/api/v1`. Health: `/api/v1/health` (reports MongoDB connectivity).

AI endpoints are rate-limited and validate referenced MongoDB IDs. Generated interview sessions can be listed at `GET /api/v1/ai/interviews` and deleted at `DELETE /api/v1/ai/interviews/:id`. Job list filters support `page`, `limit` (maximum 50), `status`, `employmentType`, and `search`.
