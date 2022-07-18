import React from 'react'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import {useState} from 'react'
import {useContext} from 'react'
import {AuthContext} from '../Context/AuthContext'


const Login = () => {

    
 const[email,setEmail]=useState("");
 const[pass,setPass]=useState("");
 const {handleLogin,token}=useContext(AuthContext);

  return (
    <div>
        <TextField value={email} onChange={(e)=>(setEmail(e.target.value))} id="standard-basic" label="Standard" variant="standard" />
        <br/>
        <TextField value={pass} onChange={(e)=>(setPass(e.target.value))} id="standard-basic" label="Standard" variant="standard" />
        <br/>
        <Button onClick={()=>{handleLogin({email,pass})}} variant="outlined">Login</Button>

    </div>
  )
}

export default Login