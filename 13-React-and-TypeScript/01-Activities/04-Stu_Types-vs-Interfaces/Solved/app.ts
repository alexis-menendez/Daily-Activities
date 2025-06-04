// TODO: Add comments as indicated in the code comments below


// TODO: What is wrong with the following code? How would you correct it?

// The below code will not compile because we are not able to re-declare the type `Coordinate`.
// To accomplish the code below, we would instead need to use an `Coordinate` interface instead of a type.
// The use of an interface would allow us to use declaration merging and build upon the initial
// definition for `Coordinate` as intended below. This highlights one of the key differences
// between interfaces and types in that we are always able to extend an interface.

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

// Here we define an interface `FullName` and create a `fullName` object from it.
interface FullName {
  firstName: string;
  lastName: string;
}

const fullName: FullName = {
  firstName: 'First',
  lastName: 'Last',
};

// Here we define a class `TeamMember` which implements the `FullName` interface. In addition to the interface properties,
// we also add the `teamName` property to the class.
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

// Using the `TeamMember` class definition, we are able to create the `teamMember` object which includes the properties from
// the `FullName` interface as well as the additional property we added to the `TeamMember` class.
const teamMember: TeamMember = {
  firstName: 'First',
  lastName: 'Last',
  teamName: "Team"
};

// The key point here is that we are able to use our `FullName` interface to create either the `fullName` object or the
// `TeamMember` class. In the case of the class, we are able to easily implement additional functionality in addition to
// that provided by the interface.
