# Deployment Guide: GitHub Pages

Follow these steps to deploy your website to the internet using GitHub Pages.

## Prerequisites
- You need a [GitHub](https://github.com/) account.
- `git` must be installed on your computer (it usually is).

## Step 1: Create a GitHub Repository
1.  Log in to GitHub.
2.  Click the **+** icon in the top right and select **New repository**.
3.  Name the repository `taitung-charity-website`.
    - *Note: If you choose a different name, you must update `vite.config.js` and `package.json`.*
4.  Make sure it is **Public**.
5.  Click **Create repository**.

## Step 2: Push Code to GitHub
Open your terminal in the project folder (`d:\下載\taitung-charity-website`) and run the following commands:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Link to your GitHub repository (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/taitung-charity-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to GitHub Pages
Run this command in your terminal:

```bash
npm run deploy
```

This script will:
1.  Build your project.
2.  Upload the built files to a `gh-pages` branch on GitHub.

## Step 4: Configure GitHub Settings
1.  Go to your repository on GitHub.
2.  Click **Settings** > **Pages**.
3.  Under **Build and deployment** > **Source**, ensure "Deploy from a branch" is selected.
4.  Under **Branch**, ensure `gh-pages` is selected as the source branch (it should be automatic).
5.  Wait a few minutes, and your site will be live at:
    `https://YOUR_USERNAME.github.io/taitung-charity-website/`
