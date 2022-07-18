import React from 'react'

import {useState,useContext} from 'react'

import {AddContext} from '../Context/AddContext'
 const AddAppointment = () => {

  const {handleAdd}=useContext(AddContext);
  const[name,setName]=useState("")
  const[age,setAge]=useState("")
  const[appdetail,setAppdetail]=useState("")
  const[time,setTime]=useState("")
  const[date,setDate]=useState("");
  const[gender,setGender]=useState("male");

  

  return (
    <>
    
        

         <form style={{"display": 'flex',"justifyContent": 'center',"flexDirection":'column',"margin":"10%"}}>
         <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
         <br/>
         <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
         <br/>
         <input type="text" value={appdetail} onChange={(e)=>{setAppdetail(e.target.value)}}/>
         <br/>
         <input type="text" value={time} onChange={(e)=>{setTime(e.target.value)}}/>
         <br/>
         <input type="text" value={date} onChange={(e)=>{setDate(e.target.value)}}/>
         <br/>
         <input type="text" value={gender} onChange={(e)=>{setGender(e.target.value)}}/>
         <button onClick={()=>{handleAdd({name,age,appdetail,time,date,gender})}}>ADD APPOINTMENT</button>

        </form> 
    
    </>
  )
}

export default AddAppointment