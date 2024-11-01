import React, { useEffect, useState } from 'react'
import '../assets/styles/users.css'
import { useLocation, useNavigate } from 'react-router-dom'
const Users = () => {
    let [user , setUser] = useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/users')
    .then(resp => resp.json())
    .then((ele)=>{
      setUser(ele)
    })
  },[user])
  let deleteUser = (id,name)=>{
    let bool = window.confirm(`Do You Want delete ${name} user...?`)
    if(bool)
    {
        fetch(`http://localhost:4000/users/${id}`,{method : "DELETE"})
        alert(`${name} is deleted`)
    }else{
        alert(`${name} is not deleted`)
    }
  }

  let navi = useNavigate()
  let handleBtn = () => {
    navi('/adminportal/adduser')
  }
  let loc = useLocation()
  let path = loc.pathname.startsWith('/adminportal')
  return (
    <>
        <br /><br /><br /> <br /><br /><br /><br />
       <div className="user-container">
        {(user.length !== 0) ? 
         <>
             <table  >
            <thead >
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Place</th>
                    {path && <th>DOB</th>}
                    <th>Age</th>
                    <th>Email</th>
                    {path &&  <th>Password</th>}
                    {path && <th>Action</th>}
                </tr>
            </thead>
            {
                user.map((ele)=>{
                    let {id,fname,lname,place,dob,email,password} = ele
                    let dateobj = new Date()
                    let age = dateobj.getFullYear()-Number(dob.slice(0,4))
                    return(
                        <>
                            <tbody>
                                {user.map((user,index)=>{
                                    const{id,fname,lname,password,dob,place}=user
                                })}
                            <tr>
                                    <td>{id}</td>
                                    <td>{fname}</td>
                                    <td>{lname}</td>
                                    <td>{place}</td>
                                    {path && <td>{dob}</td>}
                                    <td>{age}</td>
                                    <td>{email}</td>
                                    {path &&  <td>{password}</td>}
                                    {path && <td><button onClick={()=>{deleteUser(id,fname)}}>Delete</button></td>}
                                </tr>
                            </tbody>
                            
                        </>
                    )
                })
            }
        </table>
         </>
         :
         <>
           <center> <h1>No data Found....</h1></center>
            <button className='button' onClick={handleBtn}>
                Add Users
            </button>
         </>
        }
       </div>
    </>
  )
}

export default Users