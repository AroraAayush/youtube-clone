import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Header,Footer,Home, ChannelPage, SearchedPage,VideoDetail, NoInternet} from './components/index'
import { useDispatch,useSelector } from 'react-redux'
import { changeStatus } from './store/youtubeSlice'

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    console.log("checking network connection")
    window.addEventListener('online', ()=> {dispatch(changeStatus(true))})
    window.addEventListener('offline', ()=> {dispatch(changeStatus(false))})

    return ()=>{
        window.removeEventListener('online', ()=> dispatch(changeStatus(true)))
        window.removeEventListener('offline', ()=> dispatch(changeStatus(false)))
    }
},[])
const status=useSelector((state)=>state.status)
  return (
    <>    {status==true? <div className='text-white h-screen overflow-hidden '>
      <div className='fixed h-full w-full top-0 -z-10 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' >
        
        </div>
        
       
      <BrowserRouter>
      <Header/>
      
      <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/channel/:channelId' element={<ChannelPage/>} />
  <Route path='/search/:searched' element={<SearchedPage/>} />
  <Route path='/video/:videoId' element={<VideoDetail/>} />
      </Routes>
      <Footer/>
      
      </BrowserRouter>
      </div> :<div><NoInternet/></div>}</>

    
  )
}

export default App
