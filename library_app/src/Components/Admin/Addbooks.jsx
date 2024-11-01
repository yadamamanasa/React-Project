import React, { useEffect, useRef, useState } from 'react'
import '../../assets/styles/addbooks.css'
import axios from 'axios'


const Addbooks = () => {
  let formData= useRef()
  let [book,setBook]=useState()
  useEffect(()=>{
    axios
    .get('http://localhost:4000/books')
    .then(resp=>{
      //console.log(resp.data) data is indicates from json
      setBook(resp.data)
    })
  },[book])
  // console.log(book)

  let idValue =()=>{
    const id = Number(book[book.length-1].id)
    return id+1;
  }

  let handleSubmit=(e)=>{
    e.preventDefault()
    let newId = idValue()

  
    let newBook ={
      id:String(newId),
      title:formData.current[0].value,
      isbn:formData.current[1].value,
      pageCount:formData.current[2].value,
      thumbnailUrl : formData.current[3].value,
      shortDescription : formData.current[4].value,
      longDescription : formData.current[5].value,
      status : formData.current[6].value,
      authors : [formData.current[7].value],
      categories:[formData.current[8].value]
    }
    // let{title,isbn,pageCount,thumbnailUrl,shortDescription,longDescription,status,authors,categories} = newBook
    // if(title!=""&& isbn!=""&& isbn!="" && isbn!="" && isbn!="" && isbn!="" ){

    // }
    // else{
    //   newBook.style.cssText = `border:solid 2px red`
    // }
    fetch(`http://localhost:4000/books`,{
      method:'POST',
      headers:{'Content-type': 'application/json'},
      body : JSON.stringify(newBook)
    })
  }
  return (
   <>         
   <br/> <br/> <br/> <br/>
    <div className="input-head">
        <div className="input-container">
          <div className="title">Add Books</div>
          <form ref={formData} onSubmit={handleSubmit}>
            <div className='input-fields'>
              <input type='text' placeholder='Enter Title Name' required/>  
              <input type='text' placeholder='Enter Reg.No' required/> 
              <input type='number' placeholder='Enter PageCount' required/> 
              <input type='text' placeholder='Enter Image Url' required/>
              <input type='text' placeholder='Enter Short Description' required/>
              <input type='text' placeholder='Enter Long Description' required/>
              <input type='text' placeholder='Enter Status' required/>
              <input type='text' placeholder='Enter Author Name' required/>
              <input type='text' placeholder='Enter Categories' required/>
            </div>
            <button className='button'>ADD BOOKS</button>
          </form>    
        </div>
    </div>
   </>
  )
}

export default Addbooks
