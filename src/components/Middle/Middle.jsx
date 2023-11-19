import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import './Middle.css';
import Bottom from '../Bottom/Bottom';




const apikey=process.env.REACT_APP_API_KEY





export default function Middle() {

  
 const [cit,setCit] = useState("agra");
 const url="https://api.openweathermap.org/data/2.5/forecast?q="+cit+"&appid="+apikey;

  
   const[citi,setCiti]=useState('')
   const[list,setList]=useState([])
   const[response,setResponse]=useState({});
   const[coord,setCoord]=useState({});
    
 const submit= async ()=>{
  const res=await axios.get(url);
  
  setResponse(res.data);
  setCiti(res.data.city);
  setCoord(res.data.city.coord)
  setList(res.data.list);
  

}

useEffect(()=>{
 submit()
},[])


const [arr,setArr]=useState([])


useEffect(()=>{

  function removeDuplicates(ar) { 
     let unique = []; 
     let data = [];
     ar.forEach(element => { 
         if (!unique.includes(element.dt_txt.substring(0,11))) { 
             unique.push(element.dt_txt.substring(0,11));
             data.push(element); 
         } 
         
         
     }); 
     let data2=[]
     for(let i=1;i<data.length;i++)
     {
        data2.push(data[i]);
     }
     return data2; 
 } 

   setArr(removeDuplicates(list));

},[list])

let timezone=citi.timezone;
let sunrise = citi.sunrise;
let sunset = citi.sunset;

const data={arr,timezone,sunrise,sunset}

const coordToDir = (lat,long)=>{
  const earthRadius=6371;
  const latRad=(lat*Math.PI)/180;
  const longRad=(long*Math.PI)/180;

  const north = 6371*((lat*Math.PI)/180);
  const east = 6371*((long*Math.PI)/180)*Math.cos((lat*Math.PI)/180);

  return { north,east };
}
console.log(citi.name)


// const [coords,setCoords] = useState({});
// setCoords(coordToDir(coord.lat,coord.lon))

  return (
    <>
    <div className='container-mid'>
        <div className='fluid-container-mid'>
            <div className='search'>
            
               <input type="text" placeholder='Search your city here... ' onChange={e=>setCit(e.target.value)} value={cit} className='search-field'/>
               <img className='searchIcon' src="/images/search.png" alt="search" onClick={submit} />
              
               
            </div>
            <div className='city-tmp'>
               <div className='city'>
                <img className='location-img' src="/images/location.png" alt="location" />
                <h1>{citi.name}, {citi.country}</h1>
               </div>
               <div className='tmp'>
                 <span>{coord.lat+" Latitude\n"}</span>
                 <span>{coord.lon+" Longitude"}</span>
               </div>
            </div>
  
        </div>
      
    </div>
    <Bottom dat={data} />
    </>
  )
}
