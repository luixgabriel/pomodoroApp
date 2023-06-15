import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Home } from '../pages/home/home'

describe('Home Component', () => {
  it('Should be render', () => {
    const { getByText } = render(<Home />)
    expect(getByText('Pomodoro App')).toBeInTheDocument()
    expect(getByText('Task')).toBeInTheDocument()
    expect(getByText('Timer')).toBeInTheDocument()
    expect(getByText('Short time to rest')).toBeInTheDocument()
    expect(getByText('Long time to rest')).toBeInTheDocument()
    expect(getByText('Number of pomodoros')).toBeInTheDocument()
  })

  it('Should be able to fire event', () => {
    const { getByText } = render(<Home />)
    const startButton = getByText('Start')
    expect(localStorage.getItem('timerState')).toBe('true')
    expect(localStorage.getItem('task')).toBe('Minha Tarefa')
  })
})
