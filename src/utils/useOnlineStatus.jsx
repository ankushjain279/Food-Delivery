import { useEffect, useState } from "react";

const useOnlineStatus = () =>{

   const[onlinestatus,setonlinestatus]=useState(true)
   useEffect(()=>{
    window.addEventListener("offline",()=>{
        setonlinestatus(false)
    })
    window.addEventListener("online",()=>{
        setonlinestatus(true)
    })
   },[])
    
    //boolean
    return onlinestatus;
}
export default useOnlineStatus