import React from 'react'
import {createContext} from 'react'
import axios from 'axios'
import { useState } from 'react';
export const AuthContext=createContext();
export const AuthContextProvider = ({children}) => {
    
    const[token,setToken]=useState("");
    const handleLogin=()=>{
          axios({
            mathod:"post",
            url:'https://reqres.in/api/login'
          }).then((res)=>(setToken(res.data)));
    }

  return (
    <AuthContext.Provider value={{handleLogin,token}}>{children}</AuthContext.Provider>
  )
}

export default AuthContext