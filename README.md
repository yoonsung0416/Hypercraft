# Hypercraft — Holographic Edition

## Run locally
1. Install Node.js.
2. In this folder run `npm install`
3. Run `npm start`
4. Open `http://localhost:3000`

## Included in this revision
- One-second animated holographic rainbow outlines on menu/settings controls (login submit button excluded).
- Automatic landscape-friendly layout and a title-screen orientation toggle. On supported mobile browsers it attempts native landscape locking; a CSS rotation fallback is used when unavailable.
- A title-screen Save button beside the language selector. It stores the current player's game profile (language, display settings, music state and last world configuration) through the server API in `data/users.json`, and restores it after the same browser session logs in again.

## Important prototype limitations
This remains a prototype, not a production account system. Existing account login still uses browser `localStorage` and is not secure. The profile API is also a prototype and must be protected by server-side authentication/authorization before public deployment; do not use it for sensitive or personal data. The JSON file persists on a normal server disk, but some hosting platforms use ephemeral storage unless a persistent disk or database is configured. Actual 3D world generation and multiplayer are not implemented yet.

## Deploy to Render
1. Push the project to a GitHub repository.
2. In Render choose **New → Web Service**.
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Configure a persistent disk or database before expecting saved profiles to survive redeploys/restarts.
