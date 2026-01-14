# Deployment Instructions

Your project is now a Git repository and is ready to be pushed to GitHub and deployed on Render.

## 1. Create a Repository on GitHub
1. Go to [GitHub.com](https://github.com/new).
2. Create a new repository name `EduTechAI`.
3. Do **not** check "Initialize this repository with a README/gitignore/license".
4. Click **Create repository**.

## 2. Push Your Code
Run the following commands in your terminal (copy-paste the lines GitHub gives you, or use these):

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/EduTechAI.git
git push -u origin main
```
*(Replace `YOUR_USERNAME` with your actual GitHub username)*

## 3. Deploy on Render
1. Go to [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** and select **Static Site**.
3. Connect your GitHub account if you haven't already.
4. Select the `EduTechAI` repository from the list.
5. Render will automatically detect the settings from `render.yaml`:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
6. Click **Create Static Site**.

Your site will be live in a few minutes!
