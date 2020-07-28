import React from 'react'
import SummaryHeader from '../Components/SummaryHeader'
import SummaryItem from '../Components/SummaryItem'
import timeConverter from '../Hooks/timeConverter'
import {motion, AnimatePresence} from 'framer-motion'
import isLastMonth from '../Hooks/isLastMonth'


export default function Summary(props) {

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
                total = parseFloat(total + item.amount).toFixed(2)
            });
        }
        if(exp.length > 0) {
            exp.forEach(item => {
                total = parseFloat(total - item.amount).toFixed(2)
            });
        }
        return total
    }

    function totalMonth(arr) {
        var total = 0
        if(arr.length > 0) {
            arr.forEach(item => {
                if(isLastMonth(item.id)) {
                    total = parseFloat(total + item.amount).toFixed(2)
                }
            });
        }
        return total
    }

    return (
        <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={props.pageVariants}
        className="z-20 bg-white h-screen"
        >
            <SummaryHeader total={total(props.incomes, props.expenses)} monthIncomes={totalMonth(props.incomes)} monthExpenses={totalMonth(props.expenses)} username="Jan" handleAddItem={props.handleAddItem}></SummaryHeader>
            {allList}
        </motion.div>
    )
}
