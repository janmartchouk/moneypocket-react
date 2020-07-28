import React from 'react';
import timeConverter from './Hooks/timeConverter'
import Navigation from './Components/Navigation'
import Background from './Components/Background'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

import Incomes from './Views/Incomes.js'
import Expenses from './Views/Expenses.js'
import Summary from './Views/Summary.js'
import SummaryItem from './Components/SummaryItem'

import createPersistedState from 'use-persisted-state';
import addItem from './Hooks/addItem';
import removeItem from './Hooks/removeItem';
const useExpensesState = createPersistedState('expenses');
const useIncomesState = createPersistedState('incomes');

function App() {

  const [expenses, setExpenses] = useExpensesState([])
  const [incomes, setIncomes] = useIncomesState([])


  function handleAddItem(newItem) {
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
    <div className="App">
      <Router>
      <div>
      <Navigation />
      <div className="p-6">
        <AnimatePresence>
          <Switch>
              <Route className="focus:outline-none" exact path="/">
                <Summary expenses={expenses} incomes={incomes} handleClose={handleClose} handleAddItem={handleAddItem} pageVariants={pageVariants}/>
              </Route>
              <Route className="focus:outline-none" path="/incomes">
                <Incomes pageVariants={pageVariants} incomeList={incomeList}/>
              </Route>
              <Route className="focus:outline-none" path="/expenses">
              <Expenses pageVariants={pageVariants} expenseList={expenseList}/>
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
      <Background />
      </div>
      </Router>
    </div>
  );
}

export default App;
