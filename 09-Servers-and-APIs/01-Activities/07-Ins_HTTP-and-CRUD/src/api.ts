export interface User {
  first_name: string;
  last_name: string;
  email: string;
  id?: number;
}

class UserAPI {
  // ! Go to https://retool.com/api-generator to generate a your own API endpoint
  private REQUEST_URL = 'https://api-generator.retool.com/fa3Vj1/users';

  async getAllUsers(): Promise<User[]> {
    const response = await fetch(this.REQUEST_URL, {
      method: 'GET',
    });
    /*
      ? Because Fetch defaults to GET, you could write the above as:
      const response = await fetch(this.REQUEST_URL);
    */
    const users = await response.json();
    console.log(users);
    return users;
  }

  async createUser(user: User) {
    const response = await fetch(this.REQUEST_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    return response;
  }
}
const userAPI = new UserAPI();
export { userAPI };
