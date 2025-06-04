const typeDefs = `
  # Define which fields are accessible from the Class model
  type Class {
    _id: ID!
    name: String
    building: String
    creditHours: Int
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    classes: [Class]
  }
`;

export default typeDefs;
