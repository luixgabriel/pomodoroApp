import { secondsToTime } from '../utils/seconds-to-timer'

interface TimerProps {
  mainTime: number
}

export function Timer({ mainTime }: TimerProps) {
  return <div className="timer">{secondsToTime(mainTime)}</div>
}
