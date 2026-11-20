# API reference

Base URL: `http://localhost:5000/api/v1`

Private routes accept the httpOnly `token` cookie or an `Authorization: Bearer <token>` header. JSON requests should send `Content-Type: application/json`.

## Authentication

### Register
`POST /auth/register`

```json
{ "name": "Alex", "email": "alex@example.com", "password": "at-least-8-characters" }
```

### Login
`POST /auth/login`

```json
{ "email": "alex@example.com", "password": "your-password" }
```

### Change password
`PUT /auth/password`

```json
{ "currentPassword": "old-password", "newPassword": "new-password-123" }
```

Changing a password increments the user's session version and invalidates previously issued tokens.

## Job applications

### Create
`POST /jobs`

```json
{
  "company": "Example Inc.",
  "position": "Software Engineer",
  "employmentType": "Full-time",
  "status": "Applied",
  "jobUrl": "https://example.com/careers/role",
  "description": "Role requirements and responsibilities"
}
```

### List and filter
`GET /jobs?page=1&limit=10&status=Applied&employmentType=Full-time&search=engineer`

The maximum page size is 50. Supported statuses: Wishlist, Applied, Assessment, Interview, Offer, Rejected.

### Follow-up reminders

`GET /jobs/follow-ups` returns the next scheduled follow-up dates for the authenticated user.

### Update
`PUT /jobs/:id`

Only supported application fields are accepted. Use `PATCH /jobs/:id/status` to update a stage and append to its status history.

### Export
`GET /jobs/export/csv`

Returns the authenticated user's applications as a CSV attachment. Supports the same `status`, `employmentType`, and `search` filters as the list endpoint. Spreadsheet formula-like values are escaped.

## Resumes and AI

- `POST /resumes/upload`: multipart form field `resume`, PDF only, maximum 5 MB.
- `GET /resumes`: list the user's uploaded resumes.
- `POST /ai/resume/analyze`: JSON body `{ "resumeId": "<id>" }`.
- `POST /ai/job/match`: JSON body `{ "resumeId": "<id>", "jobId": "<id>" }`.
- `POST /ai/interview/generate`: JSON body `{ "jobId": "<id>" }`.
- `GET /ai/interviews`: list saved interview practice sessions.
- `PATCH /ai/interviews/:id`: update `scheduledAt` and/or `notes`.
- `DELETE /ai/interviews/:id`: delete a saved practice session.

AI features require a server-side Gemini API key. AI-generated scores are estimates and are not hiring guarantees.