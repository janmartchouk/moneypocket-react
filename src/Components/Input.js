import React from 'react'

export default function Input(props) {
    return (
        <div>
            <input onChange={(e) => props.handleChange(e.target.value)} className="transition ease-in-out duration-200 bg-gray-100 rounded focus:border-gray-300 focus:outline-none border-gray-100 border-4 mt-4 p-3 w-auto mr-4" type={props.type} placeholder={props.placeholder}></input>
        </div>
    )
}
