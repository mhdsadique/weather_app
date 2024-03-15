import React, { useEffect, useState } from 'react'
import './cs.css'

import { Forecast } from '../component/forecast'
const  apikey="aca33a262af8077256f8b3102108eed4"
export const Weather = () => {
    const [data,setData]=useState([{}])
    const [city,setCity]=useState("")
    const [lat,setlat]=useState("")
    const [lon,setlon]=useState("")
    const [forecast,setforecast]=useState([])
    const date=Date () 
    
    const Getwheather=(e)=>{
          if(e.key==="Enter"){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`) 
             .then(r=>r.json()).then(da=>{setData(da);setlon(da.coord.lon);setlat(da.coord.lat) ;console.log(da.coord.lat)})
             .catch(e=>console.log(e))
                     }
      }
      useEffect(()=>{
        if(data){
              fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`)
               .then(r=>r.json()).then(da=>{setforecast(da); console.log(da)})
               .catch(e=>console.log(e))
              }
            },[data,lat,lon,apikey])
            console.log(forecast.list) 

  return (
    <div>
    <title> Weather App</title>
    <div>
        <input type="text"placeholder='Search City....' 
        onChange={e=>setCity(e.target.value)}value={city}
        onKeyPress={Getwheather} />
     
        <div>
        <h4>Weather App</h4>
            {
                typeof data.main==="undefined" ? 
                    <div><p>Enter Your City</p></div>:
                    <div>
                          <div>
                            <h1>{data.name}</h1>
                            <h5> {date}</h5>
                            <img src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/PartlyCloudyDayV3.svg" alt="logo"  />
                            <h1>{`${Math.round(data.main.temp)}`}°C </h1>

                       
                            <h4>{data.weather[0].main}</h4>
                        
                            <h4>{`Humidity : ${data.main.humidity}`}</h4>
                            <h4>{`Wind speed : ${data.wind.speed}`}</h4>
                          </div> 
                          
                            <div className='grid' >
{

                          forecast.list?.map((e,i)=><Forecast key={i} titile={"Hourly forecast"} datas={e}/>)
}
                            </div>
                        
                       </div>
            }
        </div>
        {
          data.cod==="404"?
          <h3>City Note Found</h3>:<></>
        }
     </div>

    </div>
  )
}

