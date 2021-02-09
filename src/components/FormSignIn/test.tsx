import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />)

    expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByText(/Forgot your password\?/i)).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByText(/Don’t have an account\?/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()
  })
})
