# Deploying JuansaDigital to Cloudflare Pages (GitHub Actions)

This guide walks you through deploying the Astro site to Cloudflare Pages using GitHub Actions.

## Prerequisites
- A Cloudflare account.
- The project pushed to a GitHub repository.
- A Cloudflare API Token.

## Setup Instructions

### 1. Create a Cloudflare Project
1.  Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2.  Go to **Workers & Pages** > **Create application**.
3.  Select the **Pages** tab and click **Upload your static files** (folder icon).
4.  **Important**: It will ask you to upload files.
    - Run `npm run build` in your terminal to generate the `dist` folder.
    - Drag and drop the `dist` folder into the upload area.
    - (Or create a folder with a single `index.html` file and upload that just to initialize the project).
5.  Name the project `juansadigital-astro` and click **Create project** > **Deploy Site**.
6.  Once deployed, go to the project dashboard and copy the **Account ID** from the sidebar (under "Account details").
6.  Once created, copy the **Account ID** from the **Workers & Pages** overview or from the URL (e.g., `dash.cloudflare.com/<ACCOUNT_ID>/...`).

### 2. Generate API Token
1.  Go to **My Profile** > **API Tokens**.
2.  Create a token using the **Edit Cloudflare Workers** template.
3.  Copy the generated token.

### 3. Add GitHub Secrets
1.  Go to your GitHub repository > **Settings** > **Secrets and variables** > **Actions**.
2.  Add the following secrets:
    - `CLOUDFLARE_API_TOKEN`: Your API token from step 2.
    - `CLOUDFLARE_ACCOUNT_ID`: Your Account ID from step 1.

### 4. Deploy
- Simply push changes to the `main` branch.
- GitHub Actions will build and deploy the site automatically.
