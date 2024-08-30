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
    <div className='h-screen  w-screen flex flex-row mx-6 justify-start  '>
        
        <div className='w-[70%] p-2 border-2 border-white/20 flex flex-col  h-[88%] overflow-y-scroll scrollbar-none overflow-x-hidden'>
        
        <div className='w-full h-full  overflow-y-scroll scrollbar-none'>
            <ReactPlayer  width="100%"
            height="100%" controls url={`https://www.youtube.com/watch?v=${videoId}`} className='w-full '/>
</div>
            {videoDetails && videoDetails.items && <div className=' mt-7 text-xl font-semibold'>{videoDetails.items[0].snippet?.title}</div>}
            {videoDetails && videoDetails.items && <Link to={`/channel/${videoDetails?.snippet?.channelId}`}> <div className='flex flex-row items-center gap-x-2'> <div className=' mt-3 text-lg'>{videoDetails.items[0].snippet?.channelTitle}</div> <GoVerified className='mt-3 text-lg '/> </div></Link>}
            {videoDetails && videoDetails.items  && <div className='mr-10 mb-6 w-[95%] flex flex-row justify-end items-center gap-x-4'>
              <div className=' mt-1 text-lg'>{String(videoDetails.items[0].statistics?.viewCount).toLocaleString()} views</div>
              <div className=' mt-1 text-lg'>{String(videoDetails.items[0].statistics?.likeCount).toLocaleString() } likes</div>
              </div>}
            {videoDetails && videoDetails.items && <div className=' mt-2 text-base font-normal leading-relaxed'>{videoDetails.items[0].snippet?.description.slice(0,100)} ...</div>}  
            
            
</div>

<div className='w-[30%] h-[80%] '>
<div className='text-2xl font-bold pl-4 mb-3'><span className='text-red-600'>Related </span>  Videos</div>
  {relatedVideos && relatedVideos.items && <div className=' overflow-y-scroll scrollbar-none h-full w-full  flex flex-wrap justify-center items-center '>{relatedVideos.items.map((video)=>(
    <div key={video.id.videoId}>
      <VideoCard video={video} isHomePage={false}/>
    </div>
  ))}</div>}
</div>
</div>
  )
}

export default VideoDetail
