import { gql } from "@apollo/client";

export const FILMS_QUERY = gql`
  query Films {
    allFilms {
      totalCount
      films {
        director
        title
        episodeID
        releaseDate
      }
    }
  }
`;
