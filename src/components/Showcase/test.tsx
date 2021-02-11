import 'match-media-mock'
import { screen } from '@testing-library/react'
import hightlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

import Showcase from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  title: 'Most Popular',
  hightlight: hightlightMock,
  games: gamesMock
}

describe('<Showcase />', () => {
  it('should render full component', () => {
    const { container } = renderWithTheme(<Showcase {...props} />)

    // title
    expect(screen.getByText(props.title)).toBeInTheDocument()

    // hightlight
    expect(
      screen.getByRole('heading', { name: props.hightlight.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.hightlight.subTitle })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: props.hightlight.buttonLabel })
    ).toBeInTheDocument()

    // games
    expect(container.querySelector('.slick-slider')).toBeInTheDocument()
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)

    // snap
    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render whithout title', () => {
    renderWithTheme(<Showcase hightlight={hightlightMock} games={gamesMock} />)

    expect(screen.queryByText(props.title)).not.toBeInTheDocument()
  })

  it('should render whithout highlight', () => {
    renderWithTheme(<Showcase title="Most Popular" games={gamesMock} />)

    expect(
      screen.queryByRole('heading', { name: props.hightlight.title })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: props.hightlight.subTitle })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: props.hightlight.buttonLabel })
    ).not.toBeInTheDocument()
  })

  it('should render whithout games', () => {
    const { container } = renderWithTheme(
      <Showcase title="Most Popular" hightlight={hightlightMock} />
    )

    expect(container.querySelector('.slick-slider')).not.toBeInTheDocument()
    expect(container.querySelectorAll('.slick-active')).not.toHaveLength(4)
  })
})
