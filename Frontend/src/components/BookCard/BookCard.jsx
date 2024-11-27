import React from 'react'
import {Link} from "react-router-dom"
function BookCard({book}) {
    console.log(book);
  return (
    <>
   <Link to={`/view-book-details/${book._id}`}>
    <div className='text-white bg-teal-700 rounded p-4 flex flex-col'>
        <div className='bg-gradient-to-r from-gray-100 to-blue-200 rounded flex flex items-center justify-center'>
            <img src={book.url} alt="book image" className="h-[30vh]"/>
        </div>
        <h2 className=' text-xl font-semibold'>{book.title}</h2>
        <p >Author:{book.author}</p>
         <p className='font-semibold'>Price:₹{book.price}</p>
    </div>
   </Link>
    </>
  )
}

export default BookCard;
