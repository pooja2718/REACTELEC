import React, { useState } from 'react'

const Object_useState = () => {
    const [emp, setEmp] = useState({name:'',sal:''})

  return (
    <div>
        Name
        <input type="text" onChange={(e)=>setEmp({...emp,name:e.target.value})} />
        Salary        
        <input type="text" onChange={(e)=>setEmp({...emp,sal:e.target.value})} />
        <h1>{emp.name} - {emp.sal}</h1>
    </div>
  )
}

export default Object_useState