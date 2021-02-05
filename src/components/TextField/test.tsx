import { Email } from '@styled-icons/material-outlined'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<TextField label="text" />)

    expect(container).toMatchSnapshot()
  })

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

  it('should render with icon', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} label="text" />
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render with icon on the left side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} label="text" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({
      order: 0
    })
  })

  it('should render with icon on the right side', () => {
    renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        label="text"
        iconPosition="right"
      />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({
      order: 1
    })
  })
})

it('Does not changes its value when disabled', async () => {
  const onInput = jest.fn()
  renderWithTheme(
    <TextField
      onInput={onInput}
      label="TextField"
      labelFor="TextField"
      id="TextField"
      disabled
    />
  )

  const input = screen.getByRole('textbox')
  expect(input).toBeDisabled()

  const text = 'text'
  userEvent.type(input, text)

  await waitFor(() => {
    expect(input).not.toHaveValue(text)
  })
  expect(onInput).not.toHaveBeenCalled()
})

it('Is accessible by tab', () => {
  renderWithTheme(
    <TextField label="TextField" labelFor="TextField" id="TextField" />
  )

  const input = screen.getByRole('textbox')
  expect(document.body).toHaveFocus()

  userEvent.tab()
  expect(input).toHaveFocus()
})

it('Is not accessible by tab when disabled', () => {
  renderWithTheme(
    <TextField label="TextField" labelFor="TextField" id="TextField" disabled />
  )

  const input = screen.getByLabelText('TextField')
  expect(document.body).toHaveFocus()

  userEvent.tab()
  expect(input).not.toHaveFocus()
})

it('Renders with error', () => {
  const { container } = renderWithTheme(
    <TextField
      label="TextField"
      labelFor="TextField"
      id="TextField"
      messageError="error message"
    />
  )

  expect(screen.getByText('error message')).toBeInTheDocument()

  const input = screen.getByRole('textbox')
  expect(input.parentElement).toHaveStyle({
    'border-color': '#FF6347'
  })
  expect(container.firstChild).toMatchSnapshot()
})
