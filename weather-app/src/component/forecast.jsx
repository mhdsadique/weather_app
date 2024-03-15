import React from 'react'

export const Forecast = ({titile,datas}) => {
    console.log(datas)
    return (
        <div>
        
     <div>
                <p>{datas.dt_txt}</p>
                <img src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/PartlyCloudyDayV3.svg" alt="logo"  />
                <p>{datas.weather.main}</p>
                <p>{datas.main.temp + "°C"}</p>
                <p>{"Humidity : "+datas.main.humidity}</p>
            </div> 
      
    </div>


  )
}
