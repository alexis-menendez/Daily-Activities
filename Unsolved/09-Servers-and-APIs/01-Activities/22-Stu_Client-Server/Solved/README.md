# Add Comments to Implementation of the Client-Server Model

## Root-level Functionality

* The `npm start` script: This script will start our app in production, and build and serve front end.  
* The `npm run start:dev` script: This script will start our app while we are developing it. We use the `concurrently` package to simultaneously run the `client:dev` and `server:dev` scripts, and the `wait-on` package to ensure our server has started first.
* The `npm run server` script: This script will start the server only.
* The `npm run server:dev` script: This script will start the server with `nodemon`, and will re-build our application whenever a file in the `src` folder changes.
* The `npm install` script: This script will install all packages in our root level, our `server` folder, and our `client` folder.
* The `npm run client:build` script:  This script will transpile and bundle our front end code into a `dist` folder.
* The `npm run client:dev` script: This script will start the vite development server, which will allow us to see changes to our application in real time.
* The `npm run build` script: This script will transpile and bundle our front end code into a `dist` folder.

```json
 "scripts": {
    "start": "npm run client:build && npm run server",
   "start:dev": "concurrently \"npm run server:dev\" \"wait-on tcp:3001 && npm run client:dev\"",
    "server": "cd server && npm start",
    "server:dev": "cd server && npm run dev",
    "install": "cd server && npm i && cd ../client && npm i",
    "client:build": "cd client && npm run build",
    "client:dev": "cd client && npm run dev",
    "build": "cd client && npm run build"
  },
```

## Client-side Functionality

* The `"extends"` rule allows us to re-use previously defined typescript configuration files. 

```json
  {
  "extends": "../tsconfig.json"
}
```

## Server-side Functionality

* `"extends"`: Allows us to re-use previously defined typescript configuration files.
* `"rootDir"`:Tells typescript which folders to transpile from.
* `"outDir"`: Tells typescript where to place transpiled files.
* `"include"`: Explicitly tells typescript to only transpile the files found in these folders.


```json
{
    "extends": "../tsconfig.json",
    "compilerOptions": {
      /* Modules */
      "rootDir": "src" /* Specify the root folder within your source files. */,
  
      /* Emit */
      "outDir": "dist" /* Specify an output folder for all emitted files. */
    },
    "include": ["src"]
  }
  
```
* This route will serve our transpiled front end application from the `client/dist` folder.  Specifically, it will send back the `client/dist/index.html` file.  

```js
    app.get('*', (_req, res) => {
        res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
    });
```