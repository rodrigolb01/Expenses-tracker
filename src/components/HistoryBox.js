import React, { useState } from 'react'
import './style/History.css'
import Transaction from './Transaction'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useEffect } from 'react'


const HistoryBox = () => {
  const transactions = useContext(GlobalContext)
  

  const [elements, setElements] = useState(
    transactions.transactions.map((e) =>
  
    <Transaction key={e.id}
    id={e.id}
    text={e.text}
    amount={e.amount}/>
    )
  );

    
    useEffect(()=> {setElements(transactions.transactions.map((e) =>
  
      <Transaction key={e.id}
      id={e.id}
      text={e.text}
      amount={e.amount}/>
      ))}, [transactions.transactions])

  return (
    <div className='history-container'>
        <h4>History</h4>
        <div>
         {elements}
        </div>
    </div>
  )
}

export default HistoryBox