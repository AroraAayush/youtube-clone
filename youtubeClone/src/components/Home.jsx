import React from 'react'
import {SideBar,HomeFeed} from './index'
function Home() {
  return (
    <div className=' w-full h-[calc(100%-5rem)] flex flex-row '>
      <SideBar/>
      <HomeFeed/>
    </div>
  )
}

export default Home
