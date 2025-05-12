import React from 'react'
import { useState } from 'react'

const UserStateEx1 = () => {
    const[count,setCount]=useState(0)
    const[a,setA]=useState(10)
    const[title,setTitle]=useState("hello")

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Incerment</button>
        <h1>{a}</h1>
        <button onClick={()=>setA(a+1)}>add</button>
        <h1>{title}</h1>
        <button onClick={()=>setTitle("welcome :)")}>login</button>
      
    </div>
  )
}

export default UserStateEx1
