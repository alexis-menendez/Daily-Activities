import { gql } from '@apollo/client';

// ! When adding more fields to the Profile type, make sure to update the queries and mutations to reflect those changes.
export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      username
      firstName
      lastName
      email
      zipCode
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      username
      firstName
      lastName
      email
      zipCode
      skills
    }
  }
`;
