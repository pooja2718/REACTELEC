import React, { useState } from 'react'

const Array_useState = () => {
    const[emp,setEmp] = useState({name:'',position:''})//object
    const[emps,setEmps] = useState([]) //array

    const addEmployee=()=>{
        setEmps([
            ...emps,emp
        ])
        console.log(emp);
        
    }

  return (
    <div>
        Name
    <input type="text"onChange={(e)=>setEmp({...emp,name:e.target.value})}  />
    Position
    <input type="text"onChange={(e)=>setEmp({...emp,position:e.target.value})}  />
    <button onClick={addEmployee}>Add Employee</button>

    <ul>
        {
            emps.map((employee,index)=>(
                <li key={index}> {employee.name} - {employee.position} </li>
            ))
        }
    </ul>

    </div>
  )
}

export default Array_useState