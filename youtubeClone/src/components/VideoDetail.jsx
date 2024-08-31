import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import {BASEURL, fetchData} from '../utils/fetchData'
import { GoVerified } from 'react-icons/go';
import {VideoCard} from './index'
function VideoDetail() {
    const {videoId}=useParams();
    const [videoDetails,setVideoDetails]=useState({});
    const [relatedVideos,setRelatedVideos]=useState({});
    useEffect(()=>{
      const getVideoDetails=async()=>{
        const response=await fetchData(`${BASEURL}/videos?part=snippet,statistics&id=${videoId}`);
        setVideoDetails(response);
        //console.log(response);
      }

      const getRelatedVideos=async()=>{
        const response=await fetchData(`${BASEURL}/search?part=snippet&relatedToVideoId=${videoId}&type=video`)
        //console.log(response);
        setRelatedVideos(response)
      }
      getVideoDetails();
      getRelatedVideos();
    },[videoId])
  return (
    <div className='h-screen  w-screen flex mlg:flex-row flex-col md:mx-2 lg:mx-0 items-center md:items-start md:justify-start overflow-y-scroll gap-y-5 '>
        
        <div className=' mx-2 shrink-0 mlg:w-[65%] w-[95%]  p-2 border-2 border-white/20 flex flex-col m2lg:h-[70%] lg:h-[75%] md:h-[65%] h-[50%] overflow-y-scroll scrollbar-none overflow-x-hidden'>
        
        <div className='w-full mlg:h-full h-full  overflow-y-scroll scrollbar-none'>
            <ReactPlayer  width="100%"
            height="100%" controls url={`https://www.youtube.com/watch?v=${videoId}`} className='w-full '/>
</div>
            {videoDetails && videoDetails.items && <div className=' mt-7 md:text-xl sm:text-lg text-base font-semibold pl-3'>{videoDetails.items[0].snippet?.title}</div>}
            {videoDetails && videoDetails.items && <Link to={`/channel/${videoDetails?.snippet?.channelId}`}> <div className='flex flex-row items-center gap-x-2 pl-2'> <div className=' mt-3 md:text-lg text-base'>{videoDetails.items[0].snippet?.channelTitle}</div> <GoVerified className='mt-3 text-lg '/> </div></Link>}
            {videoDetails && videoDetails.items  && <div className='mr-10 mb-6 w-[95%]  flex flex-row justify-end items-center gap-x-4'>
              <div className=' mt-1 md:text-lg text-base'>{String(videoDetails.items[0].statistics?.viewCount).toLocaleString()} views</div>
              <div className=' mt-1 md:text-lg text-base'>{String(videoDetails.items[0].statistics?.likeCount).toLocaleString() } likes</div>
              </div>}
            {videoDetails && videoDetails.items && <div className=' mt-2 text-base font-normal leading-relaxed pl-2 sm:block hidden'>{videoDetails.items[0].snippet?.description.slice(0,100)} ...</div>}  
            
            
</div>

<div className='mlg:w-[35%] w-100% mlg:h-[95%]  flex flex-col justify-start items-start'>
<div className='lg:text-4xl md:lg:text-3xl text-2xl font-bold pl-4 md:mt-0 mt-3'><span className='text-red-600'>Related </span>  Videos</div>
  {relatedVideos && relatedVideos.items && <div className='overflow-y-scroll scrollbar-none h-full w-full  flex flex-wrap justify-center items-center gap-x-3 gap-y-4 mlg:mb-12 mb-24'>{relatedVideos.items.map((video)=>(
    <div key={video.id.videoId } className='w-full min-w-full sm:w-[47%] sm:min-w-[47%] mlg:w-[97%] mlg:min-w-[97%] 2xl:w-[48%] 2xl:min-w-[48%] 4xl:min-w-[32%] 4xl:w-[32%] '>
      <VideoCard video={video} isHomePage={true}/>
    </div>
  ))}</div>}
</div>
</div>
  )
}

export default VideoDetail
