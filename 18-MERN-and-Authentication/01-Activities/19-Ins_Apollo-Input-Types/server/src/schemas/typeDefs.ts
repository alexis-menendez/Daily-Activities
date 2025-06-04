const typeDefs = `
  type Profile {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    zipCode: String
    skills: [String]!
  }

  input ProfileInput {
    username: String
    firstName: String
    lastName: String
    email: String
    zipCode: String
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(profileInput: ProfileInput!): Profile
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

export default typeDefs;
