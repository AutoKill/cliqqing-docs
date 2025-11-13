# Cliqqing Bot Documentation

Modern documentation website for the Cliqqing Discord bot, built with Docusaurus.

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ and npm/yarn/pnpm

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment to GitHub Pages

#### Automatic Deployment (Recommended)

1. Update `docusaurus.config.js` with your GitHub username and repository name:

```javascript
url: 'https://yourusername.github.io',
baseUrl: '/cliqqing-docs/',
organizationName: 'yourusername',
projectName: 'cliqqing-docs',
```

2. Push to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/cliqqing-docs.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save

The GitHub Actions workflow will automatically build and deploy on every push to `main`.

#### Manual Deployment

```bash
npm run deploy
```

This will build the site and push it to the `gh-pages` branch.

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## 📝 Documentation Structure

- `docs/` - All documentation markdown files
- `src/` - React components and CSS
- `static/` - Static assets (images, etc.)

## 🔧 Configuration

- `docusaurus.config.js` - Main configuration file
- `sidebars.js` - Sidebar navigation configuration

## 📚 Learn More

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Docusaurus GitHub](https://github.com/facebook/docusaurus)

