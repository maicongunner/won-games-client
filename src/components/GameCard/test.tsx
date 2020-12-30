import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  price: 'R$ 215,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<GameCard {...props} />)

    expect(container.firstChild).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByText(props.price)).toBeInTheDocument()

    expect(screen.getByText(props.price)).not.toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(screen.getByText(props.price)).not.toHaveStyle({
      color: '#8F8F8F'
    })

    expect(screen.getByText(props.price)).toHaveStyle({
      'background-color': '#3CD3C1'
    })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 200,00" />)

    expect(screen.getByText(props.price)).toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(screen.getByText('R$ 200,00')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
  })
})
