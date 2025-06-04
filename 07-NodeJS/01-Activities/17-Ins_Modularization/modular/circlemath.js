// ESM syntax allows us to use the export keyword. Each file can have several named exports, but only one default export.

//named exports
export const getCircleArea = (radius) => Math.PI * radius * radius;
export const getSphereVolume = (radius) => 1.33 * Math.PI * radius * radius * radius;

//for the default export, we define the variable first and then we can export it.
const getCircumference = (radius) => 2 * Math.PI * radius;

export default getCircumference;

//alternatively, we could skip the creation of the variable and export the item directly:
// export default (radius) => 2 * Math.PI * radius;
