import React from 'react'
import {motion} from 'framer-motion'

export default function Expenses(props) {
    
    return (
        <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={props.pageVariants}
        className="z-20 bg-white h-screen"
        >
            <h1 className="px-3 py-1 rounded inline-block summary-title font-sans text-2xl subpixel-antialiased text-gray-800 mb-4"><span role='img' aria-label="Dollar note flying away">💸</span> Expenses</h1>
            {props.expenseList}
        </motion.div>
    )
}
