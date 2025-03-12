# Git History 📜

Git is a powerful tool with tons of features that can handle projects spanning weeks, months, and even years. Today, we'll explore a collection of lesser-known commands that help us navigate, rewrite, reference, and clean up the history of a Git repository.

## Clone an Existing Repository

We'll start by cloning an existing repository. The benefit of using an existing repository is that it will have a lot of commits and history to work with in our examples.

Open your terminal and in the home directory, run the following commands:

```sh
git clone https://github.com/SBoudrias/Inquirer.js.git
cd Inquirer.js
```

* This will clone the repository for the Inquirer.js npm package and navigate into the folder for that repository.

## View Commit History

Let's start with `git log` command, which is useful for viewing the history of a repository.

In your terminal, run the following command:

```sh
git log
```

* The `git log` command lists all commits in reverse chronological order, with the most recent commits appearing at the top.

* For each commit, the command displays details such as the commit id, the author's name and email, the date of the commit, and the commit message. The output for each commit will be similar to the following example:

```bash
commit db6d66bd1afe17fb51c9599847371aad99e2c70b
Author: Simon B <admin@example.com>
Date:   Thu Feb 25 14:06:02 2021 -0800

    Update travis matrix
```

* 🔑 To scroll through the `git log` output, use the `enter` key to advance by line and the `space` key to advance by page.

* 🔑 To exit the `git log` output, enter `q` in the terminal.

The `git log` command is useful for seeing who changed what, when, and why.

## Filtering the Log

By default, the `git log` command lists **all** commits on the current branch. If you need to narrow down the results, there are a number of filtering options available.

In your terminal, run the following command:

```sh
git log tools
```

This filters the output of the `git log` command to only include commits relevant to the `tools` directory. Filtering by directory can be especially useful when working with a large application that has many directories.

Another useful method for filtering commits is by date and time and the `git log` command provides a number of options for doing that.

The `--since` flag allows us to filter commits that occurred after a specific date, and we can include the time to narrow it down even further, as shown in the following example:

```sh
git log --since="2024-07-28"
git log --since="2024-07-28 16:57:00"
```

We can filter the results even further by using the `--author` flag.

In your terminal, run the following command:

```sh
git log --since="2024-07-28 16:57:00" --author="Simon"
```

If we need to filter by a date range, we can use the `--before` and `--after` flags, as shown in the following example:

```sh
git log --before="2020-12-31" --after="2016-12-31"
```

The `--grep` flag lets us filter commits based on the text within the commit message. This flag requires a regular expression that it will use to match the text in the commit messages.

A **regular expression**, or **regex**, is a sequence of characters that specifies a search pattern.

In your terminal, run the following command:

```sh
git log --grep="prompts"
```

This will filter the log to only include commits that contain the word "prompts" within their commit message.

You might have noticed the first time you ran the `git log` command that many of the commit messages were typical merges. These types of commits can create a lot of noise in your repository, making it difficult to see actual changes. Luckily, the `git log` command has a flag for this, called `--no-merges`, as shown in the following example:

```sh
git log --no-merges 
```

If you want to view commits from a different branch than the one you're currently on, you can do so by providing the branch name after the `git log` command. This is useful when you want to see changes in another branch without switching from your current branch. For instance, to display commits from the `origin/v8.0-legacy` branch, enter the following command in your terminal:

```sh
git log origin/v8.0-legacy
```

**Note**: By the time you read this, the branch `origin/v8.0-legacy` may have been renamed or deleted. If that happens, run `git branch -r` and choose a different branch.

With these options, you can tailor the `git log` command to find exactly what you need.

For more information, see the [Git documentation on git log](https://git-scm.com/docs/git-log).

## Viewing File Changes

While the `git log` command provides information about changes made to a codebase, including who made those changes and when, the `git blame` command offers more detailed insights into specific files and individual lines within those files.

For example, you may want to find out who added a particular dependency to your project, as well as the reason behind it or what feature or bug was being fixed at the time.

To explore the `git blame` command, make sure you're checked out to the `main` branch, then run `git blame` on the `package.json` file:

```sh
git checkout main
git blame package.json
```

This command will show you the contents of the `package.json` file annotated with the commit id, timestamp, and user who made each change. Find the `scripts` object within the `package.json` file and search for a script called `prepare`. The name of the person who added this package (Simon Boudrias) will be displayed on the left, as shown in the following example:

```sh
f4ff7161 (Simon Boudrias                     2016-03-12 16:29:44 -0800 80)   "scripts": {
1d26129a (Simon Boudrias                     2024-03-09 20:30:44 +0100 81)     "prepare": "husky && turbo tsc attw",
```

We can use this information along with `git log` to learn more about what Simon and others were working on. Copy the commit id, `1d26129a`, check out the commit, and use `git log` to find commits that contain the term "husky":

```sh
git checkout 1d26129a
git log --grep "husky"
```

The commit logs provide context about why Simon modified this line in the `package.json`. From the commit messages, we can deduce that Simon and others were updating the application build configuration. The messages appear similar to the following:

```bash
commit 1fb81e8ea4591a9b86085dff311e8a1bc5dd3bd8
Author: Simon Boudrias <admin@simonboudrias.com>
Date:   Sat May 6 14:56:51 2023 -0400

    Make husky executable

commit b71c3c1be0148ec1337cc1f03eb75bd9caa4d9be
Author: 烽宁 <miqilin18@gmail.com>
Date:   Fri May 5 21:21:11 2023 +0800

    chore: update husky and lint-staged configuration (#1223)
```

This is just an example, but imagine you want to know who worked on a feature in your project or understand a developer's reason for adding something to the codebase. The powerful `git log` and `git blame` commands can provide this information, making you feel like a detective.

For more information, see the [Git documentation on git blame](https://git-scm.com/docs/git-blame).

## Other Useful Git Commands

Here are some additional commands that you might find useful:

* `git diff` shows you which lines have been added or removed since your last commit. This can be especially useful if you notice a file was changed but you can't remember why you needed to change it. For example, if your app appends data to a JSON file during testing, the `git diff` command will highlight the new lines added.

* `git reflog` shows you the **reference logs**, or **reflogs**, which record updates to the tips of branches in your local repository. For instance, if you run `git reflog`, you can find out what happened two steps ago, at `HEAD@{2}`. You can also use reflogs to switch back to the previous branch with:

    ```sh
    git checkout -
    ```

* `git prune` is used for garbage collection, which ensures that storage space that is no longer being used is made available for reuse. **Note**: This command is rarely run directly and is usually run by other Git commands.

* `git commit --amend` lets you modify your most recent commit, allowing you to rewrite history. While Git is designed to track all changes, it also provides the flexibility to fix mistakes in your last commit, such as correcting a commit message. This command is useful for making small adjustments to recent commits.

## Conclusion

Today you learned how to navigate Git history using commands like `git log` and `git blame`. As you continue to develop and work on larger projects, these commands will become increasingly useful. Just knowing that these commands exist can make you a better developer!

For more information, see the [Git documentation](https://git-scm.com/docs).

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
