import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import noInternet from '../assets/lottie/nointernet.json'
function NoInternet() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-96'>
         <Player
      src={noInternet}
      autoplay
      loop
      />
      </div>
    </div>
  )
}

export default NoInternet
