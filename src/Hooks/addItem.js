export default function addItem(newItem, expenses, setExpenses, incomes, setIncomes) {
    function has(prop) {
        if(newItem.hasOwnProperty(prop) && newItem[prop] !== null) {
          return true
        } else {
          console.log('newItem doesnt have prop ' + prop)
          return false
        }
      }
  
      if(has('amount') && has('name') && has('id') && has('income')) {
        console.log('newItem has all props, calling addItem()');

        if (newItem.income === true) {
            var newIncomes = [ newItem ]
            console.log(newIncomes)
            setIncomes(incomes.concat(newIncomes))
        } else if (newItem.income === false) {
            var newExpenses = [ newItem ]
            console.log(newExpenses)
            setExpenses(expenses.concat(newExpenses))
        }

        return true;

      } else {
        return false;
      }

}
