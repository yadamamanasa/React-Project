import React from 'react'
import '../assets/styles/contact.css'

const Contact = () => {
  return (
    <>
    <div className='contact-form'>
        <form>
           <div className='input-fields'>
            <div className='title'>Contact Form</div>
            <input type="text" placeholder="Enter Contact Number"/> <br/>
            <input type="email" placeholder="Enter Email Address"/> <br/>
            <textarea placeholder="Enter feedback"></textarea> <br/>
            <button>Submit</button>
           </div>
        </form>
    </div>
    </>
   
  )
}

export default Contact
