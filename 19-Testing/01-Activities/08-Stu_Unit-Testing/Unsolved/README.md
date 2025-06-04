# Node Vitest TypeScript Template

`npm run build` and `npm run test` run as expected.
Had to change the module property in tsconfig.json from `ESNext` to `nodenext` to get around multiple errors that look like the following:

```js
Cannot find module 'expect'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?
```

If we can't change the module version, we can try getting rid of the `globals: true` in the `vite.config.js`, but that is what is keeping us from having to import the `describe`, `it`, `test`, and `expect` tools in manually.

Required devDependencies:

- @types/jest
- @types/node
- vite
- vitest
