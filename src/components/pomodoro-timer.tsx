import { useState, useEffect, useCallback } from 'react'
import { useInterval } from '../hooks/useInterval'
import { Button } from './button'
import { Timer } from './timer'
import { Briefcase, BedDouble, XCircle } from 'lucide-react'
import bellStart from '../sounds/bell-start.mp3'
import bellFinish from '../sounds/bell-finish.mp3'
import { secondsToHours } from '../utils/seconds-to-hours'
const audioStartWorking = new Audio(bellStart)
const audioStopWorking = new Audio(bellFinish)

interface PomodoroTimerProps {
  task: string
  PomodoroTimer: number
  shortRestTime: number
  longRestTime: number
  cycles: number
}

export function PomodoroTimer(props: PomodoroTimerProps) {
  const [mainTime, setMainTime] = useState<any>(
    props.PomodoroTimer || localStorage.getItem('pomodoroTimer'),
  )

  const [timeCounting, setTimeCounting] = useState(false)
  const [working, setWorking] = useState(false)
  const [resting, setResting] = useState(false)
  const [cyclesQtdManager, setCyclesQtdManager] = useState(
    new Array(Number(localStorage.getItem('cycles')) - 1).fill(true),
  )
  const [completedCycles, setCompletedCycles] = useState(0)
  const [fullWorkingTime, setFullWorkingTime] = useState(0)
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0)

  useInterval(
    () => {
      setMainTime(mainTime - 1)
      if (working) setFullWorkingTime(fullWorkingTime + 1)
    },
    timeCounting ? 1000 : null,
  )

  const configureWork = useCallback(() => {
    setTimeCounting(true)
    setWorking(true)
    setResting(false)
    setMainTime(localStorage.getItem('pomodoroTimer'))
    audioStartWorking.play()
  }, [setTimeCounting, setWorking, setResting, setMainTime])

  const configureRest = useCallback(
    (long: boolean) => {
      setTimeCounting(true)
      setWorking(false)
      setResting(true)
      if (long) {
        setMainTime(localStorage.getItem('longRestTime'))
      } else {
        setMainTime(localStorage.getItem('shortRestTime'))
      }
      audioStopWorking.play()
    },
    [setTimeCounting, setWorking, setResting],
  )

  const closedTask = () => {
    localStorage.removeItem('timerState')
    localStorage.removeItem('pomodoroTimer')
    localStorage.removeItem('longRestTime')
    localStorage.removeItem('cycles')
    localStorage.removeItem('task')
    localStorage.removeItem('shortRestTime')
    window.location.reload()
  }

  useEffect(() => {
    if (working) {
      document.body.classList.remove('bg-blue-500')
      document.body.classList.add('bg-red-500')
    }
    if (resting) {
      document.body.classList.remove('bg-red-500')
      document.body.classList.add('bg-blue-500')
    }

    if (mainTime > 0) return

    if (working && cyclesQtdManager.length > 0) {
      configureRest(false)
      cyclesQtdManager.pop()
    } else if (working && cyclesQtdManager.length <= 0) {
      configureRest(true)
      setCyclesQtdManager(
        new Array(Number(localStorage.getItem('cycles')) - 1).fill(true),
      )
      setCompletedCycles(completedCycles + 1)
    }

    if (working) setNumberOfPomodoros(numberOfPomodoros + 1)
    if (resting) configureWork()
  }, [
    working,
    resting,
    mainTime,
    configureRest,
    setCyclesQtdManager,
    completedCycles,
    configureWork,
    cyclesQtdManager,
    numberOfPomodoros,
  ])

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex min-h-[80%] min-w-[50%] flex-col items-center justify-center gap-3 rounded-md text-white ">
        <button
          className="absolute right-8 top-8 cursor-pointer"
          onClick={() => closedTask()}
        >
          <XCircle size={30} />
        </button>
        <div>
          {working ? (
            <h1 className="flex gap-3 text-5xl font-bold">
              <Briefcase size={45} />
              You are working
            </h1>
          ) : (
            <h1 className="flex gap-3 text-5xl font-bold">
              <BedDouble size={45} />
              You are rest
            </h1>
          )}
        </div>
        <h2 className="text-4xl font-semibold">
          {localStorage.getItem('task')}
        </h2>
        <Timer mainTime={mainTime} />
        <div className="flex w-full items-center justify-center">
          <Button
            onclick={() => configureWork()}
            text="Work"
            classname={
              working
                ? 'bg-red-600 p-2 rounded-md text-white mx-5 w-20'
                : 'bg-blue-600 p-2 rounded-md text-white mx-5 w-20'
            }
          />
          <Button
            onclick={() => setTimeCounting(!timeCounting)}
            text={timeCounting ? 'Pause' : 'Play'}
            classname={
              !working && !resting
                ? 'hidden'
                : 'bg-transparent p-2 rounded-md border text-white mx-5 w-20'
            }
          />
          <Button
            onclick={() => configureRest(false)}
            text="Rest"
            classname={
              working
                ? 'bg-red-600 p-2 rounded-md text-white mx-5 w-20'
                : 'bg-blue-600 p-2 rounded-md text-white mx-5 w-20'
            }
          />
        </div>
        <div className="my-4">
          <p>Completed cycles: {completedCycles} </p>
          <p>Worked hours: {secondsToHours(fullWorkingTime)} </p>
          <p>Completed pomodoros: {numberOfPomodoros}</p>
        </div>
      </div>
    </div>
  )
}
