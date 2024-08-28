import React from 'react'
import { GoVerified } from "react-icons/go";
import { Link } from 'react-router-dom';

function VideoCard({video}) {
  return (
    <div className=' hover:border-2 hover:border-white/10 hover:shadow-xl bg-neutral-800/30 rounded-lg shadow-lg justify-center items-center flex flex-col   px-5 py-4'>
        
        <div className='cursor-pointer min-w-80 w-80 min-h-52 h-52  '>
        <img src={video.thumbnails.high.url} alt="" className='min-w-80 w-80 min-h-52 h-52 object-cover ' />
        </div>
        <div className='mt-3 '>
        <span className='cursor-pointer w-80 max-h-14 leading-relaxed overflow-hidden text-left block text-wrap text-base font-semibold tracking-wider '>
            {video.title}
        </span>
        <Link to={`/channel/${video?.channelId}`}><span className=' cursor-pointer w-80  text-left  text-sm font-normal flex flex-row gap-x-1 items-center'>
            <span>{video.channelTitle}</span>
            <GoVerified className='text-base pt-1'/>
        </span></Link>
        </div>
        
      
    </div>
  )
}

export default VideoCard
