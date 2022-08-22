import React from 'react'
import './style/IncomeExpense.css'

const IncomeExpenseBox = () => {
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
            }>`${500.00}`</h4>
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
            }>`${500.00}`</h4>
        </div>
    </div>
  )
}

export default IncomeExpenseBox