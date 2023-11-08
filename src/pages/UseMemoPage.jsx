import React, { useState } from "react"

function UseMemoPage() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="flex col gap">
      <h1>Computed value: {counter}</h1>
      <div className="flex col gap">
        <button onClick={() => setCounter(prev => prev + 1)} className="btn">Inc</button>
        <button onClick={() => setCounter(prev => prev - 1)} className="btn">Decr</button>
      </div>
    </div>
  )
}

export default UseMemoPage