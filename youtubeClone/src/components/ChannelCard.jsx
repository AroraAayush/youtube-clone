import React, { useEffect, useState } from 'react'
import { GoVerified } from 'react-icons/go'
import { Link } from 'react-router-dom'
function ChannelCard({channel,channelPage}) {
  console.log("Channel Opened : ",channel)
  const [channelDets,setChannelDets]=useState({});
  useEffect(()=>{
    console.log(channel);
    setChannelDets(channel)
  },[channel])
  return (
    <Link to={`/channel/${channelDets?.id?.channelId}`}>
    <div className={`${channelPage==false?"":"md:-mt-20 -mt-24"} shadow-lg cursor-pointer flex flex-col justify-center items-center px-3 min-w-80`}>
      <img src={channelDets?.snippet?.thumbnails?.high.url} alt="" className='rounded-full object-cover min-h-44 h-44 '/>
      <div className='flex flex-row mt-3 gap-x-2 justify-center items-end'>
      <span className={`${channelPage==false?"":"text-xl"}`}>{channelDets?.snippet?.channelTitle || channelDets?.snippet?.title}</span>
      <GoVerified className='text-base mb-1 '/>
      </div>
      {channelDets?.statistics && <span className='text-base font-light mt-2'>{Number(channelDets?.statistics?.subscriberCount).toLocaleString()} subscribers</span>
      }
    </div>
    </Link>
    
  )
}

export default ChannelCard
