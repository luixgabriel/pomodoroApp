import { useState } from 'react'
import { PomodoroTimer } from './components/pomodoro-timer'
import { Newspaper, Timer, BedDouble, ArrowUp10 } from 'lucide-react'

function App() {
  const [isOpen, setIsOpen] = useState<boolean | string | null>(
    localStorage.getItem('timerState'),
  )
  const [task, setTask] = useState('')
  const [pomodoroTimer, setPomodoroTimer] = useState('')
  const [shortRestTime, setShortRestTime] = useState('')
  const [longRestTime, setLongRestTime] = useState('5000')
  const [cycles, setCycles] = useState('')

  if (isOpen) {
    return (
      <h1>
        <PomodoroTimer
          task={task}
          PomodoroTimer={Number(pomodoroTimer)}
          shortRestTIme={Number(shortRestTime)}
          longRestTime={Number(longRestTime)}
          cycles={Number(cycles)}
        />
      </h1>
    )
  }
  return (
    <div className="flex h-screen  items-center justify-center">
      <div className="flex h-[90%] w-[90%] items-center justify-center gap-8 ">
        <div className="flex min-w-[50%] justify-center text-7xl font-bold text-white  ">
          <h1 className="font-raleway font-extrabold">Pomodoro App</h1>
        </div>
        <div className="h-5/6 w-1 rounded-sm bg-white" />
        <div className="flex min-w-[40%] flex-col justify-center">
          <div className="mb-5 flex w-full gap-4 text-lg ">
            <Newspaper color="white" />
            <h1 className="font-raleway text-white">Task</h1>
            <input
              type="text"
              className=":focus border-b-2 border-white bg-transparent text-white outline-none"
              value={task}
              name="task"
              onChange={(e) => setTask(e.target.value)}
              required
            />
          </div>
          <div className="mb-5 flex gap-5 text-lg">
            <Timer color="white" />
            <h1 className="font-raleway text-white">Timer</h1>
            <input
              type="text"
              className=":focus border-b-2 border-white bg-transparent text-white outline-none"
              value={pomodoroTimer}
              name="task"
              onChange={(e) => setPomodoroTimer(e.target.value)}
              required
            />
          </div>
          <div className=" mb-5 flex gap-5 text-lg">
            <BedDouble color="white" />
            <h1 className="font-raleway text-white">Time to rest</h1>
            <input
              type="text"
              className=":focus border-b-2 border-white bg-transparent text-white outline-none"
              value={shortRestTime}
              name="task"
              onChange={(e) => setShortRestTime(e.target.value)}
              required
            />
          </div>
          <div className=" mb-5 flex gap-5 text-lg">
            <ArrowUp10 color="white" />
            <h1 className="font-raleway text-white">Number of pomodoros</h1>
            <input
              type="text"
              className=":focus border-b-2 border-white bg-transparent text-white outline-none"
              value={cycles}
              name="task"
              onChange={(e) => setCycles(e.target.value)}
              required
            />
          </div>
          <button
            onClick={() => {
              localStorage.setItem('timerState', 'true')
              localStorage.setItem('task', String(task))
              setIsOpen(true)
            }}
            className="
            text-md
            inline-flex
            items-center
            justify-center
            rounded-md
            bg-blue-400
            px-4 py-2
            font-raleway
            text-white
            hover:bg-blue-500"
          >
            {' '}
            Start
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
