import React, { useContext } from 'react'
import {SettingsContext} from '../App'

export default function Emoji(props) {

    const settings = useContext(SettingsContext)
    
    if(settings.showemoji) {
    return (
        <span role="img" aria-label={props.alt}>{props.code}</span>
    ) } else {
        return (<span></span>)
    }
}
