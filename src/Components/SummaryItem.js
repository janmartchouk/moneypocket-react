import React, { useContext } from 'react'
import capitalize from '../Hooks/capitalize'
import { motion } from "framer-motion"
import {ThemeContext} from '../App'
import {SettingsContext} from '../App'

export default function SumaryItem(props) {

    let theme = useContext(ThemeContext)
    let settings = useContext(SettingsContext)

    let symbol = props.income ? '+' : '–'

    let color = settings.darktheme ? props.income ? 'green-600' : 'red-600' : props.income ? 'green-200' : 'red-200'
    let textColor = settings.darktheme ? props.income ? 'black' : 'black' : props.income ? 'green-600' : 'red-600'
    let hoverColor = settings.darktheme ? props.income ? 'green-700' : 'red-700' : props.income ? 'green-300' : 'red-300'

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
            className={`${props.type} p-3 rounded-lg hover:shadow-md flex items-center text-lg bg-${color} hover:bg-${hoverColor} duration-200 mb-3 text-${textColor}`}>
                <span className={`font-bold align-baseline mr-4`}>{symbol} {props.amount}{settings.symbol}</span> {capitalize(props.name)}<span className={`ml-auto mr-3 text-${color}-500`}>{props.date}</span><button onClick={() => props.handleClose(props.id, props.income)} className={`focus:outline-none close text-${color}-600 mr-3 text-2xl cursor-pointer`} style={{"marginTop": "-5.5px"}}>&times;</button>
            </motion.div>
    )
}
