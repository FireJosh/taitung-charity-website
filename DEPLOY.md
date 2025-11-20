# Deployment Guide: GitHub Pages

Follow these steps to deploy your website to the internet using GitHub Pages.

## Prerequisites
- You need a [GitHub](https://github.com/) account.
- `git` must be installed on your computer (it usually is).

## Step 1: Create a GitHub Repository
1.  Log in to [GitHub](https://github.com/).
2.  Create a new repository named `taitung-charity-website`.
3.  **Do not** initialize with README, .gitignore, or License.

## Step 2: Push Your Code
I have already initialized Git, committed your files, and set the remote URL.
**You just need to run these two commands in your terminal:**

```bash
git push -u origin main
```

*Note: If it asks for a username/password, enter your GitHub credentials.*

## Step 3: Deploy
After the push is successful, run:

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
