# CareerPilot AI 🚀

A MERN-stack job application tracker with AI-assisted resume feedback, resume-to-job matching, and interview question generation. Built with React, Express, MongoDB, and Google's Gemini API.

## Features
- JWT authentication with httpOnly cookies and protected user data.
- Job application CRUD, search, status filtering, and dashboard analytics.
- PDF resume upload and text extraction.
- AI resume feedback and job-description matching.
- Role-specific interview question generation and analysis history.
- Responsive React dashboard with charts.

## Requirements
Node.js 18+, MongoDB, and a Gemini API key for AI features. Cloudinary is optional; without it, resume files are processed in memory and extracted text is stored in MongoDB.

## Run locally
1. Copy `backend/.env.example` to `backend/.env` and configure `MONGO_URI`, a long random `JWT_SECRET`, and `CLIENT_URL`.
2. Add `GEMINI_API_KEY` to enable AI endpoints. Configure Cloudinary credentials for remote PDF storage.
3. Install dependencies: `npm install`, `npm install --prefix backend`, and `npm install --prefix frontend`.
4. Start both apps with `npm run dev` from the repository root.
5. Frontend: http://localhost:5173 · API health: http://localhost:5000/api/v1/health

## API overview
Base path `/api/v1`.

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/auth/register` | Create account |
| POST | `/auth/login` | Sign in |
| GET | `/auth/me` | Current user |
| POST | `/auth/logout` | Clear session |
| GET/POST | `/jobs` | List/create applications |
| GET/PUT/DELETE | `/jobs/:id` | Read/update/delete application |
| PATCH | `/jobs/:id/status` | Move application stage |
| GET | `/jobs/stats` | Dashboard statistics |
| POST | `/resumes/upload` | Upload PDF resume |
| GET | `/resumes` | List resumes |
| DELETE | `/resumes/:id` | Delete resume |
| POST | `/ai/resume/analyze` | AI resume feedback |
| POST | `/ai/job/match` | Compare resume to saved job |
| POST | `/ai/interview/generate` | Generate practice questions |
| GET | `/ai/history` | Analysis history |

Private endpoints require the httpOnly session cookie. The API also accepts a Bearer token for API clients.

## Security and limitations
- Never commit `.env` files or expose the Gemini key in the browser.
- Resume uploads are restricted to PDF and 5 MB. Treat uploaded documents as sensitive personal data.
- AI scores are approximate guidance, not official ATS scores or hiring predictions.
- Configure HTTPS and production cookie/CORS settings when deploying frontend and API on separate domains.
- Add a production-grade file malware scanning and retention policy before accepting public uploads at scale.

## Deployment
Deploy `backend` as a Node service and `frontend` as a static Vite site. Set `CLIENT_URL` to the deployed frontend origin and `VITE_API_URL` to the deployed API `/api/v1` URL. Use MongoDB Atlas and configure Gemini/Cloudinary environment variables in the hosting dashboard.

## License
MIT
