import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

import loading from '../assets/lottie/loading.json'
function Loader() {
   
  return (
    <div className='w-full flex justify-center mt-6'>
    <div className='w-64'>
      <Player
      src={loading}
      autoplay
      loop
      />
    </div>
    </div>
  )
}

export default Loader
