

// https://smoggy-sheath-dress-fish.cyclic.app/

import {useState} from "react"

export const Register=()=>{
    const [email,setEmail]=useState()
    const [password,setpassword]=useState()
    const payload={email,password}
    const submitdata=()=>{
        fetch("http://localhost:8000/rout/register",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-type":"application/json"
            }
        }).then(res=>res.json())
        .then(re=>console.log(re))
        .catch(er=>console.log(er))
    }

return(<>
<input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
<input type="password" onChange={(e)=>setpassword(e.target.value)} value={password}/>
<button onClick={submitdata}>Register</button>
</>)
   

}