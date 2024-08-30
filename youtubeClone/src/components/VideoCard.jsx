//     <Link to={`/video/${video.id.videoId}`}> <div className='sm:w-auto hover:border-2 hover:border-white/10 hover:shadow-xl bg-neutral-800/30 rounded-lg shadow-lg justify-center items-center flex flex-col   sm:px-5 py-4'>
        
//         <div className={`cursor-pointer ${isHomePage==true?" sm:min-w-64 sm:w-64 sm:min-h-48 sm:h-48   md:min-w-64 md:w-64 md:min-h-48 md:h-48  lg:min-w-72 lg:w-72 lg:min-h-56 lg:h-56   xl:min-w-80 xl:w-80 xl:min-h-60 xl:h-60  ":"min-w-80 w-80 min-h-52 h-52"}`}>
//         <img src={video?.snippet?.thumbnails?.high?.url || video?.snippet?.thumbnails?.default?.url} alt="" className={`${isHomePage==true?"xl:min-w-80:w-80:min-h-60:h-60 lg:min-h-56:h-56:min-w-72:w-72  md:min-w-64:w-64:min-h-48:h-48 sm:min-w-64 sm:w-64 sm:min-h-48 sm:h-48   ":"min-w-80 w-80 min-h-52 h-52"}object-cover `} />
//         </div>
//         <div className='mt-3 '>
//         <span className={`cursor-pointer ${isHomePage==true?" sm:w-64 md:w-64 xl:w-80 lg:w-72 ":" w-80"} max-h-14 leading-relaxed overflow-hidden text-left block text-wrap text-base font-semibold tracking-wider `}>
//             {video?.snippet.title}
//         </span>
//         <Link to={`/channel/${video.snippet.channelId}`}><span className={`cursor-pointer ${isHomePage==true?" sm:w-64 md:w-64 xl:w-80 lg:w-72":"w-80"}  text-left  text-sm font-normal flex flex-row gap-x-1 items-center`}>
//             <span>{video?.snippet.channelTitle}</span>
//             <GoVerified className='text-base pt-1'/>
//         </span></Link>
//         </div>
        
      
//     </div>
//     </Link>
//   )
// }

// export default VideoCard








import React from 'react'
import { GoVerified } from "react-icons/go";
import { Link } from 'react-router-dom';

function VideoCard({video,isHomePage}) {
  return (
    <Link to={`/video/${video.id.videoId}`}> <div className=' hover:border-2 hover:border-white/10 hover:shadow-xl bg-neutral-800/30 rounded-lg shadow-lg justify-center items-center flex flex-col px-2 sm:px-5 py-4'>
        
        <div className={`cursor-pointer flex justify-center items-center ${isHomePage==true?"min-w-[100%] w-[100%] min-h-56 h-56 sm:min-w-64 sm:w-64 sm:min-h-48 sm:h-48  md:min-w-64 md:w-64 md:min-h-48 md:h-48  lg:min-w-72 lg:w-72 lg:min-h-56 lg:h-56 xl:min-w-80 xl:w-80 xl:min-h-60 xl:h-60  ":"mlg:min-w-80 mlg:w-80 mlg:min-h-52 mlg:h-52 lg:min-w-72 lg:w-72 lg:min-h-52 lg:h-52 md:min-w-64 md:w-64 md:min-h-48 md:h-48 sm:min-w-[245px] sm:w-[245px] sm:min-h-48 sm:h-48 min-w-[100%] w-[100%] min-h-56 h-56 "}`}>
        <img src={video?.snippet?.thumbnails?.high?.url || video?.snippet?.thumbnails?.default?.url} alt="" className={`mr-4 ${isHomePage==true?" xl:min-w-80:w-80:min-h-60:h-60 lg:min-h-56:h-56:min-w-72:w-72  md:min-w-64:w-64:min-h-48:h-48 sm:min-w-64:w-64:min-h-48:h-48 min-w-[calc(100%-15px)] w-[calc(100%-15px)] min-h-56 h-56 ":"mlg:min-w-80 mlg:w-80 mlg:min-h-52 mlg:h-52 lg:min-w-72 lg:w-72 lg:min-h-52 lg:h-52 md:min-w-64 md:w-64 md:min-h-48 md:h-48 sm:min-w-[245px] sm:w-[245px] sm:min-h-48 sm:h-48 min-w-[calc(100%-15px)] w-[calc(100%-15px)] min-h-56 h-56 "} object-cover `} />
        </div>
        <div className='mt-3 '>
        <span className={`cursor-pointer ${isHomePage==true?" w-[calc(100%-50px)] sm:w-64 md:w-64 xl:w-80 lg:w-72 ":"mlg:w-80 lg:w-72 md:w-64 sm:w-[245px] w-[calc(100%-50px)]"} max-h-14 leading-relaxed overflow-hidden text-left block text-wrap text-base font-semibold tracking-wider `}>
            {video?.snippet.title}
        </span>
        <Link to={`/channel/${video.snippet.channelId}`}><span className={`cursor-pointer ${isHomePage==true?"w-[calc(100%-50px)] sm:w-64 md:w-64 xl:w-80 lg:w-72":"mlg:w-80 lg:w-72 md:w-64 sm:w-[245px] w-[calc(100%-50px)] "}  text-left  text-sm font-normal flex flex-row gap-x-1 items-center`}>
            <span>{video?.snippet.channelTitle}</span>
            <GoVerified className='text-base pt-1'/>
        </span></Link>
        </div>
        
      
    </div>
    </Link>
  )
}

export default VideoCard

