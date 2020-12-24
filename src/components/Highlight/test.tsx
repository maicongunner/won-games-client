import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'
import * as S from './styles'

const props = {
  title: 'heading 1',
  subTitle: 'heading 2',
  backgroundImage: '/img/red-read-img.jpg',
  buttonLabel: 'buy now',
  buttonLink: '/rdr2'
}

describe('<Highlight />', () => {
  it('should render the headings and button', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render the background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      'background-image': `url(${props.backgroundImage})`
    })
  })

  it('should render float image', () => {
    renderWithTheme(
      <Highlight {...props} floatImage="/img/red-dead-float.png" />
    )

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/img/red-dead-float.png'
    )
  })

  it('should render align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.WrapperContent}`
    })
  })

  it('should render align left by default', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment="left" />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.WrapperContent}`
    })
  })
})
