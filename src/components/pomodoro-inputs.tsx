// export function PomodoroInputs() {
//   return (
//     <div className="flex min-w-[40%] flex-col justify-center">
//       <div className="mb-5 flex w-full gap-4 text-lg ">
//         <Newspaper color="white" />
//         <h1 className="font-raleway text-white">Task</h1>
//         <input
//           type="text"
//           className=":focus border-b-2 border-white bg-transparent text-white outline-none"
//           value={task}
//           name="task"
//           onChange={(e) => setTask(e.target.value)}
//           required
//         />
//       </div>
//       <div className="mb-5 flex gap-5 text-lg">
//         <Timer color="white" />
//         <h1 className="font-raleway text-white">Timer</h1>
//         <input
//           type="text"
//           className=":focus border-b-2 border-white bg-transparent text-white outline-none"
//           value={pomodoroTimer}
//           name="task"
//           onChange={(e) => setPomodoroTimer(e.target.value)}
//           required
//         />
//       </div>
//       <div className=" mb-5 flex gap-5 text-lg">
//         <BedDouble color="white" />
//         <h1 className="font-raleway text-white">Time to rest</h1>
//         <input
//           type="text"
//           className=":focus border-b-2 border-white bg-transparent text-white outline-none"
//           value={shortRestTime}
//           name="task"
//           onChange={(e) => setShortRestTime(e.target.value)}
//           required
//         />
//       </div>
//       <div className=" mb-5 flex gap-5 text-lg">
//         <ArrowUp10 color="white" />
//         <h1 className="font-raleway text-white">Number of pomodoros</h1>
//         <input
//           type="text"
//           className=":focus border-b-2 border-white bg-transparent text-white outline-none"
//           value={cycles}
//           name="task"
//           onChange={(e) => setCycles(e.target.value)}
//           required
//         />
//       </div>
//       <button
//         onClick={() => {
//           localStorage.setItem('timerState', 'true')
//           setIsOpen(true)
//         }}
//         className="
//             text-md
//             inline-flex
//             items-center
//             justify-center
//             rounded-md
//             bg-blue-400
//             px-4 py-2
//             font-raleway
//             text-white
//             hover:bg-blue-500"
//       >
//         {' '}
//         Start
//       </button>
//     </div>
//   )
// }
