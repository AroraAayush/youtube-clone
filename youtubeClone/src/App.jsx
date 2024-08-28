import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Header,Footer,Home, ChannelPage } from './components/index'

function App() {
  return (
    <div className='text-white h-screen overflow-hidden '>
    <div className='fixed h-full w-full top-0 -z-10 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' >
      
      </div>
      
     
    <Header/>
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Home/>} />
<Route path='/channel/:channelId' element={<ChannelPage/>} />
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  )
}

export default App
