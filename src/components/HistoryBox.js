import React from 'react'
import './style/History.css'
import Operation from './Operation'

const HistoryBox = () => {
  return (
    <div className='history-container'>
        <h4>History</h4>
        <div>
          <Operation/>
          <Operation/>
          <Operation/>
        </div>
    </div>
  )
}

export default HistoryBox