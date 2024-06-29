import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import SignUp from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgetPassword';
import ResetPassword from './components/Resetpassword';
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword/:token" element={<Resetpassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
