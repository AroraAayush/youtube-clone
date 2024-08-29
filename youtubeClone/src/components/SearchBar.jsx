import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
function SearchBar() {
  const navigate=useNavigate();
  const [searched,setSearched]=useState("");
  
  const handleSearch=()=>{
    if(searched)
    {
      navigate(`/search/${searched}`)
    }
  }

  return (
    <div className='flex items-center'>
      <button onClick={handleSearch} className='text-black bg-white rounded-l-xl px-3 min-h-9 '><IoSearchSharp className='text-xl' /></button>
      <input type="search" className='text-black outline-none mr-12 w-80 px-1 min-h-9 rounded-r-xl' placeholder='Type to search...' value={searched} onChange={(e)=>{setSearched(e.target.value)}}/>
    </div>
  )
}

export default SearchBar
