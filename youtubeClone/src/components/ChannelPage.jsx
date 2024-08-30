import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASEURL, fetchData } from '../utils/fetchData';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';
import Loader from './Loader';
function ChannelPage() {
    const param=useParams();
    const channelId=param.channelId
    const [loading,setLoading]=useState(true);
    console.log("Got channel Id : ",channelId)
    const [channelDetails,setChannelDetails]=useState({});
    const [channelVideos,setChannelVideos]=useState({});
    useEffect(()=>{

        const getChannelDetails=async ()=>{
            const channelDets=await fetchData(`${BASEURL}/channels?part=snippet,statistics&id=${channelId}`)
            console.log("Channel Details : ",channelDets);
            setChannelDetails(channelDets);  
            setLoading(false);
        }
        const getChannelVideos=async ()=>{
            const channelVids=await fetchData(`${BASEURL}/search?channelId=${channelId}&order=date&part=snippet&maxResults=50
`)
            //console.log(channelVids);
            setChannelVideos(channelVids);  
        }
        
        getChannelDetails();
        getChannelVideos();
    },[channelId])
  return (
    <div className='overflow-y-scroll overflow-x-hidden scrollbar-none  h-screen'>
      {loading==true?<div className='w-full h-full flex justify-center items-center'><Loader/></div>:<><div className='min-h-1/4 h-1/4 bg-gradient-to-r from-indigo-500 to-cyan-500 '></div>
      {channelDetails && channelDetails.items  && <ChannelCard channel={channelDetails.items} channelPage={true}/>}
      {channelVideos && channelVideos.items && 
      <div className=' w-screen mt-3 mb-24 flex flex-wrap xl:gap-x-6:gap-y-4 lg:gap-x-4:gap-y-3 mlg:gap-x-4:gap-y-3 md:gap-x-3:gap-y-2 sm:gap-x-3:gap-y-2 gap-y-3 justify-center px-2'>{channelVideos?.items.map((video)=>(
        <VideoCard key={video.id.videoId} video={video} isHomePage={false}/>
      ))}</div>}</>}
      
    </div>
  )
}

export default ChannelPage


// 'xs':'450px',
// 'sm': '600px',
// 'md': '768px',
// 'lg': '1024px',
// 'xl': '1300px',