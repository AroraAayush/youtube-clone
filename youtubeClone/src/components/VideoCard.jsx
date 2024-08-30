import React from 'react'
import { GoVerified } from "react-icons/go";
import { Link } from 'react-router-dom';

function VideoCard({video,isHomePage}) {
  return (
    <Link to={`/video/${video.id.videoId}`}> <div className=' hover:border-2 hover:border-white/10 hover:shadow-xl bg-neutral-800/30 rounded-lg shadow-lg justify-center items-center flex flex-col   px-5 py-4'>
        
        <div className={`cursor-pointer ${isHomePage==true?"md:min-w-64 md:w-64 md:min-h-48 md:h-48  lg:min-w-72 lg:w-72 lg:min-h-56 lg:h-56   xl:min-w-80 xl:w-80 xl:min-h-60 xl:h-60  ":"min-w-80 w-80 min-h-52 h-52"}`}>
        <img src={video?.snippet?.thumbnails?.high?.url || video?.snippet?.thumbnails?.default?.url} alt="" className={`${isHomePage==true?"xl:min-w-80:w-80:min-h-60:h-60 lg:min-h-56:h-56:min-w-72:w-72  md:min-w-64:w-64:min-h-48:h-48 ":"min-w-80 w-80 min-h-52 h-52"}object-cover `} />
        </div>
        <div className='mt-3 '>
        <span className={`cursor-pointer ${isHomePage==true?"md:w-64 xl:w-80 lg:w-72 ":" w-80"} max-h-14 leading-relaxed overflow-hidden text-left block text-wrap text-base font-semibold tracking-wider `}>
            {video?.snippet.title}
        </span>
        <Link to={`/channel/${video.snippet.channelId}`}><span className={`cursor-pointer ${isHomePage==true?"md:w-64 xl:w-80 lg:w-72":"w-80"}  text-left  text-sm font-normal flex flex-row gap-x-1 items-center`}>
            <span>{video?.snippet.channelTitle}</span>
            <GoVerified className='text-base pt-1'/>
        </span></Link>
        </div>
        
      
    </div>
    </Link>
  )
}

export default VideoCard
