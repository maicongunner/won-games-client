import { GameCardProps } from 'components/GameCard'
import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  hightlight?: HighlightProps
  games?: GameCardProps[]
}

const Showcase = ({ title, hightlight, games }: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!hightlight && <Highlight {...hightlight} />}
    {!!games && <GameCardSlider items={games} />}
  </S.Wrapper>
)

export default Showcase
