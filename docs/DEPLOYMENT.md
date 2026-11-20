# Deployment guide

CareerPilot AI can be deployed with the included Render blueprint and a static frontend host such as Vercel.

## 1. MongoDB
Create a MongoDB database and allow the deployed API service to connect. Keep the connection string private.

## 2. Backend on Render
The repository includes `render.yaml`. Create a Blueprint deployment or configure a Node web service manually:

- Root directory: `backend`
- Build command: `npm install`
- Start command: `npm start`

Set these environment variables in the Render dashboard:

| Variable | Required | Notes |
| --- | --- | --- |
| `NODE_ENV` | Yes | Set to `production` |
| `MONGO_URI` | Yes | MongoDB connection string |
| `JWT_SECRET` | Yes | Random secret with at least 32 characters |
| `CLIENT_URL` | Yes | Exact deployed frontend origin, without a path |
| `GEMINI_API_KEY` | For AI | Server-side Gemini API key |
| `GEMINI_MODEL` | No | Defaults to `gemini-3.8-flash` |
| `CLOUDINARY_CLOUD_NAME` | Optional | Configure all three Cloudinary values together |
| `CLOUDINARY_API_KEY` | Optional | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Optional | Cloudinary API secret |

Render provides `PORT` automatically. The API validates its configuration before starting.

## 3. Frontend on Vercel
Create a Vercel project from this repository:

- Root directory: `frontend`
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

Set `VITE_API_URL` to the deployed backend API base URL, for example `https://your-api.onrender.com/api/v1`.

## 4. Connect the services
1. Deploy the frontend and copy its origin.
2. Set the backend `CLIENT_URL` to that exact origin.
3. Redeploy or restart the backend after changing environment variables.
4. Open `/api/v1/health` on the backend and confirm it reports a connected database.
5. Test registration, login, resume upload, and an AI request.

Never place `JWT_SECRET`, `GEMINI_API_KEY`, MongoDB credentials, or Cloudinary secrets in frontend variables. Only variables prefixed with `VITE_` are exposed to browser code.