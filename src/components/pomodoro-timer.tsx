import React, { useState, useEffect } from 'react'
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
}: PomodoroTimerProps) {
  const [mainTime, setMainTime] = useState<any>(
    PomodoroTimer * 60 || localStorage.getItem('pomodoroTimer'),
  )
  const [timeCounting, setTimeCounting] = useState(false)
  const [working, setWorking] = useState(false)

  useEffect(() => {
    if (working) {
      document.body.classList.remove('bg-blue-500')
      document.body.classList.add('bg-red-500')
    }
  }, [working])

  useInterval(
    () => {
      setMainTime(mainTime - 1)
    },
    timeCounting ? 1000 : null,
  )

  const configureWork = () => {
    setTimeCounting(true)
    setWorking(true)
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex min-h-[80%] min-w-[50%] flex-col items-center justify-center gap-3 rounded-md  text-white">
        <div>
          <h1 className="flex gap-3 text-5xl font-bold">
            <Briefcase size={45} />
            You are working
          </h1>
        </div>
        <h2 className="text-4xl font-semibold">
          {localStorage.getItem('task')}
        </h2>
        <Timer mainTime={mainTime} />
        <div className="flex w-full items-center justify-center">
          <Button
            onclick={() => configureWork()}
            text="Work"
            classname="bg-red-950 p-2 rounded-md text-white mx-5 w-20"
          />
          <Button
            text="teste"
            classname="bg-red-950 p-2 rounded-md text-white mx-5 w-20"
          />
          <Button
            onclick={() => setTimeCounting(!timeCounting)}
            text={timeCounting ? 'Pause' : 'Play'}
            classname="bg-red-950 p-2 rounded-md text-white mx-5 w-20"
          />
        </div>
      </div>
    </div>
  )
}
