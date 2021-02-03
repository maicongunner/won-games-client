import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    renderWithTheme(<TextField label="text" />)

    expect(screen.getByText(/text/i)).toBeInTheDocument()
  })

  it('should render without label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByText(/text/i)).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="text placeholder" />)

    expect(screen.getByPlaceholderText(/text/i)).toBeInTheDocument()
  })

  it('changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        label="textField"
        labelFor="textField"
        id="textField"
        onInput={onInput}
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'my new text'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })
})
