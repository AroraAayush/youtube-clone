import React from 'react'
import {Logo,SearchBar} from './index'
function Header() {
  return (
    <div className=' mt-2 px-4 w-full flex flex-row justify-between items-center'>
      <Logo/>
      <SearchBar/>
    </div>
  )
}

export default Header
