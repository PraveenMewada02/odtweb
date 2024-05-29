import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
// import Products from './pages/Tax'
import Signup from './pages/signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './component/form'  
import Dashboard from './pages/dashboard';
import Logout from './pages/Logout';
import Profile from './pages/profile';
import Forgot from './pages/forgot';
import Setting from './pages/setting';
import Help from './pages/Help';
// import Tax from './pages/Tax';
import Attendance from './pages/Attendance'; //namechange
import OldFetch from './pages/fetching';


function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)
 
  return (
    <>
    
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Form />} />
        <Route path="/login" element={<Form />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/help" element={<Help />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/fetching" element={<OldFetch />} />
        
      
      </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
