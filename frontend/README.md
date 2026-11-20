# CareerPilot AI frontend

React 18, Vite, Tailwind CSS, React Router, Axios, Recharts, and Lucide icons.

## Setup
1. Run `npm install` from this directory.
2. Copy `.env.example` to `.env`.
3. Set `VITE_API_URL` to the backend API base URL (default: `http://localhost:5000/api/v1`).
4. Run `npm run dev` and open the local Vite URL.

## Scripts
- `npm run dev`: start the development server.
- `npm run build`: create a production build in `dist/`.
- `npm run preview`: preview the production build locally.

Only public frontend configuration belongs in `VITE_*` variables. Never place Gemini, MongoDB, JWT, or Cloudinary secrets in this directory.

The app expects the backend to allow the deployed frontend origin through `CLIENT_URL`.