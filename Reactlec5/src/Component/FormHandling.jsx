import React, { use, useState } from 'react'

const FormHandling = () => {

    const[user,setUser]= useState({uname:'', upass:''})
    const handleSubmit = ()=>{
        alert(`Hello ${user.uname} login successfully....`)
    }
  return (
<>
    <div
        className="container"
    >
        <div
            className="row justify-content-center align-items-center g-2"
        >
            <div className="col-md-5 my-5">
                <div className="card">
                    <h1 className='text-center'>Login</h1>
                    <div className="card-body">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setUser({...user,uname:e.target.value})}
                                />
                                <label htmlFor="formId1">Username</label>
                            </div>
                            
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                onChange={(e)=>setUser({...user,upass:e.target.value})}
                            />
                            <label htmlFor="formId1">Password</label>
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            Login
                        </button>
                        


                    </div>
                </div>
                
            </div>
            
        </div>
        
    </div>
    
</>
  )
}

export default FormHandling