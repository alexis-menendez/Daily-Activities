# pip and PyMongo

Python code is extendable through various packages and libraries that do not come preinstalled with Python. To install other packages, we use `pip`, the Package Installer for Python.

In this activity, we'll use `pip` to install the PyMongo package so that we can connect to a local Mongo database and retrieve data to use in our code. Then we will run through existing code to check that everything installed correctly.

## Instructions

Pip should automatically be installed with Python, but if you have multiple versions of Python available on your computer, you may want to check which version of Python and pip you are using before installing a new package.

Python and pip both have a couple of commands available for legacy reasons, when programmers were still using Python 2. If you only have one version of Python on your computer, the following commands can be used interchangeably:

`python` and `python3`.

`pip` and `pip3`.

* Open your command line and run the following commands to check what version of Python you're using:

  ```bash
  python --version
  python3 --version
  ```

  If you're using Windows and those commands don't work, try `py --version`.

  You'll want to use the Python command that is associated with Python 3.12+. If they point to the same location, you can use either command.

* Next you will check your `pip` version to ensure it is associated with the same folder as Python 3.12+. Run the following commands to check your pip installation(s):

  ```bash
  pip --version
  pip3 --version
  ```

  There are also operating-system-specific commands that you can use, available on the [pip Getting Started](https://pip.pypa.io/en/stable/getting-started/) page.

  If both `pip` and `pip3` point to the same location on your computer, you will be able to use either command to install Python packages.

  If `pip` and `pip3` point to different locations on your computer, then you will want to use the command that is associated with the version of Python you'll be using to run your code.

  If, for some reason, pip is not installed, follow the official [installation guide](https://pip.pypa.io/en/stable/installation/).

* To install PyMongo, run the following command:

  ```bash
  pip install pymongo
  ```

* Navigate to the `Unsolved` directory from the command line and run the following command:

  ```bash
  python3 pymongo_example.py
  ```

  * If you get a `ModuleNotFoundError: No module named 'pymongo'` when running the Python script, try the following command to install pymongo (substitute `python3` with the Python command you're using):

    `python3 -m pip install pymongo`.

## Hints

* More information on how to set up pip can be found in the [pip Getting Started](https://pip.pypa.io/en/stable/getting-started/) guide.

* The [pip install](https://pip.pypa.io/en/stable/cli/pip_install/) guide provides more information on using `pip install`, including adding options to the command.

* Review the [PyMongo Documentation](https://pymongo.readthedocs.io/en/stable/) if you would like to make changes to the code in this activity.

* You should already have MongoDB running in the background on your computer, but if you need to restart or reinstall, review the [Full Stack Blog on MongoDB](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb).

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
