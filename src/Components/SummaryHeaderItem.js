import React, { useContext } from 'react'
import {ThemeContext} from '../App'

export default function SummaryHeaderItem(props) {

    let theme = useContext(ThemeContext)

    let bg;
    let fg;

    if (props.type === "total") {
        bg = `bg-${theme.accent}-500`
        fg = `text-${theme.bg1}`
    } else {
        fg = `text-${theme.fg1}`
        bg = `bg-${theme.bg2}`
    }

    return (
        <div className={`overflow-hidden shadow-md leading-tight ${fg} ${bg} rounded-md inline p-6 flex flex-col justify-start align-start summary-${props.type} summary-headerItem w-1/4 h-auto`}>
            <span className="">{props.leading}</span>
            <span className={`font-bold text-6xl ${fg}`}>{props.amount}</span>
            <span className="">{props.trailing}</span>
        </div>
    )
}
