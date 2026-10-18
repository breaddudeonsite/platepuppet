# Plate Puppet (PWA)

Mesh-warp cutout animator + director. Runs fully in the browser, installs as an app, works offline after the first load.

## Put it on GitHub Pages
1. Create a repo and upload everything in this folder (keep `icons/`; include `.nojekyll`).
2. Repo **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, folder = `/ (root)`.
3. Open `https://<you>.github.io/<repo>/` (HTTPS is required for install + offline).
4. Install: Chrome/Edge show **Install app** (also a button in the page header). iPhone/iPad: Share → *Add to Home Screen*.

## Using your own audio
Tap **🎵 Upload song** (MP3, WAV, M4A, OGG, AAC, FLAC). It plays in sync with the timeline and is included in exported videos. Then **Detect BPM**. Keep tracks under ~25 MB for smooth saving on phones.

## Updating
Bump `V` in `sw.js` (e.g. `pp-v2`) whenever you change files so installed copies refresh.

## Notes
- Projects autosave to the browser (IndexedDB). Use **Export project file** to keep a backup.
- Video export uses MediaRecorder (Chrome, Edge, Firefox, Safari 14.3+). Phones default to 540p.
