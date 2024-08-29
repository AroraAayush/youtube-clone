import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import {fetchData} from '../utils/fetchData'
import { GoVerified } from 'react-icons/go';
import {VideoCard} from './index'
function VideoDetail() {
    const {videoId}=useParams();
    const [videoDetails,setVideoDetails]=useState({});
    const [relatedVideos,setRelatedVideos]=useState({});
    useEffect(()=>{
      const getVideoDetails=async()=>{
        const response=await fetchData(`https://youtube-v31.p.rapidapi.com/videos?part=snippet,statistics&id=${videoId}`);
        setVideoDetails(response);
        // console.log(response);
      }

      const getRelatedVideos=async()=>{
        const response=await fetchData(`https://youtube-v31.p.rapidapi.com/search?part=snippet&relatedToVideoId=${videoId}&type=video`)
        console.log(response);
        setRelatedVideos(response)
      }
      getVideoDetails();
      getRelatedVideos();
    },[videoId])
  return (
    <div className='h-screen  w-screen flex flex-row mx-6 justify-start  '>
        
        <div className='w-3/4 p-2 border-2 border-white/20 flex flex-col  h-[90%] overflow-y-scroll scrollbar-none overflow-x-hidden'>
        
        <div className='w-full h-full'>
            <ReactPlayer  width="100%"
            height="600px" controls url={`https://www.youtube.com/watch?v=${videoId}`} className='w-full '/>
</div>
            {videoDetails && videoDetails.items && <div className=' mt-7 text-xl font-semibold'>{videoDetails.items[0].snippet?.title}</div>}
            {videoDetails && videoDetails.items && <div className='flex flex-row items-center gap-x-2'><div className=' mt-3 text-lg'>{videoDetails.items[0].snippet?.channelTitle}</div> <GoVerified className='mt-3 text-lg '/> </div>}
            {videoDetails && videoDetails.items  && <div className='mr-10 mb-6 w-[95%] flex flex-row justify-end items-center gap-x-4'>
              <div className=' mt-3 text-lg'>{String(videoDetails.items[0].statistics?.viewCount).toLocaleString()} views</div>
              <div className=' mt-3 text-lg'>{String(videoDetails.items[0].statistics?.likeCount).toLocaleString() } likes</div>
              </div>}
            
            
</div>

<div className='w-1/2'>

  {/* {relatedVideos && relatedVideos.items && <div className=' overflow-y-scroll scrollbar-none h-screen w-full  flex flex-wrap justify-center items-center'>{relatedVideos.items.map((video)=>(
    <div key={video.id.videoId}>
      <VideoCard video={video}/>
    </div>
  ))}</div>} */}
</div>
</div>
  )
}

export default VideoDetail
