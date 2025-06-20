import React, { Component } from 'react'
import { RESTRO_URL } from '../utils/constant'
function Restrocard(props) {
    const {resdata}=props
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRatingString,
        sla
    }=resdata.info
    // const {name="bhai bhai",menu="bhaibhai",rating="nhi pata",time="nhi pata"}=props
    // Destructuring (const { ... } = props) ko JSX ke bahar likhna chahiye, function ke starting me.
    return (
    <>
      <div className='p-4 border border-gray-300 rounded-lg shadow-md  w-72'>
        <div>
          <img 
         src={
            RESTRO_URL +
            cloudinaryImageId
          }
            alt="restaurant" 
            className='h-40 w-full object-cover rounded-md mb-4'
          />
          <h1 className='font-bold text-lg'>{name}</h1>
          <h2 className='text-gray-400'>{cuisines.join(", ")}</h2>
          <h3 className='text-yellow-600'>⭐ {avgRatingString}</h3>
          <h4 className='text-gray-500'>⏱️ {sla.deliveryTime  }</h4> 
        </div>
      </div>
    </>
  )
}


// <-------Higher order function
//    i/p-->Component
//    o/p-> Enhanced Component---------->
export const withRestrocardOpen=(Restrocard)=>{
  return (props)=>{
    return(
      <div>
        <label className='bg-black rounded-lg p-1 text-white' >Open</label>
        <Restrocard {...props}/>
      </div>
    )
  }

}
export default Restrocard
