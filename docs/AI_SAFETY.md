# AI feature safety notes

CareerPilot AI uses Gemini for resume feedback, resume-to-job matching, and interview practice prompts.

## Input handling
- Resume text and job descriptions are user-provided, untrusted content.
- Prompts tell the model not to follow instructions embedded in resume or job text.
- Job context is serialized as JSON before it is included in the interview prompt.
- Resume uploads are limited to PDF files and a 5 MB maximum; file signatures are checked before parsing.

## Output handling
- Gemini responses must parse as a non-empty JSON object.
- Interview questions are checked and bounded before they are saved.
- Numeric scores are clamped to the 0–100 range.
- AI feedback is advisory. Scores are estimates, not ATS results, hiring predictions, or guarantees.

## Privacy and credentials
- Gemini API keys stay on the backend.
- AI history is scoped to the authenticated user.
- Deleting a resume removes its associated analysis records.
- Do not send real personal resume data to a public issue or pull request.

## Human review
Users should verify generated skills, recommendations, and suggested answers before relying on them in an application or interview.