import React, { Component } from 'react'
const tawkTo = require("tawkto-react");

const tawkToPropertyId = '5faf168bc52f660e897356f8';

export default class Twarkto extends Component {
    componentDidMount(){
        tawkTo(tawkToPropertyId)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
