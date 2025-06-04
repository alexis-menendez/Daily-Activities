import { gql } from '@apollo/client';

// ! When adding more fields to the Profile type, make sure to update the queries and mutations to reflect those changes.
export const ADD_PROFILE = gql`
  mutation addProfile($profileInput: ProfileInput!) {
    addProfile(profileInput: $profileInput) {
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

export const ADD_SKILL = gql`
  mutation addSkill($profileId: ID!, $skill: String!) {
    addSkill(profileId: $profileId, skill: $skill) {
      _id
      skills
    }
  }
`;
