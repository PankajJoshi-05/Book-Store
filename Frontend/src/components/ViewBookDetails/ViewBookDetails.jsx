import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import axios from "axios"

const ViewBookDetails = () => {
    const {id}=useParams();
    const [book,setBook]=useState(null);
  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(`http://localhost:1000/api/v1/get-book-by-id/${id}`);
      
      setBook(res.data.data);
     console.log(book);
    };
    fetch();
  },[])
  return (
    <div className='px-12 py-8 bg-gradient-to-r from-gray-100 to-blue-200 text-gray-800 flex'>
       <div className='bg-teal-600 rounded p-4 gap-8 h-screen w-3/6'>
       <img src={book.url} alt="book image" className='h-[60vh]'/>
       </div>
       <div className='p-4 w-3/6'>
       <h1>{book.title}</h1>
       <p>{book.author}</p>
       <p>{book.desc}</p>
       <p>{book.language}</p>
       </div>
    </div>
  )
}

export default ViewBookDetails
