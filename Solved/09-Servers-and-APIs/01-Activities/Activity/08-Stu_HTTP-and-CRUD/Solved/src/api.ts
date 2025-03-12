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
    const response = await fetch(this.REQUEST_URL); // ? Fetch defaults to GET
    const users = await response.json();
    console.log(users);
    return users;
  }

  async getUser(id: number): Promise<Response> {
    const response = await fetch(`${this.REQUEST_URL}/${id}`);

    return response;
  }

  async createUser(user: User): Promise<Response> {
    const response = await fetch(this.REQUEST_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    return response;
  }

  async updateUser(user: User): Promise<Response> {
    const response = await fetch(`${this.REQUEST_URL}/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    return response;
  }

  async deleteUser(id: number): Promise<Response> {
    const response = await fetch(`${this.REQUEST_URL}/${id}`, {
      method: 'DELETE',
    });

    return response;
  }
}
const userAPI = new UserAPI();
export { userAPI };
