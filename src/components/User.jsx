// we are making a functional component
import { useState } from "react";
const User =(props)=>{
    const [count1]=useState(1)
    const [count2]=useState(2)
    const {name,city}=props
    return (
    <>
    <div className="p-2 mx-10 mt-5 border-1 border-amber-200">
    <h1 className="font-bold">Functional Component</h1>   
    <h2>{name}</h2>
    <h3>{city}</h3>
    <h2>ankush@gmail.com</h2>
    <h1>count1-{count1}</h1>
    <h1>count2-{count2}</h1>
    </div>
    
    </>
    );
}
export default User;