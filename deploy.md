# GitHub Pages Deployment Guide

## Quick Deployment Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

## Manual Deployment (Alternative)

If you prefer manual deployment:

1. Build the project: `npm run build`
2. Copy the contents of the `dist` folder
3. Push to the `gh-pages` branch of your repository

## GitHub Actions (Automatic)

The repository now includes a GitHub Actions workflow that will automatically deploy your site when you push to the main branch.

## Important Notes

- The Vite config has been updated with the correct base path: `/raju-shah.github.io/`
- Make sure GitHub Pages is enabled in your repository settings
- The site will be available at: `https://rajushah404.github.io/raju-shah.github.io/`

## Troubleshooting

If you still get MIME type errors:
1. Clear your browser cache
2. Make sure the base path in `vite.config.ts` matches your repository name
3. Check that GitHub Pages is serving from the `gh-pages` branch
