# GitHub Pages Setup Guide

If you're seeing a 404 error when accessing your GitHub Pages site, follow these steps:

## Step 1: Check GitHub Actions Workflow

1. Go to your repository on GitHub
2. Click on the "Actions" tab
3. Check if the workflow has run and if it completed successfully
4. If it failed, check the error logs

## Step 2: Configure GitHub Pages Settings

1. Go to your repository Settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select **"GitHub Actions"** (NOT "Deploy from a branch")
4. Save the settings

**Important**: You must select "GitHub Actions" as the source, not "Deploy from a branch".

## Step 3: Verify Repository Settings

Make sure your repository:
- Is public (or you have GitHub Pro/Team/Enterprise)
- Has GitHub Pages enabled
- Has GitHub Actions enabled

## Step 4: Check Workflow Permissions

The workflow needs these permissions (already configured in `.github/workflows/deploy.yml`):
- `contents: read`
- `pages: write`
- `id-token: write`

## Step 5: Trigger Deployment

If the workflow hasn't run yet:

1. Make a small change to any file (or just add a space)
2. Commit and push to the `main` branch:
   ```bash
   git add .
   git commit -m "Trigger deployment"
   git push
   ```

3. The workflow should automatically run and deploy your site

## Step 6: Wait for Deployment

- GitHub Actions workflow typically takes 2-5 minutes
- After completion, wait an additional 1-2 minutes for GitHub Pages to update
- Your site should be available at: `https://autokill.github.io/cliqqing-docs/`

## Troubleshooting

### Still seeing 404?

1. **Check the Actions tab**: Ensure the workflow completed successfully
2. **Check the Pages tab**: Go to Settings → Pages and verify it shows "Your site is live at..."
3. **Clear browser cache**: Try accessing in incognito/private mode
4. **Check the URL**: Make sure you're using the correct URL format:
   - ✅ `https://autokill.github.io/cliqqing-docs/`
   - ✅ `https://autokill.github.io/cliqqing-docs/docs/intro`
   - ❌ `https://autokill.github.io/cliqqing-docs/docs/start` (this doesn't exist)

### Workflow Failing?

Common issues:
- **Node.js version**: Should be 20 (already configured)
- **Build errors**: Check the build logs in Actions
- **Permissions**: Make sure the workflow has the correct permissions
- **Missing files**: Ensure all required files are committed

### Site Not Updating?

- GitHub Pages can take a few minutes to update after deployment
- Try hard refresh (Ctrl+F5 or Cmd+Shift+R)
- Check if the `gh-pages` branch exists and has content

## Manual Deployment (Alternative)

If GitHub Actions isn't working, you can deploy manually:

```bash
npm install
npm run build
npm run deploy
```

This will push to the `gh-pages` branch. Then in Settings → Pages, select "Deploy from a branch" and choose `gh-pages`.

## Need Help?

- Check [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Review the workflow logs in the Actions tab
- Verify all configuration matches this guide

