import React from 'react'
import youtubeLogo from '../assets/ytlogo.png'
import { Link } from 'react-router-dom'
export default function Logo() {
  return (
    
    <Link to={'/'}>
    <div>
      <img src={youtubeLogo} className='w-24' alt="youtubeLogo" />
    </div>
    </Link>
    
  )
}
