# Add Comments to Implementation of the MERN-stack Architecture

## Root-level Functionality

* TODO: Explain what each script does in the root-level `package.json` file:

```json
"scripts": {
  "start": "npm run client:build && npm run server",
  "start:dev": "concurrently \"npm run server:dev\" \"wait-on tcp:3001 && npm run client:dev\"",
  "install": "cd server && npm i && cd ../client && npm i",
  "build": "cd server && npm run build",
  "seed": "cd server && npm run seed",
  // ...other scripts
},
```

## Client-side Functionality

* TODO: Explain what this object does in the client-side `client/vite.config.ts` file:

```js
  proxy: {
    '/graphql': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      secure: false,
    },
  },
```

## Server-side Functionality

* TODO: Add a comment describing the functionality of this block of code in `server/src/server.ts`:

```js
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}
```
