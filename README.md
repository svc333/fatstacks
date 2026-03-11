# Fat Stacks Investments

Static landing page for `fatstacksinvestments.com`.

## Cloudflare Pages Deploy

Deploy this repo with **Cloudflare Pages**, not the Worker deploy form.

- Framework preset: `None`
- Build command: leave blank
- Build output directory: `/`
- Root directory: leave blank, or use `/` if Cloudflare requires a value
- Node version / environment variables: none required

## Repo Structure

- `index.html`
- `style.css`
- `script.js`

## Deploy Steps

1. Open Cloudflare and go to **Workers & Pages**.
2. Create a new **Pages** project.
3. Connect GitHub repo `svc333/fatstacks`.
4. Use the deploy settings above.
5. Click **Save and Deploy**.
6. After the first successful deploy, attach `fatstacksinvestments.com` as a custom domain.

## Validation Checklist

- The home page loads successfully.
- The money rain animation is visible.
- `style.css` and `script.js` load without errors.
- The site still looks good on mobile.
