import React, { useContext } from 'react'
import Toggle from 'react-toggle'
import {motion} from 'framer-motion'
import {ThemeContext} from '../App'


export default function Input(props) {
    let theme = useContext(ThemeContext)
    return (
        <div>
            <input onChange={(e) => props.handleChange(e.target.value)} className={`transition ease-in-out duration-200 bg-${theme.bg2} rounded focus:border-${theme.bg3} focus:outline-none border-${theme.bg2} border-4 mt-4 p-3 w-auto mr-4 text-${theme.fg2}`} type={props.type} placeholder={props.placeholder}></input>
        </div>
    )
}

export function SettingsInput(props) {
    let theme = useContext(ThemeContext)
    let label;
    if(props.label) {
        label = <label htmlFor={props.id} className={`mx-3 text-${theme.fg1}`}>{props.label}</label>
    }

    return (
        <div className="my-3">
            {label}
            <input id={props.id} onChange={(e) => props.handleChange(props.setting, e.target.value)} className={`transition ease-in-out duration-100 bg-${theme.bg2} rounded focus:border-${theme.bg3} focus:outline-none border-${theme.bg2} border-4 mt-4 p-3 w-auto mr-4 text-${theme.fg2}`} type={props.type} placeholder={props.placeholder}></input>
        </div>
    )
}

export function SettingsToggle(props) {
    let theme = useContext(ThemeContext)
    let label;
    if(props.label) {
        label = <label htmlFor={props.id} className={`mx-3 text-${theme.fg1}`}>{props.label}</label>
    }

    return (
        <div className="my-3 mt-6">
            {label}
            <motion.div className="inline-block ml-6" initial={{ y: 7 }} animate={{ y: 7 }}>
            <Toggle
                id={props.id}
                defaultChecked={props.toggled}
                onChange={(e) => props.handleChange(props.setting, !props.toggled)} />
            </motion.div>
        </div>
    )
}

export function ColorInput(props) {
    let theme = useContext(ThemeContext)
    let label;
    if(props.label) {
        label = <label htmlFor={props.id} className={`mx-3 text-${theme.fg1}`}>{props.label}</label>
    }

    function handleClick(color) {
        let newTheme = {}
        newTheme.accent = color
        props.setTheme({...theme, ...newTheme})
        console.log(newTheme)
    }

    let divs = props.colors.map(color => {
        if(theme.accent === color) {
            return <div className={`transition ease-in-out duration-300 mr-3 cursor-pointer w-10 rounded h-10 inline-block border-4 border-${color}-600 bg-${color}-500`}></div>
        } else {
            return <div onClick={() => handleClick(color)} className={`transition ease-in-out duration-300 mr-3 cursor-pointer w-10 rounded-md h-10 inline-block border-4 border-${color}-500 bg-${color}-500`}></div>
        }
    })

    return (
        <div className="my-3 mt-6">
            {label}
            <motion.div className="inline-block ml-6" initial={{ y: 14 }} animate={{ y: 14 }}>
                {divs}
            </motion.div>
        </div>
    )
}
