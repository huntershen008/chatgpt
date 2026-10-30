# crates.io landing page clone

A static recreation of the crates.io landing page, based on the project's public Svelte components and styles. Only the landing page is included.

## Preview locally

From this directory, run:

```sh
python3 -m http.server 4173 --directory public
```

Open http://localhost:4173 in a browser. Keep the command running while using the preview. No dependency installation or build step is required.

Edit `public/index.html`, `public/style.css`, and `public/app.js`. The bundled base styles are in `public/base.css`; fonts and the logo are in `public/assets/`.

## Behavior and limitations

- Live homepage retrieval returned HTTP 403, so this is a rebuild from public source, not a verified capture of the production page.
- Listings use the upstream Storybook example records, with three entries per section. They are labeled sample data. Registry totals are unavailable placeholders.
- Search, crate listings, help, and account links navigate to the real external services. No registry backend, authentication, publishing, or analytics runs locally.
- Theme selection and keyboard search shortcuts run locally. Fonts and logo are bundled.
- JavaScript syntax and static HTTP asset checks passed. Browser visual, responsive, and interaction checks were unavailable in the cloud environment.
- Committing this directory does not deploy a website or enable GitHub Pages.

## Source and attribution

Reference: https://crates.io/

Source: https://github.com/rust-lang/crates.io/tree/9839ef7bf9b776dcd322a9765ab3d2809faf45ea

The layout and sample records were derived from `svelte/src/lib/components/Header.svelte`, `Footer.svelte`, `SearchForm.svelte`, `frontpage/`, and `svelte/src/lib/css/global.css` at that revision. The upstream repository snapshot and cloud-specific tools are excluded from this deliverable.

Upstream is licensed under MIT/Apache-2.0; see `LICENSE-MIT` and `LICENSE-APACHE`. Fira Sans (`@fontsource/fira-sans` version 5.3.0) is distributed under the SIL Open Font License; see `FONT-LICENSE`.
