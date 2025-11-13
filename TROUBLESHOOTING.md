# Troubleshooting GitHub Pages 404 Error

If you're seeing a 404 error, follow these steps in order:

## Step 1: Verify GitHub Pages Configuration

1. Go to: `https://github.com/AutoKill/cliqqing-docs/settings/pages`
2. Under **"Source"**, you have two options:

### Option A: Use GitHub Actions (Recommended)
- Select **"GitHub Actions"** from the dropdown
- Click **Save**
- This will use the workflow to deploy automatically

### Option B: Use gh-pages Branch (Alternative)
- Select **"Deploy from a branch"**
- Branch: Select **`gh-pages`**
- Folder: Select **`/ (root)`**
- Click **Save**

## Step 2: Check Workflow Status

1. Go to: `https://github.com/AutoKill/cliqqing-docs/actions`
2. Check if the "Deploy Docusaurus to GitHub Pages" workflow has run
3. If it shows a green checkmark ✅, the deployment succeeded
4. If it shows a red X ❌, click on it to see the error

## Step 3: Verify Repository Settings

1. Go to: `https://github.com/AutoKill/cliqqing-docs/settings/actions`
2. Scroll to **"Workflow permissions"**
3. Select **"Read and write permissions"**
4. Check **"Allow GitHub Actions to create and approve pull requests"** (optional)
5. Click **Save**

## Step 4: Check if gh-pages Branch Exists

1. Go to: `https://github.com/AutoKill/cliqqing-docs/branches`
2. Look for a branch named `gh-pages`
3. If it doesn't exist, the workflow needs to run first

## Step 5: Trigger the Workflow

If the workflow hasn't run or failed:

1. Make a small change (add a space to any file)
2. Commit and push:
   ```bash
   git add .
   git commit -m "Trigger deployment"
   git push
   ```
3. Wait 2-5 minutes for the workflow to complete

## Step 6: Wait for GitHub Pages to Update

- After the workflow completes, wait an additional 1-2 minutes
- GitHub Pages can take a few minutes to update after deployment
- Try accessing: `https://autokill.github.io/cliqqing-docs/`

## Step 7: Clear Browser Cache

- Try accessing in an incognito/private window
- Or hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)

## Common Issues

### Issue: Workflow fails with permission error
**Solution**: Make sure Step 3 is completed (Workflow permissions set to "Read and write")

### Issue: Workflow succeeds but site still 404
**Solution**: 
- Check Step 1 - GitHub Pages source must be set correctly
- Wait a few more minutes for GitHub Pages to update
- Verify the `gh-pages` branch exists and has content

### Issue: No workflow runs at all
**Solution**:
- Check if GitHub Actions is enabled in repository settings
- Make sure you're pushing to the `main` branch
- Check repository visibility (must be public or you need GitHub Pro)

## Manual Verification

To manually check if deployment worked:

1. Go to: `https://github.com/AutoKill/cliqqing-docs/tree/gh-pages`
2. You should see files like `index.html`, `404.html`, etc.
3. If the branch is empty or doesn't exist, the workflow hasn't run successfully

## Still Not Working?

1. Check the Actions tab for any error messages
2. Verify the workflow file is in `.github/workflows/deploy.yml`
3. Make sure the repository name matches: `cliqqing-docs`
4. Verify the baseUrl in `docusaurus.config.js` is `/cliqqing-docs/`

## Quick Test

Run this to verify your setup:
1. ✅ GitHub Pages source is set (Step 1)
2. ✅ Workflow permissions are correct (Step 3)
3. ✅ Workflow has run successfully (Step 2)
4. ✅ gh-pages branch exists with content (Step 4)

If all are ✅, the site should be working!

