import React from "react";
// import User from "./User";
import UserClass from "./UserClass";
import TestClass from "./TestClass";

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("parent ka constructor");
    }
    componentDidMount(){
        console.log("parent ka component did mount");
    }
    render(){ 
         
        console.log("parent ka render method"); 
        return (
        <>
        <h1 className="ml-10">welcome to about us page</h1>
        {/* functional component */}
        {/* <User name={"Ankush props"} city={"kkde"} /> */}

        {/* class based component */}
        <UserClass name={"first"} city={"banglore"}/>
        {/* <TestClass name={"Second"} city={"delhi"}/> */}
        <TestClass/>
        </>
    )
 }
}

export default About;
