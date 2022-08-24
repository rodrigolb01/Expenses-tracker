import React, { useContext } from 'react'
import './style/Transaction.css'
import { GlobalContext } from '../context/GlobalState'

const Transaction = (transaction) => {
  const {deleteTransaction} = useContext(GlobalContext);

  return (
    <div id={transaction.id} className='operation-container'>
        <button onClick={() => deleteTransaction(transaction.id)}></button>
        <h5>{transaction.text}</h5>
        <span className={transaction.amount>0 ? 'border-income' : 'border-expense'}> {'$' + Number(transaction.amount).toFixed(2)}</span>
    </div>
  )
}

export default Transaction