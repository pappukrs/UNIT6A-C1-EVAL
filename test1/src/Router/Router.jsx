import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Component/Home'
import Login from '../Component/Login'
import Appointment from '../Component/Appointment'
import AddAppointment from '../Component/AddAppointment'
import DetailsAppointment from '../Component/DetailsAppointment'


const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/appointment' element={<Appointment/>} />
         <Route path='/add' element={<AddAppointment/>} /> 
        <Route path='/appointment/:id' element={<DetailsAppointment/>} />
    </Routes>
    
  )
}

export default Router