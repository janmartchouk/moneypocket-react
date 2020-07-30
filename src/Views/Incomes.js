import React, { useContext } from 'react'
import {motion} from 'framer-motion'
import Emoji from '../Components/Emoji'
import {ThemeContext} from '../App'

export default function Incomes(props) {

    let theme = useContext(ThemeContext)

    return (
        <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={props.pageVariants}
        className={`z-20 bg-${theme.bg1} h-screen`}
        >
            <h1 className={`py-1 rounded inline-block summary-title font-sans text-2xl subpixel-antialiased text-${theme.fg1} mb-4`}><Emoji alt="Money bag" code="&#x1F4B0;"/> Incomes</h1>
            <div className={`bg-${theme.bg1}`}>{props.incomeList}</div>
        </motion.div>
    )
}
