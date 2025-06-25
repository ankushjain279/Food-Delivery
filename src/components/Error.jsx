import React from 'react'
import { useRouteError } from 'react-router-dom'
function Error(){
    const error = useRouteError();
    console.log(error);
    return(
        <>
        <h1 className='m-2 text-2xl'>error a gyi mere bhai Bhai</h1>
        <h2>{error.status}  {error.statusText}</h2>
        <h2>{error.data}</h2>
        </>
    )
}

export default Error