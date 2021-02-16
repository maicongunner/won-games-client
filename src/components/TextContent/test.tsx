import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TextContent from '.'

const props = {
  title: 'Description',
  content: '<h1>Content</h1>'
}

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />)

    expect(
      screen.getByRole('heading', { name: /Description/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(<TextContent content={props.content} />)

    expect(
      screen.queryByRole('heading', { name: /Description/i })
    ).not.toBeInTheDocument()
  })

  it('should render title and background color on desktop version', () => {
    renderWithTheme(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', { name: /description/i })
      .parentElement

    expect(wrapper).toHaveStyle({ color: '#FAFAFA' })

    expect(wrapper).not.toHaveStyle({ background: '#FAFAFA' })
  })

  it('should render title and background color on mobile version', () => {
    renderWithTheme(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', { name: /description/i })
      .parentElement

    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    })

    expect(wrapper).toHaveStyleRule('background', '#FAFAFA', {
      media: '(min-width: 768px)'
    })
  })
})
