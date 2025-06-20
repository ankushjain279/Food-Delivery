import React, { useState } from 'react'
import ItemList from './ItemList'
function RestroCategory({data,showdata,setshowIndex}) {
    const ShowItem=()=>{
    setshowIndex();
    }   
    return (

    <div 
    className='bg-pink-50 w-[40%] rounded-lg p-2 my-4 mx-auto'>
    {/* header */}
     <div className='flex justify-between'>
       <span className='ml-4 font-bold text-gray-500'> {data.title} ({data.itemCards.length})</span>
       <span onClick={()=>{ShowItem()}} className='mr-4 cursor-pointer'>⬇️</span>    
    </div>

      {/* Accordian Body */}

      {
        // uncontrolled component
        showdata
        && <div className='ml-4 mt-2'>
        <ItemList list={data}/>
      </div>
      }
   
    </div>    
  )
}

export default RestroCategory