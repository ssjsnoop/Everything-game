# EVERYTHING — installable phone edition

This is the existing EVERYTHING game, with GitHub Pages phone installation added.

## Publish to GitHub Pages
1. Open the GitHub repository for your game.
2. Upload **index.html**, **manifest.webmanifest**, **sw.js**, and the **icons** folder exactly as arranged in this ZIP. Replace the old `index.html`.
3. Commit the changes, and allow GitHub Pages to publish. Keep all files in the same published folder (usually the repository root).
4. Open the **published GitHub Pages HTTPS URL** on an Android phone in Chrome. On the game's opening screen, tap **INSTALL THIS GAME ON YOUR PHONE**. Accept the install prompt when offered. Otherwise, tap Chrome's ⋮ menu > Install app / Add to Home screen.
5. On iPhone, open in Safari, tap Share > Add to Home Screen.
6. Once installed and opened online at least once, the game should also launch offline. Local save data lives on that phone/browser; use the game's Export Save option for backups or moving devices.

## Important
- `index.html` alone still launches as a webpage, but **is not enough for installable PWA behavior**. Keep the other files beside it on GitHub Pages.
- The Install button is visible to site visitors, not just the repository owner.
- GitHub's **repository file preview** is not the published game; the actual GitHub Pages link is needed.
- The app is a PWA (website installed on home screen), **not a Google Play APK**.
- Browser support varies. When the install prompt is unavailable, the game shows platform-specific instructions.
- On subsequent upgrades, replace `index.html` and bump the cache version in `sw.js` to refresh offline copies.
