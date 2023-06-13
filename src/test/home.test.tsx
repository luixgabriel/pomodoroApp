import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Home } from '../pages/home/home'

describe('Home Component', () => {
  it('Should be render', () => {
    const { getByText } = render(<Home />)

    expect(getByText('Pomodoro App')).toBeInTheDocument()
  })
})
