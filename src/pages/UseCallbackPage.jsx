import React, { useCallback, useState } from "react"
import ItemsList from "../components/ItemsCompontns"

function UseCallbackPage() {
  <p>123</p>
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'red' : 'white'
  }

  const generateItems = useCallback(() => {
    return new Array(count).fill('').map((_, idx) => `Element ${idx}`)
  }, [count])

  return (
    <div className="flex col gap">
      <h1 style={styles}>Elements count: {count}</h1>
      <div className="flex col gap">
        <button onClick={() => setCount(prev => prev + 1)} className="btn">Inc</button>
        <button onClick={() => setCount(prev => prev - 1)} className="btn">Decr</button>
        <button onClick={() => setColored(prev => !prev)} className="btn">Edit</button>
      </div>
      <ItemsList getItems={generateItems}/>
    </div>
  )
}

export default UseCallbackPage