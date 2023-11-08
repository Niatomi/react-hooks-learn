import React, { useEffect, useMemo, useState } from "react"

function complexCompute(value) {
  let i = 0
  while (i < 1000000000) i++
  return value * 2
}


function UseMemoPage() {
  const [counter, setCounter] = useState(42)
  const [colored, setColored] = useState(false)

  const style = useMemo(() => ({
    color: colored ? 'red' : 'white'
  }), [colored])

  const computed = useMemo(() => {
    return complexCompute(counter)
  }, [counter]) 

  useEffect(() => {
    console.log('Style changed');
  }, style)

  return (
    <div className="flex col gap">
      <h1 style={style}>Computed value: {computed}</h1>
      <div className="flex col gap">
        <button onClick={() => setCounter(prev => prev + 1)} className="btn">Inc</button>
        <button onClick={() => setCounter(prev => prev - 1)} className="btn">Decr</button>
        <button onClick={() => setColored(prev => !prev)} className="btn">Edit</button>
      </div>
    </div>
  )
}

export default UseMemoPage