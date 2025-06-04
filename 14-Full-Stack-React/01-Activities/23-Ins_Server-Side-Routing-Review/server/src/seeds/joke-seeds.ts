import { Joke } from '../models/index.js';

export const seedJokes = async () => {
  await Joke.bulkCreate([
    { 
      jokeTeller: 'John', 
      joke: "Why don't scientists trust atoms? Because they make up everything!"
    },
    { 
      jokeTeller: 'Emily', 
      joke: "Parallel lines have so much in common. It’s a shame they’ll never meet."
    },
    { 
      jokeTeller: 'Anna', 
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!"
    },
    { 
      jokeTeller: 'David', 
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
  ]);
};
