import React, { useState } from 'react'
import { useInterval } from '../hooks/useInterval'
import { Button } from './button'
import { Timer } from './timer'

interface PomodoroTimerProps {
  PomodoroTimer: number
  shortRestTIme: number
  longRestTime: number
  cycles: number
}

export function PomodoroTimer({
  PomodoroTimer,
  shortRestTIme,
  longRestTime,
  cycles,
}: PomodoroTimerProps): React.JSX.Element {
  const [mainTime, setMainTime] = useState(PomodoroTimer)
  useInterval(() => {
    setMainTime(mainTime - 1)
  }, 1000)

  return (
    <div className="flex items-center justify-center bg-yellow-400">
      <div>
        <h2>You are working</h2>
        <Timer mainTime={mainTime} />
        <Button text="teste" />
        <Button text="teste" />
        <Button text="teste" classname="bg-red-500 text-white" />
      </div>
    </div>
  )
}
