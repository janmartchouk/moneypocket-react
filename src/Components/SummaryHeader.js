import React, { useContext } from 'react'
import SummaryHeaderItem from './SummaryHeaderItem'
import SummaryHeaderButton from './SummaryHeaderButton'
import Emoji from '../Components/Emoji'
import { SettingsContext } from '../App'
import {ThemeContext} from '../App'

export default function SummaryHeader(props) {

    let theme = useContext(ThemeContext)

    var settings = useContext(SettingsContext)
    console.log(settings)

    var headingtext = settings.showgreet ? `Hello, ${settings.name}. Here's your summary:` : 'Summary'

    var emoji = settings.showgreet ? <Emoji alt="Victory Hand" code="&#x270C;" /> : <Emoji alt="Euro Note" code="&#x1F4B6;" />

    return (
        <div>
            <h1 className={`py-1 rounded inline-block summary-title font-sans text-2xl subpixel-antialiased text-${theme.fg1}`}>{emoji} {headingtext}</h1>
            <div className="summary-header-items py-6 flex justify-between items-center">
                <SummaryHeaderItem type="total" leading="You currently have" trailing="in pocketmoney" amount={props.total}></SummaryHeaderItem>    
                <SummaryHeaderItem type="mexp" leading="You lost" trailing="in the last 30 days" amount={props.monthExpenses}></SummaryHeaderItem>    
                <SummaryHeaderItem type="minc" leading="You got" trailing="in the last 30 days" amount={props.monthIncomes}></SummaryHeaderItem>
                <div className="SummaryHeaderButtons flex flex-col items-around justify-around">
                    <SummaryHeaderButton income={true} text="Add Income" mb="mb-3" handleAddItem={props.handleAddItem}></SummaryHeaderButton>
                    <SummaryHeaderButton income={false} text="Add Expense" handleAddItem={props.handleAddItem}></SummaryHeaderButton>
                </div>
            </div>
        </div>
    )
}
