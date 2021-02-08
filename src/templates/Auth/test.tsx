import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth title">
        <input type="text" />
      </Auth>
    )

    expect(screen.getAllByRole('img', { name: /Won Games/i })).toHaveLength(2)

    expect(
      screen.getByRole('heading', {
        name: /All yout favorite games in one place/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /won is the best of most complete gaming platform/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Auth title/i })
    ).toBeInTheDocument()

    expect(
      screen.getByText(/Won Games 2021 Todos os direitos reservados/i)
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
