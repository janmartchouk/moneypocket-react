import React, { useContext } from 'react'
import Emoji from '../Components/Emoji'
import {motion} from 'framer-motion'
import {SettingsInput, SettingsToggle, ColorInput} from '../Components/Input'
import {SettingsContext} from '../App'
import {ThemeContext} from '../App'

export default function Settings(props) {

    let theme = useContext(ThemeContext)

    var newSettings = {}

    let settings = useContext(SettingsContext)

    function handleChange(setting, value) {

        if(value !== "" && value !== undefined && value !== null) {

            newSettings[setting] = value

            let oldSettings = props.settings
    
            newSettings = {...oldSettings, ...newSettings}
        
            props.setSettings(newSettings)
        }

    }

    let colors = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink']

    return (
        <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={props.pageVariants}
        className={`z-20 bg-${theme.bg1} h-screen`}
        >
            <h1 className={`py-1 rounded inline-block summary-title font-sans text-2xl subpixel-antialiased text-${theme.fg1} mb-4`}><Emoji show={settings.showemoji} alt="Settings gear" code="&#x2699;" /> Settings</h1>
            <SettingsInput id="name" label="Name" setting={'name'} handleChange={handleChange} placeholder={settings.name}></SettingsInput>
            <SettingsInput id="symbol" label="Currency Symbol" setting={'symbol'} handleChange={handleChange} placeholder={settings.symbol}></SettingsInput>
            <SettingsToggle id="emoji" label="Show Emoji" setting={'showemoji'} handleChange={handleChange} toggled={settings.showemoji}></SettingsToggle>
            <SettingsToggle id="greet" label="Show Greeting" setting={'showgreet'} handleChange={handleChange} toggled={settings.showgreet}></SettingsToggle>
            <SettingsToggle id="dark" label="Dark Theme" setting={'darktheme'} handleChange={handleChange} toggled={settings.darktheme}></SettingsToggle>
            <ColorInput setTheme={props.setTheme} id="color" label="Accent Color" colors={colors}></ColorInput>
        </motion.div>
    )
}
