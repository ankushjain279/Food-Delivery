import { useEffect, useState } from "react"
import { Body_Api } from "./constant"

const useBodyfetch=()=>{
    const [letgetrestro,setletgetrestro]=useState([])
    const [filterrestro,setfilterrestro]=useState([])
    useEffect(()=>{
        fetchdata()
    },
    [])

    const fetchdata=async()=>{
        const fetching=await fetch(Body_Api)
        const data=await fetching.json()
        setletgetrestro(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilterrestro(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    }
    return [letgetrestro,filterrestro,setfilterrestro]

    
}

export default useBodyfetch