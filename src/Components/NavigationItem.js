import React from 'react'

export default function NavigationItem(props) {

    let borderColor = props.active ? 'border-purple-600' : 'border-transparent' 

    return (
        <div onClick={() => props.handleClick(props.id)} className={`focus:outline-none active:outline-none cursor-pointer mr-6`} >
            <h1 className={`focus:outline-none active:outline-none navtext ${borderColor} border-b-2 text-black`}>{props.text}</h1>
        </div>
    )

}
