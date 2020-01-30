import React,{Component} from "react";
//import User from "./User";
export default class App extends Component
{
    
    state={
        set:false
    }
    handleclick=()=>{
        this.setState({set:true})
    }
    render()
    {
        const btnstyle={
            color:"blue",
            backgroundColor:"orange"
        };
        if(this.state.set)
        {
            btnstyle.backgroundColor="white";
        }
        return (
            <div>
                <button onClick={this.handleclick} style={btnstyle}>Click</button>
            </div>
        )
    }
}