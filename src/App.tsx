import { PomodoroTimer } from './components/pomodoro-timer'

function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-[80%] w-[80%] items-center justify-center gap-8 ">
        <div className="flex w-[50%] justify-center text-7xl font-bold text-white  ">
          <h1 className="font-raleway font-extrabold">Pomodoro App</h1>
        </div>
        <div className="h-5/6 w-1 rounded-sm bg-white" />
        <div className="flex w-2/5 flex-col justify-center bg-yellow-300">
          <h1>Digite seu tempo de pomodor</h1>
          <input type="text" placeholder="ok" />
        </div>
      </div>
      <h1>
        <PomodoroTimer defaultPomodoroTimer={0} />
      </h1>
    </div>
  )
}

export default App
