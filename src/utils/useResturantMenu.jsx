import { useEffect, useState } from "react"
import { Menu_Api } from "./constant";

const useResturantMenu=(id)=>{

   const [resinfo,setrestInfo]=useState(null)
//    console.log(1);
   useEffect(()=>{
    fetchdata();
    // console.log(2);
   },[])
   
    const fetchdata=async()=>{
    
    const fetching=await fetch(Menu_Api+id)
    const data=await fetching.json()
    // console.log(3)     
    setrestInfo(data.data)
   }
    // console.log(4)
    return resinfo
}

export default useResturantMenu