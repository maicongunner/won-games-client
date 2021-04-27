import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'
import { GameFragment } from 'graphql/fragments/game'
import { HightlightFragment } from 'graphql/fragments/highlight'

export const QUERY_HOME = gql`
  query QueryHome($date: Date!) {
    banners {
      ...BannerFragment
    }

    newGames: games(
      where: { release_date_lte: $date }
      sort: "release_date:desc"
      limit: 8
    ) {
      ...GameFragment
    }

    upcomingGames: games(where: { release_date_lte: $date }, limit: 8) {
      ...GameFragment
    }

    freeGames: games(limit: 8) {
      ...GameFragment
    }

    sections: home {
      newGames {
        title
        highlight {
          ...HightlightFragment
        }
      }

      popularGames {
        title
        highlight {
          ...HightlightFragment
        }
        games {
          ...GameFragment
        }
      }

      upcommingGames {
        title
        highlight {
          ...HightlightFragment
        }
      }

      freeGames {
        title
        highlight {
          ...HightlightFragment
        }
      }
    }
  }

  ${BannerFragment}
  ${GameFragment}
  ${HightlightFragment}
`
