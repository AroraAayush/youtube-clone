import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { options,BASEURL ,fetchData} from '../utils/fetchData';
import { changeFilteredContent } from '../store/youtubeSlice';
import VideoCard from './VideoCard';
import {ChannelCard} from './index'
function HomeFeed() {
  const category=useSelector((state)=>state.category);
  const [videos,setVideos]=useState([]);
  const dispatch=useDispatch();
  console.log(String(import.meta.env.VITE_RAPID_API_KEY));
  useEffect(()=>{
    const getVideos=async()=>{
      const response=await fetchData(`https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${category.name}&maxResults=50&order=date`);
      console.log(response);
      setVideos(response)
      dispatch(changeFilteredContent(response));
    }
    getVideos();
  },[category])
  return (
<div className='flex flex-col justify-start items-start gap-y-8'>
<div className='ml-5 text-4xl font-bold'><span className='text-red-600 capitalize'>{category.name}</span> Videos</div>
    <div className='overflow-y-scroll overflow-x-hidden scrollbar-none  flex flex-wrap gap-x-6  gap-y-4 justify-center items-center mx-2'>
      {videos && videos.items && videos.items.map((video)=>(
        <>
        {video.id.videoId &&<VideoCard key={video.id.videoId} video={video.snippet}/>}
        {video.id.channelId &&<ChannelCard key={video.id.channelId} channel={video}/>}
        </>
      ))}
    </div>
    </div>
  )
}

export default HomeFeed
