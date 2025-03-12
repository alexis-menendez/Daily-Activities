# Instructor Demo: PostgreSQL Shell

Postgres Shell is an advanced client and code editor for Postgres located right in our terminal. Let's open the Postgres Shell.

* To start, we navigate to the root directory of our project and then type the following command into the terminal to confirm that the Postgres server is up and running. If successful, `psql` and a version number will appear.

  ```sh
  psql --version
  ```

* Next, we open the Postgres Shell that connects the terminal to the Postgres instance. In the terminal, at the root directory of the project, enter the following command:

  ```sh
  psql -U postgres
  ```

* This command tells the Postgres Shell that we want to log in with the root user (-U). Once we enter this command, we are prompted to enter the password we created when we installed `PostgreSQL`.

* We write our commands after the prompt. Don't forget, all commands must end with a semi-colon!

  ```sh
  postgres> CREATE DATABASE sample_db;
  ```

* We can also execute a file that contains a list of commands using `\i <FILENAME>`

  ```sh
  \i schema.sql
  ```

* To exit the Shell, we type `\q`.

  ```sh
  \q
  ```

* If the `psql --version` command returned an error, refer to the [PostgreSQL Download Page](https://www.postgresql.org/download/) for instructions on installing PostgreSQL on your Mac or Windows machine.
