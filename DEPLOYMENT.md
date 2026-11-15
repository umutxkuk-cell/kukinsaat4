# KUK Insaat - Cloudflare Pages deployment

This is a Vite/React single-page app. No Pages Functions or Worker are needed.

## Required Pages settings

- Framework preset: Vite (or None with the settings below).
- Root directory: repository root (`.`).
- Install: `npm ci`.
- Build command: `npm run build`.
- Build output directory: `dist`.
- Node.js: 22, or at least 20.19 (required by Vite 7).
- Production branch: the branch containing these updated files.

The built `dist/index.html` contains the client code, styles and architectural
visuals. `dist/favicon.svg`, `dist/og-cover.jpg`, `dist/robots.txt`, and
`dist/sitemap.xml` must be uploaded alongside it.

The project deliberately has **no** top-level `404.html` or wildcard
`_redirects`: Cloudflare Pages serves the app shell for deep URLs when these
are absent. React Router renders the intended page or its in-app not-found
screen. A `/* /index.html 200` redirect is invalid on Pages (redirect loop).

## Publishing the correct version

The current public `https://kukinsaat.com` site and the public GitHub repository
`umutxkuk-cell/kukinsaat3` can contain older code than this working directory.
Building locally does **not** update either one. Push these updated files to
the repository connected to the existing Pages project and trigger a new
deployment, or use Direct Upload to that project:

```sh
npm ci
npm run build
npx wrangler pages deploy dist --project-name <EXISTING_PAGES_PROJECT_NAME>
```

The project name must be obtained from the Cloudflare dashboard; do not create
a different project by accident. Check that the deployment lists the new
`dist/index.html` and that `/kurumsal`, `/hizmetlerimiz`, and `/projelerimiz`
display their own headings after deployment. If the live homepage still shows
an older title, the live Pages project was not updated.

The canonical production domain is `https://kukinsaat.com`. If
`VITE_SITE_URL` is set in the Pages dashboard, ensure it has this exact value
or remove the override. The `www` subdomain currently needs its own DNS and
Pages domain configuration before it can be used.

EmailJS uses the public IDs preserved in `src/config/emailjs.ts`; confirm the
production origin is allowed in the EmailJS dashboard and perform one
authorized test message after publishing. No private key belongs in Vite
environment variables or frontend code.