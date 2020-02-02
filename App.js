import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props);
        this.textInput=React.createRef();
    }
    componentDidMount=()=>{
        console.log(this.textInput.current);
        this.textInput.current.focus();
    }
    render() {
        return (
            <div>
                <form>
                    <label>
                        Name: <input type="text"/>
                    </label>
                    <br/><br/>
                    <label>
                        Password: <input type="text" ref={this.textInput}/>
                    </label>
                    <br/><br/>
                    <label>
                        Address: <input type="text"/>
                    </label>
                    <br/><br/>
                </form>
            </div>
        )
    }
}
