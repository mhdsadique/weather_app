import React from 'react'
import { Link } from "react-router-dom";
export const Home = () => {

  
  return (
    <div >
        <button><Link to="Home">Home</Link></button>
        <button><Link to="login">Login</Link></button>
        <button><Link to="register">Register</Link></button>
        <button><Link to="weather">Weather</Link></button>
    </div>
  )
}
