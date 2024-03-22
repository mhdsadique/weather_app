import React from 'react'
import { Link } from "react-router-dom";
const storage=(localStorage.getItem("token"))||[]
export const Home = () => {
  
  console.log(storage.token)
  
  return (
    <div >
        <button><Link to="Home">Home</Link></button>
        <button><Link to="login">Login</Link></button>
        <button><Link to="register">Register</Link></button>
        <button><Link to="weather">Weather</Link> </button>
      
    </div>
  )
}
