
import React from 'react'
import { GoVerified } from "react-icons/go";
import { Link } from 'react-router-dom';

function VideoCard({video,isHomePage}) {
  return (
    <Link to={`/video/${video.id.videoId}`}> <div className=' hover:border-2 hover:border-white/10 hover:shadow-xl bg-neutral-800/30 rounded-lg shadow-lg justify-center items-center flex flex-col px-2 sm:px-5 py-4'>
        
        <div className={`cursor-pointer flex justify-center items-center min-w-[100%] w-[100%] min-h-56 h-56  sm:min-h-48 sm:h-48   mlg:min-h-[210px] mlg:h-[210px]  m2lg:min-h-56 m2lg:h-56 xl:min-h-60 xl:h-60  lg:min-h-60 lg:h-60 `}>
        <img src={video?.snippet?.thumbnails?.high?.url || video?.snippet?.thumbnails?.default?.url} alt="" className={` lg:min-h-60 lg:h-60   xl:min-h-60:h-60 m2lg:min-h-56 m2lg:h-56   mlg:min-h-[210px] mlg:h-[210px] sm:min-w-[100%] sm:w-[100%] sm:min-h-48 sm:h-48 min-w-[calc(100%-15px)] w-[calc(100%-15px)] min-h-56 h-56 object-cover `} />
        </div>
        <div className='mt-3 w-[calc(100%-15px)] '>
        <span className={`cursor-pointer w-[calc(100%-50px)] sm:w-[100%] max-h-14 leading-relaxed overflow-hidden text-left block text-wrap text-base font-semibold tracking-wider `}>
            {video?.snippet.title}
        </span>
        <Link to={`/channel/${video.snippet.channelId}`}><span className={`cursor-pointer w-[calc(100%-50px)] sm:w-[100%]   text-left  text-sm font-normal flex flex-row gap-x-1 items-center`}>
            <span>{video?.snippet.channelTitle}</span>
            <GoVerified className='text-base pt-1'/>
        </span></Link>
        </div>
        
      
    </div>
    </Link>


  )
}

export default VideoCard

