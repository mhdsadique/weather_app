

import {useState} from "react"

export const Login=()=>{
    const [email,setEmail]=useState()
    const [password,setpassword]=useState()
    const payload={email,password}
    const submitdata=()=>{
        fetch("http://localhost:8000/rout/login",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-type":"application/json"
            }
        }).then(res=>res.json())
        .then(re=>{console.log(re)
        localStorage.setItem("token",re.token)})
        .catch(er=>console.log(er))
    }
return(<>
<input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
<input type="password" onChange={(e)=>setpassword(e.target.value)} value={password}/>
<button onClick={submitdata}>Login</button>
</>)

}