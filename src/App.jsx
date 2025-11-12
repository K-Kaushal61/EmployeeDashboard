import React, { useEffect, useState, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDash from './components/Dashboard/EmployeeDash'
import AdminDash from './components/Dashboard/AdminDash'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  
  const handleLogin = (email, password) => {
    if(authData && authData.admin.find((e) => e.email == email && e.password == password)){
      setUser('admin')
    }
    else if(authData && authData.employees.find((e) => e.email == email && e.password == password)){
      setUser('employee')
    }
    else{
      console.log("This is Invalid");
    }
  }

  

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : ''}
    {user == 'admin' ? <AdminDash /> : <EmployeeDash />}
    </>
  )
}

export default App