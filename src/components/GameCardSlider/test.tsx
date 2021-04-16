import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCardSlider from '.'

describe('<GameCardSlider />', () => {
  const items = [
    {
      slug: 'population-zero',
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x140',
      price: 235,
      promotionalPrice: 215
    },
    {
      slug: 'population-zero',
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x141',
      price: 235,
      promotionalPrice: 215
    },
    {
      slug: 'population-zero',
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x142',
      price: 235,
      promotionalPrice: 215
    },
    {
      slug: 'population-zero',
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x143',
      price: 235,
      promotionalPrice: 215
    },
    {
      slug: 'population-zero',
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x144',
      price: 235,
      promotionalPrice: 215
    },
    {
      slug: 'population-zero',
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x145',
      price: 235,
      promotionalPrice: 215
    }
  ]

  describe('<GameCardSlider />', () => {
    it('should render correctly', () => {
      const { container } = renderWithTheme(<GameCardSlider items={items} />)

      expect(container.querySelector('.slick-slide')).toBeInTheDocument()
      expect(container.querySelectorAll('.slick-slide')).toHaveLength(6)
    })

    it('should render with 4 elements active only', () => {
      const { container } = renderWithTheme(<GameCardSlider items={items} />)

      expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
    })

    it('should render white arrows if color passed', () => {
      renderWithTheme(<GameCardSlider items={items} color="white" />)

      expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
        color: '#FAFAFA'
      })
      expect(screen.getByLabelText(/next games/i)).toHaveStyle({
        color: '#FAFAFA'
      })
    })
  })
})
