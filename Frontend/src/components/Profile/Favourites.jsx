import React,{useEffect,useState} from 'react'
import axios from "axios"
const headers={
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`,
};



function Favourites() {
    useEffect(()=>{
        const fetchFavBooks=async()=>{
            const res=await axios.get("http://localhost:1000/api/v1/get-fav-books",{headers});
            console.log(res.data.data);
        }
        fetchFavBooks();
    },[])
  return (
    <div>
      Favourites
    </div>
  )
}

export default Favourites
