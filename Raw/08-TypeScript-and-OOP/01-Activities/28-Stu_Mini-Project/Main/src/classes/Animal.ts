//Class to create new Animal objects
class Animal {
  species: string;
  hungry: boolean;
  weight: number;
  amount: number;
  constructor(
    species: string,
    hungry: boolean,
    amount: number,
    weight: number
  ) {
    this.species = species;
    this.hungry = hungry;
    this.weight = weight;
    this.amount = amount;
  }

  makeRollCall(): void {
    console.log(
      `There are ${this.amount} in the enclosure and the ${this.species} are ${
        this.hungry ? 'hungry' : 'full'
      }!`
    );
  }
}
export default Animal;
