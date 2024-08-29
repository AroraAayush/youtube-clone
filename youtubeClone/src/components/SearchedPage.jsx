import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

function SearchedPage() {
    const {searched}=useParams();
    const [searchedVideos,setSearchedVideos]=useState([]);
    useEffect(()=>{
        const getVideos=async()=>{
          const response=await fetchData(`https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${searched}&maxResults=50&order=date`);
          console.log(response);
          setSearchedVideos(response)
        //   dispatch(changeFilteredContent(response));
        }
        getVideos();
      },[searched])
  return (
    
      <div className='h-screen overflow-y-scroll scrollbar-none flex flex-col justify-start items-start gap-y-8'>
      <div className=' ml-5 text-4xl font-bold'>Search Results for <span className='text-red-600 capitalize'>{searched}</span> </div>
      {searchedVideos && searchedVideos.items && 
      <div className=' mt-3 mb-24 flex flex-wrap gap-x-6  gap-y-6 justify-start items-start mx-2'>
        {searchedVideos && searchedVideos.items && searchedVideos.items.map((video)=>(
        <>
        {video.id.videoId &&<VideoCard key={video.id.videoId} video={video}/>}
        {video.id.channelId &&<ChannelCard key={video.id.channelId} channel={video}/>}
        </>
      ))}
        </div>}
      </div>
  )
}

export default SearchedPage
