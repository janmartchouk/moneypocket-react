import React, { useState, useContext } from 'react'
import Modal from './Modal'
import { motion, AnimatePresence } from "framer-motion"
import {ThemeContext} from '../App'
import {SettingsContext} from '../App'

export default function SummaryHeaderButton(props) {

    let theme = useContext(ThemeContext)
    let settings = useContext(SettingsContext)

    let symbol = props.income ? '+' : '–'

    let color = props.income ? `${theme.accent}-500` : `${theme.accent}-400`

    let textColor = settings.darktheme ? `black` : `white`

    let type = props.income ? 'income' : 'expense'

    const[modalOpen, setModalOpen] = useState(false)

    var modal = null
    if (modalOpen) {
        modal = <Modal handleAddItem={props.handleAddItem} type={type} income={props.income} modalOpen={modalOpen} setModalOpen={setModalOpen}></Modal>
    }

    return (
        <div className={`self-around bg-${color} hover:bg-${color} transition ease-in-out duration-200 cursor-pointer shadow-md leading-tight text-${textColor} rounded-md inline flex flex-col justify-start align-start summary-${props.type} ${props.mb} summary-headerItem w-full h-auto`}>
            <h1 onClick={() => setModalOpen(true) }className={`block p-6`}>{symbol} {props.text}</h1>
            <AnimatePresence className="z-50">
            {modalOpen && (
              <motion.div
                initial={{ opacity: 0, zIndex: 100}}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{duration: .2}}
              >
                {modal}
              </motion.div>
            )}
             </AnimatePresence>
        </div>
    )
}
