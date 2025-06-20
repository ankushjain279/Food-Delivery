import React, { use, useState } from 'react'
// import { useState,useEffect } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
// import { Menu_Api } from '../utils/constant'
import useResturantMenu from '../utils/useResturantMenu';
import RestroCategory from './RestroCategory';

function RestoMenu() {

  const [showIndex,setshowIndex]=useState(-1)
  const { id } = useParams();
  // const param=useParams();
  // console.log("yeha raha",param);
  // const [restInfo,setrestInfo]=useState(null)


  const restInfo = useResturantMenu(id)

  // ------------------so we make our code modualr and try to follow single responsibility principal that mean this component now only dealing with showing the restro menu they dont have to worry about fetching data from api---------------

  // <---------------------we created a custom hook for fetching the data from the api---------->

  // useEffect(()=>{
  //     fetchdata()
  // },[]
  // )
  // const fetchdata = async()=>{

  //     const require=await fetch(Menu_Api+id)

  //     const data=await  require.json()
  //     setrestInfo(data.data)
  //     console.log("yeah raha data",data.data);
  // }

  if (restInfo === null)
    return <Shimmer />

  const { name, city, areaName, avgRating, } = restInfo?.cards[2]?.card?.card?.info
  // console.log(restInfo?.cards);
  // const {itemCards}=restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  // console.log(restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const Category = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
    return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  })

  // console.log(Category);
  return (
    <div >
      <div className='bg-pink-50 w-[40%] rounded-lg p-2 my-4 mx-auto '>
        <h1 className='text-3xl text-gray-700 font-bold'>{name}  ({avgRating})</h1>
        <h1 className='text-xl py-2 '>{areaName}-{city}</h1>
        <h1 className='text-xl '></h1>
      </div>

      {
        Category.map((item,index)=>{
          return <RestroCategory key={item.card.card.categoryId}
           data={item.card.card}
           showdata={index===showIndex?true:false}
           setshowIndex={()=>(
            index===showIndex?
            setshowIndex(-1):
            setshowIndex(index))} 
           />
        })
      }
    </div>
  )
}

export default RestoMenu