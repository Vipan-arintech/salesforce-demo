# Salesforce Hello World Deployment Demo

This repository contains a minimal Salesforce DX project you can deploy with GitHub Actions.

## What is included

- Apex class: `HelloWorldController`
- Apex test class: `HelloWorldControllerTest`
- Lightning Web Component: `helloWorld`
- GitHub workflow: `.github/workflows/deploy.yml`

## One-time setup

1. Connect your Salesforce org locally:
   - `sf org login web --alias targetOrg`
2. Generate auth URL:
   - `sf org display --verbose --target-org targetOrg`
3. Copy the `Sfdx Auth Url` value.
4. In GitHub repo settings, create secret:
   - Name: `SFDX_AUTH_URL`
   - Value: paste the auth URL

## Deploy via GitHub Actions

1. Push code to `main` branch, or run the workflow manually from Actions tab.
2. Workflow authenticates using `SFDX_AUTH_URL` and deploys `force-app`.

## Verify in Salesforce

1. Open your org.
2. Go to Lightning App Builder.
3. Edit Home Page (or App Page).
4. Drag `helloWorld` component onto page and save.
5. Open the page and confirm greeting appears.
