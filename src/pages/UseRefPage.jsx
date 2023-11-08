import React, {useEffect, useRef, useState} from "react"


function UseRefPage() {
  const [value, setValue] = useState(0)
  const renderCount = useRef(1)

  const inputRef = useRef(null)

  useEffect(() => {
    renderCount.current += 1
    console.log(inputRef.current.value);
  })

  const focus = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <h1>Колличество рендеров: {renderCount.current}</h1>
      <div className="flex col gap">
        <input ref={inputRef} type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <button className="btn" onClick={focus}>Focus</button>
      </div>
    </>
  )
}

export default UseRefPage