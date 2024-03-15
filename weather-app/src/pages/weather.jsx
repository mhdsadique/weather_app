import React, { useState } from 'react'

// import { UilLocationPinAlt ,UilSearch } from '@iconscout/react-unicons'
import { Forecast } from '../component/forecast'
import { useEffect } from 'react'
// const  apikey="8815742ecfc470debe411ce863d6f4ae"
const  apikey="6dfa8a0a4791b3719eb8b8356e510052"

export const Weather = () => {
    const [data,setData]=useState([{}])
    const [city,setCity]=useState("")
    const [lat,setlat]=useState("")
    const [lon,setlon]=useState("")
    const [forecast,setforecast]=useState([{}])
    const date=Date () 
    const Getwheather=(e)=>{
   
    
          if(e.key==="Enter"){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`) 
             .then(r=>r.json()).then(da=>{setData(da);setlon(da.coord.lon);setlat(da.coord.lat) })
             .catch(e=>console.log(e))
                       
                        }
      }
      if(data){
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`)
             .then(r=>r.json()).then(da=>{setforecast(da); console.log(da)})
             .catch(e=>console.log(e))
             console.log(forecast) 
          }

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
                            <h2>{data.name}</h2>
                            <h5> {date}</h5>
                            <img src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/PartlyCloudyDayV3.svg" alt="logo"  />
                            <h2>{`${Math.round(data.main.temp)}`}°C </h2>

                       
                            <h4>{data.weather[0].main}</h4>
                        
                            <h4>{`Humidity : ${data.main.humidity}`}</h4>
                            <h4>{`Wind speed : ${data.wind.speed}`}</h4>
                          </div> 
                          {

                          forecast?.list.map((e)=><Forecast key={e.id} titile={"Hourly forecast"} data={e}/>)
                          }
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

