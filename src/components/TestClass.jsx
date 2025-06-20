// we are making a class based component
import React from "react";

class TestClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(this.props.name,"child ka constructor");
        this.state={
            info:{
                name:"Rahul dummy",
                id:"0000",
            }
        }
    }

    async componentDidMount(){
        // console.log(this.props.name,"child ka component did mount");
        const data=await fetch("https://api.github.com/users/ankushjain279")
        const json=await data.json()
        this.setState({info:json})
    }
    render() {
        const {name,id,avatar_url}=this.state.info
        // console.log(this.props.name,"child ka render");
        return(
                <>
                <div className="p-2 mx-10 my-5 border-1  border-amber-200">
                <h1 className="font-bold">Class Based Component</h1>   

                <img className="w-[10%] p-1" src={avatar_url} alt="" />
                <h2>{name}</h2>
                <h3>{id}</h3>
                <h2>ankush@gmail.com</h2>
                </div>
                </>
        );
    }
}

export default TestClass