# Current Application Does Not Apply Any Deployment Best Practices

## Problem

The current deployment process does not include automated testing, which leads to code being pushed to production without verification. This lack of testing can result in bugs and errors being introduced to the live environment, negatively impacting the application's reliability and user experience. Automating the testing process before deployment is essential to ensure that only verified and stable code is deployed.

## Current Process

### What is Working Well?

* **Automatic Deployments with Render**: The application is automatically deployed whenever changes are pushed to the `main` branch, ensuring that the latest code is always live.

* **Application Performance**: The application performs well under normal conditions, indicating solid core functionality.

### What Isn't Working Well?

* **No Branch Protections**: The `main` branch has no protections, allowing any code to be merged without review.

* **Lack of Testing**: No tests are run before deployment, increasing the risk of introducing bugs and errors into production.

* **Manual Deployments**: While Render automates the deployment process, the lack of a CI/CD pipeline means no automated checks or balances are in place.

* **Environment Inconsistencies**: The application behaves differently in various stages (development, testing, and production). This makes identifying and fixing issues difficult because something that works on a developer's computer might not work on the live website.

### Questions and Research

* **Why are there no branch protections?** Historical reasons, lack of time/resources, or knowledge gap in the team?

* **What tools and technologies are currently being used?** Are there existing tools that could be integrated into an automated pipeline?

* **What are the specific issues faced during deployments?** Are there patterns or common failure points?

## Out of Scope

* **Branch Protections: While necessary, branch protections will be addressed separately.

* **Environment Inconsistencies**: This issue is related but out of scope for the current problem.

## Requirements

### Business Requirements

The proposed solution should:

* **Automatically run our tests before deployment**

* **Easily work with our current stack** (MongoDB, Cypress, Vite, TypeScript, Express.js, etc.)

* **Integrate well with GitHub**

* **Apply basic DevOps practices to our application**

* **Be free to use**

## Solution

### Option 1: Implementing CI/CD with CircleCI

**Pros**:

* Seamless integration with GitHub.

* Supports running tests automatically before deployment.

* Specializes in CI/CD

* Strong support for establishing consistent environments.

* Free tier available that meets basic needs.

**Cons**:

* Requires learning a new tool and configuration language.

* No documentation around combining with Render.

* May require further technologies to address other DevOps elements outside of CI/CD

### Option 2: Using GitHub Actions for CI/CD

**Pros**:

* Integrated with GitHub, making it easy to use with repositories hosted there.

* Simple to set up and maintain.

* Supports running tests automatically before deployment.

* Works well with Render

* Free for public repositories and offers a generous free tier for private repositories.

* Good documentation and community support.

**Cons**:

* Limited to GitHub repositories.

* Every action must be configured individually.

* May not meet all needs at scale.

### Option 3: Adopting Docker and Kubernetes

**Pros**:

* Ensures consistency across environments by containerizing applications.
* Kubernetes provides powerful orchestration capabilities for managing deployments.

**Cons**:

* It has a steep learning curve and is more complex to set up.

* May require more resources to manage and maintain.

* Overkill for the current scale and requirements of the application.

### Suggested Solution: Using GitHub Actions

**Reasoning**:

Using GitHub Actions balances ease of use, scalability, and cost-effectiveness. GitHub Actions simplifies the setup and maintenance of CI/CD pipelines while ensuring consistency across environments. This solution is well-suited for our current technology stack and team capabilities and meets all the business requirements.

### Implementation Strategy: The Three Ws of Strategy

1. **Why**:

   * To improve deployment reliability and reduce errors by deploying only tested and verified code.

   * To maintain consistent environments across development, testing, and production.

   * To apply basic DevOps practices, improving the overall development and deployment workflow.

2. **What**:

   * Implement a CI/CD pipeline using GitHub Actions to automate the deployment process.

   * Set up automated testing to run before any code is deployed to production.

   * Ensure that the pipeline is integrated with the existing technology stack.

3. **Who**:

   * **Development team**: Gains confidence that their code is properly tested and verified before deployment.

   * **End users**: Experience a more reliable and stable application with fewer bugs and errors.

   * **Stakeholders**: Benefit from a more efficient and robust deployment process, reducing downtime and improving user satisfaction.

---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
