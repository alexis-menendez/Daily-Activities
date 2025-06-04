// TODO: Add comments as indicated in the code comments below


// TODO: What is wrong with the following code? How would you correct it?

type Coordinate = {
  x: number;
}

type Coordinate = {
  y: number;
}

const coordinate1: Coordinate = {
  x: 100,
  y: 200
};

console.log(coordinate1);


// TODO: Explain the following code throughout. What is the difference between the `fullName` and `teamMember` objects?

interface FullName {
  firstName: string;
  lastName: string;
}

const fullName: FullName = {
  firstName: 'First',
  lastName: 'Last',
};

class TeamMember implements FullName {
  firstName: string;
  lastName: string;
  teamName: string;

  constructor(
    firstName: string,
    lastName: string,
    teamName: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.teamName = teamName;
  }
}

const teamMember: TeamMember = {
  firstName: 'First',
  lastName: 'Last',
  teamName: "Team"
};
