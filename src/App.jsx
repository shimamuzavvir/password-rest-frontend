import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage';
import ForgetPassword from './Components/ForgetPassword';
import ResetPassword from './Components/ResetPassword';
import Home from './Components/Home';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [username, setUsername]=useState("")
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegisterPage/>}></Route>
        <Route path='/login' element={<LoginPage setUsername={setUsername}/>}></Route>
        <Route path='/forgetpassword' element={<ForgetPassword />}></Route>
        <Route path='/resetpassword' element={<ResetPassword />}></Route>
        <Route path='/home' element={<Home username={username} />}></Route>

       
        
      </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;