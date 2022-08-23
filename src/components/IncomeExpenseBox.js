import React, { useContext } from 'react'
import './style/IncomeExpense.css'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

const IncomeExpenseBox = () => {
  const transactions = useContext(GlobalContext);

  const expenses = transactions.transactions.map(transaction => transaction.amount < 0 ? transaction.amount : 0);
  const incomes = transactions.transactions.map(transaction => transaction.amount > 0 ? transaction.amount : 0);

  const totalExpenses = expenses.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const totalIncomes = incomes.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className='container'>
        <div className='unit'>
            <h4 style={
              {
                fontWeight: 'bold'
              }
            }>Income</h4> 
            <h4 style={
              {
              fontWeight: 'bold',
              color: 'green'
              }
            }>${totalIncomes}</h4>
        </div>
        <div className='unit'>
            <h4 style={
              {
              fontWeight: 'bold',
              }
            }>Expense</h4> 
            <h4 style={
              {
              fontWeight: 'bold',
              color: 'red'
              }
            }>${totalExpenses}</h4>
        </div>
    </div>
  )
}

export default IncomeExpenseBox