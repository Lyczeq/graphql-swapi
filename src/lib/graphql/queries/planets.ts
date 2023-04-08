import { gql } from "@apollo/client";

export const PLANETS_QUERY = gql`
  query Planets {
    allPlanets {
      planets {
        id
        name
        population
      }
    }
  }
`;
