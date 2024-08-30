import React from 'react'
import {SideBar,HomeFeed} from './index'
function Home() {
  return (
    <div className=' w-full h-[calc(100%-5rem)] flex md:flex-row flex-col '>
      <SideBar/>
      <HomeFeed/>
    </div>
  )
}

export default Home
