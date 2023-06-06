import React, { useState } from 'react'
import { useInterval } from '../hooks/useInterval'

interface PomodoroTimerProps {
  defaultPomodoroTimer: number
}

export function PomodoroTimer({
  defaultPomodoroTimer,
}: PomodoroTimerProps): React.JSX.Element {
  const [mainTime, setMainTime] = useState(defaultPomodoroTimer)
  useInterval(() => {
    setMainTime(mainTime + 1)
  }, 1000)

  return (
    <div>
      <h1>{mainTime}</h1>
    </div>
  )
}
