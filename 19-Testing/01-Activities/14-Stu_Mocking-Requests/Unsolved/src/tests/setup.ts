import { afterEach, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { handlers } from '../mocks/userRoutes';

// TODO: declare a new instance of the msw server named server using the setupServer function and pass in the handlers from the userRoutes file

// TODO: Uncomment the beforeAll, afterEach, and afterAll functions below once the handlers have been set up
// beforeAll(() => {
//     server.listen();
// });

// afterEach(() => {
//     cleanup();
//     server.resetHandlers();
// });

// afterAll(() => {
//     server.close();
// });
