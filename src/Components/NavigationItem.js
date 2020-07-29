import React, { useContext } from 'react'
import {ThemeContext} from '../App'

export default function NavigationItem(props) {

    let theme = useContext(ThemeContext)

    let borderColor = props.right ? props.active ? `text-${theme.accent}-500` : `text-${theme.fg2}` : props.active ? `border-${theme.accent}-500` : `border-${theme.bg2}`

    return (
        <div onClick={() => props.handleClick(props.id)} className={`px-3 focus:outline-none active:outline-none cursor-pointer`} >
            <h1 className={`focus:outline-none active:outline-none navtext ${borderColor} border-b-2 border-${theme.bg2} text-${theme.fg2}`}>{props.text}</h1>
        </div>
    )

}
