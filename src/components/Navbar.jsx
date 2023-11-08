import React from "react"
import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <div className="flex row gap nav">
      <Link to='/useState'>UseState</Link>
      <Link to='/useEffect'>UseEffect</Link>
      <Link to='/useRef'>UseRef</Link>
      <Link to='/useMemo'>UseMemo</Link>
      <Link to='/useCallback'>UseCallback</Link>
    </div>
  )
}