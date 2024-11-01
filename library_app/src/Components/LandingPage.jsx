import React, { useState } from 'react'
import '../assets/styles/landingpage.css'
import AdminLogin from './Admin/AdminLogin'
import UserLogin from './Users/UserLogin'

const LandingPage = () => {
   let [bool,setBool]= useState(true)
   let handToggle=()=>{
        setBool(!bool)
   }
  return (
   <>
    <div className="landingpage">
        <div className="container">
            <div className="btn-box">
                <button onClick={handToggle} className={bool?'admin-btn':'user-btn'}>
                    {bool ? "Admin Login": "User Login"}
                </button>
            </div>

            <div className="text-box">
                {bool? 'Admin Page':'User Page'}
            </div>
            <div className="form-box">
            {bool ? <AdminLogin/> : <UserLogin/>}
            </div>
            <div className="forgetten">
                <button>Forgot Password...</button>
            </div>
        </div>

    </div>
   
   </>
  )
}

export default LandingPage
