import React, { useEffect, useState } from "react";

function UseEffectPage() {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  })

  // console.log('Component render');
  // useEffect(() => {
  //   console.log('Render');
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type])

  const mouseMoveHandler = () => {
    event => {
      setPos({
        x: event.clientX,
        y: event.clientY
      })
    }
  }

  useEffect(() => {
    console.log('Event listener add');
    window.addEventListener('mousemove', mouseMoveHandler)
    return () => {
      console.log('Event listener removed');
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return (
    <div className="flex col gap">
      <div className="flex row gap">
        <h2>Type: {type}</h2>
        <h2>{ JSON.stringify(pos, null, 2) }</h2>
      </div>
      <div className="flex row gap">
        <button className="btn" onClick={() => setType('users')}>Users</button>
        <button className="btn" onClick={() => setType('todos')}>Todos</button>
        <button className="btn" onClick={() => setType('posts')}>Posts</button>
      </div>
      <pre className="code">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}

export default UseEffectPage;