import React, { Component } from 'react'
export default class App extends Component {
    state={
        value:""
    }
    handleclick=(e)=>
    {
        this.setState({value:e.target.value.toUpperCase().substr(0,10)});//we can apply any function here.
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleclick}></input>
            </div>
        )
    }
}
