import React from 'react'
import './Topbar.css';



export default function Topbar() {
  return (
    <div className='container'>
      <div className='fluid-container'>
      <span className='logo'>
        Weather 99
      </span>
     
      <button className='reload-btn' type="reset" onClick={e=>{window.location.reload()}}>
      <img alt='reload' className='reload' src='/images/reload.png'/>
      <span>Refresh</span>
      </button>

      </div>
    </div>
  )
}
