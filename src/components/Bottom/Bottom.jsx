
import React from 'react'
import './Bottom.css';
import Card from '../Card/Card';


export default function Bottom({dat}) {




     
        



  return (
    <div className='container-bottom'>
        <div className='fluid-container-bottom'>
            
            <ul className='field-card'>
                <li>
                    <div className='weather-date'>
                        <label htmlFor="date">Select Date:</label>
                        <input type="date" name="date" id="date" value='01-20-2024' />
                    </div>
                </li>
                <li><span>High Temperature</span></li>
                <li><span>Low Temperature</span></li>
                <li><span>Humidity</span></li>
                <li><span>Sunrise Time</span></li>
                <li><span>Sunset Time</span></li>
            </ul>
        
       
        {dat.arr && dat.arr.map((e)=>{
         e.timezone=dat.timezone
         e.sunrise=dat.sunrise
         e.sunset=dat.sunset
         return <Card data={e} />
        })
        }
        
        
        

        </div>
      
    </div>
  )
}
