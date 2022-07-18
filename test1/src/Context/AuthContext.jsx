import React from 'react'
import {createContext} from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export const AuthContext=createContext();

export const AuthContextProvider = ({children}) => {
   
    const[token,setToken]=useState("");

    useEffect(() =>{


    })
    const handleLogin=(body)=>{
      console.log(body)
      fetch("https://reqres.in/api/login",
      {
          headers: {
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({
            email:body.email,
            password:body.pass
          })
      })
      .then( (res)=>res.json())
      .then((res)=>{setToken(res.token)})
      .catch(function(res){ console.log(res) })
     

    }

  return (
    <AuthContext.Provider value={{handleLogin,token}}>{children}</AuthContext.Provider>
  )
}

export default AuthContext