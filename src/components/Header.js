import React, { useContext } from 'react'
import './style/Header.css'
import { GlobalContext } from '../context/GlobalState'

const Header = () => {

  const transactions = useContext(GlobalContext);

  const amounts = transactions.transactions.map(transaction => transaction.amount); 

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className='header-container'>
        <h2>Your balance</h2>
        <h1 className='header-value'>${total}</h1>
    </div>
  )
}

export default Header