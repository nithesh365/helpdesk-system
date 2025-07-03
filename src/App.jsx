import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import SignUp from './pages/Auth/SignUp.jsx'
import SignIn from './pages/Auth/SignIn'
import ForgotPassword from './pages/Auth/ForgotPassword'
import MainLayout from './layouts/MainLayout'
import UserDashboard from './pages/User/UserDashboard'
import UserProfile from './pages/User/user-profile'
import MyTickets from './pages/User/my-tickets'
import NewTicket from './pages/User/new-ticket'
import Home  from './pages/Home.jsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/user' element={<MainLayout/>}>
        <Route index element={<UserDashboard/>}/>
        <Route path='profile' element={<UserProfile/>}/>
        <Route path='my-tickets' element={<MyTickets/>}/>
        <Route path='new-ticket' element={<NewTicket/>}/>
      </Route>
    </Routes>
  )
}

export default App
