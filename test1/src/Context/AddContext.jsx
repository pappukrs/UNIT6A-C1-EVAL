import React from 'react'
import {createContext} from 'react'
export const AddContext=createContext();

export const AddContextProvider = ({Children}) => {
    const handleAdd=(val)=>{
      fetch("https://localhost:8080/detail",
      {
          headers: {
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(
            val
          )
      })
      .then( (res)=>res.json())
      .then((res)=>{console.log(res)})
      .catch(function(res){ console.log(res) })
     
    
    //  navigate('/appointment');

    }


  return (
       <AddContext.Provider value={{handleAdd}}>{Children}</AddContext.Provider>

    
  )
}

export default AddContext