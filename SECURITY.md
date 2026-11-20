# Security policy

## Supported versions
The latest version on the `main` branch is the supported development version.

## Reporting a vulnerability
Please do not publish exploitable vulnerabilities, credentials, access tokens, or private user data in public issues. Use GitHub's private vulnerability reporting / Security Advisories for this repository when available.

Include the affected component, steps to reproduce, and potential impact. Remove all real resume documents and personal information from reports.

## Handling sensitive data
- Keep API keys and database credentials in environment variables.
- Never commit `.env` files or production secrets.
- Treat uploaded resumes and extracted text as sensitive personal information.
- Rotate any credential that is accidentally exposed.