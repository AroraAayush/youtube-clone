import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { BASEURL, fetchData } from '../utils/fetchData';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import Loader from './Loader';

function SearchedPage() {
    const {searched}=useParams();
    const [searchedVideos,setSearchedVideos]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
      setLoading(true);
        const getVideos=async()=>{
          const response=await fetchData(`${BASEURL}/search?part=snippet&q=${searched}&maxResults=50&order=date`);
          //console.log(response);
          setSearchedVideos(response)
          setLoading(false);
        //   dispatch(changeFilteredContent(response));
        }
        getVideos();
      },[searched])
  return (
    
      <div className='h-screen overflow-y-scroll scrollbar-none flex flex-col justify-start items-start gap-y-8'>
      <div className=' ml-5 text-4xl font-bold'>Search Results for <span className='text-red-600 capitalize'>{searched}</span> </div>
      {loading==true?<div className='w-full h-full flex justify-center items-center'><Loader/></div>:<>
        {searchedVideos && searchedVideos.items && 
      <div className=' mt-3 mb-24 flex flex-wrap xl:gap-x-6:gap-y-4 lg:gap-x-4:gap-y-3 mlg:gap-x-4:gap-y-3 md:gap-x-3:gap-y-2 sm:gap-x-3:gap-y-2 gap-y-3 justify-center items-start mx-2'>
        {searchedVideos && searchedVideos.items && searchedVideos.items.map((video)=>(
        <>
        {video.id.videoId &&<VideoCard key={video.id.videoId} video={video} isHomePage={false}/>}
        {video.id.channelId &&<ChannelCard key={video.id.channelId} channel={video} channelPage={false}/>}
        </>
      ))}
        </div>}
      </>}
      
     
      </div>
  )
}

export default SearchedPage
