# Deployment Guide

This guide explains how to deploy the Cliqqing documentation website to GitHub Pages.

## Prerequisites

1. A GitHub repository for the documentation
2. GitHub Actions enabled for the repository

## Setup Steps

### 1. Update Configuration

Edit `docusaurus.config.js` and update these values:

```javascript
url: 'https://yourusername.github.io',
baseUrl: '/cliqqing-docs/',
organizationName: 'yourusername',
projectName: 'cliqqing-docs',
```

Replace:
- `yourusername` with your GitHub username
- `cliqqing-docs` with your repository name (if different)

### 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/cliqqing-docs.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. Save

### 4. Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build the site when you push to `main`
- Deploy to the `gh-pages` branch
- Make the site available at `https://yourusername.github.io/cliqqing-docs/`

## Manual Deployment

If you prefer to deploy manually:

```bash
npm run build
npm run deploy
```

This uses the `gh-pages` package to deploy directly.

## Custom Domain

To use a custom domain:

1. Add a `CNAME` file to `static/` with your domain:
   ```
   docs.yourdomain.com
   ```

2. Configure DNS:
   - Add a CNAME record pointing to `yourusername.github.io`

3. Update `docusaurus.config.js`:
   ```javascript
   url: 'https://docs.yourdomain.com',
   baseUrl: '/',
   ```

## Troubleshooting

### Site not updating

- Check GitHub Actions workflow status
- Verify `gh-pages` branch exists
- Check repository Pages settings

### 404 errors

- Verify `baseUrl` in `docusaurus.config.js` matches your repository name
- Ensure trailing slash is correct

### Build failures

- Check Node.js version (requires 18+)
- Verify all dependencies are installed
- Check build logs in GitHub Actions

## Related Documentation

- [Docusaurus Deployment](https://docusaurus.io/docs/deployment)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

