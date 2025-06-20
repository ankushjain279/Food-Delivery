// we are making a class based component
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:1,
            count2:2
        }
        // console.log(this.props.name,"child ka constructor");
    }

    componentDidMount(){
        // console.log(this.props.name,"child ka component did mount");
    }
    render() {
        const {name,city}=this.props
        const {count}=this.state
        // console.log(this.props.name,"child ka render");
        return(
                <>
                <div className="p-2 mx-10 mt-5 border-1 border-amber-200">
                <h1 className="font-bold">Class Based Component</h1>   
                <h2>{name}</h2>
                <h3>{city}</h3>
                <h2>ankush@gmail.com</h2>
                <h1>count- {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:count+1,
                        // we are able to use only count only instead of this.state.count in the rhs bz we alread
                        // have done this destructuring  const {count}=this.state
                    })

                    this.setState
                }} className="mr-1 my-1 p-1 border-1">Increase Value</button>
                <button onClick={()=>{
                    this.setState({
                        count:count-1,
                    })
                }} className="m-1 p-1 border-1">Decrease Value</button>
                </div>
                </>
        );
    }
}

export default UserClass