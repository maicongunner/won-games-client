import Home, { HomeTemplateProps } from 'templates/Home'

import { initializeApollo } from 'utils/apollo'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const TODAY = new Date().toISOString().slice(0, 10) // 2021-01-27

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: TODAY }
  })

  return {
    props: {
      revalidate: 10,
      banners: bannerMapper(banners),
      newGames: gamesMapper(newGames),
      newGamesTitle: sections?.newGames?.title,
      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections?.popularGames!.games),
      upcommingGamesTitle: sections?.upcommingGames?.title,
      upcommingGames: gamesMapper(upcomingGames),
      upcommingHighligth: highlightMapper(sections?.upcommingGames?.highlight),
      freeGamesTitle: sections?.freeGames?.title,
      freeGames: gamesMapper(freeGames),
      freeHighligth: highlightMapper(sections?.freeGames?.highlight)
    }
  }
}
