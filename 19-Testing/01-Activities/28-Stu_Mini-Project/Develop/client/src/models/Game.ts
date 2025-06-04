export interface Game {
  id: string;
  maskedWord: string;
  guesses: string[];
  isCorrect: boolean;
  isComplete: boolean;
  isWinner: boolean;
  solution: string;
  // TODO: Add a property to track the number of guesses remaining
}
