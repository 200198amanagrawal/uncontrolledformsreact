import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            value:"yo"
        };
        this.textInput=React.createRef();
    }
    handleclick=(e)=>{
        e.preventDefault();
       console.log(this.textInput.current.value);
        this.setState({value:this.textInput.current.value});
    };
    render() {
        return (
            <>
    <h2>You typed: {this.state.value}</h2>
            <form onSubmit={this.handleclick}>
                Input :<input type="text" ref={this.textInput}/>
                <input type="submit" value="Submit"/>
                </form>
            </>
        )
    }
}
