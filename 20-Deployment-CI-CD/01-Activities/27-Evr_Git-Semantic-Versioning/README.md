# Introduction to Git Releases with Tagging and Semantic Versioning (SemVer)

## What is Semantic Versioning?

**Semantic Versioning (SemVer)** is a versioning scheme for software that aims to convey meaning about the underlying changes. It uses a three-part version number: `MAJOR.MINOR.PATCH`, and each part has a specific significance:

1. **MAJOR** version when you make incompatible API changes.

2. **MINOR** version when you add functionality in a backward-compatible manner.

3. **PATCH** version when you make backward-compatible bug fixes.

**Example**:

* `1.0.0`: Initial release.

* `1.1.0`: Added new features in a backward-compatible way.

* `1.1.1`: Bug fixes that do not affect the API.

## What are Git Tags?

**Tags** are references that point to specific points in your Git history. They are typically used to mark release points (e.g., v1.0.0). Tags are useful for identifying specific releases and are often used in conjunction with Semantic Versioning.

## Clone the New Repository

Now let's clone the newly created repository to the local machine. We can start to do so by clicking the green Code button, selecting the SSH option, and copying the value provided.

Before you perform the clone operation, use the `cd` command to navigate to the location where you want the repo cloned. Then, to clone it, you'll need to run the `git clone` command from your command line.

## Creating Tags in Git

You can create tags locally and push them to a remote repository.

**Example**:

1. **Creating a lightweight tag**:
    ```sh
    git tag v1.0.0
    ```

2. **Creating an annotated tag**:
    ```sh
    git tag -a v1.0.0 -m "Release version 1.0.0"
    ```

3. **Pushing a tag to the remote repository**:
    ```sh
    git push origin v1.0.0
    ```

4. **Pushing all tags to the remote repository**:
    ```sh
    git push --tags
    ```

5. **Listing tags**:
    ```sh
    git tag
    ```

6. **Deleting Tags**:

    * **Delete a local tag**:
        ```sh
        git tag -d v1.0.0
        ```

    * **Delete a remote tag**:
        ```sh
        git push origin --delete tag v1.0.0
        ```

## Using Tags and Semantic Versioning in GitHub

1. **Releases**: GitHub uses tags to create releases. A release is a specific point in your repository’s history. You can create a new release directly from GitHub or by pushing a tag from your local machine.

    * Navigate to the "Releases" tab in your GitHub repository.

    * Click "Draft a new release."
    
    * Choose a tag version and fill in the release notes.

    * Click "Publish release."

2. **Automating Releases with GitHub Actions**: You can set up a GitHub Action to automate the creation of releases. This can be particularly useful in a CI/CD pipeline.

**Example GitHub Action for creating a release**:

```yml
name: Create Release

on:
  push:
    tags:
      - 'v*.*.*'

jobs:
  release:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Create GitHub Release
        id: create_release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: ${{ github.ref }}
          release_name: Release ${{ github.ref }}
          body: |
            Release notes here.
          draft: false
          prerelease: false
   ```

## Conclusion

Understanding Git releases with tagging and Semantic Versioning is crucial for managing software versions and releases effectively. By using GitHub Actions, you can automate this process, ensuring that your code is consistently and reliably released. This not only improves workflow efficiency but also maintains a high standard of code quality.
