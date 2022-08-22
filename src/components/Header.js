import React from 'react'
import './style/Header.css'

const Header = () => {
  return (
    <div className='header-container'>
        <h2>Your balance</h2>
        <h1 className='header-value'>${'260'}</h1>
    </div>
  )
}

export default Header