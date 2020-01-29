import React,{Component} from "react";
//import Guest from "./Guest";
import User from "./User";
import Guest from "./Guest";
export default class App extends Component
{
    state={
        islogged:false
    }
    clickLogin=()=>{
        this.setState({islogged:true});
    }
    
    clickLogout=()=>{
        this.setState({islogged:false});
    }
    render()
    {
        const islogged=this.state.islogged;
        if(islogged)
        {
            return <User name={"Aman"} clickdata={this.clickLogout}/>
        }
        else{
            return <Guest clickdata={this.clickLogin}/>
        }
        }
}