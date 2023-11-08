/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

export default function ItemsList({ getItems }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    console.log('render');
    setItems([...getItems()])
  }, [getItems])

  return (
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  ) 
}