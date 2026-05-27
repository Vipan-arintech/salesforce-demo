# Salesforce Hello World Deployment Demo

This repository contains a minimal Salesforce DX project with progressive deployment using GitHub Actions.

## What is included

- Apex class: `HelloWorldController`
- Apex test class: `HelloWorldControllerTest`
- Lightning Web Component: `helloWorld`
- GitHub workflow: `.github/workflows/deploy.yml`

## Progressive deployment setup (dev -> sandbox -> prod)

Create three GitHub Environments in your repository:

- `dev`
- `sandbox`
- `prod`

For each environment, add one secret with the same name:

- Secret name: `SFDX_AUTH_URL`
- Secret value: auth URL of that environment's Salesforce org

### How to get auth URL for each org

1. Login to that org:
   - `sf org login web --alias <aliasName>`
2. Get the auth URL:
   - `sf org display --verbose --target-org <aliasName>`
3. Copy only `Sfdx Auth Url` value and paste into matching GitHub Environment secret.

## Branch strategy

- Push to `dev` -> deploy to GitHub Environment `dev`
- Push to `sandbox` -> deploy to GitHub Environment `sandbox`
- Push to `prod` -> deploy to GitHub Environment `prod`

You can also run workflow manually and pick `dev`, `sandbox`, or `prod`.

Pull requests to `dev`, `sandbox`, or `prod` run a basic validation job.

## Verify in Salesforce

1. Open your org.
2. Go to Lightning App Builder.
3. Edit Home Page (or App Page).
4. Drag `helloWorld` component onto page and save.
5. Open the page and confirm greeting appears.

## Important note about scratch orgs

Scratch orgs are temporary and are best for development/testing, not long-lived stage/prod environments.
For stable stage/prod pipelines, prefer Sandboxes or persistent orgs.
