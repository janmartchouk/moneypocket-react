import React, { useState } from 'react'
import NavigationItem from './NavigationItem'
import { Link } from 'react-router-dom'
import createPersistedState from 'use-persisted-state';

const useNavState = createPersistedState('activenav');

export default function Navigation() {

    const [active, setActive] = useNavState([false, false, false])

    function handleClick(index) {
        let activeStates = [0,0,0]
        activeStates.fill(false, 0)
        activeStates[index] = true
        setActive(activeStates)
    }

    return (
        <div className="nav p-6 flex justify-center items-center bg-gray-100 bg-opacity-50 shadow">
            <Link to="/"><NavigationItem text="Summary" id={0} active={active[0]} handleClick={handleClick} /></Link>
            <Link to="/incomes"><NavigationItem text="Incomes" id={1} active={active[1]} handleClick={handleClick} /></Link>
            <Link to="/expenses"><NavigationItem text="Expenses" id={2} active={active[2]} handleClick={handleClick} /></Link>
        </div>
    )
}
