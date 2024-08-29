import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../utils/fetchData';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';
function ChannelPage() {
    const param=useParams();
    const channelId=param.channelId
    const [channelDetails,setChannelDetails]=useState({});
    const [channelVideos,setChannelVideos]=useState({});
    useEffect(()=>{

        const getChannelDetails=async ()=>{
            const channelDets=await fetchData(`https://youtube-v31.p.rapidapi.com/channels?part=snippet&id=${channelId}`)
            console.log(channelDets);
            setChannelDetails(channelDets);  
        }
        const getChannelVideos=async ()=>{
            const channelVids=await fetchData(`https://youtube-v31.p.rapidapi.com/search?channelId=${channelId}&order=date&part=snippet&maxResults=50
`)
            console.log(channelVids);
            setChannelVideos(channelVids);  
        }
        
        getChannelDetails();
        getChannelVideos();
    },[channelId])
  return (
    <div className='overflow-y-scroll overfl0w-x-hidden scrollbar-none  h-screen'>
      <div className='min-h-1/4 h-1/4 bg-gradient-to-r from-indigo-500 to-cyan-500 '></div>
      {channelDetails && channelDetails.items  && <ChannelCard channel={channelDetails.items[0]} channelPage={true}/>}
      {channelVideos && channelVideos.items && 
      <div className='mt-3 mb-24 flex flex-wrap gap-x-6  gap-y-6 justify-start items-start mx-2'>{channelVideos?.items.map((video)=>(
        <VideoCard key={video.id.videoId} video={video}/>
      ))}</div>}
    </div>
  )
}

export default ChannelPage
