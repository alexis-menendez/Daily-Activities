import fs from 'node:fs/promises';
import { v4 as uuidv4 } from 'uuid';

class State {
  name: string;
  id: string;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }
}

class HistoryService {
  private async read() {
    return await fs.readFile('db/db.json', {
      flag: 'a+',
      encoding: 'utf8',
    });
  }

  private async write(states: State[]) {
    return await fs.writeFile('db/db.json', JSON.stringify(states, null, '\t'));
  }

  async getStates() {
    return await this.read().then((states) => {
      let parsedStates: State[];

      // If states isn't an array or can't be turned into one, send back a new empty array
      try {
        parsedStates = [].concat(JSON.parse(states));
      } catch (err) {
        parsedStates = [];
      }

      return parsedStates;
    });
  }

  async addState(state: string) {
    if (!state) {
      throw new Error('state cannot be blank');
    }

    // Add a unique id to the state using uuid package
    const newState: State = { name: state, id: uuidv4() };

    // Get all cities, add the new city, write all the updated cities, return the newCity
    return await this.getStates()
      .then((states) => {
        if (states.find((index) => index.name === state)) {
          return states;
        }
        return [...states, newState];
      })
      .then((updatedStates) => this.write(updatedStates))
      .then(() => newState);
  }

  async removeState(id: string) {
    return await this.getStates()
      .then((states) => states.filter((state) => state.id !== id))
      .then((filteredStates) => this.write(filteredStates));
  }
}

export default new HistoryService();
