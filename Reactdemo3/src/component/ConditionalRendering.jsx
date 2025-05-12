import React from 'react'

const ConditionalRendering = ({islogged}) => {
    // if (islogged) {
    //     return<h1>welcome</h1>
    // } else {
    //     return<h1>login again</h1>
    // }


return (
    <>
   {/* {
       islogged ? <h1>Login Successful</h1> : <h1>Login fail</h1>
   }  */}
   {islogged && <h1>Welocome</h1>}
   </>
   )
    }

export default ConditionalRendering
