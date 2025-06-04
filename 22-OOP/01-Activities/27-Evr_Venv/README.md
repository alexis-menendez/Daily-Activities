# Virtual Environments in Python 📜

In this activity, you will learn how to create and use a virtual environment in Python using venv. Virtual environments help you isolate project dependencies, preventing conflicts between different projects. By the end of this activity, you'll understand how to set up, activate, and manage your own Python environments for clean and efficient project development.

## Create a Virtual Environment

We'll start by creating a directory to use with our virtual environment.

Open your terminal and in the home directory, run the following commands:

```sh
mkdir VenvDemo
cd VenvDemo
```

* This will create a new directory named `VenvDemo` and navigate to that directory.

In your terminal, run the following command to create a new virtual environment named `myenv`:

```sh
python -m venv myenv
```

A virtual environment isolates dependencies in your code from your global Python environment preventing conflicts between different projects.

## Activate the Virtual Environment

To use a virtual environment, we need to activate it first.

On Windows, run the following command to activate the virtual environment:

```sh
myenv\Scripts\activate
```

On macOS, run the following command to activate the virtual environment:

```sh
source myenv/bin/activate
```

* In your terminal, the prompt should change to include a prefix of `(myenv)`. This indicates the `myenv` virtual environment is now active.

## Install a Package in the Virtual Environment

Now, we'll install a package in the virtual environment.

In your terminal, run the following command:

```sh
pip install requests
```

The `requests` package and all of its dependencies are now installed in the `myenv` virtual environment. This package is only available within `myenv`. To use it in another environment, you would need to activate that environment and install the package there as well.

In your terminal, run the following command:

```sh
pip list
```

**Note**: If you're working on multiple projects with similar requirements, it might make sense to use a single virtual environment for all of them. However, when each project requires different packages or versions of the same packages, using a virtual environment for each project allows you to isolate the dependencies and avoid conflicts.

## Deactivate the Virtual Environment

When you're finished using a virtual environment it's a best practice to deactivate it.

In your terminal, run the following command to deactivate the current virtual environment:

```sh
deactivate
```

## Conclusion

Using virtual environments helps you maintain clean and manageable Python projects by isolating dependencies. This is especially useful when working on multiple projects that require different versions of the same packages.

For more information, see the [Python documentation on virtual environments and packages](https://docs.python.org/3/tutorial/venv.html).

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
