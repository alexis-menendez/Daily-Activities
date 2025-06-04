# Add Comments to Implementation of the Client-Server Model

## Root-level Functionality

* TODO: Explain what each script does in the root-level `package.json` file:

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

* TODO: Explain the following rule from the client-side `client/tsconfig.json` file:

```json
  {
  "extends": "../tsconfig.json"
}
```

## Server-side Functionality

* TODO: Explain what each rule does in the server-side `server/tsconfig.json` file:

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
* TODO: Add a comment describing the functionality in the following code block from the `server/src/server.ts` file:

```js
    app.get('*', (_req, res) => {
        res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
    });
```