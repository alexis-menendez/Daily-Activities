//Import syntax changes slightly depending on the type of export.
//for named exports, we must destructure the incoming object and use the same variable name, like so:
import { getCircleArea, getSphereVolume } from './circlemath.js';
//for default exports, we do not need to destructure, and we can name the variable whatever we like:
import renamedFunction from './circlemath.js';

//alternatively, you will often combine both styles into a single lined import, like so:
// import renamedFunction, {getCircleArea,getSphereVolume} from './circlemath.js';

console.log(getCircleArea(5));
console.log(getSphereVolume(10));
console.log(renamedFunction(1));
