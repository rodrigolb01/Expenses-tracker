import React, { useContext } from 'react'
import './style/Transaction.css'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ( {id, text, amount}) => {
  const {deleteTransaction} = useContext(GlobalContext);

  return (
    <div id={id} className='operation-container'>
        <button onClick={() => deleteTransaction(id)}></button>
        <h5>{text}</h5>
        <span className={amount>0 ? 'border-income' : 'border-expense'}> {'$' + amount}</span>
    </div>
  )
}

export default Transaction