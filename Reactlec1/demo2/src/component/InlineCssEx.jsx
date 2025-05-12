import React from 'react'

function InlineCssEx() {

    const  mystyle={
        color:"blue"
    }
  return (
    <div>
        <h1 style={mystyle}>Inline css</h1>
        <h1 style={{background:'blue'}}>hello world</h1>
      
    </div>
  )
}

export default InlineCssEx
