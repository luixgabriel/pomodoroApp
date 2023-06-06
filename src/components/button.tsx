interface ButtonProps {
  text: string
  onclick?: () => void
  classname?: string
}

export function Button({ text, onclick, classname }: ButtonProps) {
  return (
    <button onClick={onclick} className={classname}>
      {text}
    </button>
  )
}
