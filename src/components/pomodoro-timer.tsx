import React, { useState } from 'react'
import { useInterval } from '../hooks/useInterval'
import { Button } from './button'
import { Timer } from './timer'
import { Briefcase } from 'lucide-react'

interface PomodoroTimerProps {
  task: string
  PomodoroTimer: number
  shortRestTIme: number
  longRestTime: number
  cycles: number
}

export function PomodoroTimer({
  task,
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
    <div className="flex h-screen items-center justify-center ">
      <div className="flex min-h-[80%] min-w-[50%] flex-col items-center justify-center gap-3 rounded-md bg-red-400">
        <h1 className="flex gap-1 text-5xl font-bold">
          <Briefcase />
          You are working
        </h1>
        <h2 className="text-4xl font-semibold">
          {localStorage.getItem('task')}
        </h2>
        <Timer mainTime={mainTime} />
        <div>
          <Button text="teste" classname="bg-red-500 text-white mx-2" />
          <Button text="teste" classname="bg-red-500 text-white mx-2" />
          <Button text="teste" classname="bg-red-500 text-white mx-2" />
        </div>
      </div>
    </div>
  )
}
