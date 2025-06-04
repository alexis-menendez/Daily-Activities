import { setupWorker } from 'msw/browser';
import { handlers } from './userRoutes';

export const worker = setupWorker(...handlers);
