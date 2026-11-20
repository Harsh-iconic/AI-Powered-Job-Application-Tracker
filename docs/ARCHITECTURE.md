# Architecture overview

## High-level request flow

```text
React + Vite browser app
        |
        | Axios /api/v1 + httpOnly session cookie
        v
Express API
  |-- Helmet, CORS, JSON parser, rate limits
  |-- Authentication and request validation
  |-- Controllers and business rules
        |
        +---- Mongoose ---- MongoDB
        |
        +---- Gemini API (resume review, job match, interview questions)
        |
        +---- Cloudinary (optional PDF storage)
```

## Backend boundaries
- `routes/`: HTTP endpoints and validation chains.
- `middleware/`: authentication, validation errors, and centralized API errors.
- `controllers/`: request orchestration and ownership checks.
- `models/`: user, job, resume, interview, and analysis schemas.
- `services/`: external Gemini and Cloudinary integrations.
- `utils/`: reusable CSV, date, status-history, session, and validation helpers.

## Data ownership
Private queries include the authenticated user's MongoDB ID. Job, resume, analysis, and interview records are read or modified only when they belong to the current user. Deleting a job removes related interview sessions and job-match analyses; deleting a resume removes related analyses.

## AI boundary
Resume text and job descriptions are untrusted user-provided data. Prompts instruct the model to treat them as source material rather than instructions. AI output is parsed as JSON, scores are bounded, and generated interview questions are checked before being saved.

## External services
- MongoDB is required for application data.
- Gemini is required only for AI features.
- Cloudinary is optional. Configure all three Cloudinary environment variables to enable remote PDF storage.