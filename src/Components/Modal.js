import React, { useState } from 'react'
import capitalize from '../Hooks/capitalize'
import Input from './Input'
import { motion } from 'framer-motion'

export default function Modal(props) {

    const [amount, setAmount] = useState(null)
    const [name, setName] = useState(null)

    var income;
    if(props.type === "income") {income = true} else if(props.type === "expense") {income = false}

    function handleClick(e) {
        if (e.target.id === "ModalBg") {
            props.setModalOpen(false)
        } else if (e.target.id === "submit") {
            let newItem = {};
            newItem.name = name;
            newItem.amount = amount;
            newItem.income = income;
            newItem.id = + new Date()
            console.log(newItem);
            props.setModalOpen(false);
        }
    }

    return (
            <div id="ModalBg" onClick={(e) => handleClick(e)} className="text-gray-800 flex justify-center items-center cursor-default modalBg w-full h-full fixed left-0 top-0 z-50 overflow-hidden" style={{"backgroundColor": "rgba(0,0,0,0.25)"}}>
                <motion.div initial={{y: -50}} animate={{y: 0}} exit={{y: 50}} onClick={(e) => handleClick(e)} className="ModalContent shadow-lg bg-white w-auto p-6 rounded flex flex-col">
                    <h1 className="ModalTitle">Add {capitalize(props.type)}</h1>
                    <div className="ModalInputs flex">
                        <Input type="number" placeholder="Amount" handleChange={setAmount}></Input>
                        <Input type="text" placeholder="Name" handleChange={setName}></Input>
                        <button id="submit" className="transition ease-in-out duration-200 bg-purple-600 text-white rounded focus:border-purple-700 focus:outline-none border-purple-600 border-4 mt-4 p-3 w-auto">Add</button>
                    </div>
                </motion.div>
            </div>
        )

}
