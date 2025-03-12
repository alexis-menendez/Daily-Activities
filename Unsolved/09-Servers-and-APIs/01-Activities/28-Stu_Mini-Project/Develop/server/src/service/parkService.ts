import fs from 'node:fs/promises';
import dotenv from 'dotenv';
dotenv.config();

interface Park {
  id: string;
  fullName: string;
  description: string;
  url: string;
  designation: string;
  images: ParkImage[];
}

interface ParkImage {
  url: string;
  title: string;
  altText: string;
}

interface ParkEvent {
  id: string;
  title: string;
  location: string;
  description: string;
  infourl: string;
  datestart: string;
  dateend: string;
}

interface StateObject {
  stateName: string;
  stateCode: string;
}

class ParkService {
  private baseURL?: string;

  private apiKey?: string;

  constructor() {
    this.baseURL = process.env.API_BASE_URL || '';

    this.apiKey = process.env.API_KEY || '';
  }

  async getParksByState(state: string) {
    try {
      const response = await fetch(
        `${this.baseURL}/parks?limit=10&stateCode=${state}&api_key=${this.apiKey}`
      );

      const parks = await response.json();

      const mappedParks = await this.parkDataMapping(parks.data);
      return mappedParks;
    } catch (err) {
      console.log('Error:', err);
      return err;
    }
  }

  async parkDataMapping(parks: Park[]) {
    const parksArray: Park[] = parks.map((park) => {
      const parkObject: Park = {
        id: park.id,
        fullName: park.fullName,
        description: park.description,
        url: park.url,
        designation: park.designation,
        images: park.images,
      };

      return parkObject;
    });

    return parksArray;
  }

  async getClosestEventByState(state: string): Promise<ParkEvent | string> {
    try {
      const response = await fetch(
        `${this.baseURL}/events?limit=10&stateCode=${state}&api_key=${this.apiKey}`
      );

      const events = await response.json();

      const mappedEvents = await this.parkEventDataMapping(events.data);

      if (mappedEvents.length === 0) {
        return 'No events found';
      }

      const closestEvent = await this.findClosestParkEvent(mappedEvents);
      return closestEvent;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async parkEventDataMapping(parkEvent: ParkEvent[]) {
    const parkEventsArray: ParkEvent[] = parkEvent.map((occasion) => {
      const parkEventObject: ParkEvent = {
        id: occasion.id,
        title: occasion.title,
        location: occasion.location,
        description: occasion.description,
        infourl: occasion.infourl || 'No URL Available',
        datestart: occasion.datestart,
        dateend: occasion.dateend,
      };

      return parkEventObject;
    });

    return parkEventsArray;
  }

  async findClosestParkEvent(events: ParkEvent[]) {
    const today = new Date();
    const closestEvent = events.reduce((prev, current) => {
      const prevDate = new Date(prev.datestart);
      const currentDate = new Date(current.datestart);
      const prevDiff = Math.abs(today.getTime() - prevDate.getTime());
      const currentDiff = Math.abs(today.getTime() - currentDate.getTime());
      return prevDiff < currentDiff ? prev : current;
    });

    return closestEvent;
  }

  async convertStateNameToCode(state: string) {
    const stateCodes = await this.read();
    const parsedStateCodes = JSON.parse(stateCodes);
    const foundState = parsedStateCodes.filter((stateObject: StateObject) => {
      //ensuring casing of input does not matter
      return stateObject.stateName.toLowerCase() === state.toLowerCase();
    });

    const stateCode = foundState[0].stateCode;
    return stateCode;
  }

  async convertStateCodeToName(stateCode: string) {
    const stateCodes = await this.read();
    const parsedStateCodes = JSON.parse(stateCodes);
    const foundState = parsedStateCodes.filter((stateObject: StateObject) => {
      //ensuring casing of input does not matter
      return stateObject.stateCode.toLowerCase() === stateCode.toLowerCase();
    });

    const stateName = foundState[0].stateName;
    return stateName;
  }

  private async read() {
    return await fs.readFile('db/stateCodes.json', {
      flag: 'a+',
      encoding: 'utf8',
    });
  }
}

export default new ParkService();
