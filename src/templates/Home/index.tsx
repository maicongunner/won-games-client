import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'

import * as S from './styles'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGamesTitle?: string
  newGames: GameCardProps[]
  mostPopularGamesTitle?: string
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGamesTitle?: string
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  freeGamesTitle?: string
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  newGamesTitle = 'New Games',
  newGames,
  mostPopularGamesTitle = 'Most Popular',
  mostPopularHighlight,
  mostPopularGames,
  upcommingGamesTitle = 'Upcoming',
  upcommingGames,
  upcommingHighligth,
  freeGamesTitle = 'Free Games',
  freeGames,
  freeHighligth
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title={newGamesTitle} games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title={mostPopularGamesTitle}
      hightlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase
      title={upcommingGamesTitle}
      games={upcommingGames}
      hightlight={upcommingHighligth}
    />

    <Showcase
      title={freeGamesTitle}
      hightlight={freeHighligth}
      games={freeGames}
    />
  </Base>
)

export default Home
