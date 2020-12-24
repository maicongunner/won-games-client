import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'

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
})