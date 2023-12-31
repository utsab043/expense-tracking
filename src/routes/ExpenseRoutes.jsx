import { BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react'
import LandingPage from "../pages/LandingPage"
import { Login } from "../pages/authentication/Login"
import Register from "../pages/authentication/Register"
const ExpenseRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/app/*" element={<AppRoutes />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
    </BrowserRouter>
  )
}
const AuthRoutes = () => {
  return(
    <Routes>
       <Route path="login" element={<Login />} />
       <Route path="register" element={<Register/>} />
       <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      )
  }
  
  const AppRoutes = () => {
    return(
      <Routes>
       <Route path="dashboard" element={<h1>Dashboard</h1>} />
       <Route path="category" element={<h1>Category</h1>} />
       <Route path="setting" element={<h1>Setting</h1>} />
       <Route path="add" element={<h1>Add</h1>} />
       <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    )
  }

export default ExpenseRoutes