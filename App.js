import React,{Component} from "react";

export default class App extends Component
{
    render()
    {
        const arr=[10,20,30,40];
        const newarr=arr.map((num)=>{
        return <li>{num*2}</li>//here numarr is basically holding <li> so it will work acc.
        })
        return (<>
        <ul>{newarr}</ul>
        </>)
    }
}