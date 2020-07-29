import React, { useEffect } from 'react';
import timeConverter from './Hooks/timeConverter'
import Navigation from './Components/Navigation'
import Background from './Components/Background'
import Settings from './Views/Settings'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

import Incomes from './Views/Incomes.js'
import Expenses from './Views/Expenses.js'
import Summary from './Views/Summary.js'
import SummaryItem from './Components/SummaryItem'

import createPersistedState from 'use-persisted-state';
import addItem from './Hooks/addItem';
import removeItem from './Hooks/removeItem';

export const SettingsContext = React.createContext({})
export const ThemeContext = React.createContext({})

const useExpensesState = createPersistedState('expenses');
const useIncomesState = createPersistedState('incomes');
const useSettingsState = createPersistedState('settings');
const useThemeState = createPersistedState('theme');

function App() {

  const [expenses, setExpenses] = useExpensesState([])
  const [incomes, setIncomes] = useIncomesState([])

  const [settings, setSettings] = useSettingsState(
    {
      'name': 'User',
      'showemoji': true,
      'showgreet': true,
      'darktheme': false,
      'symbol': '€'
    }
  )

  const [theme, setTheme] = useThemeState({
    'bg1': 'white',
    'bg2': 'gray-100',
    'bg3': 'gray-300',
    'fg1': 'gray-900',
    'fg2': 'gray-800',
    'accent': 'purple'
  })

  useEffect(() => {
    if (!settings.darktheme) {
      setTheme({
        'bg1': 'white',
        'bg2': 'gray-100',
        'bg3': 'gray-300',
        'fg1': 'gray-900',
        'fg2': 'gray-800',
        'accent': theme.accent,
      })
    } else if (settings.darktheme) {
      setTheme({
        'bg1': 'gray-900',
        'bg2': 'gray-800',
        'bg3': 'gray-700',
        'fg1': 'gray-100',
        'fg2': 'gray-300',
        'accent': theme.accent,
      })
    }
  }, [settings.darktheme])



  function handleAddItem(newItem, setModalOpen) {
      addItem(newItem, expenses, setExpenses, incomes, setIncomes);
  }

  function handleClose(id, income) {
    removeItem(id, income, expenses, setExpenses, incomes, setIncomes)
    console.log('removing')
  }

  const pageVariants = {
    initial: {
      y: 100
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      y: 100
    },
  }

  expenses.sort((a, b) => (a.id < b.id) ? 1 : -1)
  var expenseList = expenses.map(function(item) {
    return <SummaryItem handleClose={handleClose} name={item.name} income={false} amount={item.amount} id={item.id} key={item.id} currency="€" date={timeConverter(item.id)}></SummaryItem>;
  })

  incomes.sort((a, b) => (a.id < b.id) ? 1 : -1)
  var incomeList = incomes.map(function(item) {
    return <SummaryItem handleClose={handleClose} name={item.name} income={true} amount={item.amount} id={item.id} key={item.id} currency="€" date={timeConverter(item.id)}></SummaryItem>;
  })

  return (
    <div className={`App bg-${theme.bg1}`}>
      <Router>
        <ThemeContext.Provider value={theme}>
        <SettingsContext.Provider value={settings}>

          <Navigation />

          <div className={`p-6 bg-${theme.bg1}`}>
            <AnimatePresence>
              <Switch>
                  <Route className="focus:outline-none" exact path="/">
                    <Summary expenses={expenses} incomes={incomes} handleClose={handleClose} handleAddItem={handleAddItem} pageVariants={pageVariants} settings={settings}/>
                  </Route>

                  <Route className="focus:outline-none" path="/incomes">
                    <Incomes pageVariants={pageVariants} incomeList={incomeList} settings={settings}/>
                  </Route>

                  <Route className="focus:outline-none" path="/expenses">
                    <Expenses pageVariants={pageVariants} expenseList={expenseList} settings={settings}/>
                  </Route>

                  <Route className="focus:outline-none ml-auto" path="/settings">
                    <Settings setTheme={setTheme} setSettings={setSettings} pageVariants={pageVariants} settings={settings} />
                  </Route>
              </Switch>
            </AnimatePresence>
          </div>

          <Background />

          </SettingsContext.Provider>
          </ThemeContext.Provider>
        </Router>
    </div>
  );
}

export default App;
