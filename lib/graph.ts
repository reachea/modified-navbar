import { gql } from "@apollo/client";

export const CHARACTERS_QUERY = gql`
  query characters{
    characters{
      results{
        id
        name
        status
        species
        image
      }
    }
  }
`