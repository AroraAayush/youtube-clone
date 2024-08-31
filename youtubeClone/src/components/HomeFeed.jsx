import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { options,BASEURL ,fetchData} from '../utils/fetchData';
import { changeFilteredContent } from '../store/youtubeSlice';
import VideoCard from './VideoCard';
import {ChannelCard, Loader} from './index'
function HomeFeed() {
  const category=useSelector((state)=>state.category);
  const [videos,setVideos]=useState([]);
  const [loading,setLoading]=useState(true);
  const dispatch=useDispatch();
  //console.log(String(import.meta.env.VITE_RAPID_API_KEY));
  useEffect(()=>{
    setLoading(true);
    const getVideos=async()=>{
      const response=await fetchData(`${BASEURL}/search?part=snippet&q=${category.name}&maxResults=50&order=date`);
      console.log(response);
      setVideos(response)
      setLoading(false);
      dispatch(changeFilteredContent(response));
    }
    getVideos();
  },[category])
  return (
<div className='md:w-[calc(100%-11rem)] w-screen md:h-[calc(100%-15px)] h-[calc(100%-5rem)] flex flex-col justify-start items-start gap-y-8'>
<div className='w-full ml-5 lg:text-4xl md:lg:text-3xl text-2xl font-bold md:mt-0 mt-3'><span className='text-red-600 capitalize'>{category.name}</span> Videos</div>
<div className='w-full h-full'>
{loading==true?<div className=' w-full h-full flex justify-center items-center'><Loader/></div>:<div className='w-full md:h-[95%] h-[90%]  overflow-y-scroll overflow-x-hidden scrollbar-none   flex flex-wrap gap-x-3 gap-y-4 justify-center items-center'>
      {videos && videos.items && videos.items.map((video)=>(
        <div className='w-full min-w-full sm:w-[47%] sm:min-w-[47%] m2lg:min-w-[32%] m2lg:w-[32%] xl:min-w-[24%] xl:w-[24%] '>
        {video.id.videoId &&<VideoCard key={video.id.videoId} video={video} isHomePage={true}/>}
        {video.id.channelId &&<ChannelCard key={video.id.channelId} channel={video} channelPage={false}/>}
        </div>
      ))}
      </div>}
</div>
    
        
      
    </div>
  )
}

export default HomeFeed





// Breakpoint prefix	Minimum width	CSS
// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px