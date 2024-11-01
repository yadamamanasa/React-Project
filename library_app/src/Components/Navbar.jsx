import React from 'react'
import '../assets/styles/navbar.css'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {

  let loc = useLocation()
  let path=loc.pathname
  let bool=path.startsWith('/adminportal')
  return (
    <>
    <div className="navbar">
        <div className="logo">
            <h3> BOOKS LIBRARY </h3>
        </div>
        <div className='links'>
            {
              bool ?
              <ul>
                <li><NavLink to="/adminportal/">HOME</NavLink></li>
                <li><NavLink to="/adminportal/books">BOOKS</NavLink></li>
                <li><NavLink to="/adminportal/addbooks">ADD BOOKS</NavLink></li>
                <li><NavLink to="/adminportal/users">USERS</NavLink></li>
                <li><NavLink to="/adminportal/adduser">ADD USERS</NavLink></li>
                <li><NavLink to="/adminportal/contact">CONTACT</NavLink></li>
                <li><NavLink to="/">LOGOUT</NavLink></li>
            </ul>
            :
            <ul>
              <li><NavLink to="/userportal/">HOME</NavLink></li>
              <li><NavLink to="/userportal/books">BOOKS</NavLink></li>
              <li><NavLink to="/userportal/cartitems">CART  ITEMS</NavLink></li>
              <li><NavLink to="/userportal/users">USERS</NavLink></li>
              <li><NavLink to="/userportal/contact">CONTACT</NavLink></li>
              <li><NavLink to="/">LOGOUT</NavLink></li>
            </ul>
            }
        </div>

    </div>
    <br/> <br/> <br/>
    </>
  )
}

export default Navbar
