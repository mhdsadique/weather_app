import React, { useState } from 'react'
// const  apikey="8815742ecfc470debe411ce863d6f4ae"
const  apikey="753fca57bd25f4501eae271281dd7b76"
// https://api.openweathermap.org/data/2.5/weather?q=palakkad&appid=8815742ecfc470debe411ce863d6f4ae
// https://api.openweathermap.org/data/2.5/weather?q=alanallur&appid=${apikey}
export const Weather = () => {
    const [data,setData]=useState([{}])
    const [city,setCity]=useState("")

    const getwheather=(e)=>{
        if(e.key=="Enter"){
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`) 
  .then(r=>r.json()).then(da=>{setData(da);setCity(""); console.log(da)})
  .catch(e=>console.log(e))
            
        }
    }

  return (
    <div>
    <title> Weather App</title>
    <div>
        <input type="text"placeholder='Search City....' 
        onChange={e=>setCity(e.target.value)}value={city}
        onKeyPress={getwheather} />

        <div>
        <h4>Weather App</h4>
            {
                typeof data.main==="undefined" ? 
                    <div><p>Enter Your City</p></div>:
                          <div>
                            <h4>{data.name}</h4>
                            <h4>{Math.round(data.main.temp)}°C </h4>
                            <h4>{data.weather[0].main}</h4>
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
