export default function removeItem(id, income, expenses, setExpenses, incomes, setIncomes) {
    if(income) {
        var newIncomes = incomes.filter(item => item.id !== id);
        setIncomes(newIncomes)
    } else if (!income) {
        var newExpenses = expenses.filter(item => item.id !== id);
        setExpenses(newExpenses)
    }
}
