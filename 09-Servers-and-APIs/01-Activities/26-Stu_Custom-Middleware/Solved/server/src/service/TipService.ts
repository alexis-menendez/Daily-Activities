import fs from 'node:fs/promises';
import { v4 as uuidv4 } from 'uuid';

class Tip {
  username: string;
  topic: string;
  tip: string;
  tip_id: string;

  constructor(username: string, topic: string, tip: string, tip_id: string) {
    this.username = username;
    this.topic = topic;
    this.tip = tip;
    this.tip_id = tip_id;
  }
}

class TipService {
  private async read() {
    return await fs.readFile('db/tips.json', {
      flag: 'a+',
      encoding: 'utf8',
    });
  }

  private async write(tips: Tip[]) {
    return await fs.writeFile('db/tips.json', JSON.stringify(tips, null, '\t'));
  }

  async getTips() {
    return await this.read().then((tips) => {
      let parsedTips: Tip[];

      // If tips isn't an array or can't be turned into one, send back a new empty array
      try {
        parsedTips = [].concat(JSON.parse(tips));
      } catch (err) {
        parsedTips = [];
      }

      return parsedTips;
    });
  }

  async addTip(username: string, topic = 'UX', tip: string) {
    if (!username || !tip) {
      throw new Error('Tip and username cannot be blank');
    }

    // Add a unique id to the tip using uuid package
    const newTip: Tip = {
      username: username,
      topic: topic,
      tip: tip,
      tip_id: uuidv4(),
    };

    // Get all tips, add the new tip, write all the updated tips, return the newTip
    return await this.getTips()
      .then((tips) => {
        return [...tips, newTip];
      })
      .then((updatedTips) => this.write(updatedTips))
      .then(() => newTip);
  }
}

export default new TipService();
