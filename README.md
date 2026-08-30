# BallValve

An industrial flow-control brand site built with Astro and deployed to GitHub Pages.

## Technology

- Astro static site generation with all pages rendered at build time
- Product data is managed in `src/content/products` and generates static detail routes
- Product, industry, technical blog, manufacturing, quality, brand, and contact sections
- Component-based responsive design
- Inquiry form opens the visitor's email client without collecting or storing data
- GitHub Actions deployment to GitHub Pages

## Local Preview

From the repository root:

```bash
npm install
npm run dev
```

Open the local URL printed by the terminal.

## GitHub Pages Deployment

1. Push the repository to GitHub using `main` as the default branch.
2. Under **Settings → Pages**, select **GitHub Actions** in **Build and deployment**.
3. Pushes to `main` deploy the site through `.github/workflows/pages.yml`.

Before the first deployment, set `site` in `astro.config.mjs` to the real GitHub Pages domain, such as `https://<user>.github.io`. The workflow automatically uses the repository name as the project-page path prefix.
