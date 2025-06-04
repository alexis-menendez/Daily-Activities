import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/movies', () => {
    return HttpResponse.json([
      {
        title: 'Forrest Gump',
        description: 'The history of the United States from the 1950s to the \'70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.',
        yearReleased: 1994,
        IMDbRating: 8.8
      },
      {
        title: 'Fight Club',
        description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.',
        yearReleased: 1999,
        IMDbRating: 8.8
      },
      {
        title: 'Se7en',
        description: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
        yearReleased: 1995,
        IMDbRating: 8.6
      }
    ])
  })
];
