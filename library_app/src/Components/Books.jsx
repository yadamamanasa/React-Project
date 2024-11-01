import React, { useEffect, useState } from 'react'
import '../assets/styles/books.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Books = () => {
  let navigate = useNavigate()
  let loc = useLocation()
  let path = loc.pathname.startsWith('/adminportal')
  let readBook = (id)=>{
    path ?
    navigate(`/adminportal/readbook/${id}`)
    :
    navigate(`/userportal/readbook/${id}`)
  }
 let [data,setData]= useState([])
useEffect(()=>{
  fetch('http://localhost:4000/books')
  .then(resp=>resp.json())
  .then((elem)=>{
    setData(elem)
  })
},[data])
let deleteBook=(id,title)=>{
  let bool = window.confirm(`Do you want to delete ${title} book...?`)
  if(bool){
    fetch(`http://localhost:4000/books/${id}`,{method : "DELETE"})
    alert(`${title} book is Deleted`)
  }
  else{
    alert(`${title} : Book is not deleted`)
  }
}

  return (
    <>
        <div className="books">
          <div className="container">
              {
                data.map((elem)=>{
                  let{id,title,isbn,pageCount,thumbnailUrl,status,authors,categories}=elem
                  return(
                    <>
                    <div className="card">
                      <div className="left">
                        <img src={thumbnailUrl} />
                        <div className="title2">{title}</div>
                      </div>
                      <div className="right">
                      <div className="title">{title}</div>

                        <table>
                          <tr>
                            <th>Id</th>
                            <td>{id}</td>
                          </tr>
                          <tr>
                            <th>Isbn</th>
                            <td>{isbn}</td>
                          </tr>
                          <tr>
                            <th>PageCount</th>
                            <td>{pageCount}</td>
                          </tr>
                          <tr>
                            <th>Status</th>
                            <td>{status}</td>
                          </tr>
                          
                          <tr>
                            <th>Categories</th>
                            <td>{categories}</td>
                          </tr>
                          <tr>
                            <th>Authors</th>
                            <td>{authors}</td>
                          </tr>         
                        </table>
                        <div className="btn">
                        <button onClick={()=>{readBook(id)}}>ReadBooks</button>
                        {
                          path &&
                          <button className='del' onClick={()=>{deleteBook(id,title)}}>
                            Delete
                          </button>
                        }
                       </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
          </div>
        </div>
    </>
  )
}

export default Books
