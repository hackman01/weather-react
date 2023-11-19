import React from 'react';
import './Card.css';

export default function Card({data}) {
   const date = (new Date(data.dt*1000-data.timezone*1000)).toDateString().substring(4);
   const offset = 15.5*60;
   const sunriseTime=(new Date(data.sunrise*1000-data.timezone*1000))
   const sunsetTime=(new Date(data.sunset*1000-data.timezone*1000))
   const icon="http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png"
   const localSunrise = new Date(sunriseTime.getTime() + offset * 60000).toLocaleTimeString() ;
   const localSunset = new Date(sunsetTime.getTime() + offset * 60000).toLocaleTimeString() ;
  return (
    <div className='card'>
          <span className='day'>{date}</span>
          <div className='sub-card'>
             <div className='card-top'>
                <img src={icon} alt="" height="50px" width="50px" />
                <span>{data.weather[0].main}</span>
             </div>
             
             <div className='card-bottom'>
             <li><span>{(data.main.temp_max-273).toFixed(1)}°C / {((data.main.temp_max-273)*(9/5)+32).toFixed(1)}°F</span></li>
                <li><span>{(data.main.temp_min-273).toFixed(1)}°C / {((data.main.temp_min-273)*(9/5)+32).toFixed(1)}°F</span></li>
                <li><span>{data.main.humidity}%</span></li>
                <li><span>{localSunrise}(IST)</span></li>
                <li><span>{localSunset}(IST)</span></li>
             </div>
          </div>
        </div>
  )
}
