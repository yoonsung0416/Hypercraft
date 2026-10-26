# Hypercraft — Holographic Edition

## Run locally
1. Install Node.js.
2. In this folder run `npm install`
3. Run `npm start`
4. Open `http://localhost:3000`

## Deploy to Render
1. Push the project to a GitHub repository.
2. In Render choose **New → Web Service** (this project uses Express).
3. Connect the repository.
4. Build Command: `npm install`
5. Start Command: `npm start`
6. Deploy. Render will provide an `onrender.com` URL.

## Important
This is a front-end prototype. User accounts and passwords are stored in the browser's localStorage in plaintext, so this is not secure and must not be used for real accounts. For a public service, add server-side authentication, password hashing, rate limiting, and a database. Single-player and multiplayer buttons are visual placeholders, not a playable Minecraft clone or multiplayer implementation.
