import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json([
      {
        name: 'John Doe',
        email: 'john@doe.com',
        phone: '123-456-7890',
      },
      {
        name: 'Jane Smith',
        email: 'jane@smith.com',
        phone: '098-765-4321',
      },
      {
        name: 'Joe Schmoe',
        email: 'j@schmoe.com',
        phone: '567-890-1234',
      },
      {
        name: 'Tim Johnson',
        email: 'tj@johnson.com',
        phone: '345-678-9012',
      },
      {
        name: 'Sally Johnson',
        email: 's@johnson.com',
        phone: '234-567-8901',
      },
      {
        name: 'Bob Johnson',
        email: 'b@johnson.com',
        phone: '456-789-0123',
      },
    ]);
  }),
];
