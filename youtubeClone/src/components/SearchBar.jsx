import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

function SearchBar() {
  return (
    <div className='flex items-center'>
      <button className='text-black bg-white rounded-l-xl px-3 min-h-9 '><IoSearchSharp className='text-xl' /></button>
      <input type="search" className='text-black outline-none mr-12 w-80 px-1 min-h-9 rounded-r-xl' placeholder='Type to search...' />
    </div>
  )
}

export default SearchBar
