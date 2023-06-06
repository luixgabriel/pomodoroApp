import React, { useState } from 'react'
import { useInterval } from '../hooks/useInterval'
import { Button } from './button'
import { Timer } from './timer'

interface PomodoroTimerProps {
  defaultPomodoroTimer: number
}

export function PomodoroTimer({
  defaultPomodoroTimer,
}: PomodoroTimerProps): React.JSX.Element {
  const [mainTime, setMainTime] = useState(defaultPomodoroTimer)
  useInterval(() => {
    setMainTime(mainTime - 1)
  }, 1000)

  return (
    <div>
      <h2>trabalahdno</h2>
      <Timer mainTime={mainTime} />
      <Button text="oiii" />
    </div>
  )
}
