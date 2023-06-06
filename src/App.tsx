import { PomodoroTimer } from './components/pomodoro-timer'
import { Newspaper } from 'lucide-react'

function App() {
  return (
    <div className="flex h-screen  items-center justify-center">
      <div className="flex h-[90%] w-[90%] items-center justify-center gap-8 ">
        <div className="flex min-w-[50%] justify-center text-7xl font-bold text-white  ">
          <h1 className="font-raleway font-extrabold">Pomodoro App</h1>
        </div>
        <div className="h-5/6 w-1 rounded-sm bg-white" />
        <div className="flex min-w-[40%] flex-col justify-center">
          <div className="mb-5 flex w-full gap-4  text-lg ">
            <Newspaper color="white" />
            <h1 className="font-raleway text-white">
              Digite seu tempo de pomodoro
            </h1>
            <input
              type="text"
              className=":focus border-b-2 border-white bg-transparent text-white outline-none"
            />
          </div>
          <div className="mb-5 flex gap-5 text-lg">
            <Newspaper color="white" />
            <h1 className="font-raleway text-white">
              Digite seu tempo de pomodoro
            </h1>
            <input
              type="text"
              className=":focus border-b-2 border-white bg-transparent text-white outline-none"
            />
          </div>
          <div className=" flex gap-5 text-lg">
            <Newspaper color="white" />
            <h1 className="font-raleway text-white">
              Digite seu tempo de pomodoro
            </h1>
            <input
              type="text"
              className=":focus border-b-2 border-white bg-transparent text-white outline-none"
            />
          </div>
        </div>
      </div>
      <h1>
        <PomodoroTimer defaultPomodoroTimer={0} />
      </h1>
    </div>
  )
}

export default App
