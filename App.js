import React, { Component } from 'react'
import  pic from "./logo512.png"//using only when there is an image in src folder.
export default class App extends Component {
    render() {
        return (
            <div>
                <img src={process.env.PUBLIC_URL+"/logo192.png"} alt="inside a public folder" width="300px"/>
                <img src={pic} alt="inside src folder" width="300px"/>
            </div>
        )
    }
}
