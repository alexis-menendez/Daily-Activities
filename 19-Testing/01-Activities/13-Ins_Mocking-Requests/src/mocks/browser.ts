import { setupWorker } from 'msw/browser';
import { handlers } from './movieRoutes'

export const worker = setupWorker(...handlers);
