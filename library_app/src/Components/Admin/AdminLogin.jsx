import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  let formData=useRef()
  let navigate=useNavigate()
  let handleSubmit =(e)=>{
    e.preventDefault()
    let emailField = formData.current[0]
    let pswdField =   formData.current[1]
    let credentials = {
      email:"manasa@gmail.com",
      password : 'manasa123'
    }
    let {email,password} = credentials
    if(emailField.value === email && pswdField.value === password){
      navigate("/adminportal")
    }
    else{
      emailField.style.cssText = `border:solid 2px red`
      pswdField.style.cssText = `border:solid 2px red`;
    }
  }
  return (
    <>
    <div>
        <form ref={formData} onSubmit={handleSubmit}>
          <input type='email' placeholder='Enter email address'/>
          <input type='password' placeholder='Enter Password'/>
          <button className='login-btn'>Admin Login</button>
        </form>
    </div>
    
    </>
  )
}

export default AdminLogin
