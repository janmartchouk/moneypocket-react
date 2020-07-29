import React, { useContext } from 'react'
import logo from '../logo192.png'
import {ThemeContext} from '../App'

export default function Background() {

    let theme = useContext(ThemeContext)

    return (
        <div style={{'zIndex': '-10'}} className={`z-0 fixed bg-${theme.bg1} top-0 left-0 w-screen h-screen flex justify-center items-center`}>
            <img className="opacity-50" alt="logo" src={logo} width="100px"></img>
        </div>
    )
}
