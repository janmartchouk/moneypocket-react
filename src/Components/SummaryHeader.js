import React from 'react'
import SummaryHeaderItem from './SummaryHeaderItem'
import SummaryHeaderButton from './SummaryHeaderButton'

export default function SummaryHeader(props) {
    return (
        <div>
            <h1 className="px-3 py-1 rounded inline-block summary-title font-sans text-2xl subpixel-antialiased text-gray-800"><span role='img' aria-label="Peace hand">✌️</span> Hello, <span className="font-bold">{props.username}</span>. Here's your summary:</h1>
            <div className="summary-header-items py-6 flex justify-between items-center">
                <SummaryHeaderItem type="total" leading="You currently have" trailing="in pocketmoney" amount={props.total}></SummaryHeaderItem>    
                <SummaryHeaderItem type="mexp" leading="You lost" trailing="in the last 30 days" amount={props.monthExpenses}></SummaryHeaderItem>    
                <SummaryHeaderItem type="minc" leading="You got" trailing="in the last 30 days" amount={props.monthIncomes}></SummaryHeaderItem>
                <div className="SummarHeaderButtons flex flex-col items-around justify-around">
                    <SummaryHeaderButton income={true} text="Add Income" mb="mb-3" handleAddItem={props.handleAddItem}></SummaryHeaderButton>
                    <SummaryHeaderButton income={false} text="Add Expense" handleAddItem={props.handleAddItem}></SummaryHeaderButton>
                </div>
            </div>
        </div>
    )
}
