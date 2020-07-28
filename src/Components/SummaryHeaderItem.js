import React from 'react'

export default function SummaryHeaderItem(props) {

    return (
        <div className={`overflow-hidden shadow-md leading-tight text-gray-800 rounded-md inline p-6 flex flex-col justify-start align-start summary-${props.type} summary-headerItem w-1/4 h-auto`}>
            <span className="">{props.leading}</span>
            <span className="font-bold text-6xl text-purple-600">{props.amount}</span>
            <span className="">{props.trailing}</span>
        </div>
    )
}
