import React from 'react'

export const Forecast = ({titile,e}) => {
    console.log(e)
    return (
        <div>
        <p>{titile}</p>
        
     <div>
                <p>{e.list.dt_txt}</p>
                <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wHgf?ver=65a5" alt="" srcset="logo" />
                <p>{e.list.weather.main}</p>
                <p>{e.list.main.temp + "°C"}</p>
                <p>{e.list.main.humidity}</p>
            </div>
            
        
      
    </div>


  )
}
