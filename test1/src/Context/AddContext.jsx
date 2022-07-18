import React from 'react'
import {createContext} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export const AddContext=createContext();
const navigate= useNavigate()
export const AddContextProvider = ({Children}) => {
     
    const handleAdd=(val)=>{
     axios({
        method:"post",
        url:"http://localhost:8080/detail",
        data:val,
     })
     navigate('/appointment');

    }


  return (
       <AddContext.Provider value={handleAdd}>{Children}</AddContext.Provider>

    
  )
}

export default AddContext