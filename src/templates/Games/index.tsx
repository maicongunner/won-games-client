import Base from 'templates/Base'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'

import * as S from './styles'
import { KeyboardArrowDown } from '@styled-icons/material-outlined'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const handleFilter = () => {
  return
}

const handleShowMore = () => {
  return
}

const GamesTemplate = ({ filterItems, games = [] }: GamesTemplateProps) => (
  <Base>
    <S.Main>
      <ExploreSidebar items={filterItems} onFilter={handleFilter} />

      <section>
        <Grid>
          {games.map((item) => (
            <GameCard key={item.title} {...item} />
          ))}
        </Grid>

        <S.ShowMore role="button" onClick={handleShowMore}>
          <p>Show More</p>
          <KeyboardArrowDown size={35} />
        </S.ShowMore>
      </section>
    </S.Main>
  </Base>
)

export default GamesTemplate
