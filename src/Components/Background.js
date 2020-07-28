import React from 'react'
import logo from '../logo192.png'

export default function Background() {
    return (
        <div style={{'zIndex': '-10'}} className="z-0 fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
            <img className="opacity-50" src={logo} width="100px"></img>
        </div>
    )
}
