import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const QUERY_UPCOMING = gql`
  query QueryUpcoming($date: Date!) {
    upcomingGames: games(where: { release_date_lte: $date }, limit: 8) {
      ...GameFragment
    }

    showcase: home {
      upcommingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
  }

  ${GameFragment}
  ${HighlightFragment}
`
