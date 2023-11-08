import { useState } from "react"
import React from "react"

function computeInitilState() {
  return Math.trunc(Math.random() * 20);
}


function UseStatePage() {
  // Simple init
  // const [counter, setCounter] = useState(0)
  
  // Unoptimized
  // const [counter, setCounter] = useState(computeInitilState())

  // Optimized
  const [counter, setCounter] = useState(() => {
    return computeInitilState()
  })

  const [objectState, setObjectState] = useState({
    'title': 'Counter',
    'creationDate': Date.now()
  })

  function updateTitle() {
    setObjectState(prev => {
      return {
        ...prev,
        'title': 'counter updated'
      }
    })
  }

  return (
    <div className="flex col gap">
      <h1>Counter: {counter}</h1>
      <div className="flex col gap">
        <button onClick={() => setCounter(prev => prev + 1)} className="btn">Inc</button>
        <button onClick={() => setCounter(prev => prev - 1)} className="btn">Decr</button>
      </div>
      <pre onClick={updateTitle} className="code pointer">{JSON.stringify(objectState, null, 2)}</pre>
    </div>
  )
}

export default UseStatePage;