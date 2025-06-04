# Git Hooks

When it comes to Git, development teams often have a number of best practices that they want everyone to follow. This can include how commit messages are styled, which branch names to use, which branches you're allowed to merge into, and so on.

It can be challenging to remember all of these rules, but with **Git Hooks**, you can set up automated reminders for yourself. Hooks will listen for certain Git events to occur and then, depending on the event, execute a local script before or after that event.

## Sample Hooks

Git provides a series of sample Hooks when you initialize a Git repository. Let's create a new local repository and see what these Hooks look like:

* From the command line, run the following commands:

  ```bash
  mkdir hook-test
  cd hook-test
  git init
  ls .git/hooks
  ```

* The `.git/hooks` directory contains several files with a `.sample` extension, including the following:

  ```text
  applypatch-msg.sample
  commit-msg.sample
  fsmonitor-watchman.sample
  post-update.sample
  pre-applypatch.sample
  pre-commit.sample
  ```

* Run the command `code .git/hooks/pre-commit.sample` to open the file in VS Code. Its content will look like the following:

  ```bash
  #!/bin/sh

  if git rev-parse --verify HEAD >/dev/null 2>&1
  then
  	against=HEAD
  else
  	against=$(git hash-object -t tree /dev/null)
  fi

  allownonascii=$(git config --type=bool hooks.allownonascii)

  exec 1>&2

  if [ "$allownonascii" != "true" ] &&
  	test $(git diff --cached --name-only --diff-filter=A -z $against |
  	  LC_ALL=C tr -d '[ -~]\0' | wc -c) != 0
  then
  	cat <<\EOF
  Error: Attempt to add a non-ASCII file name.

  This can cause problems if you want to work with people on other platforms.

  To be portable it is advisable to rename the file.

  If you know what you are doing you can disable this check using:

    git config hooks.allownonascii true
  EOF
  	exit 1
  fi
  
  exec git diff-index --check --cached $against --
  ```

Git Hooks are written as shell scripts. This particular Hook is executed when a commit is about to be made. The logic in this hook will abort the commit if files with non-ASCII names are being committed. For now, however, the Hook won't run due to the `.sample` extension. Let's rename the file to enable the Hook.

* From the command line, run the following command:

  ```bash
  mv .git/hooks/pre-commit.sample .git/hooks/pre-commit
  ```

* Next, let's create a scenario for this Hook to catch. Run the following commands to add, stage, and commit two new files, one of which is going to be invalid:

  ```bash
  touch README.md 🔨.json
  git add .
  git commit -m "init"
  ```

  **Note**: You will need to copy and paste the emoji into your command line.

  * The `pre-commit` hook will catch the emoji in the filename and stop the commit from happening, displaying the following message in the command-line window:

     ```text
     Error: Attempt to add a non-ASCII file name.

     This can cause problems if you want to work with people on other platforms.
     ```

* Let's remove the `.json` file and try committing again, by using the following commands:

  ```bash
  rm 🔨.json
  git add .
  git commit -m "init"
  ```

This time, the `pre-commit` Hook allowed the commit to go through, because the name, `README.md`, passed the ASCII check. This is a great way to enforce proper filenames in your repository&mdash;but every team member would need to enable this Hook. Git Hooks aren't pushed to the remote; they only reside on your local machine.

## Build Your Own Hook

There are other Git events you can Hook into that don't come with a pre-built sample. One of these is the `post-checkout` Hook that will run any time you switch branches. A good use case for this Hook is to remind yourself to use proper branch naming. For example, your team might have decided to always use `feature/` and `issue/` prefixes for all branch names.

From the command line of your project root, run the following commands to create and open the new Hook file:

```bash
touch .git/hooks/post-checkout
chmod +x .git/hooks/post-checkout
code .git/hooks/post-checkout
```

  * The `chmod` command will update the file permissions, so the Hook is executable.

* In the `post-checkout` file, add the following shell script logic:

```bash
#!/bin/sh

# save list of valid, non issue/feature names
safelist=("main", "develop", "staging")

# get current branch's name
branch=$(git branch --show-current)

# check if not in safelist and doesn't start with issue/feature
if [[ ! ${safelist[*]} =~ "$branch" ]] && [[ ! "$branch" =~ ^(issue/|feature/).* ]]
then
  echo "Warning!"
  echo 'If feature or issue branch, please use "issue/" or "feature/" prefix.'
fi
```

  * This file will keep a list of valid branch names like `main`, `develop`, etc., and then check whether the branch you switched to is in the `safelist` and starts with `issue/` or `feature/`. We can't prevent checking out the branch with this Hook, but we can at least provide a helpful warning that you should use a different branch name.

* Save the file and run the following commands, noting which ones trigger the warning and which ones don't:

```bash
git checkout -b develop
git checkout -b my-new-branch
git checkout develop
git checkout -b feature/homepage
```

Remember, though, that everyone on your team would need to set up this Git Hook themselves if this were something you wanted to enforce.

## Resources

* For more information on Git Hooks, refer to the [Git docs on customizing Git](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).

* For a refresher on shell scripting, refer to [The Bash Hackers Wiki](https://wiki.bash-hackers.org/).

* Our `post-checkout` Hook used a regular expression. For more information, refer to the [MDN Web Docs regular expression syntax cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet).

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
