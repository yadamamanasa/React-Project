import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
  let[users,setUsers]=useState([])
  useEffect(()=>{
    let fetchUserApi= async()=>{
      let userApi = await axios.get(`http://localhost:4000/users`)

        setUsers(userApi.data)
    }
    fetchUserApi()
  },[users])

    //collecting all users email address
  let allUsersMail = users.map((elem)=>{
    return(elem.email)
  })
  
      //console.log(allUsersMail)

      let emailInput = useRef()
      let pswdInput = useRef()


      let emailField = emailInput.current
      let pswdField = pswdInput.current

      let navigate = useNavigate()
      let handleSubmit =(e)=>{
        e.preventDefault()
        let email = allUsersMail.includes(emailField.value)
        let password = (pswdField.value === 'user1234')

        if(email && password){
          navigate('/userportal/')
        }
        else{
          // alert('Invalid Credentials')
          let err = `border:solid 2px red`
          emailField.style.cssText=err;
          pswdField.style.cssText=err;
        }
      }
  


  return (
    <>
    <div>
            <form onSubmit={handleSubmit}>
                <input type='email'  ref={emailInput} placeholder='Enter email address'/>
                <input type='password' ref={pswdInput} placeholder='Enter Password'/>
                <button className='login-btn'>User Login</button>
            </form>                   
    </div>
    </>
  )
}

export default UserLogin
