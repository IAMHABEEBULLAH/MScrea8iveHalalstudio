# MS Cre8ive Halal Studios: landing page

React + Vite single-page site in the studio's blue, yellow and white.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Edit it

- `src/data.js`: services, values, nav links and **contact details**
  (replace the `[YOUR EMAIL]` and `[YOUR NUMBER]` placeholders).
- `src/styles.css`: colours live in the `:root` tokens at the top
  (`--blue`, `--yellow`, `--navy`).
- `src/components/`: one component per section.
- `public/logo.png`: the studio logo used in the header and footer.

## Deploy

Any static host works (Netlify, Vercel, Cloudflare Pages). Build command
`npm run build`, output directory `dist`.
