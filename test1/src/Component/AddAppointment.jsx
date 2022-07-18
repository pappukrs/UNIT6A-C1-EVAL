import React from 'react'
import {TextField} from '@mui/material'
import {useState} from 'react'
import {useContext} from 'react'
import {AddContext} from '../Context/AddContext'
const AddAppointment = () => {
  const[name,setName]=useState("")
  const[age,setAge]=useState(0)
  const[appdetail,setAppdetail]=useState("")
  const[time,setTime]=useState(0)
  const[date,setDate]=useState(0);
  const[gender,setGender]=useState("male");

  const {handleAdd}=useContext(AddContext);

  return (
    <>
    <div>
        

        <form style={{"display": 'flex',"justifyContent": 'center',"flexDirection":'column',"margin":"10%"}}>
         <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
         <br/>
         <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
         <br/>
         <input type="text" value={appdetail} onChange={(e)=>{setAppdetail(e.target.value)}}/>
         <br/>
         <input type="time" value={time} onChange={(e)=>{setTime(e.target.value)}}/>
         <br/>
         <input type="date" value={date} onChange={(e)=>{setDate(e.target.value)}}/>
         <br/>
        <input type="text" value={gender} onChange={(e)=>{setGender(e.target.value)}}/>
         <button onClick={()=>{handleAdd({name,age,appdetail,time,date,gender})}}>ADD APPOINTMENT</button>

        </form>
    </div>
    </>
  )
}

export default AddAppointment