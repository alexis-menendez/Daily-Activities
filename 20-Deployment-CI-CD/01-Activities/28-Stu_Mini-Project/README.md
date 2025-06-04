# Module 20 Mini-Project: Film Tracker CI/CD & Testing

In this mini-project, you'll work with a group to add GitHub Actions to a functioning film-tracking application then deploy it to Render. You will work in a feature branch against a `develop` and `main` branch.

The GitHub Actions you will set up should only allow pull requests to the `develop` and `main` branches if your tests are passing. A successful pull request to `main` will also automatically deploy the application to Render.

## Instructions

### 1. Set Up GitHub Repository

* Begin by creating an empty GitHub repo, cloning it, and moving everything inside the `Develop` folder into the new repo.

### 2. Organize GitHub Actions

* Create a new folder called `.github` at the root of your directory and another folder inside of it called `workflows`. Then move the provided YAML files (`Assets/checking_tests.yml` & `Assets/deploy_to_render.yml`) into the `workflows` folder.

* Git add, git commit, and push up those changes to your `main` branch.

### 3. Configure Render for Deployment

* Create a Static Site on Render:

  * Connect it to your GitHub repo.

  * For the "Build Command", use the `npm run render-build` script.

  * For the publish directory, use `dist`.
  
  * Add your OMDBAPI key to the Render environment variables.
  
  * Turn off automatic deploys so that the GitHub Actions we have added can handle the deployment.

### 4. Set Up Deploy Hook

* You will need to retrieve your deploy hook from your current Render application and add it to your GitHub repo.

* Navigate to the Render application you already created. Once there, go to the Settings tab and scroll to the "Auto-Deploy" option. Make sure that this option is set to "No". To do so, click the "Edit" button, select "No" from the dropdown menu, and click the "Save Changes" button, as shown in the following image:

  ![In Render, the option for Auto-Deploy shows a dropdown with the value of "No" and a button that says "Save Changes" below it.](./Assets/01-auto-deploy-off.png)

* Scroll down to the "Deploy Hook" option immediately below the "Auto-Deploy" option and copy the value of the deploy hook URL by clicking the clipboard icon. We will need to paste this value into our GitHub settings.

* Navigate to the repository on GitHub and then select Settings for the repository (not your account settings).

* Select "Secrets and variables" from the menu on the left, and then click on "Actions" in the sub-menu, as shown in the following image:

  ![In the repository Settings tab on GitHub, Secrets is selected on the left side of the window, and a button that says "New repository secret" appears on the right.](./Assets/02-gh-secret-add.png)

* Select "New Repository Secret". Name the new secret "RENDER_DEPLOY_HOOK_URL" and then paste in the URL that you copied earlier from Render, as shown in the following image:

  ![On a page called "Actions secrets/New secret", "RENDER_DEPLOY_HOOK_URL" is entered in the Name field, with the URL pasted into the Value field.](./Assets/03-enter-secret.png)

### 5. Configure and Protect Branches

* Locally, create a `develop` branch off of `main` and push it up.

* Then create a feature/testing branch off of `develop`, make a small change in your code, and push it up.

* Perform a pull request comparing `feature/testing` to `develop` to trigger the `Checking Test` action.

* Go to the "Settings" tab for your repo, select "Branches", then select "Add classic branch protection rule".

* You will need to set up branch protections for the `main` and `develop` branches.

  **Note**: The branch name patterns must be called `main` and `develop` for the protections to take effect.

* For the branch protections:

  * On `main` only: Check "Require a pull request before merging" with "Require approvals" unchecked.

  * For both: Check "Require status checks to pass before merging."

  * For both: Check "Do not allow bypassing the above settings."

  * For the `develop` branch, in the "Search for status checks in the last week for this repository" input, search for and add the `Checking Tests` action.

  * For the `main` branch, in the "Search for status checks in the last week for this repository" input, search for and add the `Deploy To Render` action.

  **Note**: The actions will not show up in the search unless they have run successfully at least once. The names we are searching for come from the value provided to the name key under the jobs key in the YAML files. The names are case-sensitive.

### 6. Test and Fix Bugs

* Move the failing `Assets/SeenIt.test.tsx` file into your `tests` folder. `npm run test` and confirm the test is failing.

* Push the changes to GitHub with the failing test included and attempt a pull request with `develop`. The `Checking Test` check should fail and not allow the pull request to be merged.

* Fix the bug in `tests/SeenIt.test.tsx` and push the changes. The `Checking Test` check should now pass and allow a merge.

* Create a pull request from `develop` to `main`. Take note of the `Deploy To Render` check. If your tests are passing, this check should pass, and the app should auto-deploy to Render.

## Getting Started

You'll need to provide your OMDb API key in a `.env` file. An example `.env` file is provided, named `.env.EXAMPLE`, in the `environment` folder. You can request an OMDb API key [here](https://www.omdbapi.com/apikey.aspx).

## 📝 Notes

Refer to the following resources:

* [GitHub Actions](https://docs.github.com/en/actions)

* [GitHub documentation on continuous integration](https://docs.github.com/en/actions/guides/about-continuous-integration)

* [Render Deployment Guide](https://coding-boot-camp.github.io/full-stack/render/render-deployment-guide)

* [Render documentation on setting environment variables](https://docs.render.com/configure-environment-variables)

* [Render documentation on deploy hooks](https://render.com/docs/deploy-hooks)

* [YAML documentation](https://yaml.org/)

## 🏆 Bonus

* Add a linter to your application and don't allow pull requests or auto-deployments without the linter running successfully.

* See [ESLint](https://eslint.org/) or [Biome](https://biomejs.dev/) for examples.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
