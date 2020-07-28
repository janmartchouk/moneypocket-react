import React from 'react'
import capitalize from '../Hooks/capitalize'
import { motion } from "framer-motion"

export default function SumaryItem(props) {

    let symbol = props.income ? '+' : '–'

    let color = props.income ? 'green' : 'red'

    const variants = {
        initial: {
          opacity: 0,
          y: 100
        },
        animate: {
          opacity: 1,
          y: 0
        },
        exit: {
          opacity: 0,
          y: -100
        },
      }
    

    return (
            <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{
                default: { duration: .1 },
              }}
            className={`${props.type} p-3 rounded-lg hover:shadow-md flex items-center text-lg bg-${color}-100 hover:bg-${color}-200 duration-200 mb-3`}>
                <span className={`font-bold text-${color}-400 align-baseline mr-4`}>{symbol} {props.amount}{props.currency}</span> {capitalize(props.name)}<span className={`ml-auto mr-3 text-${color}-500`}>{props.date}</span><button onClick={() => props.handleClose(props.id, props.income)} className={`focus:outline-none close text-${color}-600 mr-3 text-2xl cursor-pointer`} style={{"marginTop": "-5.5px"}}>&times;</button>
            </motion.div>
    )
}
