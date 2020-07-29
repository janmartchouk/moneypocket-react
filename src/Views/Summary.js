import React, { useContext } from 'react'
import SummaryHeader from '../Components/SummaryHeader'
import SummaryItem from '../Components/SummaryItem'
import timeConverter from '../Hooks/timeConverter'
import {motion, AnimatePresence} from 'framer-motion'
import isLastMonth from '../Hooks/isLastMonth'
import {ThemeContext} from '../App'


export default function Summary(props) {

    let theme = useContext(ThemeContext)

    //concat incomes and expenses
    var allItems = props.expenses.concat(props.incomes)
    //first, everything is considered an income
    allItems.forEach(item => {
        item.income = true
    });
    //loop through the expenses and change the .income property
    for (var i = 0; i < props.expenses.length; i++) {
        props.expenses[i].income = false
    }
    //sort by id
    allItems.sort((a, b) => (a.id < b.id) ? 1 : -1)
    //compile into list
    var allList = allItems.map(function(item) {
        return <AnimatePresence><SummaryItem handleClose={props.handleClose} name={item.name} id={item.id} income={item.income} amount={item.amount} key={item.id} currency="€" date={timeConverter(item.id)}></SummaryItem></AnimatePresence>;
    })

    function total(inc, exp) {
        var total = 0

        if(inc.length > 0) {
            inc.forEach(item => {
                total = parseInt(parseInt(total) + parseInt(item.amount))
            });
        }

        console.log(total)

        if(exp.length > 0) {
            exp.forEach(item => {
                total = parseInt(parseInt(total) - parseInt(item.amount))
            });
        }
        return parseFloat(total).toFixed(2)
    }

    function totalMonth(arr) {
        var total = 0
        if(arr.length > 0) {
            arr.forEach(item => {
                if(isLastMonth(item.id)) {
                    total = parseInt(parseInt(total) + parseInt(item.amount))
                }
            });
        }
        return parseFloat(total).toFixed(2)
    }

    return (
        <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={props.pageVariants}
        className={`z-20 bg-${theme.bg1} h-screen`}
        >
            <SummaryHeader total={total(props.incomes, props.expenses)} monthIncomes={totalMonth(props.incomes)} monthExpenses={totalMonth(props.expenses)} handleAddItem={props.handleAddItem}></SummaryHeader>
            {allList}
        </motion.div>
    )
}
