# Create Vite TypeScript (5 min)

* It's time to re-visit the very useful `vite` utility, this time using TypeScript instead of JavaScript to create a React application.

* In the command line, navigate to `01-Ins_Create-Vite-TypeScript` and once again run the following command:

  ```sh
  npm create vite@4.4.1
  ```

* Name your new project `demo-app`.

* Select `React` as your framework.

* This time, select `TypeScript` as your variant instead of `JavaScript`.

* When complete, the command line will provide you with these next steps. Go ahead and execute them:

  ```bash
  cd demo-app
  npm install
  npm run dev
  ```

* At this point, we have a starting point TypeScript React application in the `demo-app` directory, with the following file structure (excluding `node_modules`, `package-lock.json` and `README.md`):

    ```sh
    ├── package.json
    ├── tsconfig.json
    ├── .gitignore
    ├── .eslintrc.cjs
    ├── index.html
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── assets
    │   │   └── react.svg
    │   ├── App.css
    │   ├── App.tsx
    │   ├── index.css
    │   ├── main.tsx
    │   └── vite-enf.d.ts
    ├── tsconfig.node.json
    └── vite.config.js
    ```

* Emphasize specifically that the TypeScript React application makes use of the `.tsx` file extension instead of `.jsx`.

* Describe that the default Vite port number is 5173. To change it to the more familiar 3000, open `package.json` and change the line defining the "dev" script to the following:

  ```text
  "dev": "vite --port 3000",
  ```

* Use the command `npm start` to launch your `vite` application in the browser. Show the app briefly, then proceed.

* Navigate to the folder `01-Ins_Create-Vite-TypeScript/demo-app/` and walk the students through the overall structure and major files. Be sure to explain their relationship to one another, as well as their respective roles within a TypeScript React application.

    1. `index.html`

    2. `package.json`

    3. `tsconfig.json`

    4. `src/main.tsx`

    5. `src/App.tsx`

* Describe that the `vite` generated code does not separate code into components as we are accustomed. We will address this in the upcoming student activity.
