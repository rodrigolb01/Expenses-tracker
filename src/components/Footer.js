import React, { useContext } from 'react'
import './style/Footer.css'

import { useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Footer = () => {
  const {addTransaction} = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [value, setValue] = useState(0)


  const onTrasactionAdd = () => {
      console.log(`new transaction: ${text} - ${value}`);
      const newTransaction = {
        id: Math.floor(Math.random * 100000000),
        text,
        value : +value
      }
      addTransaction(newTransaction);
  }

  return (
    <div className='footer-container'>
        <h4>Add new transaction</h4>
        <h3>Text</h3>
        <input type={'text'} value={text? text : undefined} onChange={(e)=>setText(e.target.value)}/>
        <h3>Amount</h3>
        <input type={'number'} value={value? value : undefined} onChange={(e)=>setValue(e.target.value)}/>
        <button className='add-button' onClick={onTrasactionAdd}>Add Transaction</button>
    </div>
  )
}

export default Footer