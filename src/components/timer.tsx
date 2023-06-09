import { secondsToTime } from '../utils/seconds-to-timer'

interface TimerProps {
  mainTime: number
}

export function Timer({ mainTime }: TimerProps) {
  console.log(mainTime)
  return (
    <div className="flex h-60 w-[100%] items-center justify-center font-sans text-6xl">
      {secondsToTime(mainTime)}
    </div>
  )
}
