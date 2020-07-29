import React, { useContext } from 'react'
import NavigationItem from './NavigationItem'
import { Link } from 'react-router-dom'
import createPersistedState from 'use-persisted-state';
import {ThemeContext} from '../App'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'


const useNavState = createPersistedState('activenav');

export default function Navigation() {

    let theme = useContext(ThemeContext)

    const [active, setActive] = useNavState([false, false, false, false])

    function handleClick(index) {
        let activeStates = [0,0,0,0]
        activeStates.fill(false, 0)
        activeStates[index] = true
        setActive(activeStates)
    }

    return (
        <div className={`nav p-6 pr-0 flex justify-center items-center bg-${theme.bg2} shadow`}>
            <Link className="ml-auto" to="/"><NavigationItem text="Summary" id={0} active={active[0]} handleClick={handleClick} /></Link>
            <Link to="/incomes"><NavigationItem text="Incomes" id={1} active={active[1]} handleClick={handleClick} /></Link>
            <Link to="/expenses"><NavigationItem text="Expenses" id={2} active={active[2]} handleClick={handleClick} /></Link>
            <Link className="ml-auto" to="/settings"><NavigationItem right={true} text={<FontAwesomeIcon icon={faCog}/>} id={3} active={active[3]} handleClick={handleClick} /></Link>
        </div>
    )
}
