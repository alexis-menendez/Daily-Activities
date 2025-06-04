import productData from '../data/products.json';
import type Product from './interfaces/Product';
//This function is mocking an API call.  To do so, we use return a new instance of the Promise constructor and use the `Promise` utility type to declare this function will return a promise that resolves to an array of `Product` objects.
export const getProducts = (): Promise<Product[]> => {
  //The Promise constructor expects to be passed a function with two arguments: a `resolve` function to execute if everything works as expected, and a `reject` function to execute if something goes wrong.  We are using `_reject` for our reject function here because it is unused.
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      //To mock an API call, we call the `resolve` function with our product data after 1 second has passed.  The data that this promise resolves with will be passed into the callback function provided in the `.then()` method when executed.
      resolve(productData);
    }, 1000);
  });
};
